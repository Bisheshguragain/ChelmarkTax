import type { Industry } from "@/lib/types";

export const industries: Industry[] = [
  {
    slug: "landlords",
    name: "Landlords",
    summary:
      "HMRC enquiry guidance for landlords covering rental income, allowable expenses, mortgage interest relief and property disposals.",
    narrative: [
      "Landlords are one of the groups HMRC has increasingly focused on in recent years, partly because of data-sharing agreements with letting agents, mortgage lenders and property portals that make undeclared rental income easier to spot. A typical enquiry examines whether all rental income has been declared, whether claimed expenses were genuinely incurred wholly for the property business, and whether the restriction on mortgage interest relief for residential lettings has been applied correctly. Landlords with several properties, or a mix of furnished holiday lets and standard lettings, often face more detailed questions because the tax treatment differs between categories.",
      "Capital Gains Tax on the sale of a rental property is another common trigger, particularly where the 60-day reporting and payment deadline was missed or the private residence relief calculation is disputed. Landlords who have not previously declared rental income can use HMRC's Let Property Campaign, which offers a structured route to disclose past income on more favourable terms than waiting to be found through an enquiry.",
      "Where an enquiry does open, HMRC typically works property by property, checking rental income against tenancy agreements, bank deposits and any letting agent statements, before moving on to test whether claimed expenses were genuinely revenue in nature rather than capital improvements that should instead be added to the property's cost base for Capital Gains Tax purposes. Distinguishing repairs from improvements is a frequent area of dispute, since replacing a boiler like-for-like is treated differently from adding an extension or converting a loft.",
      "Landlords holding property through a limited company face a different set of considerations again, since Corporation Tax rules, director's loan account treatment, and the interaction between company and personal tax positions add complexity that doesn't arise for individually-owned property. Where a portfolio has been incorporated part-way through ownership, HMRC may also look closely at whether Capital Gains Tax reliefs claimed on the transfer into the company were properly available at the time.",
    ],
    relevantTaxAreas: [
      "Rental income and expense records",
      "Mortgage interest relief restriction",
      "Capital Gains Tax on property disposals",
      "Furnished holiday let qualifying conditions",
      "Let Property Campaign disclosures",
      "Corporation Tax treatment for company-owned property portfolios",
      "Capital Gains Tax reliefs on incorporating a property business",
    ],
    keyPoints: [
      "Data from letting agents and property portals makes undeclared rental income increasingly easy for HMRC to identify",
      "Mortgage interest relief for residential lettings is now given as a tax credit, not a full expense deduction",
      "Selling a rental property triggers a 60-day CGT reporting and payment deadline",
      "The Let Property Campaign offers better terms for landlords who disclose voluntarily",
      "Company-owned property portfolios involve different tax rules to personally-owned lettings",
      "Incorporation relief claimed on transferring property into a company needs to have genuinely applied at the time",
    ],
    preparationSteps: [
      "Pull together income and expense records property by property, not combined across a portfolio",
      "Separate repairs and maintenance from capital improvements clearly",
      "Recalculate the mortgage interest relief restriction correctly for the years in question",
      "Gather completion statements for any properties bought or sold in the period",
      "Check whether any furnished holiday let claimed qualifying conditions are properly evidenced",
      "If property is held through a company, check the Corporation Tax and director's loan account position",
      "Review any incorporation relief claimed on transferring property into a company structure",
    ],
    commonMistakes: [
      "Treating capital improvements as revenue repairs to claim an immediate deduction",
      "Combining income and expenses across a whole portfolio instead of keeping it property by property",
      "Missing the 60-day deadline for reporting and paying Capital Gains Tax after a property sale",
      "Claiming full mortgage interest as an expense rather than applying the correct relief restriction",
      "Assuming a furnished holiday let automatically qualifies without checking the occupancy conditions",
      "Treating company-owned property the same as personal property for tax purposes",
      "Assuming incorporation relief automatically applied without checking the specific conditions at the time",
    ],
    whatHappensNext: [
      "HMRC reviews income and expenses property by property against supporting records",
      "Any repairs versus improvements distinction is checked, along with the relief restriction calculation",
      "You may be asked to clarify specific transactions or provide further evidence",
      "HMRC proposes any adjustment, which you can accept, negotiate, or dispute",
      "The Let Property Campaign remains available for voluntary disclosure ahead of a formal enquiry",
      "Where property is company-owned, HMRC reviews the Corporation Tax and director's loan position alongside personal tax",
      "Any incorporation relief claimed is checked against the conditions that applied at the time of transfer",
    ],
    checklist: [
      "Rental income records for each property, including any managing agent statements",
      "Expense receipts and evidence they relate wholly to the rental business",
      "Mortgage interest and finance cost records for the relevant tax years",
      "Completion statements for any properties bought or sold",
      "Records supporting any furnished holiday let qualifying conditions claimed",
      "Company accounts and director's loan account records, if property is held through a company",
      "Documentation supporting any incorporation relief claimed on transferring property into a company",
    ],
    faqs: [
      {
        question: "Do I need to declare rental income if I make a loss?",
        answer:
          "Yes — rental income and expenses generally need to be reported even if the result is a loss, since losses can often be carried forward against future rental profits, and HMRC still expects the position to be declared.",
      },
      {
        question: "What is the Let Property Campaign?",
        answer:
          "It's an HMRC disclosure facility for landlords who haven't declared rental income in the past. Using it proactively is generally treated more favourably than being identified through an enquiry.",
      },
      {
        question: "How does HMRC find out about undeclared rental income?",
        answer:
          "Common sources include data from letting agents, mortgage lenders, the Land Registry, and increasingly property listing platforms, all of which HMRC can cross-reference against tax returns.",
      },
      {
        question: "What's the difference between a repair and an improvement for tax purposes?",
        answer:
          "A repair restores something to its previous condition, like replacing a broken boiler with an equivalent one, and is usually an allowable revenue expense; an improvement, like adding an extension, is capital and instead reduces the gain when the property is eventually sold.",
      },
      {
        question: "What happens if I miss the 60-day CGT reporting deadline?",
        answer:
          "A penalty can apply for late reporting, in addition to any interest on late payment, so it's worth reporting even if you're still finalising the exact figures.",
      },
      {
        question: "Do furnished holiday lets get better tax treatment than standard lettings?",
        answer:
          "They have historically been treated differently in some respects, but only if strict occupancy and letting conditions are met and properly evidenced, so it's worth checking the qualifying conditions carefully each year.",
      },
      {
        question: "Is it better to hold rental property personally or through a company?",
        answer:
          "It depends on individual circumstances including tax rates, mortgage interest treatment and long-term plans, and is worth discussing with a specialist before restructuring an existing portfolio.",
      },
      {
        question: "What is a director's loan account and why does it matter for landlords?",
        answer:
          "It tracks money owed between a director and their company, and can create its own tax charge if it's overdrawn at the company's year end, which is relevant for landlords operating through a company.",
      },
      {
        question: "Can I transfer a property into a company without triggering a tax charge?",
        answer:
          "Generally a transfer is treated as a disposal for Capital Gains Tax purposes, though certain reliefs may apply in specific circumstances, so this needs careful advance planning.",
      },
      {
        question: "Does HMRC treat furnished holiday lets differently from long-term rentals in an enquiry?",
        answer:
          "Yes, since the qualifying conditions and some of the available tax treatments differ, an enquiry into a furnished holiday let will typically test those specific conditions rather than assuming standard letting rules apply.",
      },
      {
        question: "Do I need to register for Making Tax Digital as a landlord?",
        answer:
          "Landlords with property income above the relevant threshold are being brought into Making Tax Digital for Income Tax, so it's worth checking the current thresholds and timetable that applies to your situation.",
      },
      {
        question: "Can I claim for a new kitchen or bathroom in a rental property?",
        answer:
          "It depends on whether the work is a like-for-like replacement, generally an allowable repair, or a genuine improvement beyond the original standard, which would usually be treated as capital instead.",
      },
    ],
    icon: "home",
  },
  {
    slug: "construction-cis",
    name: "Construction and CIS",
    summary:
      "Guidance for construction businesses and subcontractors facing HMRC enquiries into CIS deductions, employment status and VAT.",
    narrative: [
      "Construction businesses sit at the intersection of several HMRC compliance regimes at once — CIS deductions on subcontractor payments, employment status questions about who is genuinely self-employed, VAT treatment of different types of building work, and the VAT domestic reverse charge for construction services. An enquiry into a construction business often starts with CIS verification and monthly return records, checking that subcontractors were verified correctly and that deductions at 0%, 20% or 30% were applied based on their actual status.",
      "Employment status is a particularly common flashpoint, since HMRC will look past written contracts to how work is actually controlled, supervised and paid for in practice. Where a business also does mixed commercial and residential work, VAT liability and the reverse charge rules add another layer of complexity that HMRC may probe alongside CIS. Getting subcontractor status wrong across a large workforce can create a significant cumulative liability, which is why construction sector enquiries are often broader in scope than they first appear.",
      "Where HMRC identifies inconsistencies in CIS verification or deduction rates, the review often extends into checking whether the deduction rate applied for each subcontractor matched their actual registration status at the time of payment, since rates can change if a subcontractor's compliance history changes. Retentions held back from subcontractor payments until practical completion also need consistent treatment, since the timing of when retentions are recognised for tax purposes can itself become a point of dispute.",
      "International and cross-border construction work adds a further layer where subcontractors or main contractors operate across UK borders, since CIS generally applies to construction operations carried out in the UK regardless of where a business is based, and getting the territorial scope wrong can leave deductions missed on payments that should have been within CIS. Businesses working on public sector contracts should also be aware that additional compliance checks are sometimes built into procurement processes themselves, independent of any HMRC enquiry.",
    ],
    relevantTaxAreas: [
      "CIS verification and deduction rates",
      "Employment status of subcontractors",
      "VAT domestic reverse charge for construction services",
      "VAT liability on mixed commercial/residential projects",
      "Corporation Tax treatment of retentions and work in progress",
      "Territorial scope of CIS for cross-border construction work",
      "Public sector procurement compliance requirements",
    ],
    keyPoints: [
      "CIS, employment status and VAT are often examined together in a single construction sector enquiry",
      "HMRC looks at how work is actually controlled and supervised, not just what contracts say",
      "The VAT domestic reverse charge changes who accounts for VAT on many construction services",
      "Getting subcontractor status wrong across a workforce can create a large cumulative liability",
      "CIS generally applies to UK construction operations regardless of where a business is based",
      "Public sector contracts can carry their own compliance checks separate from HMRC enquiries",
    ],
    preparationSteps: [
      "Confirm each subcontractor's verification status and deduction rate at the time of payment",
      "Reconcile CIS300 monthly returns against actual payments made",
      "Review employment status factors for each subcontractor relationship",
      "Check VAT reverse charge treatment has been applied to the correct supplies",
      "Gather retention records and confirm consistent tax treatment",
      "Confirm whether CIS applies to any cross-border subcontractor arrangements",
      "Check any public sector procurement compliance requirements alongside standard CIS obligations",
    ],
    commonMistakes: [
      "Applying the wrong CIS deduction rate because verification wasn't re-checked when a subcontractor's status changed",
      "Treating a subcontractor as self-employed based only on the written contract, ignoring how work is actually carried out",
      "Applying standard VAT instead of the reverse charge to qualifying construction services, or vice versa",
      "Inconsistent treatment of retentions between different contracts",
      "Not reconciling CIS300 returns regularly against actual subcontractor payments",
      "Assuming CIS doesn't apply to overseas-based subcontractors working on UK construction operations",
      "Overlooking procurement-specific compliance checks that apply to public sector contracts",
    ],
    whatHappensNext: [
      "HMRC reviews CIS verification records and deduction rates against monthly returns",
      "Employment status is assessed for a sample of subcontractor relationships",
      "VAT reverse charge treatment is checked against the type of supply made",
      "Any errors identified are quantified across the relevant period",
      "A settlement is agreed covering additional CIS, VAT, or PAYE liabilities plus interest",
      "Cross-border CIS arrangements are checked against the territorial scope rules that actually apply",
      "Public sector contract compliance may be reviewed alongside, but separately from, any HMRC enquiry",
    ],
    checklist: [
      "CIS subcontractor verification records and monthly CIS300 returns",
      "Contracts and working arrangements for all subcontractors engaged",
      "VAT records showing treatment of reverse charge and standard-rated work",
      "Evidence of how subcontractor work is supervised and controlled in practice",
      "Retention and work-in-progress records for ongoing contracts",
      "Records confirming the territorial scope of any cross-border subcontractor arrangements",
      "Procurement compliance documentation for any public sector contracts held",
    ],
    faqs: [
      {
        question: "How does the VAT domestic reverse charge affect construction businesses?",
        answer:
          "For most business-to-business construction services, the customer accounts for VAT instead of the supplier, rather than the supplier charging VAT on the invoice. Getting this wrong is a common area HMRC checks.",
      },
      {
        question: "What makes a subcontractor genuinely self-employed under CIS?",
        answer:
          "HMRC looks at factors like whether the person controls how the work is done, whether they can send a substitute, and whether they bear financial risk, rather than relying solely on what a contract states.",
      },
      {
        question: "Can CIS deductions be reclaimed?",
        answer:
          "Subcontractors who are limited companies can offset CIS deductions against their PAYE/NI liabilities, and sole traders reconcile deductions through their Self Assessment return.",
      },
      {
        question: "What happens if I apply the wrong CIS deduction rate?",
        answer:
          "HMRC can assess the shortfall between the rate that should have applied and what was actually deducted, so it's worth re-verifying subcontractors periodically rather than relying on a one-off check.",
      },
      {
        question: "How are retentions treated for tax purposes?",
        answer:
          "This depends on the specific contract terms and accounting policy applied, but consistency matters, since HMRC will check that retentions are recognised in a consistent and defensible way across contracts.",
      },
      {
        question: "Can a genuine mistake with CIS still result in a penalty?",
        answer:
          "It can, though penalties are generally more significant where errors are careless or deliberate rather than a one-off genuine mistake, particularly if corrected proactively.",
      },
      {
        question: "Does CIS apply to subcontractors based outside the UK?",
        answer:
          "It can, since CIS generally focuses on where the construction operations take place rather than where the business is based, so UK-based projects can still fall within CIS regardless of a subcontractor's location.",
      },
      {
        question: "What counts as construction operations under CIS?",
        answer:
          "A broad range of activities including construction, alteration, repair and demolition of buildings and structures, though certain professional services like architecture are generally excluded.",
      },
      {
        question: "Do public sector construction contracts have extra compliance requirements?",
        answer:
          "Often yes, with procurement processes sometimes including their own tax compliance checks independent of anything HMRC does directly.",
      },
      {
        question: "Can a construction business be both a contractor and subcontractor under CIS?",
        answer:
          "Yes, many businesses operate in both roles simultaneously, verifying subcontractors they engage while also being verified by contractors who engage them.",
      },
      {
        question: "What happens if a subcontractor doesn't provide their UTR for verification?",
        answer:
          "Without proper verification, the higher 30% deduction rate generally applies until the subcontractor's status can be confirmed with HMRC.",
      },
      {
        question: "Do materials costs need CIS deducted from them?",
        answer:
          "Generally no — CIS deductions apply to the labour element of a payment, so genuine, evidenced materials costs can usually be excluded from the calculation.",
      },
    ],
    icon: "hard-hat",
  },
  {
    slug: "hospitality",
    name: "Restaurants and hospitality",
    summary:
      "HMRC enquiry preparation for restaurants, cafés, pubs and hospitality businesses covering cash takings, tips, delivery platforms and VAT.",
    narrative: [
      "Hospitality businesses handle a mix of cash, card and third-party delivery platform payments, which makes reconciling total takings to declared income a common enquiry focus. HMRC often compares till (Z-read) reports, card processor statements, and delivery platform payment summaries against the figures on VAT returns and accounts to check nothing has been left out. Cash-handling businesses in particular can attract closer scrutiny simply because cash is harder to trace than electronic payments.",
      "Tips and service charges add another layer of complexity, since the tax and National Insurance treatment differs depending on whether tips are paid directly by customers, pooled through a tronc scheme, or processed through the till. Stock and waste reconciliation is also a recurring theme, since unexplained differences between purchases and sales can prompt questions about undeclared cash sales. Businesses using multiple delivery platforms alongside dine-in and takeaway sales should be able to show how each income stream is recorded and reconciled separately.",
      "Where discrepancies are found between purchases, stock and declared sales, HMRC will often ask for a detailed explanation covering wastage, staff meals, complimentary items and portion control, since these legitimately reduce the correlation between raw ingredient purchases and recorded sales. Businesses that can produce clear, contemporaneous records explaining these differences are generally able to resolve queries more quickly than those relying on estimates after the fact.",
      "Seasonal and event-based hospitality businesses, such as those operating primarily around festivals, sporting events or seasonal tourism, face particular record-keeping challenges given the concentrated and sometimes cash-heavy nature of their trading periods. Keeping detailed daily records during peak trading, rather than reconstructing an estimate afterwards, makes a significant difference if HMRC later asks questions about a specific busy period.",
    ],
    relevantTaxAreas: [
      "Cash takings reconciliation",
      "Tips, service charges and tronc arrangements",
      "Delivery platform commission and net payment treatment",
      "VAT on food, drink and delivery charges",
      "Stock and waste reconciliation",
      "Seasonal and event-based trading record-keeping",
      "Casual and temporary staff payroll compliance",
    ],
    keyPoints: [
      "HMRC often reconciles till reports, card statements and delivery platform payments against declared income",
      "The tax treatment of tips depends on how they're paid and whether a tronc scheme is used",
      "Unexplained gaps between purchases, stock and sales can prompt questions about cash takings",
      "Each income stream — dine-in, takeaway, delivery — should be separately reconcilable",
      "Seasonal or event-based hospitality businesses need especially robust daily records during peak trading",
      "Casual and temporary staff payroll needs the same compliance rigour as permanent staff",
    ],
    preparationSteps: [
      "Reconcile till reports and card statements against bank deposits for the period",
      "Gather delivery platform statements showing gross sales, commission, and net payouts separately",
      "Document tronc or tips arrangements and how they're processed",
      "Prepare a stock and waste reconciliation covering the period under review",
      "Separate VAT treatment clearly across dine-in, takeaway and delivery channels",
      "Keep detailed daily records during any concentrated seasonal or event-based trading periods",
      "Ensure payroll compliance is maintained consistently for casual and temporary staff",
    ],
    commonMistakes: [
      "Recording delivery platform payments net of commission instead of gross, understating turnover",
      "Not keeping records of staff meals, wastage or complimentary items to explain stock variances",
      "Mixing tips paid directly by customers with tronc-scheme tips without distinguishing the tax treatment",
      "Applying inconsistent VAT treatment between dine-in, takeaway and delivery sales",
      "Relying on estimates for cash takings rather than contemporaneous till records",
      "Reconstructing estimated takings for a busy seasonal period after the fact instead of recording it daily",
      "Treating casual or temporary staff payroll less rigorously than permanent staff records",
    ],
    whatHappensNext: [
      "HMRC compares till reports, bank deposits, and platform statements against declared income",
      "You may be asked to explain any gaps between purchases, stock and recorded sales",
      "Tips and tronc arrangements are reviewed for correct tax and NI treatment",
      "HMRC proposes any adjustment based on what the reconciliation shows",
      "The check closes with a written outcome, or continues if further explanation is needed",
      "Seasonal or event-based trading periods may be reviewed in particular detail given their concentrated cash flow",
      "Payroll records for casual and temporary staff are checked to the same standard as permanent staff",
    ],
    checklist: [
      "Till (Z-read) reports and card processor statements for the periods under review",
      "Delivery platform statements showing gross sales, commission and net payments",
      "Tronc or tips scheme records, if applicable",
      "Purchase invoices and stock records for reconciliation",
      "VAT records showing the treatment of different sales channels",
      "Daily records from any concentrated seasonal or event-based trading periods",
      "Payroll records for casual and temporary staff engaged during busy periods",
    ],
    faqs: [
      {
        question: "How does HMRC check cash takings in a hospitality business?",
        answer:
          "Typically by comparing till reports, bank deposits, purchase records and stock levels to see whether the pattern of cash sales is consistent with what's been declared.",
      },
      {
        question: "Are tips taxable?",
        answer:
          "Yes, though how they're taxed depends on the arrangement — tips paid through a properly run tronc scheme are often treated differently to those distributed directly by the employer.",
      },
      {
        question: "Do delivery platform sales need separate VAT treatment?",
        answer:
          "The VAT treatment can depend on the platform's own arrangements and whether it's treated as acting as agent or principal, so it's worth checking your specific platform agreements rather than assuming a single approach applies to all.",
      },
      {
        question: "Should delivery platform sales be recorded gross or net of commission?",
        answer:
          "Generally gross, with the commission recorded separately as a business expense, since recording only the net amount can understate turnover for VAT and profit purposes.",
      },
      {
        question: "What if my stock records don't perfectly match my sales?",
        answer:
          "Some variance is normal and expected due to wastage, staff meals and portion sizes, but keeping a running record of these factors makes it much easier to explain any variance HMRC queries.",
      },
      {
        question: "How is a tronc scheme treated differently from direct tips?",
        answer:
          "A properly run, independent tronc arrangement can have different tax and National Insurance treatment to tips paid and distributed directly by the employer, so how the scheme is actually operated matters.",
      },
      {
        question: "How should a seasonal hospitality business keep records during peak periods?",
        answer:
          "Daily till reconciliation and banking during the busiest periods, rather than a single summary afterwards, makes it much easier to answer detailed questions later.",
      },
      {
        question: "Are casual staff treated differently for payroll purposes?",
        answer:
          "The same PAYE and National Minimum Wage rules generally apply regardless of whether staff are casual, seasonal or permanent, so records need the same level of rigour.",
      },
      {
        question: "Does event-based trading attract more HMRC attention?",
        answer:
          "Concentrated, cash-heavy trading periods can sometimes prompt closer questions simply because of the volume and pace of transactions, making good contemporaneous records particularly valuable.",
      },
      {
        question: "What if my hospitality business only trades for part of the year?",
        answer:
          "You still need full, accurate records for your trading period, and should ensure your Self Assessment or Corporation Tax return reflects the specific dates you actually traded.",
      },
      {
        question: "Does service charge count the same as a tip for tax purposes?",
        answer:
          "It can differ depending on whether the service charge is discretionary or compulsory and how it's distributed, so the specific arrangement needs checking against current guidance.",
      },
      {
        question: "Can HMRC use a business's own historical figures to challenge a quiet period?",
        answer:
          "Yes, comparing a quiet trading period against your own historical patterns is a common way HMRC tests whether a dip in declared takings looks genuine or is explained by external factors like weather or local events.",
      },
    ],
    icon: "utensils",
  },
  {
    slug: "online-sellers",
    name: "Online sellers",
    summary:
      "HMRC enquiry and disclosure guidance for eBay, Etsy, Amazon, Vinted and other online sellers covering trading status, platform reporting and VAT.",
    narrative: [
      "Rules requiring online marketplaces to report seller income data to HMRC have significantly increased HMRC's visibility of income earned through platforms like eBay, Etsy, Amazon and Vinted. A common enquiry starting point is simply establishing whether the activity amounts to trading at all, since selling personal possessions occasionally is generally not taxable, while regular buying and reselling for profit usually is. The trading allowance provides a modest tax-free threshold, but income above it needs to be declared.",
      "Where selling has grown from a hobby into a genuine business, questions often arise about exactly when trading began, how stock and costs have been recorded, and whether VAT registration should have been considered once turnover crossed the threshold. Sellers using multiple platforms, or selling both personally owned items and purchased-for-resale stock, should be able to separate the two clearly, since only the trading activity is generally taxable.",
      "Once trading is established, HMRC's attention typically shifts to when the activity actually began, since backdating the start of trading incorrectly can affect which tax years are in scope and whether registration for VAT or Self Assessment was required earlier than assumed. Keeping a simple log of when regular buying-to-resell activity started, alongside evidence like initial stock purchases or a first business-related bank transaction, can make this significantly easier to demonstrate.",
      "Sellers who source stock internationally, whether through dropshipping, importing, or buying from overseas wholesalers, need to consider import VAT and customs duties alongside their income tax position, since these costs affect genuine profit margins and may themselves be subject to separate compliance checks. Keeping import documentation alongside sales records helps present a complete and consistent picture if HMRC reviews the business.",
    ],
    relevantTaxAreas: [
      "Trading allowance and hobby-versus-trading status",
      "Platform data-sharing and income reporting",
      "VAT registration threshold monitoring",
      "Stock and cost of goods sold records",
      "Multi-platform income reconciliation",
      "Import VAT and customs duties on internationally sourced stock",
      "Dropshipping and overseas wholesale cost documentation",
    ],
    keyPoints: [
      "Online marketplaces now report seller income data directly to HMRC",
      "Occasional selling of personal items is usually different from taxable trading",
      "The trading allowance gives a modest tax-free threshold before income needs declaring",
      "VAT registration becomes relevant once taxable turnover crosses the registration threshold",
      "Internationally sourced stock brings import VAT and customs duty considerations alongside income tax",
      "Import documentation should be kept alongside sales records for a complete picture",
    ],
    preparationSteps: [
      "Gather sales and fee records from every platform used, not just the main one",
      "Separate personal item sales from stock bought specifically for resale",
      "Establish and evidence the date trading activity actually began",
      "Track turnover against the VAT registration threshold on a rolling basis",
      "Keep cost and stock records to support gross profit calculations",
      "Gather import documentation for any internationally sourced stock, including VAT and duty paid",
      "Reconcile import costs against sales records to confirm genuine profit margins",
    ],
    commonMistakes: [
      "Assuming income under the trading allowance doesn't need any record-keeping at all",
      "Mixing personal item sales with resale stock without any separation",
      "Not tracking turnover against the VAT threshold until after it's already been crossed",
      "Underestimating how far back trading activity actually started",
      "Relying solely on platform-reported figures without reconciling fees and refunds",
      "Not keeping import VAT and duty documentation alongside sales and stock records",
      "Understating costs by ignoring import charges when calculating genuine profit margins",
    ],
    whatHappensNext: [
      "HMRC reviews platform data against your declared income",
      "You may be asked to clarify whether activity constitutes trading or personal sales",
      "The correct start date of trading and VAT registration position is established",
      "HMRC calculates any additional tax due where trading income was underdeclared",
      "The check concludes with an agreed position or a formal decision you can appeal",
      "Import documentation is reviewed alongside sales records where internationally sourced stock is involved",
      "Genuine profit margins are recalculated to reflect import VAT and duty costs where relevant",
    ],
    checklist: [
      "Sales records from each platform used, including fees and net payouts",
      "Purchase or cost records for stock bought for resale",
      "Evidence distinguishing personal item sales from trading stock, if relevant",
      "A record of when trading activity is considered to have started",
      "VAT registration status and turnover monitoring records",
      "Import declarations and VAT/duty payment records for internationally sourced stock",
      "Supplier invoices from overseas wholesalers or dropshipping arrangements",
    ],
    faqs: [
      {
        question: "Do I need to pay tax on selling my old belongings online?",
        answer:
          "Generally no, if you're simply selling personal possessions you no longer want, rather than buying or making items specifically to resell for profit. Regular reselling activity is more likely to count as trading.",
      },
      {
        question: "What is the trading allowance?",
        answer:
          "It's a tax-free allowance for small amounts of trading income, letting you earn up to a set threshold from occasional trading without needing to register or declare it, though income above that threshold does need reporting.",
      },
      {
        question: "Will HMRC know about my online selling income?",
        answer:
          "Online marketplaces are now required to report seller transaction data to HMRC, which means undeclared trading income is considerably easier for HMRC to identify than in the past.",
      },
      {
        question: "Do I need to register as self-employed to sell online?",
        answer:
          "If your activity amounts to regular trading rather than occasional personal sales, yes — registering promptly once trading begins avoids penalties for late notification.",
      },
      {
        question: "What if I sell across several different platforms?",
        answer:
          "All platforms need to be included when calculating total trading income and monitoring the VAT threshold, since HMRC looks at your overall trading activity, not each platform in isolation.",
      },
      {
        question: "Can I deduct platform fees from my income?",
        answer:
          "Yes, platform fees and other costs genuinely incurred in making the sale are generally allowable business expenses that reduce your taxable profit.",
      },
      {
        question: "Do I need to pay import VAT on stock I buy from overseas?",
        answer:
          "Generally yes, and this needs factoring into your cost calculations and kept as part of your records, since it affects your true profit margin on those items.",
      },
      {
        question: "How does dropshipping affect my tax position?",
        answer:
          "You're generally still trading and need to declare the income, though your records need to clearly show the relationship between what customers paid and what you paid your supplier.",
      },
      {
        question: "Can import costs be deducted as a business expense?",
        answer:
          "Yes, genuine import VAT, duty and shipping costs incurred in buying stock for resale are generally allowable business expenses that reduce your taxable profit.",
      },
      {
        question: "What records should I keep for imported stock?",
        answer:
          "Import declarations, VAT and duty payment evidence, and supplier invoices should all be retained alongside your regular sales records for a complete picture.",
      },
      {
        question: "Does it matter if I use a personal or business bank account for online sales?",
        answer:
          "Using a personal account doesn't exempt trading income from tax, but a dedicated business account makes reconciling income and expenses considerably more straightforward if HMRC ever asks questions.",
      },
      {
        question: "What if a platform's reported figures don't match my own records?",
        answer:
          "It's worth reconciling the two promptly, since discrepancies between platform data and declared income are precisely the kind of gap HMRC's checks are designed to identify.",
      },
    ],
    icon: "shopping-bag",
  },
  {
    slug: "drivers",
    name: "Taxi, private-hire and delivery drivers",
    summary:
      "HMRC enquiry guidance for taxi, private-hire and delivery drivers covering platform income, mileage claims and vehicle expenses.",
    narrative: [
      "Drivers working through platforms such as Uber, Bolt or delivery apps generate income data that HMRC can access directly from the platform, which makes reconciling declared income to actual platform earnings a routine first step in any enquiry. Drivers who also take cash fares alongside platform bookings face additional scrutiny, since cash income is inherently harder to evidence and HMRC may ask for a detailed breakdown between the two.",
      "Vehicle costs are another significant area, whether claimed through simplified mileage rates or as actual running costs including fuel, insurance, maintenance and finance. Drivers need to apply one method consistently for a given vehicle and be able to show how business versus private mileage was distinguished, since a vehicle used for both driving work and personal journeys requires an apportionment that HMRC will often ask to see evidenced.",
      "Where a driver's declared income doesn't match platform data, HMRC will typically ask for an explanation covering periods of lower activity, cancelled or unpaid fares, and any cash work done outside the platform. Keeping a simple weekly or monthly reconciliation between platform statements and bank deposits, noted alongside any cash income, makes responding to this kind of query considerably more straightforward than reconstructing records after the fact.",
      "Drivers who also rent out or lease their vehicle to another driver when not using it themselves need to consider this as a separate income stream with its own record-keeping, distinct from their own driving earnings. Similarly, drivers operating through a limited company rather than as a sole trader face different considerations around salary, dividends and Corporation Tax that don't apply to self-employed drivers.",
    ],
    relevantTaxAreas: [
      "Platform income reconciliation",
      "Cash fare declarations",
      "Mileage claims versus actual vehicle running costs",
      "Business versus private mileage apportionment",
      "VAT registration for higher-earning drivers",
      "Vehicle rental or lease-out income as a separate income stream",
      "Limited company structure considerations for drivers",
    ],
    keyPoints: [
      "Platform operators can provide HMRC with driver earnings data directly",
      "Cash fares taken alongside platform bookings need clear, separate records",
      "You must apply either simplified mileage rates or actual costs consistently for a vehicle, not mix the two",
      "Private and business mileage need to be clearly apportioned and evidenced",
      "Renting out a vehicle to another driver creates a separate income stream needing its own records",
      "Drivers operating through a limited company face different salary, dividend and Corporation Tax considerations",
    ],
    preparationSteps: [
      "Gather full platform statements for all periods under review, not just summaries",
      "Keep a mileage log distinguishing business and private journeys throughout the year",
      "Decide on mileage rates or actual costs and apply the chosen method consistently",
      "Record any cash fares separately with dates and approximate amounts",
      "Track total turnover across all driving and delivery work against the VAT threshold",
      "Keep separate records for any income from renting or leasing out your vehicle",
      "If operating through a limited company, gather company accounts alongside personal records",
    ],
    commonMistakes: [
      "Switching between mileage rates and actual costs for the same vehicle across different years",
      "Not keeping a contemporaneous mileage log and estimating business use after the fact",
      "Failing to declare cash fares taken alongside platform bookings",
      "Overlooking combined turnover from multiple platforms when checking the VAT threshold",
      "Claiming the full cost of a vehicle used for both business and significant personal use",
      "Mixing vehicle rental income in with driving earnings instead of recording it separately",
      "Not distinguishing company and personal finances clearly when operating through a limited company",
    ],
    whatHappensNext: [
      "HMRC compares platform-reported earnings against declared income",
      "You may be asked to explain any gaps, including cash fares or quiet periods",
      "Mileage or vehicle cost claims are checked for consistency and evidence",
      "HMRC proposes any adjustment based on the reconciliation",
      "The check concludes with an agreed position or, if unresolved, a formal decision",
      "Vehicle rental income is reviewed as its own income stream, separate from driving earnings",
      "Company structure arrangements are checked for correct treatment of salary, dividends and expenses",
    ],
    checklist: [
      "Platform statements showing gross fares, commission and net payments",
      "A mileage log distinguishing business and private journeys",
      "Vehicle running cost records if claiming actual costs rather than mileage rates",
      "Records of any cash fares taken outside the platform",
      "Evidence of vehicle finance or lease agreements, where relevant",
      "Records of any income from renting or leasing out your vehicle",
      "Company accounts and payroll records, if operating through a limited company",
    ],
    faqs: [
      {
        question: "Should I claim mileage or actual vehicle costs?",
        answer:
          "Simplified mileage rates are often easier to administer, while actual costs can be more accurate for higher-cost vehicles, but you need to stick with one method consistently for that vehicle rather than switching between years.",
      },
      {
        question: "Does HMRC see my platform earnings automatically?",
        answer:
          "Platforms are increasingly required to share driver income data with HMRC, so declared income is checked against what the platform actually paid out.",
      },
      {
        question: "Do I need to register for VAT as a driver?",
        answer:
          "It depends on your total taxable turnover across all your self-employed activity — once that crosses the VAT registration threshold, registration is generally required regardless of how the income was earned.",
      },
      {
        question: "What if I drive for multiple platforms at once?",
        answer:
          "All platform income needs to be combined when calculating your total turnover and profit, and for checking whether the VAT registration threshold has been crossed.",
      },
      {
        question: "Can I claim for car cleaning and phone costs?",
        answer:
          "Costs genuinely incurred for the business, such as cleaning required to meet platform standards or the business-use proportion of a phone bill, are generally allowable.",
      },
      {
        question: "How long should I keep mileage records for?",
        answer:
          "It's generally sensible to keep mileage logs and related records for at least the statutory retention period applicable to your tax return, in case HMRC opens a compliance check into that year.",
      },
      {
        question: "Do I need to declare income from renting my car to another driver?",
        answer:
          "Yes, this is generally a separate source of taxable income and needs its own records distinct from your own driving earnings.",
      },
      {
        question: "Should I operate as a sole trader or through a limited company?",
        answer:
          "This depends on your income level, plans, and personal circumstances, and is worth discussing with a specialist since the tax treatment differs meaningfully between the two structures.",
      },
      {
        question: "Can I claim expenses for a vehicle I rent out as well as drive myself?",
        answer:
          "Costs need to be apportioned fairly between your own driving use and any rental use, similar to how personal and business use is split for a single vehicle.",
      },
      {
        question: "Does HMRC treat company drivers differently to sole traders?",
        answer:
          "The underlying platform income data is the same, but the tax treatment of how profit is extracted — salary, dividends, or drawings — differs significantly between a company and a sole trader.",
      },
      {
        question: "Do I need to keep fuel receipts if I claim mileage rates?",
        answer:
          "Not for calculating the mileage claim itself, but keeping some evidence of business mileage driven, such as trip logs from the platform app, supports the overall claim if it's ever queried.",
      },
      {
        question: "Can I claim for a dashcam or safety equipment?",
        answer:
          "Costs for equipment genuinely required for the business, such as a dashcam used for driving work, are generally allowable, though items with significant personal use may need apportioning.",
      },
    ],
    icon: "car",
  },
  {
    slug: "healthcare",
    name: "Doctors, dentists and healthcare professionals",
    summary:
      "HMRC enquiry guidance for doctors, dentists, locums and healthcare practices covering NHS and private income, status and expenses.",
    narrative: [
      "Healthcare professionals often have income from several sources at once — NHS salaried employment, NHS pension contributions, private practice fees, and locum work through agencies or direct engagements — which makes reconciling the full income picture a common starting point for an enquiry. Locums in particular face regular questions about employment status, since HMRC will look at whether a locum genuinely operates independently or is functioning as an employee of the practice or trust engaging them.",
      "Private practice income brings its own record-keeping challenges, especially where fees are received through a room-hire or billing arrangement with a hospital or clinic, and expenses such as professional indemnity insurance, subscriptions and use of home need to be apportioned correctly between NHS and private work. VAT is also relevant for some private healthcare services, since the medical exemption doesn't automatically cover every type of treatment or cosmetic procedure.",
      "Where a locum's status is challenged, HMRC will typically request evidence covering how the engagement was actually performed in practice — including who set the hours, whether the locum could decline shifts or send a substitute, and whether they carried their own indemnity insurance separately from the engaging practice. Written agreements are considered alongside, not instead of, this practical evidence, since HMRC's view is that the reality of the working relationship carries more weight than the label given to it.",
      "Healthcare professionals working through a limited company for private or locum income need to keep company accounts, payroll and dividend records distinct from any NHS employment income, and should be aware that IR35 rules can apply to company-based locum arrangements in some circumstances, adding a further layer to the employment status question. Research grants and academic income, where relevant, also need their own clear treatment separate from clinical earnings.",
    ],
    relevantTaxAreas: [
      "NHS and private income reconciliation",
      "Locum employment status",
      "Professional expenses and subscriptions",
      "VAT treatment of private medical and cosmetic services",
      "Pension contribution and annual allowance interactions",
      "Limited company structures for private or locum healthcare income",
      "Research grants and academic income treatment",
    ],
    keyPoints: [
      "Multiple income sources — NHS salary, pension, private fees, locum work — need to be reconciled together",
      "Locum status is examined closely to see whether the work is genuinely independent",
      "Expenses need clear apportionment between NHS employment and private practice",
      "Not all private healthcare services automatically qualify for VAT medical exemption",
      "Company-based locum arrangements can bring IR35 into the employment status assessment",
      "Research grants and academic income need separate, clear treatment from clinical earnings",
    ],
    preparationSteps: [
      "Gather engagement contracts and correspondence for each locum or private role",
      "Reconcile NHS salary, pension, and private income sources for the full tax year",
      "Document how each locum engagement was actually performed in practice",
      "Apportion shared expenses between NHS employment and private practice on a consistent basis",
      "Check the VAT treatment of any private or cosmetic services provided",
      "If operating through a limited company, gather company accounts alongside NHS and personal income records",
      "Separate any research grant or academic income clearly from clinical earnings",
    ],
    commonMistakes: [
      "Assuming all locum work is automatically self-employed without reviewing each engagement",
      "Applying VAT exemption to cosmetic or non-medical services that don't actually qualify",
      "Using an inconsistent method to apportion expenses between NHS and private work year to year",
      "Not keeping evidence of how a locum engagement was actually carried out in practice",
      "Overlooking pension annual allowance interactions when reconciling total income",
      "Overlooking IR35 considerations for locum work carried out through a limited company",
      "Mixing research grant or academic income in with clinical earnings without separate treatment",
    ],
    whatHappensNext: [
      "HMRC reviews income sources and requests evidence of how locum work was actually performed",
      "Expense apportionment methods are checked for consistency and reasonableness",
      "VAT treatment of private services is reviewed against current guidance",
      "Any adjustment is proposed and can be discussed, agreed or disputed",
      "The check closes with a written outcome covering all income streams reviewed",
      "Where locum work runs through a company, IR35 status is assessed alongside general employment status factors",
      "Research grant or academic income is reviewed separately from clinical income sources",
    ],
    checklist: [
      "P60/P11D records for any NHS or salaried employment",
      "Private practice income and billing records",
      "Locum agency statements or direct engagement contracts",
      "Professional subscription, indemnity insurance and use-of-home records",
      "VAT treatment records for any private services provided",
      "Company accounts and dividend records, if operating through a limited company",
      "Grant agreements and records for any research or academic income received",
    ],
    faqs: [
      {
        question: "Is locum income always self-employed?",
        answer:
          "Not automatically — HMRC assesses each engagement on how independently the locum actually operates, which can mean some locum work is genuinely self-employed and other arrangements look more like employment.",
      },
      {
        question: "Do I need to pay VAT on private medical services?",
        answer:
          "Many core medical services are VAT exempt, but some cosmetic or non-medically-necessary treatments can fall outside the exemption, so it's worth checking the specific service against current guidance.",
      },
      {
        question: "How should I split expenses between NHS and private work?",
        answer:
          "Costs that relate to both need a reasonable, consistent apportionment method, such as by time spent or income proportion, that you can explain and evidence if HMRC asks.",
      },
      {
        question: "Can I be both employed and self-employed as a healthcare professional?",
        answer:
          "Yes, it's common to have salaried NHS employment alongside genuinely self-employed private or locum work, provided each relationship is assessed correctly on its own facts.",
      },
      {
        question: "How does the pension annual allowance affect my tax position?",
        answer:
          "Where total pension contributions across NHS and any private arrangements exceed the annual allowance, an additional tax charge can apply, so it's worth reviewing this alongside your wider income position.",
      },
      {
        question: "What records help support a genuinely self-employed locum arrangement?",
        answer:
          "Evidence that you controlled how the work was done, could decline shifts, held your own indemnity insurance, and worked for multiple engagers all help support genuine self-employment.",
      },
      {
        question: "Does IR35 apply to locum doctors working through their own company?",
        answer:
          "It can, particularly for engagements that closely resemble employment in practice, so company-based locum arrangements need the same working-practices assessment as any other IR35 question.",
      },
      {
        question: "How is a research grant taxed?",
        answer:
          "This depends on the nature and terms of the grant, with some treated as taxable income and others potentially outside the scope of tax, so each grant needs checking against its specific terms.",
      },
      {
        question: "Can I claim training and course costs as a healthcare professional?",
        answer:
          "Costs that maintain your existing professional skills are generally allowable, though costs for acquiring a wholly new qualification or specialism can be treated differently.",
      },
      {
        question: "Do I need separate insurance records for tax purposes?",
        answer:
          "Indemnity insurance costs are generally allowable business expenses, so keeping clear records of premiums paid supports your expense claims if queried.",
      },
      {
        question: "Are exam and revalidation fees tax deductible?",
        answer:
          "Fees required to maintain your existing professional registration are generally allowable, though costs to gain an entirely new qualification are usually treated differently.",
      },
      {
        question: "Does working across several NHS trusts complicate my tax position?",
        answer:
          "Not usually, since each employment is taxed through its own PAYE, though it's worth checking your tax code and any under or overpayment across multiple employments at year end.",
      },
    ],
    icon: "stethoscope",
  },
  {
    slug: "retail",
    name: "Independent retail",
    summary:
      "HMRC enquiry guidance for independent retailers covering stock reconciliation, cash sales and VAT on mixed-rate goods.",
    narrative: [
      "Independent retailers are often asked to reconcile stock movements, purchases and sales to check that declared turnover is consistent with what the business actually sold, particularly where a meaningful proportion of sales are in cash. Gross profit margins that look unusually low, or that vary significantly from typical rates for the sector, can prompt HMRC to ask more detailed questions about pricing, wastage and stock loss.",
      "Retailers selling a mix of standard-rated, reduced-rated and zero-rated goods — food alongside other items, for example — need robust till and accounting systems that correctly categorise sales for VAT purposes, since misclassification across a large volume of small transactions can add up to a significant VAT error over time. Seasonal stock and end-of-line discounting also need clear records so that markdowns are properly reflected in both VAT and profit calculations.",
      "Where HMRC identifies a gross margin significantly below the sector norm, the review usually moves into testing specific product lines or periods to isolate where the variance comes from, rather than assuming it applies evenly across the whole business. Being able to show markdown records, promotional pricing, and any bulk discounting separately from standard sales makes it considerably easier to demonstrate that a lower margin reflects genuine trading conditions rather than undeclared income.",
      "Retailers operating both a physical shop and an online store need to reconcile both channels together, since combined turnover determines VAT registration status and total profit, even though the two channels may use entirely different systems for recording sales. Click-and-collect and online-order-in-store arrangements add a further layer, since a single sale can touch both systems and needs recording once, correctly, rather than being at risk of double-counting or being missed entirely.",
    ],
    relevantTaxAreas: [
      "Stock and gross margin reconciliation",
      "Cash sales evidencing",
      "VAT categorisation of mixed-rate goods",
      "Till system accuracy and reporting",
      "Seasonal discounting and stock write-offs",
      "Combined online and physical store turnover reconciliation",
      "Click-and-collect and cross-channel sale recording",
    ],
    keyPoints: [
      "Unusually low or inconsistent gross margins are a common trigger for closer HMRC questions",
      "Cash-heavy retail businesses often need stronger evidence trails to support declared sales",
      "Mixed VAT-rate goods need accurate till categorisation to avoid cumulative errors",
      "Stock write-offs and discounting need clear, consistent records",
      "Online and physical store turnover need combining for VAT and profit purposes, even with separate systems",
      "Click-and-collect sales need recording once, correctly, to avoid double-counting or omission",
    ],
    preparationSteps: [
      "Reconcile stock movements, purchases and sales for the periods under review",
      "Calculate gross margins by product category rather than only for the business overall",
      "Keep clear records of markdowns, promotions and bulk discounting",
      "Categorise mixed-VAT-rate sales correctly at the point of sale",
      "Maintain regular stock-take records to evidence genuine shrinkage or wastage",
      "Reconcile turnover across both physical and online sales channels together",
      "Check click-and-collect or cross-channel sales are recorded once, not duplicated or missed",
    ],
    commonMistakes: [
      "Only calculating gross margin at the whole-business level, missing category-specific issues",
      "Not keeping separate records of markdowns and promotional pricing",
      "Misclassifying mixed VAT-rate goods at the till, creating a cumulative error over time",
      "Treating stock shrinkage as a given rather than investigating and recording its cause",
      "Banking cash and card takings inconsistently, making reconciliation harder",
      "Treating online and physical store turnover as entirely separate instead of combining them for VAT purposes",
      "Double-counting or missing click-and-collect sales that touch more than one sales system",
    ],
    whatHappensNext: [
      "HMRC reviews stock, purchase and sales records to test declared margins",
      "Any variance is investigated at a product-category or period level",
      "VAT categorisation across mixed-rate goods is checked for consistency",
      "You may be asked to explain markdowns, shrinkage or unusual patterns",
      "The check concludes with an agreed position or a proposed adjustment",
      "Combined turnover across all sales channels is reviewed together against VAT and profit records",
      "Cross-channel sales such as click-and-collect are checked for accurate, single recording",
    ],
    checklist: [
      "Till (Z-read) reports and daily takings records",
      "Purchase invoices and supplier statements for stock reconciliation",
      "VAT rate categorisation records for mixed-rate product ranges",
      "Stock-take records and evidence for any write-offs or shrinkage",
      "Bank statements showing cash and card banking patterns",
      "Reconciliation records combining online and physical store turnover",
      "Records confirming click-and-collect or cross-channel sales are recorded once, accurately",
    ],
    faqs: [
      {
        question: "Why would HMRC query my gross profit margin?",
        answer:
          "A margin that's noticeably lower than typical for your type of retail business, or that varies unexpectedly between periods, can suggest under-declared sales or unrecorded stock loss, prompting HMRC to ask for an explanation.",
      },
      {
        question: "How does VAT work when I sell both food and non-food items?",
        answer:
          "Different goods can attract different VAT rates, so your till and accounting systems need to categorise sales correctly at the point of sale to avoid systematic errors building up across many transactions.",
      },
      {
        question: "What records help explain stock shrinkage?",
        answer:
          "Regular stock-takes, a clear write-off or wastage log, and consistent record-keeping around theft or damage all help demonstrate that shrinkage is genuine rather than a cover for undeclared sales.",
      },
      {
        question: "What if my margin genuinely varies between product lines?",
        answer:
          "That's normal in most retail businesses, and keeping category-level records makes it much easier to show HMRC that an overall lower margin reflects a genuine mix of products rather than under-declared sales.",
      },
      {
        question: "How should end-of-season discounting be recorded?",
        answer:
          "Markdowns should be clearly recorded at the time they're applied, so the reduced sale value is properly reflected in both your VAT return and profit calculations rather than looking like an unexplained shortfall later.",
      },
      {
        question: "Do I need to record cash and card takings separately?",
        answer:
          "Yes, keeping them separately identifiable makes it much easier to reconcile total takings against bank deposits and till reports if HMRC asks for evidence.",
      },
      {
        question: "Do online and in-store sales need combining for VAT registration purposes?",
        answer:
          "Yes, total taxable turnover across all your sales channels counts towards the VAT registration threshold, regardless of which system recorded each sale.",
      },
      {
        question: "How should click-and-collect orders be recorded?",
        answer:
          "Ideally as a single sale recorded once, with a clear process to prevent the same transaction being logged separately in both online and till systems.",
      },
      {
        question: "Can different systems for online and physical sales cause VAT errors?",
        answer:
          "Yes, if the two systems aren't reconciled regularly, inconsistent VAT treatment or gaps in reporting can build up without being noticed.",
      },
      {
        question: "Should I use the same accounting software for both channels?",
        answer:
          "It's not essential, but ensuring both systems can be reconciled regularly and accurately is important regardless of whether they're the same platform.",
      },
      {
        question: "Can I claim a deduction for damaged or expired stock?",
        answer:
          "Yes, genuine write-offs for damaged, expired or unsellable stock are generally allowable, provided they're properly recorded as part of your stock-take process.",
      },
      {
        question: "Does a retail business need to register for VAT differently to other businesses?",
        answer:
          "No, the same VAT registration threshold and rules apply, though retail businesses often reach the threshold through the cumulative effect of many small transactions rather than a few large ones.",
      },
    ],
    icon: "store",
  },
  {
    slug: "freelancers-creative",
    name: "Freelancers and creative professionals",
    summary:
      "HMRC enquiry guidance for freelancers, consultants and creative professionals covering multiple clients, IR35 and irregular income.",
    narrative: [
      "Freelancers and creative professionals often work with several clients across a tax year, sometimes through a personal service company, which makes IR35 and employment status one of the most common enquiry themes in this group. HMRC will look at each engagement individually — considering control, substitution rights and financial risk — rather than assuming a blanket status across all of a freelancer's work, so a mix of genuinely self-employed and inside-IR35 engagements in the same year is possible.",
      "Irregular and lumpy income is another recurring feature, since project-based work rarely arrives in even monthly amounts, which can make bank statement reconciliation more time-consuming but no less important. Expenses specific to creative work — equipment, software subscriptions, studio or workspace costs, and travel between client sites — need to be clearly evidenced as wholly and exclusively for the business, particularly where equipment might also have some personal use.",
      "Where IR35 status is disputed for a specific engagement, HMRC will look closely at the actual working practices alongside the written contract, including whether the freelancer could genuinely send a substitute, controlled how and when the work was delivered, and took on financial risk such as correcting unsatisfactory work at their own cost. A written contract that describes self-employment but doesn't reflect how the engagement actually operates in practice is unlikely to be decisive on its own.",
      "International clients add a further dimension for many freelancers, since income from overseas engagements needs declaring in the UK regardless of where the client is based, and foreign tax already withheld may be relevant to claiming double taxation relief. Freelancers receiving payment in foreign currency also need a consistent, defensible approach to converting income into sterling for their tax return.",
    ],
    relevantTaxAreas: [
      "IR35 and employment status per engagement",
      "Multiple client income reconciliation",
      "Equipment and software expense claims",
      "Use of home and studio cost apportionment",
      "Personal service company profit extraction",
      "International client income and double taxation relief",
      "Foreign currency conversion for tax reporting",
    ],
    keyPoints: [
      "IR35 status is assessed engagement by engagement, not as a single blanket status",
      "Irregular project-based income still needs full reconciliation against bank records",
      "Equipment and software expenses need clear evidence of business use",
      "Use of home or studio costs need a reasonable, consistent apportionment method",
      "Income from overseas clients needs declaring in the UK regardless of where the client is based",
      "Foreign currency income needs a consistent, defensible conversion approach for tax reporting",
    ],
    preparationSteps: [
      "Review each client engagement individually against IR35 status factors",
      "Reconcile total income across all clients and platforms for the full tax year",
      "Keep clear records evidencing business use of equipment and software",
      "Calculate use-of-home or studio costs using a consistent, reasonable method",
      "Retain personal service company accounts and dividend records if operating through one",
      "Identify any income from overseas clients and check for foreign tax already withheld",
      "Apply a consistent method for converting foreign currency income into sterling",
    ],
    commonMistakes: [
      "Assuming a written contract alone determines IR35 status without matching working practices",
      "Applying a blanket status across all client relationships rather than assessing each one",
      "Claiming full cost of equipment with meaningful personal use, rather than apportioning it",
      "Using an inconsistent method for use-of-home costs from year to year",
      "Not reconciling irregular project income fully against bank records",
      "Not declaring overseas client income in the UK because tax was already withheld abroad",
      "Using inconsistent exchange rates or conversion methods across different invoices or periods",
    ],
    whatHappensNext: [
      "HMRC reviews contracts and actual working practices for the engagements queried",
      "Total income across all clients is reconciled against bank and invoice records",
      "Expense claims are checked for evidence of genuine business use",
      "Any status or expense adjustment is proposed based on the findings",
      "The check concludes with an agreed position or, if disputed, a formal decision",
      "Overseas client income is reviewed alongside any double taxation relief claimed for foreign tax withheld",
      "Foreign currency conversion methods are checked for consistency across the period under review",
    ],
    checklist: [
      "Contracts or engagement letters for each client relationship",
      "Invoices and payment records for all income sources",
      "Equipment, software and subscription expense records",
      "Use of home or studio cost calculations",
      "Personal service company accounts and dividend records, if applicable",
      "Records of any overseas client income and foreign tax withheld",
      "A consistent record of exchange rates used to convert foreign currency income",
    ],
    faqs: [
      {
        question: "Does IR35 apply to all my freelance work?",
        answer:
          "No — status is generally assessed for each individual engagement based on factors like control and substitution, so you can have a mix of inside and outside IR35 contracts within the same period.",
      },
      {
        question: "Can I claim for equipment I also use personally?",
        answer:
          "Only the business-use proportion is generally allowable, so you need a reasonable basis for splitting cost between business and private use if an item isn't used exclusively for work.",
      },
      {
        question: "How does HMRC handle irregular freelance income?",
        answer:
          "HMRC reconciles total declared income against your bank records and invoices over the full tax year, rather than expecting a smooth monthly pattern, so the total matters more than the timing.",
      },
      {
        question: "What happens if an engagement is found to be inside IR35?",
        answer:
          "Tax and National Insurance are broadly recalculated as if the income had been paid through payroll for that engagement, which can create a liability for the fee-payer or the worker's company depending on the circumstances.",
      },
      {
        question: "Do I need a separate contract for every client?",
        answer:
          "Yes, and each should genuinely reflect how that specific relationship operates, since a generic template contract that doesn't match the reality of the work carries less weight with HMRC.",
      },
      {
        question: "How is use of home as an office calculated?",
        answer:
          "Either using HMRC's simplified flat rate based on hours worked from home, or a more detailed calculation apportioning actual household costs, applied consistently from year to year.",
      },
      {
        question: "Do I need to declare income from clients based outside the UK?",
        answer:
          "Yes, UK tax residents generally need to declare worldwide income, including from overseas clients, though relief may be available for any foreign tax already paid on it.",
      },
      {
        question: "What is double taxation relief?",
        answer:
          "It's relief available where the same income has been taxed both in the UK and overseas, generally allowing credit for foreign tax paid against your UK liability on the same income.",
      },
      {
        question: "How do I convert foreign currency invoices for my tax return?",
        answer:
          "Using a consistent, recognised exchange rate source applied the same way across the year is generally expected, rather than switching methods between invoices.",
      },
      {
        question: "Can I claim currency conversion fees as an expense?",
        answer:
          "Fees genuinely incurred converting business income between currencies are generally an allowable business expense.",
      },
      {
        question: "Can I claim for a co-working space membership?",
        answer:
          "Yes, genuine costs for a co-working space used for business purposes are generally an allowable expense, similar to other workspace costs.",
      },
      {
        question: "Do I need to charge VAT to overseas clients?",
        answer:
          "This depends on the specific place-of-supply rules for the service provided and where the client is based, so it's worth checking the current rules for cross-border services.",
      },
    ],
    icon: "palette",
  },
  {
    slug: "agriculture",
    name: "Farming and agriculture",
    summary:
      "HMRC enquiry guidance for farmers and agricultural businesses covering diversification income, subsidies and inheritance tax reliefs.",
    narrative: [
      "Farming businesses often combine traditional agricultural income with diversified activities such as holiday lets, events, renewable energy generation or farm shops, and HMRC enquiries increasingly focus on whether each activity is correctly separated and taxed under the right rules. Subsidy and grant payments also need careful treatment, since the tax position can differ depending on whether a payment is revenue or capital in nature.",
      "Agricultural Property Relief and Business Property Relief for Inheritance Tax purposes are another area of scrutiny, particularly on farm succession or when land use has changed, since relief can be restricted where land is let out, used for non-farming purposes, or diversified activity has grown to represent a significant part of the business. Livestock and crop valuation methods also need to be applied consistently year on year to avoid distorting profit figures.",
      "Where a farming business has diversified significantly, HMRC will often ask for a clear breakdown of turnover and time spent between core agricultural activity and other ventures, since this split can affect not just income tax treatment but also eligibility for certain reliefs. Renewable energy income, such as from solar panels or anaerobic digestion, needs particular care, since its tax treatment can depend on scale, ownership structure and whether the energy is used on the farm or sold to the grid.",
      "Farm partnerships and multi-generational family farming businesses bring their own complexity, since profit-sharing arrangements between family members need to reflect genuine contribution and involvement in the business, rather than simply being structured to reduce the overall tax bill. HMRC can and does query partnership profit allocations that look designed primarily for tax efficiency rather than genuinely reflecting each partner's role.",
    ],
    relevantTaxAreas: [
      "Diversification income (holiday lets, events, renewables)",
      "Subsidy and grant tax treatment",
      "Agricultural Property Relief and Business Property Relief",
      "Livestock and crop valuation consistency",
      "VAT on farm shop and diversified sales",
      "Family farm partnership profit-sharing arrangements",
      "Multi-generational succession and profit allocation",
    ],
    keyPoints: [
      "Diversified income streams need to be separated and taxed under the correct rules",
      "Subsidy and grant payments can be revenue or capital depending on their nature",
      "Inheritance Tax reliefs can be restricted where land use has diversified significantly",
      "Livestock and crop valuation methods need to be applied consistently",
      "Partnership profit-sharing between family members should genuinely reflect contribution and involvement",
      "HMRC can query profit allocations that appear structured mainly for tax efficiency",
    ],
    preparationSteps: [
      "Keep separate income and expense records for each diversified activity",
      "Establish the tax treatment of each subsidy or grant scheme received",
      "Review land use history relevant to any Agricultural Property Relief claims",
      "Apply a consistent valuation method to livestock and crops year on year",
      "Track VAT separately across farming, farm shop and other diversified sales",
      "Review partnership profit-sharing arrangements for consistency with each partner's genuine involvement",
      "Document each family member's actual role and contribution to the farming business",
    ],
    commonMistakes: [
      "Combining diversified income with core farming income instead of recording it separately",
      "Treating all subsidy payments the same without checking each scheme's specific tax treatment",
      "Not reviewing how diversification might affect Inheritance Tax relief eligibility ahead of succession",
      "Changing livestock or crop valuation methods between years without good reason",
      "Applying farming VAT treatment to non-qualifying diversified sales",
      "Structuring partnership profit shares primarily to reduce tax rather than reflecting genuine involvement",
      "Not documenting each family member's actual role, making profit allocations harder to defend",
    ],
    whatHappensNext: [
      "HMRC reviews the split between core farming and diversified income",
      "Subsidy and grant treatment is checked scheme by scheme",
      "Valuation methods for livestock and crops are tested for consistency",
      "Any relief claims are reviewed against land use and business activity records",
      "The check concludes with an agreed position or a proposed adjustment",
      "Partnership profit-sharing arrangements are reviewed against evidence of each partner's genuine involvement",
      "Allocations that appear designed mainly for tax efficiency may be challenged and require justification",
    ],
    checklist: [
      "Separate income and expense records for each diversified activity",
      "Subsidy and grant payment records and correspondence",
      "Land use records relevant to Agricultural Property Relief claims",
      "Livestock and crop valuation workings for the years in question",
      "VAT records for any farm shop or diversified sales",
      "Partnership agreement setting out profit-sharing arrangements",
      "Records evidencing each family member's actual role and contribution to the business",
    ],
    faqs: [
      {
        question: "Is diversification income taxed the same as farming income?",
        answer:
          "Not necessarily — activities like holiday lets or events are often taxed differently from core agricultural trading, so keeping them separately recorded matters for getting the treatment right.",
      },
      {
        question: "Can diversification affect Inheritance Tax relief on farmland?",
        answer:
          "Yes, Agricultural Property Relief and Business Property Relief can be restricted if a meaningful part of the business has moved away from core farming use, which is why land use history often matters in succession planning.",
      },
      {
        question: "How should subsidy payments be treated for tax?",
        answer:
          "It depends on the specific scheme and what the payment is for — some are treated as trading income, while others may have a capital element, so each scheme needs checking individually.",
      },
      {
        question: "Does renewable energy income count as farming income?",
        answer:
          "Not automatically — the treatment can depend on the scale of the operation and how the energy is used or sold, so it's worth checking the specific arrangement rather than assuming standard farming rules apply.",
      },
      {
        question: "How far in advance should succession planning consider diversification?",
        answer:
          "Ideally well ahead of any transfer, since Agricultural Property Relief and Business Property Relief depend on land use history, and reversing a diversification decision close to a transfer is rarely straightforward.",
      },
      {
        question: "Can livestock valuation methods be changed?",
        answer:
          "Changes are possible but need a genuine reason and proper disclosure, since switching methods purely to manage a tax outcome in a particular year is likely to attract scrutiny.",
      },
      {
        question: "Can family members be partners in a farming business without working full time on the farm?",
        answer:
          "It's possible, but the profit share allocated should still genuinely reflect their actual contribution and involvement, rather than existing purely to spread income for tax purposes.",
      },
      {
        question: "Does HMRC check family partnership arrangements closely?",
        answer:
          "Yes, particularly where profit allocations look disproportionate to each partner's actual role, since this is a recognised area of potential tax planning that attracts scrutiny.",
      },
      {
        question: "How should farm succession plans consider partnership structure?",
        answer:
          "Early planning that reflects a genuine and gradually increasing involvement for the next generation tends to be more defensible than a sudden change in profit shares shortly before a transfer.",
      },
      {
        question: "What records support a family partnership profit allocation?",
        answer:
          "Evidence of hours worked, decisions made, and responsibilities held by each partner all help demonstrate that the profit share reflects genuine involvement in the business.",
      },
      {
        question: "Can environmental scheme payments affect my VAT position?",
        answer:
          "Some environmental or stewardship payments have their own specific VAT treatment, so it's worth checking each scheme rather than assuming standard farming VAT rules automatically apply.",
      },
      {
        question: "Do I need separate accounts for a farm shop compared to the core farming business?",
        answer:
          "Keeping the farm shop's income and costs clearly separated makes it much easier to apply the correct VAT and income tax treatment to each part of the business.",
      },
    ],
    icon: "sprout",
  },
  {
    slug: "care-homes",
    name: "Care homes and domiciliary care",
    summary:
      "HMRC enquiry guidance for care homes and domiciliary care providers covering VAT exemption, payroll and worker status.",
    narrative: [
      "Care providers benefit from a VAT exemption for welfare services, but the exemption depends on specific conditions being met, and HMRC enquiries in this sector often start by checking that all services provided genuinely qualify rather than assuming a blanket exemption across everything the business does. Providers offering additional services alongside core care, such as certain hospitality or non-qualifying activities, need to apply VAT correctly to those separate elements.",
      "Payroll compliance is a major focus given the scale of the workforce in most care settings, including whether care workers are correctly classified as employed or self-employed, how zero-hours and sleep-in shifts are paid and recorded, and whether National Minimum Wage requirements are being met across all working time, including travel between visits for domiciliary care staff. Getting worker classification wrong across a large workforce can create a substantial cumulative PAYE liability.",
      "Where worker classification is challenged across a care workforce, HMRC will typically sample a range of roles and contracts rather than reviewing every worker individually, using the sample to draw conclusions about the wider workforce. This makes it particularly important that classification is applied consistently and correctly across similar roles, since an error identified in a sample can be extrapolated across the whole care staff population, significantly increasing the potential liability.",
      "Care providers operating across multiple sites or under different corporate structures need to ensure VAT and payroll treatment is applied consistently across the whole group, since inconsistencies between sites — one applying the welfare exemption differently to another, for example — can prompt HMRC to examine the whole organisation rather than a single location. Agency staff used to cover shortfalls also need clear records distinguishing them from directly employed or self-employed care workers, since their tax treatment is generally handled by the agency itself.",
    ],
    relevantTaxAreas: [
      "VAT welfare exemption conditions",
      "Worker classification for care staff",
      "National Minimum Wage compliance including travel time",
      "Sleep-in shift payment treatment",
      "Payroll records across large, varied-hours workforces",
      "Consistency of VAT and payroll treatment across multiple care sites",
      "Agency staff arrangements and tax treatment",
    ],
    keyPoints: [
      "The VAT welfare exemption depends on specific conditions, not a blanket assumption",
      "Care worker classification as employed or self-employed is closely examined",
      "National Minimum Wage compliance needs to include relevant travel time for domiciliary care",
      "Worker misclassification across a large workforce can create a significant cumulative liability",
      "Inconsistent VAT or payroll treatment across multiple sites can prompt a group-wide review",
      "Agency staff have a different tax treatment to directly employed or self-employed care workers",
    ],
    preparationSteps: [
      "Review VAT treatment of every service offered against the welfare exemption conditions",
      "Assess worker classification consistently across similar care roles",
      "Record sleep-in shifts and travel time clearly within payroll records",
      "Calculate National Minimum Wage compliance across all working time, including travel",
      "Gather contracts and working-practice evidence for any self-employed care workers",
      "Check VAT and payroll treatment is applied consistently across all sites in a multi-site business",
      "Keep clear records distinguishing agency staff from directly engaged workers",
    ],
    commonMistakes: [
      "Assuming the VAT welfare exemption applies to all services without checking each one",
      "Classifying similar care roles inconsistently as employed in some cases and self-employed in others without clear justification",
      "Excluding travel time between client visits from National Minimum Wage calculations",
      "Not properly recording or paying for sleep-in shifts in line with current requirements",
      "Relying on a single classification review rather than checking it periodically as roles evolve",
      "Applying VAT or payroll treatment inconsistently between different sites in the same organisation",
      "Not distinguishing agency staff clearly from directly employed or self-employed workers in records",
    ],
    whatHappensNext: [
      "HMRC reviews VAT treatment against the specific services provided",
      "A sample of worker classifications and contracts is examined",
      "National Minimum Wage compliance is tested across all recorded working time",
      "Findings from the sample may be extrapolated across the wider workforce",
      "A settlement is agreed covering any VAT, PAYE or National Minimum Wage shortfall identified",
      "Consistency of treatment across multiple sites is checked as part of a group-wide review",
      "Agency staff arrangements are reviewed separately, since their tax treatment sits with the agency",
    ],
    checklist: [
      "VAT records showing which services are treated as exempt welfare provision",
      "Contracts and working arrangements for all care staff",
      "Payroll records including sleep-in shifts and travel time between visits",
      "National Minimum Wage compliance calculations across all working time",
      "Records supporting the classification of any self-employed care workers",
      "Records showing VAT and payroll treatment applied consistently across all sites",
      "Agency contracts and invoices for any agency staff used",
    ],
    faqs: [
      {
        question: "Does VAT exemption cover everything a care provider does?",
        answer:
          "Not automatically — the exemption applies to qualifying welfare services specifically, so any additional non-qualifying services provided alongside core care need their own VAT treatment.",
      },
      {
        question: "How does National Minimum Wage apply to domiciliary care?",
        answer:
          "Time spent travelling between client visits during a shift generally needs to be counted as working time for National Minimum Wage purposes, which is a common area HMRC checks closely.",
      },
      {
        question: "Can care workers be genuinely self-employed?",
        answer:
          "It's possible, but HMRC will look closely at how much control the provider exercises over how, when and where the work is done, since many care arrangements look more like employment in practice.",
      },
      {
        question: "Can HMRC extrapolate findings across my whole care workforce?",
        answer:
          "Yes, if a sample review identifies a systemic issue, HMRC can apply the same conclusion across similar roles rather than checking every individual worker, which is why consistent classification matters.",
      },
      {
        question: "Are sleep-in shifts paid at the same rate as active shifts?",
        answer:
          "The applicable rate depends on current National Minimum Wage rules and the nature of the shift, so it's worth checking the latest requirements rather than relying on historical practice.",
      },
      {
        question: "What if some of our care workers are genuinely self-employed?",
        answer:
          "That's possible, but it needs to be supported by real evidence of independence, such as the worker controlling how and when they work and bearing their own financial risk, not just a label in a contract.",
      },
      {
        question: "Does HMRC review all sites together for a multi-site care provider?",
        answer:
          "Often yes, particularly if inconsistencies are found at one site, since this can prompt a wider review of whether the same issue exists elsewhere in the organisation.",
      },
      {
        question: "How are agency care staff taxed compared to directly employed staff?",
        answer:
          "Agency staff are generally taxed through the agency's own payroll, so the care provider's own PAYE obligations relate mainly to directly employed staff, not agency workers.",
      },
      {
        question: "Can VAT treatment differ between sites in the same care organisation?",
        answer:
          "It shouldn't, if the services provided are genuinely the same — consistent treatment across all sites is expected unless there's a real difference in the services or structure involved.",
      },
      {
        question: "What records help demonstrate a genuine agency staffing arrangement?",
        answer:
          "Agency contracts, invoices from the agency, and clarity that the agency — not the care provider — handles payroll for those workers all help evidence the arrangement.",
      },
      {
        question: "Do care homes charge VAT on accommodation fees?",
        answer:
          "Qualifying welfare accommodation is generally VAT exempt, though it's worth checking that the specific services provided meet the conditions for exemption rather than assuming it automatically applies.",
      },
      {
        question: "How does HMRC check payroll compliance across a large care staff rota?",
        answer:
          "HMRC typically samples time and pay records across different shift patterns, including sleep-ins and travel time, to test whether National Minimum Wage compliance holds across the whole rota, not just standard shifts.",
      },
    ],
    icon: "heart-pulse",
  },
];
