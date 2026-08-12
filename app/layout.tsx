import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";
import { cities } from "@/data/cities";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const SITE_URL = "https://www.chelmarktax.co.uk";
const SITE_NAME = "ChelmarkTax";
const SITE_DESCRIPTION =
  "Confidential, UK-wide support for HMRC tax enquiries — VAT, PAYE, Self Assessment, Corporation Tax, Capital Gains Tax, penalty appeals, COP8/COP9 and Worldwide Disclosure.";
const LEGAL_NAME = "Mayfair Accountants and Wealth Advisors Ltd";
const COMPANY_NUMBER = "11962063";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | HMRC Tax Enquiry Specialists UK`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | HMRC Tax Enquiry Specialists UK`,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | HMRC Tax Enquiry Specialists UK`,
    description: SITE_DESCRIPTION,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  legalName: LEGAL_NAME,
  identifier: COMPANY_NUMBER,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Devonshire House, Level 1, One Mayfair Place",
    addressLocality: "Mayfair, London",
    postalCode: "W1J 8AJ",
    addressCountry: "GB",
  },
  areaServed: cities.map((city) => ({ "@type": "City", name: city.name })),
  parentOrganization: {
    "@type": "Organization",
    name: LEGAL_NAME,
    identifier: COMPANY_NUMBER,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Header />
        <main className="flex-1 pb-20 md:pb-0">{children}</main>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  );
}
