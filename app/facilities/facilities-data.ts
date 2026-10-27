export interface Facility {
  id: string;
  title: string;
  facilityBadge: string;
  desc: string;
  spec: string;
  image: string;
  overview?: string;
  features: string[];
}

export const facilitiesData: Facility[] = [
  {
    id: "nursing-foundation-lab",
    title: "Nursing Foundation & Skill Suite",
    facilityBadge: "GNM Training Suite",
    desc: "Equipped with advanced adult & pediatric training mannequins, maternal care simulators, triage beds, and central nursing monitoring consoles.",
    spec: "Bedside nursing simulation & CPR stations",
    image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=900&auto=format&fit=crop",
    overview: "Our nursing foundation lab bridges textbook clinical knowledge with bedside care protocols, patient dignity, and hands-on emergency triage skills.",
    features: [
      "High-fidelity adult & pediatric mannequins",
      "Sterile catheterization & intravenous training stations",
      "Simulated crash carts & emergency code drills",
      "Maternal care & newborn assessment setups",
    ],
  },
  {
    id: "medical-lab-tech-suite",
    title: "Medical Laboratory Technology (MLT) Lab",
    facilityBadge: "Diagnostics & Pathology",
    desc: "Complete diagnostic pathology, automated clinical biochemistry analyzers, cell counters, and microbiology culture incubators.",
    spec: "Automated hematology & biochemistry analyzers",
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=900&auto=format&fit=crop",
    overview: "State-of-the-art diagnostic testing stations where learners master specimen triage, automated blood counts, bacterial culture protocols, and biochemical profiling.",
    features: [
      "Automated clinical biochemistry analyzers",
      "Binocular medical microscopes with digital display",
      "Bacteriology incubation & sterile laminar airflow hood",
      "Blood grouping & cross-matching stations",
    ],
  },
  {
    id: "medical-imaging-suite",
    title: "Radiology & Medical Imaging (MIT) Suite",
    facilityBadge: "Radiology & Imaging",
    desc: "Digital CR/DR radiography consoles, high-resolution ultrasound machines, and PACS viewing workstations for radiography imaging training.",
    spec: "Digital radiography & ultrasound workstations",
    image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=900&auto=format&fit=crop",
    overview: "Equipped to adhere to radiation safety protocols, teaching students image positioning, exposure factor calculation, and digital image acquisition.",
    features: [
      "Digital CR/DR image workstation simulators",
      "Ultrasound scanning protocol demonstrations",
      "AERB compliant radiation safety gear & lead shielding",
      "PACS diagnostic viewing monitors",
    ],
  },
  {
    id: "anaesthesia-ot-suite",
    title: "Operation Theatre & Anaesthesia Tech Lab",
    facilityBadge: "Surgical & Anaesthesia",
    desc: "Sterile surgical mock suites with multi-gas anaesthetic machines, surgical illumination lights, laparoscopy trainers, and ventilators.",
    spec: "Anaesthesia machines & sterile surgical stations",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=900&auto=format&fit=crop",
    overview: "Simulates live operation theatre environments to teach students scrub techniques, surgical instrument preparation, and anaesthesia workstation setup.",
    features: [
      "Anaesthesia gas delivery workstation & vaporizers",
      "Intraoperative surgical monitors & pulse oximeters",
      "Sterilization autoclaves & laparoscopic mock setups",
      "Ventilator parameter monitoring & airway carts",
    ],
  },
  {
    id: "pharmacy-dispensing-lab",
    title: "Pharmacy & Pharmacognosy Laboratory",
    facilityBadge: "D.Pharm Station",
    desc: "Formulation and compounding counters, analytical balances, hospital medication storage cabinets, and prescription dispensing models.",
    spec: "Prescription dispensing & compounding equipment",
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=900&auto=format&fit=crop",
    overview: "Designed for hands-on pharmaceutical compounding, cold-chain medicine management, and professional prescription dispensing.",
    features: [
      "Analytical weighing balances & compounding counters",
      "Hospital drug store cold-chain storage cabinets",
      "Prescription review & drug interaction checking bays",
      "Pharmacognosy specimen analysis stations",
    ],
  },
  {
    id: "critical-care-simulation",
    title: "Critical Care & Resuscitation Center",
    facilityBadge: "ICU Simulation",
    desc: "Multi-parameter telemetry monitors, defibrillators, mechanical ventilators, and emergency resuscitation crash carts.",
    spec: "Advanced cardiac telemetry & life-support units",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=900&auto=format&fit=crop",
    overview: "Prepares students for high-pressure ICU and emergency room scenarios with live telemetry simulations, CPR drills, and ventilator monitoring.",
    features: [
      "Mechanical ICU ventilators & oxygen supply simulators",
      "Multi-lead cardiac telemetry monitors",
      "Automated External Defibrillator (AED) practice units",
      "Emergency airway management & intubation models",
    ],
  },
];