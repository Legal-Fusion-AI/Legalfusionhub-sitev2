import { execFileSync } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const rawDir = path.join(root, "scripts/voice-demo/raw");
const workDir = path.join(root, "scripts/voice-demo/work");
const outMp3 = path.join(root, "public/voice-demo/bankruptcy-call.mp3");
const outData = path.join(root, "components/voice-demo-data.ts");

const SR = 44100;
const TARGET = 90;

const turns = [
  {
    speaker: "agent",
    file: "00.mp3",
    text: "Thank you for calling Morgan and Reyes Law. This is Ava, the firm's virtual intake assistant. How can I help you today?",
  },
  {
    speaker: "caller",
    file: "01.mp3",
    text: "Hi, yeah... um, I've been getting a lot of calls from creditors, and I think I need to talk to someone about bankruptcy.",
  },
  {
    speaker: "agent",
    file: "02.mp3",
    text: "I'm sorry you're dealing with that. You called the right place. May I have your first and last name?",
  },
  { speaker: "caller", file: "03.mp3", text: "Sure. Daniel Brooks." },
  {
    speaker: "agent",
    file: "04.mp3",
    text: "Thanks, Daniel. Will you be filing individually, or jointly with a spouse?",
  },
  { speaker: "caller", file: "05.mp3", text: "Jointly. With my wife, Maria." },
  {
    speaker: "agent",
    file: "06.mp3",
    text: "Got it, a joint filing. Do either of you currently own a business, or have you owned one in the last few years?",
  },
  {
    speaker: "caller",
    file: "07.mp3",
    text: "I had a small landscaping company. I closed it last spring.",
  },
  {
    speaker: "agent",
    file: "08.mp3",
    text: "That's helpful, thank you. The attorney will review those business debts separately. Now, let's get you a free consultation. What day and time work best for you and Maria?",
  },
  {
    speaker: "caller",
    file: "09.mp3",
    text: "Weekdays after five, usually. Maybe Thursday?",
  },
  {
    speaker: "agent",
    file: "10.mp3",
    text: "I have Thursday at five-thirty p.m. Would you like me to book that?",
  },
  { speaker: "caller", file: "11.mp3", text: "Yes, that works." },
  {
    speaker: "agent",
    file: "12.mp3",
    text: "You're all set for Thursday at five-thirty. What's the best email to send your bankruptcy intake questionnaire?",
  },
  {
    speaker: "caller",
    file: "13.mp3",
    text: "It's daniel dot brooks... B-R-O-O-K-S... at gmail dot com.",
  },
  {
    speaker: "agent",
    file: "14.mp3",
    text: "Perfect. daniel dot brooks at gmail dot com. You'll receive the intake form and a confirmation text in a few minutes. Please complete it before Thursday so the attorney can prepare. Is there anything else I can help with?",
  },
  { speaker: "caller", file: "15.mp3", text: "No, that's everything. Thanks so much." },
  {
    speaker: "agent",
    file: "16.mp3",
    text: "You're welcome, Daniel. Talk to you Thursday. Take care.",
  },
];

function ffmpeg(args) {
  execFileSync("ffmpeg", ["-y", "-hide_banner", "-loglevel", "error", ...args], {
    stdio: "inherit",
  });
}

function probe(file) {
  const out = execFileSync(
    "ffprobe",
    ["-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", file],
    { encoding: "utf8" },
  );
  return Number(out.trim());
}

function silence(file, seconds) {
  ffmpeg([
    "-f",
    "lavfi",
    "-i",
    `anullsrc=r=${SR}:cl=mono`,
    "-t",
    String(seconds),
    "-c:a",
    "pcm_s16le",
    file,
  ]);
}

mkdirSync(workDir, { recursive: true });
mkdirSync(path.dirname(outMp3), { recursive: true });

for (const [index, turn] of turns.entries()) {
  const input = path.join(rawDir, turn.file);
  const output = path.join(workDir, `turn-${String(index).padStart(2, "0")}.wav`);
  const trimmed = path.join(workDir, `trim-${String(index).padStart(2, "0")}.wav`);

  ffmpeg([
    "-i",
    input,
    "-af",
    "silenceremove=start_periods=1:start_duration=0.02:start_threshold=-40dB,areverse,silenceremove=start_periods=1:start_duration=0.04:start_threshold=-40dB,areverse",
    "-ar",
    String(SR),
    "-ac",
    "1",
    "-c:a",
    "pcm_s16le",
    trimmed,
  ]);

  const length = probe(trimmed);
  const fadeOut = Math.max(0, length - 0.02);

  if (turn.speaker === "caller") {
    ffmpeg([
      "-i",
      trimmed,
      "-f",
      "lavfi",
      "-i",
      `anoisesrc=color=pink:amplitude=0.02:sample_rate=${SR}:duration=${length + 0.2}`,
      "-filter_complex",
      `[0:a]highpass=f=300,lowpass=f=3400,aresample=8000,aresample=${SR},acompressor=threshold=-18dB:ratio=4:attack=4:release=70:makeup=4,afade=t=in:d=0.012,afade=t=out:st=${fadeOut}:d=0.018[v];` +
        `[1:a]lowpass=f=3200,volume=0.045[n];` +
        `[v][n]amix=inputs=2:duration=first:normalize=0,alimiter=limit=0.9`,
      "-ar",
      String(SR),
      "-ac",
      "1",
      "-c:a",
      "pcm_s16le",
      output,
    ]);
  } else {
    ffmpeg([
      "-i",
      trimmed,
      "-af",
      `loudnorm=I=-17:TP=-1.5:LRA=11,afade=t=in:d=0.012,afade=t=out:st=${fadeOut}:d=0.018`,
      "-ar",
      String(SR),
      "-ac",
      "1",
      "-c:a",
      "pcm_s16le",
      output,
    ]);
  }

  turn.wav = output;
  turn.duration = probe(output);
}

