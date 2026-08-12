import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";

export const metadata: Metadata = {
  title: "HMRC & Tax Enquiry Blog",
  description:
    "Articles and analysis on HMRC compliance activity, Making Tax Digital, penalties and what to do when a tax enquiry lands on your desk.",
  alternates: { canonical: "/knowledge-hub/blog" },
};

export default function BlogIndexPage() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  );

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <nav className="text-xs text-muted">
        <Link href="/knowledge-hub" className="hover:text-accent">
          Knowledge Hub
        </Link>{" "}
        / Blog
      </nav>
      <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-accent">
        Blog
      </p>
      <h1 className="mt-2 max-w-2xl text-3xl font-bold text-brand sm:text-4xl">
        Articles and analysis on HMRC compliance.
      </h1>
      <p className="mt-3 max-w-2xl text-muted">
        Shorter reads on trends, changes and practical tips — updated
        regularly.
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {sorted.map((post) => (
          <Link
            key={post.slug}
            href={`/knowledge-hub/blog/${post.slug}`}
            className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <p className="text-xs font-medium uppercase tracking-wide text-accent">
              {post.category}
            </p>
            <h2 className="mt-2 text-lg font-semibold text-brand">{post.title}</h2>
            <p className="mt-2 flex-1 text-sm text-muted">{post.excerpt}</p>
            <div className="mt-4 flex items-center justify-between">
              <time className="text-xs text-muted" dateTime={post.publishedDate}>
                {new Date(post.publishedDate).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
              <span className="text-sm font-semibold text-brand group-hover:text-accent">
                Read →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
