// ─────────────────────────────────────────────────
// MILODOM — Contenu métier centralisé
// Modifier ce fichier pour mettre à jour le contenu du site.
// ─────────────────────────────────────────────────

export const siteConfig = {
  name: "MILODOM",
  tagline: "Services à la personne à domicile",
  slogan: "Simplifiez votre quotidien avec un service de qualité",
  description:
    "MILODOM est une entreprise locale spécialisée dans les services à la personne à domicile pour les particuliers et les professionnels. Ménage, vitres, petit bricolage, nettoyage de bureaux - un service fiable, efficace et soigné, en toute confiance.",
  phone: "06 89 68 79 96",
  phoneHref: "tel:+33689687996",
  email: "milodom-service@orange.fr",
  emailHref: "mailto:milodom-service@orange.fr",
  siret: "483 231 353",
  domain: "milodom.fr",
  url: "https://milodom.fr",
} as const;

// ─── Services ────────────────────────────────────

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string; // lucide icon name
  benefits: string[];
  examples: string[];
  metaTitle: string;
  metaDescription: string;
}

export const services: Service[] = [
  {
    slug: "menage-a-domicile",
    title: "Ménage à domicile",
    shortTitle: "Ménage",
    description:
      "Un entretien régulier ou ponctuel de votre logement, réalisé avec soin et adapté à vos besoins. Cuisine, sanitaires, sols, poussière - chaque pièce est nettoyée avec rigueur pour un intérieur impeccable.",
    icon: "Sparkles",
    benefits: [
      "Entretien régulier ou ponctuel selon vos besoins",
      "Nettoyage complet des pièces de vie",
      "Travail soigné et méticuleux",
      "Adaptation à vos habitudes et préférences",
      "Gain de temps au quotidien",
    ],
    examples: [
      "Nettoyage de la cuisine (plans de travail, évier, électroménager)",
      "Entretien des sanitaires (salle de bain, WC)",
      "Aspiration et lavage des sols",
      "Dépoussiérage du mobilier et des surfaces",
      "Nettoyage des pièces de vie (salon, chambres)",
    ],
    metaTitle:
      "Ménage à domicile à Haguenau et alentours, Strasbourg | MILODOM - Services à la personne",
    metaDescription:
      "Service de ménage à domicile à Haguenau et alentours, Strasbourg. Entretien régulier ou ponctuel, travail soigné. Devis gratuit. Crédit d'impôt 50%.",
  },
  {
    slug: "vitres-verandas",
    title: "Vitres & vérandas",
    shortTitle: "Vitres",
    description:
      "Des fenêtres, baies vitrées et vérandas parfaitement nettoyées, sans traces. Un résultat impeccable qui améliore la luminosité de votre intérieur et met en valeur votre habitation.",
    icon: "Sun",
    benefits: [
      "Résultat sans traces garanti",
      "Amélioration de la luminosité naturelle",
      "Intervention efficace et rapide",
      "Nettoyage intérieur et extérieur",
      "Surfaces vitrées de toutes tailles",
    ],
    examples: [
      "Nettoyage de fenêtres",
      "Nettoyage de baies vitrées",
      "Entretien de vérandas",
      "Nettoyage de surfaces vitrées spécifiques",
    ],
    metaTitle:
      "Nettoyage de vitres et vérandas à Haguenau et alentours, Strasbourg | MILODOM",
    metaDescription:
      "Nettoyage professionnel de vitres, baies vitrées et vérandas à Haguenau et alentours, Strasbourg. Résultat sans traces, intervention efficace. Devis gratuit.",
  },
  {
    slug: "petit-bricolage",
    title: "Petit bricolage",
    shortTitle: "Bricolage",
    description:
      "Des petites réparations et installations du quotidien réalisées avec précision. Une solution rapide et fiable pour tous les petits travaux de votre maison, sans vous soucier de l'outillage.",
    icon: "Wrench",
    benefits: [
      "Interventions précises et soignées",
      "Solution rapide pour les réparations du quotidien",
      "Service fiable et professionnel",
      "Pas besoin de matériel ni d'outillage",
      "Large éventail d'interventions possibles",
    ],
    examples: [
      "Fixation d'étagères, cadres et tringles",
      "Pose de luminaires",
      "Installation de rideaux et stores",
      "Remplacement de joints",
      "Remplacement de prises et interrupteurs simples",
    ],
    metaTitle:
      "Petit bricolage à domicile à Haguenau et alentours, Strasbourg | MILODOM",
    metaDescription:
      "Petit bricolage et petites réparations à domicile à Haguenau et alentours, Strasbourg. Étagères, luminaires, joints, prises. Interventions précises. Devis gratuit.",
  },
  {
    slug: "nettoyage-bureaux",
    title: "Nettoyage de bureaux",
    shortTitle: "Bureaux",
    description:
      "Un entretien soigné de vos espaces de travail pour un environnement propre et agréable. Bureaux, salles de réunion, sanitaires — chaque espace est nettoyé avec rigueur pour favoriser votre bien-être au travail.",
    icon: "Building2",
    benefits: [
      "Entretien régulier ou ponctuel selon vos besoins",
      "Nettoyage complet des espaces de travail",
      "Travail discret et efficace",
      "Intervention possible en dehors des heures de bureau",
      "Environnement de travail propre et sain",
    ],
    examples: [
      "Nettoyage des bureaux et postes de travail",
      "Entretien des salles de réunion",
      "Nettoyage des espaces communs et couloirs",
      "Entretien des sanitaires",
      "Aspiration et lavage des sols",
    ],
    metaTitle:
      "Nettoyage de bureaux à Haguenau et alentours, Strasbourg | MILODOM",
    metaDescription:
      "Service de nettoyage et ménage de bureaux à Haguenau et alentours, Strasbourg. Entretien régulier ou ponctuel, travail soigné et discret. Devis gratuit.",
  },
];