const ring = path.join(workDir, "ring.wav");
ffmpeg([
  "-f",
  "lavfi",
  "-i",
  `sine=frequency=440:sample_rate=${SR}:duration=1.15`,
  "-f",
  "lavfi",
  "-i",
  `sine=frequency=480:sample_rate=${SR}:duration=1.15`,
  "-filter_complex",
  "[0:a][1:a]amix=inputs=2:duration=first:normalize=0,volume=0.16,volume='if(lt(mod(t,0.62),0.38),1,0)':eval=frame,afade=t=in:d=0.015,afade=t=out:st=1.05:d=0.1",
  "-ar",
  String(SR),
  "-ac",
  "1",
  "-c:a",
  "pcm_s16le",
  ring,
]);

const hangup = path.join(workDir, "hangup.wav");
ffmpeg([
  "-f",
  "lavfi",
  "-i",
  `sine=frequency=480:sample_rate=${SR}:duration=0.09`,
  "-af",
  "volume=0.22,afade=t=in:d=0.005,afade=t=out:st=0.04:d=0.05",
  "-ar",
  String(SR),
  "-ac",
  "1",
  "-c:a",
  "pcm_s16le",
  hangup,
]);

const ringDuration = probe(ring);
const hangupDuration = probe(hangup);
const speech = turns.reduce((sum, turn) => sum + turn.duration, 0);
const leadIn = 0.28;
const tail = 0.22;
const gapCount = turns.length;
const gapBudget = Math.max(gapCount * 0.22, TARGET - speech - ringDuration - leadIn - hangupDuration - tail);
const gap = Math.min(0.58, Math.max(0.22, gapBudget / gapCount));

const pieces = [{ file: ring, duration: ringDuration }];
const lead = path.join(workDir, "lead.wav");
silence(lead, leadIn);
pieces.push({ file: lead, duration: leadIn });

const timed = [];
let cursor = ringDuration + leadIn;

turns.forEach((turn, index) => {
  const start = cursor;
  const end = cursor + turn.duration;
  timed.push({ speaker: turn.speaker, text: turn.text, start, end });
  pieces.push({ file: turn.wav, duration: turn.duration });
  cursor = end;
  const thisGap = index === turns.length - 1 ? tail : gap;
  const gapFile = path.join(workDir, `gap-${String(index).padStart(2, "0")}.wav`);
  silence(gapFile, thisGap);
  pieces.push({ file: gapFile, duration: thisGap });
  cursor += thisGap;
});

pieces.push({ file: hangup, duration: hangupDuration });

const listPath = path.join(workDir, "concat.txt");
writeFileSync(
  listPath,
  pieces.map((piece) => `file '${piece.file.replaceAll("'", "'\\''")}'`).join("\n"),
);

const wavOut = path.join(workDir, "call.wav");
const dryOut = path.join(workDir, "call-dry.wav");
ffmpeg(["-f", "concat", "-safe", "0", "-i", listPath, "-c:a", "pcm_s16le", dryOut]);

const dryDuration = probe(dryOut);
ffmpeg([
  "-i",
  dryOut,
  "-f",
  "lavfi",
  "-i",
  `anoisesrc=color=white:amplitude=0.02:sample_rate=${SR}:duration=${dryDuration + 0.2}`,
  "-filter_complex",
  `[1:a]highpass=f=2200,lowpass=f=9000,volume=0.045[grain];` +
    `[0:a][grain]amix=inputs=2:duration=first:normalize=0,alimiter=limit=0.95`,
  "-ar",
  String(SR),
  "-ac",
  "1",
  "-c:a",
  "pcm_s16le",
  wavOut,
]);
ffmpeg(["-i", wavOut, "-codec:a", "libmp3lame", "-q:a", "3", outMp3]);

const duration = probe(outMp3);
const pcm = execFileSync(
  "ffmpeg",
  ["-v", "error", "-i", outMp3, "-ac", "1", "-ar", "8000", "-f", "f32le", "pipe:1"],
  { maxBuffer: 64 * 1024 * 1024 },
);
const sampleCount = Math.floor(pcm.length / 4);
const bars = 64;
const peaks = [];
for (let bar = 0; bar < bars; bar += 1) {
  const start = Math.floor((bar * sampleCount) / bars);
  const end = Math.floor(((bar + 1) * sampleCount) / bars);
  let max = 0;
  for (let index = start; index < end; index += 1) {
    max = Math.max(max, Math.abs(pcm.readFloatLE(index * 4)));
  }
  peaks.push(max);
}
const loudest = Math.max(...peaks, 0.001);
const normalized = peaks.map((peak) => Math.round((peak / loudest) * 1000) / 1000);

const round = (value) => Math.round(value * 1000) / 1000;

const data = `export type VoiceSpeaker = "agent" | "caller";

export type VoiceTurn = {
  speaker: VoiceSpeaker;
  text: string;
  start: number;
  end: number;
};

export const audioSrc = "/voice-demo/bankruptcy-call.mp3?v=${round(duration)}";

export const duration = ${round(duration)};

export const peaks = ${JSON.stringify(normalized)} as const;

export const turns: VoiceTurn[] = ${JSON.stringify(
  timed.map((turn) => ({
    speaker: turn.speaker,
    text: turn.text,
    start: round(turn.start),
    end: round(turn.end),
  })),
  null,
  2,
)};
`;

writeFileSync(outData, data);
console.log(
  `Wrote ${outMp3} (${round(duration)}s) and ${path.relative(root, outData)}. Speech ${round(speech)}s, gap ${round(gap)}s.`,
);
