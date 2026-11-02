import { readFileSync } from "node:fs";
import { join } from "node:path";

export type CallSpeaker = "receptionist" | "intake" | "caller";

export type CallTurn = {
  speaker: CallSpeaker;
  label: string;
  start: string;
  text: string;
};

const LABELS: Record<CallSpeaker, string> = {
  receptionist: "Receptionist",
  intake: "Intake assistant",
  caller: "Caller",
};

type Cue = { start: number; end: number; text: string };

function parseTimestamp(stamp: string) {
  const clean = stamp.trim().replace(",", ".");
  const [hms, ms = "0"] = clean.split(".");
  const parts = hms.split(":").map(Number);
  const hours = parts.length === 3 ? parts[0] : 0;
  const minutes = parts.length === 3 ? parts[1] : parts[0];
  const seconds = parts.length === 3 ? parts[2] : parts[1];
  return hours * 3600 + minutes * 60 + seconds + Number(`0.${ms}`);
}

function formatClock(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${String(s).padStart(2, "0")}`;
}

function parseVtt(raw: string): Cue[] {
  const blocks = raw.replace(/^WEBVTT\s*/i, "").trim().split(/\n\s*\n/);
  const cues: Cue[] = [];

  for (const block of blocks) {
    const lines = block.split("\n").map((line) => line.trim()).filter(Boolean);
    const timeLine = lines.find((line) => line.includes("-->"));
    if (!timeLine) continue;
    const [startRaw, endRaw] = timeLine.split("-->").map((part) => part.trim());
    const text = lines
      .filter((line) => line !== timeLine && !/^\d+$/.test(line))
      .join(" ")
      .replace(/\s+/g, " ")
      .trim();
    if (!text) continue;
    cues.push({
      start: parseTimestamp(startRaw),
      end: parseTimestamp(endRaw),
      text,
    });
  }

  return cues;
}

function redact(text: string) {
  return text
    .replace(/\bBrooke,\s*the firm's virtual intake assistant/gi, "the firm's virtual intake assistant")
    .replace(/\bSage\b/gi, "")
    .replace(/\bBrooke\b/gi, "")
    .replace(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi, "")
    .replace(/\bAnd this is\s*,?\s*correct\?/i, "")
    .replace(/\bThanks for calling\s*\.\s*This is\s*\.?/i, "Thanks for calling.")
    .replace(/\bThis is\s*,\s*/gi, "This is ")
    .replace(/\s+/g, " ")
    .replace(/\s+\./g, ".")
    .replace(/\s+,/g, ",")
    .trim();
}

function isDropped(text: string) {
  const normalized = text.toLowerCase();
  if (!normalized) return true;
  if (normalized.includes("and this is") && normalized.includes("correct")) return true;
  if (/@/.test(text)) return true;
  return false;
}

function splitFusedCue(cue: Cue): Cue[] {
  if (/^eleven\b/i.test(cue.text) && /let me check/i.test(cue.text)) {
    return [
      { ...cue, text: "Eleven." },
      { ...cue, text: "Let me check for available appointment slots." },
    ];
  }
  if (/preferably in person/i.test(cue.text) && /\bperfect\b/i.test(cue.text)) {
    return [
      { ...cue, text: "Preferably in person in Sandy." },
      { ...cue, text: "Perfect." },
    ];
  }
  return [cue];
}

const CALLER_EXACT = new Set([
  "schedule an appointment",
  "first time",
  "jamie",
  "yes",
  "yes please",
  "no",
  "uh",
  "next friday",
  "eleven",
  "friday the ninth",
  "friday the ninth please",
  "preferably in person in sandy",
  "uh consultation appointment sure",
]);

function normalizeLine(text: string) {
  return text
    .toLowerCase()
    .replace(/[.,!?']/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function isCallerLine(text: string) {
  const normalized = normalizeLine(text);
  if (CALLER_EXACT.has(normalized)) return true;
  if (normalized.startsWith("its actually for friday")) return true;
  if (normalized.startsWith("uh consultation")) return true;
  return false;
}

function speakerFor(text: string, intakeStarted: boolean): CallSpeaker {
  if (isCallerLine(text)) return "caller";
  if (intakeStarted) return "intake";
  return "receptionist";
}

export function getCallTranscript(): CallTurn[] {
  const raw = readFileSync(
    join(process.cwd(), "public/media/unanswered-combined.vtt"),
    "utf8",
  );
  const cues = parseVtt(raw).flatMap(splitFusedCue);
  const turns: CallTurn[] = [];
  let intakeStarted = false;
  let skipNextYes = false;

  for (const cue of cues) {
    let text = redact(cue.text);
    if (isDropped(cue.text) || isDropped(text)) {
      skipNextYes = true;
      continue;
    }
    if (skipNextYes && /^yes\.?$/i.test(text)) {
      skipNextYes = false;
      continue;
    }
    skipNextYes = false;

    if (/virtual intake assistant/i.test(cue.text) || cue.start >= 39) {
      intakeStarted = true;
    }

    if (/this is\s*$/i.test(text) || /^this is\.?$/i.test(text)) {
      text = "Thanks for calling.";
    }

    const speaker = speakerFor(text, intakeStarted);
    const previous = turns.at(-1);

    if (previous && previous.speaker === speaker) {
      previous.text = `${previous.text} ${text}`.replace(/\s+/g, " ").trim();
      continue;
    }

    turns.push({
      speaker,
      label: LABELS[speaker],
      start: formatClock(cue.start),
      text,
    });
  }

  return turns;
}

export function transcriptPlainText(turns: CallTurn[] = getCallTranscript()) {
  return turns.map((turn) => `${turn.label}: ${turn.text}`).join("\n");
}
