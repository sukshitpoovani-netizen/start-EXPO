import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata = {
  title: "Contact | Startup Expo 2026",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-amber-600">Get in touch</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">Contact</h1>
        <p className="mt-4 text-slate-600">
          Questions about registration, exhibition stalls, sponsorship or media? Reach out to the organising team.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="font-semibold text-slate-900">General enquiries</h2>
            <p className="mt-2 text-sm text-slate-600">contact@startupexpo.com</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="font-semibold text-slate-900">Exhibitor support</h2>
            <p className="mt-2 text-sm text-slate-600">exhibitors@startupexpo.com</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="font-semibold text-slate-900">Sponsorship</h2>
            <p className="mt-2 text-sm text-slate-600">sponsors@startupexpo.com</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="font-semibold text-slate-900">Media</h2>
            <p className="mt-2 text-sm text-slate-600">media@startupexpo.com</p>
          </div>
        </div>

        <p className="mt-10 text-sm text-slate-500">
          Prefer to register first?{" "}
          <Link href="/register" className="font-medium text-amber-600 hover:text-amber-700">
            Complete registration →
          </Link>
        </p>
      </main>
      <SiteFooter />
    </div>
  );
}
