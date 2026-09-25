export type VoiceSpeaker = "agent" | "caller";

export type VoiceTurn = {
  speaker: VoiceSpeaker;
  text: string;
  start: number;
  end: number;
};

export const audioSrc = "/voice-demo/bankruptcy-call.mp3?v=90.885";

export const duration = 90.885;

export const peaks = [0.042,0.809,0.719,0.827,0.85,0.987,0.994,0.991,0.997,0.996,0.647,0.623,0.826,0.732,0.779,0.996,0.719,0.851,0.792,0.99,0.993,0.981,0.849,0.714,0.85,0.993,0.996,0.995,0.867,0.772,0.849,0.851,0.868,0.831,0.99,0.997,0.986,0.992,0.874,0.837,0.989,0.831,0.761,0.854,0.837,0.999,0.988,0.986,1,0.994,0.772,0.858,0.725,0.749,0.725,0.701,0.806,0.838,0.735,0.992,0.992,0.977,0.854,0.857] as const;

export const turns: VoiceTurn[] = [
  {
    "speaker": "agent",
    "text": "Thank you for calling Morgan and Reyes Law. This is Ava, the firm's virtual intake assistant. How can I help you today?",
    "start": 1.43,
    "end": 7.161
  },
  {
    "speaker": "caller",
    "text": "Hi, yeah... um, I've been getting a lot of calls from creditors, and I think I need to talk to someone about bankruptcy.",
    "start": 7.381,
    "end": 14.169
  },
  {
    "speaker": "agent",
    "text": "I'm sorry you're dealing with that. You called the right place. May I have your first and last name?",
    "start": 14.389,
    "end": 21.178
  },
  {
    "speaker": "caller",
    "text": "Sure. Daniel Brooks.",
    "start": 21.398,
    "end": 22.853
  },
  {
    "speaker": "agent",
    "text": "Thanks, Daniel. Will you be filing individually, or jointly with a spouse?",
    "start": 23.073,
    "end": 27.585
  },
  {
    "speaker": "caller",
    "text": "Jointly. With my wife, Maria.",
    "start": 27.805,
    "end": 29.945
  },
  {
    "speaker": "agent",
    "text": "Got it, a joint filing. Do either of you currently own a business, or have you owned one in the last few years?",
    "start": 30.165,
    "end": 35.842
  },
  {
    "speaker": "caller",
    "text": "I had a small landscaping company. I closed it last spring.",
    "start": 36.062,
    "end": 39.153
  },
  {
    "speaker": "agent",
    "text": "That's helpful, thank you. The attorney will review those business debts separately. Now, let's get you a free consultation. What day and time work best for you and Maria?",
    "start": 39.373,
    "end": 49.381
  },
  {
    "speaker": "caller",
    "text": "Weekdays after five, usually. Maybe Thursday?",
    "start": 49.601,
    "end": 52.864
  },
  {
    "speaker": "agent",
    "text": "I have Thursday at five-thirty p.m. Would you like me to book that?",
    "start": 53.084,
    "end": 56.648
  },
  {
    "speaker": "caller",
    "text": "Yes, that works.",
    "start": 56.868,
    "end": 57.914
  },
  {
    "speaker": "agent",
    "text": "You're all set for Thursday at five-thirty. What's the best email to send your bankruptcy intake questionnaire?",
    "start": 58.134,
    "end": 64.06
  },
  {
    "speaker": "caller",
    "text": "It's daniel dot brooks... B-R-O-O-K-S... at gmail dot com.",
    "start": 64.28,
    "end": 70.808
  },
  {
    "speaker": "agent",
    "text": "Perfect. daniel dot brooks at gmail dot com. You'll receive the intake form and a confirmation text in a few minutes. Please complete it before Thursday so the attorney can prepare. Is there anything else I can help with?",
    "start": 71.028,
    "end": 84.901
  },
  {
    "speaker": "caller",
    "text": "No, that's everything. Thanks so much.",
    "start": 85.121,
    "end": 86.855
  },
  {
    "speaker": "agent",
    "text": "You're welcome, Daniel. Talk to you Thursday. Take care.",
    "start": 87.075,
    "end": 90.575
  }
];
