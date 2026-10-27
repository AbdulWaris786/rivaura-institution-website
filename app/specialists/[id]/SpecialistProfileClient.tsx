"use client";

import Link from "next/link";
import { Specialist } from "../specialists-data";

export default function SpecialistProfileClient({ doctor }: { doctor: Specialist }) {
  return (
    <main className="min-h-screen bg-white text-slate-900 pb-20 selection:bg-teal-700 selection:text-white">
      {/* Top Banner Navigation */}
      <div className="border-b border-slate-200 bg-slate-50 py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link
            href="/#specialists-section"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-800 hover:text-teal-600 transition"
          >
            <span>← Back to Faculty</span>
          </Link>
          <span className="text-[11px] font-mono font-medium text-slate-500">
            Livaura Academic Faculty
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Profile Card & Photo */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-slate-200 bg-white p-4 sm:p-6 shadow-sm">
              <div className="relative aspect-[3/3.8] w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-100 flex items-end justify-center">
                <img
                  src={doctor.image ? `/${doctor.image.replace(/^\//, "")}` : "/Livaura Institute Grand Entrance.png"}
                  alt={doctor.name}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop";
                  }}
                />
                <span className="absolute top-3 right-3 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold text-teal-800 border border-slate-200 shadow-xs">
                  Faculty Mentor
                </span>
              </div>

              <div className="mt-5 space-y-1.5 text-center">
                <h1 className="text-xl sm:text-2xl font-black text-slate-950">
                  {doctor.name}
                </h1>
                <p className="text-xs sm:text-sm font-semibold text-teal-700">
                  {doctor.profession}
                </p>
                <div className="inline-block rounded-md bg-teal-50 border border-teal-200 px-3 py-1 text-xs font-mono font-bold text-teal-900 mt-1">
                  {doctor.degrees}
                </div>
                <p className="text-xs text-slate-500 italic pt-1">
                  {doctor.hospitalDept}
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col gap-2.5">
                <Link
                  href="/contact"
                  className="text-center rounded-xl bg-[#00897B] py-3 text-xs font-bold text-white shadow-xs hover:bg-[#00796B] transition"
                >
                  Inquire for Admissions
                </Link>
                <a
                  href="tel:7356566456"
                  className="text-center rounded-xl border border-slate-300 bg-white py-2.5 text-xs font-bold text-slate-800 hover:border-teal-700 hover:text-teal-700 transition"
                >
                  Call Helpline: 7356566456
                </a>
              </div>
            </div>
          </div>

          {/* Bio & Specializations */}
          <div className="lg:col-span-7 space-y-8">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8 shadow-xs">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-teal-800 block mb-2">
                Faculty Overview
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight">
                Academic Background &amp; Mentorship
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 mt-3 leading-relaxed font-normal">
                {doctor.bio ||
                  "Dedicated healthcare educator guiding students across academic coursework, clinical simulation drills, and supervised practical healthcare exposure."}
              </p>
            </div>

            {/* Specializations List with Safe Fallback */}
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8 shadow-xs">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-teal-800 block mb-2">
                Core Domains
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight mb-4">
                Areas of Expertise &amp; Instruction
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(doctor.specializations ?? []).map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 text-xs text-slate-800 bg-white p-3.5 rounded-xl border border-slate-200 font-medium shadow-2xs"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-800 font-bold text-[10px]">
                      ✓
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Campus Highlight Box */}
            <div className="rounded-2xl border border-teal-200 bg-teal-50/70 p-5 flex items-center justify-between gap-4">
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                  Livaura Institute of Health Sciences
                </h3>
                <p className="text-[11px] text-slate-600 mt-0.5">
                  Vettillapara, Areekode, Malappuram • Free Hospital Internship &amp; Assured Registration
                </p>
              </div>
              <Link
                href="/services"
                className="shrink-0 text-xs font-bold text-teal-800 hover:text-teal-600 underline"
              >
                View Courses →
              </Link>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}