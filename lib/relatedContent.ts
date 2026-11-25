export const guideToProblems: Record<string, string[]> = {
  "vat-enquiry": ["vat-return-error", "compliance-check-letter", "bank-statements-request"],
  "paye-compliance-check": ["compliance-check-letter", "incorrect-self-assessment-return"],
  "hmrc-penalty-appeal": ["late-filing-penalty", "discovery-assessment"],
  "self-assessment-enquiry": ["incorrect-self-assessment-return", "bank-statements-request", "forgot-to-declare-income"],
  "cop9-disclosure": ["forgot-to-declare-income", "discovery-assessment", "hmrc-nudge-letter"],
};

export const guideToIndustries: Record<string, string[]> = {
  "vat-enquiry": ["hospitality", "retail", "construction-cis"],
  "paye-compliance-check": ["construction-cis", "care-homes", "healthcare"],
  "hmrc-penalty-appeal": ["freelancers-creative", "landlords"],
  "self-assessment-enquiry": ["landlords", "online-sellers", "drivers", "freelancers-creative"],
  "cop9-disclosure": ["agriculture", "landlords"],
};

export const problemToGuides: Record<string, string[]> = {
  "hmrc-nudge-letter": ["cop9-disclosure", "self-assessment-enquiry"],
  "compliance-check-letter": ["vat-enquiry", "paye-compliance-check"],
  "incorrect-self-assessment-return": ["self-assessment-enquiry"],
  "vat-return-error": ["vat-enquiry"],
  "late-filing-penalty": ["hmrc-penalty-appeal"],
  "bank-statements-request": ["vat-enquiry", "self-assessment-enquiry"],
  "forgot-to-declare-income": ["cop9-disclosure", "self-assessment-enquiry"],
  "discovery-assessment": ["hmrc-penalty-appeal", "cop9-disclosure"],
};

export const industryToProblems: Record<string, string[]> = {
  landlords: ["forgot-to-declare-income", "discovery-assessment"],
  "construction-cis": ["compliance-check-letter", "vat-return-error"],
  hospitality: ["vat-return-error", "bank-statements-request"],
  "online-sellers": ["forgot-to-declare-income", "hmrc-nudge-letter"],
  drivers: ["bank-statements-request", "forgot-to-declare-income"],
  healthcare: ["incorrect-self-assessment-return", "compliance-check-letter"],
  retail: ["vat-return-error", "discovery-assessment"],
  "freelancers-creative": ["incorrect-self-assessment-return", "late-filing-penalty"],
  agriculture: ["discovery-assessment", "forgot-to-declare-income"],
  "care-homes": ["compliance-check-letter", "late-filing-penalty"],
};

export const blogToGuides: Record<string, string[]> = {
  "mtd-for-income-tax-self-employed": ["self-assessment-enquiry"],
  "five-mistakes-that-trigger-hmrc-compliance-check": ["vat-enquiry", "self-assessment-enquiry"],
  "hmrc-risk-based-approach-to-enquiries": ["self-assessment-enquiry"],
  "first-48-hours-after-hmrc-letter": ["self-assessment-enquiry", "vat-enquiry"],
  "hmrc-penalty-behaviour-categories-explained": ["hmrc-penalty-appeal"],
  "cis-tax-explained-contractors-subcontractors": ["paye-compliance-check"],
  "claim-back-cis-deductions-self-assessment": ["self-assessment-enquiry", "paye-compliance-check"],
  "cis-penalties-and-hmrc-compliance-checks": ["paye-compliance-check", "hmrc-penalty-appeal"],
};

export const blogToProblems: Record<string, string[]> = {
  "mtd-for-income-tax-self-employed": ["incorrect-self-assessment-return", "late-filing-penalty"],
  "five-mistakes-that-trigger-hmrc-compliance-check": ["compliance-check-letter", "hmrc-nudge-letter"],
  "hmrc-risk-based-approach-to-enquiries": ["compliance-check-letter", "discovery-assessment"],
  "first-48-hours-after-hmrc-letter": ["compliance-check-letter", "hmrc-nudge-letter"],
  "hmrc-penalty-behaviour-categories-explained": ["late-filing-penalty", "discovery-assessment"],
  "cis-tax-explained-contractors-subcontractors": ["compliance-check-letter"],
  "claim-back-cis-deductions-self-assessment": ["incorrect-self-assessment-return"],
  "cis-penalties-and-hmrc-compliance-checks": ["compliance-check-letter", "late-filing-penalty"],
};

export const industryToBlogs: Record<string, string[]> = {
  "construction-cis": [
    "cis-tax-explained-contractors-subcontractors",
    "claim-back-cis-deductions-self-assessment",
    "cis-penalties-and-hmrc-compliance-checks",
  ],
};

export const industryToGuides: Record<string, string[]> = {
  landlords: ["self-assessment-enquiry", "cop9-disclosure"],
  "construction-cis": ["paye-compliance-check", "vat-enquiry"],
  hospitality: ["vat-enquiry"],
  "online-sellers": ["self-assessment-enquiry", "cop9-disclosure"],
  drivers: ["self-assessment-enquiry"],
  healthcare: ["self-assessment-enquiry", "paye-compliance-check"],
  retail: ["vat-enquiry"],
  "freelancers-creative": ["paye-compliance-check", "self-assessment-enquiry"],
  agriculture: ["self-assessment-enquiry", "cop9-disclosure"],
  "care-homes": ["paye-compliance-check", "vat-enquiry"],
};
