import { getIcon } from "@/lib/icons";

interface TrustBadgeProps {
  icon: string;
  title: string;
  description: string;
}

export default function TrustBadge({ icon, title, description }: TrustBadgeProps) {
  const Icon = getIcon(icon);

  return (
    <div className="flex gap-4 items-start p-6 rounded-xl bg-white border border-border hover:shadow-md transition-shadow duration-300">
      <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center shrink-0">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <div>
        <h3 className="font-bold text-text-primary mb-1">{title}</h3>
        <p className="text-sm text-text-secondary leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
