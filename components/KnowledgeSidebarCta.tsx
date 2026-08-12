import Link from "next/link";
import { MessageCircle } from "lucide-react";

type Props = {
  heading?: string;
  body?: string;
};

export default function KnowledgeSidebarCta({
  heading = "Facing this situation yourself?",
  body = "Get a confidential, no-obligation read on where you stand from a specialist who deals with HMRC every day.",
}: Props) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm lg:sticky lg:top-24">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-brand">
        <MessageCircle className="h-5 w-5" strokeWidth={2} />
      </span>
      <h2 className="mt-4 text-lg font-semibold text-brand">{heading}</h2>
      <p className="mt-2 text-sm text-muted">{body}</p>
      <Link
        href="/#enquiry"
        className="mt-5 block rounded-full bg-accent-vivid px-5 py-3 text-center text-sm font-semibold text-brand transition hover:bg-accent-vivid-dark"
      >
        Start your enquiry
      </Link>
      <Link
        href="/contact"
        className="mt-3 block text-center text-sm font-semibold text-brand underline decoration-accent/40 underline-offset-4 hover:text-accent"
      >
        Or contact us directly
      </Link>
    </div>
  );
}
