export interface Course {
  id: string;
  code: string;
  title: string;
  fullName: string;
  duration: string;
  eligibility: string;
  badge: string;
  description: string;
  highlights: string[];
}

export const coursesData: Course[] = [
  {
    id: "gnm",
    code: "GNM",
    title: "General Nursing and Midwifery",
    fullName: "General Nursing and Midwifery (GNM)",
    duration: "3 Years",
    eligibility: "+2 Any Group",
    badge: "Clinical Core",
    description:
      "Comprehensive clinical nursing foundation covering bedside patient care, maternity and midwifery, emergency triage, and pharmacology.",
    highlights: [
      "Bedside clinical rotation & patient triage",
      "Maternal & child healthcare training",
      "Free internship at a reputed hospital",
      "Assured paramedical registration",
    ],
  },
  {
    id: "bsc-mlt",
    code: "B.Sc MLT",
    title: "Medical Laboratory Technology",
    fullName: "B.Sc. Medical Laboratory Technology",
    duration: "4 Years",
    eligibility: "+2 Science",
    badge: "Diagnostics",
    description:
      "Advanced clinical biochemistry, pathology, automated hematology, microbiological culture testing, and molecular diagnostic procedures.",
    highlights: [
      "Automated hematology & biochemistry analyzers",
      "Clinical microbiology & blood banking",
      "Diagnostic specimen triage & reporting",
      "Free hospital-based internship",
    ],
  },
  {
    id: "bsc-mit",
    code: "B.Sc MIT",
    title: "Medical Imaging Technology",
    fullName: "B.Sc. Medical Imaging Technology",
    duration: "4 Years",
    eligibility: "+2 Science",
    badge: "Radiology & Imaging",
    description:
      "Technical mastery of advanced imaging modalities including Digital Radiography (CR/DR), Multi-slice CT, MRI consoles, and Ultrasonography.",
    highlights: [
      "Hands-on MRI & CT protocol training",
      "Radiation safety and AERB compliance",
      "Sonography imaging assistance",
      "Clinical hospital imaging attachments",
    ],
  },
  {
    id: "bsc-at-ot",
    code: "B.Sc AT & OT",
    title: "Anaesthesia & Operation Theatre Tech",
    fullName: "B.Sc. Anaesthesia Technology & Operation Theatre Technology",
    duration: "4 Years",
    eligibility: "+2 Science",
    badge: "Surgical Suite",
    description:
      "Surgical theatre sterilization, anaesthesia workstation setup, telemetry monitoring, laparoscopy assistance, and ICU ventilator support.",
    highlights: [
      "Sterile OT suite maintenance & instrument prep",
      "Anaesthesia gas workstation monitoring",
      "Direct surgical assistance in active procedures",
      "Critical care ventilator management",
    ],
  },
  {
    id: "d-pharm",
    code: "D Pharm",
    title: "Diploma in Pharmacy",
    fullName: "Diploma in Pharmacy (D.Pharm)",
    duration: "2 Years",
    eligibility: "+2 Science",
    badge: "Pharmacy",
    description:
      "Pharmaceutical chemistry, prescription compounding, drug dispensing protocols, hospital store cold-chain management, and patient counseling.",
    highlights: [
      "Prescription reading & dispensing drills",
      "Pharmacology mechanisms & dosage calculation",
      "Hospital inventory & cold-chain management",
      "Drug formulation laboratory practicals",
    ],
  },
  {
    id: "d-mlt",
    code: "D MLT",
    title: "Diploma in Medical Laboratory Technology",
    fullName: "Diploma in Medical Laboratory Technology (DMLT)",
    duration: "2 Years",
    eligibility: "+2 Science",
    badge: "Laboratory Science",
    description:
      "Fundamental diagnostic laboratory skills, blood grouping, clinical microscopy, sample handling, and biochemical testing.",
    highlights: [
      "Routine clinical pathology techniques",
      "Specimen collection & safe processing",
      "Urine, blood & body fluid analysis",
      "Laboratory quality assurance & safety",
    ],
  },
];