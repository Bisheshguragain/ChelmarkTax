import type { Metadata } from "next";
import Link from "next/link";
import { problems } from "@/data/problems";
import { hmrcProblems } from "@/data/hmrcProblems";
import { industries } from "@/data/industries";
import type { FaqItem } from "@/lib/types";

export const metadata: Metadata = {
  title: "HMRC Enquiry Questions & FAQs",
  description:
    "Direct answers to the questions people ask most about HMRC tax enquiries, organised by enquiry type, situation and industry.",
  alternates: { canonical: "/knowledge-hub/questions" },
};

function renderFaq(faq: FaqItem) {
  return (
    <div key={faq.question} className="p-5">
      <h3 className="text-sm font-semibold text-brand">{faq.question}</h3>
      <p className="mt-2 text-sm text-muted">{faq.answer}</p>
      {faq.points && (
        <ul className="mt-2 space-y-1 text-sm text-foreground/90">
          {faq.points.map((point) => (
            <li key={point}>• {point}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function QuestionsPage() {
  const allFaqs = [
    ...problems.flatMap((p) => p.faqs),
    ...hmrcProblems.flatMap((p) => p.faqs),
    ...industries.flatMap((i) => i.faqs),
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs.map((faq) => ({
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <nav className="text-xs text-muted">
        <Link href="/knowledge-hub" className="hover:text-accent">
          Knowledge Hub
        </Link>{" "}
        / Questions
      </nav>
      <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-accent">
        Questions & FAQs
      </p>
      <h1 className="mt-2 max-w-2xl text-3xl font-bold text-brand sm:text-4xl">
        Direct answers to common HMRC questions.
      </h1>
      <p className="mt-3 max-w-2xl text-muted">
        {allFaqs.length} questions and answers, organised by enquiry type,
        specific situation and industry.
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        <a href="#by-enquiry-type" className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-brand hover:border-accent hover:text-accent">
          By enquiry type
        </a>
        <a href="#by-situation" className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-brand hover:border-accent hover:text-accent">
          By specific situation
        </a>
        <a href="#by-industry" className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-brand hover:border-accent hover:text-accent">
          By industry
        </a>
      </div>

      <div id="by-enquiry-type" className="mt-14 scroll-mt-24">
        <h2 className="text-2xl font-semibold text-brand">By enquiry type</h2>
        <div className="mt-6 space-y-10">
          {problems.map((problem) => (
            <div key={problem.slug}>
              <Link
                href={`/knowledge-hub/guides/${problem.slug}`}
                className="text-lg font-semibold text-brand hover:text-accent"
              >
                {problem.name} →
              </Link>
              <div className="mt-3 divide-y divide-border rounded-2xl border border-border bg-surface">
                {problem.faqs.map(renderFaq)}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div id="by-situation" className="mt-14 scroll-mt-24">
        <h2 className="text-2xl font-semibold text-brand">By specific situation</h2>
        <div className="mt-6 space-y-10">
          {hmrcProblems.map((item) => (
            <div key={item.slug}>
              <Link
                href={`/knowledge-hub/problems/${item.slug}`}
                className="text-lg font-semibold text-brand hover:text-accent"
              >
                {item.name} →
              </Link>
              <div className="mt-3 divide-y divide-border rounded-2xl border border-border bg-surface">
                {item.faqs.map(renderFaq)}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div id="by-industry" className="mt-14 scroll-mt-24">
        <h2 className="text-2xl font-semibold text-brand">By industry</h2>
        <div className="mt-6 space-y-10">
          {industries.map((industry) => (
            <div key={industry.slug}>
              <Link
                href={`/knowledge-hub/industries/${industry.slug}`}
                className="text-lg font-semibold text-brand hover:text-accent"
              >
                {industry.name} →
              </Link>
              <div className="mt-3 divide-y divide-border rounded-2xl border border-border bg-surface">
                {industry.faqs.map(renderFaq)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
