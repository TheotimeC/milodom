import type { Metadata } from "next";
import { pageSeo, siteConfig, commitments } from "@/data/site-content";
import { getIcon } from "@/lib/icons";
import QuickContact from "@/components/sections/QuickContact";

export const metadata: Metadata = {
  title: pageSeo.about.title,
  description: pageSeo.about.description,
  openGraph: { title: pageSeo.about.title, description: pageSeo.about.description },
};

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700" />
        <div className="absolute inset-0">
          <div className="absolute top-[30%] left-[10%] w-[400px] h-[400px] bg-blue-500/15 rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <span className="inline-block text-[12px] font-semibold uppercase tracking-[0.25em] text-white/40 bg-white/[0.06] px-4 py-1.5 rounded-full mb-6">
            L&apos;entreprise
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-6">
            À propos de {siteConfig.name}
          </h1>
          <p className="text-xl text-white/50 max-w-2xl leading-relaxed">
            Une entreprise locale, engagée à simplifier votre quotidien.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 md:py-32 bg-bg mesh-bg">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight mb-8">
            Notre <span className="text-gradient">mission</span>
          </h2>
          <p className="text-xl text-gray-500 leading-relaxed mb-6">
            <strong className="text-gray-900">{siteConfig.name}</strong>{" "}
            est une entreprise locale spécialisée dans les services à la personne
            à domicile pour les particuliers. Basée à Haguenau et alentours, Strasbourg, nous intervenons
            avec proximité et réactivité pour prendre soin de votre intérieur.
          </p>
          <p className="text-[15px] text-gray-400 leading-relaxed mb-6">
            Notre mission : vous offrir un service fiable, efficace et soigné.
            Que ce soit pour le ménage, le nettoyage de vos vitres ou de petites
            réparations, nous mettons notre professionnalisme au service de votre
            tranquillité.
          </p>
          <p className="text-[15px] text-gray-400 leading-relaxed">
            Chaque intervention est réalisée avec rigueur et attention aux détails,
            dans le respect de votre domicile et de vos habitudes. Un service de
            qualité commence par l&apos;écoute et la confiance.
          </p>
        </div>
      </section>

      {/* Engagements */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-[12px] font-semibold uppercase tracking-[0.25em] text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full mb-6">
              Nos valeurs
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight">
              Nos engagements
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commitments.map((item) => {
              const Icon = getIcon(item.icon);
              return (
                <div
                  key={item.title}
                  className="group bg-gray-50 rounded-2xl p-8 hover:bg-blue-700 transition-all duration-500 hover:shadow-xl hover:shadow-blue-700/10"
                >
                  <div className="w-12 h-12 bg-blue-700 group-hover:bg-white/20 rounded-xl flex items-center justify-center mb-6 transition-colors duration-500">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-white mb-2 transition-colors duration-500">
                    {item.title}
                  </h3>
                  <p className="text-[15px] text-gray-500 group-hover:text-white/70 leading-relaxed transition-colors duration-500">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <QuickContact />
    </>
  );
}
