import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { problems } from "@/data/problems";
import { hmrcProblems } from "@/data/hmrcProblems";
import { blogToGuides, blogToProblems } from "@/lib/relatedContent";
import KnowledgeSidebarCta from "@/components/KnowledgeSidebarCta";
import InlineCta from "@/components/InlineCta";

const SITE_URL = "https://www.chelmarktax.co.uk";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: [post.focusKeyword, ...post.keywords, ...post.tags],
    alternates: { canonical: `/knowledge-hub/blog/${post.slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.publishedDate,
      tags: post.tags,
      url: `${SITE_URL}/knowledge-hub/blog/${post.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishedDate,
    author: { "@type": "Organization", name: "ChelmarkTax" },
    publisher: { "@type": "Organization", name: "ChelmarkTax" },
    mainEntityOfPage: `${SITE_URL}/knowledge-hub/blog/${post.slug}`,
    keywords: [post.focusKeyword, ...post.keywords].join(", "),
    articleSection: post.category,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const relatedGuides = problems.filter((p) => (blogToGuides[post.slug] ?? []).includes(p.slug));
  const relatedProblems = hmrcProblems.filter((p) => (blogToProblems[post.slug] ?? []).includes(p.slug));

  const midpoint = Math.ceil(post.sections.length / 2);

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <nav className="text-xs text-muted">
        <Link href="/knowledge-hub/blog" className="hover:text-accent">
          Blog
        </Link>{" "}
        / {post.category}
      </nav>

      <div className="mt-4 grid gap-10 lg:grid-cols-12">
        <article className="lg:col-span-7">
          <p className="text-xs font-semibold uppercase tracking-wide text-accent">
            {post.category}
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-brand sm:text-4xl">{post.title}</h1>
          <time className="mt-3 block text-sm text-muted" dateTime={post.publishedDate}>
            {new Date(post.publishedDate).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>

          <p className="mt-6 text-sm leading-relaxed text-foreground/90">{post.intro}</p>

          {post.sections.map((section, index) => (
            <div key={section.heading}>
              <h2 className="mt-10 text-xl font-semibold text-brand">{section.heading}</h2>
              <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground/90">
                {section.paragraphs.map((paragraph, pIndex) => (
                  <p key={pIndex}>{paragraph}</p>
                ))}
              </div>

              {section.list && (
                <ul className="mt-4 space-y-2">
                  {section.list.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground/90">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2} />
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {section.table && (
                <div className="mt-4 overflow-x-auto rounded-2xl border border-border">
                  <table className="w-full min-w-[480px] border-collapse text-left text-sm">
                    <thead>
                      <tr className="bg-tint-gold">
                        {section.table.headers.map((header, hIndex) => (
                          <th
                            key={hIndex}
                            className="border-b border-tint-gold-border px-4 py-3 font-semibold text-brand"
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row, rIndex) => (
                        <tr key={rIndex} className="odd:bg-surface even:bg-background">
                          {row.map((cell, cIndex) => (
                            <td key={cIndex} className="border-b border-border px-4 py-3 text-foreground/90">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {index === midpoint - 1 && (
                <InlineCta
                  heading="Facing this exact situation?"
                  body="Get a confidential, no-obligation read on where you stand from a specialist who deals with HMRC every day."
                />
              )}
            </div>
          ))}

          <h2 className="mt-10 text-xl font-semibold text-brand">Frequently asked questions</h2>
          <div className="mt-4 divide-y divide-border rounded-2xl border border-border bg-surface">
            {post.faqs.map((faq) => (
              <div key={faq.question} className="p-5">
                <h3 className="text-sm font-semibold text-brand">{faq.question}</h3>
                <p className="mt-2 text-sm text-muted">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wide text-muted">Topics:</span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-tint-gold px-3 py-1 text-xs font-medium text-brand"
              >
                {tag}
              </span>
            ))}
          </div>

          {(relatedGuides.length > 0 || relatedProblems.length > 0) && (
            <div className="mt-10 border-t border-border pt-6">
              {relatedGuides.length > 0 && (
                <>
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
                </>
              )}
              {relatedProblems.length > 0 && (
                <>
                  <h3 className="mt-6 text-sm font-semibold text-brand">Related HMRC problems</h3>
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
                </>
              )}
            </div>
          )}

          <div className="mt-10 border-t border-border pt-6">
            <h3 className="text-base font-semibold text-brand">More from the blog</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {otherPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/knowledge-hub/blog/${p.slug}`}
                  className="group flex flex-col rounded-2xl border border-border bg-surface p-5 transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <p className="text-xs font-medium uppercase tracking-wide text-accent">{p.category}</p>
                  <h4 className="mt-2 text-sm font-semibold text-brand">{p.title}</h4>
                  <p className="mt-2 flex-1 text-xs text-muted">{p.excerpt}</p>
                  <span className="mt-3 text-xs font-semibold text-brand group-hover:text-accent">
                    Read the article →
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <InlineCta
            heading="Don't wait for a routine enquiry to become a bigger problem"
            body="Tell us what's happened and we'll come back with clear, confidential next steps — no obligation, no jargon."
            linkLabel="Get in touch"
          />
        </article>

        <div className="lg:col-span-5">
          <KnowledgeSidebarCta />
        </div>
      </div>
    </section>
  );
}
