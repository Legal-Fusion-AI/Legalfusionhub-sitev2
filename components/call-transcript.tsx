import { getCallTranscript } from "@/lib/call-transcript";

export function CallTranscript() {
  const turns = getCallTranscript();

  return (
    <details className="call-transcript">
      <summary>Read the call transcript</summary>
      <ol className="call-transcript-list">
        {turns.map((turn, index) => (
          <li key={`${turn.start}-${index}`} data-speaker={turn.speaker}>
            <span className="call-transcript-meta">
              <span className="call-transcript-speaker">{turn.label}</span>
              <time>{turn.start}</time>
            </span>
            <p>{turn.text}</p>
          </li>
        ))}
      </ol>
    </details>
  );
}
