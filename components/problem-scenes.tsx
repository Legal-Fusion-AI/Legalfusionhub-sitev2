import Image from "next/image";
import { CallVideo } from "@/components/call-video";
import acquireWallpaper from "@/public/wallpapers/abstract-acquire.webp";

export function ProblemScenes() {
  return (
    <div className="problem-scenes">
      <article className="problem-scene">
        <div className="problem-video">
          <span className="problem-video-tag">Real call · no human touched it</span>
          <CallVideo />
        </div>
        <div className="problem-copy">
          <h3>Calls go unanswered.</h3>
          <p>A call or text gets no response, including after hours.</p>
          <p className="problem-answer">
            Donna answers day or night, handles the inquiry, and captures the lead.
          </p>
          <p className="problem-play-prompt">
            Press play to hear a real after-hours call, booked with no staff involved.
          </p>
        </div>
      </article>
      <article className="problem-scene is-flip">
        <div className="problem-art">
          <Image
            src={acquireWallpaper}
            alt=""
            fill
            sizes="(max-width: 1020px) 100vw, 50vw"
          />
          <LeadScene />
        </div>
        <div className="problem-copy">
          <h3>A lead never becomes a consultation.</h3>
          <p>The inquiry is captured and then stalls.</p>
          <p className="problem-answer">
            We qualify bankruptcy leads by your criteria, follow up, and book the
            consultation.
          </p>
        </div>
      </article>
    </div>
  );
}

function LeadScene() {
  return (
    <svg viewBox="0 0 520 340" aria-hidden="true">
      <rect
        x="36"
        y="48"
        width="196"
        height="244"
        rx="16"
        fill="var(--white)"
        stroke="var(--coral)"
        strokeDasharray="6 5"
      />
      <text x="56" y="86" fill="var(--ink)" fontSize="16" fontWeight="700">
        Lead
      </text>
      <rect
        x="56"
        y="102"
        width="78"
        height="24"
        rx="12"
        fill="color-mix(in srgb, var(--coral) 16%, white)"
      />
      <text x="95" y="118" textAnchor="middle" fill="var(--coral-dark)" fontSize="11" fontWeight="700">
        Waiting
      </text>
      <rect x="56" y="148" width="148" height="8" rx="4" fill="var(--paper)" />
      <rect x="56" y="168" width="112" height="8" rx="4" fill="var(--paper)" />
      <rect x="56" y="188" width="132" height="8" rx="4" fill="var(--paper)" />
      <text x="56" y="248" fill="var(--ink-soft)" fontSize="12" fontWeight="700">
        Not booked
      </text>
      <path
        d="M244 170H286"
        stroke="var(--blue)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path d="M278 164l10 6-10 6" fill="var(--blue)" />
      <rect
        x="300"
        y="48"
        width="184"
        height="244"
        rx="16"
        fill="var(--white)"
        stroke="var(--line)"
      />
      <rect x="300" y="48" width="184" height="42" rx="16" fill="var(--blue)" />
      <rect x="300" y="74" width="184" height="16" fill="var(--blue)" />
      <text x="392" y="75" textAnchor="middle" fill="white" fontSize="13" fontWeight="700">
        Thursday
      </text>
      {[0, 1, 2, 3, 4].map((col) =>
        [0, 1, 2].map((row) => {
          const booked = col === 3 && row === 1;
          return (
            <rect
              key={`${col}-${row}`}
              x={318 + col * 32}
              y={112 + row * 36}
              width="22"
              height="22"
              rx="6"
              fill={booked ? "var(--green)" : "var(--paper)"}
            />
          );
        }),
      )}
      <text x="318" y="262" fill="var(--green)" fontSize="12" fontWeight="700">
        Consultation booked
      </text>
    </svg>
  );
}
