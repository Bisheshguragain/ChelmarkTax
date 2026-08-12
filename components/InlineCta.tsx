import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Props = {
  heading?: string;
  body?: string;
  href?: string;
  linkLabel?: string;
};

export default function InlineCta({
  heading = "Not sure where you stand?",
  body = "Get a confidential, no-obligation read on your situation from a specialist who deals with HMRC every day.",
  href = "/#enquiry",
  linkLabel = "Start your enquiry",
}: Props) {
  return (
    <div className="mt-10 flex flex-col items-start gap-4 rounded-2xl border border-accent/30 bg-tint-gold p-6 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h3 className="text-base font-semibold text-brand">{heading}</h3>
        <p className="mt-1 text-sm text-muted">{body}</p>
      </div>
      <Link
        href={href}
        className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-accent-vivid px-5 py-2.5 text-sm font-semibold text-brand transition hover:bg-accent-vivid-dark"
      >
        {linkLabel}
        <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
      </Link>
    </div>
  );
}
