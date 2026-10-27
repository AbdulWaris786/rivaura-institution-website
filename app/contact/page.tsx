"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "GNM (General Nursing and Midwifery)",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          // Paste your Web3Forms Access Key here:
          access_key: "c2f1dc17-c0c0-4d2b-96b8-4cdc3067ba29",
          subject: `New Admission Inquiry from ${formData.fullName} - Livaura Institute`,
          from_name: "Livaura Admissions Desk",
          to_email: "warismuthuparamba@gmail.com",
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          course: formData.course,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          course: "GNM (General Nursing and Midwifery)",
          message: "",
        });
      } else {
        setErrorMessage(result.message || "Failed to send inquiry. Please try again.");
      }
    } catch {
      setErrorMessage("Network error. Please check your connection or contact via phone.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white text-slate-900 pb-20 selection:bg-teal-700 selection:text-white">
      <section className="relative bg-white pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-24 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
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
              Have questions regarding courses, eligibility, hospital clinical internships, or campus visits? Reach out to our academic counsellors or visit Livaura Institute of Health Sciences at Vettillapara, Areekode.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Form Column */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-10 shadow-sm">
                <div className="mb-6">
                  <h2 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight">
                    Submit Admission Inquiry
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Fill out your details and your inquiry will be routed directly to our academic admissions desk.
                  </p>
                </div>

                {submitted ? (
                  <div className="rounded-2xl border border-teal-200 bg-teal-50/80 p-6 text-center space-y-3">
                    <span className="flex h-12 w-12 mx-auto items-center justify-center rounded-full bg-[#00897B] text-white font-bold text-xl shadow-sm">
                      ✓
                    </span>
                    <h3 className="text-lg font-bold text-slate-950">
                      Inquiry Sent Successfully!
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Thank you for contacting Livaura Institute of Health Sciences. Your inquiry has been forwarded directly to our admissions team at <strong>warismuthuparamba@gmail.com</strong>. We will contact you shortly.
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
                    {errorMessage && (
                      <div className="rounded-xl border border-rose-200 bg-rose-50 p-3 text-xs font-semibold text-rose-700">
                        {errorMessage}
                      </div>
                    )}

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
                        <option value="GNM (General Nursing and Midwifery) - 3 Years (+2 Any Group)">
                          GNM - General Nursing and Midwifery (3 Years • +2 Any Group)
                        </option>
                        <option value="B.Sc MLT (Medical Laboratory Technology) - 4 Years (+2 Science)">
                          B.Sc MLT - Medical Laboratory Technology (4 Years • +2 Science)
                        </option>
                        <option value="B.Sc MIT (Medical Imaging Technology) - 4 Years (+2 Science)">
                          B.Sc MIT - Medical Imaging Technology (4 Years • +2 Science)
                        </option>
                        <option value="B.Sc AT & OT (Anaesthesia & OT Technology) - 4 Years (+2 Science)">
                          B.Sc AT &amp; OT - Anaesthesia &amp; Operation Theatre Tech (4 Years • +2 Science)
                        </option>
                        <option value="D.Pharm (Diploma in Pharmacy) - 2 Years (+2 Science)">
                          D Pharm - Diploma in Pharmacy (2 Years • +2 Science)
                        </option>
                        <option value="DMLT (Diploma in Medical Laboratory Technology) - 2 Years (+2 Science)">
                          D MLT - Diploma in Medical Laboratory Technology (2 Years • +2 Science)
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Your Query or Message
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Please write your questions regarding eligibility, admission deadlines, or internship schedules..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-600 focus:outline-hidden focus:ring-1 focus:ring-teal-600"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full rounded-xl bg-[#00897B] py-3.5 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-[#00796B] transition active:scale-98 disabled:opacity-50"
                    >
                      {loading ? "Sending Inquiry..." : "Submit Admission Application"}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Location & Contact Details Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="rounded-3xl border-2 border-slate-200 bg-white overflow-hidden shadow-sm">
                <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-teal-800">
                      Campus Navigation
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-950 mt-0.5">
                      Livaura Institute of Health Sciences Campus
                    </h3>
                  </div>
                  <span className="rounded-full bg-teal-50 border border-teal-200 px-3 py-1 text-[10px] font-bold text-teal-800">
                    Areekode, Malappuram
                  </span>
                </div>

                <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-slate-100">
                  <iframe
                    title="Livaura Institute of Health Sciences Location Map"
                    src="https://maps.google.com/maps?q=Vettillapara,%20Areekode,%20Malappuram,%20Kerala&t=&z=15&ie=UTF8&iwloc=&output=embed"
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
                    Open with Google Maps:
                  </span>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Vettillapara+Areekode+Malappuram"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-[#00897B] px-4 py-2 text-xs font-bold text-white shadow-2xs hover:bg-[#00796B] transition"
                  >
                    <span>Get Directions</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-teal-800 block mb-1">
                    Campus Address
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                    Livaura Institute of Health Sciences
                  </p>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Vettillapara, Areekode, Malappuram District, Kerala - 673639.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-teal-800 block mb-1">
                    Direct Contacts
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                    Phone: 7356566456
                  </p>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Email: warismuthuparamba@gmail.com
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-teal-200/90 bg-teal-50/70 p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800">
                    Academic Office Hours
                  </span>
                  <p className="text-xs text-slate-700 mt-0.5 font-medium">
                    Monday to Saturday: 9:00 AM – 5:00 PM
                  </p>
                </div>
                <a
                  href="tel:7356566456"
                  className="shrink-0 rounded-xl bg-[#00897B] px-4 py-2 text-xs font-bold text-white shadow-2xs hover:bg-[#00796B] transition"
                >
                  Call 7356566456
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}