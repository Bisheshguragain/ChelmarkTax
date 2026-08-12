"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import type { Problem, City } from "@/lib/types";

type Props = {
  problems: Problem[];
  cities: City[];
};

export default function LocalHelpDirectory({ problems, cities }: Props) {
  const [query, setQuery] = useState("");
  const [activeProblem, setActiveProblem] = useState<string | "all">("all");

  const filteredCities = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return cities;
    return cities.filter(
      (city) =>
        city.name.toLowerCase().includes(q) ||
        city.region.toLowerCase().includes(q)
    );
  }, [query, cities]);

  const visibleProblems =
    activeProblem === "all"
      ? problems
      : problems.filter((p) => p.slug === activeProblem);

  return (
    <div>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative w-full max-w-xs">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by city or region…"
            className="w-full rounded-full border border-border bg-surface py-2 pl-9 pr-3 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveProblem("all")}
            className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
              activeProblem === "all"
                ? "bg-brand text-white"
                : "border border-border bg-surface text-brand hover:border-accent"
            }`}
          >
            All enquiry types
          </button>
          {problems.map((problem) => (
            <button
              key={problem.slug}
              type="button"
              onClick={() => setActiveProblem(problem.slug)}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                activeProblem === problem.slug
                  ? "bg-brand text-white"
                  : "border border-border bg-surface text-brand hover:border-accent"
              }`}
            >
              {problem.shortName}
            </button>
          ))}
        </div>
      </div>

      {filteredCities.length === 0 ? (
        <p className="mt-8 text-sm text-muted">
          No cities match &ldquo;{query}&rdquo; yet — try a different search,
          or{" "}
          <Link href="/contact" className="text-accent hover:underline">
            contact us directly
          </Link>
          .
        </p>
      ) : (
        <div className="mt-10 space-y-12">
          {visibleProblems.map((problem) => (
            <div key={problem.slug} id={problem.slug}>
              <h2 className="text-xl font-semibold text-brand">
                {problem.name}
              </h2>
              <p className="mt-1 text-sm text-muted">{problem.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {filteredCities.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/local-help/${problem.slug}-${city.slug}`}
                    className="rounded-full border border-border bg-surface px-3 py-1.5 text-sm text-brand transition hover:border-accent hover:text-accent"
                  >
                    {problem.shortName} in {city.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
