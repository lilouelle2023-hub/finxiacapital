import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Calendar, ArrowLeft, Tag } from 'lucide-react';
import SEO from '@/components/SEO';

export default function Article800VdcPage() {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: "800 volts DC : comment NVIDIA et Infineon réinventent l'alimentation du datacenter IA",
      description: "Annoncé au GTC Berlin : Infineon et NVIDIA approfondissent leur collaboration sur les architectures 800 volts DC, avec le nitrure de gallium au cœur de la conversion. Derrière la prouesse technique, un enjeu d'investissement : chaque point de rendement gagné est un mégawatt rendu au calcul.",
      tag: "Energy & Infrastructure",
      date: "23 octobre 2026",
      readTime: "6 min de lecture",
      backToBlog: "Retour au blog",
      lead: "L'annonce est presque passée inaperçue au GTC Berlin, noyée sous les usines à IA en conteneur : Infineon et NVIDIA approfondissent leur collaboration sur les architectures 800 volts courant continu, avec le nitrure de gallium (GaN) au cœur de la conversion. C'est pourtant peut-être la nouvelle la plus structurante de la semaine — elle concerne la manière dont l'électricité entre dans le rack.",
      p1: "Le problème est simple : la puissance des racks d'IA grimpe vers le mégawatt, et les architectures électriques classiques — distribution en courant alternatif, puis conversions successives vers les basses tensions des processeurs — atteignent leurs limites. Chaque étage de conversion perd de l'énergie, chauffe et occupe de la place. Multipliées par des centaines de racks, ces pertes pèsent directement sur le PUE et sur la facture d'électricité.",
      p2: "La réponse qui s'impose : distribuer en 800 volts continu au plus près du calcul, puis convertir localement. Infineon travaille avec NVIDIA sur l'étage le plus critique — le convertisseur de bus intermédiaire haute tension — où le GaN commute jusqu'à 1 MHz, avec des rendements qui approchent les 98 % par étage selon les projections des partenaires. Moins de pertes, des composants magnétiques réduits, des cartes plus compactes : la densité augmente sans que la chaleur ne suive.",
      h2_1: "Un écosystème qui s'organise",
      p3: "NVIDIA ne pousse pas seul : une trentaine d'entreprises convergent vers cette architecture commune — fabricants de semiconducteurs comme Infineon, Texas Instruments ou Navitas, et spécialistes de la puissance comme Delta, Eaton, Schneider Electric et Vertiv. Infineon a par ailleurs signé en septembre avec l'estonien Skeleton Technologies sur les transformateurs à semi-conducteurs, maillon entre le réseau moyenne tension et le 800 volts DC.",
      p4: "Pour l'Europe, le signal est remarquable : la bataille électrique du datacenter se joue en partie sur des technologies où le continent est fort — Infineon à Munich, STMicroelectronics, Schneider Electric. La chaîne de valeur du watt rejoint celle du silicium, et elle a des racines européennes.",
      h2_2: "Ce que cela change pour l'investisseur",
      p5: "Chaque point de rendement gagné sur la conversion est du mégawatt rendu disponible pour le calcul, à puissance raccordée égale. Dans un marché où le mégawatt est la ressource rare, l'efficacité de la chaîne de distribution électrique n'est plus un sujet d'ingénieur : c'est un facteur direct de capacité vendable et de marge.",
      p6: "La transition crée aussi un écart entre les actifs : une salle conçue pour des racks de 10 à 20 kW ne passera pas au mégawatt sans refonte profonde de sa distribution électrique. La frontière se dessine entre les actifs rénovables et ceux qui ne le sont pas — c'est devenu un critère de sélection à part entière.",
      h2_3: "Comment nous l'appliquons chez FINXIA",
      p7: "Dans la stratégie TITAN DC AI, nous intégrons désormais l'architecture électrique interne à notre analyse d'actifs : capacité de la distribution à évoluer vers la haute densité, place disponible pour les nouveaux étages de conversion, qualité de l'ingénierie électrique du site. Ces paramètres conditionnent la durée de vie économique d'un actif autant que son raccordement au réseau.",
      p8: "Notre lecture brown-to-green s'en trouve affinée : transformer un datacenter existant, c'est aussi repenser sa colonne vertébrale électrique. Les actifs où cette refonte est possible à coût maîtrisé capteront la demande des racks haute densité ; les autres se déprécieront plus vite que leur comptabilité ne le suggère.",
      h2_4: "Ce qu'il faut retenir",
      p9: "Le 800 volts DC devient le standard émergent des usines à IA : distribution continue haute tension, conversion GaN au plus près du calcul, écosystème d'une trentaine d'industriels alignés derrière NVIDIA. La révolution électrique du datacenter est en marche — et une partie de ses technologies clés sont européennes.",
      p10: "À surveiller : les premiers racks 800 V DC en production avec les plateformes Vera Rubin début 2027, et les gammes dédiées des acteurs européens de la puissance — Infineon, Schneider Electric, Vertiv.",
      authorBio: "est Co-Fondatrice et Directrice des Investissements (CIO) de FINXIA Capital SCSp, véhicule d'investissement propriétaire luxembourgeois positionné sur les actifs réels et l'infrastructure IA.",
      learnMoreTitle: "En savoir plus",
      link1Title: "Nos Stratégies",
      link1Desc: "Découvrez TITAN et nos 3 autres pôles d'investissement",
      link2Title: "Approche Européenne",
      link2Desc: "France, Espagne, Italie : nos marchés cibles européens"
    },
    en: {
      title: "800 VDC: How NVIDIA and Infineon Are Reinventing AI Datacenter Power",
      description: "Announced at GTC Berlin: Infineon and NVIDIA are deepening their collaboration on 800-volt DC architectures, with gallium nitride at the heart of conversion. Behind the engineering feat lies an investment stake: every efficiency point gained is a megawatt returned to compute.",
      tag: "Energy & Infrastructure",
      date: "October 23, 2026",
      readTime: "6 min read",
      backToBlog: "Back to blog",
      lead: "The announcement almost went unnoticed at GTC Berlin, buried under containerized AI factories: Infineon and NVIDIA are deepening their collaboration on 800-volt direct current architectures, with gallium nitride (GaN) at the heart of power conversion. It may be the week's most structural piece of news — it concerns how electricity enters the rack.",
      p1: "The problem is simple: AI rack power is climbing toward the megawatt, and conventional electrical architectures — AC distribution followed by successive conversions down to processor-level low voltages — are hitting their limits. Every conversion stage loses energy, generates heat and takes up space. Multiplied by hundreds of racks, these losses weigh directly on PUE and on the electricity bill.",
      p2: "The emerging answer: distribute 800 volts DC as close as possible to compute, then convert locally. Infineon is working with NVIDIA on the most critical stage — the high-voltage intermediate bus converter — where GaN switches at up to 1 MHz, with efficiency approaching 98% per stage according to the partners' projections. Fewer losses, smaller magnetics, more compact boards: density rises without heat following.",
      h2_1: "An Ecosystem Taking Shape",
      p3: "NVIDIA is not pushing alone: some thirty companies are converging on this common architecture — semiconductor makers such as Infineon, Texas Instruments and Navitas, and power specialists such as Delta, Eaton, Schneider Electric and Vertiv. Infineon also signed in September with Estonia's Skeleton Technologies on solid-state transformers, the link between the medium-voltage grid and 800 V DC.",
      p4: "For Europe, the signal is remarkable: the datacenter's electrical battle is partly being fought on technologies where the continent is strong — Infineon in Munich, STMicroelectronics, Schneider Electric. The watt value chain is joining the silicon one, and it has European roots.",
      h2_2: "What This Changes for Investors",
      p5: "Every efficiency point gained in conversion is a megawatt made available for compute at equal connected power. In a market where the megawatt is the scarce resource, distribution-chain efficiency is no longer an engineering topic: it is a direct driver of sellable capacity and margin.",
      p6: "The transition also creates a divide between assets: a hall designed for 10-20 kW racks will not reach the megawatt without a deep redesign of its electrical distribution. The line is being drawn between renovable assets and those that are not — this has become a selection criterion in its own right.",
      h2_3: "How We Apply This at FINXIA",
      p7: "In the TITAN DC AI strategy, we now integrate internal electrical architecture into our asset analysis: the distribution's ability to evolve toward high density, space available for new conversion stages, the quality of a site's electrical engineering. These parameters shape an asset's economic life as much as its grid connection.",
      p8: "Our brown-to-green reading is refined accordingly: transforming an existing datacenter also means rethinking its electrical backbone. Assets where this redesign is feasible at controlled cost will capture high-density rack demand; the others will depreciate faster than their accounting suggests.",
      h2_4: "Key Takeaways",
      p9: "800 V DC is becoming the emerging standard for AI factories: high-voltage DC distribution, GaN conversion close to compute, and an ecosystem of some thirty industrials aligned behind NVIDIA. The datacenter's electrical revolution is underway — and some of its key technologies are European.",
      p10: "Worth watching: the first 800 V DC racks in production with Vera Rubin platforms in early 2027, and dedicated product lines from European power players — Infineon, Schneider Electric, Vertiv.",
      authorBio: "is Co-Founder and Chief Investment Officer (CIO) of FINXIA Capital SCSp, a Luxembourg proprietary investment vehicle positioned on real assets and AI infrastructure.",
      learnMoreTitle: "Learn more",
      link1Title: "Our Strategies",
      link1Desc: "Discover TITAN and our 3 other investment poles",
      link2Title: "European Approach",
      link2Desc: "France, Spain, Italy: our European target markets"
    }
  };

  const t = content[language];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t.title,
    "description": t.description,
    "image": "https://finxiacapital.com/logo-finxia.png",
    "datePublished": "2026-10-23T09:00:00+02:00",
    "dateModified": "2026-10-23T09:00:00+02:00",
    "author": {
      "@type": "Person",
      "name": "Lila Benhammou",
      "jobTitle": "Co-Founder & Chief Investment Officer",
      "worksFor": {
        "@type": "Organization",
        "name": "Finxia Capital",
        "url": "https://finxiacapital.com"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "Finxia Capital",
      "logo": {
        "@type": "ImageObject",
        "url": "https://finxiacapital.com/logo-finxia.png"
      }
    },
    "articleSection": "Energy & Infrastructure",
    "keywords": language === 'fr' ? "800V DC, NVIDIA, Infineon, GaN, datacenter, IA, GPU, alimentation électrique, efficacité énergétique, green datacenter" : "800 VDC, NVIDIA, Infineon, GaN, datacenter, AI, GPU, power delivery, energy efficiency, green datacenter"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": language === 'fr' ? "Accueil" : "Home",
        "item": language === 'fr' ? "https://finxiacapital.com" : "https://finxiacapital.com/en/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": language === 'fr' ? "https://finxiacapital.com/blog" : "https://finxiacapital.com/en/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": t.title,
        "item": language === 'fr' ? "https://finxiacapital.com/blog/800-volts-dc-alimentation-datacenter-ia-nvidia-infineon-gan-europe-2026" : "https://finxiacapital.com/en/blog/800-vdc-power-ai-datacenter-nvidia-infineon-gan-europe-2026"
      }
    ]
  };

  return (
    <div data-testid="article-800-volts-dc-alimentation-datacenter-ia-nvidia-infineon-gan-europe-2026-page" className="pt-20">
      <SEO
        title={t.title}
        description={t.description}
        canonical={language === 'fr' ? "https://finxiacapital.com/blog/800-volts-dc-alimentation-datacenter-ia-nvidia-infineon-gan-europe-2026/" : "https://finxiacapital.com/en/blog/800-vdc-power-ai-datacenter-nvidia-infineon-gan-europe-2026/"}
        keywords={language === 'fr' ? "800V DC, NVIDIA, Infineon, GaN, datacenter, IA, GPU, alimentation électrique, efficacité énergétique, green datacenter" : "800 VDC, NVIDIA, Infineon, GaN, datacenter, AI, GPU, power delivery, energy efficiency, green datacenter"}
        structuredData={articleSchema}
        breadcrumbSchema={breadcrumbSchema}
        language={language}
        ogLocale={language === 'fr' ? "fr_FR" : "en_US"}
        hreflangFr="https://finxiacapital.com/blog/800-volts-dc-alimentation-datacenter-ia-nvidia-infineon-gan-europe-2026/"
        hreflangEn="https://finxiacapital.com/en/blog/800-vdc-power-ai-datacenter-nvidia-infineon-gan-europe-2026/"
        hreflangDefault="https://finxiacapital.com/blog/800-volts-dc-alimentation-datacenter-ia-nvidia-infineon-gan-europe-2026/"
      />
      <article className="bg-white">
        <header className="py-16 md:py-24 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href={language === 'fr' ? "/blog" : "/en/blog"} className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-[#C45A3B] transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              {t.backToBlog}
            </Link>
            <div className="flex items-center gap-4 mb-6 text-sm">
              <span className="inline-flex items-center gap-2 text-[#C45A3B] font-medium uppercase tracking-wider">
                <Tag className="w-4 h-4" />
                {t.tag}
              </span>
              <span className="text-slate-400">•</span>
              <time className="text-slate-600 flex items-center gap-2" dateTime="2026-10-23">
                <Calendar className="w-4 h-4" />
                {t.date}
              </time>
              <span className="text-slate-400">•</span>
              <span className="text-slate-600">{t.readTime}</span>
            </div>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
              {t.title}
            </h1>
            <p className="text-slate-500 text-sm">
              {language === 'fr' ? 'Par Lila Benhammou, Co-Fondatrice & CIO — FINXIA Capital' : 'By Lila Benhammou, Co-Founder & CIO — FINXIA Capital'}
            </p>
          </div>
        </header>
        <div className="py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-slate prose-lg max-w-none">
              <p className="text-xl text-slate-700 font-medium leading-relaxed mb-8">{t.lead}</p>
              <p>{t.p1}</p>
              <p>{t.p2}</p>
              <h2 className="font-serif text-2xl md:text-3xl mt-12 mb-6">{t.h2_1}</h2>
              <p>{t.p3}</p>
              <p>{t.p4}</p>
              <h2 className="font-serif text-2xl md:text-3xl mt-12 mb-6">{t.h2_2}</h2>
              <p>{t.p5}</p>
              <p>{t.p6}</p>
              <h2 className="font-serif text-2xl md:text-3xl mt-12 mb-6">{t.h2_3}</h2>
              <p>{t.p7}</p>
              <p>{t.p8}</p>
              <h2 className="font-serif text-2xl md:text-3xl mt-12 mb-6">{t.h2_4}</h2>
              <p>{t.p9}</p>
              <p>{t.p10}</p>
            </div>
            <div className="mt-16 pt-8 border-t border-slate-200">
              <p className="text-slate-600 text-sm leading-relaxed">
                <strong className="text-slate-900">Lila Benhammou</strong> {t.authorBio}
              </p>
            </div>
            <div className="mt-16 pt-8 border-t border-slate-200">
              <h3 className="font-serif text-xl mb-6">{t.learnMoreTitle}</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href={language === 'fr' ? "/strategies" : "/en/strategies"} className="p-6 bg-slate-50 hover:bg-slate-100 transition-colors border-l-4 border-[#C45A3B]">
                  <h4 className="font-medium text-slate-900 mb-2">{t.link1Title}</h4>
                  <p className="text-slate-600 text-sm">{t.link1Desc}</p>
                </Link>
                <Link href={language === 'fr' ? "/european-approach" : "/en/european-approach"} className="p-6 bg-slate-50 hover:bg-slate-100 transition-colors border-l-4 border-[#C45A3B]">
                  <h4 className="font-medium text-slate-900 mb-2">{t.link2Title}</h4>
                  <p className="text-slate-600 text-sm">{t.link2Desc}</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
