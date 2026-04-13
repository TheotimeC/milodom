import { fiscalAdvantage } from "@/data/site-content";

export default function FiscalAdvantage() {
  return (
    <section className="py-28 md:py-36 bg-bg" id="fiscal-advantage">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 rounded-[2rem] p-10 md:p-16">
          {/* Mesh */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-[20%] w-[300px] h-[300px] bg-red-600/10 rounded-full blur-[80px]" />

          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }} />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — big visual */}
            <div className="text-center lg:text-left">
              <span className="inline-block text-[12px] font-semibold uppercase tracking-[0.25em] text-white/40 bg-white/[0.06] px-4 py-1.5 rounded-full mb-8">
                Avantage fiscal
              </span>
              <div className="mb-4">
                <span className="text-8xl md:text-9xl font-black text-white leading-none">
                  50
                </span>
                <span className="text-5xl md:text-6xl font-black text-red-500 leading-none">
                  %
                </span>
              </div>
              <p className="text-xl text-white/60">de crédit d&apos;impôt</p>
            </div>

            {/* Right — details */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                {fiscalAdvantage.title}
              </h2>
              <p className="text-white/60 text-[17px] leading-relaxed mb-8">
                {fiscalAdvantage.description}
              </p>

              {/* Example in glass card */}
              <div className="glass-dark rounded-2xl p-6 mb-6">
                <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-4">
                  {fiscalAdvantage.example.label}
                </p>
                <div className="flex items-center gap-5">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-white/40 line-through">
                      {fiscalAdvantage.example.cost}&thinsp;€
                    </p>
                  </div>
                  <div className="text-red-400 text-2xl">→</div>
                  <div className="text-center">
                    <p className="text-4xl font-black text-white">
                      {fiscalAdvantage.example.afterTax}&thinsp;€
                    </p>
                    <p className="text-[12px] text-white/40 mt-1">après crédit d&apos;impôt</p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-white/30 italic">
                * {fiscalAdvantage.disclaimer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
