/** Restored from the pre-Morrison homepage proof strip (commit 39c4463). */
export const practiceEvidence = [
  {
    stat: "Built inside a bankruptcy practice",
    label: "Where the company started",
  },
  { stat: "10,000+", label: "bankruptcy cases filed" },
  { stat: "24+ years", label: "of legal practice" },
  { stat: "24/7", label: "calls and texts answered" },
] as const;

/**
 * Counted from Morrison's GHL Voice AI call logs, June 12 to September 9, 2026 (pulled 2026-11-01):
 * 4,679 live calls from 1,486 unique contacts; 3,651 calls transferred to staff queues or named
 * staff. Matched against the Ogden, Orem, Sandy and Zoom consultation calendars: 114 new callers
 * got a consultation booked after their first AI-answered call (48 on the call by the AI, the rest
 * by staff or the booking widget), and 68 of them showed. Not "booked by AI": that is only 48.
 * The old 2.4 sec pickup, 390 staff hours and "no voicemail" claims had no source and were dropped.
 * [DRAFT, needs Theron's written OK on exact wording before production]
 */
export const morrisonProof = {
  firm: "Morrison Law Group",
  range: "June 12 to September 9, 2026",
  rangeShort: "June 12 to Sept 9, 2026",
  heroLine:
    "Morrison Law Group, June 12 to September 9, 2026: 1,486 callers answered, 3,651 client calls routed to the right team, 114 consultations booked, 68 showed.",
  sentence:
    "From June 12 to September 9, 2026, Retainer Pro answered 1,486 callers for Morrison Law Group, routed 3,651 client calls straight to the right team, and turned new callers into 114 booked consultations, 68 of whom showed.",
  stats: [
    { stat: "1,486", label: "callers answered" },
    { stat: "3,651", label: "client calls routed to the right team" },
    { stat: "114", label: "consultations booked" },
    { stat: "68", label: "showed for their consultation" },
  ],
  footnote: "Existing clients went straight to their team. New callers got booked.",
} as const;
