"use client";

import CountUp from "@/components/react-bits/CountUp";

const STAT = /^([\d,]+(?:\.\d+)?)(.*)$/;

type StatCountProps = {
  /** A published stat string such as "4,681", "2.4 sec", or "10,000+". */
  value: string;
  delay?: number;
  className?: string;
};

/**
 * Counts a published stat up into place when it scrolls into view. The
 * number is parsed from the string so the source of truth stays in
 * lib/proof.ts; anything that doesn't parse renders as plain text.
 */
export function StatCount({ value, delay = 0, className }: StatCountProps) {
  const match = STAT.exec(value.trim());
  if (!match) return <span className={className}>{value}</span>;

  const [, raw, suffix] = match;
  const number = Number(raw.replace(/,/g, ""));
  if (!Number.isFinite(number)) return <span className={className}>{value}</span>;

  const decimals = raw.includes(".") ? raw.split(".")[1].length : 0;

  return (
    <CountUp
      to={number}
      from={0}
      duration={1.6}
      delay={delay}
      decimals={decimals}
      separator={raw.includes(",") ? "," : ""}
      suffix={suffix}
      easing="easeOut"
      className={className}
    />
  );
}
