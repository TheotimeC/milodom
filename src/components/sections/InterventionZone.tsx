import { interventionZone } from "@/data/site-content";
import { MapPin } from "@/lib/icons";

export default function InterventionZone() {
  return (
    <section className="py-28 md:py-36 bg-white" id="zone-intervention">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-700 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <MapPin className="w-8 h-8 text-white" />
          </div>
          <span className="inline-block text-[12px] font-semibold uppercase tracking-[0.25em] text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full mb-6">
            Périmètre
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight mb-6">
            {interventionZone.title}
          </h2>

          {interventionZone.type === "text" ? (
            <p className="text-xl text-gray-500">
              Nous intervenons à{" "}
              <span className="font-bold text-gradient text-2xl">
                {interventionZone.text}
              </span>
            </p>
          ) : (
            <div className="flex flex-wrap justify-center gap-3 mt-4">
              {interventionZone.cities.map((city) => (
                <span
                  key={city}
                  className="bg-blue-50 text-blue-700 px-5 py-2.5 rounded-full text-sm font-semibold"
                >
                  {city}
                </span>
              ))}
            </div>
          )}

          <p className="text-sm text-gray-400 mt-6">
            Vous avez un doute sur notre périmètre ? Contactez-nous,
            nous étudierons votre demande avec plaisir.
          </p>
        </div>
      </div>
    </section>
  );
}
