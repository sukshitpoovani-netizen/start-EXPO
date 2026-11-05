import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const zones = [
  { title: "Product Showcase", desc: "Physical and digital products with live demos and hands-on trials.", img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80" },
  { title: "Technology & Digital", desc: "SaaS, AI, deep-tech and digital service companies.", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80" },
  { title: "Business Services", desc: "Legal, finance, marketing and growth support providers.", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80" },
  { title: "Ideas & Innovation", desc: "Early-stage concepts, prototypes and student startups.", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" },
  { title: "Investor & Mentor Lounge", desc: "Curated meetings with investors, angels and mentors.", img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80" },
  { title: "Startup Pitch Arena", desc: "Live pitching competition with expert judges and prizes.", img: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80" },
];

const stats = [
  { value: "200+", label: "Startups" },
  { value: "50+", label: "Investors" },
  { value: "3", label: "Days" },
  { value: "6", label: "Zones" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&q=80"
            alt="Conference crowd"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/40" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-28 sm:px-6 lg:py-36">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
            Three-Day Startup Exhibition
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Startup Expo 2026
          </h1>
          <p className="mt-4 max-w-xl text-xl text-slate-300">
            Ideas to Innovation. Innovation to Business.
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400">
            Showcase products and prototypes. Meet investors and mentors. Generate qualified leads.
            Build partnerships. Turn ideas into business.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/register" className="rounded-lg bg-amber-500 px-7 py-3.5 text-base font-semibold text-slate-900 shadow-lg hover:bg-amber-400">
              Register Now
            </Link>
            <Link href="/agenda" className="rounded-lg border border-white/25 bg-white/5 px-7 py-3.5 text-base font-medium text-white backdrop-blur hover:bg-white/10">
              View Programme
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-slate-100 bg-slate-50">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-12 sm:grid-cols-4 sm:px-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-bold text-slate-900">{s.value}</p>
              <p className="mt-1 text-sm text-slate-500">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Zones */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Exhibition Zones</h2>
            <p className="mt-3 text-slate-600">
              Six carefully designed zones so startups, buyers and investors connect with purpose.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {zones.map((z) => (
              <div key={z.title} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
                <div className="relative h-44 w-full overflow-hidden">
                  <Image src={z.img} alt={z.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-slate-900">{z.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{z.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programme teaser */}
      <section className="border-t border-slate-100 bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">Three-Day Programme</h2>
              <p className="mt-2 text-slate-600">Discover → Connect → Grow</p>
            </div>
            <Link href="/agenda" className="text-sm font-semibold text-amber-600 hover:text-amber-700">
              Full agenda →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { day: "Day 1", theme: "Discover", desc: "Inauguration, booth tours, live demos and founder introductions." },
              { day: "Day 2", theme: "Connect", desc: "Investor meetings, pitch rounds, mentor sessions and B2B networking." },
              { day: "Day 3", theme: "Grow", desc: "Final pitches, product launches, awards and closing ceremony." },
            ].map((d) => (
              <div key={d.day} className="rounded-2xl border border-slate-200 bg-white p-8">
                <span className="inline-block rounded-full bg-amber-500 px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-900">
                  {d.day}
                </span>
                <h3 className="mt-4 text-xl font-bold text-slate-900">{d.theme}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="relative overflow-hidden py-24 text-white">
        <Image
          src="https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=1600&q=80"
          alt="Networking"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/80" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight">Ready to join?</h2>
          <p className="mt-4 text-slate-300">
            Whether you are a founder, investor, buyer or student — register now and secure your place.
          </p>
          <Link href="/register" className="mt-8 inline-flex rounded-lg bg-amber-500 px-8 py-3.5 text-base font-semibold text-slate-900 hover:bg-amber-400">
            Register for Startup Expo 2026
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
