import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import Link from 'next/link';
import SEO from '../../components/SEO';
import { useLanguage } from '../../context/LanguageContext';

const faqDataFr = [
  { q: "Qu'est-ce qu'un data center brown-to-green ?", a: "Un data center brown-to-green est un site existant — souvent un immeuble industriel, un ancien centre de données legacy ou un site tertiaire sous-utilisé — transformé en infrastructure de calcul moderne, plus dense et plus efficace énergétiquement. L'approche consiste à réutiliser les actifs existants (foncier, structure, connexions réseau partielles) tout en modernisant les systèmes de refroidissement, d'alimentation et de supervision, afin d'atteindre les standards requis par les clients IA et les critères ESG des financeurs." },
  { q: "Pourquoi le brown-to-green est-il plus attractif que le greenfield en Europe actuellement ?", a: "Trois facteurs structurels favorisent le brown-to-green : les délais de raccordement réseau atteignent 4 à 7 ans dans les zones les plus demandées (AMS, FRA, DUB, PAR), alors qu'un site existant dispose souvent d'une connexion partielle réutilisable. Les coûts de construction ont fortement augmenté, rendant les capex greenfield moins compétitifs. Enfin, la pression réglementaire (EED Article 12, PUE ≤ 1,30 à horizon 2030) crée une décote croissante sur les actifs legacy que l'investisseur-rénovateur peut capter comme upside." },
  { q: "Quels types de sites sont les meilleurs candidats à la conversion brown-to-green ?", a: "Les meilleurs candidats combinent une localisation dans ou à proximité d'un nœud réseau européen (fibre, connexion énergie existante), une structure bâtimentaire permettant la densification (hauteur de plancher, charge portante), et un PUE actuel élevé (1,6 à 2,0) laissant une marge d'amélioration significative via la modernisation du refroidissement. Les anciens data centers d'entreprises, les bâtiments industriels bien connectés et les sites télécom reconvertis entrent typiquement dans cette catégorie." },
  { q: "Comment mesurer le potentiel de création de valeur d'une opération brown-to-green ?", a: "Le potentiel se calcule sur trois axes : la réduction du PUE (chaque 0,1 point gagné se traduit en économies opex directes et en amélioration du loyer net), la revalorisation liée à la conformité EED et aux critères ESG (accès au financement vert, prime sur le taux de capitalisation), et le gain de revenus lié à la montée en densité et à l'accueil de charges IA. Une certification IPMVP Option C (modèle de régression R²≥0,92) permet de documenter les gains de façon auditable et bankable." },
  { q: "Comment TITAN DC AI sélectionne-t-il ses cibles brown-to-green ?", a: "TITAN DC AI applique un filtre en trois étapes : d'abord le grid — le site doit se trouver dans une zone où la capacité réseau permet une montée en charge réaliste à 3-5 ans. Ensuite le gap PUE — le site doit présenter un PUE actuel suffisamment élevé (≥1,5) pour justifier l'investissement de rénovation thermique. Enfin la trajectoire locataire — le site doit pouvoir accueillir des charges IA (densité, connectivité, certifications) et intéresser des preneurs capables de signer des baux longs terme alignés avec les critères ESG. Ce filtre réduit l'univers mais maximise la conviction sur chaque ligne." },
];

