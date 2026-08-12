import type { Problem } from "@/lib/types";

export const problems: Problem[] = [
  {
    slug: "vat-enquiry",
    name: "VAT Enquiry",
    shortName: "VAT",
    hmrcSection: "Schedule 36 Finance Act 2008",
    summary:
      "Guidance for VAT-registered businesses facing a compliance check, inspection, or information request from HMRC.",
    subcategories: [
      "VAT compliance check or inspection",
      "VAT repayment enquiry",
      "VAT registration or deregistration query",
      "VAT penalty or assessment dispute",
    ],
    narrative: [
      "A VAT enquiry, often described by HMRC as a compliance check or inspection, typically begins with an information notice issued under the Schedule 36 powers in the Finance Act 2008, which allow HMRC to request records reasonably required to check a business's VAT position. These checks can be triggered by an unusual pattern in VAT returns — a large repayment claim, a sudden change in turnover, or a mismatch between VAT returns and other data HMRC holds — or simply as part of a scheduled review of the business's sector or size. The scope of a VAT check can cover output tax on sales, input tax recovery on purchases, partial exemption calculations, or the VAT treatment of specific transactions, and it is important to understand which of these areas HMRC is actually examining before assembling a response.",
      "HMRC may ask to see VAT account reconciliations, sales and purchase invoices, contracts, and in some cases arrange a visit to the business premises to review record-keeping systems directly. Businesses are entitled to ask HMRC to clarify the scope and reasoning behind a request, and are not obliged to provide information that goes beyond what is reasonably required for the check in progress. Where errors are identified during the process, there are formal correction mechanisms depending on their size and age, and voluntary disclosure of a genuine error is generally treated far more favourably than an error uncovered solely through HMRC's own investigation. A VAT check concludes either with no changes required, an agreed adjustment to a return, or in more serious cases a formal assessment and potential penalty, each of which carries its own appeal window.",
      "During the check itself, HMRC caseworkers typically work through the records methodically, cross-referencing the VAT account against underlying invoices and, where relevant, third-party data such as supplier records or bank statements. It's common for an initial request to be followed by supplementary questions once the caseworker has reviewed what's been provided, particularly if the figures raise further questions or if partial exemption calculations need clarifying. Businesses that keep their VAT records in a clear, well-organised format — with a straightforward audit trail from source documents through to the return — generally find this stage moves more quickly than those where records need reconstructing from scratch.",
      "Where a dispute can't be resolved through ordinary correspondence, HMRC's Alternative Dispute Resolution service offers a mediated route to settle disagreements about facts or the application of the law without going straight to tribunal. This isn't available for every type of dispute, but it can be a useful option where the two sides broadly agree on the facts but disagree on the VAT treatment. For businesses that do end up appealing to the First-tier Tribunal, having a clear paper trail from the original enquiry through to the final decision letter makes building the appeal considerably more straightforward.",
    ],
    keyPoints: [
      "A VAT enquiry usually starts with a Schedule 36 information notice, not a surprise visit",
      "HMRC can only ask for records that are reasonably required for the specific check in progress",
      "A genuine error disclosed early is treated far more favourably than one HMRC uncovers itself",
      "Outcomes range from no changes at all to a formal assessment, each with its own appeal rights",
    ],
    preparationSteps: [
      "Read the information notice in full and note exactly which VAT periods and boxes are in scope",
      "Pull together VAT account reconciliations for those periods well before HMRC's deadline",
      "Cross-check your VAT returns against your annual accounts and bank records for obvious mismatches",
      "Flag any figure you're unsure about now, rather than waiting for HMRC to raise it",
      "Decide early whether you want specialist input, especially where partial exemption or international transactions are involved",
    ],
    commonMistakes: [
      "Assuming a request for information means HMRC has already decided something is wrong",
      "Sending over far more records than were actually requested, which can widen the scope of the check",
      "Estimating figures instead of reconstructing them properly from source documents",
      "Missing the stated deadline instead of asking for a short, reasonable extension",
      "Treating every VAT query the same way, without checking which specific rules actually apply to the transaction in question",
    ],
    whatHappensNext: [
      "HMRC reviews the records and workings you've provided against the figures on your return",
      "You may receive follow-up questions if anything needs clarifying or looks inconsistent",
      "HMRC either confirms no changes are needed or proposes an adjustment, explaining its reasoning",
      "If an adjustment is proposed, you can agree it, negotiate the figure, or formally dispute it",
      "The check closes with a written outcome letter, which starts the clock on any appeal deadline",
    ],
    typicalDeadline:
      "Schedule 36 information notices set their own deadline for providing records — commonly around 30 days, stated in the notice itself.",
    checklist: [
      "VAT account reconciliations for the periods under review",
      "Sales and purchase invoices matching the VAT return figures",
      "Partial exemption or special method calculations, if applicable",
      "Contracts or agreements relevant to the transactions being queried",
      "A clear note of exactly which VAT periods and return boxes are in scope",
    ],
    icon: "receipt",
    faqs: [
      {
        question: "What triggers an HMRC VAT compliance check?",
        answer:
          "Common triggers include a large or unusual repayment claim, a sudden change in declared turnover, figures that don't match data HMRC holds from other sources, or simply a scheduled review based on your business's sector or size. Being selected doesn't mean HMRC suspects wrongdoing.",
      },
      {
        question: "How long does a VAT enquiry usually take to resolve?",
        answer:
          "Straightforward checks focused on a single VAT period can often be resolved within a few months once records are provided, while checks touching several periods, partial exemption calculations, or cross-border supplies typically take longer. The information notice itself sets your immediate deadline for providing records.",
      },
      {
        question: "Can I appeal a VAT assessment from HMRC?",
        answer:
          "Yes. If HMRC issues a formal VAT assessment or penalty at the end of a check, you can ask for an internal statutory review or appeal directly to the First-tier Tribunal, both within set time limits stated on the assessment notice.",
      },
      {
        question: "Do I have to let HMRC visit my business premises?",
        answer:
          "HMRC can request a visit as part of a VAT compliance check, and reasonable cooperation is expected, but you're entitled to know the purpose and scope in advance and to have an adviser present during the visit.",
      },
      {
        question: "How should I prepare for a VAT enquiry?",
        answer:
          "Preparation is mostly about organising what you already have and being clear on scope before you respond.",
        points: [
          "Confirm exactly which VAT periods and return boxes HMRC has asked about",
          "Reconcile your VAT account for those periods against your return figures",
          "Set aside contracts or agreements relevant to any specific transaction in question",
          "Note the response deadline immediately and work backwards from it",
        ],
      },
      {
        question: "What documentation will HMRC expect to see?",
        answer:
          "The exact list depends on the scope of the check, but most VAT enquiries draw on a similar core set of records.",
        points: [
          "VAT account and return workings for the periods under review",
          "Sales and purchase invoices matching the figures on your return",
          "Bank statements showing the flow of relevant transactions",
          "Partial exemption calculations, where applicable",
          "Contracts or agreements for any specific transaction HMRC has queried",
        ],
      },
      {
        question: "How long does HMRC have to open a VAT enquiry?",
        answer:
          "There's no single fixed time limit in the same way as Self Assessment enquiries, but HMRC generally has up to 4 years to assess errors for ordinary mistakes, extending to 20 years where deliberate behaviour is involved.",
      },
      {
        question: "What is Alternative Dispute Resolution for VAT disagreements?",
        answer:
          "It's a mediated process where an HMRC facilitator, independent of the case, helps both sides reach an agreement without going to tribunal — useful where the facts are broadly agreed but the VAT treatment is in dispute.",
      },
    ],
  },
  {
    slug: "paye-compliance-check",
    name: "PAYE Compliance Check",
    shortName: "PAYE",
    hmrcSection: "Regulation 80 Income Tax (PAYE) Regulations 2003",
    summary:
      "Help for employers responding to an HMRC review of payroll, benefits, expenses, worker status, and CIS compliance for construction subcontractors.",
    subcategories: [
      "Payroll and RTI review",
      "Employment status or IR35 query",
      "Benefits-in-kind (P11D) review",
      "CIS (Construction Industry Scheme) compliance",
    ],
    narrative: [
      "A PAYE compliance check examines whether an employer has correctly operated payroll, and it commonly looks at three areas together: whether tax and National Insurance have been calculated correctly on pay and benefits, whether expenses and benefits-in-kind have been reported and taxed appropriately, and whether individuals treated as self-employed or contracted through personal service companies have been correctly classified under the off-payroll working rules. Where HMRC concludes that PAYE has been under-deducted, it can raise a determination under Regulation 80 of the Income Tax (PAYE) Regulations 2003 to recover the shortfall directly from the employer, which is why employment status and expense-reporting questions are treated seriously even when the amounts involved look modest at first.",
      "The review usually starts with a request for payroll records, Real Time Information submissions, expense policies, and contracts for any workers engaged outside standard PAYE, and HMRC may also ask to interview relevant staff or visit the business to understand how pay and benefits are actually administered in practice, as distinct from what policy documents describe. A well-prepared response reconciles the payroll records to the RTI submissions and the year-end figures before HMRC's questions are answered, since discrepancies discovered mid-enquiry tend to prompt broader requests rather than narrower ones. Genuine errors identified during a PAYE check can usually be corrected through the appropriate payroll correction process, and a proactive, organised disclosure is generally viewed more favourably than information extracted piecemeal over several rounds of correspondence.",
      "Where an employer also engages subcontractors under the Construction Industry Scheme (CIS), a PAYE compliance check often extends to checking compliance with the Income Tax (Construction Industry Scheme) Regulations 2005 alongside standard PAYE rules. HMRC will typically check that subcontractors were verified before payment, that the correct deduction rate — 0%, 20% or 30% depending on verification status — was applied, and that monthly CIS300 returns reconcile with the payments actually made. Getting a subcontractor's employment status wrong, by treating someone as self-employed under CIS when they are functioning as an employee, can trigger significant backdated PAYE and National Insurance liabilities, which is why CIS and employment status questions are so often examined together in construction-sector compliance checks.",
      "Where a PAYE check progresses beyond a records request, HMRC may ask to hold a meeting with the business, either to discuss specific findings or to understand how payroll processes work in practice. These meetings aren't compulsory in the way that some information requests are, but declining without good reason can sometimes prolong the check, since HMRC may simply ask more detailed written questions instead. A PAYE check can conclude in several ways: no changes required, an agreed correction processed through the normal payroll adjustment routes, or, where HMRC believes tax has been under-deducted, a formal Regulation 80 determination. Employers who identify and correct genuine errors proactively during the check, rather than waiting for HMRC's findings, are generally in a stronger position when it comes to any associated penalty.",
    ],
    keyPoints: [
      "PAYE checks typically examine pay and NI calculations, benefits-in-kind, and worker employment status together",
      "A Regulation 80 determination can make the employer directly liable for underpaid PAYE",
      "HMRC often looks at how pay is actually administered in practice, not just what the paperwork says",
      "Reconciling payroll to RTI and year-end figures before responding avoids inviting broader questions",
      "For construction employers, CIS deduction rates and subcontractor verification are usually checked alongside PAYE",
    ],
    preparationSteps: [
      "Reconcile your payroll records against your RTI submissions and year-end figures first",
      "Pull together contracts and working arrangements for anyone engaged outside standard PAYE",
      "Review your benefits-in-kind reporting for the periods HMRC has asked about",
      "Be ready to explain, not just document, how pay and benefits are actually administered day to day",
      "If you engage CIS subcontractors, reconcile your monthly CIS300 returns against actual payments and verification records",
      "Correct any genuine errors you find proactively rather than waiting to be asked",
    ],
    commonMistakes: [
      "Treating a compliance check meeting as optional without considering the knock-on effect on the check's length",
      "Not distinguishing genuinely self-employed contractors from workers who are functioning as employees in practice",
      "Letting payroll policy documents describe a process that isn't actually how pay and benefits are administered",
      "Overlooking CIS obligations when the main focus has been on payroll for direct employees",
      "Waiting for HMRC to identify an error rather than correcting it as soon as it's found",
    ],
    whatHappensNext: [
      "HMRC reviews the payroll records, RTI data and contracts you've provided",
      "A meeting may be requested to discuss findings or how processes work in practice",
      "HMRC sets out any proposed corrections, including the reasoning behind them",
      "Genuine errors are corrected through the normal payroll adjustment process where possible",
      "The check closes with a written outcome, or a Regulation 80 determination where PAYE has been under-deducted",
    ],
    typicalDeadline:
      "Employers are typically given a set window — often around 30 days — to provide payroll and RTI records once a check begins.",
    checklist: [
      "Payroll records and Real Time Information (RTI) submissions",
      "Expense and benefits-in-kind policies and records",
      "Contracts for any workers engaged outside standard PAYE",
      "A reconciliation of payroll records to year-end figures",
      "Details of how employment status was assessed for any contractors",
      "CIS subcontractor verification records and monthly CIS300 returns, if applicable",
    ],
    icon: "users",
    faqs: [
      {
        question: "What does an HMRC PAYE compliance check look at?",
        answer:
          "It typically covers whether tax and National Insurance were calculated correctly on pay and benefits, whether benefits-in-kind were reported properly, and whether anyone treated as self-employed or engaged through a personal service company was genuinely outside employment for tax purposes.",
      },
      {
        question: "What happens if HMRC decides I've under-deducted PAYE?",
        answer:
          "HMRC can raise a Regulation 80 determination requiring the employer to pay the shortfall directly, separately from any penalty. Employers can appeal a determination if they believe the calculation or underlying facts are wrong.",
      },
      {
        question: "How does employment status affect a PAYE check?",
        answer:
          "If HMRC decides that someone treated as self-employed or paid through a personal service company was actually working as an employee, the employer can become liable for the PAYE and National Insurance that should have been deducted, which is why status evidence is examined closely.",
      },
      {
        question: "Can a PAYE check lead to a criminal investigation?",
        answer:
          "The vast majority of PAYE compliance checks are handled as civil matters resulting in a correction and possibly a penalty. Criminal investigation is reserved for cases involving suspected deliberate fraud, which is a different and much rarer track.",
      },
      {
        question: "How should I prepare for a PAYE compliance check?",
        answer:
          "Most of the groundwork is about reconciling your own records before HMRC starts asking questions.",
        points: [
          "Match your payroll records to your RTI submissions for the periods in scope",
          "Review contracts for any contractors or personal service companies you engage",
          "Check benefit-in-kind reporting against what was actually provided to staff",
          "Identify any known gaps or errors before HMRC finds them",
        ],
      },
      {
        question: "What documents will HMRC ask an employer for?",
        answer:
          "A PAYE check usually draws on a fairly consistent set of payroll and employment records.",
        points: [
          "Payroll records and RTI submissions for the periods under review",
          "Contracts for employees and any workers engaged outside PAYE",
          "Expense and benefits-in-kind policies and supporting records",
          "Evidence of how employment status was assessed for contractors",
        ],
      },
      {
        question: "Does a PAYE compliance check also cover CIS?",
        answer:
          "Yes. Where a business engages subcontractors under the Construction Industry Scheme, HMRC typically reviews CIS compliance alongside PAYE in the same visit or correspondence, since both involve deductions the business is responsible for getting right under the Income Tax (Construction Industry Scheme) Regulations 2005.",
      },
      {
        question: "What CIS records will HMRC want to see?",
        answer:
          "A CIS-related check usually draws on a similar set of records to a standard subcontractor review.",
        points: [
          "Subcontractor verification records showing the deduction rate applied",
          "Monthly CIS300 returns for the periods under review",
          "Contracts or agreements with each subcontractor",
          "Payment and deduction records reconciled to the CIS returns submitted",
        ],
      },
      {
        question: "Do I have to attend a meeting with HMRC during a PAYE check?",
        answer:
          "Meetings aren't always compulsory, but declining without good reason can prolong the check, since HMRC may simply ask more detailed written questions instead.",
      },
      {
        question: "Can a PAYE check also look at previous tax years?",
        answer:
          "Yes, particularly if the current year's review raises questions that suggest a similar issue may have existed previously, so it's worth checking your records go back far enough to answer that if asked.",
      },
    ],
  },
  {
    slug: "hmrc-penalty-appeal",
    name: "HMRC Penalty Appeal",
    shortName: "Penalty Appeal",
    hmrcSection: "Schedule 24 Finance Act 2007",
    summary:
      "Reviewing HMRC penalty decisions and building the case for a formal appeal or statutory review.",
    subcategories: [
      "Late filing penalty",
      "Late payment penalty",
      "Inaccuracy or careless error penalty",
      "Failure to notify penalty",
    ],
    narrative: [
      "HMRC penalties for inaccuracies in returns are primarily governed by Schedule 24 of the Finance Act 2007, which sets penalty rates according to the behaviour behind the error — ranging from no penalty for a reasonable mistake made despite taking reasonable care, through to substantially higher penalties for careless, deliberate, or deliberate-and-concealed behaviour. Separate penalty regimes apply to late filing and late payment, each with their own fixed and tax-geared charges that escalate the longer a return or payment remains outstanding. Before appealing any penalty, the first step is establishing exactly which behaviour category HMRC has applied and whether that categorisation is actually supported by the facts, since penalties are frequently issued at a higher behaviour tier than the circumstances justify, particularly where an error arose from a genuine misunderstanding rather than carelessness.",
      "The formal appeal process generally begins with a written appeal to HMRC within 30 days of the penalty notice, and taxpayers can also request an internal statutory review, in which a different HMRC officer reconsiders the decision, before escalating unresolved disputes to the independent First-tier Tribunal (Tax Chamber). A well-built appeal sets out the specific grounds clearly — whether that is a reasonable excuse for lateness, a reasonable-care argument against a behaviour-based penalty, or a technical challenge to how the penalty was calculated — supported by contemporaneous evidence rather than an account reconstructed after the fact. Missing the appeal deadline does not automatically end the matter, since late appeals can sometimes be accepted for good reason, but it does add an extra hurdle to what might otherwise have been a straightforward challenge.",
      "A statutory review is conducted by an HMRC officer who wasn't involved in the original decision, and it's a genuinely independent second look at the case rather than a formality. Reviews typically take up to 45 days, during which the reviewing officer considers the original decision, any new evidence submitted, and whether the correct behaviour category and calculation were applied. Requesting a review doesn't affect your right to go to tribunal afterwards if you're still unhappy with the outcome, which makes it a low-risk step worth taking in most cases before escalating further.",
      "The First-tier Tribunal (Tax Chamber) is independent of HMRC entirely, and cases are heard by a tribunal judge who considers the evidence from both sides afresh. Many penalty appeals are dealt with on the papers alone, without needing an in-person hearing, particularly for more straightforward cases involving a single penalty and clear supporting evidence. Preparing a tribunal case well means organising the evidence chronologically, being specific about which legal grounds are being relied on, and being realistic about the strength of the argument, since tribunals decide based on evidence rather than sympathy for the circumstances alone.",
    ],
    keyPoints: [
      "Penalty rates depend on HMRC's view of behaviour, from an honest mistake through to deliberate concealment",
      "HMRC sometimes applies a higher behaviour category than the facts actually support",
      "You can request an independent statutory review before going to the Tax Tribunal",
      "A late appeal isn't automatically barred, but it adds an extra hurdle worth avoiding",
    ],
    preparationSteps: [
      "Identify exactly which behaviour category HMRC has applied to the penalty",
      "Gather contemporaneous evidence — records made at the time, not reconstructed afterwards",
      "Check the penalty calculation itself for errors, not just the underlying behaviour finding",
      "Note the 30-day appeal deadline and diarise it immediately",
      "Decide whether your grounds are reasonable excuse, reasonable care, or a technical calculation challenge",
    ],
    commonMistakes: [
      "Appealing without first checking whether the notice itself contains an error worth challenging on its own",
      "Assuming any illness or personal difficulty automatically counts as a reasonable excuse",
      "Submitting an appeal with no supporting evidence, relying only on a written account",
      "Missing the appeal deadline while waiting to gather every possible piece of evidence",
      "Not requesting a statutory review before deciding whether to escalate to tribunal",
    ],
    whatHappensNext: [
      "You submit a written appeal to HMRC within 30 days, setting out your grounds",
      "HMRC considers the appeal and either agrees to cancel or reduce the penalty, or upholds it",
      "If unresolved, you can request an independent statutory review, typically taking up to 45 days",
      "If still unresolved, the case can be escalated to the independent First-tier Tribunal",
      "The tribunal considers the evidence from both sides and issues a binding decision",
    ],
    typicalDeadline:
      "Appeals to HMRC and requests for a statutory review are normally due within 30 days of the penalty notice.",
    checklist: [
      "The penalty notice, including the stated behaviour category",
      "Evidence supporting a reasonable excuse or reasonable care, if relevant",
      "A record of the notice date and the 30-day appeal deadline",
      "Any prior correspondence about the return or payment concerned",
      "A clear written statement of the specific grounds for appeal",
    ],
    icon: "gavel",
    faqs: [
      {
        question: "How do I appeal an HMRC penalty?",
        answer:
          "You normally need to write to HMRC within 30 days of the penalty notice, setting out your grounds for appeal. You can also ask for an independent internal review before escalating an unresolved dispute to the First-tier Tribunal.",
      },
      {
        question: "What counts as a 'reasonable excuse' for HMRC?",
        answer:
          "HMRC generally accepts genuinely exceptional circumstances outside your control — such as a serious illness, bereavement, or a system failure you couldn't have reasonably worked around — rather than routine oversights like forgetting a deadline or relying on someone else without checking.",
      },
      {
        question: "Can I appeal after the 30-day deadline has passed?",
        answer:
          "HMRC can sometimes accept a late appeal if there's a good reason for the delay, but this isn't guaranteed and adds an extra hurdle. It's always safer to protect the original deadline even if the full appeal isn't ready yet.",
      },
      {
        question: "What happens if my appeal is rejected by HMRC?",
        answer:
          "If HMRC rejects your appeal, you can request an independent statutory review, where a different officer reconsiders the case, or take the matter directly to the First-tier Tribunal, which is entirely independent of HMRC.",
      },
      {
        question: "How should I prepare a penalty appeal?",
        answer:
          "A strong appeal is built on evidence gathered before you write anything to HMRC, not after.",
        points: [
          "Pin down the exact date the penalty notice was issued and your deadline",
          "Identify which behaviour category HMRC applied and whether it fits the facts",
          "Collect evidence from the time of the error, such as correspondence or records",
          "Draft your specific grounds for appeal before contacting HMRC",
        ],
      },
      {
        question: "What evidence should I collect before appealing?",
        answer:
          "The right evidence depends on your grounds, but a few things are useful in most appeals.",
        points: [
          "The original penalty notice showing the date, amount and behaviour category",
          "Correspondence or records from the time the error actually happened",
          "Evidence supporting a reasonable excuse, such as medical or system-failure records",
          "Any prior correspondence with HMRC about the same return or payment",
        ],
      },
      {
        question: "How long does a statutory review take?",
        answer:
          "HMRC statutory reviews typically take up to 45 days, during which an officer not involved in the original decision reconsiders the case independently.",
      },
      {
        question: "Do I need a lawyer to appeal to the tax tribunal?",
        answer:
          "No, many penalty appeals are handled without formal legal representation, particularly straightforward cases, though specialist input can help in presenting the evidence and grounds clearly.",
      },
    ],
  },
  {
    slug: "self-assessment-enquiry",
    name: "Self Assessment Enquiry",
    shortName: "Self Assessment",
    hmrcSection: "Section 9A TMA 1970",
    summary:
      "Support for individuals and sole traders whose Self Assessment tax return has been opened for a formal enquiry.",
    subcategories: [
      "Income or expenses under review",
      "Property or rental income enquiry",
      "Self-employment or sole trader enquiry",
      "Foreign income enquiry",
    ],
    narrative: [
      "A Self Assessment enquiry is opened by HMRC under Section 9A of the Taxes Management Act 1970, and it means a submitted tax return has been selected for a closer look rather than simply processed and filed. The opening letter usually sets out which parts of the return are in scope, though HMRC can extend that scope as the enquiry develops if new questions arise. Enquiries are opened either because something in the return looks inconsistent with information HMRC already holds — from employers, banks, letting agents, or other government data sources — or as part of HMRC's routine risk-based and random selection activity, which means an enquiry does not automatically imply wrongdoing.",
      "What matters most in the early stages is establishing exactly what has been asked, protecting the statutory response deadline, and gathering the records that support the figures on the return before replying. A rushed or incomplete first response can broaden the scope of an enquiry rather than narrow it, so it is worth taking a short, considered pause to read the notice carefully rather than reacting immediately. If HMRC's questions reveal a genuine error, there are established routes to amend the position, and the enquiry can usually still be resolved by agreement rather than escalating further. The enquiry closes with a closure notice, which either confirms the return was correct or sets out the amendment HMRC believes is due, and either outcome carries its own appeal rights and deadlines.",
      "Most Self Assessment enquiries proceed through a series of written exchanges, though HMRC can request a meeting in more complex cases, particularly where business records or a specific transaction need discussing in detail. There's no fixed overall time limit on how long an enquiry can run once opened, which means straightforward cases might close within a few months while more complex ones, especially those involving several years or a business with complicated affairs, can take considerably longer. Keeping responses focused and complete reduces the number of follow-up rounds needed and tends to shorten the overall process.",
      "If it becomes clear during the enquiry that an amendment is needed, this can often be agreed informally between the taxpayer and HMRC before the formal closure notice is issued, which can be a faster route than waiting for HMRC to impose a figure. Where agreement can't be reached, the closure notice sets out HMRC's position formally, and from that point the normal appeal process applies in the same way as it would for any other HMRC decision, with its own deadline for challenging the outcome.",
    ],
    keyPoints: [
      "An enquiry means your return has been selected for a closer look, not that HMRC has found something wrong",
      "The opening letter defines the initial scope, but HMRC can broaden it if new questions come up",
      "A rushed first response can widen an enquiry rather than close it down",
      "The enquiry ends with a closure notice, which you can appeal if you disagree with it",
    ],
    preparationSteps: [
      "Read the opening letter carefully and note precisely which figures or years are in scope",
      "Pull together bank statements, invoices and receipts for the period in question",
      "Reconstruct any missing records rather than estimating figures from memory",
      "Check the return itself against your own records before responding to HMRC",
      "Note the response deadline and build in time to review your answer before sending it",
    ],
    commonMistakes: [
      "Responding to only part of what's been asked, prompting further follow-up questions",
      "Assuming the enquiry is only about the specific figure mentioned in the opening letter",
      "Providing estimated figures instead of reconstructing records from original documents",
      "Not checking whether an amendment can be agreed informally before the closure notice stage",
      "Missing the appeal deadline after a closure notice because the timeline wasn't diarised",
    ],
    whatHappensNext: [
      "HMRC reviews the records and explanations provided in response to the opening letter",
      "Further questions may follow if anything needs clarifying or looks inconsistent",
      "An amendment can sometimes be agreed informally before any formal closure notice",
      "HMRC issues a closure notice confirming the return was correct or setting out its amendment",
      "You can appeal the closure notice within the stated deadline if you disagree with it",
    ],
    typicalDeadline:
      "HMRC can normally only open an enquiry within 12 months of an on-time filing; once opened, the letter itself will set your specific reply date.",
    checklist: [
      "The exact scope stated in HMRC's opening letter",
      "Bank statements covering the tax year in question",
      "Invoices, receipts and expense records supporting the return",
      "Copies of any previous correspondence with HMRC about this return",
      "A note of the response deadline, diarised immediately",
    ],
    icon: "file-text",
    faqs: [
      {
        question: "Why has HMRC opened a Self Assessment enquiry into my return?",
        answer:
          "It can be because something in the return looks inconsistent with information HMRC already holds from employers, banks or other sources, or simply as part of HMRC's routine risk-based and random selection activity. An enquiry doesn't automatically mean HMRC suspects an error.",
      },
      {
        question: "What records will HMRC ask for during a Self Assessment enquiry?",
        answer:
          "That depends on the scope stated in the opening letter, but commonly includes bank statements, invoices, expense receipts and any documentation supporting the specific figures HMRC has queried on the return.",
      },
      {
        question: "Can HMRC extend the scope of an enquiry once it's started?",
        answer:
          "Yes, if something in your response raises a new question, HMRC can broaden the areas it's looking at. This is one reason a considered, accurate first response matters more than a fast one.",
      },
      {
        question: "What is a closure notice and what happens after it's issued?",
        answer:
          "A closure notice formally ends the enquiry, either confirming the return was correct or setting out the amendment HMRC believes is due. If you disagree with an amendment, you have the right to appeal it within a set deadline.",
      },
      {
        question: "How should I prepare for a Self Assessment enquiry?",
        answer:
          "The groundwork is largely about understanding scope and getting your own records straight first.",
        points: [
          "Identify exactly which parts of the return the opening letter is querying",
          "Gather bank statements and receipts covering the relevant tax year",
          "Reconcile the figures on your return against your own records",
          "Note the enquiry deadline and any specific questions that need direct answers",
        ],
      },
      {
        question: "What records does HMRC usually ask for?",
        answer:
          "The specifics depend on the scope, but most Self Assessment enquiries draw on a similar core set.",
        points: [
          "Bank statements covering the tax year under enquiry",
          "Invoices and receipts supporting income and expense figures",
          "Correspondence relevant to the specific items being queried",
          "Any prior amendments or communications with HMRC about the same return",
        ],
      },
      {
        question: "How long can a Self Assessment enquiry last?",
        answer:
          "There's no fixed overall limit once an enquiry is opened — straightforward cases can close within months, while more complex ones can take considerably longer, particularly where several years or complicated business affairs are involved.",
      },
      {
        question: "Can I agree a correction before the enquiry formally closes?",
        answer:
          "Yes, it's often possible to agree an amendment informally with HMRC before the closure notice is issued, which can resolve matters more quickly than waiting for a formal notice.",
      },
    ],
  },
  {
    slug: "cop9-disclosure",
    name: "COP8 or COP9 Investigation",
    shortName: "COP8/COP9",
    hmrcSection: "Code of Practice 9 (Contractual Disclosure Facility)",
    summary:
      "Specialist support for the most serious HMRC investigations, including suspected fraud and the Contractual Disclosure Facility.",
    subcategories: [
      "COP9 Contractual Disclosure Facility",
      "COP8 serious non-compliance or avoidance",
      "Suspected fraud investigation",
      "Voluntary disclosure before HMRC contact",
    ],
    narrative: [
      "Code of Practice 8 and Code of Practice 9 letters signal HMRC's more serious investigation procedures, and the distinction between them matters considerably. COP8 is used where HMRC suspects a significant loss of tax through avoidance or non-compliance but does not, at that stage, suspect deliberate fraud, whereas COP9 is used specifically where HMRC suspects deliberate behaviour and offers the taxpayer the Contractual Disclosure Facility as a route to make a full disclosure in exchange for HMRC's undertaking not to pursue a criminal investigation for the tax matters disclosed. Receiving a COP9 letter starts a strict 60-day window in which to decide whether to accept the Contractual Disclosure Facility, reject it, or make no response, and each of those choices carries materially different consequences.",
      "Accepting the facility requires an outline disclosure followed by a detailed disclosure report, both of which need to be accurate and complete, since the protection from criminal investigation only extends to matters genuinely and fully disclosed. COP8 cases proceed differently, generally involving detailed correspondence and evidence gathering around the specific arrangement or period HMRC is querying, without the same disclosure-facility structure. Both processes can involve HMRC's specialist investigation units, meetings conducted under caution-like conditions, and a much longer timeline than a standard enquiry, often stretching over a year or more, which is why specialist representation from the outset matters so much in these cases.",
      "The outline disclosure, submitted within the 60-day window if the Contractual Disclosure Facility is accepted, sets out in summary form the nature and broad extent of the deliberate conduct being disclosed. This is followed by a more detailed disclosure report, usually prepared with specialist input, which quantifies the tax loss precisely and explains how the figures were calculated. HMRC reviews the detailed report carefully, and any gaps or inconsistencies between the outline and detailed disclosure can undermine the protection the CDF was meant to provide, which is why accuracy at every stage matters more in COP9 cases than almost anywhere else in the tax system.",
      "Once a disclosure is accepted, HMRC and the taxpayer typically negotiate a financial settlement covering the tax, interest and penalties due, with the penalty percentage reflecting factors including how much the taxpayer cooperated and how complete and timely the disclosure was. COP8 cases, lacking the same disclosure-facility structure, are more often resolved through a negotiated settlement following detailed correspondence and evidence review, though the same general principle applies — cooperation and a clear, well-evidenced position tend to produce better outcomes than a defensive or incomplete response.",
    ],
    keyPoints: [
      "COP8 targets suspected avoidance; COP9 specifically targets suspected deliberate fraud",
      "COP9's Contractual Disclosure Facility offers protection from criminal investigation, but only for what's fully disclosed",
      "The 60-day CDF decision window is one of the most consequential deadlines in any tax matter",
      "Both processes typically involve specialist HMRC investigation units and run far longer than a standard enquiry",
    ],
    preparationSteps: [
      "Read the COP8 or COP9 letter in full before discussing it with anyone, including HMRC",
      "Build a clear timeline of the arrangement, income or period HMRC is querying",
      "Gather records supporting the relevant income, gains or arrangements as far back as needed",
      "Get specialist input before the 60-day CDF window closes, not after",
      "Avoid informal contact with HMRC until you've decided your approach",
    ],
    commonMistakes: [
      "Contacting HMRC informally to discuss the letter before deciding on a considered approach",
      "Missing the 60-day CDF decision window while still deciding what to do",
      "Submitting an outline disclosure that doesn't match the detail provided later",
      "Underestimating how far back records may need to go to fully address the matter",
      "Proceeding without specialist input, given how much the outcome depends on getting the disclosure right",
    ],
    whatHappensNext: [
      "You decide, within 60 days, whether to accept, reject, or not respond to the CDF offer",
      "If accepted, an outline disclosure is submitted summarising the deliberate conduct",
      "A detailed disclosure report follows, quantifying the tax loss precisely",
      "HMRC reviews the disclosure and may raise further questions or arrange a meeting",
      "A financial settlement is negotiated, covering tax, interest and penalties",
    ],
    typicalDeadline:
      "A COP9 letter starts a strict 60-day window to respond to the Contractual Disclosure Facility offer.",
    checklist: [
      "The COP8 or COP9 letter itself, read in full before responding",
      "A timeline of the arrangement or period HMRC is querying",
      "Records supporting the income, gains or arrangements in question",
      "A considered CDF decision, taken with specialist input",
      "A note of the 60-day deadline, diarised immediately",
    ],
    icon: "shield-alert",
    faqs: [
      {
        question: "What's the difference between COP8 and COP9?",
        answer:
          "COP8 is used where HMRC suspects a significant tax loss through avoidance or non-compliance but doesn't, at that stage, suspect deliberate fraud. COP9 is reserved for cases where HMRC specifically suspects deliberate behaviour, and comes with the offer of the Contractual Disclosure Facility.",
      },
      {
        question: "What is the Contractual Disclosure Facility?",
        answer:
          "It's HMRC's offer, made under COP9, not to pursue a criminal investigation into the tax matters you disclose, in exchange for a full and accurate outline and then detailed disclosure. The protection only covers what is genuinely and completely disclosed.",
      },
      {
        question: "What happens if I don't respond to a COP9 letter?",
        answer:
          "Not responding within the 60-day window is treated as rejecting the Contractual Disclosure Facility, which removes the protection it offers and can lead HMRC to pursue a criminal investigation using its own information and powers instead.",
      },
      {
        question: "Can a COP9 case still lead to prosecution?",
        answer:
          "If the Contractual Disclosure Facility is accepted and the disclosure is genuinely full and accurate, HMRC has undertaken not to pursue a criminal investigation for the matters disclosed. Rejecting the offer, or disclosing incompletely, removes that protection.",
      },
      {
        question: "How should I prepare after receiving a COP8 or COP9 letter?",
        answer:
          "The first days matter more here than in almost any other type of HMRC contact.",
        points: [
          "Read the letter fully and identify whether it's COP8 or COP9",
          "Avoid contacting HMRC informally before you understand the implications",
          "Start building a timeline of the arrangement or period being queried",
          "Get specialist advice before the 60-day CDF decision window runs out",
        ],
      },
      {
        question: "What records will I need to gather?",
        answer:
          "COP8 and COP9 cases often require going back further than a standard enquiry.",
        points: [
          "Records and correspondence relating to the specific arrangement or period queried",
          "Bank statements and evidence of the income, gains or transactions involved",
          "Any professional advice previously taken on the matter",
          "A written timeline of events as you understand them",
        ],
      },
      {
        question: "What's in an outline disclosure for COP9?",
        answer:
          "It's a summary of the nature and broad extent of the deliberate conduct being disclosed, submitted within the 60-day window, followed later by a more detailed report quantifying the tax loss precisely.",
      },
      {
        question: "How is the penalty calculated in a COP9 settlement?",
        answer:
          "The penalty is generally calculated as a percentage of the tax lost, with the exact rate depending on factors like how fully and promptly the disclosure was made and how much the taxpayer cooperated throughout.",
      },
    ],
  },
  {
    slug: "worldwide-disclosure-facility",
    name: "Worldwide Disclosure Facility",
    shortName: "Worldwide Disclosure",
    hmrcSection: "Worldwide Disclosure Facility (WDF)",
    summary:
      "Guidance for individuals and businesses disclosing undeclared offshore income, gains or assets to HMRC through the Worldwide Disclosure Facility.",
    subcategories: [
      "Offshore bank account or savings",
      "Overseas property income",
      "Foreign investment gains",
      "Inherited overseas assets",
    ],
    narrative: [
      "The Worldwide Disclosure Facility (WDF) is HMRC's dedicated route for individuals and businesses to disclose previously undeclared income, gains or assets held outside the UK, ranging from rental income on an overseas property to interest on a foreign bank account or gains on offshore investments. HMRC's ability to identify offshore non-compliance has expanded significantly through the Common Reporting Standard, under which over 100 countries and territories automatically exchange financial account information, meaning HMRC often already holds data suggesting an omission before a disclosure is ever made. The facility itself doesn't reduce the tax or interest due, but making a complete and accurate voluntary disclosure through it is treated considerably more favourably than waiting for HMRC to raise the matter first.",
      "Using the facility involves registering the intention to disclose, then submitting a disclosure within 90 days setting out the income or gains involved, the tax years affected, and a calculation of the tax, interest and any penalty due. The disclosure needs to cover every affected year and every relevant source, since a partial disclosure that HMRC later finds was incomplete can be treated far more harshly — sometimes as if no disclosure had been made at all — than a complete one submitted from the outset. Time limits for how far back a disclosure needs to go depend on the behaviour involved, with longer periods applying where the omission was careless or deliberate rather than an innocent oversight.",
      "Penalties for offshore non-compliance can be higher than for equivalent onshore errors, reflecting an additional offshore penalty loading that applies under the relevant legislation, with the exact increase depending on the tax transparency of the territory where the income or asset is held. Countries and territories are categorised by how much information-sharing cooperation they offer, and disclosures relating to less transparent jurisdictions can attract a higher penalty loading than those involving jurisdictions with full automatic exchange arrangements already in place with the UK.",
      "Once a disclosure is submitted, HMRC reviews the figures and reasoning provided and may ask follow-up questions, particularly around how the tax, interest and penalty have been calculated or how the source of funds has been evidenced. Where the disclosure is accepted, a formal settlement is agreed covering the total amount due, which can often be paid by instalment where the amount involved would otherwise cause genuine hardship. Given how unforgiving HMRC's treatment of an incomplete offshore disclosure can be, getting specialist input before submitting is generally worthwhile, particularly where multiple jurisdictions, several years, or complex ownership structures are involved.",
    ],
    keyPoints: [
      "The Common Reporting Standard means HMRC often already holds data on offshore income before you disclose",
      "A disclosure must cover every affected year and income source, not just the one first noticed",
      "Offshore penalties can be higher than equivalent onshore penalties, depending on the jurisdiction involved",
      "Registering an intention to disclose starts a 90-day window to submit the full disclosure",
      "A partial disclosure later found incomplete can be treated more harshly than no disclosure at all",
      "Instalment arrangements are often available where paying the full amount at once would cause hardship",
    ],
    preparationSteps: [
      "Identify every offshore income source, gain or asset that hasn't been declared",
      "Establish which tax years are affected and the behaviour involved for each",
      "Gather bank statements, investment records and any documentation evidencing the source of funds",
      "Calculate the tax and interest due for each year before registering to disclose",
      "Check which jurisdiction category applies, since this affects the penalty loading",
      "Get specialist input before registering, particularly for multiple jurisdictions or complex structures",
    ],
    commonMistakes: [
      "Disclosing only the income source first noticed and missing other offshore accounts or assets",
      "Underestimating how many years are affected before registering to disclose",
      "Missing the 90-day deadline to submit the full disclosure after registering",
      "Not accounting for the offshore penalty loading when estimating what's likely to be due",
      "Assuming a disclosure is complete without checking every jurisdiction involved separately",
      "Delaying disclosure once an omission is identified, rather than acting promptly",
    ],
    whatHappensNext: [
      "You register your intention to disclose through the Worldwide Disclosure Facility",
      "You have 90 days to submit a full disclosure covering all affected years and sources",
      "HMRC reviews the disclosure and may ask questions about the calculation or source of funds",
      "Any penalty loading is assessed based on the transparency of the jurisdictions involved",
      "A settlement is agreed covering the tax, interest and penalty due",
      "Payment can sometimes be arranged by instalment where paying in full would cause hardship",
    ],
    typicalDeadline:
      "Once you register to use the Worldwide Disclosure Facility, you have 90 days to submit your full disclosure.",
    checklist: [
      "Bank statements and account records for every offshore account involved",
      "Investment or property records for any offshore gains",
      "A calculation of tax, interest and penalty for each affected year",
      "Evidence of the source of funds, where relevant",
      "A note of which jurisdiction each account or asset is held in",
      "A record of when the omission was identified and why",
    ],
    icon: "globe",
    faqs: [
      {
        question: "What is the Worldwide Disclosure Facility?",
        answer:
          "It's HMRC's route for disclosing previously undeclared offshore income, gains or assets, allowing you to bring your tax affairs up to date on more favourable terms than waiting for HMRC to identify the issue independently.",
      },
      {
        question: "How does HMRC find out about offshore income?",
        answer:
          "Primarily through the Common Reporting Standard, under which over 100 countries automatically exchange financial account information with HMRC, alongside other data sources like property records and international information requests.",
      },
      {
        question: "How far back does a disclosure need to go?",
        answer:
          "This depends on the behaviour involved — a longer period applies where the omission was careless or deliberate rather than an innocent oversight, so it's worth reviewing your records as far back as reasonably possible.",
      },
      {
        question: "Are offshore penalties higher than onshore penalties?",
        answer:
          "They can be, since an additional offshore penalty loading applies depending on how transparent the relevant jurisdiction is in sharing information with HMRC.",
      },
      {
        question: "What happens if my disclosure turns out to be incomplete?",
        answer:
          "An incomplete disclosure that HMRC later discovers was missing information can be treated considerably more harshly than a complete one made from the outset, so thoroughness matters more here than almost anywhere else.",
      },
      {
        question: "How should I prepare a Worldwide Disclosure Facility submission?",
        answer:
          "Preparation is largely about establishing the full picture before you register.",
        points: [
          "Identify every offshore account, asset or income source involved",
          "Confirm which tax years and jurisdictions are affected",
          "Calculate the tax and interest due for each year",
          "Get specialist input before the 90-day submission window starts running",
        ],
      },
      {
        question: "What records will I need to gather?",
        answer: "Most disclosures draw on a similar core set of records.",
        points: [
          "Bank and investment statements for each offshore account",
          "Property or asset records for any offshore gains",
          "Evidence of the source of funds involved",
          "A calculation of tax, interest and penalty for each year",
        ],
      },
      {
        question: "Can I pay the amount owed in instalments?",
        answer:
          "In many cases, yes, particularly where paying the full amount at once would cause genuine hardship, though this needs to be agreed with HMRC as part of the settlement.",
      },
      {
        question: "Does the Worldwide Disclosure Facility cover cryptoassets held overseas?",
        answer:
          "It can, where the cryptoassets represent undeclared gains or income that would otherwise fall within scope, though the specific treatment should be checked against current guidance.",
      },
      {
        question: "Will I be prosecuted for using the Worldwide Disclosure Facility?",
        answer:
          "Prosecution is generally reserved for cases involving suspected deliberate fraud, and a genuine, complete voluntary disclosure is treated very differently from that.",
      },
    ],
  },
  {
    slug: "capital-gains-tax-enquiry",
    name: "Capital Gains Tax Enquiry",
    shortName: "Capital Gains Tax",
    hmrcSection: "Taxation of Chargeable Gains Act 1992 compliance check",
    summary:
      "Guidance for individuals and businesses facing an HMRC enquiry into a Capital Gains Tax calculation, relief claim or property disposal.",
    subcategories: [
      "Property sale (60-day return)",
      "Share or investment disposal",
      "Business Asset Disposal Relief",
      "Gift or transfer to a connected person",
    ],
    narrative: [
      "Capital Gains Tax enquiries typically focus on disposals of property, shares or other chargeable assets, checking that the gain has been calculated correctly and that any reliefs claimed genuinely apply. Since the introduction of the 60-day reporting and payment deadline for UK residential property disposals, HMRC has significantly more real-time visibility of property sales than it previously had through the annual Self Assessment cycle alone, which has made timing and accuracy at the point of reporting far more important than before. A typical enquiry checks the disposal proceeds, the allowable costs deducted, and the availability of any relief claimed, such as Private Residence Relief or Business Asset Disposal Relief.",
      "Private Residence Relief is one of the most heavily scrutinised areas, since it can exempt some or all of a gain on a home but only where specific occupation conditions are genuinely met, and HMRC will often ask for evidence of when a property was actually occupied as a main residence, not just what's stated on the return. Where a property has been let out for part of the ownership period, used partly for business purposes, or where more than one property might qualify as a main residence at the same time, the relief calculation becomes considerably more complex and is correspondingly more likely to attract questions.",
      "For share disposals and other investment gains, HMRC checks the acquisition cost used, including how pooled shares of the same class have been matched against disposals under the share identification rules, and whether any relief such as Business Asset Disposal Relief has been correctly claimed based on genuine trading activity and shareholding conditions being met throughout the qualifying period. Gifts and transfers between connected persons, including spouses, have their own specific rules for establishing the deemed disposal value, which is a frequent source of calculation errors picked up during an enquiry.",
      "Where an enquiry identifies an error, the correction depends on whether it relates to a standalone 60-day property return or the annual Self Assessment return, each having a slightly different amendment process and time limit. A Capital Gains Tax enquiry can conclude with no changes required, an agreed adjustment to the gain or relief claimed, or in more serious cases a formal assessment, and getting professional input on relief eligibility before responding is generally worthwhile given how easily a genuinely qualifying relief can be lost through an incomplete or poorly evidenced claim.",
    ],
    keyPoints: [
      "The 60-day property reporting deadline gives HMRC far more real-time visibility of disposals than before",
      "Private Residence Relief depends on genuine occupation conditions being met, not just what's stated on the return",
      "Share disposals need the correct pooling and identification rules applied when matching acquisitions to disposals",
      "Gifts and transfers between connected persons use deemed values, not the actual sale price",
      "Which return the error relates to — the 60-day report or the annual return — affects the correction process",
      "Relief eligibility should be checked and evidenced properly before submitting, not assumed",
    ],
    preparationSteps: [
      "Confirm the acquisition and disposal dates and values for the asset in question",
      "Gather evidence of occupation history if Private Residence Relief has been claimed",
      "Recalculate any share pooling or identification matching used for the disposal",
      "Check the specific conditions for any relief claimed, rather than assuming it applies",
      "Identify whether the query relates to a 60-day property return or the annual Self Assessment return",
      "Get specialist input on relief eligibility before responding, particularly for complex or mixed-use properties",
    ],
    commonMistakes: [
      "Assuming Private Residence Relief automatically covers the whole gain without checking the occupation history",
      "Using the wrong share pooling method when matching disposals to acquisitions",
      "Treating a gift to a connected person as if it had no disposal value for Capital Gains Tax purposes",
      "Missing the 60-day deadline for reporting and paying tax on a residential property disposal",
      "Not keeping evidence of occupation, business use, or letting periods that affect relief calculations",
      "Claiming Business Asset Disposal Relief without checking the shareholding and trading conditions were met throughout",
    ],
    whatHappensNext: [
      "HMRC reviews the disposal proceeds, costs and any relief claimed against supporting evidence",
      "You may be asked to provide evidence of occupation, business use, or trading conditions for any relief claimed",
      "HMRC either confirms the calculation or proposes an adjustment, explaining its reasoning",
      "Any adjustment can be agreed, negotiated, or formally disputed",
      "The correction process depends on whether it relates to a 60-day return or the annual return",
      "The enquiry closes with a written outcome, starting the clock on any appeal deadline",
    ],
    typicalDeadline:
      "Queries into a 60-day property return are typically raised soon after submission; enquiries into the annual Self Assessment return follow the standard 12-month enquiry window.",
    checklist: [
      "Completion statements showing the acquisition and disposal values",
      "Evidence of occupation history if Private Residence Relief has been claimed",
      "Share dealing records showing acquisition dates and pooling calculations",
      "Records supporting any relief claimed, such as Business Asset Disposal Relief conditions",
      "Details of any gift or transfer to a connected person, including the deemed value used",
      "A copy of the 60-day property return or Self Assessment entry being queried",
    ],
    icon: "trending-up",
    faqs: [
      {
        question: "What triggers a Capital Gains Tax enquiry?",
        answer:
          "Common triggers include a property or share disposal reported through the 60-day return or Self Assessment, a large relief claim, or a mismatch between the disposal reported and data HMRC holds from Land Registry or other sources.",
      },
      {
        question: "Does Private Residence Relief cover any property I've lived in?",
        answer:
          "Only where specific occupation conditions are genuinely met for the periods claimed, and HMRC may ask for evidence of when the property was actually used as your main residence.",
      },
      {
        question: "How does HMRC check share disposal calculations?",
        answer:
          "By reviewing the share pooling and identification rules used to match disposals against acquisitions, since using the wrong matching method is a common source of calculation errors.",
      },
      {
        question: "What happens if I gift an asset to my spouse or a connected person?",
        answer:
          "Transfers between spouses are generally treated as taking place at no gain or loss, but gifts to other connected persons use a deemed market value rather than the actual price paid, if any.",
      },
      {
        question: "What if I miss the 60-day property reporting deadline?",
        answer:
          "A penalty can apply for late reporting, in addition to interest on any late payment, so it's worth reporting as soon as possible even if the figures aren't fully finalised.",
      },
      {
        question: "How should I prepare for a Capital Gains Tax enquiry?",
        answer: "Preparation is mostly about gathering evidence for the specific figures and reliefs being queried.",
        points: [
          "Confirm the acquisition and disposal values with supporting documents",
          "Gather occupation or business-use evidence for any relief claimed",
          "Recalculate share pooling if a share disposal is involved",
          "Identify whether the query relates to the 60-day return or Self Assessment",
        ],
      },
      {
        question: "What records will HMRC want to see?",
        answer: "Most Capital Gains Tax enquiries draw on a similar core set of records.",
        points: [
          "Completion statements or contracts for the disposal",
          "Evidence of acquisition costs and any improvement expenditure",
          "Occupation or letting history for property relief claims",
          "Share dealing records for investment disposals",
        ],
      },
      {
        question: "Can Business Asset Disposal Relief be lost during an enquiry?",
        answer:
          "Yes, if HMRC finds the shareholding or trading conditions weren't met throughout the required period, the relief can be restricted or denied, significantly increasing the tax due.",
      },
      {
        question: "Does moving house partway through ownership affect Private Residence Relief?",
        answer:
          "Yes, the relief calculation generally apportions the gain based on the periods of actual or deemed occupation, so a partial period of non-occupation can reduce the relief available.",
      },
      {
        question: "Can I appeal a Capital Gains Tax assessment?",
        answer:
          "Yes, the same statutory review and tribunal appeal routes available for other HMRC decisions apply to a disputed Capital Gains Tax assessment.",
      },
    ],
  },
  {
    slug: "corporation-tax-enquiry",
    name: "Corporation Tax Enquiry",
    shortName: "Corporation Tax",
    hmrcSection: "Schedule 18 Finance Act 1998 compliance check",
    summary:
      "Support for companies facing an HMRC enquiry into a Corporation Tax return, deductions claimed, or group tax position.",
    subcategories: [
      "Capital allowances claim",
      "Group relief or intercompany transactions",
      "R&D tax relief claim",
      "Director's loan account query",
    ],
    narrative: [
      "A Corporation Tax enquiry, opened under Schedule 18 of the Finance Act 1998, examines whether a company's Corporation Tax return correctly reflects its profits, deductions and reliefs claimed. HMRC's enquiry window generally runs for twelve months from the date a return is filed on time, though this can extend where a return is filed late or amended, and the opening notice sets out the initial scope, which can range from a single specific deduction to a full review of the company's tax computation. Common areas of focus include the treatment of specific expenses, capital allowances claimed on plant and machinery, group relief surrendered or claimed between companies, and the treatment of intercompany transactions and loan relationships.",
      "Where a company is part of a group, HMRC often examines transfer pricing between connected companies, checking that transactions are priced on an arm's-length basis consistent with what unconnected parties would have agreed, and that any group relief claimed correctly reflects the ownership and loss-surrender conditions between the companies involved. Loan relationships between group companies, including the interest rates charged and whether debt is genuinely on commercial terms, are another area that regularly attracts detailed questions, particularly where the lending company is based in a lower-tax jurisdiction.",
      "Capital allowances claims are frequently tested in detail, since correctly categorising expenditure between the main pool, special rate pool, and potentially qualifying for the Annual Investment Allowance or full expensing depends on the specific nature of the asset and how it's used in the business. HMRC may ask for a detailed breakdown of capital expenditure with supporting invoices, particularly where a claim includes an element of building fit-out or integral features, since these categories have historically been a common area of both genuine complexity and inadvertent over-claiming.",
      "A Corporation Tax enquiry concludes with a closure notice, either confirming the return was correct or setting out HMRC's amendment, and the same appeal routes — statutory review and the First-tier Tribunal — apply as for other HMRC decisions. Where multiple accounting periods or group companies are involved, enquiries can run considerably longer than a straightforward single-company case, and keeping a clear, well-organised set of supporting workings from the outset generally shortens the overall process considerably.",
    ],
    keyPoints: [
      "The standard enquiry window is 12 months from an on-time filing, though late or amended returns extend this",
      "Capital allowances categorisation is one of the most frequently tested areas of a Corporation Tax return",
      "Group companies face additional scrutiny on transfer pricing and intercompany loan relationships",
      "Group relief claims are checked against ownership and loss-surrender conditions between companies",
      "A closure notice ends the enquiry and starts the clock on any appeal deadline",
      "Well-organised supporting workings from the outset generally shorten the overall enquiry",
    ],
    preparationSteps: [
      "Identify exactly which part of the return the opening notice covers",
      "Reconcile the tax computation against the statutory accounts for the period",
      "Gather capital allowances workings with supporting invoices for the assets claimed",
      "For group companies, prepare transfer pricing and intercompany loan documentation",
      "Check group relief claims against the ownership and surrender conditions applying at the time",
      "Organise supporting workings clearly before responding, rather than providing them piecemeal",
    ],
    commonMistakes: [
      "Responding only to the specific figure mentioned in the opening notice, prompting broader follow-up questions",
      "Categorising capital expenditure into the wrong pool without a clear, evidenced basis",
      "Assuming intercompany loans are on commercial terms without benchmarking the interest rate",
      "Claiming group relief without checking the ownership and surrender conditions were genuinely met",
      "Not reconciling the tax computation to the statutory accounts before HMRC raises the discrepancy",
      "Letting an enquiry into one accounting period overlook a similar issue in an adjacent period",
    ],
    whatHappensNext: [
      "HMRC reviews the tax computation, accounts and workings provided in response to the opening notice",
      "Further questions may follow on specific deductions, allowances or group transactions",
      "For group companies, transfer pricing and loan relationship terms may be tested in detail",
      "HMRC sets out any proposed adjustment, explaining its reasoning",
      "You can agree, negotiate or formally dispute any proposed change",
      "The enquiry closes with a closure notice, confirming the return or setting out the amendment",
    ],
    typicalDeadline:
      "HMRC can normally only open an enquiry within 12 months of an on-time filing; once opened, the notice itself sets your specific response deadline.",
    checklist: [
      "The Corporation Tax computation and statutory accounts for the period",
      "Capital allowances workings with supporting invoices for the assets claimed",
      "Group relief claims with evidence of ownership and surrender conditions",
      "Transfer pricing documentation for intercompany transactions, if applicable",
      "Loan relationship agreements and interest rate benchmarking for group loans",
      "A note of exactly which part of the return the enquiry covers",
    ],
    icon: "building-2",
    faqs: [
      {
        question: "How long does HMRC have to open a Corporation Tax enquiry?",
        answer:
          "Generally 12 months from the date a return is filed on time, though this window extends where a return is filed late or subsequently amended.",
      },
      {
        question: "What areas does HMRC commonly focus on in a Corporation Tax enquiry?",
        answer:
          "Frequent areas include capital allowances categorisation, group relief claims, intercompany loan relationships, and transfer pricing between connected companies.",
      },
      {
        question: "What is transfer pricing and why does it matter?",
        answer:
          "It's the pricing of transactions between connected companies, which HMRC expects to reflect what unconnected parties would have agreed on an arm's-length basis, particularly relevant for groups with companies in different tax jurisdictions.",
      },
      {
        question: "Can group relief be challenged during an enquiry?",
        answer:
          "Yes, if HMRC finds the ownership or loss-surrender conditions between the companies weren't genuinely met, the relief claimed can be restricted or denied.",
      },
      {
        question: "How are capital allowances tested in an enquiry?",
        answer:
          "HMRC typically asks for a detailed breakdown of capital expenditure with supporting invoices, checking that assets have been categorised correctly between the main pool, special rate pool, and any allowances claimed.",
      },
      {
        question: "How should I prepare for a Corporation Tax enquiry?",
        answer: "Preparation is largely about reconciling your own figures before HMRC's questions arrive.",
        points: [
          "Reconcile the tax computation against the statutory accounts",
          "Gather supporting invoices for any capital allowances claimed",
          "Prepare transfer pricing or loan documentation if group companies are involved",
          "Confirm group relief conditions were met for the period",
        ],
      },
      {
        question: "What records will HMRC ask for?",
        answer: "Most Corporation Tax enquiries draw on a similar core set of records.",
        points: [
          "The tax computation and statutory accounts",
          "Capital allowances workings and supporting invoices",
          "Group relief claims and ownership evidence",
          "Loan agreements and transfer pricing documentation, where relevant",
        ],
      },
      {
        question: "Can a Corporation Tax enquiry cover more than one accounting period?",
        answer:
          "An enquiry is generally opened into a specific period, but if it uncovers a similar issue, HMRC can also examine adjacent periods or use discovery provisions for earlier years in some circumstances.",
      },
      {
        question: "What happens if HMRC and the company can't agree on an adjustment?",
        answer:
          "The enquiry closes with a closure notice setting out HMRC's position, which can then be challenged through a statutory review or the First-tier Tribunal.",
      },
      {
        question: "Does a Corporation Tax enquiry affect a company's ability to file future returns?",
        answer:
          "No, an ongoing enquiry into one period doesn't prevent normal filing obligations for other periods, which should continue as usual.",
      },
    ],
  },
];
