import Image from "next/image";
import alvarezAvatar from "@/public/avatars/alvarez.webp";
import jordanAvatar from "@/public/avatars/jordan.webp";
import kellerAvatar from "@/public/avatars/keller.webp";
import nguyenAvatar from "@/public/avatars/nguyen.webp";
import reedAvatar from "@/public/avatars/reed.webp";

type ScreenKind = "engage" | "acquire" | "serve";

const avatars = {
  alvarez: alvarezAvatar,
  jordan: jordanAvatar,
  keller: kellerAvatar,
  nguyen: nguyenAvatar,
  reed: reedAvatar,
};

function Avatar({ who }: { who: keyof typeof avatars }) {
  return (
    <span className="mac-avatar">
      <Image src={avatars[who]} alt="" width={64} height={64} />
    </span>
  );
}

const titles: Record<ScreenKind, string> = {
  engage: "Inbox",
  acquire: "Pipeline",
  serve: "Case file",
};

export function ProductScreen({ kind }: { kind: ScreenKind }) {
  return (
    <>
      {kind === "engage" && <EngageNotice />}
      <div className={`mac-window mac-window-${kind}`} aria-hidden="true">
        <div className="mac-titlebar">
          <span className="mac-dots">
            <i />
            <i />
            <i />
          </span>
          <span className="mac-title">{titles[kind]}</span>
        </div>
        {kind === "engage" && <EngageScreen />}
        {kind === "acquire" && <AcquireScreen />}
        {kind === "serve" && <ServeScreen />}
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

function EngageNotice() {
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

function EngageScreen() {
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
          <p className="mac-bubble is-in" data-anim="sms-in-1">
            I need to talk to someone about filing bankruptcy.
          </p>
          <div className="mac-slot">
            <p className="mac-bubble is-out mac-typing" data-anim="sms-type-1">
              <i />
              <i />
              <i />
            </p>
            <p className="mac-bubble is-out" data-anim="sms-out-1">
              I can help with that. Is this a personal filing, or a business one?
            </p>
          </div>
          <p className="mac-bubble is-in" data-anim="sms-in-2">
            Personal. Credit cards, and a car payment I’m behind on.
          </p>
          <div className="mac-slot">
            <p className="mac-bubble is-out mac-typing" data-anim="sms-type-2">
              <i />
              <i />
              <i />
            </p>
            <p className="mac-bubble is-out" data-anim="sms-out-2">
              Saved. When works for a consultation?
            </p>
          </div>
          <p className="mac-bubble is-in" data-anim="sms-in-3">
            Thursday at 10:30 AM.
          </p>
          <div className="mac-slot">
            <p className="mac-bubble is-out mac-typing" data-anim="sms-type-3">
              <i />
              <i />
              <i />
            </p>
            <p className="mac-bubble is-out" data-anim="sms-out-3">
              You’re booked for Thursday, 10:30 AM.
            </p>
          </div>
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
          <article className="is-ghost" />
        </section>
        <section>
          <h4>Qualified</h4>
          <article>
            <Avatar who="reed" />
            <strong>S. Reed</strong>
            <em>Criteria met</em>
          </article>
          <article className="is-ghost" />
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
          <article className="is-ghost is-landing" />
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

function ServeScreen() {
  return (
    <div className="mac-body mac-case">
      <nav>
        <span>Cases</span>
        <span>My Dashboard</span>
        <span className="is-on">Questionnaire</span>
        <span>Documents</span>
      </nav>
      <div className="mac-case-main">
        <header>
          <h4>Harbor & Stone Law</h4>
          <p>Case 24-10311</p>
          <span className="mac-pill">Retained</span>
        </header>
        <div className="mac-file-tabs">
          <span className="is-on">Schedule A/B</span>
          <span>Schedule J</span>
          <span>Debts & Creditors</span>
          <span>Business Info</span>
          <span>Bankruptcy forms</span>
        </div>
        <ul>
          <li>
            <span>Questionnaire</span>
            <Flip before="In progress" after="Complete" />
          </li>
          <li>
            <span>Documents</span>
            <strong className="mac-flip">
              <span className="mac-flip-before" data-anim="tick">
                <span className="mac-tick">
                  <i>3 uploads</i>
                  <i>5 uploads</i>
                  <i>7 uploads</i>
                  <i>9 uploads</i>
                  <i>11 uploads</i>
                  <i>12 uploads</i>
                </span>
              </span>
              <span className="mac-flip-after" data-anim="flip-after">
                On file · 12 uploads
              </span>
            </strong>
          </li>
          <li>
            <span>Bankruptcy forms</span>
            <Flip before="Pending" after="Ready" />
          </li>
        </ul>
        <div className="mac-progress">
          <i data-anim="fill" />
        </div>
        <span className="mac-continue" data-anim="continue">
          Continue
        </span>
      </div>
    </div>
  );
}
