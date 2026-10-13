"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { specialistsData } from "./specialists/specialists-data";

export default function HomePage() {
  const layer1Ref = useRef<HTMLDivElement>(null);
  const layer2Ref = useRef<HTMLElement>(null);
  const layer3Ref = useRef<HTMLElement>(null);
  const layer4Ref = useRef<HTMLElement>(null);
  const layer5Ref = useRef<HTMLElement>(null);

  const [l1Transform, setL1Transform] = useState({ scale: 1, opacity: 1 });
  const [l2Transform, setL2Transform] = useState({ scale: 0.95, opacity: 0.8 });
  const [l3Transform, setL3Transform] = useState({ scale: 0.95, opacity: 0.8 });
  const [l4Transform, setL4Transform] = useState({ scale: 0.95, opacity: 0.8 });
  const [l5Transform, setL5Transform] = useState({ scale: 0.95, opacity: 0.8 });

  useEffect(() => {
    let ticking = false;

    const updateTransforms = () => {
      // Small/Dynamic viewport height measurement for reliable mobile browser chrome handling
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const vw = window.innerWidth || document.documentElement.clientWidth;
      const scrollY = window.scrollY;

      // On mobile devices (< 768px), keep scaling gentle so content never clips or blurs
      const isMobile = vw < 768;
      const minScale = isMobile ? 0.96 : 0.9;
      const scaleDelta = 1 - minScale;
      const minOpacity = isMobile ? 0.75 : 0.4;

      // 1. Layer 1: Hero fade & pushback
      const l1Progress = Math.min(1, Math.max(0, scrollY / (vh * 0.65)));
      setL1Transform({
        scale: Math.max(minScale, 1 - l1Progress * scaleDelta),
        opacity: Math.max(0, 1 - l1Progress * 1.15),
      });

      // Helper function: accurately checks entry & true exit without prematurely fading tall content
      const computeLayerTransform = (el: HTMLElement | null) => {
        if (!el) return { scale: minScale, opacity: minOpacity };

        const rect = el.getBoundingClientRect();

        // 1) Entry Progress: As element enters from bottom of screen toward middle
        const enterProgress = Math.min(1, Math.max(0, (vh - rect.top) / (vh * 0.75)));

        // 2) Exit Progress: ONLY begins when the bottom of this layer approaches top of the viewport
        // This ensures mobile users can scroll all cards without premature fading
        const exitZone = vh * 0.6;
        const exitProgress = rect.bottom < exitZone
          ? Math.min(1, Math.max(0, (exitZone - rect.bottom) / exitZone))
          : 0;

        let scale = minScale;
        let opacity = minOpacity;

        if (exitProgress > 0) {
          // Zoom out on actual exit
          scale = Math.max(isMobile ? 0.94 : 0.88, 1 - exitProgress * (isMobile ? 0.06 : 0.12));
          opacity = Math.max(isMobile ? 0.4 : 0.2, 1 - exitProgress * 0.8);
        } else {
          // Zoom in smoothly on entrance
          scale = minScale + enterProgress * scaleDelta;
          opacity = minOpacity + enterProgress * (1 - minOpacity);
        }

        return { scale, opacity };
      };

      if (layer2Ref.current) setL2Transform(computeLayerTransform(layer2Ref.current));
      if (layer3Ref.current) setL3Transform(computeLayerTransform(layer3Ref.current));
      if (layer4Ref.current) setL4Transform(computeLayerTransform(layer4Ref.current));
      if (layer5Ref.current) setL5Transform(computeLayerTransform(layer5Ref.current));

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

  const courses = [
    {
      id: "bsc-nursing",
      title: "B.Sc. Nursing & Clinical Care",
      subtitle: "4-Year Professional Undergraduate Degree",
      description:
        "Comprehensive clinical training integrating bedside hospital rotations, pharmacology, critical care, and patient triage protocols[cite: 1].",
      badge: "Clinical Core",
      icon: (
        <svg className="w-6 h-6 text-teal-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      id: "diploma-emergency",
      title: "Emergency Medical Technology",
      subtitle: "2-Year Advanced Diploma",
      description:
        "High-fidelity trauma simulation, rapid cardiac resuscitation, triage management, and ambulance mobile ICU care procedures[cite: 1].",
      badge: "Critical Care",
      icon: (
        <svg className="w-6 h-6 text-teal-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      id: "medical-lab-tech",
      title: "Medical Laboratory Technology (BMLT)",
      subtitle: "3-Year Allied Health Specialization",
      description:
        "Hands-on diagnostics covering clinical hematology, biochemistry, molecular pathology, and microbiology automated testing[cite: 1].",
      badge: "Diagnostics",
      icon: (
        <svg className="w-6 h-6 text-teal-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      id: "radiology-imaging",
      title: "Radiology & Medical Imaging",
      subtitle: "3-Year Diagnostic Fellowship",
      description:
        "Advanced practical operation of MRI scanners, Multi-slice CT units, Digital Radiography, and Sonography imaging systems[cite: 1].",
      badge: "Imaging Tech",
      icon: (
        <svg className="w-6 h-6 text-teal-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
    },
    {
      id: "operation-theatre-tech",
      title: "Operation Theatre & Anesthesia Tech",
      subtitle: "2-Year Surgical Certification",
      description:
        "Sterilization management, laparoscopic instrument preparation, ventilator setup, and direct surgical assistance in OT suites[cite: 1].",
      badge: "Surgical Suite",
      icon: (
        <svg className="w-6 h-6 text-teal-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
    },
    {
      id: "cardiac-care-tech",
      title: "Cardiac Care & Perfusion Technology",
      subtitle: "3-Year Advanced Clinical Specialty",
      description:
        "Cardiac catheterization assistance, ECG telemetry interpretation, echo monitoring, and heart-lung machine support systems[cite: 1].",
      badge: "Cardiology",
      icon: (
        <svg className="w-6 h-6 text-teal-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  const articles = [
    {
      id: "clinical-education-bridge",
      tag: "Academic Leadership",
      title: "Connecting Healthcare Delivery with Healthcare Education",
      desc: "Dr. Sreekala K N explores how direct integration with Rivaura Hospital enables students to transition seamlessly from knowledge and simulation to clinical competence[cite: 3, 4].",
      author: "Dr. Sreekala K N[cite: 3]",
      authorRole: "Head of Institution, Rivaura Institute of Health Sciences[cite: 3]",
      readTime: "5 min read",
    },
    {
      id: "hospital-standards-pathanapuram",
      tag: "Clinical Care",
      title: "Modern Clinical Standards & 24/7 Emergency Readiness in Areekode",
      desc: "A review of how Rivaura Hospital serves Pathanapuram and surrounding communities with full Clinical Establishment Act compliance and dedicated emergency care[cite: 2].",
      author: "Clinical Operations Team",
      authorRole: "Rivaura Hospital[cite: 2]",
      readTime: "4 min read",
    },
    {
      id: "learning-model-2030",
      tag: "Institutional Vision",
      title: "The 5-Step Learning Model: Building Competence, Confidence, and Character",
      desc: "An examination of why healthcare education must extend beyond diplomas — focusing on practical simulation, ethics, and Rivaura's 2030 benchmark mission[cite: 4].",
      author: "Academic Advisory Board",
      authorRole: "Rivaura Institute of Health Sciences[cite: 4]",
      readTime: "6 min read",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-teal-700 selection:text-white overflow-x-hidden">
      {/* =========================================================================
          LAYER 1: FULL-BLEED BACKGROUND HERO (RESPONSIVE STICKY FRAME)
      ========================================================================== */}
      <div ref={layer1Ref} className="relative min-h-[92svh] sm:min-h-screen w-full overflow-hidden bg-slate-950">
        <section
          style={{
            opacity: l1Transform.opacity,
            transform: `scale(${l1Transform.scale})`,
            willChange: "transform, opacity",
          }}
          className="sticky top-0 left-0 w-full min-h-[92svh] sm:min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-14 sm:py-20 z-0 overflow-hidden"
        >
          <div className="absolute inset-0 -z-20 overflow-hidden">
            <img
              src="/building-photo-one.jpeg"
              alt="Rivaura Institute Campus"
              className="w-full h-full object-cover object-center filter brightness-90 contrast-105"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop";
              }}
            />
            <div className="absolute inset-0 bg-slate-950/40 backdrop-brightness-95" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/35 to-slate-950/50" />
          </div>

          <div className="relative max-w-5xl mx-auto w-full text-center z-10 space-y-4 sm:space-y-6 py-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-400/40 bg-slate-900/80 px-3.5 sm:px-4 py-1.5 text-[11px] sm:text-xs font-bold text-teal-300 shadow-lg backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-teal-400 animate-pulse shrink-0" />
              <span className="truncate">Affiliated with Rivaura Hospital • Learn Today. Excel Tomorrow[cite: 1, 4]</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.14] drop-shadow-lg">
              Building Skills. <br className="hidden sm:inline" />
              Creating Professionals. <br />
              <span className="bg-gradient-to-r from-teal-300 via-teal-200 to-emerald-300 bg-clip-text text-transparent">
                Shaping Tomorrow[cite: 1]
              </span>
            </h1>

            <p className="max-w-2xl mx-auto text-xs sm:text-base md:text-lg text-slate-100 leading-relaxed font-normal drop-shadow-md px-2">
              Rivaura Institute of Health Sciences bridges the gap between medical knowledge and practical clinical competence through simulation labs and direct patient rotations at Rivaura Hospital[cite: 1, 4].
            </p>

            <div className="inline-block rounded-xl border border-white/20 bg-slate-900/75 px-3.5 sm:px-6 py-2.5 sm:py-3 max-w-xl mx-auto shadow-xl backdrop-blur-md">
              <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider text-teal-300 block mb-0.5">
                Our Educational Promise[cite: 1, 4]
              </span>
              <p className="font-mono text-[11px] sm:text-sm text-white font-semibold">
                Knowledge + Skills + Values + Experience ={" "}
                <span className="text-teal-300 font-bold">Professional Excellence[cite: 1, 4]</span>
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-6 max-w-md mx-auto pt-2 border-t border-white/20">
              <div className="rounded-xl bg-slate-900/75 p-2 sm:p-3 shadow-lg border border-white/10 backdrop-blur-md">
                <div className="text-lg sm:text-2xl font-black text-white">100%</div>
                <div className="text-[9px] sm:text-[11px] text-slate-200 font-medium">Clinical Exposure[cite: 1, 4]</div>
              </div>
              <div className="rounded-xl bg-slate-900/75 p-2 sm:p-3 shadow-lg border border-white/10 backdrop-blur-md">
                <div className="text-lg sm:text-2xl font-black text-white">5-Step</div>
                <div className="text-[9px] sm:text-[11px] text-slate-200 font-medium">Learning Model[cite: 1, 4]</div>
              </div>
              <div className="rounded-xl bg-slate-900/75 p-2 sm:p-3 shadow-lg border border-white/10 backdrop-blur-md">
                <div className="text-lg sm:text-2xl font-black text-teal-300">2030</div>
                <div className="text-[9px] sm:text-[11px] text-slate-200 font-medium">Vision Benchmark[cite: 1, 4]</div>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
              <Link
                href="#courses-section"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#00897B] px-8 py-3.5 text-xs sm:text-sm font-bold text-white shadow-xl hover:bg-[#00796B] transition active:scale-95 text-center"
              >
                <span>Explore Courses</span>
                <span className="animate-bounce">↓</span>
              </Link>
              <Link
                href="/about"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-slate-900/80 px-8 py-3.5 text-xs sm:text-sm font-bold text-white hover:border-teal-400 hover:text-teal-300 transition active:scale-95 shadow-xl backdrop-blur-md text-center"
              >
                <span>About Our Institute</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* =========================================================================
          LAYER 2: HEALTHCARE COURSES (MOBILE OPTIMIZED TRANSITIONS)
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

          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-18">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-teal-800 bg-teal-100/80 border border-teal-300 px-3.5 py-1.5 rounded-full inline-block">
              Hospital Curriculum
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 mt-3">
              Specialized Healthcare Courses
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 sm:mt-3 max-w-xl mx-auto leading-relaxed font-medium">
              Curated programs engineered with practical simulation labs and active bedside rotations inside Rivaura Hospital departments[cite: 1, 4].
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className="group relative rounded-2xl border border-slate-300 bg-white p-5 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:border-teal-600 hover:shadow-lg hover:-translate-y-1 shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-teal-50 border border-teal-200 shadow-xs group-hover:scale-105 group-hover:bg-[#00897B] group-hover:text-white transition-all duration-300">
                      {course.icon}
                    </div>
                    <span className="rounded-full bg-slate-100 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[10px] font-bold text-teal-800 uppercase tracking-wider border border-slate-200">
                      {course.badge}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-xl font-bold text-slate-950 mt-4 sm:mt-5 group-hover:text-teal-700 transition-colors duration-200">
                    {course.title}
                  </h3>
                  <h4 className="text-xs font-bold text-teal-700 mt-1">
                    {course.subtitle}
                  </h4>

                  <p className="text-xs text-slate-600 mt-3 leading-relaxed font-normal">
                    {course.description}
                  </p>
                </div>

                <div className="mt-6 sm:mt-8 pt-4 sm:pt-5 border-t border-slate-200">
                  <Link
                    href="/services"
                    className="relative group/btn inline-flex w-full items-center justify-between rounded-xl bg-slate-50 px-3.5 py-2 sm:px-4 sm:py-2.5 text-xs font-bold text-teal-800 border border-slate-300 transition-all duration-300 hover:bg-[#00897B] hover:text-white hover:border-[#00897B]"
                  >
                    <span className="transition-transform duration-300 group-hover/btn:translate-x-1">
                      Know More About Course
                    </span>
                    <span className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-teal-200 group-hover/btn:bg-white group-hover/btn:text-[#00897B] transition-all duration-300 group-hover/btn:rotate-45">
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
          LAYER 3: EXECUTIVE SPECIALIST CARDS
      ========================================================================== */}
      <section
        ref={layer3Ref}
        id="specialists-section"
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
              Clinical Faculty
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 mt-3.5 tracking-tight">
              Learn Under Hospital Specialists
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2.5 max-w-xl mx-auto leading-relaxed">
              Our professors are senior consultants actively practicing at Rivaura Hospital, providing students with immediate real-world guidance[cite: 1].
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
                      src={doc.image}
                      alt={doc.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-104"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop";
                      }}
                    />

                    <div className="absolute top-2.5 right-2.5 rounded-full bg-white/90 backdrop-blur-md px-2.5 py-1 text-[10px] font-bold text-teal-800 border border-slate-200/80 shadow-2xs">
                      Hospital Faculty
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
          LAYER 4: ABOUT RIVAURA INSTITUTION
      ========================================================================== */}
      <section
        ref={layer4Ref}
        id="about-institution-section"
        style={{
          transform: `scale(${l4Transform.scale})`,
          opacity: l4Transform.opacity,
          willChange: "transform, opacity",
          transformOrigin: "center center",
        }}
        className="relative z-20 bg-slate-50 text-slate-900 rounded-[28px] sm:rounded-[48px] shadow-[0_12px_44px_rgba(15,23,42,0.07)] border-2 border-slate-200 py-12 sm:py-24 px-4 sm:px-6 lg:px-8 my-6 sm:my-14 max-w-[96%] sm:max-w-[97%] mx-auto transition-transform duration-75 ease-out"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Left Column: Campus Photo */}
            <div className="lg:col-span-5 relative order-2 lg:order-1">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200/90 bg-white shadow-xl">
                  <div className="aspect-[4/4.5] sm:aspect-[4/4.8] w-full relative overflow-hidden bg-slate-100">
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
                    <h4 className="text-base sm:text-lg font-black leading-snug">
                      Rivaura Institute of Health Sciences[cite: 4]
                    </h4>
                    <p className="text-xs text-slate-200 mt-1 leading-relaxed">
                      Integrated clinical campus affiliated with Rivaura Hospital at Pathanapuram, Areekode[cite: 1, 2].
                    </p>
                  </div>
                </div>

                <div className="absolute -top-3 sm:-top-4 -right-1 sm:-right-4 rounded-2xl border border-teal-200 bg-white p-3 sm:p-3.5 shadow-lg flex items-center gap-2.5 sm:gap-3">
                  <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-teal-50 border border-teal-200 text-teal-800 font-black text-xs sm:text-sm">
                    ✓
                  </div>
                  <div>
                    <div className="text-[11px] sm:text-xs font-bold text-slate-900">5-Step Practical Model[cite: 1, 4]</div>
                    <div className="text-[9px] sm:text-[10px] text-teal-700 font-medium">Learn → Practise → Excel[cite: 4]</div>
                  </div>
                </div>

                <div className="absolute -bottom-3 sm:-bottom-4 -left-1 sm:-left-4 rounded-2xl border border-slate-200 bg-white/95 backdrop-blur-md px-3 sm:px-4 py-2 sm:py-2.5 shadow-lg flex items-center gap-2">
                  <span className="h-2 sm:h-2.5 w-2 sm:w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[11px] sm:text-xs font-bold text-slate-800">
                    Benchmark Vision by 2030[cite: 1, 4]
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Institutional Details */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6 order-1 lg:order-2 text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-teal-600/30 bg-teal-50 px-3.5 py-1 text-xs font-bold text-teal-800">
                <span className="h-2 w-2 rounded-full bg-teal-600" />
                <span>About Rivaura Institute of Health Sciences[cite: 4]</span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 leading-[1.15]">
                Creating Healthcare Professionals. <br />
                <span className="bg-gradient-to-r from-teal-800 via-teal-700 to-emerald-700 bg-clip-text text-transparent">
                  Shaping Tomorrow[cite: 1, 4].
                </span>
              </h2>

              <p className="text-xs sm:text-base text-slate-700 leading-relaxed font-normal">
                Rivaura Institute of Health Sciences is envisioned as a centre for quality healthcare education, skill development, and professional excellence, with the aim of creating competent, compassionate, and confident healthcare professionals[cite: 4].
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Our programmes bridge the gap between classroom theory and practical competence through structured education, hands-on skill laboratories, simulation-based training, and direct supervised clinical exposure inside Rivaura Hospital[cite: 4].
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-2xs flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-800 border border-teal-200">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-900">Bedside Clinical Rotations[cite: 4]</h5>
                    <p className="text-[11px] text-slate-500">Supervised Rivaura Hospital exposure[cite: 4]</p>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-2xs flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-800 border border-teal-200">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-900">Simulation Skill Labs[cite: 4]</h5>
                    <p className="text-[11px] text-slate-500">Procedural risk-free practice[cite: 3, 4]</p>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-2xs flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-800 border border-teal-200">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-900">5-Step Pedagogical Model[cite: 1, 4]</h5>
                    <p className="text-[11px] text-slate-500">Learn, Practise, Apply, Excel[cite: 4]</p>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-2xs flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-800 border border-teal-200">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-900">Areekode, Malappuram[cite: 2]</h5>
                    <p className="text-[11px] text-slate-500">Pathanapuram healthcare corridor[cite: 2]</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-teal-200/90 bg-teal-50/70 p-4 sm:p-5 flex items-start gap-3.5 sm:gap-4 shadow-2xs">
                <span className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl bg-teal-700 text-white font-bold text-sm sm:text-base shadow-sm">
                  ★
                </span>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                    Academic Leadership: Dr. Sreekala K N[cite: 3]
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-600 mt-1 leading-relaxed">
                    Head of Institution (Rivaura Institute) &amp; Assistant Medical Director (Rivaura Hospital)[cite: 3].
                    <span className="block italic text-teal-800 font-semibold mt-1">
                      “Teach with clarity. Mentor with compassion. Train with purpose. Inspire excellence[cite: 3].”
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
                  <span>Explore Learning Model[cite: 1, 4]</span>
                  <span>↗</span>
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          LAYER 5: ARTICLES OF THE RIVAURA INSTITUTION
      ========================================================================== */}
      <section
        ref={layer5Ref}
        id="articles-section"
        style={{
          transform: `scale(${l5Transform.scale})`,
          opacity: l5Transform.opacity,
          willChange: "transform, opacity",
          transformOrigin: "center center",
        }}
        className="relative z-20 bg-white text-slate-900 rounded-[28px] sm:rounded-[48px] shadow-[0_12px_44px_rgba(15,23,42,0.06)] border border-slate-200/90 py-12 sm:py-24 px-4 sm:px-6 lg:px-8 my-6 sm:my-14 max-w-[96%] sm:max-w-[97%] mx-auto transition-transform duration-75 ease-out"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-18">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-teal-800 bg-teal-50 border border-teal-200/80 px-3.5 py-1.5 rounded-full shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-600 animate-pulse" />
              Publications &amp; Hospital Updates[cite: 2, 4]
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 mt-3.5 tracking-tight">
              Articles of the Rivaura Institution
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2.5 max-w-xl mx-auto leading-relaxed">
              Perspectives connecting modern clinical practice at Rivaura Hospital with educational excellence at Rivaura Institute of Health Sciences[cite: 2, 4].
            </p>
          </div>

          {/* Featured Top Article Banner */}
          <div className="rounded-3xl border border-slate-200 bg-slate-50 overflow-hidden shadow-sm mb-8 sm:mb-12 grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-5 relative h-56 sm:h-80 lg:h-full min-h-[240px] overflow-hidden bg-slate-200">
              <img
                src="/building-photo-one.jpeg"
                alt="Rivaura Campus Clinical Building"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-bold uppercase tracking-widest bg-teal-800/90 px-2.5 py-1 rounded backdrop-blur-md">
                  Rivaura Hospital &amp; Institute Complex[cite: 2, 4]
                </span>
                <p className="text-xs text-slate-200 mt-1 font-medium">Pathanapuram, Areekode, Malappuram[cite: 2]</p>
              </div>
            </div>

            <div className="lg:col-span-7 p-5 sm:p-10 space-y-3.5 sm:space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 bg-teal-100/80 border border-teal-200 px-2.5 py-0.5 rounded-full">
                  Featured Editorial
                </span>
                <span className="text-xs text-slate-500 font-medium">• Clinical Standards</span>
              </div>

              <h3 className="text-lg sm:text-2xl lg:text-3xl font-black text-slate-950 leading-tight hover:text-teal-800 transition-colors">
                <Link href="/vision">
                  Bridging Bedside Hospital Rotations with High-Fidelity Simulation[cite: 4]
                </Link>
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                How our integrated academic ecosystem allows students to translate classroom theory directly into practical patient care, assisted by senior consultants actively treating patients inside Rivaura Hospital departments[cite: 1, 4].
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200">
                <div className="flex items-center gap-2.5 text-xs text-slate-700">
                  <div className="h-8 w-8 rounded-full bg-teal-700 text-white flex items-center justify-center font-bold text-xs">
                    R
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Dr. Sreekala K N[cite: 3]</div>
                    <div className="text-[10px] text-slate-500">Head of Institution[cite: 3]</div>
                  </div>
                </div>

                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-800 hover:text-teal-600 transition"
                >
                  <span>Read Article</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* 3 Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
            {articles.map((item) => (
              <article
                key={item.id}
                className="group rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:border-teal-600/50 hover:shadow-xl hover:-translate-y-1.5 shadow-xs"
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

          {/* Hospital Clinical Affiliation Strip */}
          <div className="mt-10 sm:mt-14 rounded-2xl border border-teal-200/80 bg-teal-50/70 p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800">
                Hospital Collaboration &amp; DMO Licensing Compliant[cite: 2]
              </span>
              <h4 className="text-sm sm:text-base font-bold text-slate-900 mt-0.5">
                Rivaura Hospital — Multispeciality Center, Areekode, Malappuram[cite: 2]
              </h4>
              <p className="text-xs text-slate-600 mt-1">
                24/7 Emergency Care, Orthopaedics, Surgery, and Diagnostic Laboratories serving Pathanapuram[cite: 2].
              </p>
            </div>
            <a
              href="https://www.rivaurahospital.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-1.5 rounded-xl bg-white px-5 py-2.5 text-xs font-bold text-teal-800 border border-teal-300 hover:bg-teal-700 hover:text-white hover:border-teal-700 transition shadow-2xs"
            >
              <span>Visit Rivaura Hospital</span>
              <span>↗</span>
            </a>
          </div>

        </div>
      </section>

      {/* =========================================================================
          BOTTOM APPLICATION & ROADMAP CALLOUT
      ========================================================================== */}
      <section className="relative z-20 bg-slate-50 py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200">
        <div className="rounded-2xl sm:rounded-3xl border border-slate-300 bg-white p-6 sm:p-12 lg:p-16 text-center shadow-md relative overflow-hidden">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full inline-block">
            Admissions Open • Academic Year 2026-2027
          </span>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 mt-3 sm:mt-4">
            Begin Your Medical Career Under Hospital Guidance[cite: 1]
          </h2>

          <p className="mt-3 text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
            Gain immediate access to clinical laboratories, simulation drills, and hands-on patient care training under verified medical professionals[cite: 1, 4].
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto rounded-xl bg-[#00897B] px-7 py-3 text-xs sm:text-sm font-bold text-white shadow-md transition hover:bg-[#00796B]"
            >
              Submit Admission Application
            </Link>
            <Link
              href="/vision"
              className="w-full sm:w-auto rounded-xl border border-slate-300 bg-white px-7 py-3 text-xs sm:text-sm font-bold text-slate-800 transition hover:border-teal-700 hover:text-teal-700 shadow-xs"
            >
              Explore Rivaura 2030 Roadmap[cite: 1, 4]
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}