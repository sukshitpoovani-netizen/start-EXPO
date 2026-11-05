import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata = {
  title: "Agenda | Startup Expo 2026",
};

const days = [
  {
    day: "Day 1",
    theme: "Discover",
    items: [
      { time: "09:30", title: "Registration & Networking" },
      { time: "10:30", title: "Inauguration Ceremony" },
      { time: "11:30", title: "Exhibition Floor Opens" },
      { time: "14:00", title: "Live Product Demos" },
      { time: "16:00", title: "Founder Introductions" },
      { time: "17:30", title: "Day 1 Closing" },
    ],
  },
  {
    day: "Day 2",
    theme: "Connect",
    items: [
      { time: "10:00", title: "Investor Lounge Opens" },
      { time: "11:00", title: "Pitch Competition – Round 1" },
      { time: "13:00", title: "Mentor Clinic Sessions" },
      { time: "15:00", title: "B2B Networking Hour" },
      { time: "16:30", title: "Panel: Raising Your First Round" },
      { time: "18:00", title: "Networking Mixer" },
    ],
  },
  {
    day: "Day 3",
    theme: "Grow",
    items: [
      { time: "10:00", title: "Final Pitch Round" },
      { time: "12:00", title: "Product Launch Stage" },
      { time: "14:00", title: "Buyer–Startup Matchmaking" },
      { time: "16:00", title: "Awards Ceremony" },
      { time: "17:00", title: "Closing Keynote" },
      { time: "18:00", title: "Expo Closes" },
    ],
  },
];

export default function AgendaPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-amber-600">Programme</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">Three-Day Agenda</h1>
        <p className="mt-3 text-slate-600">Discover → Connect → Grow</p>

        <div className="mt-12 grid gap-10 lg:grid-cols-3">
          {days.map((d) => (
            <div key={d.day} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="mb-2 inline-block rounded-full bg-amber-500 px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-900">
                {d.day}
              </div>
              <h2 className="text-xl font-bold text-slate-900">{d.theme}</h2>
              <ul className="mt-6 space-y-4">
                {d.items.map((item) => (
                  <li key={item.title} className="flex gap-4 border-b border-slate-200 pb-3 last:border-0">
                    <span className="w-12 shrink-0 text-sm font-semibold text-amber-600">{item.time}</span>
                    <span className="text-sm text-slate-700">{item.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/register" className="inline-flex rounded-lg bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-amber-400">
            Register to attend
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
