import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata = {
  title: "Pitch Arena | Startup Expo 2026",
};

export default function PitchPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      <section className="relative h-56 overflow-hidden sm:h-72">
        <Image
          src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1600&q=80"
          alt="Pitch stage"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-slate-950/65" />
        <div className="relative mx-auto flex h-full max-w-6xl items-end px-4 pb-10 sm:px-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">Competition</p>
            <h1 className="mt-2 text-4xl font-bold text-white">Startup Pitch Arena</h1>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <p className="text-lg leading-relaxed text-slate-600">
          The Pitch Arena is the high-energy centre of Startup Expo 2026. Selected startups present
          to a panel of investors, operators and domain experts across three rounds.
        </p>

        <h2 className="mt-12 text-2xl font-bold text-slate-900">Format</h2>
        <div className="mt-6 space-y-4">
          {[
            { step: "01", title: "Round 1 – Open pitches", d: "Short pitches on Day 2 morning. Judges shortlist teams." },
            { step: "02", title: "Semi-finals", d: "Expanded decks, live Q&A, deeper traction discussion." },
            { step: "03", title: "Finals", d: "Day 3 main stage. Winners announced at the awards ceremony." },
          ].map((s) => (
            <div key={s.step} className="flex gap-5 rounded-xl border border-slate-200 bg-slate-50 p-5">
              <span className="text-2xl font-bold text-amber-500">{s.step}</span>
              <div>
                <h3 className="font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{s.d}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="mt-12 text-2xl font-bold text-slate-900">Who can apply?</h2>
        <ul className="mt-4 space-y-2 text-slate-600">
          <li className="flex gap-2"><span className="text-amber-500">•</span> Early-stage and growth startups with a live product or clear prototype</li>
          <li className="flex gap-2"><span className="text-amber-500">•</span> Teams ready to share traction metrics and ask</li>
          <li className="flex gap-2"><span className="text-amber-500">•</span> Preference for startups registered as exhibitors</li>
        </ul>

        <h2 className="mt-12 text-2xl font-bold text-slate-900">What winners get</h2>
        <p className="mt-3 text-slate-600">
          Mentorship hours, investor introductions, media visibility and category awards.
          Exact prize structure is confirmed with our sponsor partners closer to the event.
        </p>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link href="/register" className="rounded-lg bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-amber-400">
            Register as startup
          </Link>
          <Link href="/contact" className="rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50">
            Ask about pitching
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
