/**
 * Moments from the recorded demo call in public/media/demo-call-redacted.mp3.
 * Times are seconds from the start of the recording. Every quote is a
 * transcript line at that timestamp (see lib/demo-call.ts); nothing here is
 * invented.
 */
import { demoCall } from "@/lib/demo-call";

export type CallMoment = {
  /** Seconds into the recording. */
  at: number;
  /** Who is speaking, for the caption and the marker color. */
  speaker: "receptionist" | "intake" | "caller";
  /** What was said at this moment. */
  said: string;
  /** Short event label drawn on the line. Omit for spoken-only moments. */
  label?: string;
  /** Where the event label sits relative to the line. */
  place?: "above" | "below";
};

export const CALL_DURATION_SECONDS = demoCall.durationSeconds;

export const callMoments: CallMoment[] = [
  {
    at: 0.2,
    speaker: "intake",
    said: "You're calling Morrison Law Group. This is the firm's virtual intake assistant. How can I help you today?",
    label: "Answered.",
    place: "above",
  },
  { at: 9.15, speaker: "caller", said: "I need to make an appointment for a consultation." },
  { at: 14.65, speaker: "intake", said: "May I have your first and last name?" },
  {
    at: 24.45,
    speaker: "intake",
    said: "Will you be filing individually or jointly with a spouse?",
    label: "Qualified by your criteria.",
    place: "below",
  },
  { at: 29.25, speaker: "caller", said: "Individually." },
  {
    at: 33.55,
    speaker: "intake",
    said: "Do you currently own a business or have you owned one in the last few years?",
  },
  {
    at: 41.95,
    speaker: "intake",
    said: "Now let's get you a free consultation. What day and time work best for you?",
    label: "Scheduling.",
    place: "above",
  },
  { at: 51.05, speaker: "caller", said: "Thursday or Friday would be best." },
  { at: 62.15, speaker: "caller", said: "Zoom." },
  {
    at: 98.35,
    speaker: "intake",
    said: "I can offer Thursday at three in the afternoon or Thursday at four.",
  },
  { at: 106.95, speaker: "caller", said: "Four o'clock." },
  {
    at: 138.55,
    speaker: "intake",
    said: "You're all set for Thursday at four in the afternoon.",
    label: "Consultation booked.",
    place: "above",
  },
  {
    at: 170.85,
    speaker: "intake",
    said: "Thank you for calling Morrison Law Group. Have a great afternoon.",
  },
];

export const speakerLabel: Record<CallMoment["speaker"], string> = {
  receptionist: "Receptionist",
  intake: "Intake assistant",
  caller: "Caller",
};

export function formatClock(seconds: number) {
  const whole = Math.max(0, Math.floor(seconds));
  const m = Math.floor(whole / 60);
  const s = whole % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}
