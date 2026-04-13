import HeroSection from "@/components/sections/HeroSection";
import ServicesOverview from "@/components/sections/ServicesOverview";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import FiscalAdvantage from "@/components/sections/FiscalAdvantage";
import InterventionZone from "@/components/sections/InterventionZone";
import QuickContact from "@/components/sections/QuickContact";
import { siteConfig } from "@/data/site-content";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Intro */}
      <section className="py-28 md:py-36 bg-white" id="intro">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-[12px] font-semibold uppercase tracking-[0.25em] text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full mb-8">
              Qui sommes-nous
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-8">
              Votre partenaire{" "}
              <span className="text-gradient">au quotidien</span>
            </h2>
            <p className="text-xl text-gray-500 leading-relaxed max-w-3xl mx-auto mb-6">
              <strong className="text-gray-900">{siteConfig.name}</strong> est une entreprise
              locale spécialisée dans les services à la personne à domicile. Nous accompagnons
              les particuliers de Strasbourg et alentours dans l&apos;entretien de leur maison
              avec rigueur, discrétion et professionnalisme.
            </p>
            <p className="text-[15px] text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Notre mission : vous libérer des tâches du quotidien et vous offrir
              un service fiable, en toute confiance.
            </p>
          </div>
        </div>
      </section>

      <ServicesOverview />
      <WhyChooseUs />
      <FiscalAdvantage />
      <InterventionZone />
      <QuickContact />
    </>
  );
}
