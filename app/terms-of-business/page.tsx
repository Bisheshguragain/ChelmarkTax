import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Business",
  description:
    "ChelmarkTax's Terms of Business, covering our services, fees, confidentiality, liability and complaints procedure.",
  alternates: { canonical: "/terms-of-business" },
};

const sections = [
  { id: "about-us", label: "About us" },
  { id: "our-services", label: "Our services" },
  { id: "engagement", label: "Engagement and scope of work" },
  { id: "fees", label: "Fees and payment" },
  { id: "no-guarantee", label: "No guarantee of outcome" },
  { id: "client-responsibilities", label: "Your responsibilities" },
  { id: "confidentiality", label: "Confidentiality and data protection" },
  { id: "liability", label: "Limitation of liability" },
  { id: "insurance", label: "Professional indemnity insurance" },
  { id: "aml", label: "Anti-money laundering checks" },
  { id: "ip", label: "Intellectual property" },
  { id: "termination", label: "Ending the engagement" },
  { id: "complaints", label: "Complaints procedure" },
  { id: "regulatory", label: "Regulatory information" },
  { id: "force-majeure", label: "Events beyond our control" },
  { id: "law", label: "Governing law and jurisdiction" },
  { id: "changes", label: "Changes to these terms" },
  { id: "contact", label: "Contact us" },
];

