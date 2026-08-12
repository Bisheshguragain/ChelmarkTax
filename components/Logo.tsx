import { ShieldCheck } from "lucide-react";

type Props = {
  theme?: "light" | "dark";
  size?: "sm" | "md";
  className?: string;
};

export default function Logo({ theme = "light", size = "md", className = "" }: Props) {
  const wordmarkColor = theme === "dark" ? "text-white" : "text-brand";
  const accentColor = theme === "dark" ? "text-accent-vivid" : "text-accent";
  const badgeSize = size === "sm" ? "h-8 w-8" : "h-9 w-9";
  const iconSize = size === "sm" ? "h-4 w-4" : "h-5 w-5";
  const textSize = size === "sm" ? "text-lg" : "text-xl";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span
        aria-hidden
        className={`flex ${badgeSize} shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand-light shadow-sm`}
      >
        <ShieldCheck className={`${iconSize} text-accent-vivid`} strokeWidth={2.25} />
      </span>
      <span className={`${textSize} font-semibold tracking-tight ${wordmarkColor}`}>
        Chelmark<span className={accentColor}>Tax</span>
      </span>
    </span>
  );
}
