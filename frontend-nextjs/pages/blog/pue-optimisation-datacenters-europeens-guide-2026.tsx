import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import Link from 'next/link';
import SEO from '../../components/SEO';
import { useLanguage } from '../../context/LanguageContext';

const faqDataFr = [
  { q: "Un PUE de 1,30 est-il atteignable sur un datacenter de 2010 ?", a: "Oui, dans l'écrasante majorité des cas. La combinaison confinement + free cooling étendu + optimisation UPS permet de ramener typiquement un site de 1,65-1,75 à 1,25-1,35. Les sites construits en zone méditerranéenne ou sans possibilité de free cooling direct peuvent nécessiter des solutions adiabatiques complémentaires. Les montants d'investissement correspondants sont des ordres de grandeur qui doivent être confirmés par un chiffrage site par site." },
  { q: "Quel est le meilleur PUE mesuré actuellement en production ?", a: "Google publie un PUE moyen de flotte de 1,09 sur l'année 2025 (douze mois glissants, tous frais généraux inclus), et Microsoft autour de 1,17 selon Data Center Dynamics (2026). Ces résultats hyperscalers reflètent des constructions récentes dédiées ; les meilleures colocations européennes affichent typiquement des valeurs comprises entre 1,12 et 1,20." },
  { q: "Le PUE s'améliore-t-il à mesure que le site monte en charge ?", a: "Oui, très significativement. Les UPS et groupes froid ont des rendements optimaux à charge élevée (typiquement 60-80 % de la nominale). Un site qui tourne à 30 % de sa capacité peut afficher un PUE 0,15 à 0,25 point supérieur à ce qu'il atteindrait à 75 % de charge. C'est pour cette raison que les nouveaux designs privilégient la modularité." },
  { q: "Le liquid cooling permet-il vraiment des PUE sous 1,10 ?", a: "Sous conditions spécifiques, oui. Le direct-to-chip permet d'évacuer directement une grande partie de la chaleur à haute température, ce qui supprime le besoin de groupes froid mécaniques pour cette fraction. Couplé à un échange chaleur eau-eau sur tour sèche, un PUE de 1,05 à 1,12 est atteignable pour des charges IA à forte densité (>30 kW/rack). Pour des charges conventionnelles sous 15 kW/rack, le retour sur investissement est généralement négatif face aux solutions air + free cooling." },
  { q: "Les PUE affichés marketing sont-ils fiables ?", a: "Prudence. Les PUE marketing sont souvent des valeurs design (calculées en condition optimale théorique), des valeurs nominales (à charge maximale), ou des valeurs partielles (meilleur trimestre). La seule référence robuste est le PUE annualisé mesuré sur 12 mois consécutifs, idéalement vérifié selon un protocole reconnu comme IPMVP Option C." },
  { q: "Mon entreprise est locataire d'une colocation : sommes-nous concernés par les obligations PUE ?", a: "Non, les obligations déclaratives de l'article 12 de la directive EED et les seuils contraignants de la loi allemande EnEfG pèsent sur l'opérateur de l'infrastructure (propriétaire ou exploitant de la colocation), pas sur les locataires. Mais les locataires ont tout intérêt à exiger contractuellement un PUE certifié pour sécuriser leur propre bilan ESG (scope 2 et 3) et leur conformité client." },
  { q: "Peut-on réduire le PUE uniquement par l'IA sans CAPEX lourd ?", a: "Partiellement. Les solutions IA appliquées au pilotage HVAC et à l'optimisation des consignes peuvent générer 8 à 15 % d'économie sur le refroidissement d'un site déjà bien instrumenté et confiné, ce qui se traduit typiquement par −0,05 à −0,10 sur le PUE. Au-delà, le levier physique (free cooling, UPS, confinement) devient dominant." },
  { q: "Comment le PUE interagit-il avec le WUE ?", a: "Les deux sont en tension : les solutions qui réduisent le PUE (notamment free cooling adiabatique, tours aéroréfrigérantes ouvertes) augmentent souvent le WUE car elles consomment de l'eau. À l'inverse, le free cooling sec préserve le WUE mais limite l'efficience énergétique en climat chaud. L'arbitrage PUE/WUE est devenu un sujet central en zone méditerranéenne." },
];

