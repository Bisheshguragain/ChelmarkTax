import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-accent-vivid">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #0a3d5c 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <Reveal className="relative mx-auto max-w-7xl px-4 py-20 text-center sm:px-6">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand/90">
            Ready when you are
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-brand sm:text-3xl">
            An unanswered letter doesn&apos;t stay small for long.
          </h2>
          <p className="mt-3 text-brand/90">
            Give us the basics and we&apos;ll point you to the right kind of
            help for your situation.
          </p>
          <Link
            href="/#enquiry"
            className="mt-7 inline-block rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.03] hover:bg-brand-dark"
          >
            Start your enquiry
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
