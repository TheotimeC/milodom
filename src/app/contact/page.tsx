import type { Metadata } from "next";
import { pageSeo, siteConfig } from "@/data/site-content";
import { Phone, Mail, CheckCircle2, ArrowRight } from "@/lib/icons";
import InterventionZone from "@/components/sections/InterventionZone";

export const metadata: Metadata = {
  title: pageSeo.contact.title,
  description: pageSeo.contact.description,
  openGraph: { title: pageSeo.contact.title, description: pageSeo.contact.description },
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700" />
        <div className="absolute inset-0">
          <div className="absolute top-[40%] right-[15%] w-[400px] h-[400px] bg-blue-500/15 rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <span className="inline-block text-[12px] font-semibold uppercase tracking-[0.25em] text-white/40 bg-white/[0.06] px-4 py-1.5 rounded-full mb-6">
            Parlons-en
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-6">
            Contactez-nous
          </h1>
          <p className="text-xl text-white/50 max-w-2xl leading-relaxed">
            Un projet, une question ? Nous vous répondons rapidement.
          </p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="py-24 md:py-32 bg-bg mesh-bg">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <a
              href={siteConfig.phoneHref}
              className="group bg-white rounded-3xl border border-gray-200/60 p-10 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-700/5 transition-all duration-500 hover:-translate-y-1"
              id="contact-phone-card"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Par téléphone
              </h2>
              <p className="text-3xl font-black text-gradient mb-4">
                {siteConfig.phone}
              </p>
              <p className="text-[15px] text-gray-500 mb-6">
                Appelez pour échanger sur votre projet.
              </p>
              <span className="inline-flex items-center gap-2 text-red-600 font-semibold text-sm group-hover:gap-3 transition-all">
                Appeler <ArrowRight className="w-4 h-4" />
              </span>
            </a>

            <a
              href={siteConfig.emailHref}
              className="group bg-white rounded-3xl border border-gray-200/60 p-10 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-700/5 transition-all duration-500 hover:-translate-y-1"
              id="contact-email-card"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-700 to-blue-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Par email
              </h2>
              <p className="text-xl font-bold text-blue-700 mb-4">
                {siteConfig.email}
              </p>
              <p className="text-[15px] text-gray-500 mb-6">
                Nous répondons dans les meilleurs délais.
              </p>
              <span className="inline-flex items-center gap-2 text-blue-700 font-semibold text-sm group-hover:gap-3 transition-all">
                Écrire <ArrowRight className="w-4 h-4" />
              </span>
            </a>
          </div>

          {/* Reassurance */}
          <div className="bg-white rounded-3xl border border-gray-200/60 p-8 md:p-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Devis gratuit et sans engagement
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { title: "Gratuit", desc: "Aucun frais pour l'estimation." },
                { title: "Sans engagement", desc: "Vous décidez librement." },
                { title: "Réponse rapide", desc: "Nous revenons vers vous rapidement." },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{item.title}</p>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <InterventionZone />
    </>
  );
}
