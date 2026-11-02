"use client";

import { ArrowRight, Check, LoaderCircle } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/lib/site-config";

type Values = {
  name: string;
  email: string;
  firm: string;
  role: string;
  notes: string;
};

const initialValues: Values = {
  name: "",
  email: "",
  firm: "",
  role: "",
  notes: "",
};

export function LeadForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof Values, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");

  function update(key: keyof Values, value: string) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: Partial<Record<keyof Values, string>> = {};
    if (!values.name.trim()) nextErrors.name = "Enter your name.";
    if (!values.firm.trim()) nextErrors.firm = "Enter your firm name.";
    if (!values.role) nextErrors.role = "Choose your role.";
    if (!values.email.trim()) nextErrors.email = "Enter your work email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = "Enter a valid work email.";
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setStatus("submitting");
    const endpoint = siteConfig.forms.demo.endpoint;
    if (!endpoint) {
      const body = [
        `Name: ${values.name}`,
        `Firm: ${values.firm}`,
        `Role: ${values.role}`,
        `Email: ${values.email}`,
        `Notes: ${values.notes || "None"}`,
      ].join("\n");
      window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
        "Retainer Pro demo request",
      )}&body=${encodeURIComponent(body)}`;
      setStatus("success");
      setMessage("Your email app should open with the request ready to send.");
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          intent: "demo",
          formId: siteConfig.forms.demo.formId,
        }),
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
      setMessage("Thank you. We’ll be in touch about your demo.");
      setValues(initialValues);
    } catch {
      setStatus("error");
      setMessage(
        `We couldn’t send that request. Email ${siteConfig.email} and we’ll take care of it.`,
      );
    }
  }

  if (status === "success") {
    return (
      <div className="form-success" role="status">
        <span>
          <Check size={24} aria-hidden="true" />
        </span>
        <h2>Request ready.</h2>
        <p>{message}</p>
      </div>
    );
  }

  return (
    <form className="lead-form" onSubmit={submit} noValidate>
      <div className="field-row">
        <Field
          label="Your name"
          name="name"
          value={values.name}
          onChange={(value) => update("name", value)}
          error={errors.name}
          autoComplete="name"
        />
        <Field
          label="Work email"
          name="email"
          type="email"
          value={values.email}
          onChange={(value) => update("email", value)}
          error={errors.email}
          autoComplete="email"
        />
      </div>
      <div className="field-row">
        <Field
          label="Firm name"
          name="firm"
          value={values.firm}
          onChange={(value) => update("firm", value)}
          error={errors.firm}
          autoComplete="organization"
        />
        <label className="field">
          <span>Your role</span>
          <select
            name="role"
            value={values.role}
            onChange={(event) => update("role", event.target.value)}
            aria-invalid={Boolean(errors.role)}
            aria-describedby={errors.role ? "role-error" : undefined}
          >
            <option value="">Choose one</option>
            <option>Owner / Partner</option>
            <option>Attorney</option>
            <option>Firm administrator</option>
            <option>Intake / Marketing</option>
            <option>Other</option>
          </select>
          {errors.role && (
            <small id="role-error" className="field-error">
              {errors.role}
            </small>
          )}
        </label>
      </div>
      <label className="field">
        <span>What should we know about your client journey?</span>
        <textarea
          name="notes"
          value={values.notes}
          onChange={(event) => update("notes", event.target.value)}
          placeholder="Missed calls, follow-up, or booking consultations"
          rows={4}
        />
      </label>
      {status === "error" && (
        <p className="form-error" role="alert">
          {message}
        </p>
      )}
      <button className="button form-submit" disabled={status === "submitting"}>
        {status === "submitting" ? (
          <>
            <LoaderCircle className="spin" size={17} aria-hidden="true" />
            Sending request
          </>
        ) : (
          <>
            Book a demo <ArrowRight size={17} aria-hidden="true" />
          </>
        )}
      </button>
      <p className="form-fine-print">
        For law firms only. We’ll use your information to respond to this request.
      </p>
    </form>
  );
}

type FieldProps = {
  label: string;
  name: keyof Values;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  autoComplete?: string;
};

function Field({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
  autoComplete,
}: FieldProps) {
  const errorId = `${name}-error`;
  return (
    <label className="field">
      <span>{label}</span>
      <input
        name={name}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
      />
      {error && (
        <small id={errorId} className="field-error">
          {error}
        </small>
      )}
    </label>
  );
}
