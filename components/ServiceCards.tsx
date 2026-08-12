import Link from "next/link";
import { problems } from "@/data/problems";
import ProblemIcon from "@/components/ProblemIcon";
import Reveal from "@/components/Reveal";

export default function ServiceCards() {
  return (
    <section id="how-we-help" className="bg-surface py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wide text-accent">
              Specialist support
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-brand sm:text-3xl">
              Guidance shaped around your specific enquiry.
            </h2>
            <p className="mt-3 text-muted">
              It&apos;s easy to feel pressured by an HMRC letter before you&apos;ve
              even worked out what it&apos;s asking. We break the request down,
              flag what actually matters, and map out a sensible next step.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem, index) => {
            const isGold = index % 2 === 1;
            return (
              <Reveal key={problem.slug} delay={index * 0.06}>
                <div
                  id={problem.slug}
                  className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${
                    isGold
                      ? "border-tint-gold-border bg-gradient-to-br from-tint-gold to-surface hover:shadow-accent-vivid/20"
                      : "border-tint-sage-border bg-gradient-to-br from-tint-sage to-surface hover:shadow-brand/10"
                  }`}
                >
                  <span
                    aria-hidden
                    className={`absolute inset-x-0 top-0 h-1 ${isGold ? "bg-accent-vivid" : "bg-brand"}`}
                  />
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-xl text-white ${
                      isGold
                        ? "bg-gradient-to-br from-accent-vivid to-accent-vivid-dark text-brand"
                        : "bg-gradient-to-br from-brand to-brand-light"
                    }`}
                  >
                    <ProblemIcon name={problem.icon} className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-brand">
                    {problem.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-muted">{problem.summary}</p>
                  <p className="mt-4 text-xs font-medium uppercase tracking-wide text-accent">
                    {problem.hmrcSection}
                  </p>
                  <Link
                    href="/#enquiry"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand transition group-hover:gap-2 group-hover:text-accent"
                  >
                    Talk to a specialist →
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
