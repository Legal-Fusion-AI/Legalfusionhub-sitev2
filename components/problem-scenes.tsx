import Image from "next/image";
import engageWallpaper from "@/public/wallpapers/abstract-engage.webp";
import acquireWallpaper from "@/public/wallpapers/abstract-acquire.webp";

const scenes = [
  {
    id: "engage",
    title: "Calls go unanswered.",
    break: "A call or inquiry gets no response, including outside office hours.",
    answer: "Hub answers 24/7, handles the inquiry, and captures the lead.",
    flip: false,
    wallpaper: engageWallpaper,
    art: <CallScene />,
  },
  {
    id: "acquire",
    title: "A lead never becomes a consultation.",
    break: "The inquiry is captured and then stalls.",
    answer:
      "Hub qualifies by the firm’s criteria, follows up, and books the consultation.",
    flip: true,
    wallpaper: acquireWallpaper,
    art: <LeadScene />,
  },
] as const;

export function ProblemScenes() {
  return (
    <div className="problem-scenes">
      {scenes.map((scene) => (
        <article
          className={scene.flip ? "problem-scene is-flip" : "problem-scene"}
          key={scene.id}
        >
          <div className="problem-art">
            <Image
              src={scene.wallpaper}
              alt=""
              fill
              sizes="(max-width: 1020px) 100vw, 50vw"
            />
            {scene.art}
          </div>
          <div className="problem-copy">
            <h3>{scene.title}</h3>
            <p>{scene.break}</p>
            <p className="problem-answer">{scene.answer}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

function CallScene() {
  return (
    <svg viewBox="0 0 520 340" aria-hidden="true">
      <circle cx="118" cy="168" r="78" fill="var(--blue-soft)" />
      <rect x="62" y="72" width="112" height="196" rx="22" fill="var(--ink)" />
      <rect x="72" y="90" width="92" height="146" rx="8" fill="var(--white)" />
      <circle cx="96" cy="122" r="11" fill="var(--coral)" />
      <path
        d="M91 117l10 10M101 117l-10 10"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <text x="114" y="126" fill="var(--coral-dark)" fontSize="11" fontWeight="700">
        Missed
      </text>
      <rect x="84" y="146" width="68" height="6" rx="3" fill="var(--line)" />
      <rect x="84" y="160" width="48" height="6" rx="3" fill="var(--line)" />
      <text
        x="118"
        y="214"
        textAnchor="middle"
        fill="var(--ink-soft)"
        fontSize="11"
        fontWeight="700"
      >
        No answer
      </text>
      <path
        d="M186 118c18-22 18-44 0-66"
        fill="none"
        stroke="var(--blue)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M198 108c24-28 24-58 0-86"
        fill="none"
        stroke="var(--blue)"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M174 168H214"
        stroke="var(--blue)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path d="M206 162l10 6-10 6" fill="var(--blue)" />
      <rect
        x="228"
        y="58"
        width="252"
        height="220"
        rx="16"
        fill="var(--white)"
        stroke="var(--line)"
      />
      <text x="250" y="96" fill="var(--ink)" fontSize="16" fontWeight="700">
        Inquiry
      </text>
      <rect x="250" y="112" width="86" height="24" rx="12" fill="var(--green-soft)" />
      <text x="293" y="128" textAnchor="middle" fill="var(--green)" fontSize="11" fontWeight="700">
        Captured
      </text>
      <rect x="250" y="158" width="196" height="8" rx="4" fill="var(--paper)" />
      <rect x="250" y="178" width="156" height="8" rx="4" fill="var(--paper)" />
      <rect x="250" y="198" width="176" height="8" rx="4" fill="var(--paper)" />
      <text x="250" y="246" fill="var(--ink-soft)" fontSize="12" fontWeight="700">
        Answered 24/7
      </text>
    </svg>
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
