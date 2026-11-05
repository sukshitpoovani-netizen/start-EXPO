import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import prisma from "@/lib/prisma";

export const metadata = {
  title: "Speakers | Startup Expo 2026",
};

async function getSpeakers() {
  try {
    return await prisma.speaker.findMany({
      where: { isActive: true },
      orderBy: [{ isFeatured: "desc" }, { order: "asc" }],
      take: 50,
    });
  } catch {
    return [];
  }
}

const placeholders = [
  { name: "Keynote founders", role: "Operators & builders", focus: "Go-to-market, product and culture" },
  { name: "Investor panel", role: "Angels & VCs", focus: "What we look for in 2026" },
  { name: "Domain experts", role: "AI, fintech, climate", focus: "Deep dives and case studies" },
];

export default async function SpeakersPage() {
  const speakers = await getSpeakers();

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      <section className="relative h-56 overflow-hidden sm:h-72">
        <Image
          src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1600&q=80"
          alt="Speaker on stage"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-slate-950/65" />
        <div className="relative mx-auto flex h-full max-w-6xl items-end px-4 pb-10 sm:px-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">Stage</p>
            <h1 className="mt-2 text-4xl font-bold text-white">Speakers</h1>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="max-w-2xl text-lg text-slate-600">
          Founders, investors and industry leaders share practical lessons across keynotes, panels and workshops.
        </p>

        {speakers.length === 0 ? (
          <>
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {placeholders.map((p) => (
                <div key={p.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <div className="mb-4 h-14 w-14 rounded-full bg-slate-200" />
                  <h3 className="font-semibold text-slate-900">{p.name}</h3>
                  <p className="mt-1 text-sm text-amber-600">{p.role}</p>
                  <p className="mt-2 text-sm text-slate-600">{p.focus}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 rounded-2xl border border-dashed border-slate-300 bg-white px-8 py-12 text-center">
              <p className="text-lg font-medium text-slate-800">Full speaker lineup coming soon</p>
              <p className="mt-2 text-sm text-slate-500">Names and sessions will be published as confirmations land.</p>
              <Link href="/agenda" className="mt-6 inline-flex rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50">
                View agenda
              </Link>
            </div>
          </>
        ) : (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {speakers.map((s) => (
              <div key={s.id} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-xl font-bold text-slate-500">
                  {s.name.charAt(0)}
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{s.name}</h3>
                {s.title && <p className="mt-1 text-sm text-slate-600">{s.title}</p>}
                {s.organization && <p className="text-sm text-amber-600">{s.organization}</p>}
                {s.bio && <p className="mt-3 text-sm text-slate-500 line-clamp-3">{s.bio}</p>}
              </div>
            ))}
          </div>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
