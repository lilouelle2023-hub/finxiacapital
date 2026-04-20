import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { 
  TrendingDown, 
  CreditCard, 
  Settings, 
  Leaf,
  Shield,
  CheckCircle
} from 'lucide-react';
import SEO from '@/components/SEO';

export default function GovernancePage() {
  const context = useLanguage();
  const language = context?.language || 'fr';

  const riskDimensions = [
    {
      id: 'market-risk',
      icon: TrendingDown, 
      title: language === 'fr' ? 'Risque de Marché' : 'Market Risk', 
      text: language === 'fr'
        ? 'Suivi quotidien des valorisations, des cap rates de marché et des spreads de crédit par nos agents IA de monitoring. Alertes automatisées sur tout mouvement dépassant nos seuils de tolérance.'
        : 'Daily monitoring of valuations, market cap rates and credit spreads by our AI monitoring agents. Automated alerts on any movement exceeding our tolerance thresholds.'
    },
    {
      id: 'credit-risk',
      icon: CreditCard, 
      title: language === 'fr' ? 'Risque de Crédit' : 'Credit Risk', 
      text: language === 'fr'
        ? 'Monitoring en temps réel des ratios LTV, DSCR et ICR sur l\'ensemble des structures de financement. Reporting covenant J-30 automatique.'
        : 'Real-time monitoring of LTV, DSCR and ICR ratios across all financing structures. Automatic D-30 covenant reporting.'
    },
    {
      id: 'operational-risk',
      icon: Settings, 
      title: language === 'fr' ? 'Risque Opérationnel' : 'Operational Risk', 
      text: language === 'fr'
        ? 'Supervision du NOI actif par actif en temps réel via intégration BMS et Yardi. Détection d\'anomalies par machine learning. Alertes de vacance locative J-90.'
        : 'Real-time asset-by-asset NOI supervision via BMS and Yardi integration. Machine learning anomaly detection. D-90 vacancy alerts.'
    },
    {
      id: 'esg-risk',
      icon: Leaf, 
      title: language === 'fr' ? 'Risque ESG' : 'ESG Risk', 
      text: language === 'fr'
        ? 'Suivi de la progression BREEAM et LEED sur l\'ensemble du portefeuille immobilier. Conformité SFDR Article 8 documentée en continu. Reporting ESG trimestriel automatisé.'
        : 'Tracking of BREEAM and LEED progression across the real estate portfolio. Continuous SFDR Article 8 compliance documentation. Automated quarterly ESG reporting.'
    },
  ];

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Accueil",
        "item": "https://finxiacapital.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": language === 'fr' ? "Gouvernance & Risques" : "Governance & Risks",
        "item": "https://finxiacapital.com/governance"
      }
    ]
  };

  return (
    <div data-testid="governance-page" className="pt-20">
      <SEO
        title={language === 'fr' ? "Gouvernance & Risques — Framework & Structure SCSp" : "Governance & Risks — Framework & SCSp Structure"}
        description={language === 'fr'
          ? "Gouvernance rigoureuse et gestion des risques par IA. Structure SCSp Luxembourg. Surveillance 24/7 par agents IA. Transparence totale pour investisseurs institutionnels."
          : "Rigorous governance and AI-powered risk management. Luxembourg SCSp structure. 24/7 monitoring by AI agents. Full transparency for institutional investors."}
        canonical="https://finxiacapital.com/governance/"
        keywords="gouvernance fonds alternatif Luxembourg, SCSp gestion risques, Green Bond ESG datacenter, surveillance IA temps réel"
        breadcrumbSchema={breadcrumbSchema}
        language="fr"
        ogLocale="fr_FR"
        hreflangFr="https://finxiacapital.com/governance/"
        hreflangEn="https://finxiacapital.com/en/governance/"
        hreflangDefault="https://finxiacapital.com/governance/"
      />

      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="overline mb-4">
              {language === 'fr' ? 'Gouvernance & Risques' : 'Governance & Risks'}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl mb-6">
              {language === 'fr' 
                ? 'Une Discipline de Risque au Cœur de Chaque Décision'
                : 'Risk Discipline at the Heart of Every Decision'}
            </h1>
            <div className="section-divider mb-8" />
            <p className="text-slate-600 text-xl leading-relaxed">
              {language === 'fr'
                ? 'La gestion du risque n\'est pas un post-traitement chez FINXIA Capital. C\'est un principe d\'architecture fondamental de chaque stratégie, intégré dès la structuration.'
                : 'Risk management is not a post-process at FINXIA Capital. It\'s a fundamental architectural principle of each strategy, integrated from structuring.'}
            </p>
          </div>
        </div>
      </section>

      {/* Risk Framework */}
      <section className="py-24 md:py-32 bg-white" data-testid="framework-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="overline mb-4">
              {language === 'fr' ? 'Notre Cadre de Risque' : 'Our Risk Framework'}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              {language === 'fr' ? 'Quatre Dimensions de Contrôle' : 'Four Control Dimensions'}
            </h2>
            <div className="section-divider mx-auto mb-8" />
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              {language === 'fr'
                ? 'FINXIA Capital opère selon un cadre de gestion des risques à quatre dimensions, aligné sur les meilleures pratiques des gérants institutionnels de classe mondiale.'
                : 'FINXIA Capital operates according to a four-dimensional risk management framework, aligned with world-class institutional manager best practices.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {riskDimensions.map((item) => (
              <div 
                key={item.id}
                className="bg-slate-50 p-8 border-l-4 border-[#C45A3B] card-hover"
                data-testid={`risk-dimension-${item.id}`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#C45A3B]/10 rounded-full flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-[#C45A3B]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-xl">{item.title}</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Structure SCSp & Supervision */}
      <section className="py-24 md:py-32 bg-[#1E2A3A] text-white" data-testid="structure-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="overline text-[#C45A3B] mb-4">
                {language === 'fr' ? 'Structure SCSp & Gouvernance' : 'SCSp Structure & Governance'}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
                {language === 'fr' ? 'Cadre Réglementaire Institutionnel' : 'Institutional Regulatory Framework'}
              </h2>
              <div className="section-divider mb-8" />
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                {language === 'fr'
                  ? 'FINXIA Capital est structurée comme une Société en Commandite Spéciale (SCSp) luxembourgeoise, garantissant flexibilité opérationnelle et gouvernance rigoureuse. Structure propriétaire financée par capital propre (Founders\' Equity), levier dette senior au niveau des actifs, et Green Bond dédié pour le pôle TITAN.'
                  : 'FINXIA Capital is structured as a Luxembourg Special Limited Partnership (SCSp), ensuring operational flexibility and rigorous governance. Proprietary structure financed by equity capital (Founders\' Equity), senior debt leverage at asset level, and dedicated Green Bond for the TITAN division.'}
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C45A3B] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">
                    {language === 'fr' ? 'Comité d\'investissement indépendant' : 'Independent investment committee'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C45A3B] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">
                    {language === 'fr' ? 'Comité des risques trimestriel' : 'Quarterly risk committee'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C45A3B] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">
                    {language === 'fr' ? 'Fonction de compliance dédiée' : 'Dedicated compliance function'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C45A3B] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">
                    {language === 'fr' ? 'Reporting institutionnel sous 45 jours' : 'Institutional-grade reporting within 45 days'}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Committee Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <p className="text-[#C45A3B] font-medium uppercase tracking-wider text-sm mb-4">
                {language === 'fr' ? 'Comité d\'investissement' : 'Investment Committee'}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl mb-6">
                {language === 'fr' ? 'Gouvernance & Comité d\'investissement' : 'Governance & Investment Committee'}
              </h2>
              <div className="w-16 h-1 bg-[#C45A3B] mb-8" />
            </div>

            <div className="prose prose-slate prose-lg max-w-none mb-8">
              <p className="text-slate-700 leading-relaxed">
                {language === 'fr'
                  ? "Finxia Capital est dotée d'un comité d'investissement indépendant chargé d'approuver chaque décision d'allocation. Le comité se réunit avant tout engagement de capital et produit un procès-verbal consultable par les investisseurs sur demande."
                  : "Finxia Capital has an independent investment committee responsible for approving each allocation decision. The committee meets before any capital commitment and produces minutes available to investors upon request."}
              </p>
            </div>

            <div className="bg-slate-50 p-8 border-l-4 border-[#C45A3B]">
              <h3 className="font-serif text-xl mb-4 text-slate-800">
                {language === 'fr' ? 'Composition du Comité' : 'Committee Composition'}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {language === 'fr'
                  ? "La composition complète du comité est communiquée aux investisseurs qualifiés sur demande — contact : "
                  : "The complete committee composition is communicated to qualified investors upon request — contact: "}
                <a href="mailto:invest@finxiacapital.com" className="text-[#C45A3B] hover:underline font-medium">
                  invest@finxiacapital.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Framework Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 border border-slate-200">
              <h3 className="font-serif text-xl mb-4 text-slate-800">
                {language === 'fr' ? 'Cadre Réglementaire' : 'Regulatory Framework'}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {language === 'fr'
                  ? "Finxia Capital opère dans le cadre réglementaire européen applicable aux fonds d'investissement alternatifs. Documents réglementaires disponibles sur demande auprès des investisseurs qualifiés."
                  : "Finxia Capital operates within the European regulatory framework applicable to alternative investment funds. Regulatory documents available upon request to qualified investors."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-24 md:py-32 bg-[#1E2A3A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 p-10 border border-white/10">
              <Shield className="w-16 h-16 text-[#C45A3B] mb-6" strokeWidth={1} />
              <h3 className="font-serif text-2xl text-white mb-4">
                {language === 'fr' ? 'Notre Engagement' : 'Our Commitment'}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {language === 'fr'
                  ? 'La protection du capital et la gestion des risques sont au cœur de tout ce que nous faisons. Notre cadre institutionnel assure que les intérêts des investisseurs sont toujours protégés.'
                  : 'Capital protection and risk management are at the heart of everything we do. Our institutional framework ensures that investor interests are always protected.'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
