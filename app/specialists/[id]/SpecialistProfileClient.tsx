"use client";

import Link from "next/link";
import { Specialist } from "../specialists-data";

export default function SpecialistProfileClient({ doctor }: { doctor: Specialist }) {
  return (
    <main className="min-h-screen bg-white text-slate-900 pb-20">
      {/* Top Breadcrumb & Return Bar */}
      <div className="border-b border-slate-200 bg-slate-50 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link
            href="/#specialists-section"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-teal-800 hover:text-teal-600 transition"
          >
            <span>←</span>
            <span>Back to All Specialists</span>
          </Link>
          <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
            Faculty Profile
          </span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Portrait & Details */}
          <div className="lg:col-span-5">
            <div className="sticky top-24 rounded-3xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
              <div className="relative aspect-[3/3.8] w-full rounded-2xl overflow-hidden bg-gradient-to-b from-slate-200 via-slate-100 to-teal-50 border border-slate-200">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop";
                  }}
                />
                <span className="absolute top-3 right-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-teal-800 border border-slate-200 shadow-2xs">
                  Active Hospital Faculty
                </span>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-200 space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500">Department</span>
                  <span className="font-semibold text-slate-800 text-right">{doctor.hospitalDept}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500">Experience</span>
                  <span className="font-semibold text-teal-800">{doctor.experience}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500">Parent Hospital</span>
                  <span className="font-semibold text-slate-800">Rivaura Hospital</span>
                </div>
              </div>

              <div className="mt-6">
                <Link
                  href="/contact"
                  className="block w-full text-center rounded-xl bg-[#00897B] py-3 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-[#00796B] transition"
                >
                  Apply to Learn Under {doctor.name.split(" ")[0]} {doctor.name.split(" ")[1]}
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Biography & Specialties */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="inline-block rounded-md bg-teal-50 border border-teal-200 px-3 py-1 text-xs font-mono font-bold text-teal-900 mb-2">
                {doctor.degrees}
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
                {doctor.name}
              </h1>
              <p className="text-base sm:text-lg font-bold text-teal-700 mt-1">
                {doctor.profession}
              </p>
              <p className="text-xs text-slate-500 italic mt-0.5">
                {doctor.hospitalDept}
              </p>
            </div>

            {/* Biography */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs">
              <h2 className="text-sm font-extrabold uppercase tracking-wider text-teal-900 mb-3">
                Faculty Biography &amp; Academic Role
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed font-normal">
                {doctor.biography}
              </p>
            </div>

            {/* Teaching Specializations */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-7 shadow-xs">
              <h2 className="text-sm font-extrabold uppercase tracking-wider text-teal-900 mb-4">
                Clinical Specializations &amp; Lab Modules
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {doctor.specializations.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-800 bg-white p-3 rounded-xl border border-slate-200 font-medium">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-800 font-bold text-[10px]">
                      ✓
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hospital Contributions */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs">
              <h2 className="text-sm font-extrabold uppercase tracking-wider text-teal-900 mb-3">
                Hospital Contributions
              </h2>
              <ul className="space-y-2.5">
                {doctor.clinicalHighlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium leading-relaxed">
                    <span className="h-2 w-2 rounded-full bg-teal-600 mt-1.5 shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}