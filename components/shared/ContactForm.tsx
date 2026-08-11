"use client";

import { useState, useRef, FormEvent } from "react";

const ENDPOINT =
  process.env.NEXT_PUBLIC_FORM_ENDPOINT ||
  "https://formsubmit.co/hello@designerama.co.za";

type Status = "idle" | "submitting" | "success" | "error";

type Props = {
  /** Label above the message textarea. Defaults to the diagnosis framing. */
  messageLabel?: string;
  /** Placeholder inside the message textarea. */
  messagePlaceholder?: string;
  /** Email subject line delivered by FormSubmit. */
  subject?: string;
};

export function ContactForm({
  messageLabel = "What's not working?",
  messagePlaceholder = "Tell me what isn't working...",
  subject = "New enquiry from Designerama",
}: Props = {}) {
  const [status, setStatus] = useState<Status>("idle");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const data = new FormData(e.currentTarget);

    if (data.get("_honey")) {
      setStatus("success");
      return;
    }

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
      onSubmit={handleSubmit}
      className="grid gap-5"
      noValidate
    >
      <input type="hidden" name="_subject" value={subject} />
      <input type="hidden" name="_captcha" value="false" />
      <input
        type="text"
        name="_honey"
        className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

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
            className="cf-input"
          />
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
            className="cf-input"
          />
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
          className="cf-input resize-y"
        />
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
