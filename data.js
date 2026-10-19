window.OPPORTUNITIES = [
  // ==========================================
  // UNIVERSITIES (PUBLIC)
  // ==========================================
  {
    id: 1,
    name: "University of Johannesburg (UJ)",
    type: "university",
    province: "Gauteng",
    minAps: 26,
    status: "Open",
    closingDate: "31 October 2026",
    description: "A premier metropolitan university offering diverse undergraduate degrees with high employability rates.",
    requirements: "NSC Bachelor's pass. APS 26+ depending on faculty. Free online application.",
    link: "https://www.uj.ac.za/study/apply/",
    courses: [
      { name: "Bachelor of Commerce (BCom) General", minAps: 28, requirements: "Maths Level 4 (50%+) or Math Lit Level 6 (70%+)" },
      { name: "Bachelor of Arts (BA)", minAps: 26, requirements: "Languages Level 4 (50%+)" },
      { name: "Bachelor of Science (BSc) Computer Science", minAps: 30, requirements: "Pure Maths Level 5 (60%+), Physical Sciences Level 4" },
      { name: "National Diploma in Management", minAps: 24, requirements: "Diploma pass, Maths/Math Lit Level 3" }
    ]
  },
  {
    id: 2,
    name: "University of Mpumalanga (UMP)",
    type: "university",
    province: "Mpumalanga",
    minAps: 20,
    status: "Open",
    closingDate: "30 November 2026",
    description: "Offers state-of-the-art undergraduate diplomas, Bachelor's degrees, and advanced programmes.",
    requirements: "NSC Bachelor's or Diploma pass with qualifying APS score. Late closing window.",
    link: "https://www.ump.ac.za",
    courses: [
      { name: "Bachelor of Education (BEd) Foundation Phase", minAps: 22, requirements: "Language Level 4" },
      { name: "Bachelor of Agriculture", minAps: 20, requirements: "Life Sciences or Agricultural Sciences Level 4" },
      { name: "Diploma in ICT in Applications Development", minAps: 22, requirements: "Maths Level 3 or Math Lit Level 5" }
    ]
  },
  {
    id: 3,
    name: "Walter Sisulu University (WSU)",
    type: "university",
    province: "Eastern Cape",
    minAps: 20,
    status: "Open",
    closingDate: "31 October 2026",
    description: "Comprehensive university focused on technological and career-oriented academic programmes.",
    requirements: "NSC pass with specific subject requirements. General closing extended to end of October.",
    link: "https://www.wsu.ac.za",
    courses: [
      { name: "Bachelor of Social Science", minAps: 20, requirements: "English Level 4" },
      { name: "Diploma in Civil Engineering", minAps: 23, requirements: "Pure Maths Level 4, Physical Science Level 4" }
    ]
  },
  {
    id: 4,
    name: "University of Fort Hare (UFH)",
    type: "university",
    province: "Eastern Cape",
    minAps: 22,
    status: "Open",
    closingDate: "31 October 2026",
    description: "Historic university renowned for strong law, management, and social science faculties.",
    requirements: "NSC pass with standard statutory university admission requirements.",
    link: "https://www.ufh.ac.za",
    courses: [
      { name: "Bachelor of Laws (LLB)", minAps: 30, requirements: "English Level 5 (60%+)" },
      { name: "Bachelor of Commerce in Accounting", minAps: 26, requirements: "Maths Level 4" }
    ]
  },
  {
    id: 5,
    name: "Tshwane University of Technology (TUT)",
    type: "university",
    province: "Gauteng",
    minAps: 18,
    status: "Open",
    closingDate: "Space-Dependent / Late Enquiries",
    description: "South Africa's largest residential higher education institution focusing on career-ready technical skills.",
    requirements: "NSC Diploma or Bachelor's pass. Subject marks dictate placement.",
    link: "https://www.tut.ac.za",
    courses: [
      { name: "Bachelor of Geomatics", minAps: 26, requirements: "Pure Maths Level 4, Physical Sciences Level 4, English Level 4" },
      { name: "National Diploma / Dip. Engineering Technology in Civil", minAps: 24, requirements: "Pure Maths Level 4, Physical Sciences Level 4" },
      { name: "Diploma in Information Technology", minAps: 21, requirements: "Maths Level 3 or Math Lit Level 5" }
    ]
  },
  {
    id: 6,
    name: "University of Pretoria (UP)",
    type: "university",
    province: "Gauteng",
    minAps: 30,
    status: "Closed",
    closingDate: "Closed (30 June 2026)",
    description: "Top research-intensive South African university with elite programmes in Law, Engineering, and Veterinary Science.",
    requirements: "Strict competitive APS requirements. Applications for the academic intake are closed.",
    link: "https://www.up.ac.za",
    courses: [
      { name: "Bachelor of Engineering (BEng) - Civil/Mechanical/Electrical", minAps: 35, requirements: "Pure Maths Level 6, Phys Science Level 6, English Level 5" },
      { name: "Bachelor of Medicine and Surgery (MBChB)", minAps: 35, requirements: "Strict competitive entry subject thresholds" }
    ]
  },
  {
    id: 7,
    name: "University of the Witwatersrand (Wits)",
    type: "university",
    province: "Gauteng",
    minAps: 34,
    status: "Closed",
    closingDate: "Closed (30 September 2026)",
    description: "World-class research institution located in Johannesburg offering prestigious professional degrees.",
    requirements: "High APS scores and strict faculty-specific criteria. Intake applications are closed.",
    link: "https://www.wits.ac.za/undergraduate/apply-to-wits/",
    courses: [
      { name: "BSc Computer Science", minAps: 38, requirements: "Pure Maths Level 6, English Level 5" },
      { name: "Bachelor of Accounting Science (BAccSc)", minAps: 36, requirements: "Pure Maths Level 6" }
    ]
  },
  {
    id: 8,
    name: "University of Cape Town (UCT)",
    type: "university",
    province: "Western Cape",
    minAps: 30,
    status: "Closed",
    closingDate: "Closed (31 July 2026)",
    description: "Consistently ranked as Africa's top university, offering elite degree options.",
    requirements: "Extremely competitive faculty entry points. Undergraduate window is closed.",
    link: "https://www.uct.ac.za/apply",
    courses: [
      { name: "Bachelor of Business Science", minAps: 42, requirements: "Pure Maths Level 7 (80%+)" },
      { name: "Bachelor of Architectural Studies", minAps: 35, requirements: "Portfolio review + Pure Maths Level 5" }
    ]
  },
  {
    id: 9,
    name: "Stellenbosch University (SU)",
    type: "university",
    province: "Western Cape",
    minAps: 30,
    status: "Closed",
    closingDate: "Closed (31 July 2026)",
    description: "Leading public research university known for academic excellence and diverse faculty offerings.",
    requirements: "No late applications considered for 2027 intake.",
    link: "https://www.sun.ac.za",
    courses: [
      { name: "BSc Actuarial Science", minAps: 41, requirements: "Pure Maths Level 7" }
    ]
  },
  {
    id: 10,
    name: "University of the Free State (UFS)",
    type: "university",
    province: "Free State",
    minAps: 24,
    status: "Closed",
    closingDate: "Closed (30 September 2026)",
    description: "Multicampus institution offering a vibrant academic environment in Bloemfontein.",
    requirements: "Applications closed. No late undergraduate applications accepted.",
    link: "https://www.ufs.ac.za",
    courses: [
      { name: "Bachelor of Admin", minAps: 25, requirements: "Language Level 4" }
    ]
  },
  {
    id: 11,
    name: "University of KwaZulu-Natal (UKZN)",
    type: "university",
    province: "KwaZulu-Natal",
    minAps: 28,
    status: "Closed",
    closingDate: "Closed (30 September 2026)",
    description: "Prestigious institution renowned for health sciences, agriculture, and humanities.",
    requirements: "NSC Bachelor's pass with strict subject score minimums.",
    link: "https://ukzn.ac.za",
    courses: [
      { name: "Bachelor of Nursing", minAps: 30, requirements: "Life Sciences Level 5" }
    ]
  },
  {
    id: 12,
    name: "North-West University (NWU)",
    type: "university",
    province: "North West",
    minAps: 22,
    status: "Closed",
    closingDate: "Closed (30 August 2026)",
    description: "Multi-campus university offering dynamic study options across three campuses.",
    requirements: "Minimum APS score requirements per faculty met prior to deadline.",
    link: "https://www.nwu.ac.za",
    courses: [
      { name: "BEd Intermediate Phase Teaching", minAps: 24, requirements: "Language Level 4" }
    ]
  },

  // ==========================================
  // TVET COLLEGES
  // ==========================================
  {
    id: 13,
    name: "Tshwane North TVET College (TNC)",
    type: "college",
    province: "Gauteng",
    minAps: 14,
    status: "Closed",
    closingDate: "Closed (30 September 2026)",
    description: "Quality vocational and occupational education and training (NCV & Report 191/Nated).",
    requirements: "Grade 9, 10, 11, or 12 certificate depending on the chosen vocational level.",
    link: "https://tnc.edu.za",
    courses: [
      { name: "NCV Electrical Infrastructure Construction", minAps: 15, requirements: "Grade 9 pass with Math/Science" },
      { name: "Nated Business Management N4-N6", minAps: 18, requirements: "Grade 12 certificate" }
    ]
  },
  {
    id: 14,
    name: "Tshwane South TVET College",
    type: "college",
    province: "Gauteng",
    minAps: 15,
    status: "Open",
    closingDate: "Ongoing / Walk-ins",
    description: "Public TVET college providing NATED (N1-N6) engineering studies, business management, and practical trade skills.",
    requirements: "Passed Grade 9 for N1 Engineering. Passed Grade 12 for Business Studies.",
    link: "https://www.tsc.edu.za",
    courses: [
      { name: "N1-N3 Mechanical Engineering", minAps: 14, requirements: "Grade 9 Math & Science" },
      { name: "NCV Finance, Economics and Accounting", minAps: 16, requirements: "Grade 9/10/11 pass" }
    ]
  },
  {
    id: 15,
    name: "Sedibeng TVET College",
    type: "college",
    province: "Gauteng",
    minAps: 15,
    status: "Open",
    closingDate: "Walk-ins / Enquire for Space",
    description: "Offers theoretical and practical training in engineering, business, and utility studies.",
    requirements: "Certified copy of ID, latest school results, and proof of residence.",
    link: "https://www.sedcol.co.za",
    courses: [
      { name: "NCV Civil Engineering & Building Construction", minAps: 15, requirements: "Grade 9+ pass" }
    ]
  },
  {
    id: 16,
    name: "South West Gauteng TVET College",
    type: "college",
    province: "Gauteng",
    minAps: 15,
    status: "Open",
    closingDate: "Check Portal Availability",
    description: "Equipping students with marketable vocational skills across multiple Gauteng campuses.",
    requirements: "Certified ID document, guardian details, and latest academic results.",
    link: "https://swgtvet.co.za",
    courses: [
      { name: "NCV Office Administration", minAps: 15, requirements: "Grade 9/10/11" }
    ]
  },
  {
    id: 17,
    name: "False Bay TVET College",
    type: "college",
    province: "Western Cape",
    minAps: 15,
    status: "Open",
    closingDate: "Check Programme Availability",
    description: "Award-winning TVET college offering vocational, occupational, and skills programmes.",
    requirements: "Grade 9–12 pass with specific subject thresholds for engineering fields.",
    link: "https://falsebaycollege.co.za",
    courses: [
      { name: "NCV Hospitality / Tourism", minAps: 15, requirements: "Grade 9 or 10 pass" }
    ]
  },

  // ==========================================
  // NURSING COLLEGES
  // ==========================================
  {
    id: 18,
    name: "Gauteng College of Nursing (GCON)",
    type: "nursing",
    province: "Gauteng",
    minAps: 27,
    status: "Closed",
    closingDate: "Closed (31 July 2026)",
    description: "4-Year Diploma in Nursing offering practical clinical experience in Gauteng state hospitals.",
    requirements: "NSC with English (4), Life Sciences (4), and Mathematics (3) or Math Lit (4). Age limit: 35 years.",
    link: "https://nursingintake.gauteng.gov.za",
    courses: [
      { name: "Diploma in Nursing (R171)", minAps: 27, requirements: "English Level 4, Life Sciences Level 4, Maths 3 / Math Lit 4" }
    ]
  },
  {
    id: 19,
    name: "KwaZulu-Natal Department of Health Nursing",
    type: "nursing",
    province: "KwaZulu-Natal",
    minAps: 25,
    status: "Open",
    closingDate: "Check Provincial Circular",
    description: "Public nursing training program across major KZN nursing campuses.",
    requirements: "NSC Bachelor/Diploma pass with adequate achievement levels in Life Sciences and English.",
    link: "http://www.kznhealth.gov.za",
    courses: [
      { name: "General Nursing and Midwifery Diploma", minAps: 25, requirements: "Life Sciences Level 4, English Level 4" }
    ]
  },

  // ==========================================
  // BURSARIES & FUNDING
  // ==========================================
  {
    id: 20,
    name: "NSFAS Bursary Scheme",
    type: "bursary",
    province: "National",
    minAps: 0,
    status: "Open",
    closingDate: "Expected Jan 2027",
    description: "Government financial aid funding tertiary tuition, accommodation, books, and living allowances for deserving learners.",
    requirements: "South African Citizen. Combined household income must not exceed R350,000 per annum (R600,000 for students with disabilities).",
    link: "https://www.nsfas.org.za",
    courses: [
      { name: "Full Comprehensive Study Grant (All Public Fields)", minAps: 0, requirements: "Acceptance into any public university or TVET college" }
    ]
  },
  {
    id: 21,
    name: "Funza Lushaka Bursary Programme",
    type: "bursary",
    province: "National",
    minAps: 24,
    status: "Open",
    closingDate: "Annual Window",
    description: "Multi-year bursary for students pursuing a Bachelor of Education (BEd) or recognized teaching PGCE.",
    requirements: "Strong academic track record, commitment to teach at a public school upon graduation.",
    link: "https://www.funzalushaka.doe.gov.za",
    courses: [
      { name: "BEd Teaching Bursary (Priority Subjects: Maths, Science, Languages)", minAps: 24, requirements: "Admission to an approved BEd program" }
    ]
  },
  {
    id: 22,
    name: "ISFAP Bursary (Missing Middle Funding)",
    type: "bursary",
    province: "National",
    minAps: 28,
    status: "Open",
    closingDate: "Check Partner University Dates",
    description: "Comprehensive funding model for students from households earning between R350,000 and R600,000 annually.",
    requirements: "South African citizen, registration at a participating ISFAP university for scarce skills courses.",
    link: "https://www.isfap.org.za",
    courses: [
      { name: "Scarce Skills Funding (Engineering, Medicine, Actuarial, IT)", minAps: 30, requirements: "Household income between R350k - R600k" }
    ]
  },

  // ==========================================
  // LEARNERSHIPS & INTERNSHIPS
  // ==========================================
  {
    id: 23,
    name: "Capitec Bank ICT Learnership",
    type: "learnership",
    province: "National",
    minAps: 20,
    status: "Open",
    closingDate: "15 December 2026",
    description: "12-month structured skills program combining classroom learning with paid workplace experience in IT and Banking.",
    requirements: "SA Citizen aged 18-34. Grade 12 Certificate with English & Pure Maths / Mathematical Literacy.",
    link: "https://www.capitecbank.co.za/about-us/careers/",
    courses: [
      { name: "National Certificate in IT / Systems Development NQF Level 5", minAps: 20, requirements: "Matric pass with Mathematics or Mathematical Literacy" }
    ]
  }
];
