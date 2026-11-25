import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, CheckCircle2, Sparkles, AlertTriangle, ListChecks } from "lucide-react";
import { seoData, getSeoPage } from "@/data/seoData";
import EmailJsForm from "@/components/EmailJsForm";
import ProblemIcon from "@/components/ProblemIcon";

const SITE_URL = "https://www.chelmarktax.co.uk";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return seoData.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = getSeoPage(slug);
  if (!entry) return {};

  return {
    title: { absolute: entry.metaTitle },
    description: entry.metaDescription,
    alternates: {
      canonical: `/local-help/${entry.slug}`,
    },
    openGraph: {
      title: `${entry.metaTitle} | ChelmarkTax`,
      description: entry.metaDescription,
      url: `${SITE_URL}/local-help/${entry.slug}`,
    },
  };
}

export default async function LocalHelpDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const entry = getSeoPage(slug);

  if (!entry) {
    notFound();
  }

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: entry.problemName,
    areaServed: {
      "@type": "City",
      name: entry.cityName,
    },
    provider: {
      "@type": "Organization",
      name: "ChelmarkTax",
    },
    description: entry.metaDescription,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Local Support",
        item: `${SITE_URL}/local-help`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `${entry.problemName} in ${entry.cityName}`,
        item: `${SITE_URL}/local-help/${entry.slug}`,
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [...entry.faqs, ...entry.cityFaqs].map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.points
          ? `${faq.answer} ${faq.points.join(". ")}.`
          : faq.answer,
      },
    })),
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <nav className="text-xs text-muted">
        <Link href="/local-help" className="hover:text-accent">
          Local support
        </Link>{" "}
        / {entry.cityName}
      </nav>

      <div className="mt-4 grid gap-10 lg:grid-cols-12">
        {/* Main content */}
        <div className="lg:col-span-7">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand text-white">
            <ProblemIcon name={entry.icon} className="h-5 w-5" strokeWidth={2} />
          </span>

          <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-accent">
            {entry.hmrcSection}
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-brand sm:text-4xl">
            {entry.pageHeading}
          </h1>
          <p className="mt-4 text-muted">{entry.intro}</p>

          <div className="mt-6 flex items-start gap-3 rounded-lg border border-accent/30 bg-accent/10 p-4">
            <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2.25} />
            <p className="text-sm text-brand">
              <span className="font-semibold">Typical deadline: </span>
              {entry.typicalDeadline}
            </p>
          </div>

          {/* Understanding this case */}
          <h2 className="mt-10 text-xl font-semibold text-brand">
            Understanding this {entry.problemShortName} case
          </h2>

          <div className="mt-4 rounded-2xl border border-tint-gold-border bg-tint-gold p-5">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-accent">
              <Sparkles className="h-4 w-4" strokeWidth={2.25} />
              At a glance
            </p>
            <ul className="mt-3 space-y-2">
              {entry.keyPoints.map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm text-brand">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2} />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5 space-y-4 text-sm leading-relaxed text-foreground/90">
            {entry.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* How to prepare */}
          <h2 className="mt-10 text-xl font-semibold text-brand">
            How to prepare for a {entry.problemShortName} case
          </h2>
          <p className="mt-2 text-sm text-muted">
            A few focused steps before you respond can make the whole process smoother.
          </p>
          <ol className="mt-5 space-y-4">
            {entry.preparationSteps.map((step, index) => (
              <li key={step} className="flex items-start gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand text-xs font-semibold text-white">
                  {index + 1}
                </span>
                <p className="text-sm leading-relaxed text-foreground/90">{step}</p>
              </li>
            ))}
          </ol>

          {/* Local context */}
          <h2 className="mt-10 text-xl font-semibold text-brand">
            HMRC enquiries in {entry.cityName}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-foreground/90">
            {entry.cityContext}
          </p>
          {entry.cityTriggers.length > 0 && (
            <div className="mt-5 rounded-2xl border border-tint-gold-border bg-tint-gold p-5">
              <h3 className="text-sm font-semibold text-brand">
                What HMRC commonly queries in {entry.cityName}
              </h3>
              <ul className="mt-3 space-y-2">
                {entry.cityTriggers.map((trigger) => (
                  <li key={trigger} className="flex items-start gap-2 text-sm text-brand">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2} />
                    {trigger}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Documentation checklist */}
          <div className="mt-10 rounded-2xl border border-border bg-background p-6">
            <h2 className="text-base font-semibold text-brand">
              What documentation to gather before you respond
            </h2>
            <ul className="mt-4 space-y-2">
              {entry.checklist.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-foreground/90">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Common mistakes */}
          <h2 className="mt-10 text-xl font-semibold text-brand">
            Common mistakes to avoid
          </h2>
          <div className="mt-4 space-y-3">
            {entry.commonMistakes.map((mistake) => (
              <div key={mistake} className="flex items-start gap-3 rounded-lg border border-border bg-surface p-4">
                <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2} />
                <p className="text-sm text-foreground/90">{mistake}</p>
              </div>
            ))}
          </div>

          {/* What happens next */}
          <h2 className="mt-10 text-xl font-semibold text-brand">
            What happens after you respond
          </h2>
          <ol className="mt-5 space-y-4">
            {entry.whatHappensNext.map((step) => (
              <li key={step} className="flex items-start gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-tint-gold text-xs font-semibold text-brand">
                  <ListChecks className="h-3.5 w-3.5" strokeWidth={2.25} />
                </span>
                <p className="text-sm leading-relaxed text-foreground/90">{step}</p>
              </li>
            ))}
          </ol>

          {/* FAQs */}
          <h2 className="mt-10 text-xl font-semibold text-brand">
            Frequently asked questions about a {entry.problemShortName} case
          </h2>
          <div className="mt-4 divide-y divide-border rounded-2xl border border-border bg-surface">
            {[...entry.faqs, ...entry.cityFaqs].map((faq) => (
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

          <div className="mt-10 border-t border-border pt-6">
            <h3 className="text-sm font-semibold text-brand">
              Related guidance
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              <Link
                href={`/knowledge-hub/guides/${entry.problemSlug}`}
                className="rounded-full border border-accent/40 bg-tint-gold px-3 py-1.5 text-xs text-brand transition hover:border-accent hover:text-accent"
              >
                Read the full {entry.problemShortName} guide →
              </Link>
              {seoData
                .filter(
                  (other) =>
                    other.slug !== entry.slug &&
                    (other.problemSlug === entry.problemSlug ||
                      other.citySlug === entry.citySlug)
                )
                .slice(0, 6)
                .map((other) => (
                  <Link
                    key={other.slug}
                    href={`/local-help/${other.slug}`}
                    className="rounded-full border border-border bg-background px-3 py-1.5 text-xs text-brand transition hover:border-accent hover:text-accent"
                  >
                    {other.problemName} in {other.cityName}
                  </Link>
                ))}
            </div>
          </div>
        </div>

        {/* Sticky sidebar */}
        <div className="lg:col-span-5">
          <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm sm:p-8 lg:sticky lg:top-24">
            <h2 className="text-lg font-semibold text-brand">
              Speak to a specialist about your {entry.problemName}
            </h2>
            <p className="mt-1 text-sm text-muted">
              Confidential, no-obligation first conversation.
            </p>

            <div className="mt-4 rounded-lg border border-tint-gold-border bg-tint-gold p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-accent">Your enquiry</p>
              <p className="mt-1.5 text-sm text-brand">
                <span className="font-semibold">Topic:</span> {entry.problemName}
              </p>
              <p className="mt-1 text-sm text-brand">
                <span className="font-semibold">Area:</span> {entry.cityName}, {entry.region}
              </p>
            </div>

            <div className="mt-4">
              <EmailJsForm
                source={`local-help/${entry.slug}`}
                presetTopic={entry.problemName}
                presetLocation={`${entry.cityName}, ${entry.region}`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
