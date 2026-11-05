import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata = {
  title: "Venue | Startup Expo 2026",
};

export default function VenuePage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-amber-600">Location</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">Venue</h1>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-8">
          <h2 className="text-xl font-bold text-slate-900">Exhibition Centre</h2>
          <p className="mt-3 text-slate-600">
            Venue details will be confirmed and published closer to the event.
            Registered participants will receive the exact address, maps and travel guidance by email.
          </p>
          <dl className="mt-8 space-y-4 text-sm">
            <div className="flex gap-4">
              <dt className="w-24 shrink-0 font-medium text-slate-500">City</dt>
              <dd className="text-slate-800">To be announced</dd>
            </div>
            <div className="flex gap-4">
              <dt className="w-24 shrink-0 font-medium text-slate-500">Dates</dt>
              <dd className="text-slate-800">Three-day programme</dd>
            </div>
            <div className="flex gap-4">
              <dt className="w-24 shrink-0 font-medium text-slate-500">Access</dt>
              <dd className="text-slate-800">Ticket required — register online</dd>
            </div>
          </dl>
        </div>

        <div className="mt-10">
          <h2 className="text-lg font-semibold text-slate-900">Getting there</h2>
          <p className="mt-2 text-slate-600">
            Parking, metro and bus options will be listed here once the venue is finalised.
          </p>
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
