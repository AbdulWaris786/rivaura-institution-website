export default function VisionPage() {
  const commitments = [
    "Delivering quality and relevant education aligned with the evolving needs of healthcare[cite: 1].",
    "Developing practical competence through hands-on training, simulation and supervised clinical exposure[cite: 1].",
    "Creating skilled, confident and employable healthcare professionals[cite: 1].",
    "Making quality education and opportunities for upskilling accessible to every deserving learner[cite: 1].",
    "Providing modern infrastructure, technology and learning amenities[cite: 1].",
    "Integrating classroom education with real-world clinical practice[cite: 1].",
    "Instilling compassion, ethics, discipline and professional responsibility[cite: 1].",
    "Promoting lifelong learning and continuous professional development[cite: 1].",
    "Building strong partnerships with hospitals, healthcare organisations and educational institutions[cite: 1].",
    "Maintaining a culture of quality, safety, innovation and continuous improvement[cite: 1].",
  ];

  const milestones = [
    { title: "QUALITY", desc: "Providing education that creates genuine competence[cite: 1]." },
    { title: "PRACTICAL EXCELLENCE", desc: "Transforming knowledge into real-world skills[cite: 1]." },
    { title: "CLINICAL INTEGRATION", desc: "Connecting education with meaningful healthcare practice[cite: 1]." },
    { title: "ACCESSIBILITY", desc: "Making quality education and upskilling opportunities available to deserving learners[cite: 1]." },
    { title: "INNOVATION", desc: "Adopting modern technology and contemporary educational methods[cite: 1]." },
    { title: "EMPLOYABILITY", desc: "Preparing learners for successful and sustainable healthcare careers[cite: 1]." },
    { title: "PROFESSIONAL VALUES", desc: "Creating healthcare professionals who combine competence with compassion, integrity and responsibility[cite: 1]." },
  ];

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-white text-slate-900">
      <section className="max-w-4xl">
        <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-teal-800">Institutional Direction</span>
        <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950">Our Vision &amp; Mission</h1>
      </section>

      {/* Vision & Mission Cards */}
      <section className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        <div className="rounded-2xl border border-slate-300 bg-slate-50 p-6 sm:p-8 shadow-xs">
          <span className="text-[11px] uppercase font-bold tracking-widest text-teal-800">Future Direction</span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-950 mt-1">OUR VISION[cite: 1]</h2>
          <blockquote className="mt-4 border-l-3 border-teal-600 pl-4 text-xs sm:text-sm text-slate-700 italic leading-relaxed font-medium">
            “To empower every learner with quality education, practical skills and professional values, creating competent healthcare professionals who excel in their fields and contribute to a healthier and better future[cite: 1].”
          </blockquote>
          <p className="mt-4 text-xs text-slate-600 leading-relaxed font-normal">
            We envision a future where quality healthcare education is accessible to everyone, enabling learners from diverse backgrounds to discover their potential[cite: 1].
          </p>
        </div>

        <div className="rounded-2xl border border-slate-300 bg-slate-50 p-6 sm:p-8 shadow-xs">
          <span className="text-[11px] uppercase font-bold tracking-widest text-teal-800">Institutional Mandate</span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-950 mt-1">OUR MISSION[cite: 1]</h2>
          <blockquote className="mt-4 border-l-3 border-teal-600 pl-4 text-xs sm:text-sm text-slate-700 italic leading-relaxed font-medium">
            “To provide accessible, quality-driven healthcare education with modern learning facilities, practical skill development and clinical exposure, empowering every learner to upskill, excel professionally and contribute meaningfully to healthcare — and to establish Rivaura Institute of Health Sciences as a pioneer and benchmark in healthcare education by 2030[cite: 1].”
          </blockquote>
        </div>
      </section>

      {/* Commitments */}
      <section className="mt-14 sm:mt-20">
        <h3 className="text-xl sm:text-2xl font-black text-slate-950 mb-6">Our Commitments[cite: 1]</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {commitments.map((item, index) => (
            <div key={index} className="flex items-start gap-3 rounded-xl border border-slate-300 bg-slate-50 p-4 shadow-xs">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-100 text-xs font-bold text-teal-800">
                ✓
              </span>
              <p className="text-xs text-slate-700 leading-relaxed font-medium">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Rivaura 2030 Roadmap */}
      <section className="mt-14 sm:mt-20 rounded-2xl border border-slate-300 bg-slate-50 p-6 sm:p-10 lg:p-12 shadow-sm">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[11px] sm:text-xs uppercase tracking-widest text-teal-800 font-bold">
            Our Mission • Our Milestone • Our Commitment[cite: 1]
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 mt-2">RIVAURA 2030[cite: 1]</h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            By 2030, Rivaura Institute of Health Sciences aspires to become a pioneer and benchmark in healthcare education and skill development[cite: 1].
          </p>
        </div>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
          {milestones.map((item, idx) => (
            <div key={idx} className="rounded-xl border border-slate-300 bg-white p-4 shadow-xs">
              <h4 className="text-xs font-bold text-teal-800 uppercase tracking-wide">{item.title}</h4>
              <p className="text-xs text-slate-600 mt-1 font-normal">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}