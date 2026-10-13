export interface Specialist {
  id: string;
  name: string;
  profession: string;
  degrees: string;
  hospitalDept: string;
  experience: string;
  biography: string;
  specializations: string[];
  clinicalHighlights: string[];
  image: string;
}

export const specialistsData: Specialist[] = [
  {
    id: "dr-sreekala-kn",
    name: "Dr. Sreekala K. N.",
    profession: "Professor & Chief of Clinical Surgery",
    degrees: "MBBS, DPH, MD",
    hospitalDept: "Department of Surgical Sciences - Rivaura Hospital",
    experience: "18+ Years Clinical & Academic Experience",
    biography:
      "Dr. Sreekala K. N. is a veteran surgeon and clinical educator directing surgical teaching modules at Rivaura Hospital. She mentors post-graduate surgical trainees and allied healthcare professionals in sterile suite preparation, advanced wound triage, and procedural safety.",
    specializations: [
      "Clinical Surgery & Operative Anatomy",
      "Public Health & Infection Control Protocols",
      "Surgical Suite Sterilization & Technique",
      "Trauma & Emergency Surgical Stabilization",
    ],
    clinicalHighlights: [
      "Head of Surgical Training & Mentorship at Rivaura Hospital",
      "Published clinical research in infection-control governance",
      "Direct supervisor for Operation Theatre Technology certifications",
    ],
    image: "/Dr-Sreekala-KN.webp",
  },
  {
    id: "dr-sanjeev-s-chandran",
    name: "Dr. Sanjeev S. Chandran",
    profession: "Dean & Head of Nursing Academics",
    degrees: "MBBS, DNB, MNAMS",
    hospitalDept: "Medical Director",
    experience: "20+ Years Executive & Critical Care Leadership",
    biography:
      "Serving as Medical Director at Rivaura Hospital and Dean of Academics, Dr. Sanjeev leads curriculum innovation across nursing and paramedical faculties. His focus is bridging high-acuity intensive care practice with bedside patient care ethics.",
    specializations: [
      "Critical Care Medicine & Resuscitation",
      "Hospital Administration & Accreditation Standards",
      "Clinical Patient Safety Protocols",
      "Advanced ICU Telemetry & Nursing Coordination",
    ],
    clinicalHighlights: [
      "Member of the National Academy of Medical Sciences (MNAMS)",
      "Chief Architect of Rivaura's 5-Step Practical Learning Model",
      "Lead Overseer for Hospital Nursing Rotations",
    ],
    image: "/Dr-Sanjeev-s-chandran.webp",
  },
  {
    id: "dr-sreelakshmi-ps",
    name: "Dr. Sreelakshmi PS",
    profession: "Senior Consultant Cardiologist & Academic Mentor",
    degrees: "MBBS, MS, DNB, ENT",
    hospitalDept: "Senior Consultant ENT Surgeon",
    experience: "14+ Years Specialized Surgical Practice",
    biography:
      "Dr. Sreelakshmi is a renowned Head & Neck / ENT Surgeon dedicated to clinical training in diagnostics, endoscopies, and delicate microsurgical equipment. She coaches students on bedside communication, patient empathy, and diagnostic clarity.",
    specializations: [
      "Otorhinolaryngology & Head-Neck Surgery",
      "Diagnostic Endoscopy & Audiology Coordination",
      "Clinical Simulation & Procedural Safety",
      "Pediatric ENT & Outpatient Minor Procedures",
    ],
    clinicalHighlights: [
      "Senior Consultant ENT Surgeon at Rivaura Hospital",
      "Director of Diagnostics Simulation Practicums",
      "Fellowship mentor for allied health ear-nose-throat diagnostic trainees",
    ],
    image: "/Dr.SREELAKSHMI PS.webp",
  },
  {
    id: "dr-francis-johnson",
    name: "Dr. Francis Johnson",
    profession: "Director of Diagnostic Pathology & Simulation Labs",
    degrees: "MBBS, MS",
    hospitalDept: "Orthopedic Surgeon",
    experience: "16+ Years Orthopedic & Diagnostic Surgery",
    biography:
      "Dr. Francis Johnson leads diagnostic laboratory integration and musculoskeletal clinical skills training. His classes emphasize radiology reading, fracture splinting, laboratory verification, and joint rehabilitation mechanics.",
    specializations: [
      "Orthopedic Surgery & Trauma Fixation",
      "Diagnostic Imaging & Radiology Correlation",
      "Musculoskeletal Rehabilitation Protocols",
      "Surgical Technology & Sterile Implant Preparation",
    ],
    clinicalHighlights: [
      "Chief Orthopedic Consultant at Rivaura Hospital",
      "Mentor for Medical Laboratory and Radiology Fellows",
      "Published author on joint arthroplasty outcomes and rehabilitation",
    ],
    image: "/Dr-Francis-Johnson.webp",
  },
];