export type IconName =
  | "file-text"
  | "receipt"
  | "users"
  | "shield-alert"
  | "gavel"
  | "mail"
  | "search"
  | "edit"
  | "alert-triangle"
  | "landmark"
  | "eye-off"
  | "file-search"
  | "home"
  | "hard-hat"
  | "utensils"
  | "shopping-bag"
  | "car"
  | "stethoscope"
  | "store"
  | "palette"
  | "sprout"
  | "heart-pulse"
  | "book-open"
  | "globe"
  | "trending-up"
  | "building-2";

/** @deprecated use IconName */
export type ProblemIconName = IconName;

export type FaqItem = { question: string; answer: string; points?: string[] };

export type Problem = {
  slug: string;
  name: string;
  shortName: string;
  hmrcSection: string;
  summary: string;
  subcategories: string[];
  narrative: string[];
  keyPoints: string[];
  preparationSteps: string[];
  commonMistakes: string[];
  whatHappensNext: string[];
  typicalDeadline: string;
  checklist: string[];
  icon: IconName;
  faqs: FaqItem[];
};

export type City = {
  slug: string;
  name: string;
  region: string;
  context: string;
  enquiryTriggers?: string[];
  localFaqs?: FaqItem[];
};

export type SeoPage = {
  slug: string;
  problemSlug: string;
  citySlug: string;
  problemName: string;
  problemShortName: string;
  hmrcSection: string;
  cityName: string;
  region: string;
  metaTitle: string;
  metaDescription: string;
  pageHeading: string;
  intro: string;
  description: string[];
  keyPoints: string[];
  preparationSteps: string[];
  commonMistakes: string[];
  whatHappensNext: string[];
  cityContext: string;
  cityTriggers: string[];
  cityFaqs: FaqItem[];
  typicalDeadline: string;
  checklist: string[];
  icon: IconName;
  faqs: FaqItem[];
};

export type Industry = {
  slug: string;
  name: string;
  summary: string;
  narrative: string[];
  relevantTaxAreas: string[];
  keyPoints: string[];
  preparationSteps: string[];
  commonMistakes: string[];
  whatHappensNext: string[];
  checklist: string[];
  faqs: FaqItem[];
  icon: IconName;
};

export type HmrcProblemCategory =
  | "Letters and requests"
  | "Penalties"
  | "Return errors"
  | "Income and evidence";

export type HmrcProblemPage = {
  slug: string;
  name: string;
  category: HmrcProblemCategory;
  summary: string;
  narrative: string[];
  keyPoints: string[];
  preparationSteps: string[];
  commonMistakes: string[];
  whatHappensNext: string[];
  checklist: string[];
  faqs: FaqItem[];
  icon: IconName;
};

export type BlogTable = {
  headers: string[];
  rows: string[][];
};

export type BlogSection = {
  heading: string;
  paragraphs: string[];
  list?: string[];
  table?: BlogTable;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedDate: string;
  category: string;
  intro: string;
  sections: BlogSection[];
  faqs: FaqItem[];
  metaTitle: string;
  metaDescription: string;
  focusKeyword: string;
  keywords: string[];
  tags: string[];
};
