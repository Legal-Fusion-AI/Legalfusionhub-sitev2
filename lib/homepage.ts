export const donnaSampleTel = "+14353633201";

export const homepageMeta = {
  title: "AI Receptionist for Bankruptcy Law Firms | Retainer Pro",
  description:
    "Retainer Pro is Legal Fusion Hub’s AI receptionist for consumer bankruptcy firms. Donna answers after hours; Nikki follows up. Book a demo.",
  ogTitle: "Monday, 8:05 AM. The voicemail box is full from the weekend.",
  ogDescription:
    "What if Monday started with a list, not a pile? Retainer Pro — AI front desk for consumer bankruptcy firms.",
} as const;

export const faqs = [
  {
    question: "Do you give legal advice?",
    answer:
      "No. Donna and Nikki never advise on chapter choice, fees, or outcomes. AI handles intake and follow-up; your attorneys handle the law.",
  },
  {
    question: "Do callers know it’s AI?",
    answer:
      "Yes. The greeting states they are speaking with an AI assistant. Your firm reviews and approves the greeting during setup.",
  },
  {
    question: "Do you replace my intake staff or attorneys?",
    answer:
      "No. We answer, qualify, and book the consultation. Your staff meets the client and decides who the firm retains.",
  },
] as const;

export const cast = [
  {
    name: "Donna",
    role: "Intake",
    initial: "D",
    body: "Answers calls, texts, and forms; captures the lead; books the consultation.",
  },
  {
    name: "Nikki",
    role: "Follow-up",
    initial: "N",
    body: "Confirms appointments and follows up so missed consults and no-shows do not go cold.",
  },
] as const;

export const neverTiles = [
  {
    title: "Never legal advice, fees, or chapter choice.",
    body: "Those stay with your attorneys.",
  },
  {
    title: "Never replace attorneys — and never trash your staff.",
    body: "Your team meets the client and decides who the firm retains. The tone is drowning in admin, not “your team is slow.”",
  },
  {
    title: "Never hide that it’s AI.",
    body: "Callers hear it in the greeting. Your firm approves the wording.",
  },
] as const;

export const practiceStrip = [
  {
    value: "10,000+",
    label: "bankruptcy cases filed",
  },
  {
    value: "24+",
    label: "years of legal practice",
  },
  {
    value: "Morrison Law Group",
    label: "client",
  },
] as const;
