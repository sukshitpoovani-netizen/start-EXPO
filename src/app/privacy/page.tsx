import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata = {
  title: "Privacy Policy | Startup Expo 2026",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">Privacy Policy</h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: November 2026</p>
        <div className="mt-10 space-y-8 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-slate-900">Information we collect</h2>
            <p className="mt-2">
              When you register we collect details you provide such as name, email, phone, organisation and registration answers.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-slate-900">How we use it</h2>
            <p className="mt-2">
              We use your data to process registrations, issue tickets, send event updates and improve the experience. We do not sell personal data.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-slate-900">Sharing</h2>
            <p className="mt-2">
              Limited data may be shared with partners and service providers (for example email delivery) only to run the event.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-slate-900">Your rights</h2>
            <p className="mt-2">
              Request access, correction or deletion via contact@startupexpo.com.
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
