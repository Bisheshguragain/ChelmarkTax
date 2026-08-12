import { MapPinned, ShieldCheck, Layers, HeartHandshake } from "lucide-react";
import { problems } from "@/data/problems";
import { cities } from "@/data/cities";
import Reveal from "@/components/Reveal";

export default function StatsStrip() {
  const stats = [
    { icon: Layers, value: `${problems.length}`, label: "HMRC enquiry types covered" },
    { icon: MapPinned, value: `${cities.length}`, label: "UK cities with local guidance" },
    { icon: ShieldCheck, value: "UK-wide", label: "Specialist coverage, not just London" },
    { icon: HeartHandshake, value: "Free", label: "First call, always" },
  ];

  return (
    <div className="bg-tint-sage">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-14 sm:px-6 md:grid-cols-4 md:gap-6">
        {stats.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 0.06}>
            <div className="flex h-full flex-col items-center rounded-2xl border border-tint-sage-border bg-surface p-5 text-center shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <span
                className={`flex h-11 w-11 items-center justify-center rounded-full ${
                  index % 2 === 0 ? "bg-brand text-white" : "bg-accent-vivid text-brand"
                }`}
              >
                <stat.icon className="h-5 w-5" strokeWidth={2} />
              </span>
              <p className="mt-3 text-2xl font-semibold text-brand">{stat.value}</p>
              <p className="mt-1 text-sm text-muted">{stat.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
