export const caseStudyFilters = [
  "All",
  "Reception",
  "Follow-up",
  "New lead",
  "Returning client",
  "After-hours",
  "Routed",
  "Message taken",
] as const;

export type CaseStudyFilter = (typeof caseStudyFilters)[number];
export type CaseStudyTag = Exclude<CaseStudyFilter, "All">;
export type CaseStudyRole = "Receptionist" | "Intake assistant" | "Caller";

type CaseStudyMedia = {
  src: string;
  captions: string;
  poster: string;
};

export type PublishedCaseStudy = {
  status: "published";
  id: string;
  title: string;
  summary: string;
  tags: CaseStudyTag[];
  roles: CaseStudyRole[];
  media: CaseStudyMedia;
  transcriptSource: "unanswered-combined";
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
    id: "after-hours-new-lead",
    title: "After-hours new-lead call",
    summary:
      "A first-time caller after hours. The receptionist answers, the intake assistant handles the inquiry, and a consultation is booked. No staff took the call.",
    tags: ["Reception", "New lead", "After-hours"],
    roles: ["Receptionist", "Intake assistant", "Caller"],
    media: {
      src: "/media/unanswered-combined.mp4",
      captions: "/media/unanswered-combined.vtt",
      poster: "/media/unanswered-combined-poster.jpg",
    },
    transcriptSource: "unanswered-combined",
  },
  // TODO(case-studies): add recorded call 2
  { status: "todo", id: "todo-follow-up", tags: ["Follow-up"] },
  // TODO(case-studies): add recorded call 3
  { status: "todo", id: "todo-returning-client", tags: ["Returning client"] },
  // TODO(case-studies): add recorded call 4
  { status: "todo", id: "todo-routed", tags: ["Routed"] },
  // TODO(case-studies): add recorded call 5
  { status: "todo", id: "todo-message-taken", tags: ["Message taken"] },
  // TODO(case-studies): add recorded call 6
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
  if (tag === "All") return studies;
  return studies.filter((study) => study.tags.includes(tag));
}
