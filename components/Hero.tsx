import Link from "next/link";
import { Lock, Users2, ShieldCheck, ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import EnquiryWizard from "@/components/EnquiryWizard";

const badges = [
  { icon: Lock, label: "Confidential" },
  { icon: Users2, label: "UK-based specialists" },
  { icon: ShieldCheck, label: "Free initial call, no obligation" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand to-brand-light">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-[-8%] h-[420px] w-[420px] rounded-full bg-accent-vivid/20 blur-[110px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-15%] left-[-5%] h-[380px] w-[380px] rounded-full bg-accent-vivid/10 blur-[110px]"
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-24">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-vivid">
            Specialist HMRC enquiry support
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Got a letter from <span className="text-accent-vivid">HMRC</span>?
            Let&apos;s work out what it actually means.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75">
            Straightforward, confidential guidance from specialists who deal
            with HMRC every day — so your next move is a considered one,
            not a rushed one.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-2">
            {badges.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white/80"
              >
                <Icon className="h-3.5 w-3.5 text-accent-vivid" strokeWidth={2.25} />
                {label}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/#enquiry"
              className="inline-flex items-center gap-1.5 rounded-full bg-accent-vivid px-6 py-3.5 text-sm font-semibold text-brand shadow-lg shadow-accent-vivid/20 transition hover:bg-accent-vivid-dark"
            >
              Start your enquiry
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
            <Link
              href="#how-we-help"
              className="inline-flex items-center rounded-full border-2 border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/60 hover:bg-white/10"
            >
              How the process works
            </Link>
          </div>

          <p className="mt-5 text-xs text-white/50">
            No obligation · Nothing goes to HMRC without your say-so · UK-wide
          </p>
        </Reveal>

        <Reveal delay={0.15} id="enquiry">
          <p className="mb-3 text-center text-xs font-semibold uppercase tracking-wide text-accent-vivid lg:text-left">
            Start here
          </p>
          <EnquiryWizard />
        </Reveal>
      </div>
    </section>
  );
}
