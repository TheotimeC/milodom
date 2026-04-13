import Link from "next/link";
import Image from "next/image";
import { siteConfig, navigation, services } from "@/data/site-content";
import { Phone, Mail, MapPin } from "@/lib/icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden" role="contentinfo">
      {/* Subtle mesh */}
      <div className="absolute top-0 left-[20%] w-[400px] h-[400px] bg-blue-700/10 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-10">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <Image
                src="/Logo_Milodom.png"
                alt="MILODOM"
                width={120}
                height={43}
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-white/40 text-[15px] leading-relaxed">
              Services à la personne à domicile. Votre partenaire de confiance
              à Strasbourg et alentours.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-white/30 mb-5">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/50 hover:text-white transition-colors text-[15px]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-white/30 mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services#${service.slug}`} className="text-white/50 hover:text-white transition-colors text-[15px]">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-white/30 mb-5">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a href={siteConfig.phoneHref} className="flex items-center gap-3 text-white/50 hover:text-white transition-colors text-[15px]">
                  <Phone className="w-4 h-4 text-red-500 shrink-0" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={siteConfig.emailHref} className="flex items-center gap-3 text-white/50 hover:text-white transition-colors text-[15px]">
                  <Mail className="w-4 h-4 text-red-500 shrink-0" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-white/50 text-[15px]">
                  <MapPin className="w-4 h-4 text-red-500 shrink-0" />
                  Strasbourg et alentours
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/25 text-sm">
            © {currentYear} {siteConfig.name} · SIRET {siteConfig.siret}
          </p>
          <div className="flex gap-6">
            <Link href="/mentions-legales" className="text-white/25 hover:text-white/50 text-sm transition-colors">
              Mentions légales
            </Link>
            <Link href="/politique-de-confidentialite" className="text-white/25 hover:text-white/50 text-sm transition-colors">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
