import { ListChecks, MessageSquareText, Phone } from "lucide-react";
import { Avatar, HubMark } from "@/components/mac-window";

type ScreenKind = "engage" | "text" | "acquire";

const screens: Record<ScreenKind, { title: string; icon: typeof Phone }> = {
  engage: { title: "Phone call", icon: Phone },
  text: { title: "Text message", icon: MessageSquareText },
  acquire: { title: "Pipeline", icon: ListChecks },
};

export function ProductScreen({ kind }: { kind: ScreenKind }) {
  const Icon = screens[kind].icon;

  return (
    <>
      {kind === "text" && <TextNotice />}
      <div className={`mac-window mac-window-${kind}`} aria-hidden="true">
        <div className="mac-titlebar mac-titlebar-labeled">
          <span className="mac-titlebar-label">
            <Icon size={13} aria-hidden="true" />
            {screens[kind].title}
          </span>
          <span className="mac-titlebar-live">
            <span className="live-dot" />
            Live
          </span>
        </div>
        {kind === "engage" && <EngageCallScreen />}
        {kind === "text" && <TextScreen />}
        {kind === "acquire" && <AcquireScreen />}
      </div>
    </>
  );
}

function Flip({ before, after }: { before: string; after: string }) {
  return (
    <strong className="mac-flip">
      <span className="mac-flip-before" data-anim="flip-before">
        {before}
      </span>
      <span className="mac-flip-after" data-anim="flip-after">
        {after}
      </span>
    </strong>
  );
}

function SoundWave() {
  return (
    <span className="mac-call-wave" aria-hidden="true">
      <i />
      <i />
      <i />
      <i />
    </span>
  );
}

function EngageCallScreen() {
  return (
    <div className="mac-body mac-call">
      <div className="mac-call-incoming" data-anim="call-incoming">
        <Avatar who="jordan" />
        <strong>Daniel Brooks</strong>
        <em>Incoming call</em>
        <span className="mac-call-status">Ringing</span>
      </div>
      <div className="mac-call-live" data-anim="call-live">
        <div className="mac-call-person">
          <span className="mac-call-face">
            <span className="mac-call-bubbles">
              <p className="mac-call-chathead" data-anim="call-say-1">
                I need to talk about bankruptcy.
              </p>
              <p className="mac-call-chathead" data-anim="call-say-3">
                Filing with my wife, Maria.
              </p>
            </span>
            <span className="mac-call-halo" data-anim="call-wave-caller" />
            <Avatar who="jordan" />
            <span data-anim="call-wave-caller">
              <SoundWave />
            </span>
          </span>
          <strong>Daniel</strong>
        </div>
        <div className="mac-call-person is-hub">
          <span className="mac-call-face">
            <span className="mac-call-bubbles">
              <p className="mac-call-chathead" data-anim="call-say-2">
                You called the right place.
              </p>
              <p className="mac-call-chathead" data-anim="call-say-4">
                Thursday at 5:30 p.m.?
              </p>
            </span>
            <span className="mac-call-halo" data-anim="call-wave-hub" />
            <HubMark />
            <span data-anim="call-wave-hub">
              <SoundWave />
            </span>
          </span>
          <strong>Hub</strong>
        </div>
      </div>
    </div>
  );
}

function TextNotice() {
  return (
    <div className="mac-notice" data-anim="notice">
      <span className="mac-notice-icon">
        <Avatar who="jordan" />
      </span>
      <span className="mac-notice-text">
        <b>Inbox</b>
        <strong>A. Jordan</strong>
        <em>Sent an inquiry via SMS</em>
      </span>
      <span className="mac-notice-time">now</span>
    </div>
  );
}

