import { ArrowLeft, Calendar, BookOpen } from 'lucide-react';
import Link from 'next/link';
import SEO from '../../components/SEO';
import { useLanguage } from '../../context/LanguageContext';

const faqDataFr = [
  { q: "Un site qui fait 400 kW IT aujourd'hui mais prévoit 600 kW IT en 2026 doit-il déclarer ?", a: "Dès que la puissance IT installée dépasse 500 kW (même temporairement pendant un test de charge documenté), l'obligation de déclaration s'applique sur l'exercice suivant complet. Les sites en croissance programmée doivent donc anticiper l'instrumentation et la collecte de données dès le franchissement du seuil." },
  { q: "Comment distinguer puissance IT installée et puissance IT consommée ?", a: "La puissance installée est la puissance nominale des équipements (somme des plaques signalétiques). La puissance consommée est la puissance électrique réelle (typiquement 30 à 70% de l'installée). Le seuil de 500 kW fait référence à la puissance installée — ce qui rend le seuil plus strict qu'il n'y paraît au premier regard." },
  { q: "Les datacenters de recherche universitaire sont-ils concernés ?", a: "Oui, dès 500 kW IT installée, sans exemption liée au caractère public ou de recherche. Seules les infrastructures classifiées sécurité nationale peuvent être exclues, sur décision des États membres." },
  { q: "Quel est le surcoût moyen d'une certification IPMVP ?", a: "Pour un site 5-20 MW IT : 40 000 à 120 000 € pour une certification complète Option C, avec une durée de validité de 3 ans avant re-certification. Pour sites < 5 MW IT : 20 000 à 50 000 €. Pour sites > 20 MW IT : 100 000 à 300 000 € selon la complexité du périmètre." },
  { q: "Un datacenter peut-il déclarer volontairement avant mai 2026 ?", a: "Oui et cela est recommandé pour les opérateurs cherchant à prendre un avantage compétitif réputationnel. Plusieurs opérateurs majeurs (Equinix, Digital Realty, Iron Mountain) ont déjà annoncé leur intention de déclarer par anticipation dès que les portails nationaux seront ouverts." },
  { q: "Les datacenters mobiles ou containerisés sont-ils couverts ?", a: "Oui, dès qu'ils dépassent le seuil de 500 kW IT et qu'ils sont installés plus de 180 jours consécutifs sur un même site. Les solutions temporaires d'intervention d'urgence (< 180 jours) sont exclues." },
  { q: "Que se passe-t-il si mon fournisseur d'énergie ne peut pas documenter les Garanties d'Origine pour le REF ?", a: "L'opérateur doit fournir ses propres justificatifs : certificats GO acquis sur le marché, contrats PPA directs, certificats ISO 14001/50001 couvrant la traçabilité. En l'absence totale de documentation, le REF doit être déclaré à 0, ce qui peut compromettre l'alignement Taxonomie ultérieur." },
  { q: "Un PUE déclaré puis contesté par l'ADEME peut-il être corrigé ?", a: "Oui, la procédure prévoit un droit de rectification dans les 60 jours suivant la notification de contestation. Au-delà, la déclaration est réputée inexacte et peut faire l'objet de sanctions pour fausse déclaration si la mauvaise foi est établie." },
  { q: "L'obligation s'étend-elle aux datacenters tiers hébergeant mes serveurs ?", a: "Non, l'obligation pèse sur l'opérateur d'infrastructure physique (le propriétaire ou exploitant du site). En tant que tenant d'une colocation, vous n'êtes pas soumis à l'obligation EED Article 12. Mais vous avez tout intérêt à exiger de votre fournisseur un PUE certifié pour votre propre conformité ESG." },
  { q: "Comment l'Article 21 sera-t-il audité sur le terrain ?", a: "Audits aléatoires par l'autorité nationale compétente (ADEME en France) sur échantillon annuel. Audits ciblés en cas de déclaration incohérente ou signalement. À partir de 2028, les données déclarées étant publiques, les audits seront également déclenchables sur signalement citoyen/concurrent." },
  { q: "La Directive EED s'applique-t-elle aux datacenters au Royaume-Uni ?", a: "Non, le Royaume-Uni n'étant plus membre de l'UE, les opérateurs britanniques sont régis par le régime national. Cela crée un désalignement qui pourrait être rectifié bilatéralement dans les années à venir." },
  { q: "Que conseillez-vous à un opérateur aujourd'hui ?", a: "Quatre actions immédiates : (1) engager l'instrumentation manquante dès Q2 2026 ; (2) engager les travaux à ROI rapide (confinement, DCIM) sans attendre le diagnostic complet ; (3) démarrer la baseline IPMVP pour sécuriser la certification 2027 ; (4) intégrer la conformité EED dans la communication commerciale vis-à-vis des clients et prêteurs." },
];

