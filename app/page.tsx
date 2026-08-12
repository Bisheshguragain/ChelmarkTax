import type { Metadata } from "next";
import Hero from "@/components/Hero";
import TaxTypesStrip from "@/components/TaxTypesStrip";
import StatsStrip from "@/components/StatsStrip";
import ServiceCards from "@/components/ServiceCards";
import ProcessSteps from "@/components/ProcessSteps";
import Testimonial from "@/components/Testimonial";
import WhySpecialist from "@/components/WhySpecialist";
import FeaturedLocalHelp from "@/components/FeaturedLocalHelp";
import FaqAccordion from "@/components/FaqAccordion";
import CtaSection from "@/components/CtaSection";
import { faqs } from "@/data/faqs";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero />
      <TaxTypesStrip />
      <StatsStrip />
      <ServiceCards />
      <ProcessSteps />
      <Testimonial />
      <WhySpecialist />
      <FeaturedLocalHelp />
      <FaqAccordion />
      <CtaSection />
    </>
  );
}
