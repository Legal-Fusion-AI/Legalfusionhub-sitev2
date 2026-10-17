import { audioSrc } from "@/components/voice-demo-data";

export type ClipSpeaker = "owen" | "donna" | "caller";

export type ClipLine = {
  speaker: ClipSpeaker;
  text: string;
};

/**
 * A clip is a short, single-topic slice of one real interaction. Clips stay
 * inside 10 to 15 seconds.
 *
 * `audio` is optional. When it points at a real asset the player trims the
 * file to `start`/`end`. When it is omitted the clip renders as a clearly
 * labeled placeholder: the transcript still reads, and `assetNeeded` names the
 * file to drop in. See ASSETS_NEEDED below for the full list.
 */
export type ExampleClip = {
  id: string;
  category: "Greeting" | "Info gathering" | "Calendaring" | "Follow-up";
  length: string;
  lines: ClipLine[];
  audio?: { src: string; start: number; end: number };
  assetNeeded?: string;
};

export type ExampleChannel = "call" | "text";

export type Example = {
  id: string;
  label: string;
  channel: ExampleChannel;
  employee: "owen" | "donna";
  summary: string;
  note?: string;
  clips: ExampleClip[];
};

const CALL_AUDIO = audioSrc;

export const examples: Example[] = [
  {
    id: "after-hours-call",
    label: "The 4:07 a.m. lead",
    channel: "call",
    employee: "owen",
    summary:
      "A creditor-pressured caller rings in at 4:07 a.m. Owen answers, gathers what the attorney needs, and books the consultation before sunrise.",
    clips: [
      {
        id: "greeting",
        category: "Greeting",
        length: "0:11",
        assetNeeded:
          "After-hours greeting recording in Owen's voice using the firm name, greeting, and slogan from setup.",
        lines: [
          {
            speaker: "owen",
            text: "Thank you for calling. This is Owen. You reached us day or night. How can I help?",
          },
          {
            speaker: "caller",
            text: "I keep getting calls from creditors. I think I need to talk to someone about bankruptcy.",
          },
        ],
      },
      {
        id: "info-gathering",
        category: "Info gathering",
        length: "0:13",
        audio: { src: CALL_AUDIO, start: 23.07, end: 35.84 },
        lines: [
          {
            speaker: "owen",
            text: "Will you be filing individually, or jointly with a spouse?",
          },
          { speaker: "caller", text: "Jointly. With my wife, Maria." },
          {
            speaker: "owen",
            text: "Got it, a joint filing. Does either of you own a business, or have you in the last few years?",
          },
        ],
      },
      {
        id: "calendaring",
        category: "Calendaring",
        length: "0:14",
        audio: { src: CALL_AUDIO, start: 49.6, end: 64.06 },
        lines: [
          { speaker: "caller", text: "Weekdays after five, usually. Maybe Thursday?" },
          {
            speaker: "owen",
            text: "I have Thursday at five-thirty. Would you like me to book that?",
          },
          { speaker: "caller", text: "Yes, that works." },
          {
            speaker: "owen",
            text: "You are all set for Thursday at five-thirty. What is the best email for the details?",
          },
        ],
      },
    ],
  },
  {
    id: "andrew-text",
    label: "Andrew's text at lunch",
    channel: "text",
    employee: "owen",
    summary:
      "Andrew texts the firm on his lunch break. Owen replies in seconds, learns what the attorney needs, and holds a consultation time. This is a text thread, not a call.",
    clips: [
      {
        id: "answer",
        category: "Greeting",
        length: "0:12",
        lines: [
          {
            speaker: "caller",
            text: "I need to talk to someone about filing bankruptcy.",
          },
          {
            speaker: "owen",
            text: "Happy to help, Andrew. Is this a personal filing, or a business one?",
          },
        ],
      },
      {
        id: "info-gathering",
        category: "Info gathering",
        length: "0:13",
        lines: [
          {
            speaker: "caller",
            text: "Personal. Credit cards, and a car payment I am behind on.",
          },
          {
            speaker: "owen",
            text: "Thank you. I will note the car loan so the attorney can review it with you.",
          },
        ],
      },
      {
        id: "calendaring",
        category: "Calendaring",
        length: "0:11",
        lines: [
          {
            speaker: "owen",
            text: "When works for a free consultation with the attorney?",
          },
          { speaker: "caller", text: "Thursday at 10:30 works." },
          { speaker: "owen", text: "You are booked for Thursday, 10:30 a.m." },
        ],
      },
    ],
  },
  {
    id: "no-show-nurture",
    label: "The Thursday no-show",
    channel: "text",
    employee: "donna",
    summary:
      "A booked consultation is missed. Donna reaches out the same day, keeps the lead warm, and gets a new time on the calendar.",
    clips: [
      {
        id: "follow-up",
        category: "Follow-up",
        length: "0:14",
        assetNeeded:
          "No-show follow-up text thread or voicemail in Donna's voice for the Nurture stage.",
        lines: [
          {
            speaker: "donna",
            text: "Hi Andrew, this is Donna. We missed you Thursday. No problem at all. Want to find a new time?",
          },
          { speaker: "caller", text: "Yes, sorry. Work ran late." },
          {
            speaker: "donna",
            text: "Totally understand. I have Monday at 5:30 or Tuesday at noon. Which is easier?",
          },
        ],
      },
    ],
  },
];

/**
 * Assets still needed from the owner to replace the labeled placeholders.
 * Kept in code so the list cannot drift from what the UI renders.
 */
export const ASSETS_NEEDED: string[] = examples
  .flatMap((example) =>
    example.clips
      .filter((clip) => clip.assetNeeded)
      .map((clip) => `${example.label} - ${clip.category}: ${clip.assetNeeded}`),
  )
  .concat([
    "Owen-voiced intake call to replace the current sample recording, which is in a different voice (Ava).",
  ]);
