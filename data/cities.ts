import type { City } from "@/lib/types";

export const cities: City[] = [
  {
    slug: "birmingham",
    name: "Birmingham",
    region: "West Midlands",
    context:
      "Birmingham's economy spans advanced manufacturing, automotive supply chains, and a large professional and financial services sector in the city centre, alongside a substantial base of independent traders and family-run businesses across the wider West Midlands conurbation. That mix means HMRC casework in the area regularly touches both limited companies with multi-tier supplier arrangements and sole traders running smaller manufacturing or trade businesses. Enquiries connected to subcontractor payments, stock valuation and cross-border component supply are common themes given the strength of automotive and engineering supply chains locally. Specialists supporting Birmingham-based businesses are used to reconciling records across several linked entities, which is often central to resolving a compliance check cleanly.",
    enquiryTriggers: [
      "Subcontractor and supplier payments across multi-tier automotive and engineering supply chains",
      "Stock valuation at year end in manufacturing and trade businesses",
      "Cross-border purchases of components and how VAT and import duties were treated",
      "Records spread across several linked companies that don't reconcile with each other",
    ],
    localFaqs: [
      {
        question: "My Birmingham business has several linked companies. Will HMRC look at them together?",
        answer:
          "Often yes. If transactions pass between connected companies, HMRC may review them together to check pricing, VAT and loan balances are consistent, so having intercompany records ready is useful.",
      },
      {
        question: "I run a small manufacturing business in Birmingham. What do HMRC check on stock?",
        answer:
          "Mainly how closing stock was valued and whether the figure agrees with stock records and purchases. Clear stock-take records at the year end make this much easier to evidence.",
      },
    ],
  },
  {
    slug: "manchester",
    name: "Manchester",
    region: "Greater Manchester",
    context:
      "Manchester's business base is built around media, digital and creative industries, a growing financial and professional services sector, and a dense network of contractors and SMEs supporting the city's construction and property development activity. A large share of the local workforce operates through personal service companies or as self-employed contractors, which means employment status and IR35-adjacent questions come up frequently in PAYE and compliance casework here. The city's active property and construction sector also means CIS deductions and subcontractor verification are a recurring focus for HMRC checks involving Manchester businesses. Specialists familiar with the area are well placed to separate genuine contracting arrangements from disguised employment when HMRC starts asking questions.",
    enquiryTriggers: [
      "Personal service companies and whether the off-payroll working rules apply to contractors",
      "Income timing for freelancers in media, digital and creative work",
      "Subcontractor payments in construction and property development",
      "Expenses claimed by owner-managed businesses working from home or shared offices",
    ],
    localFaqs: [
      {
        question: "I contract through my own company in Manchester. Can HMRC question that?",
        answer:
          "Yes. HMRC can review whether an engagement should be treated as employment for tax, which turns on how the work is actually carried out, so contracts and working arrangements are the key evidence.",
      },
      {
        question: "I work in construction around Manchester. Are CIS and employment status linked?",
        answer:
          "They often are. HMRC may look at whether workers treated as self-employed under CIS were really employees, so how each worker is directed and paid matters.",
      },
    ],
  },
  {
    slug: "leeds",
    name: "Leeds",
    region: "West Yorkshire",
    context:
      "Leeds is one of the UK's largest centres for financial and legal services outside London, with a business landscape that also includes manufacturing, healthcare technology, and a significant number of retail and hospitality operators in and around the city centre. The concentration of professional services firms means Self Assessment enquiries here often involve more complex income sources — partnership profits, dividends and investment income alongside employment. Retail and hospitality operators in the city are more likely to face questions about cash handling and till reconciliation during a compliance check. Given that range, the right response often depends heavily on which part of the local economy the business actually sits in.",
    enquiryTriggers: [
      "Partnership and LLP profit shares in financial and legal practices",
      "Dividends and investment income from several providers that don't match the return",
      "Cash handling and till records in retail and hospitality businesses",
      "Self-employed professionals combining employment and trading income",
    ],
    localFaqs: [
      {
        question: "I'm a partner in a Leeds firm. What will HMRC look at on my return?",
        answer:
          "How your profit share was calculated and allocated across tax years, and whether your return matches the partnership return, since inconsistencies between the two are easy for HMRC to spot.",
      },
      {
        question: "I run a shop or restaurant in Leeds. Why do HMRC ask about till records?",
        answer:
          "Because takings are tested against bank deposits, card data and purchases. Keeping end-of-day till reports and reconciling them to the bank is the most helpful evidence.",
      },
    ],
  },
  {
    slug: "hounslow",
    name: "Hounslow",
    region: "West London",
    context:
      "Hounslow's economy is closely tied to its proximity to Heathrow Airport, with a large concentration of logistics, aviation services, warehousing and international trading businesses, alongside a diverse base of independent retailers and hospitality operators. Import and export activity linked to the airport means VAT questions around international supply chains, zero-rating and customs treatment are a recurring theme for local businesses. The area's large logistics and haulage sector also means mileage, vehicle costs and driver payment records feature heavily in PAYE and expense-related enquiries. Specialists working with Hounslow businesses are typically well versed in the VAT rules around international freight and trade.",
    enquiryTriggers: [
      "VAT on imports, exports and zero-rated supplies linked to freight and air cargo",
      "Customs and import VAT treatment for international supply chains",
      "Mileage, vehicle costs and driver payments in haulage and logistics",
      "Records for agency and shift workers at warehousing and aviation-services employers",
    ],
    localFaqs: [
      {
        question: "My Hounslow business ships goods overseas. What VAT evidence does HMRC want?",
        answer:
          "Usually proof of export, such as shipping documents and customs paperwork, kept alongside the invoices, because zero-rating generally depends on having that evidence in time.",
      },
      {
        question: "I run a haulage or courier business near Heathrow. What PAYE records matter?",
        answer:
          "Records showing how drivers are engaged and paid, including expenses and mileage, since HMRC often checks that employment status and deductions have been applied correctly.",
      },
    ],
  },
  {
    slug: "kingston-upon-thames",
    name: "Kingston upon Thames",
    region: "South West London",
    context:
      "Kingston's local economy centres on retail, education and creative businesses, supported by a significant number of self-employed professionals and small consultancies operating from the town centre and surrounding residential areas. Many of these are single-director companies or sole traders working from home, which means use-of-home expense claims and the boundary between personal and business costs are a common enquiry focus locally. The area's education and creative sectors also bring a fair number of freelance and portfolio-career arrangements, where income is drawn from several smaller sources rather than one employer. That pattern tends to make reconciling total declared income the first practical step in most enquiries here.",
    enquiryTriggers: [
      "Use-of-home costs claimed by sole traders and single-director companies",
      "The boundary between personal and business spending in small consultancies",
      "Freelance and portfolio income from several smaller sources",
      "Retail takings and stock records in town-centre shops",
    ],
    localFaqs: [
      {
        question: "I work from home in Kingston. What can I claim, and will HMRC question it?",
        answer:
          "A fair share of home running costs can usually be claimed where part of the home is genuinely used for work. HMRC tends to check that the method is reasonable and the figures are supported.",
      },
      {
        question: "I'm a freelancer with income from several clients in Kingston. What should I keep?",
        answer:
          "Invoices matched to bank receipts and a clear record of expenses, so total income can be shown to reconcile with the return.",
      },
    ],
  },
  {
    slug: "wolverhampton",
    name: "Wolverhampton",
    region: "West Midlands",
    context:
      "Wolverhampton has a long-standing manufacturing and engineering base, particularly in metalwork and components, alongside a growing number of construction contractors, logistics operators and independent traders serving the wider Black Country. Capital allowances on plant and machinery, and the correct VAT treatment of scrap and metal transactions, are recurring technical points in enquiries touching the manufacturing sector here. The area's construction contractor base also means CIS registration and deduction status are frequently checked. Given how much of the local economy runs through smaller, owner-managed manufacturing firms, record-keeping quality tends to be the deciding factor in how quickly a check gets resolved.",
    enquiryTriggers: [
      "Capital allowances on plant and machinery in metalwork and engineering",
      "VAT on scrap and metal transactions",
      "Subcontractor payments and CIS in construction",
      "Records kept by small Black Country traders with mixed cash and card sales",
    ],
    localFaqs: [
      {
        question: "I run a metalwork business in Wolverhampton. What do HMRC check on capital allowances?",
        answer:
          "Whether claimed assets were genuine business assets, whether they were put in the right category and whether purchase invoices support the amounts, particularly for larger items.",
      },
      {
        question: "Is the VAT treatment of scrap metal different?",
        answer:
          "It can be. Some scrap and metal transactions are subject to special VAT rules, so it's worth checking how each type of sale or purchase should be treated before replying to HMRC.",
      },
    ],
  },
  {
    slug: "bristol",
    name: "Bristol",
    region: "South West England",
    context:
      "Bristol combines a strong aerospace and advanced engineering sector with a well-established creative and technology scene, plus a large number of freelancers and contractors working across media, design and software. R&D tax relief claims are more common among Bristol's engineering and technology businesses than in most other cities, which brings its own specific enquiry risks around evidencing qualifying activity. The freelance and contractor population in the creative and tech sectors also means personal service company and IR35 questions come up regularly. Specialists working in Bristol are typically well practised in supporting R&D claims through HMRC scrutiny as well as more routine Self Assessment checks.",
    enquiryTriggers: [
      "R&D tax relief claims and the evidence of qualifying activity",
      "Freelancers and contractors across media, design and software",
      "Capital allowances for aerospace and advanced engineering equipment",
      "Director pay and loans in young technology companies",
    ],
    localFaqs: [
      {
        question: "I've claimed R&D tax relief in Bristol. What will HMRC ask for?",
        answer:
          "Typically a description of the projects, evidence that they involved a genuine technical challenge, and a breakdown of the costs claimed, such as staff time and materials.",
      },
      {
        question: "I freelance in Bristol's creative sector. Why does HMRC ask about my status?",
        answer:
          "Because some engagements look like employment, so HMRC may ask how the work is directed and whether you can send a substitute. Contracts and examples of how you work help show your position.",
      },
    ],
  },
  {
    slug: "liverpool",
    name: "Liverpool",
    region: "Merseyside",
    context:
      "Liverpool's economy is anchored by maritime trade, logistics and port-related industries, alongside a substantial visitor economy and a growing base of creative and digital businesses in the city centre. Port-related businesses often deal with import VAT, customs valuations and international supplier relationships, all of which can attract closer HMRC attention. The city's large hospitality and tourism sector also means cash reconciliation and seasonal income patterns are a recurring theme in compliance checks. Given the mix of international trade and cash-facing hospitality businesses, enquiries here can vary widely in scope and usually benefit from being scoped carefully at the outset.",
    enquiryTriggers: [
      "Import VAT, customs valuation and duties for port-related businesses",
      "International supplier relationships and the paperwork behind them",
      "Cash takings and staff payments in hospitality and tourism",
      "Seasonal and part-time workers and how they were paid",
    ],
    localFaqs: [
      {
        question: "My Liverpool business imports goods through the port. What does HMRC check?",
        answer:
          "Usually the value declared at customs, the import VAT treatment and whether the paperwork supports what was reported, so keeping customs entries together with invoices is important.",
      },
      {
        question: "I run a bar or restaurant in Liverpool. What records help most?",
        answer:
          "Daily till reports, card settlement statements and purchase invoices, which together show takings reconcile with purchases.",
      },
    ],
  },
  {
    slug: "sheffield",
    name: "Sheffield",
    region: "South Yorkshire",
    context:
      "Sheffield retains a strong advanced manufacturing and metalwork heritage, now paired with growing healthcare technology and engineering research activity, alongside a wide base of independent trades and construction businesses. Manufacturing and engineering firms here often claim capital allowances and, increasingly, R&D relief on process improvements, both of which HMRC may probe in more detail. The city's substantial construction and trades sector also brings CIS and subcontractor status questions into many local compliance checks. Specialists supporting Sheffield businesses tend to see a steady mix of manufacturing-related capital expenditure queries alongside more standard trade and construction casework.",
    enquiryTriggers: [
      "Capital allowances and R&D relief on process improvements in manufacturing",
      "Equipment and machinery purchases claimed in a single year",
      "Subcontractor payments and CIS for trades and construction",
      "Grants and funding in healthcare technology and research businesses",
    ],
    localFaqs: [
      {
        question: "I make products in Sheffield and have invested in new machinery. What will HMRC review?",
        answer:
          "Whether the equipment qualifies for the allowance claimed, how it is categorised and whether invoices and payment evidence agree with the figures.",
      },
      {
        question: "Can HMRC question a Sheffield R&D claim for process improvements?",
        answer:
          "Yes. They commonly ask what the technical challenge was and who did the work, so contemporaneous project notes are very useful.",
      },
    ],
  },
  {
    slug: "nottingham",
    name: "Nottingham",
    region: "East Midlands",
    context:
      "Nottingham's business base includes established life sciences and pharmaceutical activity, a significant retail and logistics sector, and a large number of self-employed professionals and small businesses across the wider East Midlands. Life sciences and pharmaceutical employers often have more complex payroll arrangements, including benefits-in-kind and share schemes, which can draw PAYE compliance attention. The city's large logistics and distribution sector also means fleet costs, mileage and driver expenses are a common enquiry topic. Given that spread, the specific records HMRC is likely to ask for in Nottingham can differ quite a lot depending on which sector a business sits in.",
    enquiryTriggers: [
      "Benefits in kind and share schemes at pharmaceutical and life sciences employers",
      "Payroll deductions for large and mixed workforces",
      "Warehousing and logistics workers engaged through agencies",
      "Small business owners in the wider East Midlands with mixed income",
    ],
    localFaqs: [
      {
        question: "I run payroll for a Nottingham employer with share schemes. What does HMRC look at?",
        answer:
          "Whether benefits and awards were reported and taxed correctly, so reconciling payroll to the annual benefit returns before HMRC asks is worthwhile.",
      },
      {
        question: "My Nottingham business uses agency staff. Why might HMRC ask about that?",
        answer:
          "To check who is responsible for deductions and whether any workers are really employees of the business. Contracts with the agency help establish this.",
      },
    ],
  },
  {
    slug: "leicester",
    name: "Leicester",
    region: "East Midlands",
    context:
      "Leicester has a long-standing textiles and garment manufacturing sector alongside significant food production and logistics activity, supported by a large and diverse population of independent traders and family-run businesses. The textiles sector has historically drawn HMRC attention around cash payments, agency labour and undeclared workers, making payroll and PAYE record-keeping a particularly sensitive area locally. Food production and logistics businesses in the city more often face questions around stock valuation, waste and VAT on supply chains. Specialists working with Leicester businesses generally place early emphasis on getting payroll and worker-status records in order before responding to HMRC.",
    enquiryTriggers: [
      "Cash payments and undeclared work in garment and textile manufacturing",
      "Agency labour and how workers were engaged",
      "Payroll and PAYE records for food production and logistics employees",
      "Takings and purchases in family-run shops and food businesses",
    ],
    localFaqs: [
      {
        question: "I run a garment business in Leicester. Why are payroll records so important?",
        answer:
          "Because the sector has historically drawn HMRC attention around cash pay and agency labour, so complete, consistent PAYE records are a strong defence if questions arise.",
      },
      {
        question: "I use agency workers in my Leicester food business. What is my responsibility?",
        answer:
          "It depends on the arrangement, but HMRC may ask who employed the workers and whether tax and National Insurance were handled correctly, so keep agency contracts and invoices.",
      },
    ],
  },
  {
    slug: "coventry",
    name: "Coventry",
    region: "West Midlands",
    context:
      "Coventry's economy remains closely linked to automotive design and manufacturing, with a growing cluster of advanced engineering and logistics businesses supporting supply chains across the wider West Midlands. Automotive suppliers here often operate through complex intercompany arrangements, which can bring transfer pricing and management fee questions into a Corporation Tax or VAT enquiry. The city's engineering base also generates a reasonable volume of R&D relief claims tied to vehicle and component development. Given the technical complexity typical of automotive supply arrangements, enquiries touching Coventry manufacturers often benefit from specialist input on both the tax position and the engineering context behind it.",
    enquiryTriggers: [
      "Transfer pricing and management charges between connected automotive companies",
      "Intercompany loans and how interest was set",
      "Capital allowances on engineering plant and equipment",
      "VAT on supplies between linked entities",
    ],
    localFaqs: [
      {
        question: "My Coventry company is part of a group. What do HMRC check between group companies?",
        answer:
          "Whether prices and charges between the companies are on commercial terms, and whether loans, management fees and VAT between them are properly recorded.",
      },
      {
        question: "I supply the automotive trade in Coventry. Do capital allowance claims get reviewed?",
        answer:
          "They can. HMRC may ask for asset lists, invoices and the basis on which each item was put into its allowance category.",
      },
    ],
  },
  {
    slug: "bradford",
    name: "Bradford",
    region: "West Yorkshire",
    context:
      "Bradford's economic base includes a historic textiles and manufacturing sector alongside a growing digital and media presence, plus a substantial number of independent retailers and food businesses serving its diverse communities. As in other former textile centres, payroll and cash-handling records are a recurring area of HMRC interest for manufacturing and retail businesses in the city. The growing digital and media sector, by contrast, tends to generate more freelance and personal service company enquiries. That contrast means the right approach to a Bradford enquiry depends heavily on whether the business sits in the city's traditional manufacturing base or its newer digital economy.",
    enquiryTriggers: [
      "Payroll and cash-handling records in textile and manufacturing businesses",
      "Takings and stock in independent retail and food businesses",
      "Income reporting for new digital and media freelancers",
      "Expenses claimed by small owner-managed businesses",
    ],
    localFaqs: [
      {
        question: "I run an independent shop in Bradford. What records will HMRC want?",
        answer:
          "Daily takings, purchase invoices, bank statements and VAT workings, so reported sales can be reconciled to cash and card receipts.",
      },
      {
        question: "I've recently started freelancing in Bradford's digital sector. What should I know?",
        answer:
          "Keep a record of every invoice and expense from the start and register for Self Assessment, since missing the first filing is a common source of avoidable penalties.",
      },
    ],
  },
  {
    slug: "newcastle",
    name: "Newcastle upon Tyne",
    region: "North East England",
    context:
      "Newcastle has a growing digital and professional services sector alongside established strengths in life sciences and advanced manufacturing, supported by a significant number of contractors and small businesses across Tyneside. The expanding digital and professional services base has brought a steady rise in personal service company and IR35-related enquiries in the city. Manufacturing and life sciences employers, meanwhile, more often face PAYE checks touching benefits-in-kind and specialist equipment capital allowances. Specialists working across Tyneside are used to moving between these quite different enquiry types depending on which part of the local economy a client operates in.",
    enquiryTriggers: [
      "Personal service companies and off-payroll working for contractors in digital and professional services",
      "Benefits in kind at life sciences and manufacturing employers",
      "Self-employed Tyneside traders reporting mixed income",
      "Director payments in small professional services companies",
    ],
    localFaqs: [
      {
        question: "I contract through my own company in Newcastle. Can HMRC challenge my status?",
        answer:
          "Yes. HMRC may review whether the off-payroll working rules apply, which depends on how the engagement works in practice, so keep contracts and examples of how you operate.",
      },
      {
        question: "I'm a director of a small Newcastle firm. What will HMRC look at on pay?",
        answer:
          "Typically the mix of salary and dividends, how dividends were declared and whether any director's loan account balance created a tax charge.",
      },
    ],
  },
  {
    slug: "southampton",
    name: "Southampton",
    region: "South East England",
    context:
      "Southampton's economy is shaped by its port, maritime and cruise industries, alongside a significant logistics and freight sector and a growing base of professional services firms serving the wider South Coast. Maritime and cruise-related businesses often deal with international crew payments and cross-border VAT questions that can be genuinely complex to explain to HMRC. The city's logistics and freight sector brings similar import VAT and customs valuation questions to those seen in other port cities. Specialists supporting Southampton businesses regularly deal with the particular VAT and payroll questions that come with international maritime operations.",
    enquiryTriggers: [
      "Cross-border VAT in maritime and cruise-related businesses",
      "International crew payments and how they were taxed",
      "Freight and logistics VAT and import treatment",
      "Professional services firms serving the wider South Coast",
    ],
    localFaqs: [
      {
        question: "My Southampton business is linked to the cruise or shipping industry. Is VAT complicated?",
        answer:
          "It can be, because the place of supply and zero-rating rules for maritime services are specialised. HMRC may ask for contracts and evidence to support the treatment used.",
      },
      {
        question: "How are overseas crew payments treated?",
        answer:
          "It depends on residence, the nature of the work and where it is performed, so HMRC may ask how each payment was classified. Getting a clear view of each person's status early helps.",
      },
    ],
  },
  {
    slug: "reading",
    name: "Reading",
    region: "Thames Valley",
    context:
      "Reading sits at the centre of the Thames Valley technology corridor, with a large concentration of software, telecoms and professional services businesses alongside a significant number of contractors working across the sector. The scale of contracting in the technology sector here means IR35 status and personal service company arrangements are one of the most common enquiry triggers locally. Software and telecoms businesses also frequently claim R&D tax relief, which HMRC has increasingly scrutinised in recent years. Given both of those pressure points, technology businesses and contractors in Reading benefit from specialists who understand the sector's typical structures, not just general tax rules.",
    enquiryTriggers: [
      "IR35 status and personal service companies in software and telecoms contracting",
      "Employee share schemes and options in technology companies",
      "Expense claims by IT contractors working at client sites",
      "Director pay, dividends and loans in small technology firms",
    ],
    localFaqs: [
      {
        question: "I contract in the Reading tech sector through my own company. What triggers an IR35 enquiry?",
        answer:
          "Often a pattern in the data, such as long engagements with a single client, or the engagement looking like employment in practice. The contract and how the work is actually done are the key evidence.",
      },
      {
        question: "I received share options from my Reading employer. How are they taxed?",
        answer:
          "It depends on the type of scheme, but HMRC commonly checks that the exercise or sale was reported properly, so keep scheme statements and dealing confirmations.",
      },
    ],
  },
  {
    slug: "cardiff",
    name: "Cardiff",
    region: "South Wales",
    context:
      "Cardiff's business base combines a substantial public sector and administrative presence with growing media, financial and professional services sectors, alongside a wide range of independent retailers and hospitality businesses. The city's media and creative sector includes a significant number of freelancers and limited companies working on short-term contracts, which brings recurring questions about income timing and expense allowability. Financial and professional services firms in the city more often face enquiries involving partnership income and investment-related gains. Specialists working in Cardiff are used to handling both the freelance-heavy media sector and the more traditional professional services casework side by side.",
    enquiryTriggers: [
      "Freelancers and small companies in media and creative work reporting short-term contracts",
      "Income timing and which tax year payments belong to",
      "Takings and VAT in independent retail and hospitality",
      "Residence and income tax rates for people living in Wales",
    ],
    localFaqs: [
      {
        question: "I'm a freelancer in Cardiff's media sector. Which tax year does my income fall in?",
        answer:
          "Income is generally taxed in the year it is earned or received depending on the accounting basis used, so HMRC may ask how you decided the year for each payment.",
      },
      {
        question: "Does living in Wales change which income tax rates apply?",
        answer:
          "For Welsh taxpayers, income tax rates are set partly by the Welsh Government. Whether you are treated as a Welsh taxpayer depends on where you live, so it is worth confirming your status.",
      },
    ],
  },
  {
    slug: "edinburgh",
    name: "Edinburgh",
    region: "Scotland",
    context:
      "Edinburgh is one of the UK's largest financial services centres outside London, with a business landscape that also includes a substantial tourism and hospitality sector and a growing number of technology start-ups. The financial services concentration means Self Assessment enquiries here often involve investment income, share-based pay and sometimes offshore holdings, all of which require careful explanation to HMRC. The city's large seasonal tourism and hospitality trade brings its own recurring questions around cash takings and short-term staffing. Specialists supporting Edinburgh clients typically need to be equally comfortable with complex investment income and straightforward hospitality compliance checks.",
    enquiryTriggers: [
      "Investment income, share-based pay and offshore holdings in financial services",
      "Seasonal income and cash handling in tourism and hospitality",
      "Founder pay and loans in technology start-ups",
      "Scottish income tax status and where income was reported",
    ],
    localFaqs: [
      {
        question: "I live in Edinburgh. Do different income tax rates apply to me?",
        answer:
          "Scottish taxpayers pay Scottish income tax rates and bands on most earned income, so HMRC may check whether your status was recorded correctly and the right rates applied.",
      },
      {
        question: "I work in Edinburgh's financial sector and have overseas investments. Will HMRC know?",
        answer:
          "Probably. Many countries share account information with HMRC automatically, so overseas income and gains should be reported accurately.",
      },
    ],
  },
  {
    slug: "glasgow",
    name: "Glasgow",
    region: "Scotland",
    context:
      "Glasgow's economy spans engineering and advanced manufacturing, a significant financial and business services sector, and a large creative and events industry, supported by a wide base of independent traders across the city. Engineering and manufacturing firms here often have older capital assets, making capital allowances and asset disposal calculations a frequent technical point in Corporation Tax enquiries. The city's creative and events sector, meanwhile, tends to generate freelance income and short-term project work that needs careful, consistent recording. Given that spread, Glasgow enquiries range from technical capital allowance questions through to straightforward freelance income reconciliation.",
    enquiryTriggers: [
      "Capital allowances and asset disposals in engineering and manufacturing",
      "Short-term event and creative contracts and how they were reported",
      "Scottish income tax status for individual taxpayers",
      "Independent trader records across the city",
    ],
    localFaqs: [
      {
        question: "I run an engineering firm in Glasgow with older equipment. What will HMRC check on disposals?",
        answer:
          "How the sale proceeds were treated against allowances already claimed, so keep disposal records, sale invoices and the original asset register.",
      },
      {
        question: "I'm a Scottish taxpayer. Does that change how HMRC handle my enquiry?",
        answer:
          "HMRC still conducts the enquiry, but your Scottish taxpayer status affects the rates and bands used, so it may be reviewed as part of the check.",
      },
    ],
  },
  {
    slug: "milton-keynes",
    name: "Milton Keynes",
    region: "South East England",
    context:
      "Milton Keynes has developed into a major logistics and distribution hub given its motorway access, alongside a significant number of corporate headquarters, technology firms and contractors operating across the town. The logistics and distribution sector means fleet costs, warehousing arrangements and VAT on cross-border deliveries are recurring themes in local enquiries. The town's concentration of corporate headquarters and technology employers also brings a steady flow of PAYE questions around benefits-in-kind and salary sacrifice arrangements. Specialists working with Milton Keynes businesses see a genuinely broad mix, from warehouse VAT questions to corporate payroll compliance.",
    enquiryTriggers: [
      "Fleet, vehicle and warehousing costs in logistics and distribution",
      "VAT on cross-border deliveries and imports",
      "IR35 and contractor status in corporate and technology roles",
      "Group and head-office charges between connected companies",
    ],
    localFaqs: [
      {
        question: "My Milton Keynes business runs a delivery fleet. What will HMRC examine?",
        answer:
          "Usually vehicle costs and private use, fuel and mileage records, and driver payments, to check expenses and deductions were applied correctly.",
      },
      {
        question: "I contract at a corporate head office in Milton Keynes. Does IR35 apply?",
        answer:
          "It depends on how the engagement works in practice, including how much control the client has and whether you can send a substitute. HMRC may ask for the contract and working evidence.",
      },
    ],
  },
  {
    slug: "westminster",
    name: "Westminster",
    region: "Central London",
    context:
      "Westminster covers Mayfair, Soho, Victoria and the West End, so the businesses and individuals based here are unusually varied: wealth managers and investment firms, property companies, high-end retail and hospitality, and a large number of internationally mobile professionals. Enquiries in this area often involve income from several sources and countries, which makes overseas income, residence status and offshore holdings frequent points of discussion. High-value property transactions also bring Capital Gains Tax and Stamp Duty questions into scope. Specialists supporting Westminster clients tend to spend more time on cross-border and high-net-worth positions than on straightforward trading records, and the supporting paperwork is often held across several jurisdictions.",
    enquiryTriggers: [
      "Overseas income, offshore accounts or foreign property that doesn't appear on the return",
      "High-value property sales and the Capital Gains Tax reported on them",
      "Residence and domicile status claims for internationally mobile clients",
      "Income from several sources, such as dividends, trusts and investment partnerships, that doesn't reconcile",
    ],
    localFaqs: [
      {
        question: "I live in Westminster but have income from abroad. Does HMRC need to know?",
        answer:
          "Generally yes. UK residents are usually taxed on worldwide income, and HMRC receives account information from many other countries automatically, so it often already holds data on overseas income before any disclosure is made.",
      },
      {
        question: "Will an appointment-only office affect how my enquiry is handled?",
        answer:
          "No. HMRC enquiries are handled by correspondence and, where needed, meetings, so you don't need to visit anyone in person to get support. A first conversation can be arranged by phone or email.",
      },
    ],
  },
  {
    slug: "city-of-london",
    name: "City of London",
    region: "Central London",
    context:
      "The City of London is the UK's main financial and professional services district, home to banks, insurers, law and accountancy firms, and a large number of contractors and consultants working to short-term arrangements. Individuals employed here often have income beyond a basic salary, including bonuses, share-based pay and investment returns, and these are some of the areas HMRC examines most closely. Contractors operating through personal service companies also face regular questions about how the off-payroll working rules apply to them. A typical City enquiry therefore tends to turn on how complex income has been reported, rather than on whether basic records exist, which makes clear explanations and well-organised workings especially valuable.",
    enquiryTriggers: [
      "Bonuses, share awards or options that were taxed differently from how they were reported",
      "Contractors working through personal service companies and the off-payroll working rules",
      "Investment income and gains from several brokers or platforms that don't match the return",
      "Partnership or LLP profit allocations that were reported inconsistently",
    ],
    localFaqs: [
      {
        question: "I work in the City on a contract through my own company. Can HMRC challenge that?",
        answer:
          "Yes. HMRC can look at whether the off-payroll working rules should apply to an engagement, which turns on how the work is actually carried out. Having the contract and evidence of how you work ready is the most useful preparation.",
      },
      {
        question: "My bonus was paid partly in shares. Why is HMRC asking about it?",
        answer:
          "Share-based pay is reported through the employer but often has its own tax treatment, so differences between the employer's figures and the return are a common reason HMRC writes to people in financial services.",
      },
    ],
  },
  {
    slug: "camden",
    name: "Camden",
    region: "North London",
    context:
      "Camden brings together King's Cross's growing technology and media employers, the long-established creative and music sector around Camden Town, and a busy hospitality and market-trading scene. That mix produces a lot of freelancers, small production companies and owner-managed businesses, many with irregular income across several clients. Market traders and hospitality operators handle significant cash takings, which makes till records and takings reconciliation a typical focus of VAT and Self Assessment enquiries locally. Creative professionals often face questions about the split between personal and business costs, equipment purchases and expenses claimed against variable income. Getting the records in order early is usually the most useful first step for Camden clients.",
    enquiryTriggers: [
      "Cash takings from market stalls or hospitality that don't match the figures declared",
      "Freelance income from several clients with irregular payment dates",
      "Equipment and studio costs claimed in full against variable income",
      "Mixed personal and business spending by sole traders working from home or shared space",
    ],
    localFaqs: [
      {
        question: "I trade at a market in Camden and take mostly cash. What will HMRC look at?",
        answer:
          "HMRC typically compares recorded takings with bank deposits, stock purchases and what is normal for that type of trade. Keeping daily takings records and reconciling them to the bank is the strongest evidence you can have.",
      },
      {
        question: "I'm a freelancer with several clients. Which records matter most?",
        answer:
          "Invoices matched to bank receipts, a clear record of expenses, and records of any payments made on your behalf. These show that income was reported in the right tax year.",
      },
    ],
  },
  {
    slug: "croydon",
    name: "Croydon",
    region: "South London",
    context:
      "Croydon has a large and varied business base, including retail, professional services, construction and building trades, and a substantial number of landlords given the borough's mix of residential and commercial property. The construction and trades presence means subcontractor payments and the Construction Industry Scheme appear regularly in local enquiries, alongside questions about whether workers are genuinely self-employed. Landlords in the area also tend to face scrutiny of rental income, allowable expenses and the treatment of property sales. Specialists supporting Croydon clients are commonly asked to look at several tax areas at once, because the same business may have trading, property and payroll questions open together.",
    enquiryTriggers: [
      "Subcontractor payments under the Construction Industry Scheme and whether the right rate was deducted",
      "Whether builders and tradespeople were treated correctly as employed or self-employed",
      "Rental income and expenses where landlords own several properties",
      "VAT treatment of building work, including the domestic reverse charge",
    ],
    localFaqs: [
      {
        question: "I use subcontractors on building jobs around Croydon. What is HMRC likely to check?",
        answer:
          "Usually that each subcontractor was verified, that the correct deduction rate was applied, that monthly returns match what was paid, and that the people treated as self-employed genuinely were.",
      },
      {
        question: "I let out several properties in the borough. How far back can HMRC look?",
        answer:
          "The time limit depends on the type of error. Ordinary mistakes can usually be reviewed for around four years, and careless or deliberate behaviour for longer, so it is worth checking older years if something looks wrong.",
      },
    ],
  },
  {
    slug: "tower-hamlets",
    name: "Tower Hamlets",
    region: "East London",
    context:
      "Tower Hamlets combines the Canary Wharf financial district with a dense network of independent businesses around Brick Lane, Whitechapel and the wider East End, so enquiries here range from complex executive remuneration to cash-heavy restaurants and takeaways. Hospitality businesses commonly face questions about takings, VAT on sales and staff payments, while those working in finance are more likely to be asked about bonuses, share schemes and overseas income. The borough's high concentration of small owner-managed businesses means a good number of compliance checks begin with questions about director payments and drawings. The right approach depends heavily on which of these very different parts of the local economy the client sits in.",
    enquiryTriggers: [
      "Restaurant and takeaway takings compared with supplier purchases and card payment data",
      "Executive pay, bonuses and share schemes for people working in the Canary Wharf area",
      "Director drawings and loan accounts in small owner-managed businesses",
      "Staff payments and records in hospitality, including cash and part-time workers",
    ],
    localFaqs: [
      {
        question: "I run a restaurant in Tower Hamlets. Why do HMRC compare my purchases with my sales?",
        answer:
          "Because purchases of ingredients and drinks indicate roughly how much you should be selling. If recorded takings look low compared with purchases, HMRC may ask for till records and bank data to understand the gap.",
      },
      {
        question: "I work in Canary Wharf and have share-based pay. Is that a common enquiry area?",
        answer:
          "Yes. HMRC regularly checks whether share awards and bonuses were reported on the right dates and at the right value, so keeping statements from your employer is important.",
      },
    ],
  },
  {
    slug: "barnet",
    name: "Barnet",
    region: "North London",
    context:
      "Barnet is a largely suburban borough with a high proportion of owner-managed businesses, professional practices and self-employed residents, together with a sizeable number of landlords with residential rental portfolios. Typical HMRC questions here concern rental income and the expenses claimed against it, director's loan accounts in small family companies, and Self Assessment returns that combine several income streams. Because many local businesses are run by one or two people from home or small premises, the line between personal and business spending is a frequent point of inquiry. A calm, evidence-led response that reconciles bank records to the return is usually the most effective way to resolve these.",
    enquiryTriggers: [
      "Rental income from residential portfolios and the expenses claimed against it",
      "Director's loan accounts in small family-run companies",
      "Self Assessment returns combining employment, rental and savings income",
      "Use-of-home costs claimed by self-employed residents and sole-director companies",
    ],
    localFaqs: [
      {
        question: "I own a couple of buy-to-lets in Barnet. What do HMRC check most often?",
        answer:
          "Whether all rental income was declared, whether claimed costs were genuinely revenue expenses rather than improvements, and whether the mortgage interest restriction was applied correctly.",
      },
      {
        question: "My company has borrowed money from me, or the other way round. Is that a risk?",
        answer:
          "Director's loan accounts can create tax charges if they're overdrawn at certain points, so HMRC often asks how the balance arose and whether it was repaid in time.",
      },
    ],
  },
  {
    slug: "ealing",
    name: "Ealing",
    region: "West London",
    context:
      "Ealing has a diverse local economy that includes film and media production, construction and building trades, retail, and a large community of small family-run businesses. The trades and construction presence means subcontractor payments, CIS deductions and employment status come up regularly, while the media sector brings freelance and short-contract arrangements into focus. Small retailers and independent operators commonly see questions about VAT, cash handling and the treatment of stock. Specialists helping Ealing clients often have to cover several sectors in the same week, so it helps to be comfortable with both payroll-heavy businesses and sole traders with irregular incomes.",
    enquiryTriggers: [
      "CIS deductions and employment status for builders and tradespeople",
      "Freelance and short-contract income in film and media production",
      "VAT and cash handling in small independent shops and food businesses",
      "Stock valuation and year-end adjustments in small retail businesses",
    ],
    localFaqs: [
      {
        question: "I work on short film and TV contracts around Ealing. Why might HMRC ask about my status?",
        answer:
          "Some production roles are treated as employment and others as self-employment, and the right answer depends on how the work is actually done. HMRC may ask for contracts and how you were engaged.",
      },
      {
        question: "I run a small shop in Ealing. What records do I need to keep?",
        answer:
          "Daily takings, purchase invoices, bank statements and VAT workings. These let you reconcile reported sales to cash and card receipts if HMRC asks.",
      },
    ],
  },
  {
    slug: "islington",
    name: "Islington",
    region: "North London",
    context:
      "Islington is home to a dense cluster of start-ups, creative and technology businesses around Angel and Old Street, alongside established hospitality, retail and professional services firms. Many of these are young, fast-growing companies where directors and founders draw income in a mix of salary, dividends and loans, which is an area HMRC regularly looks at. Freelancers and consultants working from shared offices or home also commonly face questions about expenses and how income is allocated across tax years. Businesses claiming innovation-related reliefs may be asked for detailed support for the figures. Clear documentation from the outset tends to make the biggest difference to how smoothly an enquiry runs for Islington businesses.",
    enquiryTriggers: [
      "Founder salaries, dividends and director loans in young companies",
      "Claims for innovation-related reliefs and the evidence behind the costs claimed",
      "Freelancers and consultants allocating income and expenses across tax years",
      "Hospitality VAT and cash records in busy town-centre venues",
    ],
    localFaqs: [
      {
        question: "I'm a founder in Islington and pay myself a mix of salary and dividends. Will HMRC question that?",
        answer:
          "It's a common area of interest, particularly where the amounts look unusual compared with company profits. Documenting dividends and board decisions helps show they were properly declared.",
      },
      {
        question: "What evidence do I need if I've claimed an innovation tax relief?",
        answer:
          "Detailed records of what the project involved, who worked on it and the costs claimed. HMRC often asks for this when a claim is reviewed.",
      },
    ],
  },
];
