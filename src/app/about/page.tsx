import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata = {
  title: "About | Startup Expo 2026",
  description: "Learn about Startup Expo 2026 — mission, who should attend, and exhibition zones.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      <section className="relative h-64 overflow-hidden sm:h-80">
        <Image
          src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1600&q=80"
          alt="Startup team"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-slate-950/60" />
        <div className="relative mx-auto flex h-full max-w-6xl items-end px-4 pb-10 sm:px-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">About the event</p>
            <h1 className="mt-2 text-4xl font-bold text-white">Startup Expo 2026</h1>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <p className="text-lg leading-relaxed text-slate-600">
          Startup Expo 2026 is a three-day startup exhibition that brings together founders,
          entrepreneurs, investors, mentors, buyers and the public under one roof.
        </p>
        <p className="mt-4 leading-relaxed text-slate-600">
          Our mission is simple: turn <strong>ideas into innovation</strong>, and innovation into
          <strong> business</strong>. Whether you are showcasing a product, raising capital, finding
          partners or exploring the startup ecosystem — this is where meaningful connections happen.
        </p>

        <h2 className="mt-14 text-2xl font-bold text-slate-900">Why attend?</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            { t: "Showcase", d: "Display products, prototypes and demos to buyers and partners." },
            { t: "Raise capital", d: "Meet angels, VCs and mentors in curated lounge sessions." },
            { t: "Generate leads", d: "Talk directly to business visitors and enterprise buyers." },
            { t: "Learn & pitch", d: "Join workshops, panels and the live Pitch Arena." },
          ].map((x) => (
            <div key={x.t} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="font-semibold text-slate-900">{x.t}</h3>
              <p className="mt-1 text-sm text-slate-600">{x.d}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-14 text-2xl font-bold text-slate-900">Who should attend?</h2>
        <ul className="mt-4 space-y-3 text-slate-600">
          {[
            "Startup founders and early-stage teams",
            "Investors, angels and venture funds",
            "Mentors and industry experts",
            "Corporate buyers and business visitors",
            "Students and aspiring entrepreneurs",
            "Service providers supporting startups",
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <span className="text-amber-500">●</span> {item}
            </li>
          ))}
        </ul>

        <h2 className="mt-14 text-2xl font-bold text-slate-900">Six exhibition zones</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {[
            "Product Showcase",
            "Technology & Digital",
            "Business Services",
            "Ideas & Innovation",
            "Investor & Mentor Lounge",
            "Startup Pitch Arena",
          ].map((z) => (
            <div key={z} className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-800 shadow-sm">
              {z}
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap gap-4">
          <Link href="/register" className="rounded-lg bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-amber-400">
            Register now
          </Link>
          <Link href="/agenda" className="rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50">
            View agenda
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
