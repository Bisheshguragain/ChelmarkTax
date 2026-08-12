import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How ChelmarkTax collects, uses, stores and protects your personal data, and your rights under UK GDPR.",
  alternates: { canonical: "/privacy-policy" },
};

const sections = [
  { id: "who-we-are", label: "Who we are" },
  { id: "what-we-collect", label: "What information we collect" },
  { id: "how-we-collect", label: "How we collect information" },
  { id: "how-we-use", label: "How we use your information" },
  { id: "legal-basis", label: "Our legal basis for processing" },
  { id: "sharing", label: "Sharing your information" },
  { id: "international", label: "International transfers" },
  { id: "retention", label: "How long we keep your data" },
  { id: "security", label: "How we protect your data" },
  { id: "rights", label: "Your rights" },
  { id: "cookies", label: "Cookies" },
  { id: "children", label: "Children's privacy" },
  { id: "changes", label: "Changes to this policy" },
  { id: "complain", label: "How to complain" },
  { id: "contact", label: "Contact us" },
];

export default function PrivacyPolicyPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <nav className="text-xs text-muted">
        <Link href="/" className="hover:text-accent">
          Home
        </Link>{" "}
        / Privacy Policy
      </nav>

      <div className="mt-4 grid gap-10 lg:grid-cols-12">
        <article className="lg:col-span-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-accent">Legal</p>
          <h1 className="mt-2 text-3xl font-semibold text-brand sm:text-4xl">Privacy Policy</h1>
          <p className="mt-3 text-sm text-muted">Last updated: 11 August 2026</p>

          <div className="mt-8 rounded-2xl border border-tint-gold-border bg-tint-gold p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-accent">In plain English</p>
            <p className="mt-2 text-sm leading-relaxed text-brand">
              We only collect the information we genuinely need to respond to your enquiry or provide our
              services — typically your name, contact details, and what you tell us about your situation. We
              never sell your data, we only share it with third parties where necessary (such as a specialist
              we refer you to, with your knowledge) or where the law requires it, and we keep it only for as
              long as we need to. You can ask us what we hold, ask us to correct or delete it, and withdraw
              consent at any time. The full detail, including your legal rights, is below.
            </p>
          </div>

          <p className="mt-8 text-sm leading-relaxed text-foreground/90">
            This Privacy Policy explains how Mayfair Accountants and Wealth Advisors Ltd, trading as
            ChelmarkTax (&quot;ChelmarkTax&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;), collects,
            uses, stores and protects your personal data when you visit our website, submit an enquiry, or
            become a client, and explains your rights under the UK General Data Protection Regulation (UK
            GDPR) and the Data Protection Act 2018.
          </p>

          <div className="mt-8 rounded-2xl border border-border bg-surface p-6">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-brand">On this page</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {sections.map((s, i) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="text-sm text-muted transition hover:text-accent">
                    {i + 1}. {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <h2 id="who-we-are" className="mt-10 text-xl font-semibold text-brand">1. Who we are</h2>
          <p className="mt-4 text-sm leading-relaxed text-foreground/90">
            The data controller responsible for your personal data is Mayfair Accountants and Wealth Advisors
            Ltd, trading as ChelmarkTax, a company registered in England and Wales (company number
            11962063), with its registered office at Devonshire House, Level 1, One Mayfair Place, Mayfair,
            London, W1J 8AJ. We are regulated by the Institute of Financial Accountants (IFA), membership
            number [to be confirmed].
          </p>

          <h2 id="what-we-collect" className="mt-10 text-xl font-semibold text-brand">2. What information we collect</h2>
          <p className="mt-4 text-sm leading-relaxed text-foreground/90">
            Depending on how you interact with us, we may collect the following categories of information:
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "Contact details — name, email address, phone number",
              "Enquiry details — the nature of your HMRC matter and any information you choose to share about it",
              "Client and engagement records — information needed to provide chargeable services, including identity verification documents where required by anti-money laundering law",
              "Technical and usage data — IP address, browser type, device information and how you use our website, collected through cookies and similar technologies",
              "Communications — records of calls, emails and messages between us",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-foreground/90">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2} />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-foreground/90">
            We ask that you do not include sensitive financial documents, passwords, or full bank card details
            in our website enquiry form. If your matter progresses to a chargeable engagement, we will agree a
            secure method for exchanging any sensitive documents.
          </p>

          <h2 id="how-we-collect" className="mt-10 text-xl font-semibold text-brand">3. How we collect information</h2>
          <p className="mt-4 text-sm leading-relaxed text-foreground/90">
            We collect information directly from you when you submit an enquiry form, contact us by phone or
            email, or engage us as a client. We also collect technical information automatically when you
            browse our website, using cookies and similar technologies as described in the Cookies section
            below. Where you are referred to us by a third party, or we refer you to a specialist, limited
            information may be exchanged for the purpose of that referral, with your knowledge.
          </p>

          <h2 id="how-we-use" className="mt-10 text-xl font-semibold text-brand">4. How we use your information</h2>
          <p className="mt-4 text-sm leading-relaxed text-foreground/90">We use your personal data to:</p>
          <ul className="mt-4 space-y-2">
            {[
              "Respond to your enquiry and assess how we may be able to help",
              "Provide, manage and administer any services you engage us for",
              "Verify your identity where required by anti-money laundering regulations",
              "Refer you to a specialist adviser, where relevant and with appropriate context",
              "Communicate with you about your matter, and send administrative updates",
              "Meet our legal, regulatory and professional obligations, including to the Institute of Financial Accountants",
              "Improve our website and services, and understand how our website is used",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-foreground/90">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2} />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-foreground/90">
            We do not use your personal data for automated decision-making or profiling that produces legal or
            similarly significant effects on you, and we do not sell your personal data to third parties.
          </p>

          <h2 id="legal-basis" className="mt-10 text-xl font-semibold text-brand">5. Our legal basis for processing</h2>
          <p className="mt-4 text-sm leading-relaxed text-foreground/90">
            Under UK GDPR, we rely on the following legal bases depending on the purpose:
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "Contract — where processing is necessary to provide services you've engaged us for",
              "Legitimate interests — for example, responding to enquiries and improving our website, balanced against your rights",
              "Legal obligation — for example, anti-money laundering identity checks and regulatory record-keeping",
              "Consent — where we ask for your specific consent, such as certain marketing communications, which you can withdraw at any time",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-foreground/90">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2} />
                {item}
              </li>
            ))}
          </ul>

          <h2 id="sharing" className="mt-10 text-xl font-semibold text-brand">6. Sharing your information</h2>
          <p className="mt-4 text-sm leading-relaxed text-foreground/90">
            We do not sell your personal data. We may share it with:
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "A specialist adviser we refer you to, where relevant to your matter and with appropriate context",
              "Trusted service providers who support our operations, such as secure hosting, email and case management providers, bound by confidentiality and data protection obligations",
              "Our professional advisers and insurers, on a confidential basis, where necessary",
              "Regulatory bodies, including the Institute of Financial Accountants, and law enforcement or tax authorities, where we are legally required to disclose information",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-foreground/90">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2} />
                {item}
              </li>
            ))}
          </ul>

          <h2 id="international" className="mt-10 text-xl font-semibold text-brand">7. International transfers</h2>
          <p className="mt-4 text-sm leading-relaxed text-foreground/90">
            Where any service provider we use stores or processes data outside the UK, we ensure appropriate
            safeguards are in place, such as the UK&apos;s International Data Transfer Agreement or a finding of
            adequacy by the UK government, so that your data continues to receive a level of protection
            consistent with UK GDPR.
          </p>

          <h2 id="retention" className="mt-10 text-xl font-semibold text-brand">8. How long we keep your data</h2>
          <p className="mt-4 text-sm leading-relaxed text-foreground/90">
            We keep personal data only for as long as necessary for the purposes it was collected. Enquiry
            details from users who do not become clients are generally retained for a limited period to allow
            us to follow up, then deleted or anonymised. Client and engagement records are retained for the
            period required by our professional and regulatory obligations, generally at least six years from
            the end of an engagement, to meet HMRC, anti-money laundering, and professional indemnity
            requirements.
          </p>

          <h2 id="security" className="mt-10 text-xl font-semibold text-brand">9. How we protect your data</h2>
          <p className="mt-4 text-sm leading-relaxed text-foreground/90">
            We use appropriate technical and organisational measures to protect your personal data against
            unauthorised access, loss, misuse or alteration, including secure hosting, access controls limited
            to staff who need the information to do their job, and confidentiality obligations for anyone we
            work with. No method of transmission or storage is completely secure, but we take reasonable steps
            to protect your information appropriately.
          </p>

          <h2 id="rights" className="mt-10 text-xl font-semibold text-brand">10. Your rights</h2>
          <p className="mt-4 text-sm leading-relaxed text-foreground/90">
            Under UK GDPR, you have the right to:
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "Access — request a copy of the personal data we hold about you",
              "Rectification — ask us to correct inaccurate or incomplete data",
              "Erasure — ask us to delete your data, subject to our legal and regulatory retention obligations",
              "Restriction — ask us to limit how we use your data in certain circumstances",
              "Portability — ask us to provide your data in a portable format, where technically feasible",
              "Objection — object to processing based on legitimate interests or for direct marketing",
              "Withdraw consent — where we rely on consent, withdraw it at any time without affecting past processing",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-foreground/90">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2} />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-foreground/90">
            To exercise any of these rights, contact us using the details in the Contact Us section below. We
            will respond within one month, and will let you know if we need longer for a complex request. We
            may need to verify your identity before acting on a request.
          </p>

          <h2 id="cookies" className="mt-10 text-xl font-semibold text-brand">11. Cookies</h2>
          <p className="mt-4 text-sm leading-relaxed text-foreground/90">
            Our website uses cookies and similar technologies to make the site function properly and to
            understand how it&apos;s used. Essential cookies are necessary for the website to work and cannot be
            switched off. Analytics cookies help us understand visitor behaviour so we can improve the site;
            these are only used with your consent, which you can manage or withdraw through your browser
            settings at any time. We do not use cookies for third-party advertising.
          </p>

          <h2 id="children" className="mt-10 text-xl font-semibold text-brand">12. Children&apos;s privacy</h2>
          <p className="mt-4 text-sm leading-relaxed text-foreground/90">
            Our services are intended for individuals and businesses dealing with HMRC matters, and are not
            directed at children. We do not knowingly collect personal data from anyone under 18. If you
            believe a child has provided us with personal data, please contact us so we can remove it.
          </p>

          <h2 id="changes" className="mt-10 text-xl font-semibold text-brand">13. Changes to this policy</h2>
          <p className="mt-4 text-sm leading-relaxed text-foreground/90">
            We may update this Privacy Policy from time to time to reflect changes in our practices, services,
            or legal requirements. We will post any updated version on this page with a revised &quot;last
            updated&quot; date. We encourage you to review this page periodically.
          </p>

          <h2 id="complain" className="mt-10 text-xl font-semibold text-brand">14. How to complain</h2>
          <p className="mt-4 text-sm leading-relaxed text-foreground/90">
            If you have concerns about how we handle your personal data, please contact us first so we can try
            to resolve it directly. You also have the right to lodge a complaint with the Information
            Commissioner&apos;s Office (ICO), the UK&apos;s independent regulator for data protection, at
            ico.org.uk or by calling 0303 123 1113.
          </p>

          <h2 id="contact" className="mt-10 text-xl font-semibold text-brand">15. Contact us</h2>
          <p className="mt-4 text-sm leading-relaxed text-foreground/90">
            If you have any questions about this Privacy Policy or how we handle your personal data, please
            contact us through our{" "}
            <Link href="/contact" className="font-semibold text-brand underline decoration-accent/40 underline-offset-4 hover:text-accent">
              contact page
            </Link>
            . Our full registered business details are set out in Section 1 above.
          </p>
        </article>

        <aside className="lg:col-span-4">
          <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm lg:sticky lg:top-24">
            <h2 className="text-lg font-semibold text-brand">Questions about your data?</h2>
            <p className="mt-2 text-sm text-muted">
              We&apos;re happy to explain exactly what we hold and why, at any time.
            </p>
            <Link
              href="/contact"
              className="mt-4 block rounded-full bg-accent-vivid px-5 py-3 text-center text-sm font-semibold text-brand transition hover:bg-accent-vivid-dark"
            >
              Get in touch
            </Link>
            <div className="mt-6 border-t border-border pt-4 text-xs text-muted">
              <p className="font-semibold text-brand">ChelmarkTax</p>
              <p className="mt-1">
                A trading name of Mayfair Accountants and Wealth Advisors Ltd, registered in England and
                Wales. Regulated by the Institute of Financial Accountants.
              </p>
            </div>
            <Link
              href="/terms-of-business"
              className="mt-4 block text-xs font-semibold text-brand underline decoration-accent/40 underline-offset-4 hover:text-accent"
            >
              Read our Terms of Business →
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}
