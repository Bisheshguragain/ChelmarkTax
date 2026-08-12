import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import Reveal from "@/components/Reveal";

const points = [
  "An honest read on what's actually at risk",
  "Correspondence drafted with HMRC's process in mind",
  "Backup for meetings, evidence-gathering and negotiation",
  "A plan aimed at closing the enquiry, not prolonging it",
];

export default function WhySpecialist() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-wide text-accent">
            Why go in with a specialist
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-brand sm:text-3xl">
            Knowing the tax rules isn&apos;t the same as knowing HMRC.
          </h2>
          <p className="mt-3 text-muted">
            HMRC enquiries run on procedure as much as tax law — response
            windows, information powers, and unwritten expectations about
            tone and pace. A specialist reads both sides of that equation,
            so what you send back doesn&apos;t accidentally invite more
            questions.
          </p>
          <Link
            href="/#enquiry"
            className="mt-6 inline-block rounded-full border-2 border-brand px-6 py-3 text-sm font-semibold text-brand transition hover:bg-brand hover:text-white"
          >
            Talk through your case
          </Link>
        </Reveal>

        <Reveal delay={0.15}>
          <ul className="space-y-5 rounded-2xl border border-tint-gold-border bg-gradient-to-br from-tint-gold to-surface p-7 shadow-md">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-vivid text-brand">
                  <CheckCircle2 className="h-4 w-4" strokeWidth={2.5} />
                </span>
                <span className="pt-0.5 text-foreground/90">{point}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
