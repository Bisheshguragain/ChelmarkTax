import type { Metadata } from "next";
import Link from "next/link";
import { hmrcProblems } from "@/data/hmrcProblems";
import ProblemIcon from "@/components/ProblemIcon";
import type { HmrcProblemCategory } from "@/lib/types";

export const metadata: Metadata = {
  title: "HMRC Problem Pages",
  description:
    "Focused guidance for specific HMRC letters, errors and situations — nudge letters, compliance check letters, return errors, penalties and more.",
  alternates: { canonical: "/knowledge-hub/problems" },
};

const categories: HmrcProblemCategory[] = [
  "Letters and requests",
  "Return errors",
  "Penalties",
  "Income and evidence",
];

export default function ProblemsIndexPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <nav className="text-xs text-muted">
        <Link href="/knowledge-hub" className="hover:text-accent">
          Knowledge Hub
        </Link>{" "}
        / HMRC Problems
      </nav>
      <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-accent">
        HMRC problems
      </p>
      <h1 className="mt-2 max-w-2xl text-3xl font-bold text-brand sm:text-4xl">
        What has happened? Find the immediate next step.
      </h1>
      <p className="mt-3 max-w-2xl text-muted">
        Shorter, focused pages for a specific letter, error or situation —
        for when you need to know what to do right now.
      </p>

      <div className="mt-10 space-y-12">
        {categories.map((category) => {
          const items = hmrcProblems.filter((p) => p.category === category);
          if (items.length === 0) return null;
          return (
            <div key={category}>
              <h2 className="text-lg font-semibold text-brand">{category}</h2>
              <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {items.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/knowledge-hub/problems/${item.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-5 transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 text-brand">
                      <ProblemIcon name={item.icon} className="h-5 w-5" strokeWidth={2} />
                    </span>
                    <h3 className="mt-3 text-sm font-semibold text-brand">{item.name}</h3>
                    <p className="mt-2 flex-1 text-xs text-muted">{item.summary}</p>
                    <span className="mt-3 text-xs font-semibold text-brand group-hover:text-accent">
                      See what to do →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
