"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { problems } from "@/data/problems";
import EmailJsForm from "@/components/EmailJsForm";
import ProblemIcon from "@/components/ProblemIcon";

type Stage = "category" | "subcategory" | "contact";

export default function EnquiryWizard() {
  const [stage, setStage] = useState<Stage>("category");
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);

  const selectedProblem = problems.find((p) => p.slug === selectedSlug);

  function chooseCategory(slug: string) {
    setSelectedSlug(slug);
    setStage("subcategory");
  }

  function chooseSubcategory(subcategory: string) {
    setSelectedSubcategory(subcategory);
    setStage("contact");
  }

  function backToCategory() {
    setSelectedSlug(null);
    setSelectedSubcategory(null);
    setStage("category");
  }

  function backToSubcategory() {
    setSelectedSubcategory(null);
    setStage("subcategory");
  }

  const stepLabel = stage === "contact" ? "Step 2 of 2" : "Step 1 of 2";
  const heading =
    stage === "category"
      ? "Which of these matches your situation?"
      : stage === "subcategory"
      ? "Which best describes it?"
      : "A few more details";

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-surface p-6 shadow-sm sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-wide text-accent">{stepLabel}</p>
      <h2 className="mt-2 text-xl font-semibold text-brand sm:text-2xl">{heading}</h2>
      <p className="mt-2 text-sm text-muted">
        {stage === "contact"
          ? "Confirm your details and we'll be in touch shortly."
          : "Pick whichever fits best — it only takes a moment."}
      </p>

      <AnimatePresence mode="wait">
        {stage === "category" && (
          <motion.div
            key="stage-category"
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mt-6 grid gap-3 sm:grid-cols-2"
          >
            {problems.map((problem) => (
              <button
                key={problem.slug}
                type="button"
                onClick={() => chooseCategory(problem.slug)}
                className="group flex items-center gap-3 rounded-lg border border-border bg-background px-4 py-3 text-left text-sm font-medium text-brand transition hover:border-accent-vivid hover:bg-tint-gold"
              >
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white shadow-sm transition group-hover:scale-110 bg-brand`}
                >
                  <ProblemIcon name={problem.icon} className="h-4 w-4" strokeWidth={2.25} />
                </span>
                {problem.name}
              </button>
            ))}
          </motion.div>
        )}

        {stage === "subcategory" && selectedProblem && (
          <motion.div
            key="stage-subcategory"
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mt-6"
          >
            <button
              type="button"
              onClick={backToCategory}
              className="mb-4 text-xs font-medium text-accent hover:underline"
            >
              ← Choose a different topic
            </button>
            <p className="mb-4 text-sm text-muted">
              Topic: <span className="font-medium text-brand">{selectedProblem.name}</span>
            </p>
            <div className="grid gap-3">
              {selectedProblem.subcategories.map((subcategory) => (
                <button
                  key={subcategory}
                  type="button"
                  onClick={() => chooseSubcategory(subcategory)}
                  className="rounded-lg border border-border bg-background px-4 py-3 text-left text-sm font-medium text-brand transition hover:border-accent-vivid hover:bg-tint-gold"
                >
                  {subcategory}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {stage === "contact" && selectedProblem && selectedSubcategory && (
          <motion.div
            key="stage-contact"
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mt-6"
          >
            <button
              type="button"
              onClick={backToSubcategory}
              className="mb-4 text-xs font-medium text-accent hover:underline"
            >
              ← Back
            </button>

            <div className="mb-5 rounded-lg border border-tint-gold-border bg-tint-gold p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-accent">Your enquiry so far</p>
              <p className="mt-1.5 text-sm text-brand">
                <span className="font-semibold">Topic:</span> {selectedProblem.name}
              </p>
              <p className="mt-1 text-sm text-brand">
                <span className="font-semibold">Specifically:</span> {selectedSubcategory}
              </p>
            </div>

            <EmailJsForm
              source="homepage-wizard"
              presetTopic={selectedProblem.name}
              presetSubcategory={selectedSubcategory}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <p className="mt-6 text-xs text-muted">
        Confidential · UK-based specialists · Free initial call, no obligation
      </p>
    </div>
  );
}
