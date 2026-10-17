import { Quote } from "lucide-react";

/**
 * Reserved space for success stories and reviews from the 10 founding firms.
 * The cards are intentionally empty placeholders. Do not invent testimonials;
 * fill these in with real quotes and firm names once they are approved.
 */
const slots = [1, 2, 3];

export function SuccessStories() {
  return (
    <div className="stories">
      <p className="stories-flag" role="note">
        Reserved for success stories and reviews from our 10 founding firms. Real
        quotes go here once approved.
      </p>
      <div className="stories-grid">
        {slots.map((slot) => (
          <article className="story-card is-empty" key={slot} aria-hidden="true">
            <Quote size={22} strokeWidth={2} />
            <span className="story-line" />
            <span className="story-line" />
            <span className="story-line short" />
            <footer>
              <span className="story-avatar" />
              <span className="story-meta">
                <span />
                <span className="short" />
              </span>
            </footer>
          </article>
        ))}
      </div>
    </div>
  );
}
