import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, FileWarning, Building2, HelpCircle, ArrowRight } from "lucide-react";
import { problems } from "@/data/problems";
import { hmrcProblems } from "@/data/hmrcProblems";
import { industries } from "@/data/industries";
import { blogPosts } from "@/data/blogPosts";

export const metadata: Metadata = {
  title: "Knowledge Hub | HMRC Guides, Problems, Industries & FAQs",
  description:
    "Clear, specialist-written guidance on HMRC tax enquiries — in-depth guides, problem-specific pages, industry guidance, FAQs and articles, all in one place.",
  alternates: { canonical: "/knowledge-hub" },
};

const pillars = [
  {
    href: "/knowledge-hub/guides",
    icon: BookOpen,
    title: "In-depth guides",
    description: "Full guides to 8 types of HMRC enquiry, from Self Assessment to Worldwide Disclosure.",
    count: problems.length,
  },
  {
    href: "/knowledge-hub/problems",
    icon: FileWarning,
    title: "HMRC problems",
    description: "Focused pages for a specific letter, error or situation, with immediate next steps.",
    count: hmrcProblems.length,
  },
  {
    href: "/knowledge-hub/industries",
    icon: Building2,
    title: "Industry guidance",
    description: "How HMRC enquiries typically look for your sector, from landlords to construction.",
    count: industries.length,
  },
  {
    href: "/knowledge-hub/questions",
    icon: HelpCircle,
    title: "Questions & FAQs",
    description: "Direct answers to the questions people ask most after an HMRC letter arrives.",
    count: problems.reduce((sum, p) => sum + p.faqs.length, 0) + hmrcProblems.reduce((sum, p) => sum + p.faqs.length, 0),
  },
];

export default function KnowledgeHubPage() {
  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-accent">
            Knowledge Hub
          </p>
          <h1 className="mt-2 max-w-2xl text-3xl font-bold text-brand sm:text-4xl">
            Clear guidance for every stage of an HMRC enquiry.
          </h1>
          <p className="mt-3 max-w-2xl text-muted">
            Written by specialists who deal with HMRC enquiries every day —
            organised by guide, problem, industry and question, so you can
            find what&apos;s actually relevant to your situation.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <Link
              key={pillar.href}
              href={pillar.href}
              className="group flex flex-col rounded-2xl border border-border bg-surface p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand text-white transition group-hover:bg-accent-vivid group-hover:text-brand">
                <pillar.icon className="h-5 w-5" strokeWidth={2} />
              </span>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-accent">
                {pillar.count} {pillar.count === 1 ? "page" : "pages"}
              </p>
              <h2 className="mt-1 text-lg font-semibold text-brand">{pillar.title}</h2>
              <p className="mt-2 flex-1 text-sm text-muted">{pillar.description}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand group-hover:gap-2 group-hover:text-accent">
                Explore <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-tint-sage">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                From the blog
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-brand sm:text-3xl">
                Recent articles and analysis.
              </h2>
            </div>
            <Link
              href="/knowledge-hub/blog"
              className="text-sm font-semibold text-brand underline decoration-accent/40 underline-offset-4 hover:text-accent"
            >
              View all articles →
            </Link>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {blogPosts.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                href={`/knowledge-hub/blog/${post.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-tint-sage-border bg-surface p-6 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-xs font-medium uppercase tracking-wide text-accent">
                  {post.category}
                </p>
                <h3 className="mt-2 text-base font-semibold text-brand">{post.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted">{post.excerpt}</p>
                <span className="mt-4 text-sm font-semibold text-brand group-hover:text-accent">
                  Read more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
