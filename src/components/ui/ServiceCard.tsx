import Link from "next/link";
import { getIcon, ArrowRight } from "@/lib/icons";
import type { Service } from "@/data/site-content";

interface ServiceCardProps {
  service: Service;
  compact?: boolean;
}

export default function ServiceCard({ service, compact = false }: ServiceCardProps) {
  const Icon = getIcon(service.icon);

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group block bg-white rounded-2xl border border-border p-8 hover:shadow-lg hover:border-primary-100 transition-all duration-300 hover:-translate-y-1"
      id={`service-card-${service.slug}`}
    >
      <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
        <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
      </div>
      <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-primary transition-colors">
        {service.title}
      </h3>
      {!compact && (
        <p className="text-text-secondary leading-relaxed mb-4">
          {service.description}
        </p>
      )}
      <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm group-hover:gap-2 transition-all">
        En savoir plus
        <ArrowRight className="w-4 h-4" />
      </span>
    </Link>
  );
}
