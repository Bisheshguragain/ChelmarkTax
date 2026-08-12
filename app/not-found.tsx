import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-4 text-center sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-wide text-accent">
        Page not found
      </p>
      <h1 className="mt-3 text-3xl font-semibold text-brand sm:text-4xl">
        We couldn&apos;t find that page.
      </h1>
      <p className="mt-3 text-muted">
        The page may have moved, or the link may be out of date. Try one of
        these instead.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
        >
          Back to homepage
        </Link>
        <Link
          href="/local-help"
          className="text-sm font-semibold text-brand underline decoration-accent/40 underline-offset-4 hover:text-accent"
        >
          Browse local support
        </Link>
      </div>
    </section>
  );
}
