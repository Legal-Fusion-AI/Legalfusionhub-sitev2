import { donnaSampleTel } from "@/lib/homepage";

export function PhoneWavesIcon() {
  return (
    <svg
      className="try-donna-icon"
      viewBox="0 0 36 36"
      width="28"
      height="28"
      aria-hidden="true"
    >
      <path
        d="M11.2 22.4c2.1 2.1 4.6 3.6 7.3 4.4l2.4-2.4c.3-.3.8-.4 1.2-.3 1.3.4 2.7.7 4.1.7.6 0 1.1.5 1.1 1.1V29c0 .6-.5 1.1-1.1 1.1C16.4 30.1 6 19.7 6 9.1 6 8.5 6.5 8 7.1 8H10c.6 0 1.1.5 1.1 1.1 0 1.4.2 2.8.7 4.1.1.4 0 .9-.3 1.2l-2.4 2.4c.8 2.7 2.3 5.2 4.4 7.3z"
        fill="currentColor"
      />
      <path
        d="M23.6 7.8c2.6 2.4 4.1 5.7 4.1 9.2M21.1 10.6c1.7 1.6 2.6 3.7 2.6 6.1M18.8 13.3c.9.8 1.4 1.9 1.4 3.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function TryDonnaCta({ className = "" }: { className?: string }) {
  return (
    <a className={`try-donna ${className}`.trim()} href={`tel:${donnaSampleTel}`}>
      <PhoneWavesIcon />
      <span>Try Donna now</span>
    </a>
  );
}
