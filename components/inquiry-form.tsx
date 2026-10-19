"use client";

export function InquiryForm() {
  return (
    <form
      className="inquiry-form"
      onSubmit={(event) => {
        event.preventDefault();
      }}
      noValidate
    >
      <label className="field">
        <span>Name</span>
        <input name="name" type="text" autoComplete="name" />
      </label>
      <label className="field">
        <span>Firm</span>
        <input name="firm" type="text" autoComplete="organization" />
      </label>
      <label className="field">
        <span>Email</span>
        <input name="email" type="email" autoComplete="email" />
      </label>
      <label className="field">
        <span>Phone</span>
        <input name="phone" type="tel" autoComplete="tel" />
      </label>
      <label className="field">
        <span>Message</span>
        <textarea name="message" rows={4} />
      </label>
      <button className="button form-submit" type="submit">
        Send inquiry
      </button>
    </form>
  );
}
