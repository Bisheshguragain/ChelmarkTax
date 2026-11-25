import Link from "next/link";
import { ArrowUpRight, FileText, PoundSterling, Users, Building2, TrendingUp } from "lucide-react";

const taxTypes = [
  { label: "Self Assessment", icon: FileText, href: "/knowledge-hub/guides/self-assessment-enquiry" },
  { label: "VAT", icon: PoundSterling, href: "/knowledge-hub/guides/vat-enquiry" },
  { label: "PAYE", icon: Users, href: "/knowledge-hub/guides/paye-compliance-check" },
  { label: "Corporation Tax", icon: Building2, href: "/knowledge-hub/guides/corporation-tax-enquiry" },
  { label: "Capital Gains Tax", icon: TrendingUp, href: "/knowledge-hub/guides/capital-gains-tax-enquiry" },
];

export default function TaxTypesStrip() {
  return (
    <div className="border-b border-border bg-tint-sage">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="flex items-center gap-4">
          <span aria-hidden className="h-px flex-1 bg-brand/15" />
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
            Tax areas we cover regularly
          </p>
          <span aria-hidden className="h-px flex-1 bg-brand/15" />
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-5">
          {taxTypes.map(({ label, icon: Icon, href }, index) => (
            <Link
              key={label}
              href={href}
              className={`group relative flex flex-col items-center rounded-2xl border border-border bg-surface px-4 py-5 text-center shadow-sm transition hover:-translate-y-1 hover:border-accent-vivid hover:shadow-md ${
                index === taxTypes.length - 1 ? "col-span-2 md:col-span-1" : ""
              }`}
            >
              <ArrowUpRight
                aria-hidden
                className="absolute right-3 top-3 h-4 w-4 text-brand/30 transition group-hover:text-accent-dark"
                strokeWidth={2.25}
              />
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand-light text-accent-vivid shadow-sm transition group-hover:scale-105">
                <Icon className="h-5 w-5" strokeWidth={2} />
              </span>
              <span className="mt-3 text-sm font-semibold text-brand">{label}</span>
              <span className="mt-1 text-xs text-muted">Read the guide</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
