import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, Sparkles, AlertTriangle, ListChecks } from "lucide-react";
import { hmrcProblems } from "@/data/hmrcProblems";
import { problems } from "@/data/problems";
import { problemToGuides } from "@/lib/relatedContent";
import ProblemIcon from "@/components/ProblemIcon";
import KnowledgeSidebarCta from "@/components/KnowledgeSidebarCta";
import InlineCta from "@/components/InlineCta";

const SITE_URL = "https://www.chelmarktax.co.uk";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return hmrcProblems.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = hmrcProblems.find((p) => p.slug === slug);
  if (!item) return {};

  return {
    title: item.name,
    description: item.summary,
    alternates: { canonical: `/knowledge-hub/problems/${item.slug}` },
  };
}

export default async function ProblemDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = hmrcProblems.find((p) => p.slug === slug);

  if (!item) {
    notFound();
  }

  const relatedGuides = problems.filter((p) => (problemToGuides[item.slug] ?? []).includes(p.slug));

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Knowledge Hub", item: `${SITE_URL}/knowledge-hub` },
      { "@type": "ListItem", position: 3, name: "HMRC Problems", item: `${SITE_URL}/knowledge-hub/problems` },
      { "@type": "ListItem", position: 4, name: item.name, item: `${SITE_URL}/knowledge-hub/problems/${item.slug}` },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: item.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <nav className="text-xs text-muted">
        <Link href="/knowledge-hub/problems" className="hover:text-accent">
          HMRC Problems
        </Link>{" "}
        / {item.category}
      </nav>

      <div className="mt-4 grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand text-white">
            <ProblemIcon name={item.icon} className="h-5 w-5" strokeWidth={2} />
          </span>
          <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-accent">
            {item.category}
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-brand sm:text-4xl">{item.name}</h1>
          <p className="mt-4 text-muted">{item.summary}</p>

          <div className="mt-8 rounded-2xl border border-tint-gold-border bg-tint-gold p-5">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-accent">
              <Sparkles className="h-4 w-4" strokeWidth={2.25} />
              At a glance
            </p>
            <ul className="mt-3 space-y-2">
              {item.keyPoints.map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm text-brand">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2} />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5 space-y-4 text-sm leading-relaxed text-foreground/90">
            {item.narrative.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <h2 className="mt-10 text-xl font-semibold text-brand">How to prepare</h2>
          <p className="mt-2 text-sm text-muted">
            Taking a structured, evidence-led approach from the outset — rather than reacting to each request as it arrives — tends to produce a faster and less stressful outcome.
          </p>
          <ol className="mt-5 space-y-4">
            {item.preparationSteps.map((step, index) => (
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
              {item.checklist.map((c) => (
                <li key={c} className="flex items-start gap-2 text-sm text-foreground/90">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2} />
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <h2 className="mt-10 text-xl font-semibold text-brand">Common mistakes to avoid</h2>
          <p className="mt-2 text-sm text-muted">
            These are the errors we see most often in practice — being aware of them in advance can help you avoid an entirely preventable setback.
          </p>
          <div className="mt-4 space-y-3">
            {item.commonMistakes.map((mistake) => (
              <div key={mistake} className="flex items-start gap-3 rounded-lg border border-border bg-surface p-4">
                <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2} />
                <p className="text-sm text-foreground/90">{mistake}</p>
              </div>
            ))}
          </div>

          <InlineCta />

          <h2 className="mt-10 text-xl font-semibold text-brand">What happens next</h2>
          <p className="mt-2 text-sm text-muted">
            Knowing the typical sequence of events helps you feel more in control and know roughly what to expect at each stage.
          </p>
          <ol className="mt-5 space-y-4">
            {item.whatHappensNext.map((step) => (
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
            The questions we&apos;re asked most often about this specific situation, answered in plain English.
          </p>
          <div className="mt-4 divide-y divide-border rounded-2xl border border-border bg-surface">
            {item.faqs.map((faq) => (
              <div key={faq.question} className="p-5">
                <h3 className="text-sm font-semibold text-brand">{faq.question}</h3>
                <p className="mt-2 text-sm text-muted">{faq.answer}</p>
              </div>
            ))}
          </div>

          {relatedGuides.length > 0 && (
            <div className="mt-10 border-t border-border pt-6">
              <h3 className="text-sm font-semibold text-brand">Read the full guide</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {relatedGuides.map((p) => (
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
          )}

          <div className="mt-6">
            <h3 className="text-sm font-semibold text-brand">Related problem pages</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {hmrcProblems
                .filter((p) => p.slug !== item.slug && p.category === item.category)
                .map((p) => (
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
        </div>

        <div className="lg:col-span-5">
          <KnowledgeSidebarCta />
        </div>
      </div>
    </section>
  );
}
