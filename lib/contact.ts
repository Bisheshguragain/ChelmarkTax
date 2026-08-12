export const CONTACT_EMAIL = "Hello@ChelmarkTax.co.uk";

export const CONTACT_ADDRESS_LINES = [
  "Devonshire House, Level 1",
  "One Mayfair Place, Mayfair, London, England, W1J 8AJ",
  "(appointment only)",
];

const MAILTO_SUBJECT = "Enquiry about my HMRC letter";

const MAILTO_BODY = `Hi ChelmarkTax team,

I've received a letter from HMRC about: [e.g. VAT, PAYE, Self Assessment, a penalty]

Here's a short summary of what it says and what's happened so far:


Best number to reach me on (optional):

Thanks,
[Your name]`;

export const CONTACT_MAILTO = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  MAILTO_SUBJECT
)}&body=${encodeURIComponent(MAILTO_BODY)}`;
