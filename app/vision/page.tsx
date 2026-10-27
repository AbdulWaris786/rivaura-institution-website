import Link from "next/link";

export default function VisionPage() {
  const commitments = [
    "Delivering quality and relevant education aligned with the evolving needs of healthcare.",
    "Developing practical competence through hands-on training, simulation, and free hospital internships.",
    "Assuring paramedical registration upon graduation to create confident, employable professionals.",
    "Making quality education and upskilling accessible to every deserving learner across all streams.",
    "Providing modern infrastructure, diagnostic simulation labs, and interactive learning amenities.",
    "Integrating classroom education with real-world clinical hospital rotations.",
    "Instilling compassion, ethics, discipline, and professional patient care responsibility.",
    "Promoting lifelong learning, specialized paramedical updates, and career guidance.",
    "Building strong partnerships with reputed hospitals and healthcare organizations.",
    "Maintaining a culture of quality, safety, innovation, and continuous academic improvement.",
  ];

  const milestones = [
    { title: "QUALITY", desc: "Providing education that creates genuine competence across nursing and paramedical disciplines." },
    { title: "PRACTICAL EXCELLENCE", desc: "Transforming classroom knowledge into real-world procedural and diagnostic skills." },
    { title: "HOSPITAL INTERNSHIP", desc: "Providing free clinical internships at reputed healthcare facilities." },
    { title: "ACCESSIBILITY", desc: "Offering GNM (+2 Any Group) and allied health diploma/degree tracks for diverse learners." },
    { title: "INNOVATION", desc: "Adopting high-fidelity simulation and automated diagnostic equipment in our laboratories." },
    { title: "EMPLOYABILITY", desc: "Preparing learners for sustainable careers with assured paramedical registration." },
    { title: "PROFESSIONAL VALUES", desc: "Combining scientific competence with patient dignity, integrity, and ethical conduct." },
  ];

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-white text-slate-900">
      <section className="max-w-4xl">
        <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-teal-800">
          Institutional Direction • Vettillapara, Areekode
        </span>
        <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950">
          Our Vision &amp; Mission
        </h1>
        <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
          Your Science. Your Skills. Your Future in Healthcare at Livaura Institute of Health Sciences.
        </p>
      </section>

      {/* Vision & Mission Cards */}
      <section className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        <div className="rounded-2xl border border-slate-300 bg-slate-50 p-6 sm:p-8 shadow-sm">
          <span className="text-[11px] uppercase font-bold tracking-widest text-teal-800">
            Future Direction
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-950 mt-1">
            OUR VISION
          </h2>
          <blockquote className="mt-4 border-l-4 border-teal-600 pl-4 text-xs sm:text-sm text-slate-700 italic leading-relaxed font-medium">
            “To empower every learner with quality education, practical skills, and professional values, creating competent healthcare professionals who excel in their fields and contribute to a healthier and better future.”
          </blockquote>
          <p className="mt-4 text-xs text-slate-600 leading-relaxed font-normal">
            We envision a future where quality healthcare education is accessible to everyone, enabling learners from diverse backgrounds to discover their potential.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-300 bg-slate-50 p-6 sm:p-8 shadow-sm">
          <span className="text-[11px] uppercase font-bold tracking-widest text-teal-800">
            Institutional Mandate
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-950 mt-1">
            OUR MISSION
          </h2>
          <blockquote className="mt-4 border-l-4 border-teal-600 pl-4 text-xs sm:text-sm text-slate-700 italic leading-relaxed font-medium">
            “To provide accessible, quality-driven healthcare education with modern learning facilities, practical skill development, and hospital internships, empowering every learner to upskill, excel professionally, and establish Livaura Institute of Health Sciences as a benchmark in healthcare education by 2030.”
          </blockquote>
        </div>
      </section>

      {/* Commitments */}
      <section className="mt-14 sm:mt-20">
        <h3 className="text-xl sm:text-2xl font-black text-slate-950 mb-6">
          Our Commitments to Every Student
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {commitments.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 rounded-xl border border-slate-300 bg-slate-50 p-4 shadow-sm"
            >
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-100 text-xs font-bold text-teal-800">
                ✓
              </span>
              <p className="text-xs text-slate-700 leading-relaxed font-medium">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Livaura 2030 Roadmap */}
      <section className="mt-14 sm:mt-20 rounded-2xl border border-slate-300 bg-slate-50 p-6 sm:p-10 lg:p-12 shadow-sm">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[11px] sm:text-xs uppercase tracking-widest text-teal-800 font-bold">
            Our Mission • Our Milestone • Our Commitment
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 mt-2">
            LIVAURA 2030 BENCHMARK
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            By 2030, Livaura Institute of Health Sciences aspires to become a recognized pioneer in quality healthcare and allied medical education across Kerala.
          </p>
        </div>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
          {milestones.map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-slate-300 bg-white p-4 shadow-sm"
            >
              <h4 className="text-xs font-bold text-teal-800 uppercase tracking-wide">
                {item.title}
              </h4>
              <p className="text-xs text-slate-600 mt-1 font-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/contact"
            className="inline-block rounded-xl bg-[#00897B] px-8 py-3 text-xs sm:text-sm font-bold text-white shadow hover:bg-[#00796B] transition"
          >
            Inquire for 2026–2027 Admissions
          </Link>
        </div>
      </section>
    </main>
  );
}