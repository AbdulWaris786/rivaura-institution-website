import Link from "next/link";
import { notFound } from "next/navigation";
import { facilitiesData } from "../facilities-data";

// Required for output: 'export'
export function generateStaticParams() {
  return facilitiesData.map((fac) => ({
    id: fac.id,
  }));
}

export default async function FacilityDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const facility = facilitiesData.find((f) => f.id === id);

  if (!facility) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-slate-900 pb-20 selection:bg-teal-700 selection:text-white">
      {/* Top Breadcrumb */}
      <div className="border-b border-slate-200 bg-slate-50 py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link
            href="/services#why-choose-section"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-800 hover:text-teal-600 transition"
          >
            <span>← Back to Facilities</span>
          </Link>
          <span className="text-[11px] font-mono font-medium text-slate-500">
            Livaura Campus Infrastructure
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Image & Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-sm">
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-100">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover object-center"
                />
                <span className="absolute bottom-4 left-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-teal-800 border border-slate-200 shadow-sm">
                  {facility.facilityBadge}
                </span>
              </div>
            </div>

            <div className="rounded-2xl border border-teal-200 bg-teal-50/70 p-5">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-teal-800 block mb-1">
                Equipment &amp; Standards
              </span>
              <p className="font-mono text-xs text-slate-800 font-bold">
                {facility.spec}
              </p>
            </div>
          </div>

          {/* Right Column: Details & Features */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="inline-block rounded-md bg-teal-50 border border-teal-200 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-teal-800 mb-2">
                Laboratory Unit
              </span>
              <h1 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
                {facility.title}
              </h1>
              <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                {facility.overview || facility.desc}
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-7 shadow-2xs">
              <h2 className="text-sm sm:text-base font-bold text-slate-950 mb-3">
                Key Learning Features &amp; Equipment
              </h2>
              <div className="space-y-2.5">
                {(facility.features ?? []).map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 text-xs text-slate-800 bg-white p-3 rounded-xl border border-slate-200 font-medium"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-800 font-bold text-[10px]">
                      ✓
                    </span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs space-y-3">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Admissions &amp; Campus Tours
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Campus visits and laboratory walk-throughs are available at our Vettillapara campus, Areekode, Malappuram[cite: 1].
              </p>
              <div className="pt-1 flex flex-col sm:flex-row items-center gap-3">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto text-center rounded-xl bg-[#00897B] px-6 py-2.5 text-xs font-bold text-white shadow hover:bg-[#00796B] transition"
                >
                  Schedule Campus Visit
                </Link>
                <a
                  href="tel:7356566456"
                  className="w-full sm:w-auto text-center rounded-xl border border-slate-300 bg-white px-6 py-2.5 text-xs font-bold text-slate-800 hover:border-teal-700 hover:text-teal-700 transition"
                >
                  Call: 7356566456[cite: 1]
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}