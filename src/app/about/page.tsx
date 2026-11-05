import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata = {
  title: "About | Startup Expo 2026",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-amber-600">About the event</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">Startup Expo 2026</h1>
        <p className="mt-6 text-lg leading-relaxed text-slate-600">
          Startup Expo 2026 is a three-day startup exhibition that brings together founders,
          entrepreneurs, investors, mentors, buyers and the public under one roof.
        </p>
        <p className="mt-4 leading-relaxed text-slate-600">
          Our mission is simple: turn ideas into innovation, and innovation into business.
          Whether you are showcasing a product, raising capital, finding partners or exploring
          the startup ecosystem — this is where meaningful connections happen.
        </p>

        <h2 className="mt-12 text-2xl font-bold text-slate-900">Who should attend?</h2>
        <ul className="mt-4 space-y-3 text-slate-600">
          <li className="flex gap-3"><span className="text-amber-500">•</span> Startup founders and early-stage teams</li>
          <li className="flex gap-3"><span className="text-amber-500">•</span> Investors, angels and VCs</li>
          <li className="flex gap-3"><span className="text-amber-500">•</span> Mentors and industry experts</li>
          <li className="flex gap-3"><span className="text-amber-500">•</span> Corporate buyers and business visitors</li>
          <li className="flex gap-3"><span className="text-amber-500">•</span> Students and aspiring entrepreneurs</li>
        </ul>

        <h2 className="mt-12 text-2xl font-bold text-slate-900">Exhibition zones</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {["Product Showcase", "Technology & Digital", "Business Services", "Ideas & Innovation", "Investor & Mentor Lounge", "Startup Pitch Arena"].map((z) => (
            <div key={z} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-800">
              {z}
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link href="/register" className="inline-flex rounded-lg bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-amber-400">
            Register now
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
