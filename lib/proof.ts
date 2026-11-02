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
    "Morrison Law Group, June 12 to September 9, 2026: 1,486 callers answered. 889 existing clients routed to their team, 363 new callers, 114 consultations booked.",
  sentence:
    "From June 12 to September 9, 2026, Retainer Pro answered 1,486 callers for Morrison Law Group with a 2.4 second average pickup. It routed 889 existing clients to their team and booked 114 consultations from 363 new callers.",
  /**
   * People, not calls, so the card adds up: 889 + 363 + 234 = 1,486. Each caller is counted once:
   * 363 new callers (any new-caller signal), 567 clients sent to their case team + 322 other clients
   * (general queue or front desk) = 889, and 234 hang-ups or no conversation.
   */
  stats: [
    { stat: "1,486", label: "callers answered" },
    { stat: "889", label: "existing clients routed to their team" },
    { stat: "363", label: "new callers" },
    { stat: "114", label: "consultations booked" },
  ],
  footnote: "The other 234 were hang-ups or no conversation. Average pickup: 2.4 seconds.",
} as const;
