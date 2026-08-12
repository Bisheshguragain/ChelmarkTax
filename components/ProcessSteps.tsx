import { MessageSquareText, PhoneCall, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/Reveal";

const steps = [
  {
    icon: MessageSquareText,
    title: "Share your letter",
    description:
      "Let us know what kind of notice you've had and when it's due back. No need to upload anything sensitive yet.",
  },
  {
    icon: PhoneCall,
    title: "Talk it through",
    description:
      "A specialist walks you through what's actually going on, lays out your options, and points you to the right expertise.",
  },
  {
    icon: CheckCircle2,
    title: "Move forward with a plan",
    description:
      "From there, if you'd like to continue, your specialist takes over drafting replies and dealing with HMRC directly.",
  },
];

export default function ProcessSteps() {
  return (
    <section id="process" className="border-y border-tint-sage-border bg-tint-sage">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wide text-accent">
              A steadier route through it
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-brand sm:text-3xl">
              How we take this from confusing to manageable.
            </h2>
            <p className="mt-3 text-muted">
              You&apos;ll always know what&apos;s happening and why. Plain
              language, zero pressure, and the choice to proceed is always
              yours.
            </p>
          </div>
        </Reveal>

        <div className="relative mt-14 grid gap-6 sm:grid-cols-3">
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.12}>
              <div className="relative flex h-full flex-col items-start rounded-2xl border border-tint-sage-border bg-surface p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <span className="absolute -top-4 -left-1 flex h-8 w-8 items-center justify-center rounded-full bg-accent-vivid text-sm font-bold text-brand shadow">
                  {index + 1}
                </span>
                <span className="mt-2 flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white">
                  <step.icon className="h-6 w-6" strokeWidth={2} />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-brand">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
