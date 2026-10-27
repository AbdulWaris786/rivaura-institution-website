"use client";

import "./globals.css";
import Link from "next/link";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-xs">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-3.5">
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 shrink-0" onClick={() => setIsOpen(false)}>
          <div className="h-10 w-10 sm:h-11 sm:w-11 relative rounded-xl overflow-hidden border border-slate-200 shadow-xs flex items-center justify-center bg-white shrink-0">
            <img
              src="/livaura logo.png"
              alt="Livaura Institute Logo"
              className="w-full h-full object-contain p-0.5"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-bold tracking-tight text-slate-900 leading-tight">
              LIVAURA
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-wider text-teal-700 uppercase font-bold">
              Institute of Health Sciences
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-semibold text-slate-700">
          <Link href="/" className="hover:text-teal-700 transition-colors">Home</Link>
          <Link href="/services" className="hover:text-teal-700 transition-colors">Courses</Link>
          <Link href="/about" className="hover:text-teal-700 transition-colors">About Us</Link>
          <Link href="/vision" className="hover:text-teal-700 transition-colors">Vision</Link>
          <Link href="/learning-models" className="hover:text-teal-700 transition-colors">Learning Models</Link>
          <Link href="/contact" className="hover:text-teal-700 transition-colors">Contact Us</Link>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:7356566456"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-teal-300 bg-teal-50 px-3 py-1.5 text-xs font-bold text-teal-900 shadow-xs hover:bg-teal-100 transition"
          >
            <span>📞</span>
            <span>7356566456</span>
          </a>
          <Link
            href="/contact"
            className="hidden lg:inline-flex rounded-lg bg-[#00897B] px-4 py-2 text-xs font-semibold text-white shadow-md transition hover:bg-[#00796B]"
          >
            Admissions
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden rounded-lg p-2 text-slate-700 hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-6 py-5 space-y-3">
          <Link href="/" onClick={() => setIsOpen(false)} className="block text-sm font-semibold text-slate-800 hover:text-teal-700 py-1">Home</Link>
          <Link href="/services" onClick={() => setIsOpen(false)} className="block text-sm font-semibold text-slate-800 hover:text-teal-700 py-1">Courses</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="block text-sm font-semibold text-slate-800 hover:text-teal-700 py-1">About Us</Link>
          <Link href="/vision" onClick={() => setIsOpen(false)} className="block text-sm font-semibold text-slate-800 hover:text-teal-700 py-1">Vision</Link>
          <Link href="/learning-models" onClick={() => setIsOpen(false)} className="block text-sm font-semibold text-slate-800 hover:text-teal-700 py-1">Learning Models</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="block text-sm font-semibold text-slate-800 hover:text-teal-700 py-1">Contact Us</Link>
          <div className="pt-2 flex flex-col gap-2">
            <a
              href="tel:7356566456"
              className="text-center rounded-lg border border-teal-300 bg-teal-50 px-4 py-2 text-xs font-bold text-teal-900"
            >
              📞 Call: 7356566456
            </a>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block text-center rounded-lg bg-[#00897B] px-4 py-2.5 text-xs font-semibold text-white shadow hover:bg-[#00796B]"
            >
              Inquire Admissions
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#0F172B] py-12 text-slate-400 text-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="h-7 w-7 rounded-lg overflow-hidden bg-white border border-slate-700 shrink-0 flex items-center justify-center">
              <img src="/livaura logo.png" alt="Logo" className="w-full h-full object-contain p-0.5" />
            </div>
            <h4 className="font-bold text-white text-base">Livaura Institute of Health Sciences</h4>
          </div>
          <p className="text-xs text-slate-300 mt-2.5 max-w-sm leading-relaxed font-medium">
            Building Skills. Creating Professionals. Shaping Tomorrow. Offering recognized GNM, B.Sc MLT, B.Sc MIT, B.Sc AT &amp; OT, D.Pharm, and DMLT courses with free hospital internships.
          </p>
          <p className="text-xs text-teal-400 font-semibold mt-2">
            Campus: Vettillapara, Areekode, Malappuram
          </p>
        </div>

        <div>
          <h5 className="font-bold text-white text-sm mb-3">Courses &amp; Navigation</h5>
          <ul className="space-y-2 text-xs font-semibold">
            <li><Link href="/services" className="hover:text-teal-400 transition-colors">Our 6 Programs</Link></li>
            <li><Link href="/about" className="hover:text-teal-400 transition-colors">About Us &amp; Values</Link></li>
            <li><Link href="/vision" className="hover:text-teal-400 transition-colors">Vision &amp; 2030 Roadmap</Link></li>
            <li><Link href="/learning-models" className="hover:text-teal-400 transition-colors">5-Step Learning Model</Link></li>
            <li><Link href="/contact" className="hover:text-teal-400 transition-colors">Contact Admissions</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold text-white text-sm mb-3">Admissions Desk</h5>
          <p className="text-xs text-slate-300 leading-relaxed font-medium">
            Helpline: <a href="tel:7356566456" className="text-teal-400 font-bold hover:underline">7356566456</a>
          </p>
          <p className="text-xs text-slate-400 mt-1">
            Free hospital internship at reputed hospitals with assured paramedical registration upon course completion.
          </p>
          <Link
            href="/contact"
            className="text-xs text-teal-400 hover:underline mt-2.5 inline-block font-bold"
          >
            Apply Online &rarr;
          </Link>
        </div>
      </div>
      <div className="mt-8 sm:mt-12 border-t border-slate-800 pt-6 text-center text-xs text-slate-500 font-medium px-4">
        &copy; 2026 Livaura Institute of Health Sciences. All rights reserved.
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const isProd = process.env.NODE_ENV === "production";

  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        {isProd && <base href="/rivaura-institution-website/" />}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Livaura Institute of Health Sciences | Vettillapara, Areekode</title>
        <link rel="icon" href="/LIVAURA_LOGO-04.jpg" />
      </head>
      <body className="min-h-screen flex flex-col bg-white">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}