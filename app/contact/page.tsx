import type { Metadata } from "next";
import { Lock, Users2, ShieldCheck, Mail, MapPin } from "lucide-react";
import EmailJsForm from "@/components/EmailJsForm";
import { CONTACT_EMAIL, CONTACT_MAILTO, CONTACT_ADDRESS_LINES } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with ChelmarkTax for confidential, no-obligation guidance on your HMRC tax enquiry.",
  alternates: { canonical: "/contact" },
};

const badges = [
  { icon: Lock, label: "Confidential" },
  { icon: Users2, label: "UK-based specialists" },
  { icon: ShieldCheck, label: "Free initial call, no obligation" },
];

const steps = [
  {
    title: "You tell us what's happened",
    description: "A short description of the letter or notice is enough to get started.",
  },
  {
    title: "A specialist reviews your case",
    description: "We'll get back to you to talk through the situation and your options.",
  },
  {
    title: "You decide how to proceed",
    description: "No pressure, no obligation — the first conversation is simply to help you understand where you stand.",
  },
];

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="text-xs font-semibold uppercase tracking-wide text-accent">
            Contact us
          </p>
          <h1 className="mt-2 text-3xl font-bold text-brand sm:text-4xl">
            Reach a specialist directly.
          </h1>
          <p className="mt-3 max-w-xl text-muted">
            Share a few details about the letter or notice you&apos;ve received.
            A specialist will get back to you on a confidential, no-obligation
            basis.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 border-y border-border py-6">
            {badges.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 text-xs font-medium text-muted"
              >
                <Icon className="h-4 w-4 text-accent" strokeWidth={2.25} />
                {label}
              </span>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-border bg-tint-sage p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-accent">
              Prefer to reach us directly?
            </p>
            <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-8">
              <a
                href={CONTACT_MAILTO}
                className="group inline-flex items-start gap-2.5 text-sm font-medium text-brand transition hover:text-accent"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent-dark" strokeWidth={2.25} />
                <span>
                  <span className="block underline decoration-accent/30 underline-offset-2 group-hover:decoration-accent">
                    {CONTACT_EMAIL}
                  </span>
                  <span className="block text-xs font-normal text-muted">
                    Opens your email app with a subject and starter message ready to edit
                  </span>
                </span>
              </a>

              <div className="inline-flex items-start gap-2.5 text-sm font-medium text-brand">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-dark" strokeWidth={2.25} />
                <span>
                  {CONTACT_ADDRESS_LINES.map((line) => (
                    <span key={line} className="block text-xs font-normal text-muted first:text-sm first:font-medium first:text-brand">
                      {line}
                    </span>
                  ))}
                </span>
              </div>
            </div>
          </div>

          <h2 className="mt-10 text-xl font-semibold text-brand">
            What happens after you get in touch
          </h2>
          <ol className="mt-5 space-y-5">
            {steps.map((step, index) => (
              <li key={step.title} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand text-xs font-semibold text-white">
                  {index + 1}
                </span>
                <div>
                  <p className="text-sm font-semibold text-brand">{step.title}</p>
                  <p className="mt-1 text-sm text-muted">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm sm:p-8 lg:sticky lg:top-24">
            <h2 className="text-lg font-semibold text-brand">Send an enquiry</h2>
            <p className="mt-1 text-sm text-muted">
              Confidential, no-obligation first conversation.
            </p>
            <div className="mt-4">
              <EmailJsForm source="contact-page" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
