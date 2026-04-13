import type { Metadata } from "next";
import { services, pageSeo, cta, fiscalAdvantage } from "@/data/site-content";
import { getIcon, CheckCircle2 } from "@/lib/icons";
import { CTAButton } from "@/components/ui/Button";
import QuickContact from "@/components/sections/QuickContact";

export const metadata: Metadata = {
  title: pageSeo.services.title,
  description: pageSeo.services.description,
  openGraph: { title: pageSeo.services.title, description: pageSeo.services.description },
};

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700" />
        <div className="absolute inset-0">
          <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-blue-500/15 rounded-full blur-[100px]" />
          <div className="absolute bottom-[10%] left-[20%] w-[300px] h-[300px] bg-red-600/8 rounded-full blur-[80px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <span className="inline-block text-[12px] font-semibold uppercase tracking-[0.25em] text-white/40 bg-white/[0.06] px-4 py-1.5 rounded-full mb-6">
            Prestations
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-6">
            Nos services
          </h1>
          <p className="text-xl text-white/50 max-w-2xl leading-relaxed">
            Ménage, vitres, petit bricolage — toutes nos prestations détaillées.
          </p>

          <div className="flex flex-wrap gap-3 mt-10">
            {services.map((service) => {
              const Icon = getIcon(service.icon);
              return (
                <a
                  key={service.slug}
                  href={`#${service.slug}`}
                  className="inline-flex items-center gap-2 glass-dark rounded-full px-5 py-2.5 text-sm font-semibold text-white/70 hover:text-white hover:bg-white/[0.12] transition-all"
                >
                  <Icon className="w-4 h-4" />
                  {service.shortTitle}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services */}
      {services.map((service, index) => {
        const Icon = getIcon(service.icon);
        const isEven = index % 2 === 0;

        return (
          <section
            key={service.slug}
            id={service.slug}
            className={`py-24 md:py-32 ${isEven ? "bg-bg mesh-bg" : "bg-white"}`}
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              {/* Header */}
              <div className="max-w-3xl mb-14">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-700 to-blue-500 rounded-2xl flex items-center justify-center">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-[12px] font-semibold uppercase tracking-[0.25em] text-gray-400">
                    Service 0{index + 1}
                  </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight mb-6">
                  {service.title}
                </h2>
                <p className="text-lg text-gray-500 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Benefits + Examples */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-3xl border border-gray-200/60 p-8 md:p-10">
                  <h3 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-gray-400 mb-7">
                    Les avantages
                  </h3>
                  <ul className="space-y-4">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                        <span className="text-[15px] text-gray-600 leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-3xl border border-gray-200/60 p-8 md:p-10">
                  <h3 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-gray-400 mb-7">
                    Exemples d&apos;interventions
                  </h3>
                  <ul className="space-y-4">
                    {service.examples.map((example) => (
                      <li key={example} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2.5 shrink-0" />
                        <span className="text-[15px] text-gray-600 leading-relaxed">{example}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-gray-400 mt-6 italic">
                    Liste indicative, non exhaustive.
                  </p>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Fiscal reminder */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {fiscalAdvantage.title}
              </h3>
              <p className="text-gray-500 text-[15px]">
                {fiscalAdvantage.example.text}{" "}
                <span className="text-gray-400 italic text-sm">{fiscalAdvantage.disclaimer}</span>
              </p>
            </div>
            <CTAButton label={cta.devis.label} href={cta.devis.href} variant="blue" id="services-cta-devis" />
          </div>
        </div>
      </section>

      <QuickContact />
    </>
  );
}
