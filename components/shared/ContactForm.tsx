"use client";

import { useState, useRef, FormEvent, ChangeEvent } from "react";

const ENDPOINT =
  process.env.NEXT_PUBLIC_FORM_ENDPOINT ||
  "https://formsubmit.co/hello@designerama.co.za";

type Status = "idle" | "submitting" | "success" | "error";

type FieldErrors = {
  name?: string;
  email?: string;
  message?: string;
};

type Props = {
  /** Label above the message textarea. Defaults to the diagnosis framing. */
  messageLabel?: string;
  /** Placeholder inside the message textarea. */
  messagePlaceholder?: string;
  /** Email subject line delivered by FormSubmit. */
  subject?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(data: FormData): FieldErrors {
  const errors: FieldErrors = {};
  const name = (data.get("name") as string | null)?.trim() ?? "";
  const email = (data.get("email") as string | null)?.trim() ?? "";
  const message = (data.get("message") as string | null)?.trim() ?? "";

  if (!name) errors.name = "Name is required.";
  if (!email) errors.email = "Email is required.";
  else if (!EMAIL_RE.test(email)) errors.email = "Enter a valid email address.";
  if (!message) errors.message = "Message is required.";

  return errors;
}

export function ContactForm({
  messageLabel = "What's not working?",
  messagePlaceholder = "Tell me what isn't working...",
  subject = "New enquiry from Designerama",
}: Props = {}) {
  const [status, setStatus] = useState<Status>("idle");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const formRef = useRef<HTMLFormElement>(null);

  function clearFieldError(field: keyof FieldErrors) {
    setFieldErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const field = e.target.name as keyof FieldErrors;
    if (fieldErrors[field]) clearFieldError(field);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    if (data.get("_honey")) {
      setStatus("success");
      return;
    }

    const errors = validate(data);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      const firstErrorField = Object.keys(errors)[0];
      const el = formRef.current?.querySelector<HTMLElement>(`[name="${firstErrorField}"]`);
      el?.focus();
      return;
    }

    setStatus("submitting");
    setFieldErrors({});

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (res.ok) {
        setStatus("success");
        formRef.current?.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-[var(--radius-card)] border border-line bg-paper px-6 py-10 text-center"
      >
        <p className="text-lg font-medium text-ink">Message sent.</p>
        <p className="mt-2 text-sm text-ink-dim">
          I read every message and aim to respond within 1 to 2 business days.
        </p>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      action={ENDPOINT}
      method="post"
      onSubmit={handleSubmit}
      className="grid gap-5"
      noValidate
    >
      <input type="hidden" name="_subject" value={subject} />
      <input type="hidden" name="_captcha" value="false" />
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="cf-honey">Leave this field empty (spam trap)</label>
        <input id="cf-honey" type="text" name="_honey" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="cf-label">
            Name
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            aria-invalid={!!fieldErrors.name}
            aria-describedby={fieldErrors.name ? "cf-name-err" : undefined}
            className={`cf-input ${fieldErrors.name ? "!border-accent" : ""}`}
            onChange={handleChange}
          />
          {fieldErrors.name && (
            <p id="cf-name-err" role="alert" className="mt-1.5 text-[0.78rem] text-accent">
              {fieldErrors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="cf-email" className="cf-label">
            Email
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            aria-invalid={!!fieldErrors.email}
            aria-describedby={fieldErrors.email ? "cf-email-err" : undefined}
            className={`cf-input ${fieldErrors.email ? "!border-accent" : ""}`}
            onChange={handleChange}
          />
          {fieldErrors.email && (
            <p id="cf-email-err" role="alert" className="mt-1.5 text-[0.78rem] text-accent">
              {fieldErrors.email}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="cf-company" className="cf-label">
          Company <span className="text-ink-dim font-normal">(optional)</span>
        </label>
        <input
          id="cf-company"
          name="company"
          type="text"
          autoComplete="organization"
          placeholder="Company name"
          className="cf-input"
        />
      </div>

      <div>
        <label htmlFor="cf-message" className="cf-label">
          {messageLabel}
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={4}
          placeholder={messagePlaceholder}
          aria-invalid={!!fieldErrors.message}
          aria-describedby={fieldErrors.message ? "cf-message-err" : undefined}
          className={`cf-input resize-y ${fieldErrors.message ? "!border-accent" : ""}`}
          onChange={handleChange}
        />
        {fieldErrors.message && (
          <p id="cf-message-err" role="alert" className="mt-1.5 text-[0.78rem] text-accent">
            {fieldErrors.message}
          </p>
        )}
      </div>

      <div aria-live="polite">
        {status === "error" && (
          <p className="mb-3 text-sm text-accent" role="alert">
            Something went wrong. Please try again, or email directly.
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn btn--solid w-fit disabled:opacity-60 disabled:pointer-events-none"
      >
        {status === "submitting" ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
