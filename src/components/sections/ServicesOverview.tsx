import Link from "next/link";
import { services } from "@/data/site-content";
import { getIcon, ArrowRight } from "@/lib/icons";

export default function ServicesOverview() {
  return (
    <section className="py-28 md:py-36 bg-bg mesh-bg" id="services-overview">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block text-[12px] font-semibold uppercase tracking-[0.25em] text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full mb-6">
            Nos services
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-6">
            Tout pour votre{" "}
            <span className="text-gradient">maison</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Des prestations de qualité pour l&apos;entretien et le confort de votre intérieur,
            réalisées par des professionnels de confiance.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = getIcon(service.icon);
            return (
              <Link
                key={service.slug}
                href={`/services#${service.slug}`}
                className="group relative bg-white rounded-3xl p-8 md:p-10 border border-gray-200/60 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-700/5 transition-all duration-500 hover:-translate-y-2"
                id={`service-card-${service.slug}`}
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-br from-blue-700 to-blue-500 rounded-2xl flex items-center justify-center mb-7 group-hover:scale-110 transition-transform duration-500">
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Number */}
                <span className="absolute top-8 right-8 text-[13px] font-bold text-gray-200 group-hover:text-blue-200 transition-colors">
                  0{i + 1}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Link */}
                <span className="inline-flex items-center gap-2 text-blue-700 text-sm font-semibold group-hover:gap-3 transition-all">
                  Découvrir
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