export default function GuideEedPage() {
  const { language } = useLanguage();
  const t = {
    title: "EED Directive Datacenters 2026 — Guide Complet (Articles 12 et 21)",
    description: "Guide de référence sur la Directive EED 2023/1791 appliquée aux datacenters européens : Article 12 (déclaration 15 mai 2026), Article 21 (PUE ≤ 1,30 au 2 janvier 2027), IPMVP Option C, EU Taxonomy 8.1, plan de mise en conformité 90 jours.",
    tag: "Guide de référence",
    date: "Mai 2026 — Mis à jour",
    readTime: "20 min de lecture",
    author: "Lila Benhammou, Co-Fondatrice & CIO"
  };
  const canonical = "https://finxiacapital.com/guides/eed-directive-datacenter-2026/";
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t.title,
    "description": t.description,
    "image": "https://finxiacapital.com/logo-finxia.png",
    "datePublished": "2026-05-02T09:00:00+01:00",
    "dateModified": "2026-05-02T09:00:00+01:00",
    "author": {
      "@type": "Person",
      "name": "Lila Benhammou",
      "jobTitle": "Co-Founder & Chief Investment Officer",
      "worksFor": { "@type": "Organization", "name": "FINXIA Capital" },
      "url": "https://finxiacapital.com/auteurs/lila-benhammou/"
    },
    "publisher": {
      "@type": "Organization",
      "name": "FINXIA Capital",
      "logo": { "@type": "ImageObject", "url": "https://finxiacapital.com/logo-finxia.png" }
    },
    "mainEntityOfPage": { "@type": "WebPage", "@id": canonical }
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://finxiacapital.com" },
      { "@type": "ListItem", "position": 2, "name": "Ressources", "item": "https://finxiacapital.com/guides/eed-directive-datacenter-2026/" },
      { "@type": "ListItem", "position": 3, "name": "Guide EED Datacenters 2026", "item": canonical }
    ]
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqDataFr.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  };
  return (
    <div data-testid="guide-eed-page" className="pt-20">
      <SEO
        title={t.title}
        description={t.description}
        canonical={canonical}
        keywords="guide complet EED datacenters 2026, Directive EED 2023/1791, Article 12 Article 21, déclaration datacenter 15 mai 2026, PUE 1,30 janvier 2027, IPMVP Option C, EU Taxonomy 8.1, Green Bond ICMA, conformité datacenter Europe"
        structuredData={articleSchema}
        breadcrumbSchema={breadcrumbSchema}
        faqSchema={faqSchema}
        language={language}
        ogLocale={language === 'fr' ? "fr_FR" : "en_US"}
        hreflangFr={canonical}
        hreflangDefault={canonical}
      />
      <article className="bg-white">
        <header className="py-16 md:py-24 bg-gradient-to-br from-[#1E2A3A] to-[#2A3A4A] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-[#C45A3B] transition-colors mb-8"><ArrowLeft className="w-4 h-4" />Retour à l&apos;accueil</Link>
            <div className="flex items-center gap-4 mb-6 text-sm">
              <span className="inline-flex items-center gap-2 text-[#C45A3B] font-medium uppercase tracking-wider"><BookOpen className="w-4 h-4" />{t.tag}</span>
              <span className="text-slate-400">•</span>
              <time className="text-slate-300 flex items-center gap-2" dateTime="2026-05-02"><Calendar className="w-4 h-4" />{t.date}</time>
              <span className="text-slate-400">•</span>
              <span className="text-slate-300">{t.readTime}</span>
            </div>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight text-white">{t.title}</h1>
            <p className="text-slate-300 text-sm">Par <Link href="/auteurs/lila-benhammou/" className="text-[#C45A3B] hover:underline">{t.author}</Link> — FINXIA Capital</p>
          </div>
        </header>

        <div className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-4 lg:gap-12">

            {/* TOC Sidebar — desktop only */}
            <aside className="hidden lg:block lg:col-span-1">
              <nav
                data-testid="guide-toc"
                aria-label="Table des matières"
                className="sticky top-28 border-l-2 border-slate-200"
              >
                <p className="text-[#C45A3B] text-xs font-semibold uppercase tracking-wider pl-4 mb-4">Sommaire</p>
                <ul className="space-y-2">
                  {[
                    { id: 'contexte', label: 'Contexte' },
                    { id: 'article-12', label: 'Article 12 — Déclaration 15 mai 2026' },
                    { id: 'article-21', label: 'Article 21 — PUE ≤ 1,30' },
                    { id: 'ipmvp', label: 'IPMVP Option C' },
                    { id: 'taxonomy', label: 'EU Taxonomy 8.1' },
                    { id: 'plan-90-jours', label: 'Plan 90 jours' },
                    { id: 'faq', label: 'FAQ — 12 questions' },
                  ].map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="block pl-4 py-1.5 text-sm text-slate-600 hover:text-[#C45A3B] hover:border-l-2 hover:border-[#C45A3B] hover:-ml-[2px] transition-colors leading-snug"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pl-4 pt-4 border-t border-slate-200">
                  <p className="text-xs text-slate-500 mb-2">Auteure</p>
                  <Link href="/auteurs/lila-benhammou/" className="text-sm font-medium text-slate-700 hover:text-[#C45A3B] transition-colors">
                    Lila Benhammou →
                  </Link>
                </div>
              </nav>
            </aside>

            <div className="lg:col-span-3 max-w-3xl">
            <div className="prose prose-slate prose-lg max-w-none scroll-mt-28 [&_h2]:scroll-mt-28 [&_h3]:scroll-mt-28">
              <p className="text-xl text-slate-700 font-medium leading-relaxed mb-8">
                La Directive européenne sur l&apos;efficacité énergétique (EED 2023/1791, refonte adoptée le 13 septembre 2023 et entrée en vigueur le 10 octobre 2023) marque la transformation réglementaire la plus structurante qu&apos;ait connu le secteur européen des datacenters depuis la directive IED de 2010. En consacrant pour la première fois un régime spécifique aux datacenters, l&apos;Union européenne trace une trajectoire binaire : d&apos;ici janvier 2027, chaque datacenter dépassant 500 kW IT devra être soit conforme (PUE ≤ 1,30, déclaration Article 12 à jour, REF documenté), soit sortir du marché institutionnel — disqualifié des appels d&apos;offres publics, exclu du financement Green Bond, décoté à la revente de 15 à 30 %.
              </p>
              <p>
                Ce guide constitue la référence technique complète sur les deux articles pivots de la Directive (12 et 21), leur articulation avec l&apos;EU Taxonomy 8.1, le protocole IPMVP Option C de certification, et le plan de mise en conformité en 90 jours. Il est maintenu à jour par l&apos;équipe FINXIA Capital et couvre les transpositions nationales au fur et à mesure de leur adoption.
              </p>
              <p>
                Il s&apos;adresse aux opérateurs de datacenters (hyperscalers, colocations, enterprise DC), aux directeurs financiers et ESG devant piloter la mise en conformité, aux investisseurs institutionnels qui évaluent l&apos;éligibilité Taxonomie de leurs actifs, et aux consultants techniques accompagnant ces transitions.
              </p>

              <h2 id="contexte">Contexte : pourquoi l&apos;UE régule l&apos;efficacité des datacenters</h2>
              <p>
                Entre 2015 et 2024, la consommation énergétique des datacenters européens a augmenté de <strong>76 %</strong>, passant de 53 TWh à environ 93 TWh selon le dernier rapport consolidé du Joint Research Centre publié en novembre 2024. Cette progression, largement portée par la demande cloud puis IA, représente désormais environ 3 % de la consommation électrique finale de l&apos;UE — avec des concentrations supérieures à 15 % dans certaines zones urbaines (Dublin, Amsterdam, Francfort, Paris).
              </p>
              <p>
                Cette dynamique a conduit en 2022-2023 à plusieurs crises de planification électrique : moratoires sur les raccordements en Irlande (novembre 2021), aux Pays-Bas (Randstad 2022), en Allemagne (Frankfurt RheinMain 2023) ; tensions de raccordement majeures à Dublin et à la périphérie de Paris ; conflits avec les collectivités sur l&apos;usage de l&apos;eau en zone méditerranéenne. Les opérateurs et la Commission ont convergé sur un diagnostic : sans cadre harmonisé, chaque État risquait d&apos;adopter des moratoires divergents fragilisant le marché intérieur.
              </p>
              <p>La Directive EED refonte répond à cette situation selon une logique en trois temps :</p>
              <ol>
                <li><strong>Transparence</strong> (Article 12) — obligation de déclaration harmonisée pour construire la première base de données européenne des performances réelles</li>
                <li><strong>Performance</strong> (Article 21) — seuils contraignants dérivés des données collectées, appliqués à partir de 2027</li>
                <li><strong>Alignement financier</strong> (EU Taxonomy 8.1) — mise en cohérence avec les critères de finance verte</li>
              </ol>
              <p>
                Cette architecture à trois étages — mesure, norme, financement — est sans équivalent dans les autres grandes économies. Aux États-Unis, la régulation reste sectorielle et décentralisée (programmes EnergyStar non contraignants). Au Japon, le Top Runner Program impose des benchmarks mais sans déclaration publique. En Chine, les quotas par province sont appliqués mais sans transparence internationale. L&apos;Europe devient donc le premier bloc à imposer un régime complet et harmonisé — avec l&apos;ambition de créer un benchmark mondial.
              </p>

              <h2 id="article-12">Article 12 — déclaration obligatoire avant le 15 mai 2026</h2>
              <h3>Qui doit déclarer</h3>
              <p>Tout datacenter situé sur le territoire de l&apos;UE dont la puissance IT installée dépasse <strong>500 kW</strong>. Le seuil s&apos;entend de la puissance électrique nominale des équipements IT (serveurs, stockage, réseau), hors auxiliaires refroidissement et alimentation. Les colocations multi-tenants, les datacenters d&apos;entreprise captifs, les salles informatiques industrielles centralisées sont tous couverts dès qu&apos;ils franchissent ce seuil.</p>
              <h3>Quoi déclarer (5 indicateurs)</h3>
              <p>Conformément au Règlement délégué 2024/1364 :</p>
              <ul>
                <li><strong>Consommation énergétique totale</strong> (kWh/an, mesure au point de livraison)</li>
                <li><strong>PUE</strong> (Power Usage Effectiveness) annualisé, norme ISO/IEC 30134-2</li>
                <li><strong>WUE</strong> (Water Usage Effectiveness) en L/kWh IT</li>
                <li><strong>REF</strong> (Renewable Energy Factor) en % énergie renouvelable certifiée</li>
                <li><strong>ERF</strong> (Energy Reuse Factor) — chaleur récupérée valorisée hors site</li>
              </ul>
              <h3>Quand déclarer</h3>
              <p>Première échéance : <strong>15 mai 2026</strong> pour les données de l&apos;exercice 2025 complet. Les déclarations suivantes seront annuelles, au 15 mai de chaque année, couvrant l&apos;exercice N-1. La première publication de données agrégées est attendue pour début 2027. La publication individuelle par site est prévue à partir de 2028.</p>
              <h3>Où déclarer</h3>
              <p>En France, l&apos;organe collecteur est l&apos;<strong>ADEME</strong> via une plateforme dédiée ouverte fin mars 2026. Dans les autres États membres, les agences nationales équivalentes (BMWK en Allemagne, MITECO en Espagne) assurent la collecte et la remontée au JRC.</p>
              <h3>Comment déclarer (processus 4 phases, 90 jours)</h3>
              <ol>
                <li><strong>J0-J30</strong> — Cartographie des points de mesure, identification des compteurs manquants, déploiement de l&apos;instrumentation (compteurs classe 1 certifiés MID)</li>
                <li><strong>J30-J60</strong> — Collecte des données via DCIM/BMS/SCADA, fiabilisation par recoupement avec les factures fournisseur</li>
                <li><strong>J60-J90</strong> — Calcul des cinq indicateurs selon les formules du Règlement délégué, rédaction du dossier</li>
                <li><strong>J90+</strong> — Optionnel mais recommandé : vérification indépendante par tiers accrédité sous IPMVP Option C</li>
              </ol>

              <h2 id="article-21">Article 21 — PUE ≤ 1,30 au 2 janvier 2027</h2>
              <p>L&apos;Article 21 introduit les premiers seuils contraignants de performance énergétique appliqués aux datacenters européens. Son entrée en vigueur au <strong>2 janvier 2027</strong> crée l&apos;urgence de la mise en conformité dès 2026.</p>
              <h3>Les seuils retenus</h3>
              <ul>
                <li><strong>PUE annualisé ≤ 1,30</strong> pour tout datacenter existant (mis en service avant le 1er janvier 2027)</li>
                <li><strong>PUE annualisé ≤ 1,20</strong> pour tout datacenter neuf (permis postérieur au 1er janvier 2027)</li>
                <li><strong>WUE maximal</strong> : seuil national variant selon États membres, typiquement 0,4 à 1,8 L/kWh</li>
              </ul>
              <p>Ces seuils ne sont pas des objectifs indicatifs mais des <strong>obligations légales</strong> assorties de sanctions. Les opérateurs non conformes devront présenter un plan de mise à niveau avec calendrier de retour à la conformité de 36 mois maximum.</p>
              <h3>Sanctions applicables en France (projet de transposition, avril 2026)</h3>
              <ul>
                <li>Amende administrative de 15 000 à 100 000 € par site non conforme</li>
                <li>Astreinte journalière au-delà de la période de régularisation</li>
                <li>Publication des manquements sur le portail ADEME</li>
                <li>En cas de récidive ou fausse déclaration : suspension d&apos;exploitation possible</li>
              </ul>
              <h3>Impact sur le parc existant</h3>
              <p>Les études JRC 2024-2025 estiment que <strong>plus de 60 % du parc européen existant</strong> affiche un PUE supérieur à 1,30 et nécessitera des travaux de mise en conformité. L&apos;enveloppe d&apos;investissement totale est estimée entre <strong>40 et 70 milliards d&apos;euros sur cinq ans</strong> (CBRE Global Data Center Investment Forecast, juin 2025).</p>
              <p>Cette enveloppe se répartit en trois catégories : 20 % du parc — actifs récents déjà conformes (100-400 €/kW IT) ; 50 % du parc — actifs intermédiaires nécessitant un programme free cooling + UPS + confinement (600-1 500 €/kW IT) ; 30 % du parc — actifs anciens pour lesquels la rénovation est souvent non rentable (1 500-3 000 €/kW IT). C&apos;est cette troisième catégorie que <strong>TITAN DC AI</strong> cible prioritairement via une stratégie brown-to-green.</p>

              <h2 id="ipmvp">IPMVP — le protocole de mesure certifiable</h2>
              <p>Le protocole IPMVP, développé par l&apos;EVO (Efficiency Valuation Organization) et reconnu par la Commission européenne comme le standard de référence, encadre la mesure et la vérification indépendante des performances énergétiques. Pour les datacenters, l&apos;<strong>Option C (Whole Facility)</strong> est le standard opérationnel.</p>
              <h3>Les 6 étapes d&apos;une certification IPMVP Option C</h3>
              <ol>
                <li><strong>Baseline (12-24 mois min)</strong> — Mesure continue de la consommation totale et des variables explicatives</li>
                <li><strong>Modélisation statistique</strong> — Modèle de régression validé à R² ≥ 0,85</li>
                <li><strong>Intervention</strong> — Réalisation des travaux d&apos;optimisation</li>
                <li><strong>Post-installation (12 mois min)</strong> — Mesure dans les mêmes conditions</li>
                <li><strong>Calcul de l&apos;économie ajustée</strong> — Comparaison consommation réelle vs consommation modélisée baseline</li>
                <li><strong>Rapport CMVP</strong> — Document formel produit par un Certified Measurement and Verification Professional</li>
              </ol>
              <h3>Certificateurs reconnus en Europe</h3>
              <p>Bureau Veritas, TÜV Rheinland, SGS, DNV, Apave, Socotec. Pour les sites entre 5 et 20 MW IT, le coût se situe entre <strong>40 000 et 120 000 €</strong>, amortis sur 3 ans.</p>
              <p>IPMVP présente trois avantages face aux alternatives : reconnaissance institutionnelle (BEI, BERD, ICMA, Commission), rigueur méthodologique (ajustement statistique des variables externes), bankabilité (les rapports sont directement utilisables comme pièces justificatives Green Bond).</p>

              <h2 id="taxonomy">EU Taxonomy 8.1 — impact sur le financement Green Bond</h2>
              <p>L&apos;EU Taxonomy Regulation (2020/852) et son Acte Délégué Climat (juin 2023) ont créé la catégorie <strong>8.1 — Data processing, hosting and related activities</strong> comme l&apos;une des rares activités datacenter éligibles à la finance verte alignée.</p>
              <h3>Les cinq conditions d&apos;alignement Taxonomie 8.1</h3>
              <ol>
                <li><strong>PUE annualisé</strong> ≤ 1,30 (existants) ou ≤ 1,20 (neufs)</li>
                <li><strong>REF</strong> ≥ 50 % d&apos;énergie renouvelable certifiée à horizon 2030, avec trajectoire intermédiaire</li>
                <li><strong>Respect des seuils WUE</strong> nationaux + documentation des sources d&apos;eau</li>
                <li><strong>Conformité à la série de normes EN 50600</strong></li>
                <li><strong>Participation active au Code de Conduite européen pour les datacenters</strong></li>
              </ol>
              <h3>Avantages financiers concrets</h3>
              <ul>
                <li><strong>Green Bonds ICMA</strong> : coût de la dette inférieur de 30 à 80 bps. Pour un refinancement de 200 M€ sur 7 ans : 4,2 à 11,2 M€ d&apos;économie actualisée.</li>
                <li><strong>Financements BEI / BERD</strong> : Euribor + 150-250 bps contre 250-400 bps pour financements classiques</li>
                <li><strong>Véhicules Article 9 SFDR</strong> : les fonds « dark green » sont obligés d&apos;investir dans des actifs alignés Taxonomie</li>
                <li><strong>Critères ESG corporate</strong> : les grandes entreprises avec engagements Net Zero auditables intègrent l&apos;alignement 8.1 dans leurs sélections de fournisseurs</li>
              </ul>

              <h2 id="plan-90-jours">Plan de mise en conformité — 90 jours</h2>
              <h3>Jour 0-30 : Audit et cartographie</h3>
              <ul>
                <li>Audit d&apos;instrumentation existante (compteurs, DCIM, BMS)</li>
                <li>Identification des points de mesure manquants pour couvrir ISO/IEC 30134-2</li>
                <li>Déploiement des compteurs complémentaires</li>
                <li>Récupération des 12 derniers mois de données brutes</li>
              </ul>
              <h3>Jour 30-60 : Calcul des indicateurs et diagnostic</h3>
              <ul>
                <li>Calcul du PUE annualisé baseline selon ISO 30134-2</li>
                <li>Calcul WUE, REF, ERF sur données réelles</li>
                <li>Rédaction du dossier au format national</li>
                <li><strong>Diagnostic stratégique</strong> : si PUE &lt; 1,30 → déclaration et certification IPMVP ; si PUE &gt; 1,30 → plan d&apos;action Article 21 avec roadmap et CAPEX</li>
              </ul>
              <h3>Jour 60-90 : Dépôt et engagement du plan</h3>
              <ul>
                <li>Soumission de la déclaration Article 12 avant l&apos;échéance légale</li>
                <li>Lancement des études techniques pour le plan Article 21</li>
                <li>Engagement CAPEX prioritaires à ROI rapide (confinement, DCIM, UPS ECO — ROI 12-18 mois)</li>
                <li>Engagement des études ingénierie free cooling et groupes froid (ROI 24-36 mois)</li>
              </ul>
              <h3>Jour 90-180 (post-déclaration)</h3>
              <ul>
                <li>Lancement des travaux prioritaires</li>
                <li>Mise en place de la baseline IPMVP pour préparer la certification à 12-18 mois</li>
                <li>Communication commerciale : positionnement « conformité EED en avance »</li>
              </ul>

              <h2 id="faq">FAQ complète — 12 questions</h2>
              {faqDataFr.map((faq, idx) => (
                <div key={idx} className="mb-6">
                  <h3 className="font-semibold text-slate-900 mb-2">{idx + 1}. {faq.q}</h3>
                  <p className="text-slate-700">{faq.a}</p>
                </div>
              ))}

              <div className="mt-12 p-6 bg-slate-50 border-l-4 border-[#C45A3B] rounded">
                <p className="text-slate-700 leading-relaxed">
                  La Directive EED refonte transforme en profondeur les économies d&apos;investissement du marché européen des datacenters. Les opérateurs qui traiteront sa mise en œuvre comme une obligation défensive subiront les coûts sans capter les bénéfices. Ceux qui l&apos;intégreront comme un vecteur stratégique — certification IPMVP, alignement Taxonomie 8.1, communication proactive, repositionnement des actifs non conformes en opportunités d&apos;acquisition à décote — construiront un avantage compétitif durable.
                </p>
                <p className="text-slate-700 leading-relaxed mt-4">
                  <strong>FINXIA Capital</strong> a structuré sa stratégie TITAN DC AI précisément autour de cette séquence réglementaire : acquisition ciblée des actifs brownfield non conformes, transformation technique complète, certification IPMVP Option C par Bureau Veritas, alignement Taxonomie 8.1, refinancement Green Bond ICMA. Notre analyse publiée en 2026 sur SSRN (Abstract ID 6597918) constitue le socle académique de cette thèse.
                </p>
                <p className="text-slate-500 text-sm mt-4 italic">Ce guide est maintenu à jour par l&apos;équipe FINXIA Capital. Dernière révision : mai 2026.</p>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-200">
                <h3 className="font-serif text-xl mb-4">Articles liés</h3>
                <ul className="space-y-2 text-sm">
                  <li>→ <Link href="/blog/eed-article-12-declaration-datacenter-guide-2026/" className="text-[#C45A3B] hover:underline">EED Article 12 : guide complet de la déclaration obligatoire</Link></li>
                  <li>→ <Link href="/blog/pue-optimisation-datacenters-europeens-guide-2026/" className="text-[#C45A3B] hover:underline">Guide d&apos;optimisation PUE des datacenters européens</Link></li>
                  <li>→ <Link href="/blog/loi-pinm-statut-datacenter-brown-to-green/" className="text-[#C45A3B] hover:underline">Loi PINM — Statut datacenter brown-to-green</Link></li>
                  <li>→ <Link href="/strategies/" className="text-[#C45A3B] hover:underline">Stratégie TITAN DC AI</Link></li>
                  <li>→ <Link href="/auteurs/lila-benhammou/" className="text-[#C45A3B] hover:underline">Profil auteure : Lila Benhammou</Link></li>
                  <li>→ <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6597918" target="_blank" rel="noopener noreferrer nofollow" className="text-[#C45A3B] hover:underline">Publication SSRN — PUE Optimization & EED (en cours de revue)</a></li>
                </ul>
              </div>
            </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
