// Real Nikki conversations from Morrison Law Group, shared with permission.
// Names, emails, and phone numbers are removed. Wording is otherwise as sent.
export type ChatTurn = { from: "client" | "nikki"; text: string };

export type NikkiChat = {
  id: string;
  title: string;
  channel: string;
  outcome: string;
  turns: ChatTurn[];
};

export const nikkiChats: NikkiChat[] = [
  {
    id: "lawsuit",
    title: "Just served with a lawsuit",
    channel: "Message",
    outcome: "Zoom consult booked for the next day",
    turns: [
      { from: "client", text: "hello, I'm being sued for creditor debt" },
      {
        from: "nikki",
        text: "Got it. Bankruptcy may be able to help with that. We offer free consultations to go over your situation. Where are you located?",
      },
      { from: "client", text: "located in farmington" },
      {
        from: "nikki",
        text: "Farmington is close to our Ogden office. Would you prefer to come in person to Ogden, or would Zoom work better for you?",
      },
      { from: "client", text: "zoom would work best for now. what are the consult fees?" },
      {
        from: "nikki",
        text: "The consultation is free. How soon do you need to meet? Do you have a court date coming up?",
      },
      { from: "client", text: "i got served on 9/5 and have 22 days to respond" },
      {
        from: "nikki",
        text: "That's tight timing. Is there anything else you'd like us to know before we get you scheduled?",
      },
      { from: "client", text: "not at the moment and i can standby for zoom date when available" },
      {
        from: "nikki",
        text: "Great. I have Zoom times available as soon as tomorrow. Would Wednesday 9/9 at 11am or 1pm work, or Thursday 9/10 anytime between 9am-2pm?",
      },
      { from: "client", text: "tomorrow at 1pm sounds perfect" },
      {
        from: "nikki",
        text: "Perfect! You're all set for Wednesday 9/9 at 1pm via Zoom. You'll get the meeting link by email. See you tomorrow!",
      },
      { from: "client", text: "thank you" },
    ],
  },
  {
    id: "foreclosure",
    title: "A lien holder trying to foreclose",
    channel: "Website chat",
    outcome: "Zoom consult booked and confirmed",
    turns: [
      {
        from: "client",
        text: "bankruptcy with complications of an aggressive lien judgement trying to foreclose",
      },
      {
        from: "nikki",
        text: "That sounds stressful. We can help with bankruptcy and lien issues. Where are you located, and how soon do you need to meet?",
      },
      { from: "client", text: "ogden, ut. asap" },
      {
        from: "nikki",
        text: "Got it. Since you're in Ogden, would you prefer to meet in person at our Ogden office, or would a Zoom consultation work better for you?",
      },
      { from: "client", text: "zoom would be fabulous" },
      {
        from: "nikki",
        text: "Perfect, we'll set up a Zoom consultation for you. Before we schedule, is there anything else about your situation you'd like us to know?",
      },
      {
        from: "client",
        text: "under current law my debts stemming from a closed business are impacting my ability to file a 13. I know a bill is coming to change this, however I need help buying time or getting creative with the bankruptcy",
      },
      {
        from: "nikki",
        text: "Thanks for sharing that. Our attorney can discuss options with you in the consultation.",
      },
      {
        from: "nikki",
        text: "I have Zoom times available as soon as tomorrow, Wednesday at 3pm, or Friday at 11am. What works for you?",
      },
      { from: "client", text: "currently I have the lien holder on hold for a court date of 10/15" },
      {
        from: "nikki",
        text: "That gives us some time to work with. Would tomorrow Wednesday at 3pm work for your Zoom consultation, or would Friday at 11am be better?",
      },
      { from: "client", text: "friday at 11" },
      {
        from: "nikki",
        text: "Great, I'll get you scheduled for Friday at 11am. Can you confirm your email so I can send the Zoom link?",
      },
      { from: "client", text: "[email removed]" },
      {
        from: "nikki",
        text: "Got it, thanks. Your Zoom link and intake paperwork have been sent to your email.",
      },
      { from: "nikki", text: "Just reply CONFIRM when you can to hold your Friday spot." },
      { from: "client", text: "confirm" },
      {
        from: "nikki",
        text: "Perfect, you're all set for Friday at 11am. See you then, and feel free to reach out if anything comes up before then.",
      },
    ],
  },
  {
    id: "reschedule",
    title: "Needs to move the consult",
    channel: "Text",
    outcome: "Rescheduled in under 3 minutes",
    turns: [
      { from: "client", text: "Good morning Nikki could I reschedule my appointment ?" },
      {
        from: "nikki",
        text: "Of course! I can help you reschedule. What day and time works better for you?",
      },
      { from: "client", text: "Would Monday the 26th at 330 work?" },
      { from: "nikki", text: "Let me check that for you" },
      { from: "nikki", text: "I'm sorry, 3:30 PM on Monday the 26th isn't available." },
      {
        from: "nikki",
        text: "I have openings that day at 9 AM, 10 AM, 11 AM, 1 PM, 2 PM, 3 PM, or 4 PM. Would any of those work for you?",
      },
      { from: "client", text: "4 please!" },
      { from: "client", text: "Thank you" },
      {
        from: "nikki",
        text: "You're welcome! You're all set for Monday, October 26th at 4:00 PM. See you then!",
      },
    ],
  },
];
