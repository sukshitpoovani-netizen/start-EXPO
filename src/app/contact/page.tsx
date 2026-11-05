import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata = {
  title: "Contact | Startup Expo 2026",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      <section className="relative h-48 overflow-hidden sm:h-64">
        <Image
          src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&q=80"
          alt="Contact"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-slate-950/60" />
        <div className="relative mx-auto flex h-full max-w-6xl items-end px-4 pb-8 sm:px-6">
          <h1 className="text-4xl font-bold text-white">Contact</h1>
        </div>
      </section>

      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <p className="text-lg text-slate-600">
          Questions about registration, stalls, sponsorship or media? Reach the organising team.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {[
            { t: "General", e: "contact@startupexpo.com" },
            { t: "Exhibitors", e: "exhibitors@startupexpo.com" },
            { t: "Sponsorship", e: "sponsors@startupexpo.com" },
            { t: "Media", e: "media@startupexpo.com" },
          ].map((c) => (
            <div key={c.t} className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="font-semibold text-slate-900">{c.t}</h2>
              <p className="mt-2 text-sm text-amber-700">{c.e}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm text-slate-500">
          Ready to join?{" "}
          <Link href="/register" className="font-semibold text-amber-600 hover:text-amber-700">
            Complete registration →
          </Link>
        </p>
      </main>
      <SiteFooter />
    </div>
  );
}
