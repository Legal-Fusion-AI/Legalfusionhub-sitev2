export type Faq = {
  question: string;
  answer: string;
  cta?: boolean;
};

export const faqs: Faq[] = [
  {
    question: "What is an AI receptionist for a bankruptcy firm?",
    answer:
      "An AI receptionist answers a bankruptcy firm's calls, texts, and web forms at any hour, asks the firm's intake questions, and books the consultation. Retainer Pro's is named Donna. Nikki follows up until the client retains.",
  },
  {
    question: "Does it give legal advice?",
    answer:
      "No. Donna and Nikki never advise on chapter choice, fees, or outcomes. Those questions go to the attorney.",
  },
  {
    question: "Is it an answering service?",
    answer:
      "No. An answering service takes a message. Retainer Pro books the consultation and follows up until the lead retains or moves to Nurture.",
  },
  {
    question: "Do you replace my intake staff or attorneys?",
    answer:
      "No. We answer the call, qualify the lead, and book the consultation. Your team meets the client and decides who the firm retains. We do not replace your attorneys or your staff.",
  },
  {
    question: "How does setup work?",
    answer:
      "Setup is light. We start with a short questionnaire: your firm name, a greeting, and your slogan. We tune the rest with you. Setup timing is covered on the demo.",
  },
  {
    question: "Does this work with my existing phone system?",
    answer:
      "Yes. You keep your current numbers and provider. We use conditional call forwarding, so calls route to us when you want them to. There is no system to replace.",
  },
  {
    question: "What counts as a lead?",
    answer:
      "A lead is a new prospective client who reaches out about bankruptcy and gives us enough to follow up: a name and a way to reach them. We capture it, qualify it by your criteria, and work to book the consultation.",
  },
  {
    question: "Do you offer Spanish support?",
    answer:
      "Yes. Donna and Nikki both speak Spanish. Spanish-speaking callers get the same intake, follow-up, and booking, so they get a real answer instead of a callback.",
  },
  {
    question: "Do callers know they are talking to an AI?",
    answer:
      "Yes. The greeting states that they are speaking with an AI assistant. We built this to respect bar rules on disclosure, and your firm reviews the greeting during setup.",
  },
  {
    question: "How do you know my firm's criteria?",
    answer:
      "Your firm sets them. We qualify bankruptcy leads by your criteria, follow up, and book the consultation.",
  },
  {
    question: "Do you gather case details before the consultation?",
    answer:
      "Yes. We gather a few details so the attorney can weigh Chapter 7 against other options before the meeting. That is to help the attorney, not to qualify the lead.",
  },
  {
    question: "What does it cost?",
    answer:
      "We walk through pricing on the demo, matched to how your firm works. Nothing to read into here.",
    cta: true,
  },
];
