import { siteConfig, cta } from "@/data/site-content";
import { CTAButton } from "@/components/ui/Button";
import { CheckCircle2, Sparkles, Sun, Wrench } from "@/lib/icons";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" id="hero">
      {/* Background: deep gradient + mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700" />

      {/* Mesh overlay */}
      <div className="absolute inset-0">
        <div className="absolute top-[10%] left-[15%] w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[100px]" />
        <div className="absolute top-[50%] right-[30%] w-[300px] h-[300px] bg-blue-400/10 rounded-full blur-[80px]" />
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute top-[15%] right-[8%] w-20 h-20 border border-white/[0.06] rounded-3xl rotate-12 animate-float" aria-hidden="true" />
      <div className="absolute bottom-[20%] left-[5%] w-14 h-14 border border-white/[0.04] rounded-2xl -rotate-12 animate-float" style={{ animationDelay: "2s" }} aria-hidden="true" />
      <div className="absolute top-[60%] right-[25%] w-3 h-3 bg-red-500/40 rounded-full animate-pulse-soft" aria-hidden="true" />
      <div className="absolute top-[25%] left-[40%] w-2 h-2 bg-blue-400/30 rounded-full animate-pulse-soft" style={{ animationDelay: "1.5s" }} aria-hidden="true" />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-24 md:pt-40 md:pb-32 w-full">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/[0.08] backdrop-blur-sm text-white/80 px-4 py-2 rounded-full text-sm font-medium mb-10 border border-white/[0.08]">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse-soft" />
            Services à la personne · Haguenau et alentours, Strasbourg
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.05] mb-8">
            Simplifiez votre{" "}
            <br className="hidden md:block" />
            <span className="text-gradient-warm">quotidien</span>{" "}
            avec un service{" "}
            <span className="relative inline-block">
              de qualité
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none" aria-hidden="true">
                <path d="M2 6C50 2 150 2 198 6" stroke="#EC2728" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/60 leading-relaxed max-w-2xl mb-12">
            Ménage, vitres, petit bricolage - un service professionnel,
            efficace et fiable, en toute confiance.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <CTAButton
              label={cta.devis.label}
              href={cta.devis.href}
              variant="red"
              id="hero-cta-devis"
            />
            <CTAButton
              label={cta.contact.label}
              href={cta.contact.href}
              variant="outline"
              id="hero-cta-contact"
            />
          </div>

          {/* Trust badges in glass cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: CheckCircle2, text: "Devis gratuit & sans engagement" },
              { icon: CheckCircle2, text: "Crédit d'impôt 50 %*" },
              { icon: CheckCircle2, text: "Entreprise locale de confiance" },
            ].map((item) => (
              <div
                key={item.text}
                className="glass-dark rounded-2xl px-5 py-4 flex items-center gap-3"
              >
                <item.icon className="w-5 h-5 text-red-400 shrink-0" />
                <span className="text-white/70 text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right side floating cards — desktop only */}
        <div className="hidden xl:block absolute right-8 top-1/2 -translate-y-1/2">
          <div className="space-y-4">
            {[
              { icon: Sparkles, label: "Ménage", color: "bg-blue-500" },
              { icon: Sun, label: "Vitres", color: "bg-blue-400" },
              { icon: Wrench, label: "Bricolage", color: "bg-blue-600" },
            ].map((s, i) => (
              <div
                key={s.label}
                className="glass-dark rounded-2xl px-6 py-5 flex items-center gap-4 animate-float w-52"
                style={{ animationDelay: `${i * 0.8}s` }}
              >
                <div className={`w-10 h-10 ${s.color} rounded-xl flex items-center justify-center`}>
                  <s.icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-white/80 font-semibold text-sm">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg to-transparent" />
    </section>
  );
}
