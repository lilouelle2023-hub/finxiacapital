import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import Link from 'next/link';
import SEO from '../../components/SEO';
import { useLanguage } from '../../context/LanguageContext';

const faqDataFr = [
  { q: "Mon datacenter fait 480 kW IT. Suis-je concerné ?", a: "Non, le seuil est strictement de 500 kW IT installée. Attention cependant à la trajectoire de croissance : dès que la puissance IT installée dépasse 500 kW (y compris temporairement pour un pic de charge documenté), l'obligation de déclaration s'applique sur l'exercice suivant complet." },
  { q: "Est-ce que le PUE doit être certifié par un tiers ?", a: "Non, pas pour la déclaration Article 12. Une mesure interne conforme ISO/IEC 30134-2 est suffisante. Cependant, l'article 21 imposera à partir de 2027 une certification indépendante pour les sites cherchant une qualification PUE ≤ 1,30. Nous recommandons de passer dès 2026 en certification IPMVP Option C pour anticiper les exigences futures." },
  { q: "Que se passe-t-il si je ne peux pas mesurer certains indicateurs ?", a: "Les indicateurs non mesurables doivent faire l'objet d'une estimation documentée (méthode de calcul, hypothèses, marge d'incertitude) conformément aux lignes directrices du JRC. Une déclaration avec estimation documentée est préférable à une absence de déclaration — les autorités tolèrent une marge d'erreur déclarée tant qu'elle reste sous 15%." },
  { q: "Les colocations doivent-elles déclarer au niveau du site ou par tenant ?", a: "Déclaration au niveau du site (l'opérateur exploitant l'infrastructure physique), avec consolidation de l'ensemble des charges IT des tenants. Les tenants individuels n'ont aucune obligation de déclaration EED Article 12 — l'obligation pèse sur l'opérateur de colocation." },
  { q: "Quelle est la différence entre les Garanties d'Origine et les PPA renouvelables pour le REF ?", a: "Les GO sont des certificats électroniques confirmant qu'un MWh a été produit d'origine renouvelable — elles peuvent être achetées séparément de l'énergie consommée. Les PPA renouvelables couplent contractuellement fourniture physique et certificats. Les deux sont recevables pour le REF, mais la Commission considère les PPA avec supplementarity comme qualitativement supérieurs." },
  { q: "Mon datacenter fonctionne en free cooling 100%. WUE = 0 est-il recevable ?", a: "Oui, strictement. Les sites en free cooling sec sans adiabatique déclarent WUE = 0 avec documentation technique du mode de refroidissement. Attention aux sites « free cooling avec assistance adiabatique en été » qui ont un WUE non nul, même faible (~0,05 à 0,15 L/kWh)." },
  { q: "Les données de mon DCIM suffisent-elles pour la déclaration ?", a: "Si votre DCIM est professionnel (Schneider EcoStruxure, Vertiv Trellis, Nlyte, Sunbird) et que vous disposez d'au moins 12 mois de données fiables, les rapports standards couvrent la plupart des indicateurs Article 12. Une vérification croisée manuelle reste recommandée sur le REF et sur les pertes de conversion auxiliaires." },
  { q: "Puis-je externaliser complètement la déclaration à un consultant ?", a: "Oui, et c'est la voie choisie par la majorité des opérateurs mid-market. Les cabinets spécialisés proposent des prestations clé en main entre 15 000 et 50 000 € selon la taille du site. Pour les opérateurs gérant plus de 5 sites, un investissement interne devient plus économique que l'externalisation." },
];

