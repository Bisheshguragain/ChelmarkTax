import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import Logo from "@/components/Logo";
import { CONTACT_EMAIL, CONTACT_MAILTO, CONTACT_ADDRESS_LINES } from "@/lib/contact";

const knowledgeHubLinks = [
  { href: "/knowledge-hub/guides", label: "Enquiry guides" },
  { href: "/knowledge-hub/problems", label: "HMRC problems" },
  { href: "/knowledge-hub/industries", label: "Industry guidance" },
  { href: "/knowledge-hub/questions", label: "Questions & FAQs" },
  { href: "/knowledge-hub/blog", label: "Blog" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-brand to-brand-dark text-white/80">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 right-[-5%] h-72 w-72 rounded-full bg-accent-vivid/10 blur-[100px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <Logo theme="dark" size="sm" />
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              Confidential, UK-wide support for HMRC tax enquiries — from the
              first letter to the final response.
            </p>
            <a
              href={CONTACT_MAILTO}
              className="mt-4 inline-flex items-center gap-2 text-sm text-white/70 transition hover:text-accent-vivid"
            >
              <Mail className="h-4 w-4 shrink-0" strokeWidth={2.25} />
              {CONTACT_EMAIL}
            </a>
            <div className="mt-3 flex items-start gap-2 text-sm text-white/60">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2.25} />
              <span>
                {CONTACT_ADDRESS_LINES.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/90">
              Knowledge Hub
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              {knowledgeHubLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 transition hover:text-accent-vivid">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/90">
              Company
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/local-help" className="text-white/60 transition hover:text-accent-vivid">
                  Local support
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/60 transition hover:text-accent-vivid">
                  Contact us
                </Link>
              </li>
              <li>
                <Link href="/terms-of-business" className="text-white/60 transition hover:text-accent-vivid">
                  Terms of Business
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-white/60 transition hover:text-accent-vivid">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/90">
              What we help with
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              VAT, PAYE, Self Assessment, penalty appeals, Corporation Tax,
              Capital Gains Tax, COP8/COP9 and Worldwide Disclosure — clear
              guidance on what HMRC is asking, and what to do next.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} ChelmarkTax, a trading name of Mayfair Accountants and Wealth
            Advisors Ltd. Registered in England and Wales. Regulated by the Institute of Financial
            Accountants. All rights reserved.
          </p>
          <div className="flex shrink-0 items-center gap-4">
            <Link href="/terms-of-business" className="transition hover:text-accent-vivid">
              Terms of Business
            </Link>
            <Link href="/privacy-policy" className="transition hover:text-accent-vivid">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
