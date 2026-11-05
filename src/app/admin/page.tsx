import Link from "next/link";

export const metadata = {
  title: "Admin | Startup Expo 2026",
};

export default function AdminDashboardPage() {
  return (
    <div className="min-h-screen bg-slate-100">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <h1 className="text-lg font-bold text-slate-900">Admin Dashboard</h1>
          <Link href="/" className="text-sm text-slate-600 hover:text-slate-900">View site</Link>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Welcome</h2>
          <p className="mt-2 text-slate-600">
            Full admin modules (registrations, tickets, speakers, sponsors, SPOCs) can be expanded here.
            Use the setup endpoint once to seed the database if you have not already.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-slate-700">
            <li>• Registrations & tickets — via API and database</li>
            <li>• Public pages — About, Agenda, Exhibitors, Speakers, Venue</li>
            <li>• Setup — <code className="rounded bg-slate-100 px-1">/api/setup?secret=...</code></li>
          </ul>
          <Link
            href="/admin/login"
            className="mt-8 inline-flex rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Admin login
          </Link>
        </div>
      </main>
    </div>
  );
}