export default function Article6Page() {
  const { language } = useLanguage();
  const content = {
    fr: {
      title: "EED Article 12 : Guide Complet pour la Déclaration Obligatoire des Datacenters avant le 15 Mai 2026",
      description: "Guide complet EED datacenters 2026 : Article 12, déclaration obligatoire 15 mai 2026, seuils 500 kW IT, indicateurs PUE WUE REF ERF, sanctions, préparation 90 jours.",
      tag: "Regulatory Compliance",
      date: "Avril 2026",
      readTime: "12 min de lecture",
      backToBlog: "Retour au blog",
      author: "Lila Benhammou, Co-Fondatrice & CIO"
    },
    en: {
      title: "EED Article 12: Complete Guide for Mandatory Datacenter Declaration before May 15, 2026",
      description: "May 15, 2026 is the first mandatory declaration deadline imposed by EED Article 12. Complete guide for European datacenter operators.",
      tag: "Regulatory Compliance",
      date: "April 2026",
      readTime: "12 min read",
      backToBlog: "Back to blog",
      author: "Lila Benhammou, Co-Founder & CIO"
    }
  };
  const t = content[language];
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": t.title,
    "description": t.description,
    "image": "https://finxiacapital.com/logo-finxia.png",
    "datePublished": "2026-04-15T09:00:00+01:00",
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
    }
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": language === 'fr' ? "Accueil" : "Home", "item": language === 'fr' ? "https://finxiacapital.com" : "https://finxiacapital.com/en/" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": language === 'fr' ? "https://finxiacapital.com/blog" : "https://finxiacapital.com/en/blog" },
      { "@type": "ListItem", "position": 3, "name": t.title, "item": language === 'fr' ? "https://finxiacapital.com/blog/eed-article-12-declaration-datacenter-guide-2026" : "https://finxiacapital.com/en/blog/eed-article-12-datacenter-declaration-guide-2026" }
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
    <div data-testid="article-6-page" className="pt-20">
      <SEO
        title={t.title}
        description={t.description}
        canonical={language === 'fr' ? "https://finxiacapital.com/blog/eed-article-12-declaration-datacenter-guide-2026/" : "https://finxiacapital.com/en/blog/eed-article-12-datacenter-declaration-guide-2026/"}
        keywords={language === 'fr' ? "EED Article 12, datacenter déclaration obligatoire, 15 mai 2026, PUE WUE REF, conformité EED, sanctions datacenter, IPMVP Option C, Règlement délégué 2024/1364" : "EED Article 12, mandatory datacenter declaration, May 15 2026, PUE WUE REF, EED compliance, datacenter sanctions"}
        structuredData={articleSchema}
        breadcrumbSchema={breadcrumbSchema}
        faqSchema={faqSchema}
        language={language}
        ogLocale={language === 'fr' ? "fr_FR" : "en_US"}
        hreflangFr="https://finxiacapital.com/blog/eed-article-12-declaration-datacenter-guide-2026/"
        hreflangEn="https://finxiacapital.com/en/blog/eed-article-12-datacenter-declaration-guide-2026/"
        hreflangDefault="https://finxiacapital.com/blog/eed-article-12-declaration-datacenter-guide-2026/"
      />
      <article className="bg-white">
        <header className="py-16 md:py-24 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href={language === 'fr' ? "/blog" : "/en/blog"} className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-[#C45A3B] transition-colors mb-8"><ArrowLeft className="w-4 h-4" />{t.backToBlog}</Link>
            <div className="flex items-center gap-4 mb-6 text-sm">
              <span className="inline-flex items-center gap-2 text-[#C45A3B] font-medium uppercase tracking-wider"><Tag className="w-4 h-4" />{t.tag}</span>
              <span className="text-slate-400">•</span>
              <time className="text-slate-600 flex items-center gap-2" dateTime="2026-04-15"><Calendar className="w-4 h-4" />{t.date}</time>
              <span className="text-slate-400">•</span>
              <span className="text-slate-600">{t.readTime}</span>
            </div>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">{t.title}</h1>
            <p className="text-slate-500 text-sm">{language === 'fr' ? 'Par ' : 'By '}<Link href="/auteurs/lila-benhammou/" className="text-[#C45A3B] hover:underline">{t.author}</Link> — FINXIA Capital</p>
          </div>
        </header>
        <div className="py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-slate prose-lg max-w-none">
              {language === 'fr' ? (
                <>
                  <p className="text-xl text-slate-700 font-medium leading-relaxed mb-8">
                    Le 15 mai 2026 marque la première échéance de déclaration obligatoire imposée par l&apos;Article 12 de la Directive européenne sur l&apos;efficacité énergétique (EED 2023/1791, refonte). Tout datacenter dépassant <strong>500 kW de puissance IT installée</strong> sur le territoire de l&apos;Union européenne doit transmettre, via la base européenne centralisée, cinq indicateurs de performance énergétique — sous peine de sanctions nationales allant de l&apos;amende administrative à la suspension d&apos;exploitation selon les transpositions locales.
                  </p>
                  <p>
                    Cette échéance n&apos;est pas un exercice bureaucratique. Elle constitue le point de bascule réglementaire du marché européen des datacenters : elle crée la base de données publique qui alimentera l&apos;application de l&apos;Article 21 (seuils PUE contraignants au 2 janvier 2027), conditionne l&apos;éligibilité à l&apos;EU Taxonomy 8.1 pour les financements Green Bond, et trie mécaniquement le parc européen entre actifs conformes (premium de valorisation) et actifs non conformes (décote immédiate).
                  </p>
                  <p>
                    Ce guide couvre le périmètre exact de l&apos;obligation, les cinq indicateurs techniques à déclarer, la méthodologie de préparation en 90 jours, l&apos;articulation avec l&apos;Article 21, les sanctions encourues et répond aux 8 questions les plus fréquentes des opérateurs.
                  </p>

                  <h2>1. Qu&apos;est-ce que l&apos;Article 12 de la Directive EED ?</h2>
                  <p>
                    L&apos;Article 12 de la Directive (UE) 2023/1791 — refonte de la Directive Efficacité Énergétique adoptée le 13 septembre 2023 et entrée en vigueur le 10 octobre 2023 — impose pour la première fois dans l&apos;histoire du droit communautaire une obligation de déclaration annuelle harmonisée à l&apos;ensemble des opérateurs de datacenters dépassant un certain seuil de puissance.
                  </p>
                  <p>
                    L&apos;objectif affiché par la Commission européenne est triple : (1) créer la première base de données publique européenne sur la consommation énergétique réelle des datacenters, segment qui représente désormais près de 3 % de la consommation électrique de l&apos;UE et croît de 10 % par an sous l&apos;effet de la demande IA ; (2) doter les régulateurs nationaux et européens d&apos;un outil de pilotage fin pour ajuster les politiques de décarbonation ; (3) créer un mécanisme de transparence qui force les opérateurs à mesurer, documenter et améliorer leurs performances — le simple fait de devoir déclarer induit une dynamique d&apos;optimisation.
                  </p>
                  <p>
                    L&apos;Article 12 a été complété par le Règlement délégué (UE) 2024/1364 du 14 mars 2024, qui précise le format de déclaration, la méthodologie de calcul des indicateurs, et le calendrier de remontée des données. La première échéance du 15 mai 2026 portera sur les données consolidées de l&apos;exercice 2025 complet (1er janvier — 31 décembre 2025). Les déclarations suivantes devront être remises avant le 15 mai de chaque année, couvrant l&apos;exercice N-1.
                  </p>
                  <p>
                    La Commission a précisé que la base de données publique ne sera accessible qu&apos;à partir de 2027 dans sa version agrégée — les données individuelles des opérateurs resteront confidentielles pour les deux premières années. Mais cette confidentialité est temporaire : à partir de 2028, les indicateurs par site seront publiés, créant de facto un classement public des datacenters européens par efficacité énergétique.
                  </p>

                  <h2>2. Qui est concerné — seuils et périmètre exact</h2>
                  <p>
                    L&apos;obligation de déclaration s&apos;applique à tout <strong>datacenter</strong> au sens de la Directive — défini comme une « structure, ou un groupe de structures, dédiée au stockage, traitement et transport centralisés des données, accompagnée des équipements et infrastructures d&apos;alimentation et de contrôle environnemental » — dont la <strong>puissance IT installée excède 500 kW</strong>.
                  </p>
                  <p>
                    Le seuil de 500 kW fait référence à la puissance électrique nominale des équipements IT (serveurs, stockage, équipements réseau) — et non à la puissance totale du site incluant le refroidissement et les auxiliaires. Cette distinction est cruciale : un datacenter affichant une puissance site de 1,2 MW avec un PUE de 1,8 aura une puissance IT de ~667 kW et sera donc concerné ; un site de 1 MW avec un PUE de 2,2 n&apos;aura que ~454 kW IT et sera hors scope (mais rentrera dans le périmètre dès qu&apos;il dépassera 500 kW IT).
                  </p>
                  <p>Sont également concernés :</p>
                  <ul>
                    <li>Les <strong>colocations multi-tenants</strong> dépassant 500 kW au niveau du site, même si aucun tenant individuel ne dépasse ce seuil</li>
                    <li>Les <strong>datacenters d&apos;entreprise</strong> (enterprise DC), y compris captifs et non destinés à la vente de services externes</li>
                    <li>Les <strong>datacenters hyperscalers</strong> (AWS, Azure, Google Cloud, OVH, Scaleway) sans exception</li>
                    <li>Les <strong>salles informatiques industrielles</strong> dès lors qu&apos;elles sont dédiées au traitement centralisé et dépassent le seuil</li>
                  </ul>
                  <p>Sont exclus du périmètre :</p>
                  <ul>
                    <li>Les salles serveurs de bureaux (distribution décentralisée, usage local) en dessous de 500 kW</li>
                    <li>Les infrastructures IT embarquées (télécoms mobiles, edge computing distribué) sans centralisation</li>
                    <li>Les infrastructures classifiées relevant de la sécurité nationale (décision discrétionnaire des États membres)</li>
                  </ul>
                  <p>
                    Pour la France, l&apos;organe collecteur sera l&apos;<strong>ADEME</strong> (Agence de la Transition Écologique) via une plateforme dédiée qui sera mise en ligne d&apos;ici fin mars 2026. Le portail national reprendra les indicateurs harmonisés de l&apos;UE et transmettra automatiquement les données consolidées à la base européenne gérée par le JRC (Joint Research Centre de la Commission).
                  </p>

                  <h2>3. Les 5 indicateurs à déclarer avant le 15 mai 2026</h2>
                  <p>Le Règlement délégué 2024/1364 définit précisément les cinq indicateurs obligatoires. Chaque indicateur doit être calculé sur l&apos;exercice 2025 complet, avec les valeurs annualisées.</p>
                  <p><strong>Indicateur 1 — Consommation énergétique totale (kWh/an).</strong> Énergie électrique totale consommée par le site sur l&apos;exercice de déclaration, mesurée au point de livraison réseau. Inclut IT, refroidissement, alimentation (pertes UPS + TGBT), auxiliaires, éclairage, bureaux associés. Méthode de mesure : relevé direct des compteurs du fournisseur d&apos;énergie ou compteurs dédiés certifiés MID.</p>
                  <p><strong>Indicateur 2 — PUE (Power Usage Effectiveness).</strong> Rapport entre la consommation énergétique totale du datacenter et la consommation des équipements IT seuls (PUE = E_totale / E_IT). Valeur moyenne pondérée sur 12 mois. La méthode de mesure doit respecter la norme <strong>ISO/IEC 30134-2:2016</strong>.</p>
                  <p><strong>Indicateur 3 — WUE (Water Usage Effectiveness).</strong> Rapport entre la consommation d&apos;eau annuelle du site (m³) et la consommation énergétique IT (kWh), exprimé en L/kWh. Inclut eau de refroidissement, eau sanitaire, eau de process. Les sites sans consommation d&apos;eau déclarent WUE = 0.</p>
                  <p><strong>Indicateur 4 — REF (Renewable Energy Factor).</strong> Part de l&apos;énergie consommée d&apos;origine renouvelable certifiée, exprimée en pourcentage. La certification repose sur les <strong>Garanties d&apos;Origine (GO)</strong> émises conformément à la Directive 2018/2001. Les PPA renouvelables sont valides s&apos;ils satisfont aux critères de supplementarity définis par la Commission.</p>
                  <p><strong>Indicateur 5 — Récupération de chaleur (ERF — Energy Reuse Factor).</strong> Quantité de chaleur fatale récupérée et valorisée hors du datacenter (réseaux de chaleur urbains, industriels, serres, piscines), divisée par la consommation énergétique IT. Les sites n&apos;ayant aucune récupération déclarent ERF = 0.</p>
                  <p>
                    À ces cinq indicateurs s&apos;ajoutent des <strong>métadonnées descriptives</strong> : localisation GPS, puissance IT installée, nombre de baies, superficie, année de mise en service, fournisseur d&apos;énergie, certifications environnementales détenues (ISO 50001, LEED, BREEAM).
                  </p>

                  <h2>4. Comment préparer sa déclaration — guide étape par étape</h2>
                  <p>La préparation d&apos;une déclaration EED conforme requiert entre 60 et 120 jours selon la maturité de l&apos;opérateur.</p>
                  <p><strong>Phase 1 (J0 à J30) — Cartographie et instrumentation.</strong> Inventaire des compteurs existants. Identification des points de mesure manquants pour atteindre une couverture PUE conforme ISO 30134-2 : compteur au point de livraison, sous-comptage IT (PDU, TGBT IT), mesure des auxiliaires (groupes froid, UPS, auxiliaires HVAC). Déploiement des compteurs manquants (comptage classe 1 requis pour PUE certifiable).</p>
                  <p><strong>Phase 2 (J30 à J60) — Collecte et fiabilisation des données historiques.</strong> Récupération des données 2025 complètes via DCIM, BMS ou SCADA. Validation croisée avec les factures du fournisseur d&apos;énergie. Correction des anomalies (coupures, périodes de maintenance, valeurs aberrantes). Production d&apos;un jeu de données mensuel consolidé.</p>
                  <p><strong>Phase 3 (J60 à J90) — Calcul des indicateurs et rédaction du dossier.</strong> Application des formules du Règlement délégué 2024/1364. Calcul du PUE annualisé (moyenne pondérée 12 mois). Calcul du WUE avec sources documentées. Vérification du REF via les certificats GO du fournisseur. Estimation ERF si applicable. Rédaction du rapport de déclaration au format attendu par l&apos;ADEME.</p>
                  <p><strong>Phase 4 (J90 à J120) — Vérification indépendante (recommandée).</strong> Bien que non obligatoire pour la première déclaration 2026, la vérification par un tiers accrédité (Bureau Veritas, TÜV Rheinland, SGS) sous protocole <strong>IPMVP Option C</strong> apporte une crédibilité commerciale forte. Les actifs vérifiés IPMVP bénéficient d&apos;une prime de valorisation mesurée entre 8 et 15 % sur le marché secondaire des datacenters en 2025 (source : CBRE Data Center Investor Intentions Survey).</p>
                  <p>Pour les opérateurs dont les datacenters sont déjà instrumentés via un DCIM professionnel (Schneider EcoStruxure IT, Vertiv Trellis, Nlyte), la préparation peut être bouclée en 30 à 45 jours.</p>

                  <h2>5. Article 21 : ce qui arrive après la déclaration — PUE ≤ 1,30 au 2 janvier 2027</h2>
                  <p>L&apos;Article 12 n&apos;est que le premier étage d&apos;une architecture réglementaire à trois niveaux. L&apos;Article 21 de la même Directive, qui entrera en application au <strong>2 janvier 2027</strong>, introduit des seuils contraignants de performance énergétique — basés précisément sur les données collectées via l&apos;Article 12.</p>
                  <p>Les seuils retenus par la Commission sont :</p>
                  <ul>
                    <li><strong>PUE annualisé ≤ 1,30</strong> pour tout datacenter existant mis en service avant 2027</li>
                    <li><strong>PUE annualisé ≤ 1,20</strong> pour tout datacenter neuf (permis de construire déposé après le 1er janvier 2027)</li>
                    <li><strong>WUE maximal</strong> : seuil national laissé à la discrétion des États membres, typiquement entre 0,4 et 1,8 L/kWh</li>
                  </ul>
                  <p>Les datacenters non conformes devront présenter un plan de mise à niveau avec un calendrier de retour à la conformité sur 36 mois maximum. En cas d&apos;incapacité à se conformer, les États membres pourront appliquer des pénalités croissantes, imposer des restrictions d&apos;exploitation, voire refuser les autorisations d&apos;extension ou de renouvellement.</p>
                  <p>Cette séquence Art. 12 → Art. 21 crée mécaniquement une bifurcation du marché en trois catégories : (1) les datacenters récents (post-2020) atteignant déjà des PUE entre 1,15 et 1,35 — conformes sans travaux lourds ; (2) les datacenters intermédiaires (2005-2020) affichant des PUE entre 1,40 et 1,70 — nécessitant des investissements de 500 à 2 500 €/kW IT pour passer sous la barre de 1,30 ; (3) les datacenters anciens (pré-2005) avec PUE supérieurs à 1,70 — pour lesquels la rénovation est souvent non rentable, ouvrant la voie à des opportunités de repositionnement brownfield.</p>
                  <p>C&apos;est précisément cette troisième catégorie que <strong>TITAN DC AI</strong> cible en priorité : acquisition à décote des actifs brownfield non conformes, transformation technique complète, remise en conformité certifiée sous IPMVP, et repositionnement comme infrastructure premium certifiée EU Taxonomy 8.1.</p>

                  <h2>6. Sanctions et risques en cas de non-conformité</h2>
                  <p>L&apos;Article 12 lui-même ne fixe pas de sanctions harmonisées — chaque État membre transpose et définit son régime. En France, le projet de transposition (avril 2026, loi de simplification économique intégrant les dispositions EED) prévoit :</p>
                  <ul>
                    <li><strong>Amende administrative</strong> de 15 000 à 100 000 € pour défaut de déclaration initiale</li>
                    <li><strong>Astreinte journalière</strong> de 1 500 €/jour au-delà de 30 jours de retard</li>
                    <li><strong>Publication des manquements</strong> sur le portail ADEME (effet réputationnel direct)</li>
                    <li>En cas de fausse déclaration avérée : sanctions pénales (article 441-1 du Code pénal) pouvant atteindre 3 ans de prison et 45 000 € d&apos;amende</li>
                  </ul>
                  <p>Au-delà des sanctions directes, le risque majeur est <strong>réputationnel et commercial</strong> : les grands donneurs d&apos;ordre (hyperscalers pour leur colocation, administrations publiques via commande publique, grandes entreprises avec engagements ESG) intègrent désormais la conformité EED comme critère d&apos;attribution. Un datacenter non déclaré au 15 mai 2026 est de facto disqualifié des appels d&apos;offres cloud publics européens à partir de 2026.</p>
                  <p>Enfin, sur le plan du financement, les banques et fonds Green Bond appliquent des conditions suspensives à leurs instruments de dette verte : absence de déclaration EED = sortie du périmètre éligible à l&apos;EU Taxonomy 8.1 = inéligibilité aux Green Bonds ICMA, avec refinancement potentiellement renchéri de 80 à 150 bps.</p>

                  <h2>7. FAQ — 8 questions fréquentes des opérateurs de datacenters</h2>
                  {faqDataFr.map((faq, idx) => (
                    <div key={idx} className="mb-6">
                      <h3 className="font-semibold text-slate-900 mb-2">{idx + 1}. {faq.q}</h3>
                      <p className="text-slate-700">{faq.a}</p>
                    </div>
                  ))}

                  <div className="mt-12 p-6 bg-slate-50 border-l-4 border-[#C45A3B] rounded">
                    <p className="text-slate-700 leading-relaxed">
                      La déclaration EED Article 12 du 15 mai 2026 est bien davantage qu&apos;une simple formalité réglementaire : c&apos;est le tri structurel qui dessinera le marché européen des datacenters pour la prochaine décennie. <strong>FINXIA Capital, via sa stratégie TITAN DC AI</strong>, a construit son modèle d&apos;investissement précisément autour de cette séquence réglementaire.
                    </p>
                  </div>

                  <div className="mt-8 pt-8 border-t border-slate-200">
                    <h3 className="font-serif text-xl mb-4">Pour aller plus loin</h3>
                    <ul className="space-y-2 text-sm">
                      <li>→ <Link href="/guides/eed-directive-datacenter-2026/" className="text-[#C45A3B] hover:underline">Guide complet EED datacenters 2026 (Articles 12 et 21)</Link></li>
                      <li>→ <Link href="/blog/pue-optimisation-datacenters-europeens-guide-2026/" className="text-[#C45A3B] hover:underline">Guide d&apos;optimisation PUE des datacenters européens</Link></li>
                      <li>→ <Link href="/strategies/" className="text-[#C45A3B] hover:underline">Stratégie TITAN DC AI</Link></li>
                      <li>→ <Link href="/auteurs/lila-benhammou/" className="text-[#C45A3B] hover:underline">Profil auteure : Lila Benhammou</Link></li>
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <p className="text-xl text-slate-700 font-medium leading-relaxed mb-8">
                    May 15, 2026 is the first mandatory declaration deadline imposed by Article 12 of the Energy Efficiency Directive. Every datacenter exceeding 500 kW of installed IT capacity in the EU must declare five energy performance indicators.
                  </p>
                  <p>FINXIA Capital supports datacenter operators in their EED compliance via its TITAN DC AI strategy. A fully expanded English version of this guide is in preparation.</p>
                </>
              )}
              <p className="text-slate-600 text-sm mt-8 p-4 bg-slate-50 border-l-4 border-[#C45A3B]">Contact : contact@finxiacapital.com</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
