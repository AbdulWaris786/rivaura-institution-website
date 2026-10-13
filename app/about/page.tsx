"use client";

import Link from "next/link";

export default function AboutPage() {
  const coreValues = [
    {
      letter: "C",
      name: "Compassion",
      desc: "We put people at the heart of healthcare. We nurture empathy, kindness, dignity, and respect towards every patient and every individual[cite: 3].",
    },
    {
      letter: "Q",
      name: "Quality",
      desc: "We pursue excellence in education, training, and professional practice, with a continuous commitment to improvement[cite: 3].",
    },
    {
      letter: "I",
      name: "Integrity",
      desc: "We uphold honesty, transparency, accountability, and ethical conduct in everything we do[cite: 3].",
    },
    {
      letter: "E",
      name: "Excellence",
      desc: "We encourage every learner and faculty member to perform at their best and strive for genuine professional competence[cite: 3].",
    },
    {
      letter: "R",
      name: "Respect",
      desc: "We respect every learner, patient, faculty member, and colleague, regardless of background or circumstances[cite: 3].",
    },
    {
      letter: "I",
      name: "Innovation",
      desc: "We embrace modern technology, new ideas, simulation-based learning, and progressive healthcare education methods[cite: 3].",
    },
    {
      letter: "S",
      name: "Service",
      desc: "We believe healthcare is ultimately a profession of service. We prepare learners to serve patients and society with responsibility[cite: 3].",
    },
    {
      letter: "A",
      name: "Accessibility",
      desc: "We believe quality education and opportunities to upskill should not be limited by background, making training accessible to all deserving learners[cite: 3].",
    },
    {
      letter: "L",
      name: "Lifelong Learning",
      desc: "Healthcare continuously evolves. We encourage curiosity, ongoing upskilling, and professional development throughout one's career[cite: 3].",
    },
  ];

  const learningSteps = [
    {
      step: "01",
      title: "Classroom Learning",
      action: "Learn",
      desc: "Scientific foundation, anatomical theory, and medical science understanding[cite: 2, 3].",
    },
    {
      step: "02",
      title: "Skill Laboratory",
      action: "Practise",
      desc: "Developing muscle memory and procedural accuracy on medical equipment[cite: 2, 3].",
    },
    {
      step: "03",
      title: "Simulation Training",
      action: "Apply",
      desc: "Scenario-based simulation drills in a risk-free, controlled clinical environment[cite: 2, 3].",
    },
    {
      step: "04",
      title: "Supervised Clinical Exposure",
      action: "Perform",
      desc: "Active patient ward, ICU, and OT rotations at Rivaura Hospital under consultants[cite: 2, 3].",
    },
    {
      step: "05",
      title: "Competency Assessment",
      action: "Excel",
      desc: "Structured evaluation of ethics, clinical safety, and real-world bedside confidence[cite: 2, 3].",
    },
  ];

  const hospitalHighlights = [
    {
      title: "24/7 Emergency Casualty",
      badge: "Trauma Care",
      desc: "Round-the-clock emergency medical officers, trauma triage bays, central oxygen lines, and resuscitation crash carts[cite: 1].",
      image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=900&auto=format&fit=crop",
    },
    {
      title: "Modular Operation Theatres",
      badge: "Surgical Suites",
      desc: "Positive-pressure sterile suites equipped for orthopaedics, general surgery, and emergency interventions[cite: 1].",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=900&auto=format&fit=crop",
    },
    {
      title: "4-Bed High-Acuity ICU",
      badge: "Critical Care",
      desc: "Mechanical ventilators, multi-channel central telemetry monitors, infusion pumps, and defibrillator setups.",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=900&auto=format&fit=crop",
    },
    {
      title: "Automated Diagnostic Labs",
      badge: "Pathology & Biochemistry",
      desc: "Clinical biochemistry, hematology, and microbiology analyzers delivering rapid emergency diagnostic panels[cite: 1].",
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=900&auto=format&fit=crop",
    },
    {
      title: "AERB-Compliant Imaging",
      badge: "Radiology Unit",
      desc: "Radiation-safe CR digital X-ray units and sonography imaging bays adhering to AERB protocols.",
      image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=900&auto=format&fit=crop",
    },
    {
      title: "24-Hour In-House Pharmacy",
      badge: "Central Dispensary",
      desc: "Licensed dispensary providing temperature-controlled cold-chain medication storage and emergency drugs.",
      image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=900&auto=format&fit=crop",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900 pb-20 selection:bg-teal-700 selection:text-white">
      {/* =========================================================================
          LAYER 1: ABOUT US (CONTENT LEFT, IMAGE RIGHT)
      ========================================================================== */}
      <section className="relative bg-white pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-24 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* LEFT COLUMN: Narrative */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-teal-600/30 bg-teal-50 px-3.5 py-1 text-xs font-bold text-teal-800">
                <span className="h-2 w-2 rounded-full bg-teal-600 animate-pulse" />
                <span>About Rivaura Institute of Health Sciences[cite: 3]</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-[1.12]">
                Learn Today. <br />
                <span className="bg-gradient-to-r from-teal-800 via-teal-700 to-emerald-700 bg-clip-text text-transparent">
                  Excel Tomorrow[cite: 3].
                </span>
              </h1>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                Rivaura Institute of Health Sciences is envisioned as a centre for quality healthcare education, skill development, and professional excellence, with the aim of creating competent, compassionate, and confident healthcare professionals[cite: 3].
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Our programmes bridge the gap between classroom theory and practical competence through structured curriculum delivery, hands-on skill laboratories, simulation-based training, and direct supervised clinical exposure inside Rivaura Hospital at Pathanapuram, Areekode[cite: 1, 3].
              </p>

              {/* Vision & Mission Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-2xs">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-teal-800 block mb-1.5">
                    Our Vision
                  </span>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    “To empower every learner with quality education, practical skills, and professional values, creating competent healthcare professionals who excel in their fields and contribute to a healthier future[cite: 3].”
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-2xs">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-teal-800 block mb-1.5">
                    Our Mission
                  </span>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    “To provide accessible, quality-driven healthcare education with modern learning amenities and clinical exposure, establishing Rivaura as a benchmark in healthcare education by 2030[cite: 3].”
                  </p>
                </div>
              </div>

              {/* Educational Promise Ribbon */}
              <div className="rounded-xl border border-slate-200 bg-teal-50/60 p-4 shadow-2xs">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-teal-800 block mb-1">
                  Our Educational Promise
                </span>
                <p className="font-mono text-xs sm:text-sm text-slate-900 font-bold">
                  Knowledge + Skills + Values + Experience ={" "}
                  <span className="text-teal-700">Professional Excellence[cite: 3]</span>
                </p>
              </div>

              {/* Actions */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3.5">
                <Link
                  href="/services"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#00897B] px-7 py-3 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-[#00796B] transition active:scale-95"
                >
                  <span>Explore Academic Services</span>
                  <span>→</span>
                </Link>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-7 py-3 text-xs sm:text-sm font-bold text-slate-800 hover:border-teal-700 hover:text-teal-700 transition active:scale-95 shadow-2xs"
                >
                  <span>Contact Campus Office</span>
                  <span>↗</span>
                </Link>
              </div>
            </div>

            {/* RIGHT COLUMN: Campus Image with Badges */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200/90 bg-white shadow-xl">
                  <div className="aspect-[4/4.8] w-full relative overflow-hidden bg-slate-100">
                    <img
                      src="/building-photo-one.jpeg"
                      alt="Rivaura Institute of Health Sciences Campus"
                      className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/20 to-transparent" />
                  </div>

                  <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                    <span className="inline-block rounded-md bg-[#00897B] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider mb-2">
                      Academic Campus
                    </span>
                    <h3 className="text-base sm:text-lg font-black leading-snug">
                      Rivaura Institute of Health Sciences[cite: 3]
                    </h3>
                    <p className="text-xs text-slate-200 mt-1 leading-relaxed">
                      Integrated clinical campus affiliated with Rivaura Hospital at Pathanapuram, Areekode, Malappuram[cite: 1].
                    </p>
                  </div>
                </div>

                <div className="absolute -top-4 -left-2 sm:-left-4 rounded-2xl border border-teal-200 bg-white p-3.5 shadow-lg flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 border border-teal-200 text-teal-800 font-black text-sm">
                    ✓
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">5-Step Practical Model[cite: 3]</div>
                    <div className="text-[10px] text-teal-700 font-medium">Learn → Practise → Excel[cite: 3]</div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -right-2 sm:-right-4 rounded-2xl border border-slate-200 bg-white/95 backdrop-blur-md px-4 py-2.5 shadow-lg flex items-center gap-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold text-slate-800">
                    Clinical Establishment Act Compliant[cite: 1]
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          LAYER 2: CORE VALUES
      ========================================================================== */}
      <section className="relative bg-slate-50 py-16 sm:py-24 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-teal-800 bg-teal-100/80 border border-teal-200 px-3.5 py-1.5 rounded-full shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-600 animate-pulse" />
              Institutional Guiding Principles[cite: 3]
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 mt-3.5 tracking-tight">
              Our Core Values[cite: 3]
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-3 max-w-2xl mx-auto leading-relaxed">
              Every programme, clinical rotation, and student interaction at Rivaura is grounded in ethical principles designed to create competent, compassionate, and character-driven professionals[cite: 3].
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {coreValues.map((val, idx) => (
              <div
                key={idx}
                className="group relative rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-2xs flex flex-col justify-between transition-all duration-300 ease-out hover:-translate-y-2 hover:border-teal-600/70 hover:shadow-xl cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-50 border border-teal-200 text-teal-800 font-mono font-black text-lg group-hover:bg-[#00897B] group-hover:text-white transition-colors duration-300 shadow-2xs">
                      {val.letter}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-teal-700 transition-colors">
                      Value {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-950 group-hover:text-teal-800 transition-colors duration-200">
                    {val.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed font-normal">
                    {val.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                    Rivaura Ethics
                  </span>
                  <span className="text-teal-700 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Core Standard →
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-3xl border border-teal-200/90 bg-teal-50/70 p-6 sm:p-10 text-center max-w-4xl mx-auto shadow-2xs">
            <span className="inline-block rounded-md bg-teal-700 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white mb-2">
              Our Core Belief[cite: 3]
            </span>
            <blockquote className="text-base sm:text-xl font-black text-slate-950 leading-relaxed mt-2">
              “We don’t just teach a course. We build competence, confidence, and character[cite: 3].”
            </blockquote>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              At Rivaura Institute of Health Sciences, our purpose is not simply to produce certificate holders, but to create quality professionals who can make a difference[cite: 3].
            </p>
          </div>

        </div>
      </section>

      {/* =========================================================================
          LAYER 3: OVERVIEW OF RIVAURA INSTITUTION (WITH LAB IMAGERY)
      ========================================================================== */}
      <section className="relative bg-white py-16 sm:py-24 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-3.5 mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-teal-800 bg-teal-50 border border-teal-200 px-3.5 py-1.5 rounded-full shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-600" />
              Academic Architecture[cite: 3]
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
              Overview of Rivaura Institution
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Rivaura Institute of Health Sciences brings together rigorous classroom sciences, high-fidelity simulation laboratories, and direct hospital ward attachments[cite: 2, 3].
            </p>
          </div>

          {/* Featured Visual Banner for the Academic Institute */}
          <div className="rounded-3xl border border-slate-200 bg-slate-50 overflow-hidden shadow-sm mb-12 grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-5 relative h-64 sm:h-80 lg:h-full min-h-[260px] overflow-hidden bg-slate-200">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop"
                alt="Rivaura Medical Simulation Lab"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-bold uppercase tracking-widest bg-teal-800/90 px-2.5 py-1 rounded backdrop-blur-md">
                  Simulation & Practical Labs[cite: 2, 3]
                </span>
                <p className="text-xs text-slate-200 mt-1 font-medium">High-fidelity procedural skill training before live clinical wards[cite: 2, 3]</p>
              </div>
            </div>

            <div className="lg:col-span-7 p-6 sm:p-10 space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 bg-teal-100/80 border border-teal-200 px-2.5 py-0.5 rounded-full">
                Benchmark Standard[cite: 3]
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-950">
                Bridging Knowledge, Simulation, and Real-World Medicine[cite: 2, 3]
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Under the academic leadership of Dr. Sreekala K N (Head of Institution & Assistant Medical Director of Rivaura Hospital), our learning ecosystem gives trainees access to continuous mentorship, bedside case correlation, and hands-on skill verification[cite: 2, 3].
              </p>

              <div className="pt-2 flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                <span className="rounded-lg bg-white px-3 py-1.5 border border-slate-200 shadow-2xs">
                  ✓ Supervised Hospital Rotations[cite: 3]
                </span>
                <span className="rounded-lg bg-white px-3 py-1.5 border border-slate-200 shadow-2xs">
                  ✓ High-Fidelity Mannequins[cite: 3]
                </span>
                <span className="rounded-lg bg-white px-3 py-1.5 border border-slate-200 shadow-2xs">
                  ✓ Continuous Practical Verification[cite: 3]
                </span>
              </div>
            </div>
          </div>

          {/* Institutional Pillars Grid with Accompanying Imagery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
            <div className="group rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-2xs flex flex-col justify-between transition-all duration-300 hover:border-teal-600/50 hover:shadow-lg">
              <div>
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=800&auto=format&fit=crop"
                    alt="Clinical Medical Science"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                  <span className="absolute bottom-3 left-3 rounded-full bg-white/95 px-2.5 py-0.5 text-[10px] font-bold text-teal-800">
                    Pillar 01
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-950">
                    Pedagogical Integrity
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                    Education aligned with hospital protocols, safety guidelines, evidence-based practices, and continuous assessment benchmarks[cite: 2, 3].
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0 text-xs font-bold text-teal-800">
                Knowledge & Clinical Science[cite: 2] →
              </div>
            </div>

            <div className="group rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-2xs flex flex-col justify-between transition-all duration-300 hover:border-teal-600/50 hover:shadow-lg">
              <div>
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=800&auto=format&fit=crop"
                    alt="Simulation Skill Labs"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                  <span className="absolute bottom-3 left-3 rounded-full bg-white/95 px-2.5 py-0.5 text-[10px] font-bold text-teal-800">
                    Pillar 02
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-950">
                    Simulation Skill Labs
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                    Dedicated procedural laboratories with anatomical mannequins, telemetry simulators, and emergency equipment for repeatable practice[cite: 2, 3].
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0 text-xs font-bold text-teal-800">
                Safe Procedural Mastery[cite: 2, 3] →
              </div>
            </div>

            <div className="group rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-2xs flex flex-col justify-between transition-all duration-300 hover:border-teal-600/50 hover:shadow-lg">
              <div>
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=800&auto=format&fit=crop"
                    alt="Rivaura 2030 Roadmap"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                  <span className="absolute bottom-3 left-3 rounded-full bg-white/95 px-2.5 py-0.5 text-[10px] font-bold text-teal-800">
                    Pillar 03
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-950">
                    Rivaura 2030 Benchmark
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                    Committed to establishing the institution as a pioneer in quality, practical excellence, accessible education, and employable graduates by 2030[cite: 3].
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0 text-xs font-bold text-teal-800">
                Strategic Milestone[cite: 3] →
              </div>
            </div>
          </div>

          {/* 5-Step Learning Model Full Breakdown */}
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-10 lg:p-12 shadow-sm">
            <div className="max-w-2xl mb-8">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-teal-800 bg-teal-100/80 px-3 py-1 rounded-full border border-teal-200 inline-block">
                The Practical Framework[cite: 3]
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-950 mt-3">
                Our 5-Step Learning Model: LEARN → EXCEL[cite: 3]
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                A seamless pathway transitioning learners from scientific fundamentals to competent, ethical practitioners[cite: 2, 3].
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {learningSteps.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-white p-5 flex flex-col justify-between shadow-2xs"
                >
                  <div>
                    <span className="text-xs font-mono font-bold text-teal-700">
                      Step {item.step}
                    </span>
                    <span className="block text-[10px] font-extrabold uppercase tracking-wider text-slate-400 mt-0.5">
                      {item.action}
                    </span>
                    <h4 className="text-sm font-bold text-slate-950 mt-2">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          LAYER 4: OVERVIEW OF RIVAURA HOSPITAL (WITH FACILITY PHOTOGRAPHY)
      ========================================================================== */}
      <section className="relative bg-slate-50 py-16 sm:py-24 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-14 sm:mb-20">
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-teal-800 bg-teal-100/80 border border-teal-200 px-3.5 py-1.5 rounded-full shadow-2xs">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-600 animate-pulse" />
                Clinical Partner & Hospital Infrastructure[cite: 1]
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
                Overview of Rivaura Hospital
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                Rivaura Hospital is a multispeciality hospital serving Pathanapuram, Areekode, and surrounding communities in Malappuram[cite: 1]. It serves as the primary teaching hospital for the institute, providing active clinical beds, emergency units, and specialized operative departments[cite: 1, 3].
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Operating in strict compliance with the Clinical Establishment Act and DMO licensing regulations, the hospital delivers quality, affordable, and round-the-clock emergency care across Orthopaedics, General Surgery, Family Medicine, and diagnostics[cite: 1].
              </p>

              <div className="pt-2 flex flex-wrap gap-2.5 text-xs font-semibold text-slate-700">
                <span className="rounded-xl bg-white px-3.5 py-2 border border-slate-200 shadow-2xs">
                  ✓ 24/7 Emergency Casualty[cite: 1]
                </span>
                <span className="rounded-xl bg-white px-3.5 py-2 border border-slate-200 shadow-2xs">
                  ✓ Clinical Establishment Act Compliant[cite: 1]
                </span>
                <span className="rounded-xl bg-white px-3.5 py-2 border border-slate-200 shadow-2xs">
                  ✓ Pathanapuram, Areekode[cite: 1]
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl border-2 border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-4">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-teal-800 block">
                  Hospital Quick Facts[cite: 1]
                </span>
                <h3 className="text-lg font-bold text-slate-950">
                  Nearest Multispeciality Centre in Areekode[cite: 1]
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Designed to deliver high-quality, accessible medical care to the local community with dedicated outpatient suites, operating theatres, diagnostic imaging, and licensed round-the-clock emergency support[cite: 1].
                </p>
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href="https://www.rivaurahospital.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-800 hover:text-teal-600 transition"
                  >
                    <span>Visit Hospital Website</span>
                    <span>↗</span>
                  </a>
                  <span className="text-[10px] text-slate-400 font-mono">
                    Areekode, Malappuram[cite: 1]
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 6 Hospital Infrastructure Cards WITH DEPARTMENT PHOTOGRAPHY */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {hospitalHighlights.map((fac, idx) => (
              <div
                key={idx}
                className="group relative rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-2xs flex flex-col justify-between transition-all duration-300 ease-out hover:-translate-y-2 hover:border-teal-600/60 hover:shadow-xl cursor-pointer"
              >
                <div>
                  {/* Department Photograph */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                    <img
                      src={fac.image}
                      alt={fac.title}
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent" />
                    <span className="absolute bottom-3 left-3 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold text-teal-800 border border-slate-200/90 shadow-2xs group-hover:bg-[#00897B] group-hover:text-white transition-colors duration-300">
                      {fac.badge}
                    </span>
                  </div>

                  {/* Text details */}
                  <div className="p-6">
                    <div className="text-[10px] font-mono text-slate-400 mb-1">
                      Rivaura Hospital[cite: 1]
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-950 group-hover:text-teal-800 transition-colors">
                      {fac.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed line-clamp-3">
                      {fac.desc}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-0">
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-500 text-[11px]">
                      Clinical Learning Wing[cite: 3]
                    </span>
                    <Link
                      href="/services#why-choose-section"
                      className="font-bold text-teal-800 hover:text-teal-600 transition"
                    >
                      Tour Unit →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Hospital Integration Banner */}
          <div className="mt-14 rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <span className="inline-block rounded-md bg-teal-50 border border-teal-200 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-teal-800">
                Education & Healthcare Connected[cite: 2, 3]
              </span>
              <h3 className="text-base sm:text-lg font-bold text-slate-950 mt-1">
                A Unified Ecosystem of Clinical Care and Education[cite: 2]
              </h3>
              <p className="text-xs text-slate-600 max-w-2xl leading-relaxed">
                Learners train inside active wards where medical ethics, infection control, and real patient interactions happen every day[cite: 2, 3].
              </p>
            </div>

            <Link
              href="/contact"
              className="shrink-0 rounded-xl bg-[#00897B] px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-[#00796B] transition active:scale-95"
            >
              Contact Admissions
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}