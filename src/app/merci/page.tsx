import type { Metadata } from "next";
import Link from "next/link";
import { pageSeo, siteConfig } from "@/data/site-content";
import { CheckCircle2 } from "@/lib/icons";

export const metadata: Metadata = {
  title: pageSeo.thanks.title,
  description: pageSeo.thanks.description,
};

export default function MerciPage() {
  return (
    <section className="min-h-[80vh] flex items-center bg-bg mesh-bg pt-20">
      <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
        <div className="w-20 h-20 bg-gradient-to-br from-blue-700 to-blue-500 rounded-3xl flex items-center justify-center mx-auto mb-10">
          <CheckCircle2 className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-4xl font-black text-gray-900 tracking-tight mb-6">
          Merci !
        </h1>
        <p className="text-xl text-gray-500 leading-relaxed mb-12">
          Votre demande a bien été prise en compte. L&apos;équipe{" "}
          <span className="font-bold text-gradient">{siteConfig.name}</span>{" "}
          vous recontactera rapidement.
        </p>
        <Link
          href="/"
          className="inline-flex bg-blue-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-700/20 transition-all"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </section>
  );
}
