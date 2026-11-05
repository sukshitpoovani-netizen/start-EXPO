import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata = {
  title: "Terms of Service | Startup Expo 2026",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">Terms of Service</h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: November 2026</p>

        <div className="mt-10 space-y-8 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-slate-900">Registration</h2>
            <p className="mt-2">
              By registering for Startup Expo 2026 you confirm that the information you provide is accurate.
              Tickets are personal and non-transferable unless the organisers agree otherwise.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-slate-900">Conduct</h2>
            <p className="mt-2">
              Attendees must behave professionally. The organisers reserve the right to refuse entry or
              remove anyone whose conduct is disruptive or unsafe.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-slate-900">Changes</h2>
            <p className="mt-2">
              Programme, speakers and venue details may change. We will notify registered participants
              of material changes where reasonably possible.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-slate-900">Liability</h2>
            <p className="mt-2">
              To the fullest extent permitted by law, the organisers are not liable for indirect or
              consequential loss arising from attendance or cancellation of the event.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-slate-900">Contact</h2>
            <p className="mt-2">Questions about these terms: contact@startupexpo.com</p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
