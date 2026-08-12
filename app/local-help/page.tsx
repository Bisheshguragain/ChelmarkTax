import type { Metadata } from "next";
import { problems } from "@/data/problems";
import { cities } from "@/data/cities";
import LocalHelpDirectory from "@/components/LocalHelpDirectory";

export const metadata: Metadata = {
  title: "HMRC Enquiry Help Near You",
  description:
    "Find HMRC tax enquiry guidance organised by enquiry type and UK city, from Self Assessment enquiries to COP9 investigations.",
  alternates: { canonical: "/local-help" },
};

export default function LocalHelpPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-wide text-accent">
        Local support
      </p>
      <h1 className="mt-2 text-3xl font-bold text-brand sm:text-4xl">
        HMRC enquiry help, organised by city.
      </h1>
      <p className="mt-3 max-w-2xl text-muted">
        The HMRC enquiry process is the same wherever you&apos;re based in
        the UK — but browsing by your city can help you find guidance that
        speaks to your local business context. Search for your city or
        filter by enquiry type below.
      </p>

      <LocalHelpDirectory problems={problems} cities={cities} />
    </section>
  );
}
