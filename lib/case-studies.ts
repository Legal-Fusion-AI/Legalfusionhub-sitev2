export const caseStudyFilters = [
  "All Cases",
  "Reception",
  "Follow-up",
  "Returning Client",
  "New Lead",
  "After-Hours",
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
    id: "returning-client-routed",
    title: "Returning client routed to case manager.",
    summary:
      "The receptionist routes a past client to his office's case manager.",
    tags: ["Returning Client", "Routed"],
    roles: ["Receptionist", "Caller"],
    media: {
      src: "/media/returning-client-routed.mp4",
      poster: "/media/returning-client-routed-poster.jpg",
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
  {
    status: "published",
    id: "new-lead-cost-question",
    title: "Cost question from a new lead.",
    summary:
      "The intake assistant answers the intake questions and starts the transfer to staff.",
    tags: ["New Lead", "Routed"],
    roles: ["Intake assistant", "Caller"],
    media: {
      src: "/media/new-lead-cost-question.mp4",
      poster: "/media/new-lead-cost-question-poster.jpg",
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
