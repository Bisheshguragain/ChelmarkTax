import type { City } from "@/lib/types";

export const cities: City[] = [
  {
    slug: "birmingham",
    name: "Birmingham",
    region: "West Midlands",
    context:
      "Birmingham's economy spans advanced manufacturing, automotive supply chains, and a large professional and financial services sector in the city centre, alongside a substantial base of independent traders and family-run businesses across the wider West Midlands conurbation. That mix means HMRC casework in the area regularly touches both limited companies with multi-tier supplier arrangements and sole traders running smaller manufacturing or trade businesses. Enquiries connected to subcontractor payments, stock valuation and cross-border component supply are common themes given the strength of automotive and engineering supply chains locally. Specialists supporting Birmingham-based businesses are used to reconciling records across several linked entities, which is often central to resolving a compliance check cleanly.",
  },
  {
    slug: "manchester",
    name: "Manchester",
    region: "Greater Manchester",
    context:
      "Manchester's business base is built around media, digital and creative industries, a growing financial and professional services sector, and a dense network of contractors and SMEs supporting the city's construction and property development activity. A large share of the local workforce operates through personal service companies or as self-employed contractors, which means employment status and IR35-adjacent questions come up frequently in PAYE and compliance casework here. The city's active property and construction sector also means CIS deductions and subcontractor verification are a recurring focus for HMRC checks involving Manchester businesses. Specialists familiar with the area are well placed to separate genuine contracting arrangements from disguised employment when HMRC starts asking questions.",
  },
  {
    slug: "leeds",
    name: "Leeds",
    region: "West Yorkshire",
    context:
      "Leeds is one of the UK's largest centres for financial and legal services outside London, with a business landscape that also includes manufacturing, healthcare technology, and a significant number of retail and hospitality operators in and around the city centre. The concentration of professional services firms means Self Assessment enquiries here often involve more complex income sources — partnership profits, dividends and investment income alongside employment. Retail and hospitality operators in the city are more likely to face questions about cash handling and till reconciliation during a compliance check. Given that range, the right response often depends heavily on which part of the local economy the business actually sits in.",
  },
  {
    slug: "hounslow",
    name: "Hounslow",
    region: "West London",
    context:
      "Hounslow's economy is closely tied to its proximity to Heathrow Airport, with a large concentration of logistics, aviation services, warehousing and international trading businesses, alongside a diverse base of independent retailers and hospitality operators. Import and export activity linked to the airport means VAT questions around international supply chains, zero-rating and customs treatment are a recurring theme for local businesses. The area's large logistics and haulage sector also means mileage, vehicle costs and driver payment records feature heavily in PAYE and expense-related enquiries. Specialists working with Hounslow businesses are typically well versed in the VAT rules around international freight and trade.",
  },
  {
    slug: "kingston-upon-thames",
    name: "Kingston upon Thames",
    region: "South West London",
    context:
      "Kingston's local economy centres on retail, education and creative businesses, supported by a significant number of self-employed professionals and small consultancies operating from the town centre and surrounding residential areas. Many of these are single-director companies or sole traders working from home, which means use-of-home expense claims and the boundary between personal and business costs are a common enquiry focus locally. The area's education and creative sectors also bring a fair number of freelance and portfolio-career arrangements, where income is drawn from several smaller sources rather than one employer. That pattern tends to make reconciling total declared income the first practical step in most enquiries here.",
  },
  {
    slug: "wolverhampton",
    name: "Wolverhampton",
    region: "West Midlands",
    context:
      "Wolverhampton has a long-standing manufacturing and engineering base, particularly in metalwork and components, alongside a growing number of construction contractors, logistics operators and independent traders serving the wider Black Country. Capital allowances on plant and machinery, and the correct VAT treatment of scrap and metal transactions, are recurring technical points in enquiries touching the manufacturing sector here. The area's construction contractor base also means CIS registration and deduction status are frequently checked. Given how much of the local economy runs through smaller, owner-managed manufacturing firms, record-keeping quality tends to be the deciding factor in how quickly a check gets resolved.",
  },
  {
    slug: "bristol",
    name: "Bristol",
    region: "South West England",
    context:
      "Bristol combines a strong aerospace and advanced engineering sector with a well-established creative and technology scene, plus a large number of freelancers and contractors working across media, design and software. R&D tax relief claims are more common among Bristol's engineering and technology businesses than in most other cities, which brings its own specific enquiry risks around evidencing qualifying activity. The freelance and contractor population in the creative and tech sectors also means personal service company and IR35 questions come up regularly. Specialists working in Bristol are typically well practised in supporting R&D claims through HMRC scrutiny as well as more routine Self Assessment checks.",
  },
  {
    slug: "liverpool",
    name: "Liverpool",
    region: "Merseyside",
    context:
      "Liverpool's economy is anchored by maritime trade, logistics and port-related industries, alongside a substantial visitor economy and a growing base of creative and digital businesses in the city centre. Port-related businesses often deal with import VAT, customs valuations and international supplier relationships, all of which can attract closer HMRC attention. The city's large hospitality and tourism sector also means cash reconciliation and seasonal income patterns are a recurring theme in compliance checks. Given the mix of international trade and cash-facing hospitality businesses, enquiries here can vary widely in scope and usually benefit from being scoped carefully at the outset.",
  },
  {
    slug: "sheffield",
    name: "Sheffield",
    region: "South Yorkshire",
    context:
      "Sheffield retains a strong advanced manufacturing and metalwork heritage, now paired with growing healthcare technology and engineering research activity, alongside a wide base of independent trades and construction businesses. Manufacturing and engineering firms here often claim capital allowances and, increasingly, R&D relief on process improvements, both of which HMRC may probe in more detail. The city's substantial construction and trades sector also brings CIS and subcontractor status questions into many local compliance checks. Specialists supporting Sheffield businesses tend to see a steady mix of manufacturing-related capital expenditure queries alongside more standard trade and construction casework.",
  },
  {
    slug: "nottingham",
    name: "Nottingham",
    region: "East Midlands",
    context:
      "Nottingham's business base includes established life sciences and pharmaceutical activity, a significant retail and logistics sector, and a large number of self-employed professionals and small businesses across the wider East Midlands. Life sciences and pharmaceutical employers often have more complex payroll arrangements, including benefits-in-kind and share schemes, which can draw PAYE compliance attention. The city's large logistics and distribution sector also means fleet costs, mileage and driver expenses are a common enquiry topic. Given that spread, the specific records HMRC is likely to ask for in Nottingham can differ quite a lot depending on which sector a business sits in.",
  },
  {
    slug: "leicester",
    name: "Leicester",
    region: "East Midlands",
    context:
      "Leicester has a long-standing textiles and garment manufacturing sector alongside significant food production and logistics activity, supported by a large and diverse population of independent traders and family-run businesses. The textiles sector has historically drawn HMRC attention around cash payments, agency labour and undeclared workers, making payroll and PAYE record-keeping a particularly sensitive area locally. Food production and logistics businesses in the city more often face questions around stock valuation, waste and VAT on supply chains. Specialists working with Leicester businesses generally place early emphasis on getting payroll and worker-status records in order before responding to HMRC.",
  },
  {
    slug: "coventry",
    name: "Coventry",
    region: "West Midlands",
    context:
      "Coventry's economy remains closely linked to automotive design and manufacturing, with a growing cluster of advanced engineering and logistics businesses supporting supply chains across the wider West Midlands. Automotive suppliers here often operate through complex intercompany arrangements, which can bring transfer pricing and management fee questions into a Corporation Tax or VAT enquiry. The city's engineering base also generates a reasonable volume of R&D relief claims tied to vehicle and component development. Given the technical complexity typical of automotive supply arrangements, enquiries touching Coventry manufacturers often benefit from specialist input on both the tax position and the engineering context behind it.",
  },
  {
    slug: "bradford",
    name: "Bradford",
    region: "West Yorkshire",
    context:
      "Bradford's economic base includes a historic textiles and manufacturing sector alongside a growing digital and media presence, plus a substantial number of independent retailers and food businesses serving its diverse communities. As in other former textile centres, payroll and cash-handling records are a recurring area of HMRC interest for manufacturing and retail businesses in the city. The growing digital and media sector, by contrast, tends to generate more freelance and personal service company enquiries. That contrast means the right approach to a Bradford enquiry depends heavily on whether the business sits in the city's traditional manufacturing base or its newer digital economy.",
  },
  {
    slug: "newcastle",
    name: "Newcastle upon Tyne",
    region: "North East England",
    context:
      "Newcastle has a growing digital and professional services sector alongside established strengths in life sciences and advanced manufacturing, supported by a significant number of contractors and small businesses across Tyneside. The expanding digital and professional services base has brought a steady rise in personal service company and IR35-related enquiries in the city. Manufacturing and life sciences employers, meanwhile, more often face PAYE checks touching benefits-in-kind and specialist equipment capital allowances. Specialists working across Tyneside are used to moving between these quite different enquiry types depending on which part of the local economy a client operates in.",
  },
  {
    slug: "southampton",
    name: "Southampton",
    region: "South East England",
    context:
      "Southampton's economy is shaped by its port, maritime and cruise industries, alongside a significant logistics and freight sector and a growing base of professional services firms serving the wider South Coast. Maritime and cruise-related businesses often deal with international crew payments and cross-border VAT questions that can be genuinely complex to explain to HMRC. The city's logistics and freight sector brings similar import VAT and customs valuation questions to those seen in other port cities. Specialists supporting Southampton businesses regularly deal with the particular VAT and payroll questions that come with international maritime operations.",
  },
  {
    slug: "reading",
    name: "Reading",
    region: "Thames Valley",
    context:
      "Reading sits at the centre of the Thames Valley technology corridor, with a large concentration of software, telecoms and professional services businesses alongside a significant number of contractors working across the sector. The scale of contracting in the technology sector here means IR35 status and personal service company arrangements are one of the most common enquiry triggers locally. Software and telecoms businesses also frequently claim R&D tax relief, which HMRC has increasingly scrutinised in recent years. Given both of those pressure points, technology businesses and contractors in Reading benefit from specialists who understand the sector's typical structures, not just general tax rules.",
  },
  {
    slug: "cardiff",
    name: "Cardiff",
    region: "South Wales",
    context:
      "Cardiff's business base combines a substantial public sector and administrative presence with growing media, financial and professional services sectors, alongside a wide range of independent retailers and hospitality businesses. The city's media and creative sector includes a significant number of freelancers and limited companies working on short-term contracts, which brings recurring questions about income timing and expense allowability. Financial and professional services firms in the city more often face enquiries involving partnership income and investment-related gains. Specialists working in Cardiff are used to handling both the freelance-heavy media sector and the more traditional professional services casework side by side.",
  },
  {
    slug: "edinburgh",
    name: "Edinburgh",
    region: "Scotland",
    context:
      "Edinburgh is one of the UK's largest financial services centres outside London, with a business landscape that also includes a substantial tourism and hospitality sector and a growing number of technology start-ups. The financial services concentration means Self Assessment enquiries here often involve investment income, share-based pay and sometimes offshore holdings, all of which require careful explanation to HMRC. The city's large seasonal tourism and hospitality trade brings its own recurring questions around cash takings and short-term staffing. Specialists supporting Edinburgh clients typically need to be equally comfortable with complex investment income and straightforward hospitality compliance checks.",
  },
  {
    slug: "glasgow",
    name: "Glasgow",
    region: "Scotland",
    context:
      "Glasgow's economy spans engineering and advanced manufacturing, a significant financial and business services sector, and a large creative and events industry, supported by a wide base of independent traders across the city. Engineering and manufacturing firms here often have older capital assets, making capital allowances and asset disposal calculations a frequent technical point in Corporation Tax enquiries. The city's creative and events sector, meanwhile, tends to generate freelance income and short-term project work that needs careful, consistent recording. Given that spread, Glasgow enquiries range from technical capital allowance questions through to straightforward freelance income reconciliation.",
  },
  {
    slug: "milton-keynes",
    name: "Milton Keynes",
    region: "South East England",
    context:
      "Milton Keynes has developed into a major logistics and distribution hub given its motorway access, alongside a significant number of corporate headquarters, technology firms and contractors operating across the town. The logistics and distribution sector means fleet costs, warehousing arrangements and VAT on cross-border deliveries are recurring themes in local enquiries. The town's concentration of corporate headquarters and technology employers also brings a steady flow of PAYE questions around benefits-in-kind and salary sacrifice arrangements. Specialists working with Milton Keynes businesses see a genuinely broad mix, from warehouse VAT questions to corporate payroll compliance.",
  },
];
