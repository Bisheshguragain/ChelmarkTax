import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, Sparkles, AlertTriangle, ListChecks } from "lucide-react";
import { industries } from "@/data/industries";
import { problems } from "@/data/problems";
import { hmrcProblems } from "@/data/hmrcProblems";
import { industryToGuides, industryToProblems } from "@/lib/relatedContent";
import ProblemIcon from "@/components/ProblemIcon";
import KnowledgeSidebarCta from "@/components/KnowledgeSidebarCta";
import InlineCta from "@/components/InlineCta";

const SITE_URL = "https://www.chelmarktax.co.uk";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) return {};

  return {
    title: `HMRC Enquiry Help for ${industry.name}`,
    description: industry.summary,
    alternates: { canonical: `/knowledge-hub/industries/${industry.slug}` },
  };
}

export default async function IndustryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);

  if (!industry) {
    notFound();
  }

  const relatedGuides = problems.filter((p) => (industryToGuides[industry.slug] ?? []).includes(p.slug));
  const relatedProblems = hmrcProblems.filter((p) => (industryToProblems[industry.slug] ?? []).includes(p.slug));

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Knowledge Hub", item: `${SITE_URL}/knowledge-hub` },
      { "@type": "ListItem", position: 3, name: "Industries", item: `${SITE_URL}/knowledge-hub/industries` },
      { "@type": "ListItem", position: 4, name: industry.name, item: `${SITE_URL}/knowledge-hub/industries/${industry.slug}` },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: industry.faqs.map((faq) => ({
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
        <Link href="/knowledge-hub/industries" className="hover:text-accent">
          Industries
        </Link>{" "}
        / {industry.name}
      </nav>

      <div className="mt-4 grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand text-white">
            <ProblemIcon name={industry.icon} className="h-5 w-5" strokeWidth={2} />
          </span>
          <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-accent">
            Industry guidance
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-brand sm:text-4xl">
            HMRC Enquiry Help for {industry.name}
          </h1>
          <p className="mt-4 text-muted">{industry.summary}</p>

          <div className="mt-8 rounded-2xl border border-tint-gold-border bg-tint-gold p-5">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-accent">
              <Sparkles className="h-4 w-4" strokeWidth={2.25} />
              At a glance
            </p>
            <ul className="mt-3 space-y-2">
              {industry.keyPoints.map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm text-brand">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2} />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5 space-y-4 text-sm leading-relaxed text-foreground/90">
            {industry.narrative.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <h2 className="mt-10 text-xl font-semibold text-brand">
            Tax areas most relevant to {industry.name.toLowerCase()}
          </h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {industry.relevantTaxAreas.map((area) => (
              <li
                key={area}
                className="flex items-start gap-2 rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground/90"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2} />
                {area}
              </li>
            ))}
          </ul>

          <h2 className="mt-10 text-xl font-semibold text-brand">How to prepare</h2>
          <p className="mt-2 text-sm text-muted">
            A structured, evidence-led approach from the outset tends to produce a faster and less stressful outcome than responding to each request as it comes in.
          </p>
          <ol className="mt-5 space-y-4">
            {industry.preparationSteps.map((step, index) => (
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
              {industry.checklist.map((c) => (
                <li key={c} className="flex items-start gap-2 text-sm text-foreground/90">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2} />
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <h2 className="mt-10 text-xl font-semibold text-brand">Common mistakes to avoid</h2>
          <p className="mt-2 text-sm text-muted">
            These are the errors we see most frequently in this sector — being aware of them in advance can help you avoid an entirely preventable dispute with HMRC.
          </p>
          <div className="mt-4 space-y-3">
            {industry.commonMistakes.map((mistake) => (
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
            {industry.whatHappensNext.map((step) => (
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
            The questions we&apos;re asked most often by businesses in this sector, answered in plain English.
          </p>
          <div className="mt-4 divide-y divide-border rounded-2xl border border-border bg-surface">
            {industry.faqs.map((faq) => (
              <div key={faq.question} className="p-5">
                <h3 className="text-sm font-semibold text-brand">{faq.question}</h3>
                <p className="mt-2 text-sm text-muted">{faq.answer}</p>
              </div>
            ))}
          </div>

          {relatedGuides.length > 0 && (
            <div className="mt-10 border-t border-border pt-6">
              <h3 className="text-sm font-semibold text-brand">Relevant enquiry guides</h3>
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

          {relatedProblems.length > 0 && (
            <div className="mt-6">
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

          <div className="mt-6">
            <h3 className="text-sm font-semibold text-brand">Other industries</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {industries
                .filter((i) => i.slug !== industry.slug)
                .slice(0, 6)
                .map((i) => (
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
        </div>

        <div className="lg:col-span-5">
          <KnowledgeSidebarCta />
        </div>
      </div>
    </section>
  );
}