export default function ArticlePueGuidePage() {
  const { language } = useLanguage();
  const content = {
    fr: {
      title: "PUE : définition, formule de calcul et seuils 2026",
      description: "PUE datacenter : définition ISO/IEC 30134-2, formule de calcul, moyennes 2025 (Uptime 1,54), seuils EED et EnEfG, 6 leviers d'optimisation détaillés.",
      tag: "Performance Énergétique",
      date: "Avril 2026 · mis à jour le 14 novembre 2026",
      readTime: "12 min de lecture",
      backToBlog: "Retour au blog",
      author: "Lila Benhammou, Co-Fondatrice & CIO"
    },
    en: {
      title: "PUE Explained: Formula, Calculation and Targets",
      description: "What is PUE? ISO/IEC 30134-2 definition, formula, worked example, 2025 averages (Uptime 1.54), EED and EnEfG thresholds, 6 optimization levers.",
      tag: "Energy Performance",
      date: "April 2026 · updated November 14, 2026",
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
    "dateModified": "2026-11-14T09:00:00+01:00",
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
      { "@type": "ListItem", "position": 3, "name": t.title, "item": language === 'fr' ? "https://finxiacapital.com/blog/pue-optimisation-datacenters-europeens-guide-2026" : "https://finxiacapital.com/en/blog/pue-optimization-european-datacenters-guide-2026" }
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
    <div data-testid="article-pue-page" className="pt-20">
      <SEO
        title={t.title}
        description={t.description}
        canonical={language === 'fr' ? "https://finxiacapital.com/blog/pue-optimisation-datacenters-europeens-guide-2026/" : "https://finxiacapital.com/en/blog/pue-optimization-european-datacenters-guide-2026/"}
        keywords={language === 'fr' ? "PUE datacenter, calcul PUE, définition PUE, ISO/IEC 30134-2, PUE moyen, EnEfG, EED article 12, free cooling, liquid cooling, optimisation PUE" : "PUE datacenter, how to calculate PUE, PUE formula, ISO/IEC 30134-2, average PUE 2025, EnEfG, EED article 12, free cooling, liquid cooling, PUE optimization"}
        structuredData={articleSchema}
        breadcrumbSchema={breadcrumbSchema}
        faqSchema={faqSchema}
        language={language}
        ogLocale={language === 'fr' ? "fr_FR" : "en_US"}
        hreflangFr="https://finxiacapital.com/blog/pue-optimisation-datacenters-europeens-guide-2026/"
        hreflangEn="https://finxiacapital.com/en/blog/pue-optimization-european-datacenters-guide-2026/"
        hreflangDefault="https://finxiacapital.com/blog/pue-optimisation-datacenters-europeens-guide-2026/"
      />
      <article className="bg-white">
        <header className="py-16 md:py-24 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href={language === 'fr' ? "/blog" : "/en/blog"} className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-[#C45A3B] transition-colors mb-8"><ArrowLeft className="w-4 h-4" />{t.backToBlog}</Link>
            <div className="flex items-center gap-4 mb-6 text-sm">
              <span className="inline-flex items-center gap-2 text-[#C45A3B] font-medium uppercase tracking-wider"><Tag className="w-4 h-4" />{t.tag}</span>
              <span className="text-slate-400">•</span>
              <time className="text-slate-600 flex items-center gap-2" dateTime="2026-11-14"><Calendar className="w-4 h-4" />{t.date}</time>
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
                    Le PUE (Power Usage Effectiveness) mesure l&apos;efficacité énergétique d&apos;un datacenter : il rapporte l&apos;énergie totale consommée par le site à la seule énergie absorbée par les équipements informatiques. Plus le ratio est proche de 1, plus le site est efficient. En 2026, cet indicateur n&apos;est plus un simple repère d&apos;exploitation : il est au cœur de la déclaration réglementaire européenne (article 12 de la directive EED), de seuils contraignants en Allemagne (loi EnEfG) et de la valorisation des actifs.
                  </p>
                  <p>
                    Ce guide couvre la définition normalisée du PUE (ISO/IEC 30134-2), sa formule de calcul avec un exemple chiffré, les valeurs de référence mesurées en 2025, le cadre réglementaire européen et allemand, les six leviers techniques de réduction et la certification des résultats.
                  </p>

                  <h2>1. Définition et formule de calcul du PUE</h2>
                  <p>Le Power Usage Effectiveness a été introduit en 2006 par le consortium industriel The Green Grid, puis normalisé au niveau international par la norme <strong>ISO/IEC 30134-2 (2016)</strong>. C&apos;est cette définition normalisée que reprennent la réglementation européenne et la plupart des cadres de reporting.</p>
                  <p><strong>Formule :</strong></p>
                  <pre className="bg-slate-100 p-4 rounded text-sm">PUE = Énergie totale consommée par le datacenter / Énergie consommée par les équipements IT</pre>
                  <p>Un PUE de 1,0 serait le cas théorique parfait où 100 % de l&apos;énergie entrant dans le site alimenterait les équipements IT. Ce cas est physiquement inatteignable : les serveurs dissipent leur puissance sous forme de chaleur qu&apos;il faut évacuer, les onduleurs génèrent des pertes de conversion, l&apos;éclairage et la sécurité consomment irréductiblement.</p>
                  <p><strong>Exemple chiffré (purement illustratif) :</strong> un datacenter qui prélève 15 GWh par an au compteur général, dont 10 GWh effectivement consommés par les serveurs, le stockage et le réseau, affiche un PUE de 15 / 10 = <strong>1,5</strong>. Concrètement, chaque watt utile à l&apos;informatique coûte 0,5 watt de refroidissement, de conversion électrique et d&apos;auxiliaires. Sur une année, cet écart représente 5 GWh d&apos;énergie dite « non IT ».</p>
                  <p><strong>Les trois périmètres normalisés :</strong></p>
                  <ul>
                    <li><strong>Périmètre 0</strong> : mesure au point de livraison, incluant tous les bâtiments connexes</li>
                    <li><strong>Périmètre 1</strong> : salles IT et systèmes techniques dédiés, hors bureaux — c&apos;est la référence usuelle pour la conformité</li>
                    <li><strong>Périmètre 2</strong> : périmètre « ingénierie » utilisé pour les benchmarks techniques, qui exclut certains auxiliaires marginaux</li>
                  </ul>
                  <p>Toute déclaration doit spécifier le périmètre utilisé : un même site peut afficher un PUE de 1,35 en périmètre 1 et sensiblement plus en périmètre 0 si des bureaux intensifs sont inclus. La précision de mesure requise dans les cadres réglementaires et contractuels est de l&apos;ordre de ±2 %, ce qui suppose des compteurs de classe adaptée ; les relevés DCIM non audités ne suffisent pas si les compteurs sous-jacents ne respectent pas cette classe.</p>
                  <p><strong>Les quatre catégories de consommation à mesurer :</strong> la charge IT (dénominateur), le refroidissement, les pertes électriques (onduleurs et transformateurs) et les auxiliaires de bâtiment (éclairage, supervision, sécurité).</p>

                  <h2>2. Les valeurs de référence mesurées en 2025</h2>
                  <p>La référence la plus suivie est l&apos;enquête mondiale de l&apos;<strong>Uptime Institute</strong> : l&apos;édition 2025 place le PUE moyen mondial autour de <strong>1,54</strong> (contre 1,56 en 2024 et 1,58 en 2023). L&apos;amélioration stagne depuis environ six ans : les gains faciles (confinement des allées, gestion des flux d&apos;air) ont été réalisés, et les progrès supplémentaires exigent des travaux lourds ou des changements de technologie de refroidissement. Les sites mis en service depuis moins de cinq ans affichent une moyenne proche de 1,48, et nombre de constructions récentes atteignent 1,3 ou mieux.</p>
                  <p><strong>Repères publiés par les grands opérateurs :</strong></p>
                  <ul>
                    <li><strong>Google</strong> : PUE moyen de flotte de 1,09 sur l&apos;année 2025 (douze mois glissants, tous frais généraux inclus)</li>
                    <li><strong>Microsoft</strong> : autour de 1,17 selon Data Center Dynamics (2026)</li>
                    <li><strong>Allemagne</strong> : PUE moyen du parc estimé autour de 1,43 par le Borderstep Institut (2025)</li>
                  </ul>
                  <p>Le contraste est saisissant : selon l&apos;Agence internationale de l&apos;énergie (2025), le refroidissement représente environ 7 % de la consommation d&apos;un site hyperscale efficient, mais plus de 30 % dans un datacenter d&apos;entreprise ancien. C&apos;est précisément cet écart — entre un parc existant autour de 1,5 et des seuils réglementaires orientés vers 1,2-1,3 — qui crée la fenêtre d&apos;investissement brownfield : une grande partie du parc européen existant devra engager des travaux de rénovation énergétique pour rester conforme et commercialisable.</p>

                  <h2>3. Le cadre réglementaire : EED européenne et EnEfG allemande</h2>
                  <p>Deux corpus distincts encadrent le PUE en Europe — il ne faut pas les confondre.</p>
                  <p><strong>Au niveau européen : une obligation de déclaration, pas (encore) de seuil contraignant.</strong> L&apos;article 12 de la directive (UE) 2023/1791 (EED), complété par le règlement délégué (UE) 2024/1364 du 14 mars 2024, impose à tous les datacenters de l&apos;Union d&apos;une puissance IT installée d&apos;au moins <strong>500 kW</strong> une déclaration annuelle de leurs données énergétiques : PUE, WUE (eau), ERF (réutilisation de la chaleur) et REF (part de renouvelable). Les données sont transmises chaque année avant le <strong>15 mai</strong> à une base de données européenne, après une première vague de déclarations en septembre 2024. La Commission prépare par ailleurs un système commun de notation de la durabilité des datacenters : un projet d&apos;acte a été publié le 26 mars 2026. Pour le détail de la procédure, voir notre <Link href="/blog/eed-article-12-declaration-datacenter-guide-2026/" className="text-[#C45A3B] hover:underline">guide complet de la déclaration EED article 12</Link>.</p>
                  <p><strong>En Allemagne : des seuils PUE contraignants, les premiers en Europe.</strong> Le § 11 de la loi sur l&apos;efficacité énergétique (EnEfG, en vigueur depuis novembre 2023, applicable aux sites dès 300 kW de puissance de raccordement) impose :</p>
                  <ul>
                    <li><strong>Sites neufs</strong> mis en service à compter du 1er juillet 2026 : PUE annuel moyen ≤ <strong>1,2</strong>, à atteindre au plus tard deux ans après la mise en service</li>
                    <li><strong>Sites existants</strong> (avant juillet 2026) : PUE ≤ <strong>1,5</strong> à compter de juillet 2027, puis ≤ <strong>1,3</strong> à compter de juillet 2030</li>
                    <li>Part minimale de chaleur réutilisée (ERF) pour les sites neufs : 10 % (mise en service dès juillet 2026), 15 % (juillet 2027), 20 % (juillet 2028)</li>
                    <li>Couverture de la consommation électrique par du renouvelable non subventionné : 50 % depuis janvier 2024, 100 % visés à partir de janvier 2027</li>
                    <li>Système de management de l&apos;énergie obligatoire dès 300 kW (juillet 2025), certifié ISO 50001 ou validé EMAS dès 1 MW (janvier 2026)</li>
                  </ul>
                  <p><strong>Point de vigilance :</strong> un projet d&apos;amendement (adopté par le cabinet fédéral le 24 juin 2026, première lecture au Bundestag le 24 septembre 2026) prévoirait d&apos;assouplir les seuils applicables aux sites existants (1,6 en 2027 et 1,4 en 2030) et de relever le seuil d&apos;application à 500 kW de puissance IT installée. À la date de mise à jour de cet article, la procédure parlementaire n&apos;est pas achevée et le texte de 2023 reste la référence applicable. Les investisseurs doivent raisonner sur les deux scénarios.</p>
                  <p><strong>Cibles sectorielles volontaires.</strong> Le Climate Neutral Data Centre Pact, initiative d&apos;autorégulation des opérateurs, fixe une cible de PUE de 1,3 en climat frais et 1,4 en climat chaud pour les datacenters neufs depuis janvier 2025, avec un alignement du parc existant à horizon janvier 2030. Ces cibles servent de référence implicite dans nombre de processus de notation et de financement, sans avoir valeur légale.</p>

                  <h2>4. Les 6 leviers d&apos;optimisation du PUE</h2>
                  <p>La réduction du PUE ne passe pas par une action unique mais par un portefeuille combiné de leviers techniques, chacun contribuant typiquement entre 0,05 et 0,20 point. Les gains et coûts indiqués ci-dessous sont des ordres de grandeur issus de l&apos;expérience sectorielle — à valider par un chiffrage propre à chaque site.</p>
                  <p><strong>Levier 1 — Free cooling (étendu ou total).</strong> Utilisation de l&apos;air extérieur pour refroidir le datacenter sans recours aux groupes froid mécaniques quand les conditions le permettent. Selon la zone climatique, le free cooling total peut couvrir de l&apos;ordre de 60 % (Paris, Madrid) à 95 % (Stockholm, Helsinki) des besoins annuels. Impact typique : −0,15 à −0,30 sur le PUE.</p>
                  <p><strong>Levier 2 — Confinement des allées chaudes ou froides.</strong> Séparation physique des flux d&apos;air chaud et froid pour éviter les mélanges. Impact : −0,05 à −0,15 sur le PUE, avec un retour sur investissement souvent inférieur à 18 mois.</p>
                  <p><strong>Levier 3 — Optimisation de l&apos;alimentation électrique.</strong> Remplacement des onduleurs historiques (rendement typique 92-94 % en charge nominale) par des modèles modernes transformerless ou en mode ECO (rendement 97-99 %, y compris à charge partielle). Impact : −0,03 à −0,08 sur le PUE.</p>
                  <p><strong>Levier 4 — Optimisation de la charge IT.</strong> Audit des serveurs « zombies », densification pour atteindre des taux d&apos;occupation physique supérieurs à 70 %, mise en veille dynamique des charges de travail non critiques. Le PUE étant un ratio, toute réduction du dénominateur IT sans action sur les auxiliaires peut le dégrader : ce levier doit être piloté conjointement avec les autres.</p>
                  <p><strong>Levier 5 — Supervision DCIM avancée.</strong> Déploiement d&apos;une plateforme de supervision (DCIM) couplée à des capteurs sur les points critiques. Impact : −0,05 à −0,10 via la détection et la correction de micro-inefficacités.</p>
                  <p><strong>Levier 6 — Intelligence artificielle appliquée au pilotage HVAC.</strong> Algorithmes d&apos;optimisation prédictive pilotant en temps réel les consignes de température, le régime des groupes froid et l&apos;arbitrage free cooling / production mécanique. Impact typique : −0,05 à −0,15 sur le PUE d&apos;un site déjà bien instrumenté.</p>

                  <h2>5. Certifier les résultats : le protocole IPMVP Option C</h2>
                  <p>Un PUE déclaré sans vérification indépendante n&apos;a pas de valeur commerciale sur le marché du financement vert ni auprès des grands donneurs d&apos;ordre. Le protocole IPMVP (International Performance Measurement and Verification Protocol), développé par l&apos;Efficiency Valuation Organization (EVO), est le référentiel reconnu pour la mesure et la vérification des économies d&apos;énergie.</p>
                  <p><strong>Pour un datacenter, l&apos;Option C (« whole facility ») est le standard :</strong></p>
                  <ol>
                    <li><strong>Période de référence</strong> (12 à 24 mois minimum) : mesure continue de la consommation totale et des variables externes</li>
                    <li><strong>Modèle de régression</strong> : relation statistique validée entre consommation et variables explicatives</li>
                    <li><strong>Intervention</strong> : travaux d&apos;optimisation (leviers 1 à 6)</li>
                    <li><strong>Période post-travaux</strong> (12 mois minimum) : mesure dans les mêmes conditions</li>
                    <li><strong>Calcul de l&apos;économie ajustée</strong> : consommation réelle post-travaux comparée à la consommation de référence ajustée</li>
                    <li><strong>Rapport de vérification</strong> : produit par un professionnel certifié CMVP</li>
                  </ol>
                  <p>Cette certification documente l&apos;économie réellement obtenue — c&apos;est la pièce qui transforme un « PUE affiché » en actif financier : elle sécurise les émissions de dette verte, les rapports de durabilité des investisseurs et la négociation avec les preneurs sensibles à leur propre bilan carbone.</p>

                  <h2>6. Taxonomie européenne, green bonds : ce que le PUE change pour le financement</h2>
                  <p>L&apos;activité « traitement de données et hébergement » est couverte par l&apos;activité <strong>8.1</strong> de la Taxonomie européenne (acte délégué climat). Contrairement à une idée répandue, les critères techniques de l&apos;activité 8.1 ne fixent pas un seuil chiffré de PUE : ils exigent la mise en œuvre des bonnes pratiques du <strong>Code de Conduite européen pour l&apos;efficacité énergétique des datacenters</strong> (vérifiée par un auditeur tiers indépendant au moins tous les trois ans), la mesure et la publication d&apos;indicateurs de performance, et le respect du principe « ne pas nuire » aux autres objectifs environnementaux (eau, économie circulaire, etc.).</p>
                  <p>En pratique, les cadres d&apos;émission de green bonds publient leurs propres seuils : on trouve par exemple des référentiels exigeant un PUE inférieur à 1,5 combiné à l&apos;adhésion au Code de Conduite (cadre 2023 d&apos;un grand émetteur bancaire français). Le PUE certifié conditionne ainsi directement l&apos;accès à certaines catégories de financement et le coût de la dette verte, tandis que les valeurs déclarées au titre de l&apos;EED deviennent publiques — et donc opposables commercialement.</p>
                  <p>C&apos;est la conjonction de ces trois forces — seuils contraignants (Allemagne), transparence réglementaire (UE), critères de financement (marché) — qui fait du PUE l&apos;indicateur le plus déterminant de la valeur d&apos;un datacenter en 2026.</p>

                  <h2>7. Cas de référence (illustratif)</h2>
                  <p><em>Cas pédagogique reconstitué à partir d&apos;ordres de grandeur publiés dans la littérature sectorielle ; il ne décrit pas un actif détenu ou géré par FINXIA Capital.</em></p>
                  <p><strong>Contexte :</strong> colocation européenne mid-market mise en service en 2008, 8 MW de puissance IT installée, PUE annualisé de référence 1,72 (mesure 2023-2024), consommation annuelle totale de l&apos;ordre de 120 GWh.</p>
                  <p><strong>Programme de rénovation 2024-2025 :</strong> confinement intégral des allées froides, rénovation des groupes froid et extension du free cooling, remplacement des onduleurs par des modèles lithium-ion transformerless, plateforme DCIM avec plusieurs centaines de capteurs, pilotage IA du HVAC — pour un investissement total de l&apos;ordre de 8 M€, soit environ 1 000 €/kW IT.</p>
                  <p><strong>Résultats mesurés sur 18 mois après stabilisation :</strong> PUE annualisé ramené à <strong>1,28</strong> (−0,44 point), économie énergétique annuelle d&apos;environ 30 GWh (−25 %), économie d&apos;exploitation correspondante de plusieurs millions d&apos;euros par an, certification IPMVP Option C délivrée par un certificateur international. Sur cette base illustrée, le retour brut sur investissement ressort inférieur à deux ans — ce qui illustre pourquoi la rénovation PUE d&apos;un actif legacy peut être autofinançante par l&apos;OPEX.</p>

                  <h2>8. FAQ — 8 questions opérateurs</h2>
                  {faqDataFr.map((faq, idx) => (
                    <div key={idx} className="mb-6">
                      <h3 className="font-semibold text-slate-900 mb-2">{idx + 1}. {faq.q}</h3>
                      <p className="text-slate-700">{faq.a}</p>
                    </div>
                  ))}

                  <div className="mt-12 p-6 bg-slate-50 border-l-4 border-[#C45A3B] rounded">
                    <p className="text-slate-700 leading-relaxed">
                      L&apos;optimisation du PUE n&apos;est plus une question d&apos;opportunité opérationnelle — c&apos;est devenu une condition d&apos;accès au marché. <strong>FINXIA Capital, via TITAN DC AI</strong>, cible précisément les actifs où cette mise en conformité est techniquement faisable mais économiquement délaissée par les opérateurs historiques. Ce contenu est fourni à titre informatif uniquement : il ne constitue ni un conseil en investissement ni une offre de titres.
                    </p>
                  </div>

                  <div className="mt-8 pt-8 border-t border-slate-200">
                    <h3 className="font-serif text-xl mb-4">Pour aller plus loin</h3>
                    <ul className="space-y-2 text-sm">
                      <li>→ <Link href="/guides/eed-directive-datacenter-2026/" className="text-[#C45A3B] hover:underline">Guide complet EED datacenters 2026 (Articles 12 et 21)</Link></li>
                      <li>→ <Link href="/blog/eed-article-12-declaration-datacenter-guide-2026/" className="text-[#C45A3B] hover:underline">EED Article 12 : guide complet de la déclaration obligatoire</Link></li>
                      <li>→ <Link href="/strategies/" className="text-[#C45A3B] hover:underline">Stratégie TITAN DC AI</Link></li>
                      <li>→ <Link href="/auteurs/lila-benhammou/" className="text-[#C45A3B] hover:underline">Profil auteure : Lila Benhammou</Link></li>
                    </ul>
                  </div>

                  <div className="mt-8 pt-8 border-t border-slate-200">
                    <h3 className="font-serif text-xl mb-4">Sources et références</h3>
                    <ul className="space-y-2 text-sm">
                      <li>→ <a href="https://www.iso.org/standard/63451.html" target="_blank" rel="noopener noreferrer nofollow" className="text-[#C45A3B] hover:underline">ISO/IEC 30134-2:2016 — Power usage effectiveness</a></li>
                      <li>→ <a href="https://eur-lex.europa.eu/eli/dir/2023/1791/oj" target="_blank" rel="noopener noreferrer nofollow" className="text-[#C45A3B] hover:underline">Directive (UE) 2023/1791 (EED), article 12</a></li>
                      <li>→ <a href="https://eur-lex.europa.eu/eli/reg_del/2024/1364/oj" target="_blank" rel="noopener noreferrer nofollow" className="text-[#C45A3B] hover:underline">Règlement délégué (UE) 2024/1364 du 14 mars 2024</a></li>
                      <li>→ <a href="https://www.gesetze-im-internet.de/enefg/" target="_blank" rel="noopener noreferrer nofollow" className="text-[#C45A3B] hover:underline">Energieeffizienzgesetz (EnEfG), § 11 — seuils PUE datacenters</a></li>
                      <li>→ <a href="https://uptimeinstitute.com/resources/research-and-reports" target="_blank" rel="noopener noreferrer nofollow" className="text-[#C45A3B] hover:underline">Uptime Institute — Global Data Center Survey 2025 (PUE moyen 1,54)</a></li>
                      <li>→ <a href="https://www.climateneutraldatacentre.net/" target="_blank" rel="noopener noreferrer nofollow" className="text-[#C45A3B] hover:underline">Climate Neutral Data Centre Pact — cibles PUE 1,3 / 1,4</a></li>
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <p className="text-xl text-slate-700 font-medium leading-relaxed mb-8">
                    PUE (Power Usage Effectiveness) measures a datacenter&apos;s energy efficiency: it divides the total energy drawn by the facility by the energy actually absorbed by IT equipment. The closer the ratio is to 1, the more efficient the site. In 2026, this metric is no longer a mere operational benchmark: it sits at the heart of European regulatory reporting (Article 12 of the EED directive), of binding thresholds in Germany (EnEfG Act) and of asset valuation.
                  </p>
                  <p>
                    This guide covers the standardized PUE definition (ISO/IEC 30134-2), the calculation formula with a worked example, the reference values measured in 2025, the European and German regulatory frameworks, six technical reduction levers and how to certify the results.
                  </p>

                  <h2>1. PUE definition and calculation formula</h2>
                  <p>Power Usage Effectiveness was introduced in 2006 by the industry consortium The Green Grid, then standardized internationally as <strong>ISO/IEC 30134-2 (2016)</strong>. That standardized definition is the one adopted by European regulation and most reporting frameworks.</p>
                  <p><strong>Formula:</strong></p>
                  <pre className="bg-slate-100 p-4 rounded text-sm">PUE = Total facility energy / IT equipment energy</pre>
                  <p>A PUE of 1.0 would be the theoretical perfect case where 100% of the energy entering the site powers IT equipment. That case is physically unattainable: servers dissipate their power as heat that must be removed, UPS units generate conversion losses, and lighting and security consume irreducibly.</p>
                  <p><strong>Worked example (purely illustrative):</strong> a datacenter drawing 15 GWh per year at the main meter, of which 10 GWh is actually consumed by servers, storage and networking, reports a PUE of 15 / 10 = <strong>1.5</strong>. In other words, every watt of useful IT load costs 0.5 watt of cooling, power conversion and auxiliary systems. Over a year, that gap amounts to 5 GWh of so-called &quot;non-IT&quot; energy.</p>
                  <p><strong>The three standardized boundaries:</strong></p>
                  <ul>
                    <li><strong>Boundary 0</strong>: measured at the utility delivery point, including all related buildings</li>
                    <li><strong>Boundary 1</strong>: IT rooms and dedicated technical systems, excluding offices — the usual compliance reference</li>
                    <li><strong>Boundary 2</strong>: an &quot;engineering&quot; boundary used for technical benchmarking, excluding certain marginal auxiliaries</li>
                  </ul>
                  <p>Any disclosure must state the boundary used: the same site can report 1.35 at Boundary 1 and materially more at Boundary 0 if energy-intensive offices are included. The measurement accuracy required under regulatory and contractual frameworks is around ±2%, which implies suitably classed meters; unaudited DCIM readouts are not sufficient if the underlying meters do not meet that class.</p>
                  <p><strong>The four consumption categories to measure:</strong> IT load (the denominator), cooling, electrical losses (UPS and transformers) and facility auxiliaries (lighting, monitoring, security).</p>

                  <h2>2. Reference values measured in 2025</h2>
                  <p>The most widely followed benchmark is the <strong>Uptime Institute</strong> global survey: the 2025 edition puts the global average PUE at around <strong>1.54</strong> (versus 1.56 in 2024 and 1.58 in 2023). Improvement has stalled for roughly six years: the easy gains (aisle containment, airflow management) have been captured, and further progress requires heavy retrofit works or a change of cooling technology. Sites commissioned within the past five years average close to 1.48, and many recent builds achieve 1.3 or better.</p>
                  <p><strong>Benchmarks published by major operators:</strong></p>
                  <ul>
                    <li><strong>Google</strong>: fleet-wide PUE of 1.09 for calendar year 2025 (trailing twelve months, all overheads included)</li>
                    <li><strong>Microsoft</strong>: around 1.17 according to Data Center Dynamics (2026)</li>
                    <li><strong>Germany</strong>: the installed base averages around 1.43 according to the Borderstep Institute (2025)</li>
                  </ul>
                  <p>The contrast is striking: according to the International Energy Agency (2025), cooling accounts for about 7% of consumption at an efficient hyperscale site, but over 30% at a legacy enterprise facility. Precisely that gap — between an existing fleet around 1.5 and regulatory thresholds oriented toward 1.2-1.3 — creates the brownfield investment window: a large share of Europe&apos;s existing datacenter stock will need energy retrofit works to remain compliant and marketable.</p>

                  <h2>3. The regulatory framework: EU EED and the German EnEfG</h2>
                  <p>Two separate bodies of rules govern PUE in Europe — they should not be conflated.</p>
                  <p><strong>At EU level: a reporting obligation, not (yet) a binding cap.</strong> Article 12 of Directive (EU) 2023/1791 (EED), supplemented by Delegated Regulation (EU) 2024/1364 of 14 March 2024, requires every datacenter in the Union with installed IT power of at least <strong>500 kW</strong> to report its energy data annually: PUE, WUE (water), ERF (heat reuse) and REF (renewable share). Data is submitted every year by <strong>15 May</strong> to a European database, following a first wave of declarations in September 2024. The Commission is also preparing a common sustainability rating scheme for datacenters: a draft act was published on 26 March 2026. For procedural details, see our <Link href="/en/blog/eed-article-12-datacenter-declaration-guide-2026/" className="text-[#C45A3B] hover:underline">full guide to the EED Article 12 declaration</Link>.</p>
                  <p><strong>In Germany: binding PUE thresholds, the first in Europe.</strong> Section 11 of the Energy Efficiency Act (EnEfG, in force since November 2023, applicable to sites from 300 kW of nominal connection capacity) requires:</p>
                  <ul>
                    <li><strong>New facilities</strong> commissioned on or after 1 July 2026: annual average PUE ≤ <strong>1.2</strong>, to be reached no later than two years after commissioning</li>
                    <li><strong>Existing facilities</strong> (commissioned before July 2026): PUE ≤ <strong>1.5</strong> from July 2027, then ≤ <strong>1.3</strong> from July 2030</li>
                    <li>Minimum reused-heat share (ERF) for new facilities: 10% (commissioning from July 2026), 15% (July 2027), 20% (July 2028)</li>
                    <li>Electricity consumption covered by unsubsidised renewables: 50% since January 2024, 100% targeted from January 2027</li>
                    <li>Mandatory energy management system from 300 kW (July 2025), ISO 50001-certified or EMAS-validated from 1 MW (January 2026)</li>
                  </ul>
                  <p><strong>Watch point:</strong> an amendment bill (adopted by the federal cabinet on 24 June 2026, first Bundestag reading on 24 September 2026) would relax the thresholds for existing facilities (1.6 in 2027 and 1.4 in 2030) and raise the scope threshold to 500 kW of installed IT power. As of this article&apos;s update, the parliamentary procedure is not complete and the 2023 text remains the applicable reference. Investors should underwrite both scenarios.</p>
                  <p><strong>Voluntary industry targets.</strong> The Climate Neutral Data Centre Pact, the operators&apos; self-regulatory initiative, sets a PUE target of 1.3 in cool climates and 1.4 in warm climates for new datacenters since January 2025, with the existing fleet aligning by January 2030. These targets serve as an implicit reference in many rating and financing processes, without carrying legal force.</p>

                  <h2>4. The 6 PUE optimization levers</h2>
                  <p>Reducing PUE is not a single action but a combined portfolio of technical levers, each typically contributing between 0.05 and 0.20 of a point. The gains and costs below are orders of magnitude from industry experience — to be validated by a site-specific engineering study.</p>
                  <p><strong>Lever 1 — Free cooling (extended or total).</strong> Using outside air to cool the datacenter without mechanical chillers whenever conditions allow. Depending on the climate zone, total free cooling can cover roughly 60% (Paris, Madrid) to 95% (Stockholm, Helsinki) of annual needs. Typical impact: −0.15 to −0.30 on PUE.</p>
                  <p><strong>Lever 2 — Hot- or cold-aisle containment.</strong> Physically separating hot and cold airflows to prevent mixing. Impact: −0.05 to −0.15 on PUE, with payback often under 18 months.</p>
                  <p><strong>Lever 3 — Power chain optimization.</strong> Replacing legacy UPS units (typical efficiency 92-94% at nominal load) with modern transformerless or ECO-mode models (97-99% efficiency, including at partial load). Impact: −0.03 to −0.08 on PUE.</p>
                  <p><strong>Lever 4 — IT load optimization.</strong> Auditing &quot;zombie&quot; servers, densifying to physical occupancy above 70%, dynamically hibernating non-critical workloads. Because PUE is a ratio, shrinking the IT denominator without acting on auxiliaries can worsen it: this lever must be managed jointly with the others.</p>
                  <p><strong>Lever 5 — Advanced DCIM monitoring.</strong> Deploying a DCIM platform with sensors at critical points. Impact: −0.05 to −0.10 by detecting and correcting micro-inefficiencies.</p>
                  <p><strong>Lever 6 — AI applied to HVAC control.</strong> Predictive optimization algorithms steering temperature setpoints, chiller regimes and the free-cooling/mechanical trade-off in real time. Typical impact: −0.05 to −0.15 on the PUE of an already well-instrumented site.</p>

                  <h2>5. Certifying the results: the IPMVP Option C protocol</h2>
                  <p>A self-declared PUE without independent verification has no commercial value in green financing markets or with sophisticated customers. The IPMVP protocol (International Performance Measurement and Verification Protocol), developed by the Efficiency Valuation Organization (EVO), is the recognized framework for measuring and verifying energy savings.</p>
                  <p><strong>For a datacenter, Option C (&quot;whole facility&quot;) is the standard:</strong></p>
                  <ol>
                    <li><strong>Baseline period</strong> (12 to 24 months minimum): continuous measurement of total consumption and external variables</li>
                    <li><strong>Regression model</strong>: validated statistical relationship between consumption and explanatory variables</li>
                    <li><strong>Intervention</strong>: optimization works (levers 1 to 6)</li>
                    <li><strong>Post-installation period</strong> (12 months minimum): measurement under the same conditions</li>
                    <li><strong>Adjusted savings calculation</strong>: actual post-works consumption compared to the adjusted baseline</li>
                    <li><strong>Verification report</strong>: produced by a certified CMVP professional</li>
                  </ol>
                  <p>This certification documents the savings actually achieved — the piece that turns an &quot;advertised PUE&quot; into a financial asset: it secures green debt issuance, investor sustainability reporting and negotiations with tenants sensitive to their own carbon footprint.</p>

                  <h2>6. EU Taxonomy, green bonds: what PUE changes for financing</h2>
                  <p>Data processing and hosting is covered by activity <strong>8.1</strong> of the EU Taxonomy (Climate Delegated Act). Contrary to a widespread belief, the 8.1 technical screening criteria do not set a numeric PUE threshold: they require implementing the best practices of the <strong>European Code of Conduct for Data Centre Energy Efficiency</strong> (verified by an independent third-party auditor at least every three years), measuring and publishing performance indicators, and respecting the &quot;do no significant harm&quot; principle across the other environmental objectives (water, circular economy, etc.).</p>
                  <p>In practice, green bond frameworks publish their own thresholds: some frameworks require, for instance, a PUE below 1.5 combined with adherence to the Code of Conduct (2023 framework of a major French banking issuer). Certified PUE therefore directly conditions access to certain financing categories and the cost of green debt, while EED-reported values become public — and thus commercially binding.</p>
                  <p>It is the conjunction of these three forces — binding thresholds (Germany), regulatory transparency (EU), financing criteria (markets) — that makes PUE the single most decisive indicator of a datacenter&apos;s value in 2026.</p>

                  <h2>7. Reference case (illustrative)</h2>
                  <p><em>Teaching case reconstructed from orders of magnitude published in industry literature; it does not describe an asset owned or managed by FINXIA Capital.</em></p>
                  <p><strong>Context:</strong> a European mid-market colocation site commissioned in 2008, 8 MW of installed IT power, baseline annualized PUE of 1.72 (measured 2023-2024), total annual consumption of roughly 120 GWh.</p>
                  <p><strong>Retrofit program 2024-2025:</strong> full cold-aisle containment, chiller renovation and extended free cooling, replacement of legacy UPS with transformerless lithium-ion models, a DCIM platform with several hundred sensors, AI-driven HVAC control — for a total investment of roughly €8m, about €1,000 per kW of IT capacity.</p>
                  <p><strong>Results measured over 18 months after stabilization:</strong> annualized PUE reduced to <strong>1.28</strong> (−0.44 point), annual energy savings of around 30 GWh (−25%), corresponding operating savings of several million euros per year, IPMVP Option C certification delivered by an international certifier. On this illustrative basis, gross payback comes out under two years — showing why a PUE retrofit of a legacy asset can be self-funding through OPEX.</p>

                  <h2>8. FAQ — 8 operator questions</h2>
                  {faqDataFr.map((faq, idx) => (
                    <div key={idx} className="mb-6">
                      <h3 className="font-semibold text-slate-900 mb-2">{idx + 1}. {faq.q}</h3>
                      <p className="text-slate-700">{faq.a}</p>
                    </div>
                  ))}

                  <div className="mt-12 p-6 bg-slate-50 border-l-4 border-[#C45A3B] rounded">
                    <p className="text-slate-700 leading-relaxed">
                      PUE optimization is no longer a matter of operational opportunity — it has become a condition of market access. <strong>FINXIA Capital, through TITAN DC AI</strong>, targets precisely the assets where this compliance upgrade is technically feasible but economically neglected by incumbent operators. This content is provided for information only: it constitutes neither investment advice nor an offer of securities.
                    </p>
                  </div>

                  <div className="mt-8 pt-8 border-t border-slate-200">
                    <h3 className="font-serif text-xl mb-4">Further reading</h3>
                    <ul className="space-y-2 text-sm">
                      <li>→ <Link href="/guides/eed-directive-datacenter-2026/" className="text-[#C45A3B] hover:underline">Complete EED datacenters guide 2026 (Articles 12 and 21)</Link></li>
                      <li>→ <Link href="/en/blog/eed-article-12-datacenter-declaration-guide-2026/" className="text-[#C45A3B] hover:underline">EED Article 12: full guide to the mandatory declaration</Link></li>
                      <li>→ <Link href="/strategies/" className="text-[#C45A3B] hover:underline">TITAN DC AI strategy</Link></li>
                      <li>→ <Link href="/auteurs/lila-benhammou/" className="text-[#C45A3B] hover:underline">Author profile: Lila Benhammou</Link></li>
                    </ul>
                  </div>

                  <div className="mt-8 pt-8 border-t border-slate-200">
                    <h3 className="font-serif text-xl mb-4">Sources and references</h3>
                    <ul className="space-y-2 text-sm">
                      <li>→ <a href="https://www.iso.org/standard/63451.html" target="_blank" rel="noopener noreferrer nofollow" className="text-[#C45A3B] hover:underline">ISO/IEC 30134-2:2016 — Power usage effectiveness</a></li>
                      <li>→ <a href="https://eur-lex.europa.eu/eli/dir/2023/1791/oj" target="_blank" rel="noopener noreferrer nofollow" className="text-[#C45A3B] hover:underline">Directive (EU) 2023/1791 (EED), Article 12</a></li>
                      <li>→ <a href="https://eur-lex.europa.eu/eli/reg_del/2024/1364/oj" target="_blank" rel="noopener noreferrer nofollow" className="text-[#C45A3B] hover:underline">Delegated Regulation (EU) 2024/1364 of 14 March 2024</a></li>
                      <li>→ <a href="https://www.gesetze-im-internet.de/enefg/" target="_blank" rel="noopener noreferrer nofollow" className="text-[#C45A3B] hover:underline">Energieeffizienzgesetz (EnEfG), § 11 — datacenter PUE thresholds</a></li>
                      <li>→ <a href="https://uptimeinstitute.com/resources/research-and-reports" target="_blank" rel="noopener noreferrer nofollow" className="text-[#C45A3B] hover:underline">Uptime Institute — Global Data Center Survey 2025 (average PUE 1.54)</a></li>
                      <li>→ <a href="https://www.climateneutraldatacentre.net/" target="_blank" rel="noopener noreferrer nofollow" className="text-[#C45A3B] hover:underline">Climate Neutral Data Centre Pact — PUE targets 1.3 / 1.4</a></li>
                    </ul>
                  </div>
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
