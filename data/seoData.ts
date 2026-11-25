import { problems } from "@/data/problems";
import { cities } from "@/data/cities";
import type { SeoPage } from "@/lib/types";

function buildIntro(problemName: string, cityName: string, region: string): string {
  return `If you are based in ${cityName} or elsewhere in ${region} and have received HMRC correspondence relating to a ${problemName}, the process you'll go through is set by national HMRC procedure rather than local variation — but the specialists supporting you can still bring genuinely local context to your case.`;
}

function withHmrcPrefix(name: string): string {
  return name.toLowerCase().includes("hmrc") ? name : `HMRC ${name}`;
}

export const seoData: SeoPage[] = problems.flatMap((problem) =>
  cities.map((city) => {
    const slug = `${problem.slug}-${city.slug}`;
    return {
      slug,
      problemSlug: problem.slug,
      citySlug: city.slug,
      problemName: problem.name,
      problemShortName: problem.shortName,
      hmrcSection: problem.hmrcSection,
      cityName: city.name,
      region: city.region,
      metaTitle: `${withHmrcPrefix(problem.shortName)} Help – ${city.name}`,
      metaDescription: `Dealing with a ${problem.shortName} matter in ${city.name}? Get confidential guidance from UK HMRC enquiry specialists and clear, practical next steps.`,
      pageHeading: `${withHmrcPrefix(problem.name)} Help in ${city.name}`,
      intro: buildIntro(problem.name, city.name, city.region),
      description: problem.narrative,
      keyPoints: problem.keyPoints,
      preparationSteps: problem.preparationSteps,
      commonMistakes: problem.commonMistakes,
      whatHappensNext: problem.whatHappensNext,
      cityContext: city.context,
      cityTriggers: city.enquiryTriggers ?? [],
      cityFaqs: city.localFaqs ?? [],
      typicalDeadline: problem.typicalDeadline,
      checklist: problem.checklist,
      icon: problem.icon,
      faqs: problem.faqs,
    };
  })
);

export function getSeoPage(slug: string): SeoPage | undefined {
  return seoData.find((entry) => entry.slug === slug);
}