// ─── Avantage fiscal ─────────────────────────────

export const fiscalAdvantage = {
  title: "Avantage fiscal de 50 %",
  description:
    "Bénéficiez d'un crédit d'impôt de 50 % sur les prestations de services à la personne.",
  disclaimer: "Selon la réglementation en vigueur.",
  example: {
    label: "Exemple",
    cost: 100,
    afterTax: 50,
    text: "Une prestation de 100 € ne vous coûte que 50 € après avantage fiscal.",
  },
} as const;

// ─── Zone d'intervention ─────────────────────────

export const interventionZone = {
  title: "Zone d'intervention",
  type: "text" as "text" | "list",
  // Mode texte (formulation générale)
  text: "Haguenau et alentours, Strasbourg",
  // Mode liste (communes spécifiques) — à compléter si nécessaire
  cities: [
    "Haguenau et alentours, Strasbourg",
  ],
} as const;

// ─── Engagements ─────────────────────────────────

export const commitments = [
  {
    title: "Sérieux",
    description: "Un travail rigoureux, réalisé avec professionnalisme à chaque intervention.",
    icon: "Shield",
  },
  {
    title: "Discrétion",
    description: "Un service respectueux de votre intimité et de votre domicile.",
    icon: "EyeOff",
  },
  {
    title: "Travail soigné",
    description: "Une attention aux détails pour un résultat impeccable, à chaque fois.",
    icon: "Award",
  },
  {
    title: "Flexibilité",
    description: "Des prestations adaptées à vos besoins et à votre emploi du temps.",
    icon: "Clock",
  },
  {
    title: "Devis gratuit",
    description: "Un devis clair, gratuit et sans engagement, pour toute demande.",
    icon: "FileText",
  },
  {
    title: "Service adapté",
    description: "Des interventions personnalisées selon vos attentes et votre logement.",
    icon: "Home",
  },
] as const;

// ─── Pourquoi nous choisir ───────────────────────

export const whyChooseUs = {
  title: "Pourquoi choisir MILODOM ?",
  subtitle: "Un service de confiance, proche de vous, pour votre tranquillité au quotidien.",
  items: [
    {
      title: "Entreprise locale",
      description: "Basée à Haguenau et alentours, Strasbourg, nous intervenons rapidement et avec proximité.",
      icon: "MapPin",
    },
    {
      title: "Confiance & rigueur",
      description: "Des professionnels sérieux sur lesquels vous pouvez compter.",
      icon: "ShieldCheck",
    },
    {
      title: "Qualité de service",
      description: "Un travail soigné, des résultats visibles et durables.",
      icon: "Star",
    },
    {
      title: "Simplicité",
      description: "Un seul interlocuteur, un devis gratuit, une prise en charge rapide.",
      icon: "Zap",
    },
  ],
} as const;

// ─── CTA ─────────────────────────────────────────

export const cta = {
  devis: {
    label: "Demander un devis gratuit",
    href: "/contact",
  },
  contact: {
    label: "Nous contacter",
    href: "/contact",
  },
  phone: {
    label: "Appeler le 06 89 68 79 96",
    href: "tel:+33689687996",
  },
  email: {
    label: "Envoyer un email",
    href: "mailto:milodom-service@orange.fr",
  },
} as const;

// ─── Navigation ──────────────────────────────────

export const navigation = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
] as const;

// ─── SEO par page ────────────────────────────────

export const pageSeo = {
  home: {
    title: "MILODOM - Services à la personne à domicile à Haguenau et alentours, Strasbourg",
    description:
      "MILODOM, votre partenaire local pour les services à la personne à domicile à Haguenau et alentours, Strasbourg. Ménage, vitres, petit bricolage, nettoyage de bureaux. Devis gratuit, crédit d'impôt 50%.",
  },
  services: {
    title: "Nos services | MILODOM - Ménage, Vitres, Bricolage, Bureaux",
    description:
      "Découvrez les prestations de MILODOM : ménage à domicile, nettoyage de vitres et vérandas, petit bricolage, nettoyage de bureaux. Services de qualité à Haguenau et alentours, Strasbourg.",
  },
  about: {
    title: "À propos de MILODOM | Entreprise locale de services à la personne",
    description:
      "MILODOM est une entreprise locale spécialisée dans les services à la personne à Haguenau et alentours, Strasbourg. Découvrez notre mission, nos valeurs et nos engagements.",
  },
  contact: {
    title: "Contact & Devis gratuit | MILODOM - Services à domicile",
    description:
      "Contactez MILODOM pour un devis gratuit et sans engagement. Ménage, vitres, petit bricolage à domicile à Haguenau et alentours, Strasbourg. Réponse rapide garantie.",
  },
  mentions: {
    title: "Mentions légales | MILODOM",
    description: "Mentions légales du site milodom.fr. Informations sur l'entreprise MILODOM, SIRET, contact et hébergement.",
  },
  privacy: {
    title: "Politique de confidentialité | MILODOM",
    description: "Politique de confidentialité et traitement des données personnelles du site milodom.fr.",
  },
  thanks: {
    title: "Merci | MILODOM",
    description: "Merci pour votre message. L'équipe MILODOM vous répondra dans les plus brefs délais.",
  },
} as const;
