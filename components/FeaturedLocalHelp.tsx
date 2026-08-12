import Link from "next/link";
import { seoData } from "@/data/seoData";
import ProblemIcon from "@/components/ProblemIcon";
import Reveal from "@/components/Reveal";

const featuredSlugs = [
  "self-assessment-enquiry-manchester",
  "vat-enquiry-birmingham",
  "cop9-disclosure-leeds",
];

export default function FeaturedLocalHelp() {
  const featured = featuredSlugs
    .map((slug) => seoData.find((entry) => entry.slug === slug))
    .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry));

  return (
    <section className="bg-tint-sage">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                Local guidance
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-brand sm:text-3xl">
                Guidance close to home.
              </h2>
            </div>
            <Link
              href="/local-help"
              className="text-sm font-semibold text-brand underline decoration-accent/40 underline-offset-4 hover:text-accent"
            >
              View all local support →
            </Link>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {featured.map((entry, index) => {
            const isGold = index === 1;
            return (
              <Reveal key={entry.slug} delay={index * 0.08}>
                <Link
                  href={`/local-help/${entry.slug}`}
                  className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-surface p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${
                    isGold ? "border-tint-gold-border" : "border-border"
                  }`}
                >
                  <span
                    aria-hidden
                    className={`absolute inset-x-0 top-0 h-1 ${isGold ? "bg-accent-vivid" : "bg-brand"}`}
                  />
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-lg text-white transition ${
                      isGold
                        ? "bg-gradient-to-br from-accent-vivid to-accent-vivid-dark text-brand"
                        : "bg-gradient-to-br from-brand to-brand-light"
                    }`}
                  >
                    <ProblemIcon name={entry.icon} className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <p className="mt-4 text-xs font-medium uppercase tracking-wide text-accent">
                    {entry.cityName}
                  </p>
                  <h3 className="mt-1 text-base font-semibold text-brand">
                    {entry.problemName}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-muted">
                    {entry.metaDescription}
                  </p>
                  <span className="mt-4 text-sm font-semibold text-brand group-hover:text-accent">
                    Read the guidance →
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
