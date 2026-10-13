export interface Facility {
  id: string;
  title: string;
  facilityBadge: string;
  tagline: string;
  desc: string;
  overview: string;
  spec: string;
  image: string;
  keyFeatures: string[];
  equipmentList: string[];
  clinicalProtocols: string[];
}

export const facilitiesData: Facility[] = [
  {
    id: "operation-theatres",
    title: "Modular Operation Theatres (Major & Minor)",
    facilityBadge: "Surgical Suite Complex",
    tagline: "Sterile surgical theaters equipped for advanced operative training",
    desc: "Sterility-maintained modular surgical suites equipped for general and orthopedic surgery, fracture fixation, and minor surgical procedures[cite: 2].",
    overview:
      "The modular OT complex at Rivaura Hospital provides students of Operation Theatre & Anesthesia Technology with direct exposure to live surgical setups[cite: 1, 2]. Built under positive pressure air-handling standards, learners master sterile gowning, intraoperative instrumentation, anesthesia machine calibrations, and surgical waste containment[cite: 3].",
    spec: "Sterile Air Handling • C-Arm Ready • Surgical Consumables",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=900&auto=format&fit=crop",
    keyFeatures: [
      "Modular antimicrobial wall paneling and laminar airflow systems",
      "Dedicated multi-stage surgical scrub areas and pre-op holding bays",
      "Central surgical gas pipelines (O2, N2O, Medical Air, Suction)",
      "High-illumination shadowless LED surgical lights and hydraulic operating tables",
    ],
    equipmentList: [
      "Advanced Anesthesia Workstation with Integrated Ventilator[cite: 1]",
      "High-Frequency C-Arm Image Intensifier Unit",
      "Multi-parameter Surgical Patient Monitors",
      "Electrosurgical Cautery Generators (Monopolar & Bipolar)",
    ],
    clinicalProtocols: [
      "Aseptic field preparation and sterile draping protocols[cite: 3]",
      "Surgical safety checklist verification",
      "Sterilization indicators and autoclave tracking logs",
    ],
  },
  {
    id: "intensive-care-unit",
    title: "ICU & High-Acuity Critical Care Unit",
    facilityBadge: "4-Bed ICU Wing",
    tagline: "Continuous patient monitoring and invasive mechanical ventilation",
    desc: "4-bed Intensive Care Unit with mechanical ventilators, continuous multi-channel cardiac telemetry, infusion pumps, and defibrillator units.",
    overview:
      "The Critical Care Unit serves as the hands-on training ground for Nursing and Emergency Technology students[cite: 1]. Under the direct mentorship of senior intensivists, students learn invasive hemodynamic monitoring, arterial blood gas interpretation, and rapid resuscitation drills[cite: 3].",
    spec: "Ventilators • Cardiac Defibrillators • Infusion Pumps",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=900&auto=format&fit=crop",
    keyFeatures: [
      "24/7 dedicated bedside central telemetry stations",
      "Immediate bedside arterial blood gas (ABG) correlation",
      "Negative-pressure airborne infection isolation capacity",
      "Dedicated nurse-to-patient critical care monitoring ratio",
    ],
    equipmentList: [
      "Mechanical Intensive Care Ventilators (Invasive & Non-invasive)",
      "Biphasic Defibrillators with External Pacing",
      "Multi-channel Syringe and Volumetric Infusion Pumps",
      "Central Bedside Telemetry Monitors with Arrhythmia Detection",
    ],
    clinicalProtocols: [
      "Airway intubation assistance and suctioning hygiene[cite: 3]",
      "Cardiac arrest Code Blue emergency protocols[cite: 1, 4]",
      "Continuous vital trend documentation and critical alerts",
    ],
  },
  {
    id: "diagnostic-pathology-labs",
    title: "Automated Diagnostic Pathology Laboratories",
    facilityBadge: "Biochemistry & Hematology",
    tagline: "Automated clinical analyzers for precise pathology diagnostics",
    desc: "In-house automated lab processing full biochemistry panels, hematology, ESR, urine, and infection markers for immediate reporting.",
    overview:
      "The Central Diagnostic Laboratory handles active outpatient and inpatient hospital loads[cite: 2]. Medical Laboratory Technology (BMLT) students learn on commercial-grade automated analyzers, handling specimen accessioning, peripheral blood smears, calibration curves, and critical value reporting[cite: 1].",
    spec: "Automated Analyzers • Rapid Emergency Panels • Quality Verification",
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=900&auto=format&fit=crop",
    keyFeatures: [
      "Internal and external laboratory quality assurance protocols",
      "Barcoded sample management preventing specimen cross-contamination",
      "Emergency STAT reporting for inpatient casualty and ICU teams",
      "Biosafety cabinets for safe infectious sample handling",
    ],
    equipmentList: [
      "Automated 5-Part Differential Hematology Analyzer",
      "Fully Automated Clinical Biochemistry Analyzer",
      "Clinical Centrifuges and Precision Micro-pipetting Stations",
      "High-Resolution Binocular Research Microscopes",
    ],
    clinicalProtocols: [
      "Universal precautions and biological specimen disposal[cite: 3]",
      "Critical diagnostic alert notification protocols",
      "Daily control charting (Levey-Jennings) and calibration audits",
    ],
  },
  {
    id: "digital-radiography-imaging",
    title: "AERB-Compliant Imaging & Digital Radiography",
    facilityBadge: "Digital X-Ray & Ultrasound",
    tagline: "Radiation-shielded medical imaging and diagnostic sonography",
    desc: "Radiation safety compliant suite with Computed Radiography (CR) X-ray units and general/musculoskeletal sonography units.",
    overview:
      "Operating in strict accordance with the Atomic Energy Regulatory Board (AERB), the Imaging Suite gives Medical Imaging students practical training on high-voltage equipment, patient positioning, collimation control, radiation dose mitigation, and PACS digital archiving[cite: 1].",
    spec: "CR Digital X-Ray • General & MSK Ultrasound • AERB Radiation Safe",
    image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=900&auto=format&fit=crop",
    keyFeatures: [
      "Lead-shielded doors, viewing windows, and protective partitions",
      "AERB-certified radiation exposure monitoring with TLD badges",
      "Instant PACS digital viewing consoles for rapid medical diagnosis",
      "Dedicated musculoskeletal and abdominal ultrasound bays[cite: 2]",
    ],
    equipmentList: [
      "High-Frequency Diagnostic X-Ray Generator System",
      "Computed Radiography (CR) Digital Cassette Reader",
      "High-Resolution Color Doppler Ultrasound Machine",
      "Lead Aprons, Thyroid Shields, and Radiation Protective Gear",
    ],
    clinicalProtocols: [
      "ALARA (As Low As Reasonably Achievable) radiation principles",
      "Patient anatomical positioning for standard views",
      "Emergency trauma patient stabilization during radiological exams",
    ],
  },
  {
    id: "emergency-casualty-triage",
    title: "24/7 Emergency Casualty & Trauma Triage",
    facilityBadge: "6 Casualty Beds",
    tagline: "Immediate trauma stabilization and resuscitation suites",
    desc: "Round-the-clock emergency casualty staffed with trauma medical officers, oxygen pipelines, suction systems, and crash carts[cite: 2].",
    overview:
      "The Emergency Casualty is the front-line facility serving Pathanapuram and Areekode[cite: 2]. Emergency Medical Technology learners work alongside emergency medical officers handling trauma stabilization, acute coronary syndromes, burns, shock resuscitation, and minor surgical repair[cite: 1, 2].",
    spec: "6 Trauma Beds • Central Oxygen • Mobile Crash Carts",
    image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=900&auto=format&fit=crop",
    keyFeatures: [
      "Direct ambulance bay access with zero-delay stretcher transfers",
      "Multi-bed casualty equipped with central oxygen and suction ports",
      "Immediate connectivity to Operation Theatres and ICU wings[cite: 2]",
      "Clinical Establishment Act compliant emergency protocols[cite: 2]",
    ],
    equipmentList: [
      "Fully Equipped Emergency Resuscitation Crash Carts[cite: 1]",
      "Multi-parameter Vital Monitors with Pulse Oximetry and NIBP",
      "Central Vacuum Suction Regulators and Flowmeters",
      "Immobilization Splints, Cervical Collars, and Spine Boards",
    ],
    clinicalProtocols: [
      "Color-coded clinical triage (Red, Yellow, Green, Black)[cite: 1]",
      "Golden Hour trauma protocol and rapid cervical stabilization",
      "Emergency IV fluid resuscitation and medications administration",
    ],
  },
  {
    id: "inhouse-pharmacy",
    title: "24-Hour Licensed In-House Pharmacy",
    facilityBadge: "Round-the-Clock Pharmacy",
    tagline: "Licensed medication dispensing and cold-chain inventory",
    desc: "Fully stocked central dispensary managed by registered pharmacists with inventory and medication safety management systems.",
    overview:
      "The hospital's central dispensary provides emergency and inpatient medications 24 hours a day[cite: 2]. Students observe pharmaceutical management, cold-chain preservation of biologics and vaccines, drug interactions checks, and barcode-guided dispensing hygiene.",
    spec: "Registered Pharmacists • Emergency IV Supplies • Safe Storage",
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=900&auto=format&fit=crop",
    keyFeatures: [
      "Temperature-regulated cold storage for vaccines and critical serums",
      "Strict schedule drug records and double-check dispensing protocols",
      "Computerized inventory tracking integrated with hospital wards",
      "Dedicated patient counseling counter on medication safety",
    ],
    equipmentList: [
      "Pharmaceutical-grade Cold Storage Refrigerators (2°C - 8°C)",
      "Digital Prescription Verification and Billing Consoles",
      "Emergency Medicine Rapid Dispensing Storage Units",
      "Laminar flow preparation bench for sterile reconstitutions",
    ],
    clinicalProtocols: [
      "Five Rights of Medication Administration verification",
      "Cold-chain continuous temperature logging and backup generators",
      "High-alert medication tagging and double-verification steps",
    ],
  },
];