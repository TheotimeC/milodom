import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center bg-bg mesh-bg pt-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <span className="text-[10rem] md:text-[14rem] font-black text-gradient leading-none block mb-4">
          404
        </span>
        <h1 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight mb-4">
          Page introuvable
        </h1>
        <p className="text-lg text-gray-500 leading-relaxed mb-10 max-w-md mx-auto">
          La page que vous recherchez n&apos;existe pas ou a été déplacée.
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
