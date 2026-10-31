import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Calendar, ArrowRight, Zap, Filter } from 'lucide-react';
import SEO from '@/components/SEO';
import blogPosts from '@/data/blogPosts.json';

export default function BlogIndexPage() {
  const { language } = useLanguage();
  const [activeFilter, setActiveFilter] = React.useState('all');

  const newsItems = [
    {
      id: 91,
      topic: 'dc',
      topicLabel: { fr: 'Datacenter', en: 'Datacenter' },
      date: '2026-10-30',
      title: {
        fr: "Google achète 56 hectares à Hamina, en Finlande, pendant que Tekova prépare un datacenter de 50 MW à Perho et que SRV se retire d'un projet de 40 MW à Eura",
        en: "Google buys 56 hectares in Hamina, Finland, as Tekova plans a 50 MW data center in Perho and SRV withdraws from a 40 MW project in Eura"
      },
      source: "Data Center Dynamics"
    },
    {
      id: 92,
      topic: 'hpc',
      topicLabel: { fr: 'HPC', en: 'HPC' },
      date: '2026-10-30',
      title: {
        fr: "Intel chiffre à 600 millions de dollars les pertes liées à l'explosion de son usine en Israël, avec un chiffre d'affaires trimestriel de 16,5 milliards",
        en: "Intel estimates losses from the explosion at its Israel fab at $600 million, with quarterly revenue reaching $16.5 billion"
      },
      source: "Data Center Dynamics"
    },
    {
      id: 93,
      topic: 'ia',
      topicLabel: { fr: 'IA', en: 'AI' },
      date: '2026-10-29',
      title: {
        fr: "Le cloud IA OneQode loue 14 MW de capacité à AdaniConneX pour sa première implantation en Inde, avec d'autres déploiements prévus",
        en: "AI cloud company OneQode leases 14 MW from AdaniConneX for its first deployment in India, with more planned"
      },
      source: "Data Center Dynamics"
    },
    {
      id: 88,
      topic: 'ia',
      topicLabel: { fr: 'IA', en: 'AI' },
      date: '2026-10-27',
      title: {
        fr: "Liquid AI lance LFM3, une famille de modèles compacts en poids ouverts, exécutables sur infrastructure propre — une option pour l'IA embarquée et souveraine",
        en: "Liquid AI launches LFM3, a family of compact open-weight models that can run on private infrastructure — an option for embedded and sovereign AI"
      },
      source: "Liquid AI"
    },
    {
      id: 89,
      topic: 'dc',
      topicLabel: { fr: 'Datacenter', en: 'Datacenter' },
      date: '2026-10-27',
      title: {
        fr: "CoreWeave met en service l'essentiel de son datacenter DEN01 près de Copenhague avec atNorth : 22,5 MW de capacité IT et récupération de la chaleur fatale vers le réseau de chaleur",
        en: "CoreWeave brings most of its DEN01 data center near Copenhagen online with atNorth: 22.5 MW of IT capacity and waste heat recovery to the district heating network"
      },
      source: "CoreWeave"
    },
    {
      id: 90,
      topic: 'nvidia',
      topicLabel: { fr: 'NVIDIA', en: 'NVIDIA' },
      date: '2026-10-29',
      title: {
        fr: "PowerBank annonce son premier modular datacenter de 2 MW, conçu pour environ 500 GPU NVIDIA GB300 fournis par un client cloud IA",
        en: "PowerBank announces its first 2 MW modular data center, designed for approximately 500 NVIDIA GB300 GPUs supplied by an AI cloud tenant"
      },
      source: "Yahoo Finance"
    },
    {
      id: 85,
      topic: 'dc',
      topicLabel: { fr: 'Datacenter', en: 'Datacenter' },
      date: '2026-10-28',
      title: {
        fr: "Sécuriser le calcul IA : un rapport de l'OCDE décrit comment les États recourent au zonage, aux permis accélérés et au statut d'infrastructure critique pour les datacenters",
        en: "Securing AI compute: an OECD report details how governments use zoning, fast-tracked permits and critical infrastructure status for data centers"
      },
      source: "OECD"
    },
    {
      id: 86,
      topic: 'hpc',
      topicLabel: { fr: 'HPC', en: 'HPC' },
      date: '2026-10-28',
      title: {
        fr: "Mémoire HBM : le chinois CXMT démarre la HBM3E avec des rendements limités de 20 à 30 %, contre environ 70 % chez SK Hynix, selon Reuters",
        en: "HBM memory: China's CXMT starts HBM3E output at limited yields of 20-30%, versus around 70% at SK Hynix, Reuters reports"
      },
      source: "Reuters"
    },
    {
      id: 87,
      topic: 'ia',
      topicLabel: { fr: 'IA', en: 'AI' },
      date: '2026-10-27',
      title: {
        fr: "Oracle proposera les TPU de Google sur son cloud OCI à partir de 2027, et annonce la disponibilité générale de NVIDIA Vera Rubin et des CPU Vera",
        en: "Oracle will offer Google's TPUs on its OCI cloud from 2027, and announces general availability of NVIDIA Vera Rubin and Vera CPUs"
      },
      source: "Data Center Dynamics"
    },
    {
      id: 82,
      topic: 'nvidia',
      topicLabel: { fr: 'NVIDIA', en: 'NVIDIA' },
      date: '2026-10-27',
      title: {
        fr: "NVIDIA investit 3 milliards de dollars dans Meta et élargit leur partenariat IA : Vera Rubin, CPU Vera et réseaux — le capex 2026 de Meta visé entre 135 et 145 milliards",
        en: "NVIDIA invests $3 billion in Meta and expands their AI partnership: Vera Rubin, Vera CPUs and networking — Meta's 2026 capex targeted at $135-145 billion"
      },
      source: "CNBC"
    },
    {
      id: 83,
      topic: 'ia',
      topicLabel: { fr: 'IA', en: 'AI' },
      date: '2026-10-27',
      title: {
        fr: "Anthropic dépose son dossier d'introduction au Nasdaq sous le symbole ANT, avec un chiffre d'affaires trimestriel de 11,6 milliards de dollars",
        en: "Anthropic files to list on the Nasdaq under ticker ANT, with quarterly revenue of $11.6 billion"
      },
      source: "Axios"
    },
    {
      id: 84,
      topic: 'dc',
      topicLabel: { fr: 'Datacenter', en: 'Datacenter' },
      date: '2026-10-27',
      title: {
        fr: "Datacenters IA au Royaume-Uni : le gouvernement a consulté 137 entreprises sur ses projets, mais aucune association environnementale, révèle The Guardian",
        en: "AI datacentres in the UK: the government consulted 137 businesses on its plans, but no environmental groups, The Guardian reveals"
      },
      source: "The Guardian"
    },
    {
      id: 79,
      topic: 'hpc',
      topicLabel: { fr: 'HPC', en: 'HPC' },
      date: '2026-10-26',
      title: {
        fr: "La Grèce inaugure Daedalus, un supercalculateur de 85 pétaflops équipé de GPU NVIDIA H200, hébergé dans un bâtiment réhabilité",
        en: "Greece inaugurates Daedalus, an 85-petaflop supercomputer powered by NVIDIA H200 GPUs, housed in a repurposed building"
      },
      source: "Data Center Dynamics"
    },
    {
      id: 80,
      topic: 'dc',
      topicLabel: { fr: 'Datacenter', en: 'Datacenter' },
      date: '2026-10-26',
      title: {
        fr: "Transformateurs : des délais de livraison dépassant 160 semaines — l'équipement électrique, et pas seulement les GPU, bloque désormais les calendriers des datacenters IA",
        en: "Transformers: lead times exceeding 160 weeks — grid equipment, not just GPUs, now gates AI datacenter timelines"
      },
      source: "Reuters"
    },
    {
      id: 81,
      topic: 'ia',
      topicLabel: { fr: 'IA', en: 'AI' },
      date: '2026-10-26',
      title: {
        fr: "Kao Data accueillera le laboratoire d'inférence IA CommonAI dans son datacenter de Harlow, avec du matériel NVIDIA et AMD",
        en: "Kao Data to host CommonAI's AI inference lab at its Harlow datacenter, with NVIDIA and AMD hardware"
      },
      source: "Data Center Dynamics"
    },
    {
      id: 76,
      topic: 'ia',
      topicLabel: { fr: 'IA', en: 'AI' },
      date: '2026-10-23',
      title: {
        fr: "Cloud souverain : l'allemand Polarise lance sa plateforme d'IA souveraine au GTC Berlin, de l'usine à IA jusqu'à l'application",
        en: "Sovereign cloud: Germany's Polarise launches its sovereign AI platform at GTC Berlin, from AI factory to application"
      },
      source: "Asia News Network"
    },
    {
      id: 77,
      topic: 'nvidia',
      topicLabel: { fr: 'NVIDIA', en: 'NVIDIA' },
      date: '2026-10-23',
      title: {
        fr: "Jensen Huang au Kazakhstan : le pays pourrait devenir un hub de calcul IA pour l'Europe — projet Firebird de 10 Md$ et 100 000 GPU",
        en: "Jensen Huang in Kazakhstan: the country could become an AI computing hub for Europe — a $10B Firebird project with 100,000 GPUs"
      },
      source: "CNBC"
    },
    {
      id: 78,
      topic: 'dc',
      topicLabel: { fr: 'Datacenter', en: 'Datacenter' },
      date: '2026-10-23',
      title: {
        fr: "Google et Voltus s'associent pour environ 1 GW de capacité électrique flexible dédiée aux datacenters sur le réseau PJM, jusqu'en 2040",
        en: "Google and Voltus partner on roughly 1 GW of flexible power capacity for data centers on the PJM grid, through 2040"
      },
      source: "Utility Dive"
    },
    {
      id: 73,
      topic: 'dc',
      topicLabel: { fr: 'Datacenter', en: 'Datacenter' },
      date: '2026-10-21',
      title: {
        fr: "Vertiv et NVIDIA présentent une approche d'usine à IA pré-ingénierée : jusqu'à 30 % de tokens cumulés en plus la première année — Polar Data Centers l'applique à ses 41 MW de Herøya, en Norvège",
        en: "Vertiv and NVIDIA unveil a pre-engineered AI factory approach: up to 30% more cumulative tokens in the first year — Polar Data Centers applies it to its 41 MW Herøya site in Norway"
      },
      source: "PR Newswire"
    },
    {
      id: 74,
      topic: 'ia',
      topicLabel: { fr: 'IA', en: 'AI' },
      date: '2026-10-22',
      title: {
        fr: "Cadence inaugure à Munich la première plateforme d'IA souveraine d'Europe dédiée à la conception de semiconducteurs, avec des systèmes NVIDIA Vera et Grace",
        en: "Cadence launches in Munich Europe's first sovereign AI platform for semiconductor design, powered by NVIDIA Vera and Grace systems"
      },
      source: "Design And Reuse"
    },
    {
      id: 75,
      topic: 'nvidia',
      topicLabel: { fr: 'NVIDIA', en: 'NVIDIA' },
      date: '2026-10-22',
      title: {
        fr: "Google Cloud et NVIDIA annoncent la disponibilité générale de l'infrastructure Vera Rubin, avec une expansion prévue en Europe — jusqu'à 960 000 GPU Rubin déployés",
        en: "Google Cloud and NVIDIA announce general availability of Vera Rubin infrastructure, with planned expansion to Europe — up to 960,000 Rubin GPUs to be deployed"
      },
      source: "NVIDIA Blog"
    },
    {
      id: 70,
      topic: 'nvidia',
      topicLabel: { fr: 'NVIDIA', en: 'NVIDIA' },
      date: '2026-10-21',
      title: {
        fr: "GTC Berlin : NVIDIA, Nokia et les grands opérateurs télécoms transforment les réseaux en plateformes d'IA distribuée — jusqu'à 100 000 sites par opérateur",
        en: "GTC Berlin: NVIDIA, Nokia and leading telecom operators turn networks into distributed AI platforms — up to 100,000 sites per operator"
      },
      source: "NVIDIA Newsroom"
    },
    {
      id: 71,
      topic: 'ia',
      topicLabel: { fr: 'IA', en: 'AI' },
      date: '2026-10-20',
      title: {
        fr: "Made for Germany : Siemens, Deutsche Bank et 150 entreprises visent 850 milliards d'euros d'investissements d'ici 2028 — IA, énergie et défense en tête",
        en: "Made for Germany: Siemens, Deutsche Bank and 150 companies target 850 billion euros of investment by 2028 — AI, energy and defense first"
      },
      source: "Reuters"
    },
    {
      id: 72,
      topic: 'hpc',
      topicLabel: { fr: 'HPC', en: 'HPC' },
      date: '2026-10-19',
      title: {
        fr: "Record : NVIDIA simule 104 qubits tolérants aux fautes sur JUPITER, le supercalculateur exascale européen de Jülich",
        en: "Record: NVIDIA simulates 104 fault-tolerant qubits on JUPITER, Europe's exascale supercomputer at Jülich"
      },
      source: "NVIDIA Blog"
    },
    {
      id: 67,
      topic: 'dc',
      topicLabel: { fr: 'Datacenter', en: 'Datacenter' },
      date: '2026-10-20',
      title: {
        fr: "Nscale en pourparlers avec Anthropic pour un contrat cloud de 45 milliards de dollars — le campus Monarch et ses 460 MW en Vera Rubin au cœur du deal",
        en: "Nscale in talks with Anthropic for a 45 billion dollar cloud contract — the Monarch campus and its 460 MW of Vera Rubin at the heart of the deal"
      },
      source: "Bloomberg"
    },
    {
      id: 68,
      topic: 'ia',
      topicLabel: { fr: 'IA', en: 'AI' },
      date: '2026-10-18',
      title: {
        fr: "Scale Up Europe : le fonds européen de 5 milliards d'euros piloté par EQT a investi dans Mistral — 200 MW de capacité datacenter visés fin 2027",
        en: "Scale Up Europe: the 5 billion euro fund run by EQT has invested in Mistral — 200 MW of datacenter capacity targeted by end-2027"
      },
      source: "Rothschild & Co"
    },
    {
      id: 69,
      topic: 'nvidia',
      topicLabel: { fr: 'NVIDIA', en: 'NVIDIA' },
      date: '2026-10-20',
      title: {
        fr: "GTC Berlin : l'Union européenne de radiodiffusion collabore avec NVIDIA sur un cadre souverain pour les médias publics européens",
        en: "GTC Berlin: the European Broadcasting Union collaborates with NVIDIA on a sovereign framework for European public media"
      },
      source: "NVIDIA Blog"
    },
    {
      id: 64,
      topic: 'dc',
      topicLabel: { fr: 'Datacenter', en: 'Datacenter' },
      date: '2026-10-19',
      title: {
        fr: "Microsoft se retire du projet de datacenter de Nscale à Loughton faute d'électricité — le neocloud britannique prépare son IPO",
        en: "Microsoft withdraws from Nscale's Loughton datacenter project over power constraints — the British neocloud is preparing its IPO"
      },
      source: "The Telegraph"
    },
    {
      id: 65,
      topic: 'nvidia',
      topicLabel: { fr: 'NVIDIA', en: 'NVIDIA' },
      date: '2026-10-19',
      title: {
        fr: "GTC Berlin ouvre demain : NVIDIA doit détailler 2 milliards de dollars d'accords IA européens — Rubin et souveraineté numérique au menu",
        en: "GTC Berlin opens tomorrow: NVIDIA to detail 2 billion dollars in European AI deals — Rubin and digital sovereignty on the agenda"
      },
      source: "CNBC"
    },
    {
      id: 66,
      topic: 'ia',
      topicLabel: { fr: 'IA', en: 'AI' },
      date: '2026-10-17',
      title: {
        fr: "SemiAnalysis : NVIDIA écarte de GTC Berlin les neoclouds ayant ajouté des GPU AMD ou des TPU Google à leur offre",
        en: "SemiAnalysis: NVIDIA bars neoclouds that added AMD GPUs or Google TPUs to their offering from GTC Berlin"
      },
      source: "SemiAnalysis"
    },
    {
      id: 61,
      topic: 'nvidia',
      topicLabel: { fr: 'NVIDIA', en: 'NVIDIA' },
      date: '2026-10-16',
      title: {
        fr: "NVIDIA promet 2 milliards de dollars d'accords IA en Europe — après 8 milliards investis en un an, GTC Berlin ouvre la semaine prochaine",
        en: "NVIDIA pledges 2 billion dollars in European AI deals — after 8 billion invested in a year, GTC Berlin opens next week"
      },
      source: "Fortune"
    },
    {
      id: 62,
      topic: 'dc',
      topicLabel: { fr: 'Datacenter', en: 'Datacenter' },
      date: '2026-10-14',
      title: {
        fr: "Salience Labs lève 125 millions de dollars pour ses commutateurs photoniques destinés aux datacenters IA — AMD Ventures et Intel Capital au tour de table",
        en: "Salience Labs raises 125 million dollars for its photonic switches for AI datacenters — AMD Ventures and Intel Capital join the round"
      },
      source: "Business Wire"
    },
    {
      id: 63,
      topic: 'ia',
      topicLabel: { fr: 'IA', en: 'AI' },
      date: '2026-10-15',
      title: {
        fr: "Google, NVIDIA et Emerald AI lancent une alliance pour des datacenters IA capables de moduler leur consommation en temps réel",
        en: "Google, NVIDIA and Emerald AI launch an alliance for AI datacenters able to modulate their power consumption in real time"
      },
      source: "NVIDIA Blog"
    },
    {
      id: 51,
      topic: 'hpc',
      topicLabel: { fr: 'HPC', en: 'HPC' },
      date: '2026-10-02',
      title: {
        fr: "Alice Recoque : Bull assemble en France le supercalculateur exascale français, livraison en tranches des fin 2026",
        en: "Alice Recoque: Bull assembles France's exascale supercomputer in Angers, phased delivery from late 2026"
      },
      source: "Reuters"
    },
    {
      id: 31,
      topic: 'ia',
      topicLabel: { fr: 'IA', en: 'AI' },
      date: '2026-10-06',
      title: {
        fr: "Mistral presente Large 4, entraine sur 3 800 GPU europeens — l'inference souveraine a l'echelle de la preview",
        en: "Mistral unveils Large 4, trained on 3,800 European GPUs — sovereign inference at preview scale"
      },
      source: "Mistral AI"
    },
    {
      id: 34,
      topic: 'dc',
      topicLabel: { fr: 'Datacenter', en: 'Datacenter' },
      date: '2026-09-21',
      title: {
        fr: "Datacenters : Bruxelles propose un label europeen de performance energetique et publie les donnees 2024 declarees",
        en: "Datacenters: Brussels proposes European energy performance label and publishes 2024 reported data"
      },
      source: "Commission europeenne"
    },
    {
      id: 26,
      topic: 'ia',
      topicLabel: { fr: 'IA', en: 'AI' },
      date: '2026-09-10',
      title: {
        fr: "xAI double Colossus a Memphis : 200 000 GPU, toujours le plus grand cluster d'entrainement IA au monde",
        en: "xAI doubles Colossus in Memphis: 200,000 GPUs, still the world's largest AI training cluster"
      },
      source: "DataCenterDynamics"
    },
    {
      id: 30,
      topic: 'ia',
      topicLabel: { fr: 'IA', en: 'AI' },
      date: '2026-09-08',
      title: {
        fr: "Mistral AI leve 3 milliards d'euros dans un tour mene par Samsung — valorisation superieure a 21 milliards, record europeen",
        en: "Mistral AI raises 3 billion euros in round led by Samsung — valuation above 21 billion, European record"
      },
      source: "Bpifrance"
    },
    {
      id: 10,
      topic: 'ia',
      topicLabel: { fr: 'IA', en: 'AI' },
      date: '2026-08-02',
      title: {
        fr: "AI Act : les obligations de transparence s'appliquent depuis le 2 aout 2026 — le reglement avait ete adopte en 2024",
        en: "AI Act: transparency obligations apply since August 2, 2026 — the regulation was adopted in 2024"
      },
      source: "Commission europeenne"
    },
    {
      id: 20,
      topic: 'dc',
      topicLabel: { fr: 'Datacenter', en: 'Datacenter' },
      date: '2026-07-28',
      title: {
        fr: "67% des operateurs europeens citent l'acces a l'electricite comme defi numero 1 — prime de rarete sur les actifs raccordes",
        en: "67% of European operators cite electricity access as top challenge — scarcity premium on connected assets"
      },
      source: "EUDCA 2026"
    },
    {
      id: 22,
      topic: 'ia',
      topicLabel: { fr: 'IA', en: 'AI' },
      date: '2026-07-26',
      title: {
        fr: "Le marche de la consommation electrique des datacenters IA atteindra 70,6 Md$ d'ici 2035 — CAGR de 18,9%",
        en: "AI datacenter electricity consumption market to reach $70.6B by 2035 — 18.9% CAGR"
      },
      source: "Precedence Research"
    },
    {
      id: 23,
      topic: 'dc',
      topicLabel: { fr: 'Datacenter', en: 'Datacenter' },
      date: '2026-07-09',
      title: {
        fr: "Cerebras deploiera 200 MW de calcul IA en Europe d'ici fin 2027 — France et Nordiques, en partie pour OpenAI",
        en: "Cerebras to deploy 200 MW of AI compute in Europe by end 2027 — France and Nordics, partly for OpenAI"
      },
      source: "DataCenterDynamics"
    },
    {
      id: 1,
      topic: 'nvidia',
      topicLabel: { fr: 'NVIDIA', en: 'NVIDIA' },
      date: '2026-07-04',
      title: {
        fr: "NVIDIA, premiere capitalisation mondiale : le titre depasse 4 700 milliards de dollars debut juillet",
        en: "NVIDIA tops world market cap: stock surpasses $4.7 trillion in early July"
      },
      source: "Reuters"
    },
    {
      id: 54,
      topic: 'dc',
      topicLabel: { fr: 'Datacenter', en: 'Datacenter' },
      date: '2026-06-04',
      title: {
        fr: "Ardian et Verne annoncent un campus de 500 MW en Ile-de-France — 5 milliards d'euros, premiere tranche de 200 MW en 2030",
        en: "Ardian and Verne announce 500 MW campus in Ile-de-France — 5 billion euros, first 200 MW phase by 2030"
      },
      source: "Les Echos"
    },
    {
      id: 45,
      topic: 'nvidia',
      topicLabel: { fr: 'NVIDIA', en: 'NVIDIA' },
      date: '2026-06-02',
      title: {
        fr: "NVIDIA lance DSX, sa plateforme de conception et d'exploitation des AI factories avec optimisation energetique",
        en: "NVIDIA launches DSX, its AI factory design and operations platform with energy optimization"
      },
      source: "NVIDIA"
    },
    {
      id: 32,
      topic: 'dc',
      topicLabel: { fr: 'Datacenter', en: 'Datacenter' },
      date: '2026-06-01',
      title: {
        fr: "Choose France : le Campus IA etendu a 3 GW — MGX engage 7,5 milliards d'euros pour un second site a selectionner",
        en: "Choose France: AI Campus extended to 3 GW — MGX commits 7.5 billion euros for a second site to be selected"
      },
      source: "Bpifrance"
    },
    {
      id: 37,
      topic: 'nvidia',
      topicLabel: { fr: 'NVIDIA', en: 'NVIDIA' },
      date: '2026-06-01',
      title: {
        fr: "Vera Rubin en production depuis juin : 3,6 ExaFLOPS FP4 par rack, les 600 kW attendus avec le NVL576 en 2027",
        en: "Vera Rubin in production since June: 3.6 ExaFLOPS FP4 per rack, 600 kW expected with NVL576 in 2027"
      },
      source: "NVIDIA"
    },
    {
      id: 43,
      topic: 'nvidia',
      topicLabel: { fr: 'NVIDIA', en: 'NVIDIA' },
      date: '2026-05-15',
      title: {
        fr: "NVIDIA : les revenus reseau explosent (+199% sur un an), portes par Spectrum-X et l'Ethernet 800 Gb/s",
        en: "NVIDIA: networking revenue soars (+199% year-on-year), driven by Spectrum-X and 800 Gb/s Ethernet"
      },
      source: "NVIDIA"
    },
    {
      id: 56,
      topic: 'dc',
      topicLabel: { fr: 'Datacenter', en: 'Datacenter' },
      date: '2026-05-14',
      title: {
        fr: "Blackstone introduit en Bourse son trust d'infrastructure digitale BXDC — des datacenters stabilises loues aux hyperscalers",
        en: "Blackstone lists digital infrastructure trust BXDC — stabilized datacenters leased to hyperscalers"
      },
      source: "CNBC"
    },
    {
      id: 57,
      topic: 'dc',
      topicLabel: { fr: 'Datacenter', en: 'Datacenter' },
      date: '2026-05-07',
      title: {
        fr: "Dette privee : les prets aux infrastructures IA atteignent 200 milliards de dollars — la BRI anticipe 600 milliards d'ici 2030",
        en: "Private debt: loans to AI infrastructure reach $200 billion — BIS forecasts $600 billion by 2030"
      },
      source: "BRI"
    },
    {
      id: 17,
      topic: 'nvidia',
      topicLabel: { fr: 'NVIDIA', en: 'NVIDIA' },
      date: '2026-03-16',
      title: {
        fr: "HBM4 : 36 GB par stack en 12-Hi des 2026, 48 GB en 16-Hi en 2027 pour les GPU NVIDIA Rubin",
        en: "HBM4: 36 GB per stack in 12-Hi from 2026, 48 GB in 16-Hi in 2027 for NVIDIA Rubin GPUs"
      },
      source: "Micron"
    },
    {
      id: 21,
      topic: 'nvidia',
      topicLabel: { fr: 'NVIDIA', en: 'NVIDIA' },
      date: '2026-03-16',
      title: {
        fr: "800 V DC : NVIDIA et l'OCP standardisent l'alimentation des racks IA — des convertisseurs 800 V vers 6 V devoiles",
        en: "800 V DC: NVIDIA and OCP standardize AI rack power — 800V-to-6V converters unveiled"
      },
      source: "Navitas"
    },
    {
      id: 46,
      topic: 'dc',
      topicLabel: { fr: 'Datacenter', en: 'Datacenter' },
      date: '2026-03-11',
      title: {
        fr: "Digital Realty obtient le feu vert pour MRS6 a Marseille : 50 MW pour 700 millions d'euros, serveurs en ligne vers 2028",
        en: "Digital Realty gets green light for MRS6 in Marseille: 50 MW for 700 million euros, servers online around 2028"
      },
      source: "DataCenterDynamics"
    },
    {
      id: 44,
      topic: 'ia',
      topicLabel: { fr: 'IA', en: 'AI' },
      date: '2026-02-06',
      title: {
        fr: "Donnees de sante : la France quitte Azure pour un cloud qualifie SecNumCloud — bascule complete visee fin 2026",
        en: "Health data: France moves off Azure to SecNumCloud-qualified cloud — full migration targeted by end 2026"
      },
      source: "CIO"
    },
    {
      id: 39,
      topic: 'nvidia',
      topicLabel: { fr: 'NVIDIA', en: 'NVIDIA' },
      date: '2026-02-04',
      title: {
        fr: "Deutsche Telekom et NVIDIA mettent en service l'Industrial AI Cloud de Munich — 10 000 GPU Blackwell pour l'industrie",
        en: "Deutsche Telekom and NVIDIA bring Munich Industrial AI Cloud online — 10,000 Blackwell GPUs for industry"
      },
      source: "Deutsche Telekom"
    },
    {
      id: 50,
      topic: 'ia',
      topicLabel: { fr: 'IA', en: 'AI' },
      date: '2026-01-22',
      title: {
        fr: "Souverainete numerique : le Parlement europeen appelle au cloud souverain et a des investissements dans les datacenters europeens",
        en: "Digital sovereignty: European Parliament calls for sovereign cloud and investment in European datacenters"
      },
      source: "Parlement europeen"
    },
    {
      id: 38,
      topic: 'dc',
      topicLabel: { fr: 'Datacenter', en: 'Datacenter' },
      date: '2025-12-15',
      title: {
        fr: "Irlande : fin du gel des raccordements datacenters a Dublin — les nouveaux projets doivent apporter production renouvelable et flexibilite",
        en: "Ireland: Dublin datacenter grid connection freeze lifted — new projects must bring renewable generation and flexibility"
      },
      source: "DataCenterDynamics"
    },
    {
      id: 49,
      topic: 'dc',
      topicLabel: { fr: 'Datacenter', en: 'Datacenter' },
      date: '2025-11-19',
      title: {
        fr: "Brookfield : le fonds infrastructure IA vise 10 milliards de dollars, 5 milliards deja engages fin 2025",
        en: "Brookfield: AI infrastructure fund targets $10 billion, $5 billion already committed end of 2025"
      },
      source: "Brookfield"
    },
    {
      id: 42,
      topic: 'hpc',
      topicLabel: { fr: 'HPC', en: 'HPC' },
      date: '2025-11-07',
      title: {
        fr: "JUPITER : l'exascale europeen ouvert aux chercheurs et aux entreprises via sa AI Factory depuis fin 2025",
        en: "JUPITER: Europe's exascale supercomputer open to researchers and businesses via its AI Factory since late 2025"
      },
      source: "EuroHPC"
    },
    {
      id: 9,
      topic: 'hpc',
      topicLabel: { fr: 'HPC', en: 'HPC' },
      date: '2025-06-12',
      title: {
        fr: "AMD lance l'Instinct MI355X : 288 GB de HBM3E et 10 petaFLOPS FP8 face aux GPU NVIDIA Blackwell",
        en: "AMD launches Instinct MI355X: 288 GB HBM3E and 10 petaFLOPS FP8 against NVIDIA Blackwell GPUs"
      },
      source: "AMD"
    },
    {
      id: 14,
      topic: 'nvidia',
      topicLabel: { fr: 'NVIDIA', en: 'NVIDIA' },
      date: '2025-03-18',
      title: {
        fr: "Blackwell Ultra : jusqu'a 145 kW par rack, le refroidissement liquide devient la norme des datacenters IA",
        en: "Blackwell Ultra: up to 145 kW per rack, liquid cooling becomes the norm for AI datacenters"
      },
      source: "NVIDIA"
    },
    {
      id: 7,
      topic: 'ia',
      topicLabel: { fr: 'IA', en: 'AI' },
      date: '2025-03-03',
      title: {
        fr: "Anthropic leve 3,5 milliards de dollars a 61,5 milliards de valorisation — sa plus grande levee de fonds",
        en: "Anthropic raises $3.5 billion at $61.5 billion valuation — its largest funding round"
      },
      source: "Anthropic"
    },
    {
      id: 8,
      topic: 'dc',
      topicLabel: { fr: 'Datacenter', en: 'Datacenter' },
      date: '2024-05-12',
      title: {
        fr: "Microsoft investit 4 milliards d'euros dans les datacenters francais — nouveau site pres de Mulhouse, extensions a Paris et Marseille",
        en: "Microsoft invests 4 billion euros in French datacenters — new site near Mulhouse, expansions in Paris and Marseille"
      },
      source: "Microsoft"
    },
    {
      id: 6,
      topic: 'nvidia',
      topicLabel: { fr: 'NVIDIA', en: 'NVIDIA' },
      date: '2024-03-18',
      title: {
        fr: "NVIDIA presente Blackwell : jusqu'a 4x le H100 selon le constructeur, 120 kW par baie GB200 NVL72",
        en: "NVIDIA unveils Blackwell: up to 4x H100 per the vendor, 120 kW per GB200 NVL72 rack"
      },
      source: "NVIDIA"
    }
  ];

  const filters = [
    { key: 'all', label: { fr: 'Tout', en: 'All' } },
    { key: 'hpc', label: { fr: 'HPC', en: 'HPC' } },
    { key: 'ia', label: { fr: 'IA', en: 'AI' } },
    { key: 'dc', label: { fr: 'Datacenter', en: 'Datacenter' } },
    { key: 'nvidia', label: { fr: 'NVIDIA', en: 'NVIDIA' } }
  ];

  const filteredNews = activeFilter === 'all'
    ? newsItems
    : newsItems.filter(item => item.topic === activeFilter);

  // Single source of truth: data/blogPosts.json (also feeds sitemap.xml and feed.xml).
  // Per-post href resolves to the real EN page when one exists, otherwise falls back
  // to the FR page (never links to a slug that doesn't correspond to an actual file).
  //
  // Articles are grouped by strategic pole (not by month) for readability — a reader
  // scanning the blog should immediately see which fund strategy an article belongs to.
  const FUND_LEVEL_SLUGS = new Set([
    'scsp-vs-raif-vehicule-investissement-luxembourgeois',
    'gestion-fonds-18-agents-ia'
  ]);

  const POLE_ORDER = ['titan', 'hospitality', 'residential', 'ccapital', 'fund'] as const;
  type PoleKey = typeof POLE_ORDER[number];

  const POLE_LABELS: Record<PoleKey, { fr: string; en: string }> = {
    titan: { fr: 'TITAN DC AI', en: 'TITAN DC AI' },
    hospitality: { fr: 'Hôtellerie Premium', en: 'Premium Hospitality' },
    residential: { fr: 'Résidentiel & Flex Living', en: 'Residential & Flex Living' },
    ccapital: { fr: 'C.CAPITAL', en: 'C.CAPITAL' },
    fund: { fr: 'Fonds & Gouvernance', en: 'Fund & Governance' },
  };

  const getPole = (post: typeof blogPosts[number]): PoleKey => {
    if (post.category === 'Hospitality') return 'hospitality';
    if (post.category === 'Residential') return 'residential';
    if (post.category === 'C.CAPITAL') return 'ccapital';
    if (FUND_LEVEL_SLUGS.has(post.frSlug)) return 'fund';
    return 'titan';
  };

  const articles = [...blogPosts]
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0))
    .map((post) => {
      const hasEn = Boolean(post.enSlug);
      const href = (language === 'en' && hasEn)
        ? `/en/blog/${post.enSlug}`
        : `/blog/${post.frSlug}`;
      const localizedTitle = (post.title as Record<string, string>)[language] ?? post.title.fr;
      const localizedExcerpt = (post.excerpt as Record<string, string>)[language] ?? post.excerpt.fr;
      return {
        key: post.frSlug,
        href,
        title: localizedTitle,
        excerpt: localizedExcerpt,
        date: post.date,
        category: post.category,
        readTime: post.readTime,
        pole: getPole(post)
      };
    });

  // Group articles by strategic pole (dates stay sorted desc within each pole)
  const groupedByPole = articles.reduce((acc, article) => {
    if (!acc[article.pole]) {
      acc[article.pole] = [];
    }
    acc[article.pole].push(article);
    return acc;
  }, {} as Record<PoleKey, typeof articles>);

  // Only render poles that actually have published articles, in the fixed strategic order
  const activePoles = POLE_ORDER.filter((pole) => (groupedByPole[pole]?.length ?? 0) > 0);

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://finxiacapital.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": language === 'fr' ? "Blog" : "Blog",
        "item": language === 'fr' ? "https://finxiacapital.com/blog/" : "https://finxiacapital.com/en/blog/"
      }
    ]
  };

  return (
    <div data-testid="blog-index-page" className="pt-20">
      <SEO
        title={language === 'fr' ? "Blog — Recherche & Stratégie" : "Blog — Research & Strategy"}
        description={language === 'fr'
          ? "Analyses expertes sur les datacenters européens, optimisation PUE, réglementation EED et gestion de fonds alternative par IA — par FINXIA Capital."
          : "Expert analysis on European datacenters, PUE optimization, EED regulation and AI-driven alternative fund management — by FINXIA Capital."}
        canonical={language === 'fr' ? "https://finxiacapital.com/blog/" : "https://finxiacapital.com/en/blog/"}
        keywords="blog Finxia Capital, datacenter IA Europe, investissement alternatif, AI-native fund, thought leadership immobilier, analyse marché datacenters"
        breadcrumbSchema={breadcrumbSchema}
        language={language}
        ogLocale={language === 'fr' ? "fr_FR" : "en_US"}
        hreflangFr="https://finxiacapital.com/blog/"
        hreflangEn="https://finxiacapital.com/en/blog/"
        hreflangDefault="https://finxiacapital.com/blog/"
      />

      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="overline mb-4">
              {language === 'fr' ? 'Blog' : 'Blog'}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl mb-6">
              {language === 'fr' ? 'Recherche & Stratégie' : 'Research & Strategy'}
            </h1>
            <div className="section-divider mb-8" />
            <p className="text-slate-600 text-xl leading-relaxed">
              {language === 'fr'
                ? 'Analyses approfondies sur les datacenters IA, l\'investissement alternatif et l\'architecture AI-native. Thought leadership par l\'équipe Finxia Capital.'
                : 'In-depth analysis on AI datacenters, alternative investment and AI-native architecture. Thought leadership by the Finxia Capital team.'}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: Articles + News Sidebar */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* LEFT COLUMN — Articles (2/3) */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              <h2 className="font-serif text-2xl md:text-3xl text-slate-900 mb-2 pb-4 border-b-2 border-[#C45A3B]">
                {language === 'fr' ? 'Articles' : 'Articles'}
              </h2>
              
              {activePoles.map((poleKey) => {
                const poleArticles = groupedByPole[poleKey];
                return (
                  <div key={poleKey} className="mb-12 last:mb-0">
                    <div className="flex items-baseline gap-3 mb-4 mt-6 pb-2 border-b border-slate-200">
                      <h3 className="font-serif text-xl text-slate-900">
                        {POLE_LABELS[poleKey][language]}
                      </h3>
                      <span className="text-xs text-slate-400 font-medium">
                        {poleArticles.length} {poleArticles.length > 1 ? (language === 'fr' ? 'articles' : 'articles') : (language === 'fr' ? 'article' : 'article')}
                      </span>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      {poleArticles.map((article) => (
                        <Link
                          key={article.key}
                          href={article.href}
                          className="group bg-slate-50 card-hover flex flex-col"
                        >
                          <div className="p-6 flex-1 flex flex-col">
                            <div className="flex items-center gap-3 mb-3 text-xs">
                              <span className="text-[#C45A3B] font-medium uppercase tracking-wider">
                                {article.category}
                              </span>
                              <span className="text-slate-400">•</span>
                              <span className="text-slate-600">{article.readTime}</span>
                            </div>
                            
                            <h4 className="font-serif text-lg mb-3 group-hover:text-[#C45A3B] transition-colors leading-snug">
                              {article.title}
                            </h4>
                            
                            <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-1">
                              {article.excerpt}
                            </p>
                            
                            <div className="flex items-center justify-between pt-3 border-t border-slate-200">
                              <div className="flex items-center gap-2 text-xs text-slate-500">
                                <Calendar className="w-3.5 h-3.5" />
                                <time dateTime={article.date}>
                                  {new Date(article.date).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', {
                                    year: 'numeric',
                                    month: 'short',
                                    day: 'numeric'
                                  })}
                                </time>
                              </div>
                              <ArrowRight className="w-4 h-4 text-[#C45A3B] group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* RIGHT COLUMN — News Sidebar (1/3, sticky) */}
            <div className="lg:col-span-1 order-1 lg:order-2">
              <div className="lg:sticky lg:top-28 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto lg:overscroll-contain lg:pr-1">
                {/* News Feed — EN HAUT */}
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-5 h-5 text-[#C45A3B]" />
                  <h3 className="font-serif text-xl text-slate-900">
                    {language === 'fr' ? "Fil d'actualités" : 'News Feed'}
                  </h3>
                </div>
                <p className="text-xs text-slate-500 mb-4">
                  HPC • IA • DC • NVIDIA
                </p>
                
                {/* Filter buttons */}
                <div className="flex items-center gap-2 flex-wrap mb-4">
                  <Filter className="w-3.5 h-3.5 text-slate-400 mr-1" />
                  {filters.map((filter) => (
                    <button
                      key={filter.key}
                      onClick={() => setActiveFilter(filter.key)}
                      className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all ${
                        activeFilter === filter.key
                          ? 'bg-[#C45A3B] text-white'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {filter.label[language === 'fr' ? 'fr' : 'en']}
                    </button>
                  ))}
                </div>

                {/* News items — vertical list (scrollable) */}
                <div className="space-y-3 mb-6 max-h-[60vh] overflow-y-auto overscroll-contain pr-1">
                  {filteredNews.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                    >
                      <div className="flex-shrink-0">
                        <span className={`inline-block px-2 py-0.5 text-[10px] font-semibold rounded uppercase tracking-wider ${
                          item.topic === 'nvidia' ? 'bg-green-100 text-green-700' :
                          item.topic === 'hpc' ? 'bg-purple-100 text-purple-700' :
                          item.topic === 'ia' ? 'bg-blue-100 text-blue-700' :
                          'bg-orange-100 text-orange-700'
                        }`}>
                          {item.topicLabel[language === 'fr' ? 'fr' : 'en']}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium text-slate-900 leading-snug mb-1">
                          {item.title[language === 'fr' ? 'fr' : 'en']}
                        </p>
                        <div className="flex items-center gap-2 text-[10px] text-slate-500">
                          <span>{item.source}</span>
                          <span>•</span>
                          <time dateTime={item.date}>
                            {new Date(item.date).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', {
                              day: 'numeric',
                              month: 'short'
                            })}
                          </time>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Podcast Teaser — APRÈS les actualités */}
                <div className="p-4 bg-[#1E2A3A] rounded-xl text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src="/images/finxia-podcast-cover.png"
                      alt="Finxia Capital Insights"
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div>
                      <p className="text-xs text-[#C45A3B] font-semibold uppercase tracking-wider">Podcast</p>
                      <p className="text-sm font-medium">Finxia Capital Insights</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 mb-3">
                    {language === 'fr'
                      ? "Épisode 1 : L'électricité, le vrai goulot d'étranglement de l'IA en France"
                      : "Episode 1: Electricity, the Real Bottleneck of AI in France"}
                  </p>
                  <Link href="/podcast/" className="text-xs font-medium text-[#C45A3B] hover:text-white transition-colors inline-flex items-center gap-1">
                    {language === 'fr' ? 'Écouter' : 'Listen'}
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#1E2A3A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl mb-4">
            {language === 'fr' 
              ? 'Recevoir nos analyses par email'
              : 'Receive our analysis by email'}
          </h2>
          <p className="text-slate-300 mb-6">
            {language === 'fr'
              ? 'Analyses exclusives sur les actifs alternatifs et l\'IA en gestion de portefeuille.'
              : 'Exclusive analysis on alternative assets and AI in portfolio management.'}
          </p>
          <Link
            href="/newsletter"
            className="btn-primary inline-flex items-center gap-2"
          >
            {language === 'fr' ? "S'inscrire à la newsletter" : 'Subscribe to Newsletter'}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
