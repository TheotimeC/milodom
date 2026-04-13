interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  centered = true,
  className = "",
}: SectionTitleProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 h-1 w-16 bg-accent rounded-full ${
          centered ? "mx-auto" : ""
        }`}
        aria-hidden="true"
      />
    </div>
  );
}
