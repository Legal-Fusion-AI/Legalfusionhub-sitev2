export const caseStudyFilters = [
  "All Cases",
  "New Lead",
  "Follow-up",
  "After-Hours",
  "Reception",
  "Returning Client",
  "Routed",
  "Message Taken",
] as const;

export type CaseStudyFilter = (typeof caseStudyFilters)[number];
export type CaseStudyTag = Exclude<CaseStudyFilter, "All Cases">;
export type CaseStudyRole = "Receptionist" | "Intake assistant" | "Caller";
export type CaseStudyTranscriptSource = "unanswered-combined";

type CaseStudyMedia = {
  src: string;
  captions?: string;
  poster: string;
  square?: boolean;
};

export type PublishedCaseStudy = {
  status: "published";
  id: string;
  title: string;
  summary: string;
  tags: CaseStudyTag[];
  roles: CaseStudyRole[];
  media: CaseStudyMedia;
  transcriptSource?: CaseStudyTranscriptSource;
};

export type UpcomingCaseStudy = {
  status: "todo";
  id: string;
  tags: CaseStudyTag[];
};

export type CaseStudy = PublishedCaseStudy | UpcomingCaseStudy;

export const caseStudies: CaseStudy[] = [
  {
    status: "published",
    id: "after-hours-zoom-consult",
    title: "After-hours call: never miss another client.",
    summary:
      "The office is closed. The receptionist answers, hands the caller to the intake assistant, and she books a free Zoom consultation for Tuesday at noon.",
    tags: ["New Lead", "After-Hours", "Routed"],
    roles: ["Receptionist", "Intake assistant", "Caller"],
    media: {
      src: "/media/after-hours-zoom-consult.mp4",
      captions: "/media/after-hours-zoom-consult.vtt",
      poster: "/media/after-hours-zoom-consult-poster.jpg",
      square: true,
    },
  },
  {
    status: "published",
    id: "spanish-caller-consult",
    title: "Spanish-speaking caller books a consult.",
    summary:
      "A first-time caller asks for Spanish. The receptionist routes the call to a Spanish-speaking assistant, who books a free Zoom consultation entirely in Spanish.",
    tags: ["New Lead", "Reception", "Routed"],
    roles: ["Receptionist", "Intake assistant", "Caller"],
    media: {
      src: "/media/spanish-caller-consult.mp4",
      captions: "/media/spanish-caller-consult.vtt",
      poster: "/media/spanish-caller-consult-poster.jpg",
      square: true,
    },
  },
  {
    status: "published",
    id: "new-lead-zoom-consult",
    title: "New lead books a Zoom consultation.",
    summary:
      "The intake assistant asks the qualifying questions, works around the caller's Thursday-after-3 window, and books the consultation on Zoom.",
    tags: ["New Lead"],
    roles: ["Intake assistant", "Caller"],
    media: {
      src: "/media/new-lead-zoom-consult.mp4",
      captions: "/media/new-lead-zoom-consult.vtt",
      poster: "/media/new-lead-zoom-consult-poster.jpg",
      square: true,
    },
  },
  {
    status: "published",
    id: "new-lead-warm-handoff",
    title: "New lead: intake to warm handoff.",
    summary:
      "The intake assistant gathers the caller's details and hands him to the team. The caller says he thought he was talking to a real person.",
    tags: ["New Lead", "Routed"],
    roles: ["Intake assistant", "Caller"],
    media: {
      src: "/media/new-lead-warm-handoff.mp4",
      poster: "/media/new-lead-warm-handoff-poster.jpg",
      square: true,
    },
  },
  {
    status: "published",
    id: "after-hours-message",
    title: "After-hours message.",
    summary:
      "The receptionist explains the staff member's hours and takes a detailed message about the client's questionnaire.",
    tags: ["Returning Client", "After-Hours", "Message Taken"],
    roles: ["Receptionist", "Caller"],
    media: {
      src: "/media/after-hours-message.mp4",
      poster: "/media/after-hours-message-poster.jpg",
      square: true,
    },
  },
  {
    status: "published",
    id: "returning-client-books-consult",
    title: "Returning client books a consult.",
    summary:
      "The receptionist routes a returning client to the team, who update her contact details and schedule a Zoom consultation.",
    tags: ["Returning Client", "Routed", "Follow-up"],
    roles: ["Receptionist", "Caller"],
    media: {
      src: "/media/returning-client-books-consult.mp4",
      poster: "/media/returning-client-books-consult-poster.jpg",
      square: true,
    },
  },
  // TODO(case-studies): add a reception + follow-up call recording
  { status: "todo", id: "todo-reception-follow-up", tags: ["Reception", "Follow-up"] },
];

export function publishedCaseStudies() {
  return caseStudies.filter(
    (study): study is PublishedCaseStudy => study.status === "published",
  );
}

export function isCaseStudyFilter(value: string): value is CaseStudyFilter {
  return (caseStudyFilters as readonly string[]).includes(value);
}

export function filterCaseStudies(
  studies: PublishedCaseStudy[],
  tag: CaseStudyFilter,
) {
  if (tag === "All Cases") return studies;
  return studies.filter((study) => study.tags.includes(tag));
}
