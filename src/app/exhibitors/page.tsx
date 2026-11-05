import Link from "next/link";
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
      <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-amber-600">Floor</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">Exhibitors</h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          Startups and companies showcasing products, services and ideas at Startup Expo 2026.
        </p>

        {exhibitors.length === 0 ? (
          <div className="mt-16 rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-8 py-16 text-center">
            <p className="text-lg font-medium text-slate-700">Exhibitors will be announced soon</p>
            <p className="mt-2 text-sm text-slate-500">Want to showcase your startup?</p>
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
