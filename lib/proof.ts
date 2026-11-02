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
 * staff, of which 1,719 calls (698 clients) went to a case-specific team or person: petition prep
 * and doc collection, Ch 7 and Ch 13 post-filing, billing, discharged, or a named staff member
 * (the generic call queue and new-intake queue are excluded). Matched against the Ogden, Orem, Sandy and Zoom consultation calendars: 114 new callers
 * got a consultation booked after their first AI-answered call (48 on the call by the AI, the rest
 * by staff or the booking widget), and 68 of them showed. Not "booked by AI": that is only 48.
 * 2.4 sec average pickup is owner-supplied (Mara, 2026-11-01); it is not in the call logs, so keep
 * its source on file. The old 390 staff hours and "no voicemail" claims had no source and were dropped.
 * [DRAFT, needs Theron's written OK on exact wording before production]
 */
export const morrisonProof = {
  firm: "Morrison Law Group",
  range: "June 12 to September 9, 2026",
  rangeShort: "June 12 to Sept 9, 2026",
  heroLine:
    "Morrison Law Group, June 12 to September 9, 2026: 999 calls answered after hours and at lunch, 2.4 second average pickup, 1,719 client calls sent to their case team, 114 consultations booked.",
  sentence:
    "From June 12 to September 9, 2026, Retainer Pro answered 4,679 calls for Morrison Law Group, 999 of them after hours or at lunch, with a 2.4 second average pickup. It sent 1,719 client calls straight to the team or staff member on their case and booked 114 consultations from new callers.",
  stats: [
    // Samantha (after-hours agent) 545 + Sage lunch agent 454.
    { stat: "999", label: "calls answered after hours and at lunch" },
    { stat: "2.4 sec", label: "average pickup" },
    { stat: "1,719", label: "client calls sent to their case team" },
    { stat: "114", label: "consultations booked" },
  ],
  footnote:
    "Clients went to petition prep, post-filing, billing, or the staff member on their case. New callers got booked.",
} as const;
