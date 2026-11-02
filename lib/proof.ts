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
 * staff; 48 unique contacts booked by the AI (APPOINTMENT_BOOKING action or "Booked" outcome).
 * The old 2.4 sec pickup, 390 staff hours and "no voicemail" claims had no source and were dropped.
 * [DRAFT, needs Theron's written OK on exact wording before production]
 */
export const morrisonProof = {
  firm: "Morrison Law Group",
  range: "June 12 to September 9, 2026",
  rangeShort: "June 12 to Sept 9, 2026",
  heroLine:
    "Morrison Law Group, June 12 to September 9, 2026: 1,486 callers answered, 3,651 calls routed to the right team, 48 consultations booked by AI.",
  sentence:
    "From June 12 to September 9, 2026, Retainer Pro answered 4,679 calls from 1,486 callers for Morrison Law Group, routed 3,651 calls straight to the right team, and booked 48 consultations with no staff involved.",
  stats: [
    { stat: "1,486", label: "callers answered" },
    { stat: "3,651", label: "calls routed to the right team" },
    { stat: "48", label: "consultations booked by AI" },
    { stat: "24/7", label: "nights and lunch hours included" },
  ],
  footnote: "4,679 calls in 90 days. Existing clients went straight to their team.",
} as const;
