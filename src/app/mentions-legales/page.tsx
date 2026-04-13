import type { Metadata } from "next";
import { pageSeo, siteConfig } from "@/data/site-content";

export const metadata: Metadata = {
  title: pageSeo.mentions.title,
  description: pageSeo.mentions.description,
};

export default function MentionsLegalesPage() {
  return (
    <section className="pt-36 pb-20 md:pt-44 md:pb-28 bg-bg">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <span className="inline-block text-[12px] font-semibold uppercase tracking-[0.25em] text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full mb-6">
          Juridique
        </span>
        <h1 className="text-4xl font-black text-gray-900 tracking-tight mb-12">
          Mentions légales
        </h1>

        <div className="space-y-8 text-[15px] text-gray-500 leading-relaxed">
          <div className="bg-white rounded-2xl border border-gray-200/60 p-8">
            <h2 className="text-lg font-bold text-gray-900 mb-3">Éditeur du site</h2>
            <p>
              <strong>Raison sociale :</strong> {siteConfig.name}<br />
              <strong>SIRET :</strong> {siteConfig.siret}<br />
              <strong>Téléphone :</strong>{" "}
              <a href={siteConfig.phoneHref} className="text-blue-700 hover:underline">{siteConfig.phone}</a><br />
              <strong>Email :</strong>{" "}
              <a href={siteConfig.emailHref} className="text-blue-700 hover:underline">{siteConfig.email}</a>
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200/60 p-8">
            <h2 className="text-lg font-bold text-gray-900 mb-3">Hébergement</h2>
            <p>Informations à compléter avant mise en production.</p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200/60 p-8">
            <h2 className="text-lg font-bold text-gray-900 mb-3">Propriété intellectuelle</h2>
            <p>L&apos;ensemble du contenu est propriété de {siteConfig.name}. Toute reproduction sans autorisation est interdite.</p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200/60 p-8">
            <h2 className="text-lg font-bold text-gray-900 mb-3">Responsabilité</h2>
            <p>{siteConfig.name} s&apos;efforce de fournir des informations exactes. L&apos;utilisation du site se fait sous la responsabilité de l&apos;utilisateur.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
