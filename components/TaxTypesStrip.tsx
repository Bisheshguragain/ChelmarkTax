import { FileText, PoundSterling, Users, Building2, TrendingUp } from "lucide-react";

const taxTypes = [
  { label: "Self Assessment", icon: FileText },
  { label: "VAT", icon: PoundSterling },
  { label: "PAYE", icon: Users },
  { label: "Corporation Tax", icon: Building2 },
  { label: "Capital Gains Tax", icon: TrendingUp },
];

export default function TaxTypesStrip() {
  return (
    <div className="border-b border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-7 sm:px-6">
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
          Tax areas we cover regularly
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {taxTypes.map(({ label, icon: Icon }, index) => (
            <span key={label} className="inline-flex items-center gap-2.5 text-sm font-medium text-brand/90">
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                  index % 2 === 0 ? "bg-brand/10 text-brand" : "bg-accent-vivid/15 text-accent"
                }`}
              >
                <Icon className="h-4 w-4" strokeWidth={2} />
              </span>
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
