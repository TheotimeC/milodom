import type { Metadata } from "next";
import { pageSeo, siteConfig } from "@/data/site-content";

export const metadata: Metadata = {
  title: pageSeo.privacy.title,
  description: pageSeo.privacy.description,
};

export default function PolitiqueConfidentialitePage() {
  return (
    <section className="pt-36 pb-20 md:pt-44 md:pb-28 bg-bg">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <span className="inline-block text-[12px] font-semibold uppercase tracking-[0.25em] text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full mb-6">
          RGPD
        </span>
        <h1 className="text-4xl font-black text-gray-900 tracking-tight mb-12">
          Politique de confidentialité
        </h1>

        <div className="space-y-8 text-[15px] text-gray-500 leading-relaxed">
          <div className="bg-white rounded-2xl border border-gray-200/60 p-8">
            <h2 className="text-lg font-bold text-gray-900 mb-3">Responsable du traitement</h2>
            <p><strong>{siteConfig.name}</strong>, SIRET {siteConfig.siret}.</p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200/60 p-8">
            <h2 className="text-lg font-bold text-gray-900 mb-3">Données collectées</h2>
            <p>Ce site ne collecte aucune donnée personnelle. Aucun formulaire. Contact par téléphone ou email uniquement.</p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200/60 p-8">
            <h2 className="text-lg font-bold text-gray-900 mb-3">Cookies</h2>
            <p>Pas de cookies de suivi ni publicitaires. Seuls des cookies techniques strictement nécessaires peuvent être utilisés.</p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200/60 p-8">
            <h2 className="text-lg font-bold text-gray-900 mb-3">Vos droits</h2>
            <p className="mb-4">Conformément au RGPD :</p>
            <ul className="space-y-2">
              {["Accès", "Rectification", "Effacement", "Limitation", "Portabilité", "Opposition"].map((right) => (
                <li key={right} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full shrink-0" />
                  <span>Droit de {right.toLowerCase()}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4">
              Contact :{" "}
              <a href={siteConfig.emailHref} className="text-blue-700 hover:underline">{siteConfig.email}</a>
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200/60 p-8">
            <h2 className="text-lg font-bold text-gray-900 mb-3">Modifications</h2>
            <p>{siteConfig.name} peut modifier cette politique à tout moment. Modifications publiées sur cette page.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
