import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Calendar, ArrowLeft, Tag } from 'lucide-react';
import SEO from '@/components/SEO';

export default function ArticleFranceRecoursDatacenterPage() {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: "Datacenters en France : ce que les recours environnementaux changent pour l'investisseur",
      description: "Suspension du permis de Sesterce à Alixan, recours contre le projet Telehouse aux Pennes-Mirabeau : le contentieux environnemental devient un risque de calendrier et de capital pour les datacenters français. Analyse des atouts et des limites du marché.",
      tag: "Investment Strategy",
      date: "28 octobre 2026",
      readTime: "6 min de lecture",
      backToBlog: "Retour au blog",
      lead: "Le 10 juillet 2026, le tribunal administratif de Grenoble a suspendu le permis de construire du Computer Center porté par Sesterce à Alixan. Plus de 60 MW étaient prévus à terme. Le juge a relevé l'absence d'étude d'impact et un doute sérieux sur la compatibilité du projet avec l'urbanisme local. Ce n'est pas une annulation définitive, mais le chantier est gelé en attendant le jugement au fond.",
      p1: "Le dossier drômois donne une règle simple : un projet ne peut pas être découpé en phases pour rester sous les seuils de l'évaluation environnementale. Le juge regarde l'ensemble, groupes électrogènes compris. Pour l'investisseur, la diligence ne peut donc plus s'arrêter au permis affiché en mairie. Elle doit reprendre la puissance finale, les ICPE, le PLU et la cohérence des autorisations.",
      p2: "Alixan n'est pas isolé. Aux Pennes-Mirabeau, le projet Cézanne de Telehouse — huit bâtiments sur une friche de six hectares, environ un milliard d'euros — fait face à des recours de riverains et de la commune voisine de Saint-Victoret. Les sujets diffèrent : chaleur, incendie, eau, lignes électriques. Le point commun est ailleurs : l'acceptabilité locale entre désormais dans le modèle financier.",
      h2_1: "Le vrai risque n'est pas le recours. C'est le calendrier",
      p3: "Un recours ne condamne pas forcément un projet. En revanche, douze ou vingt-quatre mois d'incertitude immobilisent le foncier, décalent les revenus et peuvent remettre en cause un raccordement ou un contrat client. Dans un datacenter IA, où les GPU et les équipements électriques vieillissent vite, le délai n'est pas une ligne annexe : il peut modifier la valeur de l'actif.",
      p4: "La France garde pourtant des atouts difficiles à reproduire : une électricité largement bas carbone, des compétences industrielles, un cadre SecNumCloud pour les usages sensibles et des programmes de grande ampleur comme ceux de Brookfield et Data4. La loi de simplification de mai 2026 apporte aussi des outils de planification et de raccordement. Elle ne supprime ni l'étude d'impact ni le droit des tiers à contester.",
      h2_2: "Pour et contre : la bonne façon de lire le marché français",
      p5: "Pour : la demande de cloud souverain et d'IA est réelle, le mix électrique rassure les clients soumis à des objectifs carbone, et plusieurs territoires disposent de friches déjà industrialisées. Contre : les projets très visibles, proches d'habitations ou mal concertés concentrent un risque juridique et politique qui ne se corrige pas par une simple prime de rendement.",
      p6: "La conséquence pratique tient en une phrase : mieux vaut un site moins spectaculaire mais autorisé, raccordable et défendable qu'un gigawatt de présentation. Le prix du foncier doit intégrer le temps judiciaire possible, les études complémentaires, la concertation et, parfois, une modification du projet. Acheter un permis sans acheter cette analyse revient à accepter un risque aveugle.",
      h2_3: "Comment nous l'appliquons chez FINXIA",
      p7: "Dans TITAN DC AI, nous plaçons la revue juridique et environnementale au même niveau que la revue électrique. Nous reconstituons le projet complet, testons les scénarios de suspension et vérifions que le financement supporte un retard. La concertation n'est pas traitée comme une opération de communication : ses objections peuvent révéler très tôt un défaut technique ou documentaire.",
      p8: "Notre approche brown-to-green peut réduire certains conflits lorsqu'elle réutilise une friche, des bâtiments et des infrastructures existantes. Elle n'offre aucune immunité. Une ancienne centrale ou un site industriel reste soumis à l'eau, à l'air, au bruit et à l'urbanisme. La réutilisation est un point de départ, pas un raccourci réglementaire.",
      h2_4: "Ce qu'il faut retenir",
      p9: "La France reste investissable, mais elle est moins tolérante aux dossiers approximatifs. Les meilleurs actifs seront ceux dont la puissance, l'étude d'impact, le foncier et l'acceptabilité ont été examinés ensemble. À surveiller : le jugement au fond d'Alixan, l'application de la loi de simplification et les premiers contentieux sur les nouvelles procédures de raccordement.",
      p10: "Pour comparer les territoires, notre grille retient quatre questions : quel délai avant un permis purgé, quelle électricité réellement disponible, quel usage local de l'eau et de la chaleur, et quel client acceptera de s'engager pendant le contentieux ?",
      authorBio: "est Co-Fondatrice et Directrice des Investissements (CIO) de FINXIA Capital SCSp, véhicule d'investissement propriétaire luxembourgeois positionné sur les actifs réels et l'infrastructure IA.",
      learnMoreTitle: "En savoir plus",
      link1Title: "Nos Stratégies",
      link1Desc: "Découvrez TITAN et nos 3 autres pôles d'investissement",
      link2Title: "Approche Européenne",
      link2Desc: "France, Espagne, Italie : nos marchés cibles européens"
    },
    en: {
      title: "Datacenters in France: What Environmental Appeals Change for Investors",
      description: "The permit suspension at Sesterce's Alixan project and appeals against Telehouse near Marseille turn environmental litigation into a timing and capital risk. France's low-carbon power remains attractive, but legal and local due diligence is now decisive.",
      tag: "Investment Strategy",
      date: "October 28, 2026",
      readTime: "6 min read",
      backToBlog: "Back to blog",
      lead: "On 10 July 2026, the Grenoble administrative court suspended the building permit for Sesterce's Alixan Computer Center. The judge cited the missing environmental impact assessment and serious doubts over planning compliance. The ruling freezes execution pending a merits decision; it is not a final annulment.",
      p1: "The lesson is broader than one project. Phasing cannot be used to keep a datacenter below environmental-assessment thresholds: courts assess the complete facility, including backup generation. Investors must therefore underwrite final power demand, regulated installations, zoning and permit consistency — not merely the existence of a building permit.",
      p2: "Near Marseille, Telehouse's Cézanne project in Les Pennes-Mirabeau faces appeals from residents and neighbouring Saint-Victoret. Heat, fire, water and power lines dominate that debate. Different issues, same investment consequence: local acceptance now belongs in the financial model.",
      h2_1: "The Real Risk Is Time",
      p3: "An appeal does not necessarily kill a project. But twelve to twenty-four months of uncertainty can strand land, delay revenue and weaken customer or grid commitments. For AI infrastructure, where equipment cycles are short, delay can materially change asset value.",
      p4: "France retains major advantages: largely low-carbon electricity, industrial skills, SecNumCloud for sensitive workloads and substantial private investment programmes. Its May 2026 simplification law adds planning and grid tools, but removes neither impact assessment nor third-party appeal rights.",
      h2_2: "Pros and Cons",
      p5: "The positives are genuine sovereign-cloud and AI demand, a strong carbon profile and reusable industrial sites. The negatives are concentrated in highly visible projects near homes, or schemes with weak consultation and incomplete documentation. A higher target return alone does not solve those risks.",
      p6: "A less spectacular site with robust permits, power and local support may be worth more than a headline gigawatt. Land pricing and financing must allow for legal delay, additional studies, consultation and possible redesign.",
      h2_3: "How We Apply This at FINXIA",
      p7: "Within TITAN DC AI, legal and environmental review sits alongside electrical diligence. We reconstruct the whole project, stress-test suspension scenarios and check that financing can absorb delay. Community objections are reviewed as early technical and documentary evidence, not as a communications issue.",
      p8: "Brown-to-green conversion can reduce conflict by reusing industrial land and infrastructure, but provides no regulatory immunity. Water, air, noise and planning rules still apply.",
      h2_4: "Key Takeaways",
      p9: "France remains investable, but weakly prepared projects face a harsher environment. The strongest assets combine power, impact assessment, land control and local legitimacy. Watch the Alixan merits ruling and implementation of the new grid procedures.",
      p10: "Our comparison framework asks four questions: when will permits be final, what power is actually available, how are water and heat managed locally, and which customer will stay committed through litigation?",
      authorBio: "is Co-Founder and Chief Investment Officer (CIO) of FINXIA Capital SCSp, a Luxembourg proprietary investment vehicle positioned on real assets and AI infrastructure.",
      learnMoreTitle: "Learn more",
      link1Title: "Our Strategies",
      link1Desc: "Discover TITAN and our 3 other investment poles",
      link2Title: "European Approach",
      link2Desc: "France, Spain, Italy: our European target markets"
    }
  };

  const t = content[language];
  const frUrl = "https://finxiacapital.com/blog/recours-environnementaux-datacenter-france-risque-juridique-investissement-2026/";
  const enUrl = "https://finxiacapital.com/en/blog/environmental-appeals-datacenter-france-legal-risk-investment-2026/";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t.title,
    "description": t.description,
    "image": "https://finxiacapital.com/logo-finxia.png",
    "datePublished": "2026-10-28T09:00:00+01:00",
    "dateModified": "2026-10-28T09:00:00+01:00",
    "author": {
      "@type": "Person",
      "name": "Lila Benhammou",
      "jobTitle": "Co-Founder & Chief Investment Officer",
      "worksFor": { "@type": "Organization", "name": "Finxia Capital", "url": "https://finxiacapital.com" }
    },
    "publisher": {
      "@type": "Organization",
      "name": "Finxia Capital",
      "logo": { "@type": "ImageObject", "url": "https://finxiacapital.com/logo-finxia.png" }
    },
    "articleSection": "Investment Strategy",
    "keywords": language === 'fr' ? "datacenter, France, recours environnementaux, IA, cloud souverain, investissement, Alixan, Telehouse" : "datacenter, France, environmental appeals, AI, sovereign cloud, investment, Alixan, Telehouse"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": language === 'fr' ? "Accueil" : "Home", "item": language === 'fr' ? "https://finxiacapital.com" : "https://finxiacapital.com/en/" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": language === 'fr' ? "https://finxiacapital.com/blog" : "https://finxiacapital.com/en/blog" },
      { "@type": "ListItem", "position": 3, "name": t.title, "item": language === 'fr' ? frUrl : enUrl }
    ]
  };

  return (
    <div data-testid="article-recours-environnementaux-datacenter-france-page" className="pt-20">
      <SEO
        title={t.title}
        description={t.description}
        canonical={language === 'fr' ? frUrl : enUrl}
        keywords={articleSchema.keywords}
        structuredData={articleSchema}
        breadcrumbSchema={breadcrumbSchema}
        language={language}
        ogLocale={language === 'fr' ? "fr_FR" : "en_US"}
        hreflangFr={frUrl}
        hreflangEn={enUrl}
        hreflangDefault={frUrl}
      />
      <article className="bg-white">
        <header className="py-16 md:py-24 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href={language === 'fr' ? "/blog" : "/en/blog"} className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-[#C45A3B] transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              {t.backToBlog}
            </Link>
            <div className="flex items-center gap-4 mb-6 text-sm">
              <span className="inline-flex items-center gap-2 text-[#C45A3B] font-medium uppercase tracking-wider"><Tag className="w-4 h-4" />{t.tag}</span>
              <span className="text-slate-400">•</span>
              <time className="text-slate-600 flex items-center gap-2" dateTime="2026-10-28"><Calendar className="w-4 h-4" />{t.date}</time>
              <span className="text-slate-400">•</span>
              <span className="text-slate-600">{t.readTime}</span>
            </div>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">{t.title}</h1>
            <p className="text-slate-500 text-sm">{language === 'fr' ? 'Par Lila Benhammou, Co-Fondatrice & CIO — FINXIA Capital' : 'By Lila Benhammou, Co-Founder & CIO — FINXIA Capital'}</p>
          </div>
        </header>
        <div className="py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-slate prose-lg max-w-none">
              <p className="text-xl text-slate-700 font-medium leading-relaxed mb-8">{t.lead}</p>
              <p>{t.p1}</p><p>{t.p2}</p>
              <h2 className="font-serif text-2xl md:text-3xl mt-12 mb-6">{t.h2_1}</h2>
              <p>{t.p3}</p><p>{t.p4}</p>
              <h2 className="font-serif text-2xl md:text-3xl mt-12 mb-6">{t.h2_2}</h2>
              <p>{t.p5}</p><p>{t.p6}</p>
              <h2 className="font-serif text-2xl md:text-3xl mt-12 mb-6">{t.h2_3}</h2>
              <p>{t.p7}</p><p>{t.p8}</p>
              <h2 className="font-serif text-2xl md:text-3xl mt-12 mb-6">{t.h2_4}</h2>
              <p>{t.p9}</p><p>{t.p10}</p>
            </div>
            <div className="mt-16 pt-8 border-t border-slate-200"><p className="text-slate-600 text-sm leading-relaxed"><strong className="text-slate-900">Lila Benhammou</strong> {t.authorBio}</p></div>
            <div className="mt-16 pt-8 border-t border-slate-200">
              <h3 className="font-serif text-xl mb-6">{t.learnMoreTitle}</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href={language === 'fr' ? "/strategies" : "/en/strategies"} className="p-6 bg-slate-50 hover:bg-slate-100 transition-colors border-l-4 border-[#C45A3B]"><h4 className="font-medium text-slate-900 mb-2">{t.link1Title}</h4><p className="text-slate-600 text-sm">{t.link1Desc}</p></Link>
                <Link href={language === 'fr' ? "/european-approach" : "/en/european-approach"} className="p-6 bg-slate-50 hover:bg-slate-100 transition-colors border-l-4 border-[#C45A3B]"><h4 className="font-medium text-slate-900 mb-2">{t.link2Title}</h4><p className="text-slate-600 text-sm">{t.link2Desc}</p></Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
