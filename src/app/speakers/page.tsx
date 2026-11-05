import Link from "next/link";
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

export default async function SpeakersPage() {
  const speakers = await getSpeakers();

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-amber-600">Stage</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">Speakers</h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          Founders, investors and industry leaders sharing insights across three days.
        </p>

        {speakers.length === 0 ? (
          <div className="mt-16 rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-8 py-16 text-center">
            <p className="text-lg font-medium text-slate-700">Speaker lineup coming soon</p>
            <p className="mt-2 text-sm text-slate-500">Check back as we announce our speakers.</p>
            <Link href="/agenda" className="mt-6 inline-flex rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50">
              View agenda
            </Link>
          </div>
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
