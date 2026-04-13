import Link from "next/link";
import { ArrowRight } from "@/lib/icons";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "blue" | "red" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  id?: string;
  external?: boolean;
}

const baseStyles =
  "inline-flex items-center justify-center gap-2.5 font-semibold transition-all duration-300 cursor-pointer";

const variantStyles = {
  blue: "bg-blue-700 text-white rounded-full hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-700/20",
  red: "bg-red-600 text-white rounded-full hover:bg-red-500 hover:shadow-lg hover:shadow-red-600/25 glow-red",
  outline: "border-2 border-white/20 text-white rounded-full hover:bg-white/10 hover:border-white/30",
  ghost: "text-blue-700 hover:text-blue-600 underline underline-offset-4",
};

const sizeStyles = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-7 py-3.5 text-[15px]",
  lg: "px-8 py-4 text-base",
};

export default function Button({
  children,
  href,
  variant = "blue",
  size = "md",
  className = "",
  id,
  external,
}: ButtonProps) {
  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    if (external || href.startsWith("tel:") || href.startsWith("mailto:")) {
      return (
        <a href={href} className={classes} id={id}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} id={id}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} id={id}>
      {children}
    </button>
  );
}

export function CTAButton({
  label,
  href,
  variant = "blue",
  withArrow = true,
  id,
}: {
  label: string;
  href: string;
  variant?: "blue" | "red" | "outline";
  withArrow?: boolean;
  id?: string;
}) {
  return (
    <Button href={href} variant={variant} size="lg" id={id}>
      {label}
      {withArrow && <ArrowRight className="w-4 h-4" />}
    </Button>
  );
}