export default function ArticleBrownToGreenPage() {
  const { language } = useLanguage();
  const title = "Data centers brown-to-green : pourquoi les actifs existants vont battre les greenfields en Europe";
  const description = "Les data centers existants mal optimisés offrent un rendement supérieur aux greenfields en Europe. Pourquoi le brown-to-green est la thèse de la décennie. FINXIA.";
  const canonical = "https://finxiacapital.com/blog/data-centers-brown-to-green-europe-strategie-investissement/";
  const articleSchema = {
    "@context": "https://schema.org", "@type": "Article", "headline": title, "description": description,
    "datePublished": "2026-05-23", "dateModified": "2026-05-23",
    "author": { "@type": "Person", "name": "Lila Benhammou", "jobTitle": "Co-Fondatrice & CIO", "worksFor": { "@type": "Organization", "name": "FINXIA Capital", "url": "https://finxiacapital.com" }, "url": "https://finxiacapital.com/auteurs/lila-benhammou/" },
    "publisher": { "@type": "Organization", "name": "FINXIA Capital", "url": "https://finxiacapital.com", "logo": { "@type": "ImageObject", "url": "https://finxiacapital.com/logo-finxia.png" } },
    "url": canonical, "mainEntityOfPage": canonical,
    "keywords": ["brown-to-green", "data center", "rénovation", "PUE", "efficacité énergétique", "Europe", "TITAN DC AI", "greenfield", "investissement"],
    "citation": [
      { "@type": "CreativeWork", "name": "Borderstep Institute — Data Centres EU Facts & Figures", "url": "https://www.borderstep.org/data-centres-in-the-eu-facts-figures/" },
      { "@type": "CreativeWork", "name": "CBRE — Europe Data Centres Figures Q4 2024", "url": "https://www.cbre.com/insights/reports/europe-data-centres-figures" },
      { "@type": "CreativeWork", "name": "Commission européenne — Règlement délégué (UE) 2024/1364", "url": "https://energy.ec.europa.eu/topics/energy-efficiency/energy-efficiency-targets-directive-and-rules/energy-performance-data-centres_en" }
    ]
  };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://finxiacapital.com/" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://finxiacapital.com/blog/" },
    { "@type": "ListItem", "position": 3, "name": "Data centers brown-to-green", "item": canonical }
  ]};
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqDataFr.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) };

  return (
    <div data-testid="article-brown-to-green-page" className="pt-20">
      <SEO title={title} description={description} canonical={canonical}
        keywords="brown-to-green data center, rénovation datacenter Europe, PUE optimisation, TITAN DC AI, greenfield vs brownfield, EED Article 12, IPMVP Option C, Alliander, investissement alternatif Europe"
        structuredData={articleSchema} breadcrumbSchema={breadcrumbSchema} faqSchema={faqSchema}
        language={language} ogLocale={language === 'fr' ? "fr_FR" : "en_US"} hreflangFr={canonical} hreflangDefault={canonical} />
      <article className="bg-white">
        <header className="py-16 md:py-24 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href={language === 'fr' ? "/blog" : "/en/blog"} className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-[#C45A3B] transition-colors mb-8"><ArrowLeft className="w-4 h-4" />Retour au blog</Link>
            <div className="flex items-center gap-4 mb-6 text-sm">
              <span className="inline-flex items-center gap-2 text-[#C45A3B] font-medium uppercase tracking-wider"><Tag className="w-4 h-4" />Investment Strategy</span>
              <span className="text-slate-400">•</span>
              <time className="text-slate-600 flex items-center gap-2" dateTime="2026-05-23"><Calendar className="w-4 h-4" />23 mai 2026</time>
              <span className="text-slate-400">•</span>
              <span className="text-slate-600">12 min de lecture</span>
            </div>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">{title}</h1>
            <p className="text-slate-500 text-sm">Par <Link href="/auteurs/lila-benhammou/" className="text-[#C45A3B] hover:underline">Lila Benhammou, Co-Fondatrice &amp; CIO</Link> — FINXIA Capital</p>
          </div>
        </header>
        <div className="py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-slate prose-lg max-w-none">
              <p className="text-xl text-slate-700 font-medium leading-relaxed mb-8">Le débat sur les data centers européens tourne souvent autour de la même question : où construire le prochain campus ? Francfort, Amsterdam, Paris, Madrid, les pays nordiques — les cartes des nœuds de connectivité sont bien connues. Mais une autre question, moins souvent posée, est peut-être plus importante pour les prochaines années : et si la meilleure opportunité d&apos;investissement n&apos;était pas dans le neuf, mais dans l&apos;existant ?</p>
              <p>C&apos;est la thèse au cœur de la stratégie TITAN DC AI : le brown-to-green n&apos;est pas un plan B. C&apos;est une thèse d&apos;investissement différenciante, portée par trois contraintes structurelles que le marché n&apos;a pas encore totalement pricées.</p>

              <h2>1. Le greenfield en Europe : des délais qui changent le calcul</h2>
              <p>Construire un data center en partant de zéro en Europe prend du temps — beaucoup plus qu&apos;il y a dix ans. Dans les marchés les plus actifs (Amsterdam, Francfort, Dublin, Paris), les délais de raccordement électrique pour de grandes charges atteignent désormais 4 à 7 ans dans les zones saturées, selon les documents de planification publiés par les gestionnaires de réseau comme <a href="https://www.alliander.com/en/investors/annual-reports/" target="_blank" rel="noopener noreferrer nofollow">Alliander</a> aux Pays-Bas.</p>
              <p>Ajoutez à cela les délais de permitting, les études d&apos;impact, les négociations foncières et la montée en charge opérationnelle — et le délai entre la décision d&apos;investissement et le premier euro de loyer perçu peut dépasser 5 à 8 ans dans les meilleures conditions.</p>
              <p>Pour un investisseur, ce délai change fondamentalement l&apos;analyse de rendement :</p>
              <ul>
                <li>le cash drag sur les fonds mobilisés pèse sur le TRI réel ;</li>
                <li>l&apos;incertitude réglementaire (EED, objectifs PUE, normes carbone) s&apos;accroît sur un horizon aussi long ;</li>
                <li>les conditions de marché (loyers, taux de capitalisation, concurrence des hyperscalers) peuvent évoluer significativement pendant la période de construction.</li>
              </ul>
              <p>Le greenfield reste pertinent pour les acteurs qui ont le bilan et l&apos;horizon pour l&apos;absorber. Pour des stratégies d&apos;investissement propriétaire à conviction forte, le brown-to-green offre une alternative avec un profil de risque/rendement souvent supérieur.</p>

              <h2>2. L&apos;héritage du parc legacy européen : un stock de valeur latente</h2>
              <p>L&apos;Europe compte des milliers de data centers construits entre les années 1990 et 2015, avec des standards très inférieurs aux exigences actuelles. Le <a href="https://www.borderstep.org/data-centres-in-the-eu-facts-figures/" target="_blank" rel="noopener noreferrer nofollow">rapport Borderstep 2023</a> sur les data centers en Europe montre que :</p>
              <ul>
                <li>une part significative du parc existant affiche des PUE supérieurs à 1,6, certains sites dépassant 2,0 ;</li>
                <li>ces sites legacy représentent une fraction importante de la capacité totale installée en Europe ;</li>
                <li>les données du JRC indiquent que le parc pre-2010 est le moins performant, avec des systèmes de refroidissement souvent dimensionnés pour des densités de charge bien inférieures aux workloads IA actuels.</li>
              </ul>
              <p>C&apos;est ce stock qui constitue l&apos;univers d&apos;investissement du brown-to-green. Ces actifs ont plusieurs caractéristiques communes :</p>
              <ul>
                <li>ils sont déjà connectés au réseau électrique et aux infrastructures de fibre, même si les capacités sont à renforcer ;</li>
                <li>leur valeur de marché reflète leurs sous-performances actuelles, pas leur potentiel post-rénovation ;</li>
                <li>ils sont souvent détenus par des entreprises (outsourcing interne, banques, télécoms) qui n&apos;ont plus les moyens ou la conviction d&apos;investir dans leur modernisation.</li>
              </ul>
              <p>La décote d&apos;entrée sur ces actifs, combinée à l&apos;upside de la rénovation, est le moteur principal du rendement dans une stratégie brown-to-green bien exécutée.</p>

              <h2>3. La pression réglementaire EED : un catalyseur de valeur pour le rénovateur</h2>
              <p>La <a href="https://energy.ec.europa.eu/topics/energy-efficiency/energy-efficiency-targets-directive-and-rules/energy-efficiency-directive_en" target="_blank" rel="noopener noreferrer nofollow">Directive EED et son Article 12</a> ne font pas que créer des obligations de reporting : ils créent un calendrier de mise à niveau implicite, que tous les opérateurs ne pourront pas tenir.</p>
              <p>L&apos;objectif PUE ≤ 1,30 inscrit dans les discussions européennes à horizon 2027-2030 place mécaniquement les sites legacy les moins performants sous pression croissante :</p>
              <ul>
                <li>leurs clients grands comptes intègrent désormais la conformité EED dans leurs due diligences ESG ;</li>
                <li>leurs financeurs bancaires et obligataires commencent à intégrer le PUE dans leurs grilles de notation de risque ;</li>
                <li>leur valorisation dans les transactions secondaires subit une décote croissante, documentée par les études de <a href="https://www.cbre.com/insights/reports/europe-data-centres-figures" target="_blank" rel="noopener noreferrer nofollow">CBRE</a>.</li>
              </ul>
              <p>Pour l&apos;investisseur brown-to-green, cette pression réglementaire est une opportunité : elle crée un flux croissant de vendeurs contraints, qui préfèrent céder plutôt qu&apos;investir dans une mise à niveau coûteuse ; elle offre un arbitrage clair entre le prix d&apos;achat (intégrant la décote legacy) et la valeur post-rénovation (reflétant la conformité et la performance ESG) ; elle génère un accès potentiel au financement vert — green bonds, prêts ESG-linked — une fois la trajectoire de rénovation documentée et certifiée.</p>
              <p>La certification <a href="https://www.eudca.org/energy-efficiency-directive" target="_blank" rel="noopener noreferrer nofollow">IPMVP Option C</a> (modèle de régression avec R²≥0,92) permet de rendre ces gains auditables et bankables.</p>

              <h2>4. Les trois critères de sélection d&apos;un bon candidat brown-to-green</h2>
              <p>Tous les actifs legacy ne sont pas de bons candidats. L&apos;exercice de sélection est précis et repose sur trois filtres.</p>
              <p><strong>Premier filtre : la localisation réseau.</strong> Le site doit se trouver dans une zone où la capacité de raccordement électrique permet une montée en puissance réaliste à 3-5 ans. Un site bien localisé dans une zone où le réseau est déjà saturé pour les nouveaux projets greenfield est en position favorable : il dispose d&apos;une connexion existante que les entrants ne peuvent pas obtenir dans un délai raisonnable. C&apos;est un avantage compétitif structurel.</p>
              <p><strong>Deuxième filtre : le gap PUE.</strong> La différence entre le PUE actuel et le PUE cible post-rénovation doit être suffisamment large pour justifier l&apos;investissement de rénovation et générer un rendement attractif. Un site à PUE 1,8 qui peut atteindre 1,3 grâce à la modernisation de son système de refroidissement (free-cooling, liquid cooling, adiabatique) offre un upside opex et une revalorisation très significatifs. Un site déjà à 1,4 offre moins de marge.</p>
              <p><strong>Troisième filtre : la trajectoire locataire.</strong> La rénovation ne crée de la valeur que si elle permet d&apos;accueillir des charges valorisables. Pour TITAN DC AI, cela signifie des workloads IA nécessitant haute densité de rack (&gt;20 kW/rack), connectivité de qualité et certifications de performance. Le marché locataire de référence sont les hyperscalers régionaux, les opérateurs de cloud souverain et les entreprises en cours d&apos;internalisation de leurs workloads IA.</p>

              <h2>5. Brown-to-green vs greenfield : une comparaison de profils</h2>
              <p>Pour un investisseur comme FINXIA Capital, le choix entre brown-to-green et greenfield n&apos;est pas idéologique — c&apos;est une décision analytique basée sur les paramètres de chaque situation.</p>
              <div className="overflow-x-auto not-prose my-6 border border-slate-200">
                <table className="w-full text-left text-sm">
                  <thead className="bg-[#1E2A3A] text-white">
                    <tr>
                      <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider">Critère</th>
                      <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider">Greenfield</th>
                      <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider">Brown-to-green</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    {[
                      ["Délai avant revenus", "5–8 ans", "2–4 ans"],
                      ["Risque raccordement", "Élevé (file d'attente)", "Faible (connexion existante)"],
                      ["Capex construction", "Élevé", "Modéré (rénovation ciblée)"],
                      ["Prix d'entrée", "Prime (actif neuf)", "Décoté (legacy sous-performant)"],
                      ["Conformité EED", "Native", "À certifier (IPMVP)"],
                      ["Accès financement vert", "Naturel", "Conditionné à la trajectoire"],
                      ["Potentiel upside", "Limité (actif stabilisé)", "Fort (delta décote/rénovation)"],
                    ].map((row, i) => (
                      <tr key={i} className={`border-t border-slate-200 ${i % 2 === 1 ? 'bg-slate-50/50' : ''}`}>
                        <td className="px-4 py-3 font-semibold text-[#1E2A3A]">{row[0]}</td>
                        <td className="px-4 py-3">{row[1]}</td>
                        <td className="px-4 py-3">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>Cette comparaison n&apos;est pas universelle — un greenfield dans une zone sous-captée avec un raccordement rapide peut être très attractif. Mais en Europe en 2026, dans les marchés matures, le brown-to-green offre structurellement un meilleur rapport risque/rendement pour les investisseurs propriétaires à conviction.</p>

              <h2>6. La lecture TITAN DC AI : un portefeuille construit autour de cette thèse</h2>
              <blockquote className="border-l-4 border-[#C45A3B] pl-6 italic text-slate-700 my-8">
                « Le marché data center en Europe passe d&apos;une logique de construction à une logique de réallocation du capital existant. Les actifs mal exploités, sous-performants sur le plan énergétique et détenus par des acteurs qui ne savent plus quoi en faire, vont progressivement rejoindre les mains de ceux qui savent les transformer. C&apos;est exactement là que nous opérons avec TITAN DC AI. »
                <footer className="text-sm text-slate-500 mt-2 not-italic">— <strong>Lila Benhammou</strong>, Co-Fondatrice &amp; CIO, FINXIA Capital</footer>
              </blockquote>
              <p>Concrètement, <Link href="/strategies/" className="text-[#C45A3B] hover:underline">TITAN DC AI</Link> construit un portefeuille brownfield avec trois caractéristiques :</p>
              <ul>
                <li>des actifs situés en France, Espagne, Italie et dans les pays nordiques, dans des zones où la contrainte réseau favorise les sites déjà connectés ;</li>
                <li>une enveloppe de rénovation ciblée sur le refroidissement, l&apos;alimentation et la supervision IA — pas une reconstruction complète ;</li>
                <li>une trajectoire de certification documentée dès l&apos;acquisition, compatible avec un financement vert à 3-5 ans.</li>
              </ul>
              <p>L&apos;objectif est de constituer un portefeuille de 20 à 70 MW de capacité IT rénovée, aligné avec les exigences EED post-2027 et positionné pour accueillir des charges IA de qualité institutionnelle.</p>
              <p className="text-slate-700 mt-6">Pour comprendre notre approche complète, <Link href="/strategies/" className="text-[#C45A3B] hover:underline">consultez notre page Stratégies</Link> ou <Link href="/about/" className="text-[#C45A3B] hover:underline">téléchargez notre Livre Blanc sur la mesure du PUE et la certification IPMVP</Link>.</p>

              <h2>FAQ — Data centers brown-to-green et investissement</h2>
              {faqDataFr.map((faq, idx) => (
                <div key={idx} className="mb-6">
                  <h3 className="font-semibold text-slate-900 mb-2">Q{idx + 1}. {faq.q}</h3>
                  <p className="text-slate-700">{faq.a}</p>
                </div>
              ))}

              <div className="mt-8 pt-8 border-t border-slate-200">
                <h3 className="font-serif text-xl mb-4">Pour aller plus loin</h3>
                <ul className="space-y-2 text-sm">
                  <li>→ <Link href="/guides/eed-directive-datacenter-2026/" className="text-[#C45A3B] hover:underline">Guide complet EED datacenters 2026</Link></li>
                  <li>→ <Link href="/blog/data-centers-ia-energie-strategie-europe-2030/" className="text-[#C45A3B] hover:underline">Data centers IA : l&apos;angle mort énergétique de la stratégie européenne</Link></li>
                  <li>→ <Link href="/blog/pue-optimisation-datacenters-europeens-guide-2026/" className="text-[#C45A3B] hover:underline">Optimisation PUE des datacenters européens — guide 2026</Link></li>
                  <li>→ <Link href="/blog/loi-pinm-statut-datacenter-brown-to-green/" className="text-[#C45A3B] hover:underline">Loi PINM — Statut datacenter brown-to-green</Link></li>
                  <li>→ <Link href="/strategies/" className="text-[#C45A3B] hover:underline">Stratégie TITAN DC AI</Link></li>
                  <li>→ <Link href="/auteurs/lila-benhammou/" className="text-[#C45A3B] hover:underline">Profil auteure : Lila Benhammou</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
