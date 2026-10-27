export interface Specialist {
  id: string;
  name: string;
  profession: string;
  degrees: string;
  hospitalDept: string;
  image: string;
  bio?: string;
}

export const specialistsData: Specialist[] = [
  {
    id: "dr-sreekala-kn",
    name: "Dr. Sreekala K N",
    profession: "Head of Institution & Senior Faculty Mentor",
    degrees: "MBBS, DGO, MD",
    hospitalDept: "Department of Clinical Health Sciences",
    image: "Dr-Sreekala-KN.webp",
    bio: "Guiding the academic and practical clinical curriculum across all institutional diploma and degree pathways.",
  },
  {
    id: "dr-francis-johnson",
    name: "Dr. Francis Johnson",
    profession: "Professor of Emergency & Critical Care",
    degrees: "MBBS, MEM",
    hospitalDept: "Department of Emergency Medicine",
    image: "Dr-Francis-Johnson.webp",
    bio: "Specializing in high-fidelity trauma simulation, rapid resuscitation protocols, and acute critical care training.",
  },
  {
    id: "dr-sanjeev-s-chandran",
    name: "Dr. Sanjeev S Chandran",
    profession: "Senior Consultant & Surgical Sciences Faculty",
    degrees: "MBBS, MS (Ortho)",
    hospitalDept: "Department of Surgical Sciences",
    image: "Dr-Sanjeev-s-chandran.webp",
    bio: "Mentoring students in surgical suite management, sterilization mechanics, and orthopaedic procedural assistance.",
  },
  {
    id: "dr-sreelakshmi-ps",
    name: "Dr. Sreelakshmi P S",
    profession: "Consultant Physician & Academic Mentor",
    degrees: "MBBS, MD (General Medicine)",
    hospitalDept: "Department of Diagnostic Medicine",
    image: "Dr.SREELAKSHMI PS.webp",
    bio: "Overseeing diagnostic case correlation, clinical pathology principles, and bedside ethics instruction.",
  },
];