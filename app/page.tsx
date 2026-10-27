"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { specialistsData } from "./specialists/specialists-data";
import { facilitiesData } from "./facilities/facilities-data";
import { coursesData } from "./courses/courses-data";

export default function HomePage() {
  const layer1Ref = useRef<HTMLDivElement>(null);
  const layer2Ref = useRef<HTMLElement>(null);
  const layer3Ref = useRef<HTMLElement>(null);
  const layer4Ref = useRef<HTMLElement>(null);
  const layer5Ref = useRef<HTMLElement>(null);
  const layer6Ref = useRef<HTMLElement>(null);

  const [l1Transform, setL1Transform] = useState({ scale: 1, opacity: 1 });
  const [l2Transform, setL2Transform] = useState({ scale: 0.95, opacity: 0.8 });
  const [l3Transform, setL3Transform] = useState({ scale: 0.95, opacity: 0.8 });
  const [l4Transform, setL4Transform] = useState({ scale: 0.95, opacity: 0.8 });
  const [l5Transform, setL5Transform] = useState({ scale: 0.95, opacity: 0.8 });
  const [l6Transform, setL6Transform] = useState({ scale: 0.95, opacity: 0.8 });

  useEffect(() => {
    let ticking = false;

    const updateTransforms = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const vw = window.innerWidth || document.documentElement.clientWidth;
      const scrollY = window.scrollY;

      const isMobile = vw < 768;
      const minScale = isMobile ? 0.96 : 0.9;
      const scaleDelta = 1 - minScale;
      const minOpacity = isMobile ? 0.75 : 0.4;

      const l1Progress = Math.min(1, Math.max(0, scrollY / (vh * 0.65)));
      setL1Transform({
        scale: Math.max(minScale, 1 - l1Progress * scaleDelta),
        opacity: Math.max(0, 1 - l1Progress * 1.15),
      });

      const computeLayerTransform = (el: HTMLElement | null) => {
        if (!el) return { scale: minScale, opacity: minOpacity };

        const rect = el.getBoundingClientRect();
        const enterProgress = Math.min(1, Math.max(0, (vh - rect.top) / (vh * 0.75)));
        const exitZone = vh * 0.6;
        const exitProgress =
          rect.bottom < exitZone
            ? Math.min(1, Math.max(0, (exitZone - rect.bottom) / exitZone))
            : 0;

        let scale = minScale;
        let opacity = minOpacity;

        if (exitProgress > 0) {
          scale = Math.max(isMobile ? 0.94 : 0.88, 1 - exitProgress * (isMobile ? 0.06 : 0.12));
          opacity = Math.max(isMobile ? 0.4 : 0.2, 1 - exitProgress * 0.8);
        } else {
          scale = minScale + enterProgress * scaleDelta;
          opacity = minOpacity + enterProgress * (1 - minOpacity);
        }

        return { scale, opacity };
      };

      if (layer2Ref.current) setL2Transform(computeLayerTransform(layer2Ref.current));
      if (layer3Ref.current) setL3Transform(computeLayerTransform(layer3Ref.current));
      if (layer4Ref.current) setL4Transform(computeLayerTransform(layer4Ref.current));
      if (layer5Ref.current) setL5Transform(computeLayerTransform(layer5Ref.current));
      if (layer6Ref.current) setL6Transform(computeLayerTransform(layer6Ref.current));

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateTransforms);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    updateTransforms();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const articles = [
    {
      id: "clinical-education-bridge",
      tag: "Academic Leadership",
      title: "Connecting Healthcare Delivery with Healthcare Education",
      desc: "Dr. Sreekala K N explores how practical simulation labs at Livaura Institute of Health Sciences enable students to transition seamlessly from knowledge to clinical competence.",
      author: "Dr. Sreekala K N",
      authorRole: "Head of Institution, Livaura Institute of Health Sciences",
      readTime: "5 min read",
    },
    {
      id: "institutional-standards",
      tag: "Clinical Standards",
      title: "Modern Educational Standards & Simulation Training",
      desc: "A review of how Livaura Institute of Health Sciences serves the student community with cutting-edge academic facilities and comprehensive skill development.",
      author: "Academic Operations Team",
      authorRole: "Livaura Institute of Health Sciences",
      readTime: "4 min read",
    },
    {
      id: "learning-model-2030",
      tag: "Institutional Vision",
      title: "The 5-Step Learning Model: Building Competence, Confidence, and Character",
      desc: "An examination of why healthcare education must extend beyond diplomas — focusing on practical simulation, ethics, and Livaura Institute of Health Sciences' 2030 benchmark mission.",
      author: "Academic Advisory Board",
      authorRole: "Livaura Institute of Health Sciences",
      readTime: "6 min read",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-teal-700 selection:text-white overflow-x-hidden">
      {/* =========================================================================
          LAYER 1: FULL-BLEED BACKGROUND HERO (SIDE-ALIGNED COMPACT CONTENT)
      ========================================================================== */}
      <div ref={layer1Ref} className="relative min-h-[92svh] sm:min-h-screen w-full overflow-hidden bg-slate-950">
        <section
          style={{
            opacity: l1Transform.opacity,
            transform: `scale(${l1Transform.scale})`,
            willChange: "transform, opacity",
          }}
          className="sticky top-0 left-0 w-full min-h-[92svh] sm:min-h-screen flex items-center justify-start px-4 sm:px-8 lg:px-16 py-12 z-0 overflow-hidden"
        >
          <div className="absolute inset-0 -z-20 overflow-hidden">
            <img
              src="/Livaura Institute Grand Entrance.png"
              alt="Livaura Institute of Health Sciences Campus"
              className="w-full h-full object-cover object-center filter brightness-95 contrast-105"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent md:hidden" />
          </div>

          <div className="relative max-w-xl text-left z-10 space-y-4 sm:space-y-5 rounded-3xl bg-slate-950/40 p-6 sm:p-8 backdrop-blur-md border border-white/10 shadow-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-400/40 bg-teal-950/60 px-3.5 py-1 text-[11px] sm:text-xs font-bold text-teal-300 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-teal-400 animate-pulse shrink-0" />
              <span>Admissions Open 2026–2027</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight drop-shadow-md">
              Building Skills. <br />
              Creating Professionals. <br />
              <span className="bg-gradient-to-r from-teal-300 via-teal-200 to-emerald-300 bg-clip-text text-transparent">
                Shaping Tomorrow.
              </span>
            </h1>

            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
              Empowering healthcare aspirants through modern clinical simulation laboratories, hands-on diagnostics, and verified hospital internships at Livaura Institute of Health Sciences, Vettillapara, Areekode[cite: 1].
            </p>

            <div className="flex items-center gap-3 pt-1">
              <div className="rounded-xl bg-white/10 px-3.5 py-1.5 border border-white/10 text-white backdrop-blur-sm">
                <span className="text-xs font-black text-teal-300">Free</span>
                <span className="text-[10px] text-slate-300 ml-1.5 font-medium">Hospital Internship[cite: 1]</span>
              </div>
              <div className="rounded-xl bg-white/10 px-3.5 py-1.5 border border-white/10 text-white backdrop-blur-sm">
                <span className="text-xs font-black text-teal-300">Assured</span>
                <span className="text-[10px] text-slate-300 ml-1.5 font-medium">Paramedical Reg.[cite: 1]</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                href="#courses-section"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#00897B] px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-lg hover:bg-[#00796B] transition active:scale-95 text-center"
              >
                <span>Explore Courses</span>
                <span className="animate-bounce">↓</span>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/5 px-6 py-3 text-xs sm:text-sm font-bold text-white hover:border-teal-400 hover:text-teal-300 transition active:scale-95 shadow-sm text-center"
              >
                <span>About Institute</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* =========================================================================
          LAYER 2: HEALTHCARE COURSES (EXACT 6 COURSES FROM POSTER)
      ========================================================================== */}
      <section
        ref={layer2Ref}
        id="courses-section"
        style={{
          transform: `scale(${l2Transform.scale})`,
          opacity: l2Transform.opacity,
          willChange: "transform, opacity",
          transformOrigin: "center center",
        }}
        className="relative z-10 bg-slate-50 text-slate-900 rounded-[28px] sm:rounded-[44px] shadow-[0_-16px_40px_rgba(15,23,42,0.08)] border-2 border-slate-300 py-12 sm:py-24 px-4 sm:px-6 lg:px-8 my-6 sm:my-10 max-w-[96%] sm:max-w-[98%] mx-auto transition-transform duration-75 ease-out"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mx-auto w-10 sm:w-12 h-1.5 rounded-full bg-teal-600/40 -mt-8 sm:-mt-14 mb-6 sm:mb-10" />

          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-teal-800 bg-teal-100/80 border border-teal-300 px-3.5 py-1.5 rounded-full inline-block">
              Admissions Open 2026–2027
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 mt-3">
              Paramedical &amp; Healthcare Courses
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 sm:mt-3 max-w-xl mx-auto leading-relaxed font-medium">
              Free internship at a reputed hospital and assured paramedical registration upon course completion[cite: 1].
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
            {coursesData.map((course) => (
              <div
                key={course.id}
                className="group relative rounded-2xl border border-slate-300 bg-white p-5 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:border-teal-600 hover:shadow-lg hover:-translate-y-1 shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="rounded-xl bg-teal-50 px-3 py-1 font-mono text-xs font-black text-teal-800 border border-teal-200">
                      {course.code}
                    </span>
                    <span className="rounded-full bg-teal-50 px-2.5 py-0.5 text-[10px] font-bold text-teal-800 uppercase tracking-wider border border-teal-200">
                      {course.duration}
                    </span>
                  </div>

                  <div className="mt-3.5 inline-block rounded-md bg-amber-50 px-2 py-0.5 text-[10px] font-bold text-amber-900 border border-amber-200">
                    Eligibility: {course.eligibility}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-950 mt-2 group-hover:text-teal-700 transition-colors duration-200">
                    {course.title}
                  </h3>

                  <p className="text-xs text-slate-600 mt-2.5 leading-relaxed font-normal">
                    {course.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200">
                  <Link
                    href="/contact"
                    className="relative group/btn inline-flex w-full items-center justify-between rounded-xl bg-slate-50 px-3.5 py-2 sm:px-4 sm:py-2.5 text-xs font-bold text-teal-800 border border-slate-300 transition-all duration-300 hover:bg-[#00897B] hover:text-white hover:border-[#00897B]"
                  >
                    <span className="transition-transform duration-300 group-hover/btn:translate-x-1">
                      Inquire for Admission
                    </span>
                    <span className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-teal-200 group-hover/btn:bg-white group-hover/btn:text-[#00897B] transition-all duration-300 group-hover/btn:rotate-45">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-teal-50/80 border border-teal-200 p-5 sm:p-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 text-center">
            <div className="p-2">
              <span className="block text-xs font-bold text-slate-900">Experienced Faculty</span>
              <span className="text-[10px] text-teal-700 font-medium">Expert Instruction[cite: 1]</span>
            </div>
            <div className="p-2">
              <span className="block text-xs font-bold text-slate-900">Modern Infrastructure</span>
              <span className="text-[10px] text-teal-700 font-medium">State-of-the-Art Labs[cite: 1]</span>
            </div>
            <div className="p-2">
              <span className="block text-xs font-bold text-slate-900">Practical Training</span>
              <span className="text-[10px] text-teal-700 font-medium">Hands-on Experience[cite: 1]</span>
            </div>
            <div className="p-2">
              <span className="block text-xs font-bold text-slate-900">Internship Opportunities</span>
              <span className="text-[10px] text-teal-700 font-medium">Reputed Hospitals[cite: 1]</span>
            </div>
            <div className="p-2 col-span-2 sm:col-span-1">
              <span className="block text-xs font-bold text-slate-900">Career Guidance</span>
              <span className="text-[10px] text-teal-700 font-medium">Placement Support[cite: 1]</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          LAYER 3: CAMPUS FACILITIES & DETAILED LINKED CARDS
      ========================================================================== */}
      <section
        ref={layer3Ref}
        id="facilities-section"
        style={{
          transform: `scale(${l3Transform.scale})`,
          opacity: l3Transform.opacity,
          willChange: "transform, opacity",
          transformOrigin: "center center",
        }}
        className="relative z-20 bg-white text-slate-900 rounded-[28px] sm:rounded-[44px] shadow-[0_4px_30px_rgba(15,23,42,0.06)] border border-slate-200/90 py-12 sm:py-24 px-4 sm:px-6 lg:px-8 my-6 sm:my-12 max-w-[96%] sm:max-w-[97%] mx-auto transition-transform duration-75 ease-out"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-teal-800 bg-teal-50 border border-teal-200/80 px-3.5 py-1.5 rounded-full shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-600 animate-pulse" />
              Campus Facilities &amp; Practical Infrastructure
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 mt-3.5 tracking-tight">
              State-of-the-Art Training Labs
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2.5 max-w-xl mx-auto leading-relaxed">
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
          LAYER 4: EXECUTIVE FACULTY SPECIALIST CARDS
      ========================================================================== */}
      <section
        ref={layer4Ref}
        id="specialists-section"
        style={{
          transform: `scale(${l4Transform.scale})`,
          opacity: l4Transform.opacity,
          willChange: "transform, opacity",
          transformOrigin: "center center",
        }}
        className="relative z-20 bg-slate-50 text-slate-900 rounded-[28px] sm:rounded-[44px] shadow-[0_4px_30px_rgba(15,23,42,0.06)] border border-slate-200/90 py-12 sm:py-24 px-4 sm:px-6 lg:px-8 my-6 sm:my-12 max-w-[96%] sm:max-w-[97%] mx-auto transition-transform duration-75 ease-out"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-teal-800 bg-teal-50 border border-teal-200/80 px-3.5 py-1.5 rounded-full shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-600 animate-pulse" />
              Faculty Specialists
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 mt-3.5 tracking-tight">
              Learn Under Senior Academic Faculty
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2.5 max-w-xl mx-auto leading-relaxed">
              Our faculty members are experienced educators and mentors at Livaura Institute of Health Sciences, providing students with immediate real-world guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {specialistsData.map((doc) => (
              <div
                key={doc.id}
                className="group relative rounded-2xl bg-white border border-slate-200/90 hover:border-teal-600/40 p-3.5 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_16px_36px_rgba(0,137,123,0.12)] hover:-translate-y-1.5"
              >
                <div>
                  <div className="relative aspect-[3/3.6] w-full rounded-xl overflow-hidden bg-gradient-to-b from-slate-100 via-slate-50 to-teal-50/40 border border-slate-100 flex items-end justify-center">
                    <img
                      src={`/${doc.image.replace(/^\//, "")}`}
                      alt={doc.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-104"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop";
                      }}
                    />

                    <div className="absolute top-2.5 right-2.5 rounded-full bg-white/90 backdrop-blur-md px-2.5 py-1 text-[10px] font-bold text-teal-800 border border-slate-200/80 shadow-2xs">
                      Faculty Mentor
                    </div>

                    <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white/30 to-transparent pointer-events-none" />
                  </div>

                  <div className="pt-4 px-1.5 space-y-2">
                    <h3 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-teal-800 transition-colors leading-snug">
                      {doc.name}
                    </h3>

                    <h4 className="text-xs font-semibold text-teal-700 leading-tight">
                      {doc.profession}
                    </h4>

                    <div className="inline-block rounded-md bg-teal-50/80 border border-teal-200/70 px-2.5 py-0.5 text-[11px] font-mono font-bold text-teal-900">
                      {doc.degrees}
                    </div>

                    <p className="text-[11px] text-slate-500 italic leading-relaxed pt-0.5 line-clamp-2">
                      {doc.hospitalDept}
                    </p>
                  </div>
                </div>

                <div className="mt-5 pt-3.5 border-t border-slate-100">
                  <Link
                    href={`/specialists/${doc.id}`}
                    className="flex items-center justify-between w-full rounded-xl bg-slate-50 hover:bg-[#00897B] text-slate-700 hover:text-white px-3.5 py-2.5 text-xs font-bold transition-all duration-200 group/btn border border-slate-200/80 hover:border-[#00897B]"
                  >
                    <span>View Profile</span>
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-slate-700 group-hover/btn:bg-white/20 group-hover/btn:text-white transition-all text-xs">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          LAYER 5: ABOUT LIVAURA INSTITUTE (CAMPUS DETAILS)
      ========================================================================== */}
      <section
        ref={layer5Ref}
        id="about-institution-section"
        style={{
          transform: `scale(${l5Transform.scale})`,
          opacity: l5Transform.opacity,
          willChange: "transform, opacity",
          transformOrigin: "center center",
        }}
        className="relative z-20 bg-white text-slate-900 rounded-[28px] sm:rounded-[48px] shadow-[0_12px_44px_rgba(15,23,42,0.07)] border-2 border-slate-200 py-12 sm:py-24 px-4 sm:px-6 lg:px-8 my-6 sm:my-14 max-w-[96%] sm:max-w-[97%] mx-auto transition-transform duration-75 ease-out"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Campus Photo */}
            <div className="lg:col-span-5 relative order-2 lg:order-1">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200/90 bg-white shadow-xl">
                  <div className="aspect-[4/4.5] sm:aspect-[4/4.8] w-full relative overflow-hidden bg-slate-100">
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
                    <h4 className="text-base sm:text-lg font-black leading-snug">
                      Livaura Institute of Health Sciences
                    </h4>
                    <p className="text-xs text-slate-200 mt-1 leading-relaxed">
                      Campus situated at Vettillapara, Areekode, Malappuram with comprehensive simulation and practical training laboratories[cite: 1].
                    </p>
                  </div>
                </div>

                <div className="absolute -top-3 sm:-top-4 -right-1 sm:-right-4 rounded-2xl border border-teal-200 bg-white p-3 sm:p-3.5 shadow-lg flex items-center gap-2.5 sm:gap-3">
                  <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-teal-50 border border-teal-200 text-teal-800 font-black text-xs sm:text-sm">
                    ✓
                  </div>
                  <div>
                    <div className="text-[11px] sm:text-xs font-bold text-slate-900">5-Step Practical Model</div>
                    <div className="text-[9px] sm:text-[10px] text-teal-700 font-medium">Learn → Practise → Excel</div>
                  </div>
                </div>

                <div className="absolute -bottom-3 sm:-bottom-4 -left-1 sm:-left-4 rounded-2xl border border-slate-200 bg-white/95 backdrop-blur-md px-3 sm:px-4 py-2 sm:py-2.5 shadow-lg flex items-center gap-2">
                  <span className="h-2 sm:h-2.5 w-2 sm:w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[11px] sm:text-xs font-bold text-slate-800">
                    Benchmark Vision by 2030
                  </span>
                </div>
              </div>
            </div>

            {/* Institutional Details */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6 order-1 lg:order-2 text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-teal-600/30 bg-teal-50 px-3.5 py-1 text-xs font-bold text-teal-800">
                <span className="h-2 w-2 rounded-full bg-teal-600" />
                <span>About Livaura Institute of Health Sciences</span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 leading-[1.15]">
                Creating Healthcare Professionals. <br />
                <span className="bg-gradient-to-r from-teal-800 via-teal-700 to-emerald-700 bg-clip-text text-transparent">
                  Shaping Tomorrow.
                </span>
              </h2>

              <p className="text-xs sm:text-base text-slate-700 leading-relaxed font-normal">
                Livaura Institute of Health Sciences is envisioned as a centre for quality healthcare education, skill development, and professional excellence, with the aim of creating competent, compassionate, and confident healthcare professionals.
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Our programmes bridge the gap between classroom theory and practical competence through structured education, hands-on skill laboratories, simulation-based training, and supervised academic learning at Livaura Institute of Health Sciences.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-3.5 shadow-2xs flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-800 border border-teal-200 font-bold">
                    ✓
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-900">Hospital Internship</h5>
                    <p className="text-[11px] text-slate-500">Free hands-on hospital training[cite: 1]</p>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-3.5 shadow-2xs flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-800 border border-teal-200 font-bold">
                    ✓
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-900">Paramedical Registration</h5>
                    <p className="text-[11px] text-slate-500">Assured upon course completion[cite: 1]</p>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-3.5 shadow-2xs flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-800 border border-teal-200 font-bold">
                    ✓
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-900">5-Step Model</h5>
                    <p className="text-[11px] text-slate-500">Learn, Practise, Apply, Excel</p>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-3.5 shadow-2xs flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-800 border border-teal-200 font-bold">
                    ✓
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-900">Vettillapara, Areekode</h5>
                    <p className="text-[11px] text-slate-500">Campus in Malappuram, Kerala[cite: 1]</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-teal-200/90 bg-teal-50/70 p-4 sm:p-5 flex items-start gap-3.5 sm:gap-4 shadow-2xs">
                <span className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl bg-teal-700 text-white font-bold text-sm sm:text-base shadow-sm">
                  ★
                </span>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                    Academic Leadership: Dr. Sreekala K N
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-600 mt-1 leading-relaxed">
                    Head of Institution, Livaura Institute of Health Sciences.
                    <span className="block italic text-teal-800 font-semibold mt-1">
                      “Teach with clarity. Mentor with compassion. Train with purpose. Inspire excellence.”
                    </span>
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3.5">
                <Link
                  href="/about"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#00897B] px-7 py-3 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-[#00796B] transition active:scale-95 text-center"
                >
                  <span>Read Full Institutional Story</span>
                  <span>→</span>
                </Link>
                <Link
                  href="/learning-models"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-7 py-3 text-xs sm:text-sm font-bold text-slate-800 hover:border-teal-700 hover:text-teal-700 transition active:scale-95 shadow-2xs text-center"
                >
                  <span>Explore Learning Model</span>
                  <span>↗</span>
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          LAYER 6: ARTICLES & INSIGHTS
      ========================================================================== */}
      <section
        ref={layer6Ref}
        id="articles-section"
        style={{
          transform: `scale(${l6Transform.scale})`,
          opacity: l6Transform.opacity,
          willChange: "transform, opacity",
          transformOrigin: "center center",
        }}
        className="relative z-20 bg-slate-50 text-slate-900 rounded-[28px] sm:rounded-[48px] shadow-[0_12px_44px_rgba(15,23,42,0.06)] border border-slate-200/90 py-12 sm:py-24 px-4 sm:px-6 lg:px-8 my-6 sm:my-14 max-w-[96%] sm:max-w-[97%] mx-auto transition-transform duration-75 ease-out"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-18">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-teal-800 bg-teal-50 border border-teal-200/80 px-3.5 py-1.5 rounded-full shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-600 animate-pulse" />
              Publications &amp; Academic Insights
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 mt-3.5 tracking-tight">
              Articles of Livaura Institute of Health Sciences
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2.5 max-w-xl mx-auto leading-relaxed">
              Perspectives connecting modern clinical practice and scientific education at Livaura Institute of Health Sciences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
            {articles.map((item) => (
              <article
                key={item.id}
                className="group rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:border-teal-600/50 hover:shadow-xl hover:-translate-y-1.5 shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="rounded-full bg-teal-50 border border-teal-200/80 px-2.5 py-0.5 text-[10px] font-bold text-teal-800 uppercase tracking-wider">
                      {item.tag}
                    </span>
                    <span className="text-[11px] font-medium text-slate-400">
                      {item.readTime}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-950 group-hover:text-teal-800 transition-colors leading-snug">
                    <Link href="/about">
                      {item.title}
                    </Link>
                  </h3>

                  <p className="text-xs text-slate-600 mt-2.5 sm:mt-3 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 sm:mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-slate-900">{item.author}</div>
                    <div className="text-[10px] text-slate-500">{item.authorRole}</div>
                  </div>

                  <Link
                    href="/about"
                    className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-50 text-slate-700 border border-slate-200 group-hover:bg-[#00897B] group-hover:text-white group-hover:border-[#00897B] transition-all text-xs font-bold"
                  >
                    →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 sm:mt-14 rounded-2xl border border-teal-200/80 bg-teal-50/70 p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800">
                Admissions &amp; Academic Inquiries
              </span>
              <h4 className="text-sm sm:text-base font-bold text-slate-950 mt-0.5">
                Livaura Institute of Health Sciences — Vettillapara, Areekode[cite: 1]
              </h4>
              <p className="text-xs text-slate-600 mt-1">
                Call: 7356566456[cite: 1] • Free hospital internship and assured paramedical registration[cite: 1].
              </p>
            </div>
            <a
              href="tel:7356566456"
              className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#00897B] px-5 py-2.5 text-xs font-bold text-white hover:bg-[#00796B] transition shadow-2xs"
            >
              <span>Call 7356566456</span>[cite: 1]
              <span>📞</span>
            </a>
          </div>

        </div>
      </section>
    </main>
  );
}