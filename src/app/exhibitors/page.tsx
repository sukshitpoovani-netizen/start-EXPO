import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import prisma from "@/lib/prisma";

export const metadata = {
  title: "Exhibitors | Startup Expo 2026",
};

async function getExhibitors() {
  try {
    return await prisma.exhibitor.findMany({
      where: { isActive: true, status: { in: ["APPROVED", "CONFIRMED"] } },
      orderBy: { startupName: "asc" },
      take: 50,
    });
  } catch {
    return [];
  }
}

export default async function ExhibitorsPage() {
  const exhibitors = await getExhibitors();

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      <section className="relative h-56 overflow-hidden sm:h-72">
        <Image
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&q=80"
          alt="Exhibition floor"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-slate-950/60" />
        <div className="relative mx-auto flex h-full max-w-6xl items-end px-4 pb-10 sm:px-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">Floor</p>
            <h1 className="mt-2 text-4xl font-bold text-white">Exhibitors</h1>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="max-w-2xl text-lg text-slate-600">
          Startups and companies across product, tech, services and innovation zones.
          Book a stall to meet buyers, partners and investors face to face.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            { t: "Product stalls", d: "Demo hardware, packaged goods and consumer products." },
            { t: "Tech booths", d: "SaaS, AI, platforms and digital services." },
            { t: "Innovation pods", d: "Early prototypes and student projects." },
          ].map((x) => (
            <div key={x.t} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="font-semibold text-slate-900">{x.t}</h3>
              <p className="mt-1 text-sm text-slate-600">{x.d}</p>
            </div>
          ))}
        </div>

        {exhibitors.length === 0 ? (
          <div className="mt-14 rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-8 py-16 text-center">
            <p className="text-lg font-medium text-slate-800">Exhibitor directory opening soon</p>
            <p className="mt-2 text-sm text-slate-500">Approved startups will appear here after review.</p>
            <Link href="/register" className="mt-6 inline-flex rounded-lg bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-amber-400">
              Apply as exhibitor
            </Link>
          </div>
        ) : (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {exhibitors.map((ex) => (
              <div key={ex.id} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">{ex.startupName}</h3>
                {ex.category && <p className="mt-1 text-xs font-medium uppercase tracking-wide text-amber-600">{ex.category}</p>}
                {ex.description && <p className="mt-3 text-sm text-slate-600 line-clamp-3">{ex.description}</p>}
              </div>
            ))}
          </div>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
