/**
 * One real Morrison Law Group lead, start to finish, told as a stylized
 * timeline. This is a real client, so it is anonymized: first name only, no
 * last name, no phone numbers, links, Zoom IDs, invoice numbers, dollar
 * figures, or the attorney's direct contact details. Messages are lightly
 * paraphrased and trimmed so he cannot be identified, but the emotional arc and
 * the times of day are kept. The story stops at the moment he retains the firm.
 */

export type JourneyStage =
  | "New"
  | "Qualified"
  | "Consultation booked"
  | "Retained";

export type JourneyWho = "andrew" | "donna" | "nikki";

export type JourneyLine = {
  who: JourneyWho;
  text: string;
};

export type JourneyBeat = {
  id: string;
  stage: JourneyStage;
  time: string;
  by?: "donna" | "nikki";
  note?: string;
  lines?: JourneyLine[];
};

export const journeyBeats: JourneyBeat[] = [
  {
    id: "new",
    stage: "New",
    time: "Sep 27, 4:15 a.m.",
    by: "nikki",
    note: "Andrew finds the firm overnight and fills out the web form. Nikki captures the lead before anyone is in the office.",
  },
  {
    id: "booked",
    stage: "Consultation booked",
    time: "Sep 27, 4:29 a.m.",
    by: "nikki",
    note: "Still before office hours, he books a consultation through the online scheduler. A confirmation and reminder go out automatically.",
  },
  {
    id: "confirm",
    stage: "Consultation booked",
    time: "Sep 27, 4:30 a.m.",
    by: "nikki",
    lines: [
      { who: "andrew", text: "Confirm" },
      {
        who: "nikki",
        text: "Perfect. You're all set for Monday at 10 a.m. The intake form is linked above. It's quick and helps the attorney get ready for you.",
      },
    ],
  },
  {
    id: "priority",
    stage: "Qualified",
    time: "Sep 27, morning",
    by: "nikki",
    lines: [
      { who: "andrew", text: "I really need your help as soon as possible." },
      {
        who: "andrew",
        text: "Please tell the attorney I'm hoping to get an automatic stay in place to protect my property and my family.",
      },
      {
        who: "nikki",
        text: "Absolutely. I'll flag that as a priority for the attorney, and he'll go over your situation and your options for protection.",
      },
    ],
  },
  {
    id: "intake-fix",
    stage: "Qualified",
    time: "Sep 27, evening",
    by: "nikki",
    lines: [
      {
        who: "andrew",
        text: "I looked at the intake form and I think I answered a question wrong. Is that okay? I didn't realize I did it.",
      },
      {
        who: "andrew",
        text: "It's the past-taxes question. I'm on a small payment plan from the divorce. I can pay it off. Sorry, that's my fault.",
      },
      {
        who: "nikki",
        text: "No need to apologize. That's helpful to know. Just mention the payment plan on the call and the attorney will update everything. You're doing great.",
      },
    ],
  },
  {
    id: "reassure",
    stage: "Qualified",
    time: "Sep 27, evening",
    by: "nikki",
    lines: [
      {
        who: "andrew",
        text: "I'm not good at phone stuff, so please don't give up on me with the Zoom. I'm just not tech savvy and I don't want to miss this.",
      },
      {
        who: "nikki",
        text: "No worries at all. We'll make sure you get connected, and if you have any trouble joining we'll walk you through it. You've got this.",
      },
      {
        who: "andrew",
        text: "I'm scared and stuck. It's been a nightmare and I don't want to blow it. Honestly it's my kids, they need a break.",
      },
      {
        who: "nikki",
        text: "You're not going to blow it. Being honest like you just were is exactly what helps. The attorney will walk you through everything, no judgment. Tomorrow is a fresh start for both of you.",
      },
    ],
  },
  {
    id: "confirmed",
    stage: "Qualified",
    time: "Sep 27, 8:00 p.m.",
    by: "nikki",
    lines: [
      { who: "andrew", text: "Yes, I'll be there." },
      { who: "nikki", text: "Perfect. We'll see you in the morning. You've got this." },
    ],
  },
  {
    id: "retained",
    stage: "Retained",
    time: "Sep 28, consultation day",
    note: "After the consultation, the attorney sends the fee agreement. Andrew signs it and retains the firm.",
  },
];

export const journeyClosingQuote =
  "I was terrified, and today was not what I thought it would be. It was calm, and she made me feel like everything was going to be okay.";

/**
 * Flattened view of the same journey for the text-thread modal. This keeps the
 * timeline and the modal on one source of data. An "event" is an automation
 * note (lead captured, booking, retained marker); a "msg" is a chat bubble.
 */
export type ThreadItem = {
  kind: "event" | "msg";
  stage: JourneyStage;
  who: JourneyWho;
  text: string;
};

export const threadItems: ThreadItem[] = journeyBeats.flatMap((beat): ThreadItem[] => {
  if (beat.lines) {
    return beat.lines.map(
      (line): ThreadItem => ({
        kind: "msg",
        stage: beat.stage,
        who: line.who,
        text: line.text,
      }),
    );
  }
  return [
    {
      kind: "event",
      stage: beat.stage,
      who: beat.by ?? "nikki",
      text: beat.note ?? "",
    },
  ];
});

/** Index of the first inbound text, where the "text" entry point starts. */
export const threadTextStartIndex = Math.max(
  0,
  threadItems.findIndex((item) => item.kind === "msg" && item.who === "andrew"),
);

