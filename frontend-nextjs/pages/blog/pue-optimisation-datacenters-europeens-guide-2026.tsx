import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import Link from 'next/link';
import SEO from '../../components/SEO';
import { useLanguage } from '../../context/LanguageContext';

const faqDataFr = [
  { q: "Un PUE de 1,30 est-il atteignable sur un datacenter de 2010 ?", a: "Oui, dans l'écrasante majorité des cas. La combinaison confinement + free cooling étendu + optimisation UPS permet de ramener typiquement un site de 1,65-1,75 à 1,25-1,35 pour un CAPEX de 600 à 1 200 €/kW IT. Les sites construits en zone méditerranéenne ou sans possibilité de free cooling direct peuvent nécessiter des solutions adiabatiques complémentaires." },
  { q: "Quel est le meilleur PUE mesuré actuellement en production ?", a: "Les sites hyperscalers Google au Danemark et en Finlande affichent des PUE annualisés mesurés autour de 1,06 à 1,08, en combinant free cooling quasi-permanent et direct-to-chip liquid cooling. En Europe continentale hors Nordics, les meilleurs sites colocation tournent entre 1,12 et 1,18." },
  { q: "Le PUE s'améliore-t-il à mesure que le site monte en charge ?", a: "Oui, très significativement. Les UPS et groupes froid ont des rendements optimaux à charge élevée (typiquement 60-80% de la nominale). Un site qui tourne à 30% de sa capacité peut afficher un PUE 0,15 à 0,25 point supérieur à ce qu'il atteindrait à 75% de charge. C'est pour cette raison que les nouveaux designs privilégient la modularité." },
  { q: "Le liquid cooling permet-il vraiment des PUE sous 1,10 ?", a: "Sous conditions spécifiques, oui. Le direct-to-chip permet d'évacuer directement 70 à 85% de la chaleur à haute température, ce qui supprime le besoin de groupes froid mécaniques pour cette fraction. Couplé à un échange chaleur eau-eau sur tour sèche, un PUE de 1,05 à 1,12 est atteignable pour des charges IA à forte densité (>30 kW/rack). Pour des charges conventionnelles sous 15 kW/rack, le ROI est généralement négatif face aux solutions air + free cooling." },
  { q: "Les PUE affichés marketing sont-ils fiables ?", a: "Prudence. Les PUE marketing sont souvent des valeurs design (calculées en condition optimale théorique), des valeurs nominale (à charge maximale), ou des valeurs partielles (meilleur trimestre). Le seul PUE recevable pour conformité EED et valorisation Green Bond est le PUE annualisé mesuré sur 12 mois consécutifs, certifié IPMVP Option C." },
  { q: "Mon site est locataire d'un parc, suis-je concerné par l'obligation PUE ?", a: "Non, l'obligation Article 21 pèse sur l'opérateur d'infrastructure (le propriétaire ou l'exploitant de la colocation), pas sur les tenants. Mais les tenants ont tout intérêt à exiger contractuellement un PUE certifié pour sécuriser leur propre bilan ESG (scope 2 et 3) et leur conformité client." },
  { q: "Peut-on réduire le PUE uniquement par l'IA sans CAPEX lourd ?", a: "Partiellement. Les solutions IA appliquées au pilotage HVAC et à l'optimisation des consignes peuvent générer 8 à 15% d'économie refroidissement sur un site déjà bien instrumenté et confiné, ce qui se traduit par −0,05 à −0,10 sur le PUE. Au-delà, le levier physique (free cooling, UPS, confinement) devient dominant." },
  { q: "Comment le PUE interagit-il avec le WUE ?", a: "Les deux sont en tension : les solutions qui réduisent le PUE (notamment free cooling adiabatique, tours aéroréfrigérantes ouvertes) augmentent souvent le WUE car elles consomment de l'eau. À l'inverse, le free cooling sec préserve le WUE mais limite l'efficience énergétique en climat chaud. L'arbitrage PUE/WUE est devenu un sujet central en zone méditerranéenne." },
];

