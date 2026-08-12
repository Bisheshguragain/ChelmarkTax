import type { Metadata } from "next";
import Link from "next/link";
import { problems } from "@/data/problems";
import ProblemIcon from "@/components/ProblemIcon";

export const metadata: Metadata = {
  title: "HMRC Enquiry Guides",
  description:
    "In-depth guides to 8 types of HMRC tax enquiry — Self Assessment, VAT, PAYE, penalty appeals, COP8/COP9, Worldwide Disclosure, Capital Gains Tax and Corporation Tax.",
  alternates: { canonical: "/knowledge-hub/guides" },
};

export default function GuidesIndexPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <nav className="text-xs text-muted">
        <Link href="/knowledge-hub" className="hover:text-accent">
          Knowledge Hub
        </Link>{" "}
        / Guides
      </nav>
      <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-accent">
        In-depth guides
      </p>
      <h1 className="mt-2 max-w-2xl text-3xl font-bold text-brand sm:text-4xl">
        HMRC enquiry guides, explained in full.
      </h1>
      <p className="mt-3 max-w-2xl text-muted">
        Each guide covers one type of HMRC enquiry from start to finish —
        what it means, how to prepare, and what to expect.
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {problems.map((problem) => (
          <Link
            key={problem.slug}
            href={`/knowledge-hub/guides/${problem.slug}`}
            className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand text-white transition group-hover:bg-accent-vivid group-hover:text-brand">
              <ProblemIcon name={problem.icon} className="h-5 w-5" strokeWidth={2} />
            </span>
            <h2 className="mt-4 text-lg font-semibold text-brand">{problem.name}</h2>
            <p className="mt-2 flex-1 text-sm text-muted">{problem.summary}</p>
            <p className="mt-4 text-xs font-medium uppercase tracking-wide text-accent">
              {problem.hmrcSection}
            </p>
            <span className="mt-3 text-sm font-semibold text-brand group-hover:text-accent">
              Read the guide →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
