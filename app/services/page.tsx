"use client";

import Link from "next/link";
import { coursesData } from "../courses/courses-data";
import { facilitiesData } from "../facilities/facilities-data";

export default function ServicesPage() {
  const serviceOfferings = [
    {
      id: "practical-training",
      category: "Academic Health Sciences",
      title: "Simulation & Skill Laboratories",
      subtitle: "Hands-on Procedural Training",
      desc: "Structured practical learning in dedicated health science labs, diagnostic suites, and nursing simulation centers at Livaura Institute of Health Sciences under experienced faculty mentorship.",
      features: [
        "High-fidelity mannequin procedural stations",
        "Automated diagnostic analyzer training",
        "Clinical safety & infection-control protocols",
      ],
      tag: "Core Practical Wing",
    },
    {
      id: "hospital-internship",
      category: "Clinical Integration",
      title: "Free Hospital Internship",
      subtitle: "Hands-on Experience in Reputed Hospitals",
      desc: "Every student gains direct hospital-based clinical exposure through our guaranteed free internship program at partner healthcare facilities.",
      features: [
        "Bedside patient care & clinical assistance",
        "Emergency, OT, ICU, and diagnostic lab rotations",
        "Real-world case documentation & consultant shadowing",
      ],
      tag: "Hospital Attached",
    },
    {
      id: "paramedical-registration",
      category: "Career & Credentials",
      title: "Assured Paramedical Registration",
      subtitle: "Certified Professional Recognition",
      desc: "Our curriculum adheres strictly to regulatory norms, ensuring graduates receive recognized paramedical registration upon course completion.",
      features: [
        "Officially recognized course certifications",
        "Direct eligibility for hospital employment",
        "Career guidance & placement support",
      ],
      tag: "Career Ready",
    },
    {
      id: "continuing-education",
      category: "Lifelong Learning",
      title: "Workshops & Skill Enhancement",
      subtitle: "Paramedical Advancement",
      desc: "Regular workshops, clinical case discussions, and technology seminars to keep learners abreast of modern medical advancements.",
      features: [
        "Advanced radiology & diagnostic updates",
        "Emergency resuscitation & trauma code drills",
        "Medical ethics and bedside patient communication",
      ],
      tag: "Professional Growth",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900 pb-20 selection:bg-teal-700 selection:text-white">
      {/* =========================================================================
          HERO & ACADEMIC INTRODUCTION
      ========================================================================== */}
      <section className="relative bg-white pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-24 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-600/30 bg-teal-50 px-3.5 py-1 text-xs font-bold text-teal-800">
              <span className="h-2 w-2 rounded-full bg-teal-600 animate-pulse" />
              <span>Academic Programs &amp; Clinical Services • Admissions 2026–2027</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-[1.12]">
              Our Courses &amp; <br />
              <span className="bg-gradient-to-r from-teal-800 via-teal-700 to-emerald-700 bg-clip-text text-transparent">
                Educational Programs.
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              Livaura Institute of Health Sciences offers government-recognized paramedical degrees and diplomas designed to build genuine clinical competence through simulation labs and free hospital internships[cite: 1].
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="rounded-xl border border-teal-200 bg-teal-50/70 px-4 py-2 text-xs font-bold text-teal-900">
                ✓ Free Hospital Internship[cite: 1]
              </div>
              <div className="rounded-xl border border-teal-200 bg-teal-50/70 px-4 py-2 text-xs font-bold text-teal-900">
                ✓ Assured Paramedical Registration[cite: 1]
              </div>
              <div className="rounded-xl border border-teal-200 bg-teal-50/70 px-4 py-2 text-xs font-bold text-teal-900">
                ✓ Vettillapara, Areekode[cite: 1]
              </div>
            </div>
          </div>

          {/* =========================================================================
              6 OFFICIAL PROGRAMS GRID
          ========================================================================== */}
          <div className="mt-14 sm:mt-18">
            <div className="mb-8">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-teal-800 bg-teal-100/80 border border-teal-300 px-3.5 py-1.5 rounded-full inline-block">
                All 6 Recognized Courses[cite: 1]
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-950 mt-3">
                Choose Your Healthcare Specialization
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {coursesData.map((course) => (
                <div
                  key={course.id}
                  className="group relative rounded-3xl border border-slate-300 bg-white p-6 sm:p-7 shadow-xs flex flex-col justify-between transition-all duration-300 hover:border-teal-600 hover:shadow-xl hover:-translate-y-1.5"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <span className="rounded-xl bg-teal-50 px-3 py-1 font-mono text-xs font-black text-teal-800 border border-teal-200">
                        {course.code}
                      </span>
                      <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-bold text-slate-700 uppercase tracking-wider border border-slate-200">
                        {course.duration}
                      </span>
                    </div>

                    <div className="inline-block rounded-md bg-amber-50 px-2.5 py-0.5 text-[11px] font-bold text-amber-900 border border-amber-200 mb-2">
                      Eligibility: {course.eligibility}
                    </div>

                    <h3 className="text-lg sm:text-xl font-black text-slate-950 group-hover:text-teal-800 transition-colors">
                      {course.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed font-normal">
                      {course.description}
                    </p>

                    <ul className="mt-4 space-y-1.5 border-t border-slate-100 pt-3">
                      {course.highlights.map((h, i) => (
                        <li key={i} className="flex items-center gap-2 text-[11px] text-slate-700 font-medium">
                          <span className="text-teal-700 font-bold">✓</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-800 hover:text-teal-600 transition"
                    >
                      <span>Inquire Admission</span>
                      <span>→</span>
                    </Link>
                    <a
                      href="tel:7356566456"
                      className="text-xs font-bold text-slate-500 hover:text-teal-700 transition"
                    >
                      7356566456[cite: 1]
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* =========================================================================
              STEP 3: CAMPUS FACILITIES & DETAILED LINKED CARDS
          ========================================================================== */}
          <div id="why-choose-section" className="mt-20 sm:mt-28 border-t border-slate-200 pt-16">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-teal-800 bg-teal-100/80 border border-teal-200 px-3.5 py-1.5 rounded-full shadow-2xs">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-600 animate-pulse" />
                Infrastructure &amp; Campus Laboratories
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 mt-3.5 tracking-tight">
                Modern Healthcare Facilities
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-3 max-w-2xl mx-auto leading-relaxed">
                Step inside our advanced clinical suites, diagnostic laboratories, and simulation units at our campus in Vettillapara, Areekode, Malappuram[cite: 1].
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {facilitiesData.map((fac) => (
                <div
                  key={fac.id}
                  className="group relative rounded-3xl border border-slate-200 bg-white overflow-hidden flex flex-col justify-between shadow-2xs transition-all duration-300 ease-out hover:-translate-y-2 hover:border-teal-600/60 hover:shadow-xl cursor-pointer"
                >
                  <div>
                    {/* Facility Image with Hover Zoom */}
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

                    {/* Facility Body Info */}
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

                  {/* Dynamic Facility Route Link */}
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

          {/* =========================================================================
              ACADEMIC PILLARS
          ========================================================================== */}
          <div className="mt-16 sm:mt-24 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {serviceOfferings.map((serv) => (
              <div
                key={serv.id}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8 flex flex-col justify-between shadow-2xs"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 bg-teal-100 px-3 py-1 rounded-full border border-teal-200">
                    {serv.tag}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-950 mt-3">
                    {serv.title}
                  </h3>
                  <h4 className="text-xs font-semibold text-teal-700 mt-0.5">
                    {serv.subtitle}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                    {serv.desc}
                  </p>
                  <ul className="mt-4 space-y-2 border-t border-slate-200 pt-3">
                    {serv.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <span className="text-teal-700 font-bold">✓</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* =========================================================================
              ADMISSION CALL TO ACTION
          ========================================================================== */}
          <div className="mt-16 rounded-3xl border border-teal-200 bg-teal-50/80 p-8 sm:p-12 text-center">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-teal-800">
              Direct Admission Desk
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-950 mt-2">
              Admissions Open for Academic Year 2026–2027
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mt-2 leading-relaxed">
              Start your career in healthcare with experienced faculty, modern infrastructure, and free hospital internships[cite: 1].
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto rounded-xl bg-[#00897B] px-8 py-3 text-xs sm:text-sm font-bold text-white shadow hover:bg-[#00796B] transition"
              >
                Apply for Admission
              </Link>
              <a
                href="tel:7356566456"
                className="w-full sm:w-auto rounded-xl border border-teal-300 bg-white px-8 py-3 text-xs sm:text-sm font-bold text-teal-900 shadow-2xs hover:bg-teal-50 transition"
              >
                Call: 7356566456[cite: 1]
              </a>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}