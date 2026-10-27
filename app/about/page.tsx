"use client";

import Link from "next/link";
import { facilitiesData } from "../facilities/facilities-data";
import { coursesData } from "../courses/courses-data";

export default function AboutPage() {
  const coreValues = [
    {
      letter: "C",
      name: "Compassion",
      desc: "We put people at the heart of healthcare, nurturing empathy, kindness, dignity, and respect towards every patient.",
    },
    {
      letter: "Q",
      name: "Quality",
      desc: "We pursue excellence in education, training, and professional practice, with a continuous commitment to improvement.",
    },
    {
      letter: "I",
      name: "Integrity",
      desc: "We uphold honesty, transparency, accountability, and ethical conduct in all academic and clinical interactions.",
    },
    {
      letter: "E",
      name: "Excellence",
      desc: "We encourage every learner and faculty member to perform at their best and strive for genuine professional competence.",
    },
    {
      letter: "R",
      name: "Respect",
      desc: "We respect every learner, patient, faculty member, and colleague, regardless of background or circumstances.",
    },
    {
      letter: "I",
      name: "Innovation",
      desc: "We embrace modern technology, new ideas, simulation-based learning, and progressive healthcare education methods.",
    },
    {
      letter: "S",
      name: "Service",
      desc: "We believe healthcare is ultimately a profession of service, preparing learners to serve patients and society with responsibility.",
    },
    {
      letter: "A",
      name: "Accessibility",
      desc: "We believe quality education and upskilling should not be limited by background, making training accessible to all deserving learners.",
    },
    {
      letter: "L",
      name: "Lifelong Learning",
      desc: "Healthcare continuously evolves. We encourage curiosity, ongoing upskilling, and professional development throughout one's career.",
    },
  ];

  const learningSteps = [
    {
      step: "01",
      title: "Classroom Learning",
      action: "Learn",
      desc: "Scientific foundation, anatomical theory, and medical science understanding.",
    },
    {
      step: "02",
      title: "Skill Laboratory",
      action: "Practise",
      desc: "Developing muscle memory and procedural accuracy on medical equipment.",
    },
    {
      step: "03",
      title: "Simulation Training",
      action: "Apply",
      desc: "Scenario-based simulation drills in a risk-free, controlled clinical environment.",
    },
    {
      step: "04",
      title: "Hospital Exposure",
      action: "Perform",
      desc: "Supervised clinical rotations and patient care inside active healthcare suites.",
    },
    {
      step: "05",
      title: "Competency Verification",
      action: "Excel",
      desc: "Structured evaluation of ethics, clinical safety, and real-world practical confidence.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900 pb-20 selection:bg-teal-700 selection:text-white">
      {/* =========================================================================
          HERO LAYER: INSTITUTIONAL BRANDING
      ========================================================================== */}
      <section className="relative bg-white pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-24 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-teal-600/30 bg-teal-50 px-3.5 py-1 text-xs font-bold text-teal-800">
                <span className="h-2 w-2 rounded-full bg-teal-600 animate-pulse" />
                <span>About Livaura Institute of Health Sciences</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-[1.12]">
                Learn Today. <br />
                <span className="bg-gradient-to-r from-teal-800 via-teal-700 to-emerald-700 bg-clip-text text-transparent">
                  Excel Tomorrow.
                </span>
              </h1>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                Livaura Institute of Health Sciences is envisioned as a premier centre for quality healthcare education, practical competence, and professional values, creating competent, compassionate, and confident paramedical practitioners.
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Located at Vettillapara, Areekode, Malappuram[cite: 1], our institute bridges the gap between academic theory and practical clinical competence through modern diagnostic laboratories, high-fidelity simulation training, and free internships at reputed hospitals[cite: 1].
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-2xs">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-teal-800 block mb-1.5">
                    Our Vision
                  </span>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    “To empower every learner with quality education, practical skills, and professional values, creating competent healthcare professionals who excel in their fields and contribute to a healthier future.”
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-2xs">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-teal-800 block mb-1.5">
                    Our Mission
                  </span>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    “To provide accessible, quality-driven healthcare education with modern learning amenities and clinical exposure, establishing Livaura Institute of Health Sciences as a benchmark in healthcare education by 2030.”
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-teal-50/60 p-4 shadow-2xs">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-teal-800 block mb-1">
                  Our Educational Promise
                </span>
                <p className="font-mono text-xs sm:text-sm text-slate-900 font-bold">
                  Knowledge + Skills + Values + Experience ={" "}
                  <span className="text-teal-700">Professional Excellence</span>
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3.5">
                <Link
                  href="/services"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#00897B] px-7 py-3 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-[#00796B] transition active:scale-95"
                >
                  <span>Explore Courses &amp; Services</span>
                  <span>→</span>
                </Link>
                <a
                  href="tel:7356566456"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-7 py-3 text-xs sm:text-sm font-bold text-slate-800 hover:border-teal-700 hover:text-teal-700 transition active:scale-95 shadow-2xs"
                >
                  <span>Call 7356566456</span>[cite: 1]
                  <span>📞</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200/90 bg-white shadow-xl">
                  <div className="aspect-[4/4.8] w-full relative overflow-hidden bg-slate-100">
                    <img
                      src="/Livaura Institute Grand Entrance.png"
                      alt="Livaura Institute of Health Sciences Campus"
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
                      Livaura Institute of Health Sciences[cite: 1]
                    </h3>
                    <p className="text-xs text-slate-200 mt-1 leading-relaxed">
                      Vettillapara, Areekode, Malappuram District, Kerala - 673639[cite: 1].
                    </p>
                  </div>
                </div>

                <div className="absolute -top-4 -left-2 sm:-left-4 rounded-2xl border border-teal-200 bg-white p-3.5 shadow-lg flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 border border-teal-200 text-teal-800 font-black text-sm">
                    ✓
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Free Internship[cite: 1]</div>
                    <div className="text-[10px] text-teal-700 font-medium">Reputed Hospitals[cite: 1]</div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -right-2 sm:-right-4 rounded-2xl border border-slate-200 bg-white/95 backdrop-blur-md px-4 py-2.5 shadow-lg flex items-center gap-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold text-slate-800">
                    Assured Paramedical Reg.[cite: 1]
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          LAYER: INSTITUTIONAL OVERVIEW (THE MISSING LAYER)
      ========================================================================== */}
      <section className="relative bg-white py-16 sm:py-24 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-teal-800 bg-teal-50 border border-teal-200/80 px-3.5 py-1.5 rounded-full shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-600 animate-pulse" />
              Institutional Overview
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 mt-3.5 tracking-tight">
              Shaping Competent Healthcare Leaders
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              Livaura Institute of Health Sciences was established to provide aspiring medical professionals with world-class paramedical and nursing education in Kerala. We combine state-of-the-art simulation labs with active clinical rotations to ensure complete clinical readiness.
            </p>
          </div>

          {/* Overview Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8 flex flex-col justify-between shadow-2xs">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100 text-teal-800 font-black text-lg mb-4">
                  01
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-950">
                  Curriculum &amp; Recognition
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                  Offering 6 recognized healthcare programs: GNM, B.Sc MLT, B.Sc MIT, B.Sc AT &amp; OT, D.Pharm, and DMLT[cite: 1]. Each course is structured to exceed national regulatory standards and healthcare workplace expectations.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-200 text-xs font-semibold text-teal-800">
                Recognized Paramedical Tracks[cite: 1]
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8 flex flex-col justify-between shadow-2xs">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100 text-teal-800 font-black text-lg mb-4">
                  02
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-950">
                  Hospital Integration
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                  Every student benefits from our assured free hospital internship program at reputed healthcare facilities[cite: 1], experiencing live ICU, OT, surgical suite, and emergency triage operations firsthand under senior medical supervision.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-200 text-xs font-semibold text-teal-800">
                Free Hospital Internship[cite: 1]
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8 flex flex-col justify-between shadow-2xs">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100 text-teal-800 font-black text-lg mb-4">
                  03
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-950">
                  Campus &amp; Location
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                  Nestled in Vettillapara, Areekode, Malappuram[cite: 1], our campus provides a peaceful, focused academic environment equipped with advanced diagnostic equipment, high-speed digital research libraries, and simulation rooms.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-200 text-xs font-semibold text-teal-800">
                Areekode, Malappuram Campus[cite: 1]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CAMPUS FACILITIES & DETAILED LINKED CARDS
      ========================================================================== */}
      <section className="relative bg-slate-50 py-16 sm:py-24 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-teal-800 bg-teal-100/80 border border-teal-200 px-3.5 py-1.5 rounded-full shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-600 animate-pulse" />
              Campus Infrastructure &amp; Laboratories
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 mt-3.5 tracking-tight">
              State-of-the-Art Training Labs
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-3 max-w-2xl mx-auto leading-relaxed">
              Explore our modern simulation suites, automated diagnostic laboratories, and procedural training centers at Vettillapara, Areekode[cite: 1].
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {facilitiesData.map((fac) => (
              <div
                key={fac.id}
                className="group relative rounded-3xl border border-slate-200 bg-white overflow-hidden flex flex-col justify-between shadow-2xs transition-all duration-300 ease-out hover:-translate-y-2 hover:border-teal-600/60 hover:shadow-xl cursor-pointer"
              >
                <div>
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

                <div className="px-6 pb-6 pt-2">
                  <Link
                    href={`/facilities/${fac.id}`}
                    className="group/btn flex items-center justify-between w-full rounded-xl bg-slate-50 hover:bg-[#00897B] text-slate-700 hover:text-white px-4 py-2.5 text-xs font-bold transition-all duration-300 border border-slate-200/80 hover:border-[#00897B] shadow-2xs active:scale-98"
                  >
                    <span>Explore Facility Details</span>
                    <span className="transition-transform duration-300 group-hover/btn:translate-x-1.5">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          5-STEP LEARNING MODEL
      ========================================================================== */}
      <section className="relative bg-white py-16 sm:py-24 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-teal-800 bg-teal-50 border border-teal-200 px-3.5 py-1.5 rounded-full">
              Pedagogical Framework
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 mt-3.5">
              Our 5-Step Learning Model
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-3 max-w-2xl mx-auto leading-relaxed">
              From initial anatomy theory to live hospital rotations, our 5-step model guarantees that learners graduate as ethical, competent, and confident medical professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {learningSteps.map((s, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5 flex flex-col justify-between shadow-2xs hover:border-teal-600/60 transition"
              >
                <div>
                  <span className="text-xl font-mono font-black text-teal-700">
                    {s.step}
                  </span>
                  <div className="inline-block rounded-md bg-teal-100/70 text-teal-900 font-bold text-[10px] uppercase px-2 py-0.5 mt-2 mb-1">
                    {s.action}
                  </div>
                  <h3 className="text-sm font-bold text-slate-950">
                    {s.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          CORE VALUES SECTION
      ========================================================================== */}
      <section className="relative bg-slate-50 py-16 sm:py-24 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-teal-800 bg-teal-100/80 border border-teal-200 px-3.5 py-1.5 rounded-full shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-600 animate-pulse" />
              Institutional Guiding Principles
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 mt-3.5 tracking-tight">
              Our Core Values
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-3 max-w-2xl mx-auto leading-relaxed">
              Every course, practical drill, and patient care interaction at Livaura Institute of Health Sciences is grounded in ethical principles designed to create empathetic, character-driven practitioners.
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
                    Livaura Ethics
                  </span>
                  <span className="text-teal-700 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Core Standard →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          ADMISSION HELPDESK BANNER
      ========================================================================== */}
      <section className="bg-white py-14 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto rounded-3xl border border-teal-200 bg-teal-50/80 p-8 sm:p-12 text-center">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-teal-800">
            Admissions Desk • Academic Year 2026–2027
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-950 mt-2">
            Enroll at Livaura Institute of Health Sciences
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mt-2 leading-relaxed">
            Free hospital internship at reputed hospitals with assured paramedical registration upon graduation[cite: 1].
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto rounded-xl bg-[#00897B] px-8 py-3 text-xs sm:text-sm font-bold text-white shadow hover:bg-[#00796B] transition"
            >
              Apply Online
            </Link>
            <a
              href="tel:7356566456"
              className="w-full sm:w-auto rounded-xl border border-teal-300 bg-white px-8 py-3 text-xs sm:text-sm font-bold text-teal-900 shadow-2xs hover:bg-teal-50 transition"
            >
              Call Helpline: 7356566456[cite: 1]
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}