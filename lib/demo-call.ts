import type { CallTurn } from "@/lib/call-transcript";

/**
 * The recorded demo call on the homepage. Transcribed from
 * public/media/demo-call-redacted.mp3 on 2026-10-23. The caller's email is
 * silent in the recording and marked as redacted below. The assistant's
 * spoken name was cut from the audio (0.55 s removed at 0:02), so the recording
 * says "This is the firm's virtual intake assistant." Audio was normalized to
 * -16 LUFS and re-encoded at 44.1 kHz.
 */
export const demoCall = {
  src: "/media/demo-call-redacted.mp3",
  captions: "/media/demo-call-redacted.vtt",
  durationSeconds: 175,
  durationLabel: "2:55",
  durationIso: "PT2M55S",
  recordedOn: "2026-10-23",
  title: "Bankruptcy intake call answered and booked by AI",
  description:
    "A caller asks for a consultation. The AI intake assistant asks the firm's qualifying questions, offers times, and books the appointment, with no staff involved.",
} as const;

export type DemoCallTurn = CallTurn & {
  /** Seconds into the recording when the turn starts. */
  at: number;
};

const LABELS: Record<CallTurn["speaker"], string> = {
  receptionist: "Receptionist",
  intake: "Intake assistant",
  caller: "Caller",
};

function turn(at: number, speaker: CallTurn["speaker"], text: string): DemoCallTurn {
  const m = Math.floor(at / 60);
  const s = Math.floor(at % 60);
  return {
    at,
    speaker,
    label: LABELS[speaker],
    start: `${m}:${String(s).padStart(2, "0")}`,
    text,
  };
}

export const demoCallTurns: DemoCallTurn[] = [
  turn(0.2, "intake", "You're calling Morrison Law Group. This is the firm's virtual intake assistant. How can I help you today?"),
  turn(9.15, "caller", "I need to make an appointment for a consultation."),
  turn(13.75, "intake", "Sure. May I have your first and last name?"),
  turn(17.95, "caller", "Steven."),
  turn(20.75, "intake", "And this is Steven Smith. Thank you, Steven. Will you be filing individually or jointly with a spouse?"),
  turn(29.25, "caller", "Individually."),
  turn(32.65, "intake", "Got it. Do you currently own a business or have you owned one in the last few years?"),
  turn(38.85, "caller", "No."),
  turn(40.95, "intake", "Okay. Now let's get you a free consultation. What day and time work best for you?"),
  turn(51.05, "caller", "Thursday or Friday would be best."),
  turn(54.55, "intake", "We can do Zoom or meet in Sandy, Ogden, or Orem. What works best for you?"),
  turn(62.15, "caller", "Zoom."),
  turn(67.45, "intake", "Got it. Zoom works. What time of day on Thursday or Friday works best for you? Morning or afternoon?"),
  turn(74.85, "caller", "After three o'clock."),
  turn(77.65, "intake", "Let's look at Thursday first. Please confirm the Thursday date you mean, and I'll check for available appointment slots after three in the afternoon."),
  turn(90.75, "caller", "Yeah, this Thursday would be great, after three."),
  turn(95.15, "intake", "Let me check for available appointment slots. One moment. I can offer Thursday at three in the afternoon or Thursday at four. Which time would you like me to book?"),
  turn(106.95, "caller", "Four o'clock."),
  turn(109.05, "intake", "Great. I can book the four in the afternoon slot. What's the best email to send your intake questionnaire to? Please say it slowly, and I'll repeat it back."),
  turn(118.95, "caller", "(Email redacted.)"),
  turn(131.25, "intake", "Let me book the appointment for you. Perfect. One moment while I finalize that for you. You're all set for Thursday at four in the afternoon. I have your email, and you'll get the intake form and a confirmation text shortly. Please complete the form before your appointment so the attorney can prepare. Is there anything else I can help with, Steven?"),
  turn(162.55, "caller", "Thank you. Nope."),
  turn(168.95, "intake", "You're very welcome, Steven. Thank you for calling Morrison Law Group. Have a great afternoon."),
];