function TextScreen() {
  return (
    <div className="mac-body mac-inbox">
      <div className="mac-thread">
        <header className="mac-thread-head" data-anim="thread-head">
          <Avatar who="jordan" />
          <span>
            <strong>A. Jordan</strong>
            <em>SMS</em>
          </span>
        </header>
        <div className="mac-log">
          <div className="mac-turn is-in" data-anim="sms-in-1">
            <Avatar who="jordan" />
            <p className="mac-bubble">
              I need to talk to someone about filing bankruptcy.
            </p>
          </div>
          <div className="mac-slot">
            <div className="mac-turn is-out mac-typing" data-anim="sms-type-1">
              <p className="mac-bubble">
                <i />
                <i />
                <i />
              </p>
              <HubMark />
            </div>
            <div className="mac-turn is-out" data-anim="sms-out-1">
              <p className="mac-bubble">
                I can help with that. Is this a personal filing, or a business one?
              </p>
              <HubMark />
            </div>
          </div>
          <div className="mac-turn is-in" data-anim="sms-in-2">
            <Avatar who="jordan" />
            <p className="mac-bubble">
              Personal. Credit cards, and a car payment I’m behind on.
            </p>
          </div>
          <div className="mac-slot">
            <div className="mac-turn is-out mac-typing" data-anim="sms-type-2">
              <p className="mac-bubble">
                <i />
                <i />
                <i />
              </p>
              <HubMark />
            </div>
            <div className="mac-turn is-out" data-anim="sms-out-2">
              <p className="mac-bubble">Thanks, that helps. When works for a free consultation with the attorney?</p>
              <HubMark />
            </div>
          </div>
          <div className="mac-turn is-in" data-anim="sms-in-3">
            <Avatar who="jordan" />
            <p className="mac-bubble">Thursday at 10:30 AM.</p>
          </div>
          <div className="mac-slot">
            <div className="mac-turn is-out mac-typing" data-anim="sms-type-3">
              <p className="mac-bubble">
                <i />
                <i />
                <i />
              </p>
              <HubMark />
            </div>
            <div className="mac-turn is-out" data-anim="sms-out-3">
              <p className="mac-bubble">You’re booked for Thursday, 10:30 AM.</p>
              <HubMark />
            </div>
          </div>
        </div>
        <div className="mac-composer">
          <span className="mac-composer-field">
            <span className="mac-composer-placeholder" data-anim="composer-placeholder">
              Message
            </span>
            <span className="mac-draft" data-anim="draft-1">
              I can help with that. Is this a personal filing, or a business one?
            </span>
            <span className="mac-draft" data-anim="draft-2">
              Thanks, that helps. When works for a free consultation with the attorney?
            </span>
            <span className="mac-draft" data-anim="draft-3">
              You’re booked for Thursday, 10:30 AM.
            </span>
          </span>
          <span className="mac-composer-mic" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="16" height="16">
              <path
                d="M12 15a3 3 0 0 0 3-3V7a3 3 0 1 0-6 0v5a3 3 0 0 0 3 3Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              />
              <path
                d="M7 11a5 5 0 0 0 10 0M12 16v3"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span className="mac-composer-send" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="14" height="14">
              <path
                d="M12 18V7M7.5 11.5 12 6.5l4.5 5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}

function StagePerson() {
  return (
    <div className="mac-stage-person">
      <Avatar who="jordan" />
      <span>
        <strong>A. Jordan</strong>
        <em>SMS</em>
      </span>
    </div>
  );
}

function AcquireScreen() {
  return (
    <div className="mac-body mac-pipeline">
      <div className="mac-kanban">
        <section>
          <h4>New</h4>
        </section>
        <section>
          <h4>Qualified</h4>
          <article>
            <Avatar who="reed" />
            <strong>S. Reed</strong>
            <em>Criteria met</em>
          </article>
        </section>
        <section className="is-booked">
          <h4>Consultation booked</h4>
          <article>
            <Avatar who="keller" />
            <strong>M. Keller</strong>
            <em>Thu 9:00 AM</em>
          </article>
          <article>
            <Avatar who="nguyen" />
            <strong>L. Nguyen</strong>
            <em>Wed 2:00 PM</em>
          </article>
          <article>
            <Avatar who="alvarez" />
            <strong>P. Alvarez</strong>
            <em>Fri 11:00 AM</em>
          </article>
        </section>
        <article className="mac-mover" data-anim="mover">
          <Avatar who="jordan" />
          <strong>A. Jordan</strong>
          <Flip before="Inquiry" after="Criteria met" />
          <span className="mac-chip" data-anim="chip">
            Thu 10:30 AM
          </span>
        </article>
      </div>
      <div className="mac-stage-modal">
        <div className="mac-stage-beat" data-anim="beat-inquiry">
          <b>New inquiry</b>
          <StagePerson />
        </div>
        <div className="mac-stage-beat" data-anim="beat-qualify">
          <b>Qualified</b>
          <StagePerson />
          <span className="mac-pills">
            <i>Individual filing</i>
            <i>Chapter 7</i>
          </span>
        </div>
        <div className="mac-stage-beat mac-pick" data-anim="beat-calendar">
          <b>Book a consultation</b>
          <div className="mac-pick-grid">
            <span>Wed</span>
            <span data-anim="pick-day">Thu</span>
            <span>Fri</span>
            <span>9:00</span>
            <span>9:00</span>
            <span>9:00</span>
            <span>10:30</span>
            <span data-anim="pick-time">10:30</span>
            <span>10:30</span>
            <span>11:00</span>
            <span>11:00</span>
            <span>11:00</span>
            <span>2:00</span>
            <span>2:00</span>
            <span>2:00</span>
          </div>
        </div>
      </div>
    </div>
  );
}
