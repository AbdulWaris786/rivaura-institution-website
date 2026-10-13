import Link from "next/link";
import { notFound } from "next/navigation";
import { facilitiesData } from "../facilities-data";

// Pre-render all facility pages at build time
export function generateStaticParams() {
  return facilitiesData.map((f) => ({
    id: f.id,
  }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function FacilityDetailPage({ params }: PageProps) {
  const { id } = await params;
  const facility = facilitiesData.find((f) => f.id === id);

  if (!facility) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-slate-900 pb-20">
      {/* Top Breadcrumb Navigation */}
      <div className="border-b border-slate-200 bg-slate-50 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link
            href="/services#why-choose-section"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-teal-800 hover:text-teal-600 transition"
          >
            <span>←</span>
            <span>Back to All Facilities</span>
          </Link>
          <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
            Clinical Infrastructure
          </span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14">
        {/* Main Header & Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Framed Image & Specs */}
          <div className="lg:col-span-5">
            <div className="sticky top-24 rounded-3xl border border-slate-200 bg-slate-50 p-4 shadow-sm space-y-4">
              <div className="relative aspect-[16/11] w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover object-center"
                />
                <span className="absolute top-3 right-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-teal-800 border border-slate-200 shadow-2xs">
                  {facility.facilityBadge}
                </span>
              </div>

              <div className="pt-2 border-t border-slate-200 space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500">Location</span>
                  <span className="font-semibold text-slate-800 text-right">Rivaura Hospital, Areekode[cite: 2]</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500">Standard</span>
                  <span className="font-semibold text-teal-800">Clinical Establishment Act Compliant[cite: 2]</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500">Access</span>
                  <span className="font-semibold text-slate-800">Supervised Student Rotations[cite: 4]</span>
                </div>
              </div>

              <div className="rounded-xl bg-teal-50/70 p-3.5 border border-teal-200/80">
                <span className="text-[10px] uppercase font-bold text-teal-800 block mb-1">
                  Core Technical Specification
                </span>
                <p className="text-xs font-mono text-slate-800 font-semibold">
                  {facility.spec}
                </p>
              </div>

              <Link
                href="/contact"
                className="block w-full text-center rounded-xl bg-[#00897B] py-3 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-[#00796B] transition active:scale-95"
              >
                Inquire to Train in this Facility
              </Link>
            </div>
          </div>

          {/* Right Column: Detailed Explanations & Equipment */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="inline-block rounded-md bg-teal-50 border border-teal-200 px-3 py-1 text-xs font-bold uppercase tracking-wider text-teal-900 mb-2">
                {facility.facilityBadge}
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
                {facility.title}
              </h1>
              <p className="text-sm sm:text-base font-semibold text-teal-700 mt-1.5">
                {facility.tagline}
              </p>
            </div>

            {/* Overview */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs">
              <h2 className="text-sm font-extrabold uppercase tracking-wider text-teal-900 mb-3">
                Clinical Overview & Student Role[cite: 4]
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed">
                {facility.overview}
              </p>
            </div>

            {/* Key Infrastructure Features */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-7 shadow-xs">
              <h2 className="text-sm font-extrabold uppercase tracking-wider text-teal-900 mb-4">
                Architectural & Operational Standards
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {facility.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-800 bg-white p-3 rounded-xl border border-slate-200 font-medium">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-800 font-bold text-[10px]">
                      ✓
                    </span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Equipped Technologies */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs">
              <h2 className="text-sm font-extrabold uppercase tracking-wider text-teal-900 mb-3">
                Available Equipment & Diagnostic Systems[cite: 1]
              </h2>
              <ul className="space-y-2.5">
                {facility.equipmentList.map((eq, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium leading-relaxed">
                    <span className="h-2 w-2 rounded-full bg-teal-600 mt-1.5 shrink-0" />
                    <span>{eq}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Safety & Quality Protocols */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-7 shadow-xs">
              <h2 className="text-sm font-extrabold uppercase tracking-wider text-teal-900 mb-3">
                Taught Clinical Safety Protocols[cite: 3, 4]
              </h2>
              <ul className="space-y-2">
                {facility.clinicalProtocols.map((cp, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                    <span className="font-mono text-teal-700 font-bold shrink-0">[{idx + 1}]</span>
                    <span>{cp}</span>
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