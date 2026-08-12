import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, CheckCircle2, Sparkles, AlertTriangle, ListChecks } from "lucide-react";
import { problems } from "@/data/problems";
import { hmrcProblems } from "@/data/hmrcProblems";
import { industries } from "@/data/industries";
import { guideToProblems, guideToIndustries } from "@/lib/relatedContent";
import ProblemIcon from "@/components/ProblemIcon";
import KnowledgeSidebarCta from "@/components/KnowledgeSidebarCta";
import InlineCta from "@/components/InlineCta";

const SITE_URL = "https://www.chelmarktax.co.uk";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return problems.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const problem = problems.find((p) => p.slug === slug);
  if (!problem) return {};

  const title = problem.name.toLowerCase().includes("hmrc")
    ? `${problem.name}: A Complete UK Guide`
    : `HMRC ${problem.name}: A Complete UK Guide`;

  return {
    title,
    description: `${problem.summary} Covers ${problem.hmrcSection}, what to expect, how to prepare, and answers to common questions.`,
    alternates: { canonical: `/knowledge-hub/guides/${problem.slug}` },
  };
}

export default async function GuideDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const problem = problems.find((p) => p.slug === slug);

  if (!problem) {
    notFound();
  }

  const relatedProblems = hmrcProblems.filter((p) =>
    (guideToProblems[problem.slug] ?? []).includes(p.slug)
  );
  const relatedIndustries = industries.filter((i) =>
    (guideToIndustries[problem.slug] ?? []).includes(i.slug)
  );

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Knowledge Hub", item: `${SITE_URL}/knowledge-hub` },
      { "@type": "ListItem", position: 3, name: "Guides", item: `${SITE_URL}/knowledge-hub/guides` },
      { "@type": "ListItem", position: 4, name: problem.name, item: `${SITE_URL}/knowledge-hub/guides/${problem.slug}` },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: problem.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.points ? `${faq.answer} ${faq.points.join(". ")}.` : faq.answer,
      },
    })),
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <nav className="text-xs text-muted">
        <Link href="/knowledge-hub/guides" className="hover:text-accent">
          Guides
        </Link>{" "}
        / {problem.name}
      </nav>

      <div className="mt-4 grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand text-white">
            <ProblemIcon name={problem.icon} className="h-5 w-5" strokeWidth={2} />
          </span>
          <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-accent">
            {problem.hmrcSection}
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-brand sm:text-4xl">
            {problem.name}: A Complete UK Guide
          </h1>
          <p className="mt-4 text-muted">{problem.summary}</p>

          <div className="mt-6 flex items-start gap-3 rounded-lg border border-accent/30 bg-accent/10 p-4">
            <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2.25} />
            <p className="text-sm text-brand">
              <span className="font-semibold">Typical deadline: </span>
              {problem.typicalDeadline}
            </p>
          </div>

          <h2 className="mt-10 text-xl font-semibold text-brand">Understanding this enquiry</h2>
          <div className="mt-4 rounded-2xl border border-tint-gold-border bg-tint-gold p-5">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-accent">
              <Sparkles className="h-4 w-4" strokeWidth={2.25} />
              At a glance
            </p>
            <ul className="mt-3 space-y-2">
              {problem.keyPoints.map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm text-brand">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2} />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-5 space-y-4 text-sm leading-relaxed text-foreground/90">
            {problem.narrative.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <h2 className="mt-10 text-xl font-semibold text-brand">How to prepare</h2>
          <p className="mt-2 text-sm text-muted">
            Taking a structured, evidence-led approach from the outset — rather than reacting to each request as it arrives — tends to produce a faster and less stressful outcome.
          </p>
          <ol className="mt-5 space-y-4">
            {problem.preparationSteps.map((step, index) => (
              <li key={step} className="flex items-start gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand text-xs font-semibold text-white">
                  {index + 1}
                </span>
                <p className="text-sm leading-relaxed text-foreground/90">{step}</p>
              </li>
            ))}
          </ol>

          <div className="mt-10 rounded-2xl border border-border bg-background p-6">
            <h2 className="text-base font-semibold text-brand">
              What documentation to gather
            </h2>
            <ul className="mt-4 space-y-2">
              {problem.checklist.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-foreground/90">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <h2 className="mt-10 text-xl font-semibold text-brand">Common mistakes to avoid</h2>
          <p className="mt-2 text-sm text-muted">
            These are the errors we see most often in practice — being aware of them in advance can help you avoid an entirely preventable setback.
          </p>
          <div className="mt-4 space-y-3">
            {problem.commonMistakes.map((mistake) => (
              <div key={mistake} className="flex items-start gap-3 rounded-lg border border-border bg-surface p-4">
                <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2} />
                <p className="text-sm text-foreground/90">{mistake}</p>
              </div>
            ))}
          </div>

          <InlineCta />

          <h2 className="mt-10 text-xl font-semibold text-brand">What happens after you respond</h2>
          <p className="mt-2 text-sm text-muted">
            Knowing the typical sequence of events helps you feel more in control and know roughly what to expect at each stage.
          </p>
          <ol className="mt-5 space-y-4">
            {problem.whatHappensNext.map((step) => (
              <li key={step} className="flex items-start gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-tint-gold text-xs font-semibold text-brand">
                  <ListChecks className="h-3.5 w-3.5" strokeWidth={2.25} />
                </span>
                <p className="text-sm leading-relaxed text-foreground/90">{step}</p>
              </li>
            ))}
          </ol>

          <h2 className="mt-10 text-xl font-semibold text-brand">Frequently asked questions</h2>
          <p className="mt-2 text-sm text-muted">
            The questions we&apos;re asked most often about this specific type of enquiry, answered in plain English.
          </p>
          <div className="mt-4 divide-y divide-border rounded-2xl border border-border bg-surface">
            {problem.faqs.map((faq) => (
              <div key={faq.question} className="p-5">
                <h3 className="text-sm font-semibold text-brand">{faq.question}</h3>
                <p className="mt-2 text-sm text-muted">{faq.answer}</p>
                {faq.points && (
                  <ul className="mt-3 space-y-1.5">
                    {faq.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-foreground/90">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" strokeWidth={2} />
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {relatedProblems.length > 0 && (
            <div className="mt-10 border-t border-border pt-6">
              <h3 className="text-sm font-semibold text-brand">Related HMRC problems</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {relatedProblems.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/knowledge-hub/problems/${p.slug}`}
                    className="rounded-full border border-border bg-background px-3 py-1.5 text-xs text-brand transition hover:border-accent hover:text-accent"
                  >
                    {p.name}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {relatedIndustries.length > 0 && (
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-brand">Relevant industry guidance</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {relatedIndustries.map((i) => (
                  <Link
                    key={i.slug}
                    href={`/knowledge-hub/industries/${i.slug}`}
                    className="rounded-full border border-border bg-background px-3 py-1.5 text-xs text-brand transition hover:border-accent hover:text-accent"
                  >
                    {i.name}
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="mt-6">
            <h3 className="text-sm font-semibold text-brand">More guides</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              <Link
                href="/local-help"
                className="rounded-full border border-border bg-background px-3 py-1.5 text-xs text-brand transition hover:border-accent hover:text-accent"
              >
                Find local support by city →
              </Link>
              {problems
                .filter((p) => p.slug !== problem.slug)
                .map((p) => (
                  <Link
                    key={p.slug}
                    href={`/knowledge-hub/guides/${p.slug}`}
                    className="rounded-full border border-border bg-background px-3 py-1.5 text-xs text-brand transition hover:border-accent hover:text-accent"
                  >
                    {p.name}
                  </Link>
                ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <KnowledgeSidebarCta />
        </div>
      </div>
    </section>
  );
}
