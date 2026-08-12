"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { User, Mail, Phone, MessageSquare } from "lucide-react";

type Props = {
  source: string;
  presetTopic?: string;
  presetSubcategory?: string;
  presetLocation?: string;
};

type Status = "idle" | "sending" | "success" | "error";

export default function EmailJsForm({ source, presetTopic, presetSubcategory, presetLocation }: Props) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // React nulls out event.currentTarget once the handler yields (e.g. after
    // an await), so the form element must be captured synchronously here.
    const form = event.currentTarget;
    setStatus("sending");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error(
        "EmailJS is not configured. Set NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID and NEXT_PUBLIC_EMAILJS_PUBLIC_KEY."
      );
      setStatus("error");
      return;
    }

    try {
      await emailjs.sendForm(serviceId, templateId, form, {
        publicKey,
      });
      setStatus("success");
      form.reset();
    } catch (error) {
      console.error("EmailJS send failed", error);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border border-accent/30 bg-accent/10 p-6 text-sm text-brand">
        Thanks — your enquiry has been sent. A specialist will get back to you
        shortly on a no-obligation basis.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="hidden" name="source_page" value={source} />
      <input type="hidden" name="topic" value={presetTopic ?? "General enquiry (not specified)"} />
      <input type="hidden" name="subcategory" value={presetSubcategory ?? "Not specified"} />
      <input type="hidden" name="location" value={presetLocation ?? "Not specified"} />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-brand">
            Full name
          </label>
          <div className="relative">
            <User className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-blue-600" strokeWidth={2.25} />
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded-md border-2 border-accent-dark bg-surface py-2 pl-10 pr-3 text-sm outline-none focus:border-accent-dark focus:ring-1 focus:ring-accent-dark"
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-brand">
            Email address
          </label>
          <div className="relative">
            <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-purple-600" strokeWidth={2.25} />
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-md border-2 border-accent-dark bg-surface py-2 pl-10 pr-3 text-sm outline-none focus:border-accent-dark focus:ring-1 focus:ring-accent-dark"
            />
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="mb-1 block text-sm font-medium text-brand">
          Phone number (optional)
        </label>
        <div className="relative">
          <Phone className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-amber-600" strokeWidth={2.25} />
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full rounded-md border-2 border-accent-dark bg-surface py-2 pl-10 pr-3 text-sm outline-none focus:border-accent-dark focus:ring-1 focus:ring-accent-dark"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-brand">
          What did the letter say?
        </label>
        <div className="relative">
          <MessageSquare className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-emerald-600" strokeWidth={2.25} />
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            placeholder="A short description of the notice you've received is enough for now — no need to attach anything sensitive."
            className="w-full rounded-md border-2 border-accent-dark bg-surface py-2 pl-10 pr-3 text-sm outline-none focus:border-accent-dark focus:ring-1 focus:ring-accent-dark"
          />
        </div>
      </div>

      <label className="flex items-start gap-2.5 text-xs text-muted">
        <input
          type="checkbox"
          name="consent"
          value="Agreed to Privacy Policy and Terms of Business"
          required
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-2 border-accent-dark text-accent-vivid focus:ring-accent-dark"
        />
        <span>
          I agree to the{" "}
          <Link href="/privacy-policy" target="_blank" className="font-semibold text-brand underline decoration-accent/40 underline-offset-2 hover:text-accent">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="/terms-of-business" target="_blank" className="font-semibold text-brand underline decoration-accent/40 underline-offset-2 hover:text-accent">
            Terms of Business
          </Link>
          .
        </span>
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-md bg-accent-vivid px-4 py-3 text-sm font-semibold text-brand transition hover:bg-accent-vivid-dark disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send my enquiry"}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong sending your enquiry. Please try again, or
          check the site configuration if this keeps happening.
        </p>
      )}

      <p className="text-xs text-muted">
        We keep your information private and never pass it on. Please hold
        off on sending sensitive documents through this form.
      </p>
    </form>
  );
}
