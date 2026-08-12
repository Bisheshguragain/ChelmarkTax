import Reveal from "@/components/Reveal";

export default function Testimonial() {
  return (
    <section className="bg-tint-gold">
      <Reveal className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-3xl rounded-3xl border border-tint-gold-border bg-surface/90 px-8 py-14 text-center shadow-lg sm:px-14">
          <span aria-hidden className="text-6xl leading-none text-accent/50">
            &ldquo;
          </span>
          <p className="mt-2 text-2xl font-medium leading-relaxed text-brand sm:text-3xl">
            Most people give HMRC more than they&apos;ve actually been asked
            for, out of anxiety. Slow down, read the request literally, and
            respond to that — nothing more.
          </p>
          <p className="mt-5 text-sm font-semibold uppercase tracking-wide text-accent">
            ChelmarkTax specialist guidance
          </p>
        </div>
      </Reveal>
    </section>
  );
}
