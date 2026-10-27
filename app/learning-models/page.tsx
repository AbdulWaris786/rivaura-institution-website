"use client";

import Link from "next/link";

export default function LearningModelsPage() {
  const steps = [
    {
      step: "01",
      name: "LEARN",
      title: "Classroom Learning",
      desc: "Structured theoretical foundations covering medical concepts, biology, ethics, and healthcare protocols delivered by experienced faculty.",
    },
    {
      step: "02",
      name: "PRACTISE",
      title: "Skill Laboratory",
      desc: "Repetitive procedural practice in dedicated labs to turn academic concepts into muscle memory and technical competence.",
    },
    {
      step: "03",
      name: "APPLY",
      title: "Simulation-Based Training",
      desc: "High-fidelity simulated clinical scenarios where learners manage realistic healthcare emergencies and procedures risk-free.",
    },
    {
      step: "04",
      name: "PERFORM",
      title: "Supervised Clinical Exposure",
      desc: "Practical hands-on training at Livaura Institute of Health Sciences, developing diagnostic techniques and clinical discipline under expert faculty supervision.",
    },
    {
      step: "05",
      name: "EXCEL",
      title: "Competency & Professional Development",
      desc: "Formal assessment of clinical skills, ethics, and confidence to certify learners who are immediately employable and career-ready.",
    },
  ];

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-white text-slate-900">
      <section className="max-w-4xl">
        <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-teal-800">
          Pedagogical Framework
        </span>
        <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950">
          Our Learning Model
        </h1>
        <p className="mt-3 text-base sm:text-xl text-teal-700 font-bold">
          LEARN → PRACTISE → APPLY → PERFORM → EXCEL
        </p>
        <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
          At Livaura Institute of Health Sciences, our purpose is not simply to produce certificate holders. Our purpose is to create quality professionals who can make a difference.
        </p>
      </section>

      {/* 5-Step Flowchart */}
      <section className="mt-10 sm:mt-14 space-y-4 sm:space-y-6">
        {steps.map((st, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-slate-300 bg-slate-50 p-5 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 hover:border-teal-600 transition shadow-sm"
          >
            <span className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl bg-teal-100 font-mono text-lg sm:text-xl font-bold text-teal-800 border border-teal-300">
              {st.step}
            </span>
            <div>
              <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-teal-800 uppercase">
                Stage {st.name}
              </span>
              <h3 className="text-base sm:text-xl font-bold text-slate-950">
                {st.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed font-normal">
                {st.desc}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* Philosophy Callout */}
      <section className="mt-14 sm:mt-20 rounded-2xl border border-slate-300 bg-slate-50 p-6 sm:p-10 text-center shadow-sm">
        <blockquote className="text-base sm:text-xl italic font-bold text-slate-900">
          “We don't just teach a course. We build competence, confidence and character.”
        </blockquote>
        <p className="text-xs text-slate-600 font-semibold mt-2 sm:mt-3">
          Learn Today. Develop Skills. Build Confidence. Excel Tomorrow.
        </p>
        <div className="mt-6">
          <Link
            href="/contact"
            className="inline-block rounded-lg bg-[#00897B] px-6 py-2.5 text-xs font-bold text-white shadow-md hover:bg-[#00796B] transition"
          >
            Inquire for Next Batch
          </Link>
        </div>
      </section>
    </main>
  );
}