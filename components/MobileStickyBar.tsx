import Link from "next/link";

export default function MobileStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-surface p-3 shadow-[0_-4px_16px_rgba(10,61,92,0.12)] md:hidden">
      <Link
        href="/#enquiry"
        className="block w-full rounded-full bg-accent-vivid px-4 py-3 text-center text-sm font-semibold text-brand transition hover:bg-accent-vivid-dark"
      >
        Start your enquiry
      </Link>
    </div>
  );
}
