import type { HmrcProblemPage } from "@/lib/types";

export const hmrcProblems: HmrcProblemPage[] = [
  {
    slug: "hmrc-nudge-letter",
    name: "HMRC Nudge Letter",
    category: "Letters and requests",
    summary:
      "What an HMRC nudge letter means, why you've received one, and how to check whether a disclosure is needed.",
    narrative: [
      "A nudge letter is a lighter-touch approach HMRC uses to prompt a taxpayer to review their affairs, typically because data HMRC holds — from banks, property records, overseas information exchanges, or online platforms — suggests a return might be incomplete. Unlike a formal enquiry, a nudge letter doesn't open a statutory investigation into a specific return, but it also shouldn't be ignored, since it signals that HMRC already has information suggesting something may need correcting.",
      "The right first step is working out exactly what prompted the letter — often, though not always, this is indicated by its wording or a reference to a specific type of income or asset — and then checking your own records against what's actually been declared. If a genuine error or omission is found, making a voluntary disclosure is usually treated far more favourably than waiting for HMRC to escalate to a formal enquiry. If, after checking, you're confident everything has been correctly declared, it's still sensible to keep a record of that review in case the same issue is raised again.",
      "Nudge letters are typically generated in batches around a specific data source or campaign — for example, when HMRC receives a new tranche of information from overseas tax authorities, property platforms, or a particular type of income data. This means the timing of a nudge letter can sometimes be linked to a broader HMRC campaign rather than anything specific about your individual return, though the underlying data concern is still real and worth checking properly. Where the letter references a specific disclosure facility, such as the Worldwide Disclosure Facility for offshore matters, that's often a strong signal of exactly what HMRC believes may be missing.",
      "Different nudge letter campaigns can carry very different profiles — some focus on a single asset class such as cryptocurrency or overseas property, others are broader income reviews prompted by lifestyle-versus-declared-income mismatches identified through data analytics. Understanding which campaign generated your letter, where that's discernible from its wording, can help focus your review on the areas most likely to be relevant rather than reviewing every aspect of your tax affairs from scratch.",
    ],
    keyPoints: [
      "A nudge letter reflects specific data HMRC already holds, not a random check",
      "It doesn't open a formal enquiry, but ignoring it can lead to one",
      "Reviewing your own records against what HMRC seems to be flagging is the right first step",
      "A voluntary disclosure after a nudge letter is treated more favourably than one made later under enquiry",
      "Different nudge letter campaigns focus on different specific issues, from offshore assets to cryptocurrency",
      "A well-documented review, even where no correction is needed, provides a useful record if the same issue resurfaces",
    ],
    preparationSteps: [
      "Identify which income type or asset class the letter most likely relates to",
      "Pull together records covering at least the years HMRC is likely interested in",
      "Compare what you find against what was actually declared on your returns",
      "Calculate the tax position accurately before deciding whether a disclosure is needed",
      "Choose the appropriate disclosure route if a correction is required",
      "Check whether the letter references a specific campaign or data source you can identify",
      "Keep a dated record of your review and its conclusion, whatever the outcome",
    ],
    commonMistakes: [
      "Ignoring the letter because it doesn't demand an immediate response by a specific date",
      "Assuming the letter is a generic mailshot rather than based on specific data",
      "Making a partial disclosure that misses other undeclared income from the same or different years",
      "Responding defensively without first checking your own records properly",
      "Delaying a review until a formal enquiry letter arrives instead of acting on the nudge",
      "Reviewing only the most obvious income source and overlooking related items the same data source might reveal",
      "Failing to keep any record of a review that found no errors, leaving nothing to reference later",
    ],
    whatHappensNext: [
      "You review your records against what the letter appears to be flagging",
      "If everything is correctly declared, you can respond confirming this, or simply keep a record",
      "If an error is found, you calculate the correct tax position and interest due",
      "You choose the appropriate route to disclose, from a simple amendment to a formal facility",
      "Not acting on a nudge letter increases the likelihood of a formal enquiry being opened later",
      "Keeping a dated record of the review protects you if HMRC raises the same point again later",
      "Persistent undeclared income identified after multiple nudge letters is treated considerably more seriously than a first, prompt correction",
    ],
    checklist: [
      "The nudge letter itself, including any referenced income type or period",
      "Bank, investment or property records relevant to the area flagged",
      "Copies of previously submitted tax returns for the years in question",
      "Any overseas income or asset records, if referenced",
      "A written note of your review findings, even if no correction is needed",
      "A note of the specific campaign or data source referenced, if identifiable",
      "Correspondence with any relevant third party, such as a platform or overseas institution, if applicable",
    ],
    faqs: [
      {
        question: "Is a nudge letter the same as a tax investigation?",
        answer:
          "No — a nudge letter is a prompt to review your position, not a formal enquiry. However, not responding appropriately can lead to a formal enquiry being opened.",
      },
      {
        question: "Do I have to respond to a nudge letter?",
        answer:
          "There's often no strict legal deadline attached to a nudge letter itself, but reviewing your position and responding is strongly advisable, since the underlying data prompting it doesn't go away.",
      },
      {
        question: "What if I disagree that anything is wrong?",
        answer:
          "You can respond explaining your position, but it's worth reviewing the relevant records carefully first, since nudge letters are usually based on specific data HMRC already holds.",
      },
      {
        question: "Will I be penalised if I respond honestly to a nudge letter?",
        answer:
          "Voluntarily correcting a genuine error after a nudge letter is generally treated far more favourably than waiting for a formal enquiry, and can significantly reduce or sometimes remove penalties.",
      },
      {
        question: "What is the Worldwide Disclosure Facility?",
        answer:
          "It's a specific HMRC route for disclosing offshore income or gains that haven't been correctly declared, often referenced in nudge letters relating to overseas assets or accounts.",
      },
      {
        question: "Can I get professional help responding to a nudge letter?",
        answer:
          "Yes, and it's often worthwhile given how much a nudge letter can hinge on correctly identifying scope and choosing the right disclosure route if one is needed.",
      },
      {
        question: "What if I receive more than one nudge letter over time?",
        answer:
          "Each should be reviewed on its own terms, but a pattern of repeated letters about similar issues makes a thorough, documented review even more important.",
      },
      {
        question: "Does a nudge letter affect my ability to amend a return online?",
        answer:
          "No, if the online amendment window is still open for the relevant year, you can generally use it alongside or instead of a separate disclosure, depending on the size of the correction needed.",
      },
      {
        question: "Can a nudge letter be based on incorrect data?",
        answer:
          "It's possible, and if your review shows the underlying data doesn't match your actual position, explaining this clearly in your response is entirely reasonable.",
      },
      {
        question: "Should I get an accountant involved before responding?",
        answer:
          "Where the letter references unfamiliar income types or larger sums, professional input can help ensure the review is thorough and the response is well-supported.",
      },
      {
        question: "Does a nudge letter mean HMRC is definitely right about the issue?",
        answer:
          "Not necessarily — the letter reflects HMRC's data, which is a strong signal worth investigating, but your own records may show the position is already correct or explainable.",
      },
      {
        question: "How quickly should I respond to a nudge letter?",
        answer:
          "There's no fixed statutory deadline, but acting reasonably promptly — typically within a few weeks — demonstrates good faith and reduces the risk of the matter escalating.",
      },
      {
        question: "Can a nudge letter be reissued if I don't respond at all?",
        answer:
          "HMRC may follow up or escalate to a formal compliance check if a nudge letter goes entirely unaddressed, so a timely response — even a brief one — is worthwhile.",
      },
    ],
    icon: "mail",
  },
  {
    slug: "compliance-check-letter",
    name: "HMRC Compliance Check Letter: What to Do First",
    category: "Letters and requests",
    summary:
      "The first steps to take after receiving an HMRC compliance check letter, from identifying scope to protecting your deadline.",
    narrative: [
      "A compliance check letter is HMRC's general term for the start of a review into some aspect of your tax affairs, and the specific wording of the letter usually indicates which tax and which period is under review. The single most important first step is identifying exactly what has been asked and by when, since compliance check letters typically include a response deadline that, if missed, can narrow your options or lead to estimated assessments.",
      "Before responding, it's worth reading the letter more than once to separate what HMRC has actually requested from what you assume they might be interested in — a response that volunteers more than was asked can broaden the scope of the check unnecessarily. Gathering the specific records referenced, checking them against your return, and only then drafting a response tends to produce a cleaner outcome than responding immediately under pressure.",
      "The tone and structure of compliance check letters can vary depending on which part of HMRC has issued them, since different teams handle different taxes and risk profiles, but the underlying principles are consistent — HMRC must have a genuine reason for the check and must limit its requests to what's reasonably needed. Where a letter references a specific piece of legislation, such as Schedule 36 of the Finance Act 2008, that reference indicates the formal legal basis for the request and is worth noting, since it can affect what rights and obligations apply on both sides.",
      "It's also worth checking who at HMRC has issued the letter and keeping a single point of contact for any follow-up questions, since compliance checks can sometimes involve more than one HMRC officer or team over their lifetime. Where a check drags on longer than expected, you're entitled to ask HMRC for an update on progress or, in some circumstances, apply to the tribunal for a direction that the check should be closed.",
    ],
    keyPoints: [
      "The wording of the letter usually indicates which tax and period is actually under review",
      "Missing the stated response deadline can narrow your options significantly",
      "Responding only to what's actually been asked helps keep the check's scope proportionate",
      "Reading the letter carefully before gathering records saves time later",
      "Keeping a single point of contact for correspondence helps avoid confusion over a longer-running check",
      "You can ask HMRC for a progress update, or in some cases apply for a closure notice, if a check runs on too long",
    ],
    preparationSteps: [
      "Identify which tax and time period the letter actually relates to",
      "Note the response deadline and add a buffer for internal review before sending anything",
      "List out precisely what's been requested, item by item",
      "Gather only those specific records rather than compiling everything you have",
      "Draft a response that answers what's asked, clearly and completely",
      "Note the name and contact details of the HMRC officer handling the check",
      "Keep a simple log of correspondence dates and what was sent or received",
    ],
    commonMistakes: [
      "Responding immediately without reading the letter more than once",
      "Providing broader access to records than the letter actually requested",
      "Assuming the letter relates to the most recent return when it may cover an earlier period",
      "Not asking for clarification when the scope of a request is genuinely unclear",
      "Treating every compliance check the same regardless of which tax or team is involved",
      "Losing track of correspondence dates and details on a check that runs over several months",
      "Not asking for an update when a check appears to have stalled without explanation",
    ],
    whatHappensNext: [
      "You identify exactly what's being asked and the applicable deadline",
      "You gather and provide the specific records requested",
      "HMRC reviews what's provided and may ask follow-up questions",
      "The check concludes with either no changes, an agreed adjustment, or a formal decision",
      "Any formal decision carries its own appeal rights and deadline",
      "If the check runs on unusually long, you can request a progress update from HMRC",
      "In some circumstances, you can apply to the tribunal for a direction requiring HMRC to issue a closure notice",
    ],
    checklist: [
      "The compliance check letter itself, with the response deadline clearly noted",
      "Records specifically referenced in the letter",
      "Your submitted return or accounts for the period in question",
      "A short written summary of exactly what's being asked, before you respond",
      "Any previous correspondence with HMRC on the same matter",
      "Details of the HMRC officer or team handling the check",
      "A log of key dates, including when information was requested and provided",
    ],
    faqs: [
      {
        question: "What's the difference between a compliance check and an enquiry?",
        answer:
          "HMRC often uses 'compliance check' as a general term that can cover various types of review, including formal enquiries — the specific legal basis is usually referenced in the letter itself.",
      },
      {
        question: "Can I ask HMRC to clarify what they want?",
        answer:
          "Yes, you're entitled to ask HMRC to clarify the scope of a request if it's unclear, rather than guessing and potentially providing more than's needed.",
      },
      {
        question: "What happens if I miss the deadline in the letter?",
        answer:
          "Missing a stated deadline can lead to HMRC making assumptions or estimated assessments, so if you need more time, it's better to ask for an extension before the deadline passes.",
      },
      {
        question: "Does a compliance check always relate to my most recent tax return?",
        answer:
          "Not necessarily — HMRC can open a check into any return within the relevant time limits, so it's worth checking the letter carefully to confirm exactly which period is under review.",
      },
      {
        question: "Can HMRC widen a compliance check once it's started?",
        answer:
          "Yes, if the information provided raises new questions, though any expansion should still be reasonably connected to genuine concerns about the tax position.",
      },
      {
        question: "Is it better to respond in writing or by phone?",
        answer:
          "A written response creates a clear record of exactly what was said and provided, which is generally more useful than a phone conversation if the matter later needs to be reviewed or disputed.",
      },
      {
        question: "Can I request a meeting with HMRC during a compliance check?",
        answer:
          "Yes, meetings can sometimes help resolve questions more efficiently than written correspondence alone, though you're not obliged to attend one and can request that questions be put in writing instead.",
      },
      {
        question: "What is a closure notice?",
        answer:
          "It's the formal document that ends an enquiry, either confirming no changes are needed or setting out HMRC's conclusions and any amendment being made.",
      },
      {
        question: "Can I be represented by an accountant during a compliance check?",
        answer:
          "Yes, and it's common for correspondence to be handled by an agent on your behalf, provided HMRC has been given the appropriate authority to deal with them.",
      },
      {
        question: "Does a compliance check show up anywhere publicly?",
        answer:
          "No, compliance checks are confidential between you and HMRC and don't appear on any public record unless matters escalate to a published tribunal decision.",
      },
      {
        question: "Can a compliance check be opened without any specific concern?",
        answer:
          "HMRC operates a mix of risk-based and random checks, so a letter doesn't always mean a specific red flag has been identified, though most are driven by some data-based trigger.",
      },
      {
        question: "What if I've already destroyed old records the letter asks for?",
        answer:
          "Explain honestly what's happened and provide whatever alternative evidence you can, such as bank statements or third-party confirmations, since HMRC will work with the best available evidence.",
      },
    ],
    icon: "search",
  },
  {
    slug: "incorrect-self-assessment-return",
    name: "Incorrect Self Assessment Return",
    category: "Return errors",
    summary:
      "How to correct a mistake on a Self Assessment return, including amendment windows and the right disclosure route.",
    narrative: [
      "Finding an error in a previously submitted Self Assessment return is common, and the correct route to fix it depends mainly on how much time has passed. Returns can usually be amended online within twelve months of the original filing deadline, which is the simplest route for a straightforward correction. Once that window has closed, correcting the position generally needs a different mechanism, such as writing to HMRC directly or, for larger or older errors, a formal disclosure.",
      "Before submitting any correction, it's worth recalculating the full position for the year affected, not just the specific figure that was wrong, since one error can sometimes affect other parts of the return. Interest is generally payable on any additional tax from the original due date regardless of when the correction is made, so there's rarely an advantage to delaying once an error has been identified.",
      "Where the amendment window has closed and the error needs a different correction route, the process typically involves writing to HMRC directly, explaining the error, providing the corrected figures, and setting out the calculation. For larger, older, or more complex errors — particularly those spanning several tax years — a more structured disclosure may be appropriate, which can also help demonstrate that the correction was made voluntarily and in good faith rather than reluctantly under pressure.",
      "Where the error relates to income from a source with its own reporting quirks — such as dividends, foreign income, or capital gains — it's worth checking whether correcting one figure has knock-on effects elsewhere on the return, such as changing entitlement to certain allowances or affecting the High Income Child Benefit Charge calculation. A seemingly small correction can sometimes have a larger effect on the overall tax position than expected.",
    ],
    keyPoints: [
      "Returns can usually be amended online within 12 months of the filing deadline",
      "Older errors need a different correction route once the amendment window has closed",
      "One error can sometimes affect other figures on the same return, so recalculate fully",
      "Interest generally accrues from the original due date regardless of when you correct the error",
      "A single correction can sometimes affect entitlement to allowances or other charges calculated elsewhere on the return",
      "Getting professional help to reconstruct figures accurately reduces the risk of a second, follow-up correction being needed",
    ],
    preparationSteps: [
      "Identify exactly which figure was wrong and why",
      "Establish whether the online amendment window is still open for that year",
      "Recalculate the full tax position for the affected year, not just the one figure",
      "Gather evidence supporting the corrected figures",
      "Choose the appropriate correction route based on the age and size of the error",
      "Check whether the correction affects any allowances or charges calculated elsewhere on the return",
      "Keep a clear written record of what was wrong, why, and how the correct figure was calculated",
    ],
    commonMistakes: [
      "Correcting the obvious error but missing a related figure it affects elsewhere on the return",
      "Assuming an online amendment is still possible without checking the actual time limit",
      "Underestimating the interest that will apply from the original due date",
      "Waiting to correct a known error in the hope it won't be noticed",
      "Using an informal route for an error that's actually large enough to need formal disclosure",
      "Not checking whether a correction to one figure changes entitlement to an allowance or another calculated charge",
      "Submitting a correction without a clear written explanation, making it harder to answer follow-up questions",
    ],
    whatHappensNext: [
      "You identify the error and recalculate the correct position for the affected year",
      "You choose the appropriate correction route based on timing and size",
      "HMRC processes the correction, which may include recalculating interest due",
      "Any additional tax and interest becomes payable from the original due date",
      "HMRC may ask follow-up questions if the correction raises further points",
      "If the correction affects other parts of your tax position, those knock-on effects are recalculated too",
      "You'll receive a revised tax calculation reflecting the corrected figures once processed",
    ],
    checklist: [
      "The original submitted return and any supporting workings",
      "Evidence supporting the correct figures",
      "A recalculation of the full tax position for the year, not just the single error",
      "Records of when the error was identified and how",
      "Correspondence with HMRC if a correction has already been discussed",
      "A written explanation of what was wrong and why",
      "Evidence of any allowances or charges affected by the correction",
    ],
    faqs: [
      {
        question: "How far back can I amend a Self Assessment return?",
        answer:
          "Online amendments are generally only available within 12 months of the filing deadline; correcting older returns needs a different route, often involving writing to HMRC directly.",
      },
      {
        question: "Will I be charged a penalty for correcting my own mistake?",
        answer:
          "Voluntarily correcting a genuine error, especially before HMRC identifies it independently, is generally treated far more favourably than an error found through an enquiry, and can sometimes avoid a penalty altogether.",
      },
      {
        question: "Do I need to pay interest on a correction?",
        answer:
          "Yes, interest typically applies to additional tax from the original due date, regardless of when the correction is actually made.",
      },
      {
        question: "Does correcting my own return count as a disclosure?",
        answer:
          "A straightforward, timely amendment is generally treated as routine correction rather than a formal disclosure, though larger or older errors may benefit from being handled more formally.",
      },
      {
        question: "What if I can't recalculate the figures myself?",
        answer:
          "It's worth getting help reconstructing the correct position accurately, since an incomplete or approximate correction can itself raise further questions from HMRC.",
      },
      {
        question: "Can correcting an error trigger a wider enquiry?",
        answer:
          "It's possible if the correction reveals a pattern or a more significant issue, but a clear, well-explained voluntary correction is generally viewed far more favourably than one HMRC uncovers independently.",
      },
      {
        question: "Can I correct more than one year's return at once?",
        answer:
          "Yes, though each year generally needs its own correction submitted through the appropriate route for that year's specific time limits.",
      },
      {
        question: "Will HMRC tell me if my correction changes other parts of my return?",
        answer:
          "HMRC's system will generally reflect knock-on changes in your revised calculation, but it's worth reviewing the full recalculation yourself to make sure it looks right.",
      },
      {
        question: "What if I realise the mistake was actually in my favour?",
        answer:
          "You should still correct it — an overpayment can usually be reclaimed, and leaving the position uncorrected means your return remains inaccurate either way.",
      },
      {
        question: "Do I need to explain why the mistake happened?",
        answer:
          "It's not always mandatory, but a short, honest explanation can help HMRC understand the correction and reduces the likelihood of follow-up questions.",
      },
      {
        question: "Can I amend a return that's already under enquiry?",
        answer:
          "Generally no — once a formal enquiry is open into a specific return, corrections are usually made through the enquiry process itself rather than a standalone amendment.",
      },
      {
        question: "Does correcting an error affect my payments on account?",
        answer:
          "It can, since payments on account are based on your prior year's liability, so a correction that changes that figure may also change what's due going forward.",
      },
    ],
    icon: "edit",
  },
  {
    slug: "vat-return-error",
    name: "VAT Return Error",
    category: "Return errors",
    summary:
      "How to correct an error on a submitted VAT return, current thresholds and the right notification method.",
    narrative: [
      "Errors on VAT returns are corrected differently depending on their size and age. Below a certain value threshold, many errors can simply be adjusted on the next VAT return rather than requiring separate notification to HMRC. Larger errors, or ones above the relevant threshold, generally need to be reported to HMRC directly using the appropriate error correction process rather than folded into a routine return.",
      "Getting the correction method right matters, since using the wrong route can itself become a compliance issue. It's also worth checking whether an error is a one-off mistake or symptomatic of a systemic issue — such as a consistently wrong VAT rate being applied to a particular product line — since a systemic error usually needs correcting at the source, not just adjusting the numbers for one period.",
      "Where an error correction is submitted formally, HMRC reviews the explanation and figures provided, and may ask follow-up questions if the calculation or the reason for the error isn't entirely clear. Keeping a clear internal record of how the error occurred, and what's been changed to prevent it recurring, is useful both for HMRC's review and for demonstrating that the business takes its VAT compliance seriously, which can be relevant to how any associated penalty is assessed.",
      "Some errors arise from systems or processes rather than a single mistake — for example, a point-of-sale system misconfigured to apply the wrong VAT rate to a product category. In these cases, it's worth documenting both the correction of past returns and the fix applied going forward, since HMRC may ask what steps have been taken to prevent the same error recurring, particularly where a penalty for carelessness is being considered.",
    ],
    keyPoints: [
      "Small VAT errors can often be adjusted on your next return, without separate notification",
      "Larger errors generally need to be reported to HMRC directly using the formal correction process",
      "Using the wrong correction method can itself create a compliance issue",
      "A systemic VAT error needs fixing at the source, not just correcting past figures",
      "System or process errors need both a backward correction and a documented fix going forward",
      "HMRC may ask what's been done to prevent a systemic error recurring, which is relevant to any penalty",
    ],
    preparationSteps: [
      "Establish exactly which return period and figure the error relates to",
      "Calculate the total value of the error across all affected periods",
      "Check whether the error falls above or below the relevant correction threshold",
      "Identify the root cause to prevent the error recurring",
      "Choose and use the correct notification method based on the error's size",
      "Identify whether the error stems from a system or process issue, not just a one-off mistake",
      "Document any fix applied to prevent the error recurring on future returns",
    ],
    commonMistakes: [
      "Using the informal adjustment route for an error that's actually above the notification threshold",
      "Correcting the current period without checking if the same error affected earlier returns",
      "Not investigating the root cause of a recurring error",
      "Assuming a VAT error is minor without properly calculating its total value",
      "Delaying correction while continuing to make the same mistake on subsequent returns",
      "Correcting past returns without fixing the underlying system or process causing the error",
      "Not documenting the steps taken to prevent recurrence, which can affect how any penalty is assessed",
    ],
    whatHappensNext: [
      "You calculate the value and cause of the error across all affected periods",
      "You correct it using the appropriate route based on its size",
      "HMRC reviews the correction and may ask clarifying questions",
      "Any additional VAT due, plus interest, becomes payable",
      "A pattern of errors may prompt a broader compliance check into related areas",
      "Where a systemic cause is identified, HMRC may ask what's been done to prevent it recurring",
      "Evidence of a prompt, thorough fix can influence how any penalty for the error is assessed",
    ],
    checklist: [
      "The VAT return containing the error and the correct figures",
      "Workings showing how the error arose and its total value",
      "Evidence of whether the error is a one-off or a recurring pattern",
      "Sales or purchase records affected by the error",
      "A note of which correction method was used and when",
      "A description of the root cause, especially for systemic or repeated errors",
      "Evidence of any fix applied to your systems or processes going forward",
    ],
    faqs: [
      {
        question: "Can I just correct a VAT error on my next return?",
        answer:
          "For errors below the relevant threshold, yes — but larger errors generally need to be notified to HMRC directly using the formal error correction process rather than adjusted informally.",
      },
      {
        question: "Will correcting a VAT error trigger a penalty?",
        answer:
          "A genuine error corrected proactively is treated much more favourably than one HMRC identifies itself, and penalties for careless errors can sometimes be reduced or avoided through prompt disclosure.",
      },
      {
        question: "What if the same VAT error has been repeated over several periods?",
        answer:
          "A recurring error usually needs correcting across all the affected periods, not just the most recent one, and identifying the root cause helps prevent it continuing.",
      },
      {
        question: "What's the current threshold for adjusting a VAT error on a later return?",
        answer:
          "The threshold is set by HMRC and can change, so it's worth checking the current figure before deciding whether informal adjustment or formal notification is the correct route for your error.",
      },
      {
        question: "Do I need to tell HMRC about an error I've already corrected?",
        answer:
          "If the error is below the relevant threshold and has been properly adjusted on a later return, separate notification usually isn't required, but formal notification is needed for larger errors.",
      },
      {
        question: "Can a VAT error affect my other tax returns?",
        answer:
          "It's possible, particularly if the error relates to how income or expenses are recorded more generally, so it's worth checking whether it has any knock-on effect on your accounts or Corporation Tax position.",
      },
      {
        question: "What if the same VAT error affects multiple products or services?",
        answer:
          "The total error across all affected items and periods needs to be calculated together, since the correction threshold is based on the cumulative value, not each individual instance.",
      },
      {
        question: "Can I get a penalty reduced by fixing the root cause?",
        answer:
          "Demonstrating a prompt, thorough fix to prevent recurrence is generally viewed favourably and can be relevant to how any penalty for carelessness is calculated.",
      },
      {
        question: "Do I need to tell my accountant about every VAT error?",
        answer:
          "Yes, even small errors are worth flagging, since your accountant can help assess whether the correct notification method has been used and whether any pattern needs addressing.",
      },
      {
        question: "How long do I have to correct a VAT error?",
        answer:
          "Time limits apply, generally running from the end of the relevant VAT accounting period, so older errors should be reviewed for whether they're still within scope for correction.",
      },
      {
        question: "Does a VAT error affect my flat rate scheme eligibility?",
        answer:
          "It could, particularly if the error relates to turnover calculations used to determine scheme eligibility, so it's worth checking this alongside the correction itself.",
      },
      {
        question: "Can an error correction result in a VAT refund?",
        answer:
          "Yes, if the error means you've overpaid VAT, the correction process works the same way and should result in the overpaid amount being repaid or credited.",
      },
    ],
    icon: "alert-triangle",
  },
  {
    slug: "late-filing-penalty",
    name: "HMRC Late Filing Penalty",
    category: "Penalties",
    summary:
      "What to check before appealing an HMRC late filing penalty, including deadlines and reasonable excuse evidence.",
    narrative: [
      "Late filing penalties are usually issued automatically once a return misses its deadline, regardless of whether any tax is actually owed, which means even a nil or repayment return can attract a penalty if filed late. The penalty structure typically starts with a fixed amount and escalates the longer the return remains outstanding, with additional charges kicking in at further milestones.",
      "Before appealing, check the notice for basic accuracy — the stated deadline, the date HMRC recorded the return as received, and whether any reasonable excuse might apply. HMRC's definition of a reasonable excuse is generally narrower than most people expect, focusing on genuinely exceptional circumstances rather than routine administrative oversights, so it's worth being realistic about the strength of your grounds before deciding whether to appeal.",
      "Where a penalty appeal succeeds, it's usually because either the reasonable excuse genuinely meets HMRC's threshold, or because a factual error is identified in the penalty itself — such as an incorrect filing date being recorded, or a penalty being issued for a return that was in fact filed correctly. It's also worth checking whether a reasonable excuse existed for the whole period of the delay, not just the initial cause, since HMRC expects the return to be filed promptly once the original excuse ends.",
      "For partnerships, each partner can face their own separate penalty for a late partnership return, in addition to any penalty on their individual return, which means a single missed partnership deadline can generate multiple penalties across the partners. Directors of companies should also be aware that late filing penalties for Company Tax Returns and confirmation statements operate under different rules to Self Assessment, so a business missing more than one type of deadline can face penalties accumulating from several different regimes at once.",
    ],
    keyPoints: [
      "Late filing penalties can apply even where no tax is actually owed",
      "Penalties typically escalate the longer a return remains outstanding",
      "Checking the notice's basic facts is a useful first step before appealing",
      "HMRC's reasonable excuse test is narrower than most people assume",
      "A late partnership return can generate a separate penalty for each partner, not just one penalty overall",
      "Company and confirmation statement late filing penalties operate under different rules to Self Assessment",
    ],
    preparationSteps: [
      "Check the penalty notice for basic accuracy, including the recorded filing date",
      "Confirm exactly when the return was actually filed, with evidence",
      "Identify whether a genuine reasonable excuse applies, and for how long",
      "Gather evidence supporting that excuse from the relevant time period",
      "Decide whether to appeal directly to HMRC or request a review first",
      "Check whether more than one type of return or filing was late, since each may have separate penalty rules",
      "For partnerships, confirm whether each partner has received their own penalty notice",
    ],
    commonMistakes: [
      "Assuming a penalty is correct without checking the recorded filing date against your own records",
      "Claiming a reasonable excuse that only covers part of the delay, not all of it",
      "Providing no evidence to support the claimed reasonable excuse",
      "Not filing the return as soon as possible once the original excuse ended",
      "Missing the appeal deadline while deciding whether it's worth challenging",
      "Assuming a single penalty covers all late filings when several different regimes may be involved",
      "Overlooking that each partner in a partnership can receive their own separate penalty",
    ],
    whatHappensNext: [
      "You check the penalty notice for accuracy and identify your grounds for appeal, if any",
      "You submit an appeal to HMRC within the stated deadline",
      "HMRC reviews the appeal and either cancels, reduces, or upholds the penalty",
      "You can request a statutory review if you disagree with HMRC's decision",
      "Unresolved disputes can be escalated to the independent First-tier Tribunal",
      "Multiple penalties across different filing types or partners are reviewed and appealed separately if needed",
      "Each penalty notice carries its own deadline, which needs tracking individually",
    ],
    checklist: [
      "The penalty notice showing the deadline and the date the return was recorded as filed",
      "Evidence supporting any reasonable excuse being claimed",
      "Proof of when the return was actually submitted, such as a filing confirmation",
      "Any correspondence with HMRC around the filing deadline",
      "A clear written explanation of the circumstances, if appealing",
      "Penalty notices for each separate filing or partner, if more than one applies",
      "Confirmation of the actual filing date for every return involved",
    ],
    faqs: [
      {
        question: "Do I get a penalty if I don't owe any tax?",
        answer:
          "Yes — late filing penalties are generally based on the return being late, not on whether tax is owed, so even a nil return can attract a penalty if filed after the deadline.",
      },
      {
        question: "How much do late filing penalties increase over time?",
        answer:
          "They typically start with a fixed initial penalty and increase at further milestones the longer the return remains outstanding, so filing as soon as possible limits further escalation.",
      },
      {
        question: "What counts as a reasonable excuse for late filing?",
        answer:
          "Generally circumstances genuinely outside your control, such as a serious illness or a system failure, rather than routine issues like being busy or relying on someone else without following up.",
      },
      {
        question: "Does the penalty increase the longer I wait to appeal?",
        answer:
          "The penalty itself is generally fixed once issued for that filing delay, but further penalties can apply if the return remains unfiled, so filing and appealing promptly is generally the safer approach.",
      },
      {
        question: "Can a penalty be cancelled entirely?",
        answer:
          "Yes, if HMRC accepts a genuine reasonable excuse covering the whole period of the delay, or if a factual error in the penalty itself is identified.",
      },
      {
        question: "What if I filed on time but HMRC says I didn't?",
        answer:
          "This is worth checking carefully, since submission confirmations or postal evidence can sometimes show a return was filed correctly despite a penalty being issued in error.",
      },
      {
        question: "Do all partners in a partnership get penalised for a late partnership return?",
        answer:
          "Yes, a late partnership return can trigger a separate penalty for each partner individually, in addition to the partnership's own filing obligation.",
      },
      {
        question: "Are Company Tax Return penalties the same as Self Assessment penalties?",
        answer:
          "No, they follow their own separate rules and escalation structure, so a business late with both types of return could face penalties calculated under two different regimes.",
      },
      {
        question: "Can I set up a Time to Pay arrangement instead of appealing?",
        answer:
          "Yes, if the penalty and any tax due are correct but you need time to pay, a Time to Pay arrangement is a separate option from disputing the penalty itself.",
      },
      {
        question: "What if my accountant made the filing late, not me?",
        answer:
          "Relying on an agent doesn't automatically count as a reasonable excuse, though the specific circumstances of what went wrong are still worth explaining if you decide to appeal.",
      },
      {
        question: "Does an appeal pause the penalty while it's being considered?",
        answer:
          "Not automatically — it's worth checking with HMRC whether payment is expected while an appeal is under review, to avoid additional interest accruing unnecessarily.",
      },
      {
        question: "Can penalties be reduced through negotiation rather than a formal appeal?",
        answer:
          "HMRC's process is generally structured around reasonable excuse and factual accuracy rather than negotiation, though a well-evidenced case can still result in a penalty being reduced or cancelled.",
      },
    ],
    icon: "gavel",
  },
  {
    slug: "bank-statements-request",
    name: "HMRC Asking for Bank Statements",
    category: "Income and evidence",
    summary:
      "When HMRC can request bank statements, your rights, and how to prepare a relevant response.",
    narrative: [
      "HMRC's power to request bank statements and other records comes primarily from Schedule 36 of the Finance Act 2008, which allows it to ask for information and documents reasonably required to check a tax position. A request for bank statements doesn't automatically mean HMRC suspects wrongdoing — bank records are often simply the most direct way to verify income, expenses or the source of specific transactions being queried.",
      "You're entitled to understand why particular statements or accounts have been requested, and to push back if a request seems disproportionate to the enquiry in progress — for example, requesting years of personal account statements for a query about a single business transaction. Where personal and business banking are mixed, it's often more efficient to provide a clear reconciliation alongside the statements than to leave HMRC to work out which transactions are relevant.",
      "Where bank statements reveal transactions that need further explanation, it's generally more effective to proactively explain the context — such as a loan from a family member, the sale of a personal asset, or a transfer between your own accounts — than to wait for HMRC to ask about each one individually. Providing a short, clear explanation alongside unusual transactions, rather than leaving HMRC to draw its own conclusions, tends to resolve queries more quickly and reduces the risk of a transaction being misunderstood as undeclared income.",
      "Joint accounts add a further layer of complexity, since HMRC's request may need context about which transactions relate to you specifically rather than a joint account holder, particularly where the account is shared with a spouse, business partner or family member who has entirely separate tax affairs. Providing a short note clarifying whose transactions are whose, where this isn't obvious from the statement alone, helps prevent HMRC from drawing incorrect conclusions about a joint account holder's finances.",
    ],
    keyPoints: [
      "Schedule 36 gives HMRC power to request records reasonably required for a check",
      "A bank statement request doesn't automatically mean wrongdoing is suspected",
      "You can ask HMRC to explain why specific statements have been requested",
      "Providing a reconciliation alongside mixed personal/business statements speeds things up",
      "Joint account statements may need extra context distinguishing your transactions from a joint holder's",
      "A short clarifying note alongside statements often resolves ambiguity more efficiently than leaving HMRC to interpret it",
    ],
    preparationSteps: [
      "Confirm exactly which accounts and periods have actually been requested",
      "Gather the statements for those specific accounts and periods",
      "Review the statements yourself first, before sending them to HMRC",
      "Prepare short explanations for any large or unusual transactions",
      "Reconcile mixed personal and business transactions clearly, if relevant",
      "Identify whether any requested accounts are joint, and note whose transactions are whose",
      "Prepare a brief covering note summarising the statements provided and any key context",
    ],
    commonMistakes: [
      "Providing statements for accounts that weren't actually requested",
      "Sending statements without reviewing them first for anything that needs explaining",
      "Leaving large or unusual transactions unexplained and hoping they won't be queried",
      "Not separating personal and business transactions where accounts are mixed",
      "Assuming a request for statements means HMRC already suspects wrongdoing",
      "Providing joint account statements without clarifying which transactions relate to you specifically",
      "Sending statements with no covering note, leaving HMRC to draw its own conclusions",
    ],
    whatHappensNext: [
      "You confirm the scope of the request and gather the relevant statements",
      "You review them and prepare explanations for anything unusual",
      "You provide the statements, ideally with a short reconciliation or explanation attached",
      "HMRC reviews the statements against your declared income and may ask follow-up questions",
      "The check concludes with either no changes or a proposed adjustment based on what's found",
      "Any joint account context you've provided is factored into HMRC's review of the transactions",
      "A clear covering note alongside statements often speeds up how quickly a query is resolved",
    ],
    checklist: [
      "The specific information notice or letter requesting the statements",
      "Bank statements for the accounts and periods actually requested",
      "A reconciliation separating personal and business transactions, if accounts are mixed",
      "An explanation for any large or unusual transactions HMRC may query",
      "A note of the scope you've agreed to provide, to avoid scope creep",
      "A brief covering note summarising what's been provided and any relevant context",
      "Clarification of transactions on any joint accounts, where relevant",
    ],
    faqs: [
      {
        question: "Can HMRC ask for my personal bank statements?",
        answer:
          "Yes, if they're reasonably required to check a tax position, particularly where personal and business finances are mixed or where personal accounts may show untaxed income.",
      },
      {
        question: "Do I have to provide statements for all my accounts?",
        answer:
          "Only for accounts and periods that are reasonably relevant to the check — you can ask HMRC to explain the relevance of any account you think falls outside a reasonable scope.",
      },
      {
        question: "What if my personal and business banking are mixed?",
        answer:
          "Providing a clear reconciliation alongside the statements, showing which transactions relate to the business, generally produces a smoother review than leaving HMRC to work it out.",
      },
      {
        question: "Can I redact information on bank statements before sending them?",
        answer:
          "Generally you should provide statements in full for the requested accounts and periods, though you can discuss with HMRC if there's a genuine reason a specific detail is irrelevant and sensitive.",
      },
      {
        question: "What if a transaction on my statement isn't actually income?",
        answer:
          "Providing a short, clear explanation — such as evidence it was a loan, gift, or transfer between your own accounts — alongside the statement is usually the most effective way to address this.",
      },
      {
        question: "How many years of bank statements can HMRC ask for?",
        answer:
          "This depends on the scope of the specific check, but requests should be reasonably connected to the periods actually under review, and you can ask HMRC to justify a request that seems to go further than that.",
      },
      {
        question: "Do I need to provide statements for a joint account?",
        answer:
          "Potentially, if it's reasonably relevant to the check, but you can provide context distinguishing your transactions from the other account holder's to avoid confusion.",
      },
      {
        question: "Should I include a covering letter with bank statements?",
        answer:
          "It's often helpful, particularly to flag anything unusual or provide context that isn't obvious from the statement alone, and can speed up the review.",
      },
      {
        question: "Can HMRC request statements from a joint business account?",
        answer:
          "Yes, particularly where business income or expenses flow through it, though the request should still be reasonably connected to the specific check underway.",
      },
      {
        question: "What if I no longer have access to old bank statements?",
        answer:
          "Most banks can provide historical statements on request, sometimes for a fee, so it's worth contacting your bank promptly if you need older records.",
      },
      {
        question: "Can I provide statements electronically rather than on paper?",
        answer:
          "Yes, most HMRC compliance checks accept statements provided digitally, such as PDF downloads from online banking, provided they're clear and complete.",
      },
      {
        question: "What if HMRC's request seems to cover too many years?",
        answer:
          "You can ask HMRC to explain the relevance of the specific years requested, particularly if the scope seems to exceed what's reasonably needed for the check in progress.",
      },
    ],
    icon: "landmark",
  },
  {
    slug: "forgot-to-declare-income",
    name: "Forgot to Declare Income to HMRC",
    category: "Income and evidence",
    summary:
      "What to do if you've forgotten to declare taxable income, and how to work out the correct disclosure route.",
    narrative: [
      "Realising that income hasn't been declared to HMRC — whether from a side activity, rental property, overseas source or anything else — is more common than people expect, and how you respond matters more than how the omission happened. The first step is identifying every year and every source affected, since a partial disclosure that misses other undeclared income can create further problems later.",
      "Once the scope is clear, calculating the tax actually due for each year, including any interest, sets up the choice of disclosure route — a straightforward amendment for a recent, modest omission, or a more formal disclosure facility for larger or longer-running undeclared income. Coming forward voluntarily, before HMRC identifies the income independently, is consistently treated more favourably in terms of penalties than waiting to be found.",
      "The choice between a simple amendment and a formal disclosure facility generally comes down to the size and duration of the omission, and sometimes the type of income involved — offshore income, for example, often points towards HMRC's Worldwide Disclosure Facility specifically. Whichever route is used, the disclosure needs to be complete, covering every year and source affected, since a partial disclosure that HMRC later discovers was incomplete can be treated considerably more harshly than if the full position had been declared from the outset.",
      "Where undeclared income relates to a jointly owned asset, such as a rental property held with a spouse or family member, it's worth establishing each owner's share clearly before disclosing, since both the income and any associated tax liability generally need to be split and declared in line with actual ownership shares, not assumed to sit entirely with one party. Getting the ownership split wrong can mean the disclosure needs correcting a second time.",
    ],
    keyPoints: [
      "Identify every year and source of undeclared income before disclosing, not just the one you've noticed",
      "Calculate the actual tax and interest due before choosing a disclosure route",
      "Voluntary disclosure is treated more favourably than HMRC finding the income independently",
      "The right disclosure route depends on the size and duration of the omission",
      "Income from jointly owned assets generally needs declaring in line with actual ownership shares",
      "Getting the ownership split wrong on a disclosure can mean it needs correcting again later",
    ],
    preparationSteps: [
      "List every source and year of undeclared income, not just the one first noticed",
      "Gather records evidencing each source of income identified",
      "Calculate the tax and interest due for each affected year",
      "Identify any expenses that could reasonably reduce the taxable amount",
      "Choose the appropriate disclosure route based on the size and nature of the income",
      "Confirm the ownership share for any jointly held asset generating the undeclared income",
      "Check whether any joint owners also need to make their own corresponding disclosure",
    ],
    commonMistakes: [
      "Disclosing only the income source first noticed and missing others from the same period",
      "Underestimating how many years are affected before starting the disclosure process",
      "Not calculating interest alongside the additional tax due",
      "Choosing an informal route for income that actually needs a formal disclosure facility",
      "Delaying disclosure once the omission has been identified, rather than acting promptly",
      "Declaring all income from a jointly owned asset under one person's name instead of splitting it by ownership share",
      "Not checking whether a joint owner also needs to disclose their share separately",
    ],
    whatHappensNext: [
      "You identify the full scope of undeclared income across all years and sources",
      "You calculate the tax, interest and any penalty likely to apply",
      "You choose and use the appropriate disclosure route",
      "HMRC reviews the disclosure and may ask further questions",
      "A settlement is agreed covering the tax, interest and any penalty due",
      "Where income relates to a jointly owned asset, HMRC checks the disclosed split against ownership shares",
      "Joint owners may each need to complete their own disclosure for their share of the income",
    ],
    checklist: [
      "Records of the undeclared income source for each affected year",
      "Bank statements or platform records evidencing the income",
      "A calculation of tax and interest due for each year",
      "Records of any related expenses that might reduce the taxable amount",
      "A clear written summary of what happened and when it was identified",
      "Ownership share records for any jointly held asset generating the income",
      "Records confirming whether any joint owners have made their own corresponding disclosure",
    ],
    faqs: [
      {
        question: "What happens if I voluntarily tell HMRC about undeclared income?",
        answer:
          "Coming forward voluntarily is generally treated far more favourably in terms of penalties than having the income identified by HMRC independently, and can sometimes significantly reduce or avoid penalties.",
      },
      {
        question: "How far back do I need to declare undeclared income?",
        answer:
          "This depends on the circumstances, including whether the omission was careless or deliberate, since the time limits HMRC can assess differ accordingly — it's worth establishing the full picture before disclosing.",
      },
      {
        question: "Can I deduct expenses against income I forgot to declare?",
        answer:
          "Generally yes, if the expenses were genuinely incurred wholly for earning that income, which can reduce the taxable amount and the resulting liability.",
      },
      {
        question: "What if I'm not sure how many years are affected?",
        answer:
          "It's worth reviewing your records as far back as reasonably possible before disclosing, since an incomplete disclosure that's later found to have missed further years can be treated more harshly than a complete one from the start.",
      },
      {
        question: "Is there a specific facility for offshore income?",
        answer:
          "Yes, HMRC's Worldwide Disclosure Facility is designed specifically for disclosing offshore income or gains that haven't been correctly declared.",
      },
      {
        question: "Will I be prosecuted for forgetting to declare income?",
        answer:
          "Prosecution is generally reserved for cases involving suspected deliberate fraud, and a genuine, voluntary disclosure of an honest omission is treated very differently from that.",
      },
      {
        question: "What if my spouse and I jointly own the asset generating undeclared income?",
        answer:
          "Each of you generally needs to disclose your own share of the income based on actual ownership, rather than declaring it all under one person.",
      },
      {
        question: "Can I disclose anonymously?",
        answer:
          "No, HMRC disclosure facilities require you to identify yourself, though the process is designed to be as straightforward and fair as possible for genuine voluntary disclosures.",
      },
      {
        question: "How is the penalty calculated on a voluntary disclosure?",
        answer:
          "It's generally based on the behaviour involved — careless, deliberate, or concealed — and reduced according to how much unprompted cooperation and disclosure quality you provide.",
      },
      {
        question: "Can I pay the tax owed in instalments?",
        answer:
          "In many cases, yes, if paying the full amount at once would cause genuine hardship, though this needs to be agreed with HMRC as part of finalising the disclosure.",
      },
      {
        question: "Does the size of the undeclared income affect which disclosure route I use?",
        answer:
          "Yes, larger or more complex omissions, especially across multiple years or involving offshore income, generally point towards a more formal disclosure facility rather than a simple amendment.",
      },
      {
        question: "What if the undeclared income was received several years ago?",
        answer:
          "Older undeclared income still needs disclosing, and the applicable time limit and behaviour classification will determine how far back HMRC can assess tax on it.",
      },
    ],
    icon: "eye-off",
  },
  {
    slug: "discovery-assessment",
    name: "HMRC Discovery Assessment",
    category: "Letters and requests",
    summary:
      "What an HMRC discovery assessment means, the time limits involved, and how to challenge one.",
    narrative: [
      "A discovery assessment is HMRC's mechanism for assessing additional tax after the normal enquiry window for a return has already closed, and it can only be used where specific legal conditions are met — generally that HMRC has discovered a loss of tax, and that the loss wasn't something HMRC could reasonably have been expected to know about based on information already available at the time the enquiry window closed. Discovery assessments often surface years after the return in question, which can make gathering evidence more difficult.",
      "The time limits for a discovery assessment vary significantly depending on the behaviour involved — a longer period applies where careless or deliberate conduct is alleged than for an innocent error. Challenging a discovery assessment often focuses on whether the legal conditions for using discovery were actually met, not just on the tax figures themselves, since a discovery assessment issued outside its proper conditions can potentially be successfully appealed on that basis alone.",
      "Establishing what information HMRC held, and when, is often central to challenging a discovery assessment, since the legal test partly turns on whether HMRC could reasonably have identified the issue earlier from information already available to it. This can mean reviewing what was included in the original return, any related correspondence, and what information HMRC would have had access to through third-party data at the relevant time, to assess whether the conditions for discovery were genuinely met.",
      "Interest and any penalty on a discovery assessment are calculated separately from the tax itself, and it's worth checking both independently, since an error in either can sometimes be identified even where the underlying discovery assessment is otherwise valid. Where multiple tax years are covered by a single discovery assessment, each year should also be checked on its own facts, since the conditions for discovery, and the applicable time limit, can genuinely differ between years.",
    ],
    keyPoints: [
      "Discovery assessments can only be used where specific legal conditions are met, not simply whenever HMRC wants to assess more tax",
      "Time limits for discovery vary significantly depending on whether careless or deliberate behaviour is alleged",
      "Discovery cases often relate to older years, making evidence harder to gather",
      "Challenges often focus on whether the legal conditions for discovery were met, not just the figures",
      "Interest and any penalty should be checked separately from the tax figure itself, since either can contain its own errors",
      "Where multiple years are covered, each year's discovery conditions and time limit should be checked individually",
    ],
    preparationSteps: [
      "Read the discovery assessment notice carefully to identify the stated reasons and period",
      "Gather the original return and any related correspondence from that time",
      "Assess what information HMRC held or could reasonably have accessed at the relevant time",
      "Calculate whether the figures in the assessment are accurate, independently of the legal challenge",
      "Note the appeal deadline and decide on your approach before it passes",
      "Check the interest and any penalty calculation separately from the core tax figure",
      "Where multiple years are covered, review the discovery conditions for each year individually",
    ],
    commonMistakes: [
      "Focusing only on disputing the figures without considering whether discovery was validly used",
      "Assuming an old tax year is automatically out of reach, without checking the actual time limit",
      "Not gathering evidence about what HMRC knew at the relevant time",
      "Missing the appeal deadline while assessing the strength of the case",
      "Underestimating how much a successful legal challenge can turn on procedural conditions alone",
      "Assuming interest and penalty figures are automatically correct because the tax assessment looks right",
      "Treating a multi-year discovery assessment as a single block rather than checking each year separately",
    ],
    whatHappensNext: [
      "You review the assessment and identify both the figures and the legal basis for discovery",
      "You gather evidence relevant to both the amount and whether the conditions were met",
      "You appeal within the stated deadline if either the figures or the legal basis are disputed",
      "HMRC considers the appeal, or it proceeds to independent review or tribunal",
      "The final decision either confirms, adjusts, or cancels the discovery assessment",
      "Interest and penalty calculations are reviewed alongside the core tax figure for accuracy",
      "Where multiple years are involved, each is assessed on whether the discovery conditions were genuinely met",
    ],
    checklist: [
      "The discovery assessment notice, including the stated reasons and time period",
      "The original return and any correspondence from the relevant enquiry window",
      "Evidence relevant to the specific loss of tax alleged",
      "Records showing what information was available to HMRC at the relevant time",
      "A note of the appeal deadline stated on the assessment",
      "A breakdown of interest and any penalty calculated separately from the core tax figure",
      "Details of each tax year covered, if the assessment spans more than one",
    ],
    faqs: [
      {
        question: "Can HMRC always issue a discovery assessment?",
        answer:
          "No — specific legal conditions must be met, generally including that HMRC has discovered a loss of tax that it couldn't reasonably have identified earlier from information already available.",
      },
      {
        question: "How far back can a discovery assessment go?",
        answer:
          "The time limit depends on the behaviour involved, with longer periods applying where careless or deliberate conduct is alleged compared to an innocent mistake.",
      },
      {
        question: "Can I appeal a discovery assessment?",
        answer:
          "Yes, and appeals often succeed by challenging whether the legal conditions for discovery were actually satisfied, in addition to disputing the tax figures themselves.",
      },
      {
        question: "Can a discovery assessment be challenged on a technicality?",
        answer:
          "Yes — successfully showing that the legal conditions for discovery weren't met can result in the assessment being cancelled, regardless of the underlying tax figures.",
      },
      {
        question: "Does HMRC need new evidence to issue a discovery assessment?",
        answer:
          "Generally yes, in the sense that the loss of tax must not have been something HMRC could reasonably have identified earlier from information already available to it.",
      },
      {
        question: "How is interest calculated on a discovery assessment?",
        answer:
          "Interest typically runs from the original due date for the tax year in question, regardless of when the discovery assessment is actually issued, which can result in a significant additional amount for older years.",
      },
      {
        question: "Can I dispute the interest on a discovery assessment separately from the tax?",
        answer:
          "Yes, interest calculations can contain their own errors, such as an incorrect start date, and can be queried independently of the underlying tax figure.",
      },
      {
        question: "Does a discovery assessment automatically include a penalty?",
        answer:
          "Not necessarily — a penalty depends on the behaviour involved, and its own conditions and calculation should be checked separately from the assessment itself.",
      },
      {
        question: "What if only some of the years in a discovery assessment are valid?",
        answer:
          "Each year needs to meet the discovery conditions independently, so it's possible for parts of a multi-year assessment to be successfully challenged while others stand.",
      },
      {
        question: "Can I get professional help reviewing a discovery assessment?",
        answer:
          "Given how much can turn on technical legal conditions as well as the figures themselves, professional review is often worthwhile for a discovery assessment specifically.",
      },
      {
        question: "What's the difference between careless and deliberate behaviour for time limit purposes?",
        answer:
          "Careless behaviour generally means a lack of reasonable care was taken, while deliberate behaviour involves a knowing inaccuracy, and each carries a different, longer time limit for HMRC to raise a discovery assessment.",
      },
      {
        question: "Can I settle a discovery assessment without going to tribunal?",
        answer:
          "Yes, many discovery assessments are resolved through negotiation and agreement with HMRC directly, with tribunal reserved for cases where the disagreement can't be resolved that way.",
      },
    ],
    icon: "file-search",
  },
];
