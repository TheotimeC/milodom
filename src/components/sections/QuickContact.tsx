import { siteConfig } from "@/data/site-content";
import { Phone, Mail, ArrowRight } from "@/lib/icons";

export default function QuickContact() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden" id="quick-contact">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700" />
      <div className="absolute inset-0">
        <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-blue-500/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] right-[15%] w-[350px] h-[350px] bg-red-600/8 rounded-full blur-[80px]" />
      </div>
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
        backgroundSize: "50px 50px",
      }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-[12px] font-semibold uppercase tracking-[0.25em] text-white/40 bg-white/[0.06] px-4 py-1.5 rounded-full mb-6">
            Passez à l&apos;action
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
            Prêt à simplifier votre{" "}
            <span className="text-gradient-warm">quotidien</span> ?
          </h2>
          <p className="text-lg text-white/50 max-w-xl mx-auto leading-relaxed">
            Contactez-nous pour un devis gratuit et sans engagement.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <a
            href={siteConfig.phoneHref}
            className="group glass-dark rounded-2xl p-8 hover:bg-white/[0.12] transition-all duration-300"
            id="quick-contact-phone"
          >
            <div className="w-14 h-14 bg-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <p className="text-white/40 text-sm mb-1">Appelez-nous</p>
            <p className="text-white text-2xl font-black mb-2">{siteConfig.phone}</p>
            <span className="inline-flex items-center gap-2 text-red-400 text-sm font-semibold group-hover:gap-3 transition-all">
              Appeler maintenant <ArrowRight className="w-4 h-4" />
            </span>
          </a>
          <a
            href={siteConfig.emailHref}
            className="group glass-dark rounded-2xl p-8 hover:bg-white/[0.12] transition-all duration-300"
            id="quick-contact-email"
          >
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <p className="text-white/40 text-sm mb-1">Écrivez-nous</p>
            <p className="text-white text-lg font-bold mb-2">{siteConfig.email}</p>
            <span className="inline-flex items-center gap-2 text-blue-400 text-sm font-semibold group-hover:gap-3 transition-all">
              Envoyer un email <ArrowRight className="w-4 h-4" />
            </span>
          </a>
        </div>

        <p className="text-center text-white/25 text-sm mt-8">
          Devis gratuit · Réponse rapide · Sans engagement
        </p>
      </div>
    </section>
  );
}
