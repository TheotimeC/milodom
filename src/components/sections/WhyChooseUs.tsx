import { whyChooseUs } from "@/data/site-content";
import { getIcon } from "@/lib/icons";

export default function WhyChooseUs() {
  return (
    <section className="py-28 md:py-36 bg-white" id="why-choose-us">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block text-[12px] font-semibold uppercase tracking-[0.25em] text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full mb-6">
            Pourquoi nous
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-6">
            {whyChooseUs.title}
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            {whyChooseUs.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {whyChooseUs.items.map((item, i) => {
            const Icon = getIcon(item.icon);
            return (
              <div
                key={item.title}
                className="group flex gap-5 bg-gray-50 rounded-2xl p-7 hover:bg-blue-700 transition-all duration-500 hover:shadow-xl hover:shadow-blue-700/10"
              >
                <div className="w-12 h-12 bg-blue-700 group-hover:bg-white/20 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-500">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-white mb-1.5 transition-colors duration-500">
                    {item.title}
                  </h3>
                  <p className="text-[15px] text-gray-500 group-hover:text-white/70 leading-relaxed transition-colors duration-500">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