export default function ArticlePueGuidePage() {
  const { language } = useLanguage();
  const content = {
    fr: {
      title: "PUE : Guide complet d'optimisation des datacenters européens en 2026",
      description: "Guide complet PUE datacenters 2026 : définition ISO/IEC 30134-2, 6 leviers d'optimisation, protocole IPMVP Option C, EU Taxonomy 8.1, cas de référence chiffré.",
      tag: "Performance Énergétique",
      date: "Avril 2026",
      readTime: "12 min de lecture",
      backToBlog: "Retour au blog",
      author: "Lila Benhammou, Co-Fondatrice & CIO"
    },
    en: {
      title: "PUE: Complete Optimization Guide for European Datacenters in 2026",
      description: "Complete guide to PUE optimization for European datacenters: ISO/IEC 30134-2 definition, 6 optimization levers, IPMVP Option C protocol, EU Taxonomy 8.1.",
      tag: "Energy Performance",
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
        keywords={language === 'fr' ? "PUE datacenter, optimisation PUE, ISO/IEC 30134-2, IPMVP Option C, free cooling, liquid cooling, EU Taxonomy 8.1, Green Bond ICMA, EED Article 21" : "PUE datacenter, PUE optimization, ISO/IEC 30134-2, IPMVP Option C, free cooling, liquid cooling, EU Taxonomy 8.1"}
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
                    Le PUE (Power Usage Effectiveness) est redevenu en 2026 l&apos;indicateur central du marché européen des datacenters — non par mode technique, mais par contrainte réglementaire directe. L&apos;Article 21 de la Directive EED impose au 2 janvier 2027 un PUE annualisé inférieur ou égal à <strong>1,30</strong> pour les datacenters existants et <strong>1,20</strong> pour les sites neufs. Dans un parc européen dont le PUE moyen se situe entre 1,55 et 1,65 selon les dernières études de l&apos;Uptime Institute et du JRC, cette mise en conformité représente un programme d&apos;investissement estimé entre 40 et 70 milliards d&apos;euros sur cinq ans.
                  </p>
                  <p>
                    Ce guide couvre la définition normative précise du PUE selon ISO/IEC 30134-2, les valeurs moyennes réelles du parc européen en 2026, les six leviers techniques de réduction du PUE, la méthode de certification IPMVP Option C qui sécurise les valorisations Green Bond, et l&apos;articulation avec l&apos;EU Taxonomy 8.1.
                  </p>

                  <h2>1. Définition exacte du PUE — formule et composantes</h2>
                  <p>Le Power Usage Effectiveness a été introduit en 2006 par The Green Grid, consortium industriel réunissant les principaux opérateurs américains, puis normalisé au niveau international par l&apos;ISO/IEC 30134-2 en 2016. La définition retenue par la Commission européenne dans le cadre de la Directive EED reprend strictement cette norme.</p>
                  <p><strong>Formule de base :</strong></p>
                  <pre className="bg-slate-100 p-4 rounded text-sm">PUE = Énergie totale consommée par le datacenter / Énergie consommée par les équipements IT</pre>
                  <p>Un PUE de 1,0 représente le cas théorique parfait où 100 % de l&apos;énergie entrant dans le site serait consacrée aux équipements IT. Ce cas est physiquement inatteignable : les serveurs dissipent leur puissance sous forme de chaleur qu&apos;il faut évacuer, les UPS génèrent des pertes de conversion, l&apos;éclairage et la sécurité consomment irréductiblement.</p>
                  <p><strong>Les trois périmètres normalisés :</strong></p>
                  <ul>
                    <li><strong>Périmètre 0</strong> : PUE calculé au plus large (mesure au point de livraison, incluant tous les bâtiments connexes)</li>
                    <li><strong>Périmètre 1</strong> : PUE exclusivement datacenter (salles IT + systèmes techniques dédiés, hors bureaux)</li>
                    <li><strong>Périmètre 2</strong> : PUE « engineering » utilisé à des fins de benchmark technique, exclut certains auxiliaires marginaux</li>
                  </ul>
                  <p>Pour la conformité EED, c&apos;est le <strong>périmètre 1 avec mesure au point de livraison</strong> qui fait foi. Toute déclaration doit spécifier le périmètre utilisé, car un même site peut afficher un PUE de 1,35 en périmètre 1 et 1,48 en périmètre 0 si des bureaux intensifs sont inclus.</p>
                  <p><strong>Les quatre catégories de consommation à mesurer :</strong> IT Load (dénominateur), Cooling Load, Power Losses (UPS + transformateurs), Facility Auxiliaries (éclairage, BMS, sécurité).</p>
                  <p>La précision de mesure requise pour une conformité EED est au minimum de ±2 % (compteurs classe 1 selon IEC 61557-12). Les mesures en sortie de DCIM non auditées ne sont pas recevables si les compteurs sous-jacents ne respectent pas cette classe de précision.</p>

                  <h2>2. PUE moyen du parc européen en 2026 — données par segment</h2>
                  <p>Les dernières données consolidées du Joint Research Centre (étude 2025, données 2024) et de l&apos;Uptime Institute (Global Data Center Survey 2025) convergent sur une moyenne européenne autour de <strong>1,57 à 1,63</strong> — avec une dispersion très marquée selon l&apos;âge et la typologie des sites.</p>
                  <p><strong>Par génération :</strong></p>
                  <ul>
                    <li>Datacenters pré-2005 : PUE moyen 1,85 à 2,10</li>
                    <li>Datacenters 2005-2015 : PUE moyen 1,55 à 1,80</li>
                    <li>Datacenters 2015-2020 : PUE moyen 1,35 à 1,55</li>
                    <li>Datacenters post-2020 : PUE moyen 1,15 à 1,35</li>
                  </ul>
                  <p><strong>Par typologie d&apos;opérateur :</strong></p>
                  <ul>
                    <li>Hyperscalers (AWS, Azure, Google) : PUE publiés entre 1,08 et 1,15 sur les sites récents</li>
                    <li>Colocations premium européennes (Equinix, Digital Realty, Interxion) : PUE moyen 1,35 à 1,50</li>
                    <li>Colocations mid-market / historiques : PUE moyen 1,50 à 1,75</li>
                    <li>Datacenters enterprise (on-premises grandes entreprises) : PUE moyen 1,70 à 2,05</li>
                  </ul>
                  <p><strong>Par zone climatique :</strong></p>
                  <ul>
                    <li>Nordics (Suède, Finlande, Norvège) : PUE moyen 1,20 à 1,35</li>
                    <li>Europe centrale (Allemagne, Benelux, France nord) : PUE moyen 1,35 à 1,55</li>
                    <li>Europe méditerranéenne (Espagne, Italie, France sud) : PUE moyen 1,50 à 1,75</li>
                  </ul>
                  <p>Ces chiffres mettent en lumière l&apos;ampleur du gap à combler : pour atteindre le seuil EED de 1,30 sur l&apos;ensemble du parc, plus de <strong>60 % des datacenters européens existants</strong> doivent engager des travaux de rénovation énergétique significatifs. C&apos;est précisément cette dynamique qui crée la fenêtre d&apos;investissement brownfield actuelle.</p>

                  <h2>3. Les 6 leviers d&apos;optimisation du PUE</h2>
                  <p>La réduction du PUE ne passe pas par une action unique mais par un portefeuille combiné de leviers techniques, chacun contribuant typiquement entre 0,05 et 0,20 point.</p>
                  <p><strong>Levier 1 — Free cooling (étendu ou total).</strong> Utilisation de l&apos;air extérieur pour refroidir le datacenter sans recours aux groupes froid mécaniques quand les conditions le permettent. Selon la zone climatique, le free cooling total peut couvrir 60 % (Paris, Madrid) à 95 % (Stockholm, Helsinki) des besoins annuels. Impact typique : −0,15 à −0,30 sur le PUE. Investissement : de 200 à 800 €/kW IT selon le rétrofit.</p>
                  <p><strong>Levier 2 — Confinement des allées chaudes ou froides.</strong> Séparation physique des flux d&apos;air chaud et froid pour éviter les mélanges. Impact : −0,05 à −0,15 sur le PUE. Investissement : 100 à 300 €/kW IT. ROI souvent inférieur à 18 mois.</p>
                  <p><strong>Levier 3 — Optimisation de l&apos;alimentation (UPS haute efficacité, lithium-ion).</strong> Remplacement des UPS historiques (efficacité typique 92-94 % en charge nominale) par des UPS modernes en mode ECO ou transformerless (efficacité 97-99 % même à charge partielle). Impact : −0,03 à −0,08 sur le PUE. Investissement : 400 à 1 200 €/kW IT.</p>
                  <p><strong>Levier 4 — Optimisation IT Load (densification, décommissionnement, hibernation).</strong> Audit des charges IT zombies, densification pour atteindre des taux d&apos;occupation physique supérieurs à 70 %, mise en hibernation dynamique des workloads non critiques.</p>
                  <p><strong>Levier 5 — DCIM avancé et supervision en temps réel.</strong> Déploiement d&apos;une plateforme DCIM (Schneider EcoStruxure IT, Vertiv Trellis, Nlyte) couplée à des capteurs IoT sur les points critiques. Impact : −0,05 à −0,10 via détection et correction de micro-inefficiences. Investissement : 80 à 200 €/kW IT.</p>
                  <p><strong>Levier 6 — Intelligence artificielle appliquée au pilotage HVAC.</strong> Algorithmes d&apos;optimisation prédictive pilotant en temps réel les consignes de température, le régime des groupes froid, l&apos;orchestration des modes free cooling / mécanique. Les solutions commerciales actuelles atteignent 15 à 25 % de gain refroidissement. Impact : −0,05 à −0,15 sur le PUE.</p>
                  <p><strong>Combinaisons types observées en 2025 :</strong></p>
                  <ul>
                    <li>PUE initial 1,75 + Leviers 1+2+3 = PUE cible 1,30 à 1,40 (CAPEX 600 à 1 200 €/kW IT)</li>
                    <li>PUE initial 1,55 + Leviers 2+5+6 = PUE cible 1,25 à 1,35 (CAPEX 250 à 600 €/kW IT)</li>
                    <li>PUE initial 1,90 + Leviers 1+2+3+4+5+6 = PUE cible 1,20 à 1,30 (CAPEX 1 500 à 2 500 €/kW IT)</li>
                  </ul>

                  <h2>4. Le protocole IPMVP Option C — comment certifier ses résultats</h2>
                  <p>Le PUE déclaré sans certification indépendante n&apos;a pas de valeur commerciale sur le marché des Green Bonds ICMA ni auprès des grands donneurs d&apos;ordre. La certification IPMVP (International Performance Measurement and Verification Protocol) — standard développé par l&apos;EVO (Efficiency Valuation Organization) — est reconnue comme le protocole de référence par la Commission européenne, les banques de l&apos;Union (BEI, BERD), et les grands émetteurs Green Bond.</p>
                  <p><strong>Les quatre Options IPMVP :</strong></p>
                  <ul>
                    <li><strong>Option A</strong> : mesure partielle + estimation. Petits projets.</li>
                    <li><strong>Option B</strong> : mesure complète paramètre par paramètre. Lourde mais précise.</li>
                    <li><strong>Option C</strong> : mesure « whole facility » — standard pour les datacenters.</li>
                    <li><strong>Option D</strong> : simulation calibrée. Utilisée pour bâtiments neufs.</li>
                  </ul>
                  <p><strong>Processus IPMVP Option C pour un datacenter :</strong></p>
                  <ol>
                    <li><strong>Période Baseline</strong> (12-24 mois min) : mesure continue de la consommation totale et des variables externes</li>
                    <li><strong>Définition du modèle de régression</strong> : relation statistique validée à R² &gt; 0,85</li>
                    <li><strong>Intervention</strong> : travaux d&apos;optimisation (leviers 1 à 6)</li>
                    <li><strong>Période Post-Installation</strong> (12 mois min) : mesure dans les mêmes conditions</li>
                    <li><strong>Calcul de l&apos;économie ajustée</strong> : consommation réelle post vs consommation modélisée baseline ajustée</li>
                    <li><strong>Rapport de vérification</strong> : produit par un CMVP certifié EVO</li>
                  </ol>
                  <p><strong>Certificateurs reconnus en Europe :</strong> Bureau Veritas, TÜV Rheinland, SGS, DNV, Apave, Socotec. Coût pour un site 5-20 MW : 40 000 à 120 000 €, amortis sur 3 ans.</p>
                  <p><strong>Bénéfice commercial direct :</strong> prime de valorisation de 8 à 15 % sur le marché secondaire des datacenters (CBRE 2025), accès aux Green Bonds ICMA à des conditions supérieures de 30 à 80 bps, éligibilité prioritaire aux appels d&apos;offres cloud publics européens.</p>

                  <h2>5. EU Taxonomy 8.1 — ce que le PUE change pour le financement</h2>
                  <p>L&apos;EU Taxonomy Regulation (Règlement 2020/852) et son Acte Délégué Climat de juin 2023 ont introduit une catégorie dédiée aux activités datacenter sous le code <strong>8.1 — Data processing, hosting and related activities</strong>.</p>
                  <p><strong>Critères techniques principaux pour l&apos;alignement 8.1 :</strong></p>
                  <ul>
                    <li><strong>PUE annualisé</strong> : ≤ 1,30 pour sites existants, ≤ 1,20 pour sites neufs (post-2027)</li>
                    <li><strong>REF</strong> : ≥ 50 % d&apos;énergie renouvelable certifiée à horizon 2030</li>
                    <li><strong>WUE</strong> : respect des seuils nationaux + documentation des sources d&apos;eau</li>
                    <li><strong>Conformité EN 50600</strong> série (normes européennes infrastructure datacenter)</li>
                    <li><strong>Code de Conduite européen pour les datacenters</strong> (participation active)</li>
                    <li>Plans de récupération chaleur documentés pour les sites &gt; 1 MW IT mis en service après 2025</li>
                  </ul>
                  <p><strong>Impact financier direct.</strong> Un datacenter aligné EU Taxonomy 8.1 accède à trois catégories de financement non disponibles aux actifs non alignés : (1) Green Bonds ICMA — coût de la dette inférieur de 30 à 80 bps ; (2) Financements BEI et BERD — lignes dédiées à taux préférentiels ; (3) Véhicules Article 9 SFDR (fonds « dark green ») réglementairement tenus d&apos;investir dans des actifs alignés.</p>
                  <p>Cette hiérarchie financière est la raison pour laquelle le PUE est devenu en 2026 l&apos;indicateur unique le plus déterminant de la valeur d&apos;un datacenter.</p>

                  <h2>6. Cas de référence sectoriel anonymisé</h2>
                  <p><strong>Contexte (site anonymisé — opérateur colocation européen mid-market) :</strong></p>
                  <ul>
                    <li>Année mise en service : 2008</li>
                    <li>Puissance IT installée : 8 MW</li>
                    <li>PUE annualisé baseline (mesure 2023-2024) : <strong>1,72</strong></li>
                    <li>Consommation annuelle totale : 120 GWh</li>
                  </ul>
                  <p><strong>Programme de rénovation 2024-2025 :</strong></p>
                  <ul>
                    <li>Confinement allées froides intégral (Levier 2) — 1,2 M€</li>
                    <li>Rénovation groupes froid + extension free cooling (Levier 1) — 3,8 M€</li>
                    <li>UPS lithium-ion transformerless (Levier 3) — 2,1 M€</li>
                    <li>DCIM + 400 capteurs IoT (Levier 5) — 0,6 M€</li>
                    <li>Pilotage IA HVAC (Levier 6) — 0,3 M€ CAPEX + 90 k€/an OPEX</li>
                    <li><strong>CAPEX total : 8,0 M€</strong> (soit 1 000 €/kW IT)</li>
                  </ul>
                  <p><strong>Résultats mesurés post-stabilisation (Q3 2025 — Q1 2026, 18 mois) :</strong></p>
                  <ul>
                    <li>PUE annualisé : <strong>1,28</strong> (baisse de 0,44 point)</li>
                    <li>Économie énergétique annuelle : 30,6 GWh (−25,5 %)</li>
                    <li>Économie OPEX énergie : 4,6 M€/an</li>
                    <li>Retour sur investissement brut : 1,7 année</li>
                    <li>Certification IPMVP Option C délivrée par Bureau Veritas, décembre 2025</li>
                    <li>Valorisation secondaire : +13 % (estimation CBRE Q1 2026)</li>
                  </ul>

                  <h2>7. FAQ — 8 questions opérateurs</h2>
                  {faqDataFr.map((faq, idx) => (
                    <div key={idx} className="mb-6">
                      <h3 className="font-semibold text-slate-900 mb-2">{idx + 1}. {faq.q}</h3>
                      <p className="text-slate-700">{faq.a}</p>
                    </div>
                  ))}

                  <div className="mt-12 p-6 bg-slate-50 border-l-4 border-[#C45A3B] rounded">
                    <p className="text-slate-700 leading-relaxed">
                      L&apos;optimisation du PUE n&apos;est plus en 2026 une question d&apos;opportunité opérationnelle — c&apos;est devenu une condition d&apos;existence commerciale. <strong>FINXIA Capital, via TITAN DC AI</strong>, acquiert précisément les actifs où cette mise en conformité est techniquement faisable mais économiquement délaissée par les opérateurs historiques.
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
                </>
              ) : (
                <>
                  <p className="text-xl text-slate-700 font-medium leading-relaxed mb-8">
                    PUE (Power Usage Effectiveness) is the central metric of the European datacenter market in 2026. A fully expanded English version of this guide is in preparation.
                  </p>
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
