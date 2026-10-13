"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "bsc-nursing",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-white text-slate-900 pb-20 selection:bg-teal-700 selection:text-white">
      {/* =========================================================================
          LAYER 1: CONTACT US (FORM LEFT, LOCATION & MAP RIGHT)
      ========================================================================== */}
      <section className="relative bg-white pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-24 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Header Title */}
          <div className="max-w-3xl space-y-3.5 mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-600/30 bg-teal-50 px-3.5 py-1 text-xs font-bold text-teal-800">
              <span className="h-2 w-2 rounded-full bg-teal-600 animate-pulse" />
              <span>Admissions &amp; Academic Helpdesk • Academic Year 2026-2027</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-[1.12]">
              Connect with Our <br />
              <span className="bg-gradient-to-r from-teal-800 via-teal-700 to-emerald-700 bg-clip-text text-transparent">
                Admissions Office.
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Have questions regarding courses, eligibility, hospital clinical rotations, or campus visits? Reach out to our academic counsellors or visit our campus at Pathanapuram, Areekode[cite: 1, 2].
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* LEFT COLUMN: APPLICATION & INQUIRY FORM */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-10 shadow-sm">
                <div className="mb-6">
                  <h2 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight">
                    Submit Admission Inquiry
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Fill out your details and our academic desk will get in touch with curriculum and fee details.
                  </p>
                </div>

                {submitted ? (
                  <div className="rounded-2xl border border-teal-200 bg-teal-50/80 p-6 text-center space-y-3">
                    <span className="flex h-12 w-12 mx-auto items-center justify-center rounded-full bg-[#00897B] text-white font-bold text-xl shadow-sm">
                      ✓
                    </span>
                    <h3 className="text-lg font-bold text-slate-950">
                      Inquiry Received Successfully
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Thank you for contacting Rivaura Institute of Health Sciences. An academic coordinator will review your request and get in touch shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-2 text-xs font-bold text-teal-800 underline hover:text-teal-600"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-600 focus:outline-hidden focus:ring-1 focus:ring-teal-600"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="name@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-600 focus:outline-hidden focus:ring-1 focus:ring-teal-600"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-600 focus:outline-hidden focus:ring-1 focus:ring-teal-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Program of Interest *
                      </label>
                      <select
                        value={formData.course}
                        onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-xs sm:text-sm text-slate-900 focus:border-teal-600 focus:outline-hidden focus:ring-1 focus:ring-teal-600"
                      >
                        <option value="bsc-nursing">B.Sc. Nursing &amp; Clinical Care</option>
                        <option value="diploma-emergency">Emergency Medical Technology</option>
                        <option value="medical-lab-tech">Medical Laboratory Technology (BMLT)</option>
                        <option value="radiology-imaging">Radiology &amp; Medical Imaging</option>
                        <option value="operation-theatre-tech">Operation Theatre &amp; Anesthesia Tech</option>
                        <option value="cardiac-care-tech">Cardiac Care &amp; Perfusion Technology</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Your Query or Message
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Please write your questions regarding eligibility, admission deadlines, or clinical rotation schedules..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-600 focus:outline-hidden focus:ring-1 focus:ring-teal-600"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-xl bg-[#00897B] py-3.5 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-[#00796B] transition active:scale-98"
                    >
                      Submit Admission Application
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* RIGHT COLUMN: LOCATION, MAP & CLINICAL CAMPUS DETAILS */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Interactive Google Maps Embed */}
              <div className="rounded-3xl border-2 border-slate-200 bg-white overflow-hidden shadow-sm">
                <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-teal-800">
                      Campus Navigation
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-950 mt-0.5">
                      Rivaura Hospital &amp; Institute Campus[cite: 1, 2]
                    </h3>
                  </div>
                  <span className="rounded-full bg-teal-50 border border-teal-200 px-3 py-1 text-[10px] font-bold text-teal-800">
                    Areekode, Malappuram[cite: 1]
                  </span>
                </div>

                {/* Map Frame targeting Pathanapuram, Areekode */}
                <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-slate-100">
                  <iframe
                    title="Rivaura Hospital Location Map"
                    src="https://maps.google.com/maps?q=Rivaura%20Hospital,%20Pathanapuram,%20Areekode,%20Malappuram,%20Kerala&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    className="border-0 w-full h-full"
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <div className="p-4 sm:p-5 bg-slate-50 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">
                    Open with Google Maps on your phone:
                  </span>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Rivaura+Hospital+Pathanapuram+Areekode"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-[#00897B] px-4 py-2 text-xs font-bold text-white shadow-2xs hover:bg-[#00796B] transition"
                  >
                    <span>Get Directions</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>

              {/* Verified Contact Details Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-teal-800 block mb-1">
                    Campus Address[cite: 1, 2]
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                    Rivaura Institute of Health Sciences[cite: 2]
                  </p>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Affiliated with Rivaura Hospital, Pathanapuram, Areekode, Malappuram District, Kerala - 673639[cite: 1, 2].
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-teal-800 block mb-1">
                    Emergency &amp; Casualty[cite: 1]
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                    24/7 Clinical Emergency Support[cite: 1]
                  </p>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Casualty, Trauma Care, and Pharmacy operate round-the-clock at the hospital premises[cite: 1].
                  </p>
                </div>
              </div>

              {/* Working Hours & Hospital Website Link */}
              <div className="rounded-2xl border border-teal-200/90 bg-teal-50/70 p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800">
                    Academic Office Hours
                  </span>
                  <p className="text-xs text-slate-700 mt-0.5 font-medium">
                    Monday to Saturday: 9:00 AM – 5:00 PM (Casualty Open 24/7)[cite: 1]
                  </p>
                </div>
                <a
                  href="https://www.rivaurahospital.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-xs font-bold text-teal-800 underline hover:text-teal-600"
                >
                  Visit Rivaura Hospital Website ↗
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>
    </main>
  );
}