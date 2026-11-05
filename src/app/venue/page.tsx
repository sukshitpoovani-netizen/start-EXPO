import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata = {
  title: "Venue | Startup Expo 2026",
};

export default function VenuePage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      <section className="relative h-56 overflow-hidden sm:h-80">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
          alt="Venue interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-slate-950/55" />
        <div className="relative mx-auto flex h-full max-w-6xl items-end px-4 pb-10 sm:px-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">Location</p>
            <h1 className="mt-2 text-4xl font-bold text-white">Venue</h1>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
          <h2 className="text-xl font-bold text-slate-900">Exhibition Centre</h2>
          <p className="mt-3 leading-relaxed text-slate-600">
            The full address, floor map and travel guide will be published for all registered
            participants. Expect a large multi-zone hall with dedicated lounge, pitch stage and demo areas.
          </p>
          <dl className="mt-8 space-y-4 text-sm">
            <div className="flex gap-4 border-b border-slate-200 pb-3">
              <dt className="w-28 shrink-0 font-medium text-slate-500">City</dt>
              <dd className="text-slate-800">To be announced</dd>
            </div>
            <div className="flex gap-4 border-b border-slate-200 pb-3">
              <dt className="w-28 shrink-0 font-medium text-slate-500">Duration</dt>
              <dd className="text-slate-800">Three full days</dd>
            </div>
            <div className="flex gap-4 border-b border-slate-200 pb-3">
              <dt className="w-28 shrink-0 font-medium text-slate-500">Access</dt>
              <dd className="text-slate-800">Valid ticket / badge required</dd>
            </div>
            <div className="flex gap-4">
              <dt className="w-28 shrink-0 font-medium text-slate-500">Facilities</dt>
              <dd className="text-slate-800">Wi‑Fi, charging, food court, accessibility support</dd>
            </div>
          </dl>
        </div>

        <h2 className="mt-12 text-lg font-semibold text-slate-900">Getting there</h2>
        <p className="mt-2 text-slate-600">
          Metro, bus and parking options will be listed with the final venue announcement.
          We recommend public transport on peak hours.
        </p>

        <h2 className="mt-10 text-lg font-semibold text-slate-900">On-site experience</h2>
        <ul className="mt-3 space-y-2 text-slate-600">
          <li className="flex gap-2"><span className="text-amber-500">•</span> Clear zone signage and help desks</li>
          <li className="flex gap-2"><span className="text-amber-500">•</span> Quiet rooms for investor meetings</li>
          <li className="flex gap-2"><span className="text-amber-500">•</span> Media and content capture points</li>
        </ul>

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
