import type { Metadata } from "next";
import Link from "next/link";
import { industries } from "@/data/industries";
import ProblemIcon from "@/components/ProblemIcon";

export const metadata: Metadata = {
  title: "HMRC Enquiry Guidance by Industry",
  description:
    "Industry-specific HMRC enquiry guidance covering landlords, construction, hospitality, online sellers, drivers, healthcare and more.",
  alternates: { canonical: "/knowledge-hub/industries" },
};

export default function IndustriesIndexPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <nav className="text-xs text-muted">
        <Link href="/knowledge-hub" className="hover:text-accent">
          Knowledge Hub
        </Link>{" "}
        / Industries
      </nav>
      <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-accent">
        Industry guidance
      </p>
      <h1 className="mt-2 max-w-2xl text-3xl font-bold text-brand sm:text-4xl">
        HMRC enquiry guidance, shaped around your sector.
      </h1>
      <p className="mt-3 max-w-2xl text-muted">
        The rules HMRC applies are the same for everyone, but the records
        that matter and the questions that come up differ a lot by sector.
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((industry) => (
          <Link
            key={industry.slug}
            href={`/knowledge-hub/industries/${industry.slug}`}
            className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand text-white transition group-hover:bg-accent-vivid group-hover:text-brand">
              <ProblemIcon name={industry.icon} className="h-5 w-5" strokeWidth={2} />
            </span>
            <h2 className="mt-4 text-lg font-semibold text-brand">{industry.name}</h2>
            <p className="mt-2 flex-1 text-sm text-muted">{industry.summary}</p>
            <span className="mt-3 text-sm font-semibold text-brand group-hover:text-accent">
              Explore guidance →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
