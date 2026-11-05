import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata = {
  title: "Agenda | Startup Expo 2026",
};

const days = [
  {
    day: "Day 1",
    theme: "Discover",
    color: "bg-amber-500",
    items: [
      { time: "09:00", title: "Registration opens", note: "Badge collection & welcome desk" },
      { time: "10:00", title: "Inauguration ceremony", note: "Keynote & ribbon cutting" },
      { time: "11:00", title: "Exhibition floor opens", note: "All six zones live" },
      { time: "13:00", title: "Founder networking lunch", note: "Invite-only tables" },
      { time: "14:30", title: "Live product demos", note: "Product Showcase stage" },
      { time: "16:30", title: "Student innovation walkthrough", note: "Ideas & Innovation zone" },
      { time: "18:00", title: "Day 1 closing remarks", note: "Main stage" },
    ],
  },
  {
    day: "Day 2",
    theme: "Connect",
    color: "bg-slate-900",
    items: [
      { time: "09:30", title: "Investor lounge opens", note: "Booked 1:1 slots" },
      { time: "10:30", title: "Pitch Arena – Round 1", note: "Selected startups" },
      { time: "12:00", title: "Panel: Raising your first round", note: "Main stage" },
      { time: "13:30", title: "Mentor clinic", note: "Office-hours style" },
      { time: "15:00", title: "B2B matchmaking", note: "Buyer–startup meetings" },
      { time: "16:30", title: "Pitch Arena – Semi-finals", note: "Judges panel" },
      { time: "18:30", title: "Networking mixer", note: "All attendees" },
    ],
  },
  {
    day: "Day 3",
    theme: "Grow",
    color: "bg-amber-500",
    items: [
      { time: "10:00", title: "Final pitch round", note: "Pitch Arena" },
      { time: "11:30", title: "Product launch stage", note: "Selected launches" },
      { time: "13:00", title: "Buyer–startup clinic", note: "Deal conversations" },
      { time: "15:00", title: "Awards ceremony", note: "Main stage" },
      { time: "16:30", title: "Closing keynote", note: "Guest speaker" },
      { time: "17:30", title: "Expo closes", note: "Thank you & photo ops" },
    ],
  },
];

export default function AgendaPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      <section className="relative h-56 overflow-hidden sm:h-72">
        <Image
          src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1600&q=80"
          alt="Stage"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-slate-950/65" />
        <div className="relative mx-auto flex h-full max-w-6xl items-end px-4 pb-10 sm:px-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">Programme</p>
            <h1 className="mt-2 text-4xl font-bold text-white">Three-Day Agenda</h1>
            <p className="mt-2 text-slate-300">Discover → Connect → Grow</p>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-3">
          {days.map((d) => (
            <div key={d.day} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-6 shadow-sm">
              <div className={`mb-2 inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider text-white ${d.color === "bg-amber-500" ? "bg-amber-500 text-slate-900" : "bg-slate-900"}`}>
                {d.day}
              </div>
              <h2 className="text-xl font-bold text-slate-900">{d.theme}</h2>
              <ul className="mt-6 space-y-4">
                {d.items.map((item) => (
                  <li key={item.title} className="border-b border-slate-200 pb-3 last:border-0">
                    <div className="flex gap-3">
                      <span className="w-12 shrink-0 text-sm font-bold text-amber-600">{item.time}</span>
                      <div>
                        <p className="text-sm font-medium text-slate-900">{item.title}</p>
                        <p className="text-xs text-slate-500">{item.note}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-slate-500">
          Timings are indicative and may be updated closer to the event.
        </p>
        <div className="mt-8 text-center">
          <Link href="/register" className="inline-flex rounded-lg bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-amber-400">
            Register to attend
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
