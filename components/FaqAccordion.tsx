"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/faqs";
import Reveal from "@/components/Reveal";

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-surface py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-wide text-accent">
            Frequently asked questions
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-brand sm:text-3xl">
            Common questions once the letter&apos;s arrived.
          </h2>
          <p className="mt-3 text-muted">
            No two enquiries are quite the same — treat the below as general
            orientation, not advice for your specific case.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-8 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-surface shadow-md">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className={isOpen ? "bg-tint-gold/60" : ""}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-brand transition hover:bg-tint-gold/40"
                >
                  {faq.question}
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition ${
                      isOpen ? "bg-accent-vivid text-brand" : "bg-brand/10 text-brand"
                    }`}
                  >
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-4 text-sm text-muted">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
