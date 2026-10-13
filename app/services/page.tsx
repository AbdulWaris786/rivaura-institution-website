"use client";

import Link from "next/link";
import { facilitiesData } from "../facilities/facilities-data";

export default function ServicesPage() {
  const serviceOfferings = [
    {
      id: "clinical-training",
      category: "Hospital-Based Education",
      title: "Supervised Clinical Rotations",
      subtitle: "Direct In-Hospital Bedside Patient Care",
      desc: "Structured rotations across medical, surgical, ICU, and emergency suites at Rivaura Hospital, allowing students to apply textbook knowledge to live patient triage under senior consultant supervision[cite: 3, 4].",
      features: [
        "Bedside patient care and procedural assistance[cite: 4]",
        "Emergency, Orthopaedics, and OT suite rotations[cite: 2]",
        "Supervised patient record maintenance & clinical safety protocols[cite: 3]",
      ],
      icon: (
        <svg className="w-6 h-6 text-teal-700 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      tag: "Core Practical Wing[cite: 4]",
    },
    {
      id: "skill-labs-simulation",
      category: "Practical Competence",
      title: "Skill Laboratories & Simulation Training",
      subtitle: "Procedural Muscle Memory in a Safe Environment",
      desc: "High-fidelity simulated learning environments where learners can practise catheterization, CPR, suturing, ventilator monitoring, and rapid diagnostics risk-free prior to hospital ward rotations[cite: 3, 4].",
      features: [
        "Advanced anatomical mannequins and telemetry units[cite: 3]",
        "Simulated cardiac resuscitation and trauma code drills[cite: 3]",
        "Sterile technique mastery & infection-control protocols[cite: 3, 4]",
      ],
      icon: (
        <svg className="w-6 h-6 text-teal-700 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      tag: "Stage 02 & 03 Model[cite: 4]",
    },
    {
      id: "upskilling-continuing-ed",
      category: "Lifelong Learning",
      title: "Healthcare Upskilling & Continuing Education",
      subtitle: "Lifelong Professional & Paramedical Advancement",
      desc: "Short-term competency workshops, advanced clinical updates, and evidence-based medicine modules designed to upskill working technicians, nurses, and allied healthcare staff[cite: 3, 4].",
      features: [
        "Evidence-based diabetes, trauma, and lifestyle disease modules[cite: 3]",
        "Diagnostic automation & automated lab analytics training[cite: 4]",
        "Healthcare administration and NABH clinical standards coaching[cite: 3, 4]",
      ],
      icon: (
        <svg className="w-6 h-6 text-teal-700 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      tag: "Professional Growth[cite: 4]",
    },
    {
      id: "career-competency",
      category: "Employability & Ethics",
      title: "Career Placement & Competency Verification",
      subtitle: "Preparing Confident, Ethical Practitioners",
      desc: "Rigorous competency exit exams, hospital shadowing assessments, and professional development programs ensuring graduates step immediately into hospital employment with confidence[cite: 4].",
      features: [
        "Competency assessment mapping to direct hospital roles[cite: 4]",
        "Medical ethics, compassionate communication, and bedside dignity[cite: 3, 4]",
        "Direct placement pathway via Rivaura Hospital network[cite: 2, 4]",
      ],
      icon: (
        <svg className="w-6 h-6 text-teal-700 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      tag: "Career Ready[cite: 4]",
    },
  ];

  const valuePillars = [
    {
      number: "01",
      title: "Active Hospital Integration",
      desc: "Students learn directly inside Rivaura Hospital departments instead of detached standalone classrooms[cite: 4].",
    },
    {
      number: "02",
      title: "5-Step Pedagogical Model",
      desc: "From Learn and Practise to Apply, Perform, and Excel with simulation before patient wards[cite: 4].",
    },
    {
      number: "03",
      title: "Senior Consultant Mentors",
      desc: "Clinical instruction led by verified doctors and surgeons actively treating patients daily.",
    },
    {
      number: "04",
      title: "Ethical & Compassionate Practice",
      desc: "Instilling dignity, integrity, and patient-first values as part of core grading and certification[cite: 4].",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900 pb-20 selection:bg-teal-700 selection:text-white">
      {/* =========================================================================
          LAYER 1: SERVICES HERO & 4 CORE SERVICES
      ========================================================================== */}
      <section className="relative bg-white pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-24 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-600/30 bg-teal-50 px-3.5 py-1 text-xs font-bold text-teal-800">
              <span className="h-2 w-2 rounded-full bg-teal-600 animate-pulse" />
              <span>Academic &amp; Clinical Services • Rivaura Institute[cite: 4]</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-[1.12]">
              Our Educational &amp; <br />
              <span className="bg-gradient-to-r from-teal-800 via-teal-700 to-emerald-700 bg-clip-text text-transparent">
                Clinical Services[cite: 4].
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              At Rivaura Institute of Health Sciences, our programs are engineered to bridge the gap between medical knowledge and practical clinical competence through hands-on labs, high-fidelity simulation, and supervised rotations at Rivaura Hospital[cite: 4].
            </p>

            <div className="inline-block rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs text-slate-800 font-mono font-medium shadow-2xs">
              Knowledge + Skills + Values + Experience ={" "}
              <span className="text-teal-700 font-bold">Professional Excellence[cite: 4]</span>
            </div>
          </div>

          {/* 4 Core Services Grid With Interactive Hover Animation */}
          <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {serviceOfferings.map((service) => (
              <div
                key={service.id}
                className="group relative rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8 flex flex-col justify-between shadow-2xs transition-all duration-300 ease-out hover:-translate-y-2 hover:border-teal-600/80 hover:shadow-[0_20px_40px_rgba(0,137,123,0.12)] hover:bg-white cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white border border-slate-200 shadow-2xs text-teal-700 group-hover:bg-[#00897B] group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      {service.icon}
                    </div>
                    <span className="rounded-full bg-teal-100/80 px-3 py-1 text-[10px] font-bold text-teal-800 uppercase tracking-wider border border-teal-200 group-hover:bg-[#00897B] group-hover:text-white group-hover:border-[#00897B] transition-colors duration-300">
                      {service.tag}
                    </span>
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-teal-700">
                    {service.category}
                  </span>
                  
                  <h3 className="text-xl sm:text-2xl font-black text-slate-950 mt-1 group-hover:text-teal-800 transition-colors duration-200">
                    {service.title}
                  </h3>
                  
                  <h4 className="text-xs font-semibold text-slate-500 mt-0.5">
                    {service.subtitle}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-600 mt-3.5 leading-relaxed font-normal">
                    {service.desc}
                  </p>

                  <ul className="mt-5 space-y-2 border-t border-slate-200 pt-4">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium leading-relaxed">
                        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-800 text-[10px] font-bold mt-0.5 group-hover:bg-[#00897B] group-hover:text-white transition-colors duration-300">
                          ✓
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between">
                  <Link
                    href="/contact"
                    className="group/link inline-flex items-center gap-1.5 text-xs font-bold text-teal-800 hover:text-teal-600 transition-colors"
                  >
                    <span>Inquire About This Service</span>
                    <span className="transition-transform duration-300 group-hover/link:translate-x-1.5">→</span>
                  </Link>
                  <span className="text-[10px] text-slate-400 font-mono">
                    Rivaura Academic Model[cite: 4]
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          LAYER 2: WHY CHOOSE RIVAURA (INFRASTRUCTURE & FACILITIES)
      ========================================================================== */}
      <section
        id="why-choose-section"
        className="relative bg-slate-50 py-16 sm:py-24 border-b border-slate-200"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-teal-800 bg-teal-100/80 border border-teal-200 px-3.5 py-1.5 rounded-full shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-600 animate-pulse" />
              Infrastructure &amp; Clinical Facilities[cite: 4]
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 mt-3.5 tracking-tight">
              Why Choose Rivaura Institution?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-3 max-w-2xl mx-auto leading-relaxed">
              We do not rely on isolated simulators alone. Our learners step directly into compliant, active hospital infrastructure equipped to clinical standards at Areekode, Malappuram[cite: 2, 4].
            </p>
          </div>

          {/* 4 Value Pillars With Hover Micro-Animation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
            {valuePillars.map((pillar, pIdx) => (
              <div
                key={pIdx}
                className="group rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-2xs flex flex-col justify-between transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-teal-600/50 hover:shadow-md hover:bg-teal-50/20 cursor-pointer"
              >
                <div>
                  <span className="text-xl sm:text-2xl font-black text-teal-700/50 font-mono group-hover:text-teal-700 group-hover:scale-105 transition-all duration-300 inline-block">
                    {pillar.number}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-slate-950 mt-2 group-hover:text-teal-900 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Facilities Cards Grid With Image Zoom & Float Animation */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {facilitiesData.map((fac) => (
              <div
                key={fac.id}
                className="group relative rounded-3xl border border-slate-200 bg-white overflow-hidden flex flex-col justify-between shadow-2xs transition-all duration-400 ease-out hover:-translate-y-2 hover:border-teal-600/60 hover:shadow-[0_20px_35px_rgba(15,23,42,0.12)] cursor-pointer"
              >
                <div>
                  {/* Facility Image With Zoom on Hover */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                    <img
                      src={fac.image}
                      alt={fac.title}
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
                    <span className="absolute bottom-3 left-3 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold text-teal-800 border border-slate-200/90 shadow-2xs group-hover:bg-[#00897B] group-hover:text-white group-hover:border-[#00897B] transition-colors duration-300">
                      {fac.facilityBadge}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <h3 className="text-base sm:text-lg font-bold text-slate-950 group-hover:text-teal-800 transition-colors duration-200">
                      {fac.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2.5 leading-relaxed line-clamp-2">
                      {fac.desc}
                    </p>
                    
                    <div className="mt-4 pt-3 border-t border-slate-100">
                      <span className="text-[10px] uppercase font-bold text-teal-700 block mb-1">
                        Equipment &amp; Standards
                      </span>
                      <p className="text-[11px] font-mono text-slate-700 font-medium bg-slate-50 group-hover:bg-teal-50/60 group-hover:border-teal-200 p-2 rounded-lg border border-slate-100 truncate transition-colors duration-300">
                        {fac.spec}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Visit Our Facility Button with Sliding Arrow */}
                <div className="px-6 pb-6 pt-2">
                  <Link
                    href={`/facilities/${fac.id}`}
                    className="group/btn flex items-center justify-between w-full rounded-xl bg-slate-50 hover:bg-[#00897B] text-slate-700 hover:text-white px-4 py-2.5 text-xs font-bold transition-all duration-300 border border-slate-200/80 hover:border-[#00897B] shadow-2xs active:scale-98"
                  >
                    <span>Visit Our Facility</span>
                    <span className="transition-transform duration-300 group-hover/btn:translate-x-1.5">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Regulatory Compliance Callout */}
          <div className="mt-14 rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center transition-all duration-300 hover:border-teal-600/40 hover:shadow-md">
            <div className="lg:col-span-8 space-y-3">
              <span className="inline-block rounded-md bg-emerald-50 border border-emerald-200 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-800">
                Institutional Quality &amp; Compliance Verified[cite: 4]
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-950">
                Operating Under Clinical Establishment &amp; DMO Norms[cite: 2]
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Rivaura Hospital’s campus at Pathanapuram, Areekode operates under the Clinical Establishment Act and Atomic Energy Regulatory Board (AERB) radiation safety guidelines — giving students training within a fully regulated healthcare environment[cite: 2].
              </p>
              
              <div className="pt-2 flex flex-wrap gap-2 text-xs font-medium text-slate-700">
                <span className="rounded-lg bg-slate-100 px-3 py-1 border border-slate-200">✓ AERB Compliant CR X-Ray</span>
                <span className="rounded-lg bg-slate-100 px-3 py-1 border border-slate-200">✓ Clinical Establishment Act[cite: 2]</span>
                <span className="rounded-lg bg-slate-100 px-3 py-1 border border-slate-200">✓ 24/7 DMO Licensed Casualty</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center gap-3">
              <a
                href="https://www.rivaurahospital.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center rounded-xl bg-[#00897B] px-6 py-3.5 text-xs font-bold text-white shadow-md hover:bg-[#00796B] transition-transform duration-200 hover:scale-103 active:scale-98"
              >
                Inspect Hospital Operations ↗
              </a>
              <Link
                href="/about"
                className="w-full sm:w-auto text-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-xs font-bold text-slate-800 hover:border-teal-700 hover:text-teal-700 transition-colors"
              >
                Learn About Leadership[cite: 3]
              </Link>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}