export default function TermsOfBusinessPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <nav className="text-xs text-muted">
        <Link href="/" className="hover:text-accent">
          Home
        </Link>{" "}
        / Terms of Business
      </nav>

      <div className="mt-4 grid gap-10 lg:grid-cols-12">
        <article className="lg:col-span-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-accent">Legal</p>
          <h1 className="mt-2 text-3xl font-semibold text-brand sm:text-4xl">Terms of Business</h1>
          <p className="mt-3 text-sm text-muted">Last updated: 11 August 2026</p>

          <div className="mt-8 rounded-2xl border border-tint-gold-border bg-tint-gold p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-accent">In plain English</p>
            <p className="mt-2 text-sm leading-relaxed text-brand">
              These terms explain who we are, what our service does and doesn&apos;t cover, how fees work,
              and what happens if something goes wrong. We provide guidance and specialist referral support
              for HMRC enquiries — we don&apos;t guarantee a particular outcome from HMRC, we&apos;re upfront
              about fees before any chargeable work starts, and we keep what you tell us confidential. The
              full detail is below.
            </p>
          </div>

          <p className="mt-8 text-sm leading-relaxed text-foreground/90">
            These Terms of Business (&quot;Terms&quot;) govern your use of the ChelmarkTax website and any
            services provided under the ChelmarkTax name. Please read them carefully before engaging our
            services. By instructing us or using our website to submit an enquiry, you accept these Terms.
            If you do not agree with any part of these Terms, please do not use our services.
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

          <h2 id="about-us" className="mt-10 text-xl font-semibold text-brand">1. About us</h2>
          <p className="mt-4 text-sm leading-relaxed text-foreground/90">
            ChelmarkTax is a trading name of Mayfair Accountants and Wealth Advisors Ltd, a company
            registered in England and Wales (company number 11962063), with its registered office
            at Devonshire House, Level 1, One Mayfair Place, Mayfair, London, W1J 8AJ. Throughout these Terms, &quot;ChelmarkTax&quot;,
            &quot;we&quot;, &quot;us&quot; and &quot;our&quot; refer to Mayfair Accountants and Wealth Advisors
            Ltd trading as ChelmarkTax.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-foreground/90">
            Mayfair Accountants and Wealth Advisors Ltd is regulated by the Institute of Financial Accountants
            (IFA), membership number [to be confirmed]. Details of our regulator and how to check our
            membership status are set out in the Regulatory Information section below.
          </p>

          <h2 id="our-services" className="mt-10 text-xl font-semibold text-brand">2. Our services</h2>
          <p className="mt-4 text-sm leading-relaxed text-foreground/90">
            ChelmarkTax provides guidance, case assessment and specialist referral support in connection with
            HMRC enquiries, compliance checks, penalty appeals and disclosures. Depending on how you engage
            with us, our services may include:
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "An initial, no-obligation review of your situation based on the information you provide",
              "Explaining what a specific HMRC letter, notice or process actually means and requires",
              "Helping you understand the documentation and information HMRC is likely to need",
              "Referring you to an appropriately qualified specialist for direct representation, where needed",
              "General guidance on timelines, deadlines and the typical stages of an HMRC process",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-foreground/90">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2} />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-foreground/90">
            The specific scope of work for any chargeable engagement will be confirmed with you separately
            in writing before work begins. General information provided through our website, blog or
            Knowledge Hub is for general guidance only and does not constitute personalised advice.
          </p>

          <h2 id="engagement" className="mt-10 text-xl font-semibold text-brand">3. Engagement and scope of work</h2>
          <p className="mt-4 text-sm leading-relaxed text-foreground/90">
            No client relationship, retainer or duty of care arises simply from submitting an enquiry form,
            browsing this website, or having an initial conversation with us. A formal engagement begins only
            once we have confirmed in writing the specific scope of work, the fee basis, and any other terms
            specific to your matter, and you have agreed to proceed.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-foreground/90">
            Where your matter requires direct representation before HMRC, a tribunal, or another regulated
            activity outside the scope of the initial guidance service, we will confirm this clearly and, where
            appropriate, refer you to a suitably qualified and regulated specialist. We are not responsible for
            the advice, conduct or outcomes of any third-party specialist to whom we refer you, though we take
            reasonable care in selecting who we refer clients to.
          </p>

          <h2 id="fees" className="mt-10 text-xl font-semibold text-brand">4. Fees and payment</h2>
          <p className="mt-4 text-sm leading-relaxed text-foreground/90">
            Our initial consultation is provided free of charge and without obligation. Where chargeable work
            is proposed beyond that initial stage, we will confirm the fee basis, an estimate or fixed price
            where possible, and the payment terms in writing before any chargeable work begins. You will not
            be charged for any work you have not agreed to in advance.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-foreground/90">
            Invoices are payable within the timeframe stated on the invoice, which will be no less than 14
            days unless otherwise agreed. We reserve the right to charge reasonable interest on overdue
            amounts at the statutory rate under the Late Payment of Commercial Debts (Interest) Act 1998,
            where applicable, and to pause further work until overdue fees are settled.
          </p>

          <h2 id="no-guarantee" className="mt-10 text-xl font-semibold text-brand">5. No guarantee of outcome</h2>
          <p className="mt-4 text-sm leading-relaxed text-foreground/90">
            HMRC enquiries, compliance checks, penalty appeals and disclosures depend on the specific facts of
            your case, the evidence available, and decisions made by HMRC and, where relevant, independent
            tribunals — none of which we control. While we bring genuine expertise and care to every case, we
            cannot and do not guarantee any particular outcome, timescale, reduction in liability, or result
            from HMRC or any tribunal. Any indication we give of a likely outcome is a professional judgment
            based on the information available at the time, not a promise or warranty.
          </p>

          <h2 id="client-responsibilities" className="mt-10 text-xl font-semibold text-brand">6. Your responsibilities</h2>
          <p className="mt-4 text-sm leading-relaxed text-foreground/90">
            To help us help you effectively, you agree to:
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "Provide complete, accurate and timely information relevant to your case",
              "Tell us promptly about any deadline stated in correspondence you've received from HMRC",
              "Not ask us to assist in preparing or submitting information you know to be inaccurate or misleading",
              "Respond to reasonable requests for information or documents within a reasonable time",
              "Let us know promptly if your circumstances or the facts of your case change",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-foreground/90">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2} />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-foreground/90">
            We are entitled to rely on the accuracy and completeness of information you provide, and we are
            not responsible for consequences arising from information that was withheld, incomplete or
            inaccurate.
          </p>

          <h2 id="confidentiality" className="mt-10 text-xl font-semibold text-brand">7. Confidentiality and data protection</h2>
          <p className="mt-4 text-sm leading-relaxed text-foreground/90">
            We treat everything you share with us as confidential, and we will not disclose it to third
            parties except: with your consent; to a specialist we refer you to for the purposes of that
            referral; where we are required to do so by law or regulation (including anti-money laundering
            obligations); or to our own professional advisers or insurers on a confidential basis where
            necessary. Our full Privacy Policy explains in detail how we collect, use, store and protect your
            personal data, and your rights in relation to it.
          </p>

          <h2 id="liability" className="mt-10 text-xl font-semibold text-brand">8. Limitation of liability</h2>
          <p className="mt-4 text-sm leading-relaxed text-foreground/90">
            Nothing in these Terms limits or excludes our liability for death or personal injury caused by our
            negligence, for fraud or fraudulent misrepresentation, or for any other liability that cannot
            lawfully be limited or excluded under English law.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-foreground/90">
            Subject to that, our total liability to you arising out of or in connection with any engagement,
            whether in contract, tort (including negligence) or otherwise, is limited to the fees paid by you
            for the specific service giving rise to the claim in the 12 months before the event, unless a
            higher limit is agreed in writing for a specific engagement. We are not liable for any indirect,
            consequential or special loss, or for loss of profit, business or opportunity, except where such
            exclusion is not permitted by law.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-foreground/90">
            Where we refer you to an independent specialist for direct representation, our liability does not
            extend to that specialist&apos;s own advice, conduct or fees, which will be governed by your
            separate agreement with them.
          </p>

          <h2 id="insurance" className="mt-10 text-xl font-semibold text-brand">9. Professional indemnity insurance</h2>
          <p className="mt-4 text-sm leading-relaxed text-foreground/90">
            Mayfair Accountants and Wealth Advisors Ltd holds professional indemnity insurance covering the
            services provided under the ChelmarkTax name, consistent with the requirements of the Institute of
            Financial Accountants. Details of our current insurer and the territorial coverage of our policy
            are available on request.
          </p>

          <h2 id="aml" className="mt-10 text-xl font-semibold text-brand">10. Anti-money laundering checks</h2>
          <p className="mt-4 text-sm leading-relaxed text-foreground/90">
            As a firm regulated by the Institute of Financial Accountants, we are subject to the Money
            Laundering, Terrorist Financing and Transfer of Funds (Information on the Payer) Regulations 2017.
            Before accepting certain engagements, we may need to verify your identity and, where relevant, the
            source of funds or the ownership structure of a business, using appropriate identification
            documents or electronic verification. We may be unable to proceed with an engagement until these
            checks are satisfactorily completed, and we may be required to report certain information to the
            relevant authorities without notifying you, where the law requires this.
          </p>

          <h2 id="ip" className="mt-10 text-xl font-semibold text-brand">11. Intellectual property</h2>
          <p className="mt-4 text-sm leading-relaxed text-foreground/90">
            All content on the ChelmarkTax website, including text, guides, graphics and the ChelmarkTax name
            and branding, is owned by or licensed to Mayfair Accountants and Wealth Advisors Ltd and is
            protected by copyright and other intellectual property laws. You may view and use this content for
            your own personal, non-commercial reference, but may not reproduce, republish or redistribute it
            without our prior written consent.
          </p>

          <h2 id="termination" className="mt-10 text-xl font-semibold text-brand">12. Ending the engagement</h2>
          <p className="mt-4 text-sm leading-relaxed text-foreground/90">
            You may end a chargeable engagement with us at any time by telling us in writing. We may end an
            engagement, or decline to accept one, where we reasonably believe there is a conflict of interest,
            a breakdown in the trust necessary for the relationship, non-payment of fees, or where continuing
            would place us in breach of a legal or regulatory obligation. Where an engagement ends, you remain
            liable for fees relating to work properly carried out up to that point.
          </p>

          <h2 id="complaints" className="mt-10 text-xl font-semibold text-brand">13. Complaints procedure</h2>
          <p className="mt-4 text-sm leading-relaxed text-foreground/90">
            We aim to provide a high standard of service, but if you are unhappy with any aspect of our
            service, please tell us as soon as possible so we can try to resolve it.
          </p>
          <ol className="mt-4 space-y-3">
            {[
              "Contact us in writing, setting out the nature of your complaint, using the details in the Contact Us section below.",
              "We will acknowledge your complaint within 5 working days and aim to provide a full response within 21 days.",
              "If we are unable to resolve your complaint to your satisfaction, you may refer it to the Institute of Financial Accountants, our regulatory body, whose complaints process is available on their website.",
            ].map((step, i) => (
              <li key={step} className="flex items-start gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand text-xs font-semibold text-white">
                  {i + 1}
                </span>
                <p className="text-sm leading-relaxed text-foreground/90">{step}</p>
              </li>
            ))}
          </ol>

          <h2 id="regulatory" className="mt-10 text-xl font-semibold text-brand">14. Regulatory information</h2>
          <p className="mt-4 text-sm leading-relaxed text-foreground/90">
            Mayfair Accountants and Wealth Advisors Ltd, trading as ChelmarkTax, is regulated by the Institute
            of Financial Accountants (IFA), a professional body for accountants and financial advisers in the
            UK. Our IFA membership number is [to be confirmed]. You can verify our membership directly with
            the IFA. Regulation by the IFA means we are bound by their code of ethics and professional conduct
            requirements, and subject to their disciplinary and complaints procedures.
          </p>

          <h2 id="force-majeure" className="mt-10 text-xl font-semibold text-brand">15. Events beyond our control</h2>
          <p className="mt-4 text-sm leading-relaxed text-foreground/90">
            We are not liable for any failure or delay in performing our obligations that results from
            circumstances beyond our reasonable control, including HMRC processing delays, IT or
            telecommunications failures, industrial action, or other genuinely unforeseeable events. We will
            take reasonable steps to keep you informed and to resume performance as soon as reasonably
            possible.
          </p>

          <h2 id="law" className="mt-10 text-xl font-semibold text-brand">16. Governing law and jurisdiction</h2>
          <p className="mt-4 text-sm leading-relaxed text-foreground/90">
            These Terms, and any dispute or claim arising out of or in connection with them or our services,
            are governed by the laws of England and Wales, and are subject to the exclusive jurisdiction of the
            courts of England and Wales.
          </p>

          <h2 id="changes" className="mt-10 text-xl font-semibold text-brand">17. Changes to these terms</h2>
          <p className="mt-4 text-sm leading-relaxed text-foreground/90">
            We may update these Terms from time to time to reflect changes in our services, legal or
            regulatory requirements. The version published on our website at the time you engage us, or as
            updated and separately agreed for an ongoing engagement, will apply. We will always confirm the
            specific terms applicable to a chargeable engagement in writing before work begins.
          </p>

          <h2 id="contact" className="mt-10 text-xl font-semibold text-brand">18. Contact us</h2>
          <p className="mt-4 text-sm leading-relaxed text-foreground/90">
            If you have any questions about these Terms, or wish to raise a complaint, please contact us
            through our <Link href="/contact" className="font-semibold text-brand underline decoration-accent/40 underline-offset-4 hover:text-accent">contact page</Link>.
            Our full registered business details are set out in Section 1 above.
          </p>
        </article>

        <aside className="lg:col-span-4">
          <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm lg:sticky lg:top-24">
            <h2 className="text-lg font-semibold text-brand">Questions about these terms?</h2>
            <p className="mt-2 text-sm text-muted">
              If anything here isn&apos;t clear, we&apos;re happy to talk it through before you engage us.
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
              href="/privacy-policy"
              className="mt-4 block text-xs font-semibold text-brand underline decoration-accent/40 underline-offset-4 hover:text-accent"
            >
              Read our Privacy Policy →
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}
