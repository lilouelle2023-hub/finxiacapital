import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';
import { 
  TrendingDown, 
  CreditCard, 
  Settings, 
  Leaf,
  Shield,
  CheckCircle
} from 'lucide-react';

export default function GovernancePage() {
  const { language } = useLanguage();

  const riskDimensions = [
    { 
      icon: TrendingDown, 
      title: language === 'fr' ? 'Risque de Marché' : 'Market Risk', 
      text: language === 'fr'
        ? 'Suivi quotidien des valorisations, des cap rates de marché et des spreads de crédit par nos agents IA de monitoring. Alertes automatisées sur tout mouvement dépassant nos seuils de tolérance.'
        : 'Daily monitoring of valuations, market cap rates and credit spreads by our AI monitoring agents. Automated alerts on any movement exceeding our tolerance thresholds.'
    },
    { 
      icon: CreditCard, 
      title: language === 'fr' ? 'Risque de Crédit' : 'Credit Risk', 
      text: language === 'fr'
        ? 'Monitoring en temps réel des ratios LTV, DSCR et ICR sur l\'ensemble des structures de financement. Reporting covenant J-30 automatique.'
        : 'Real-time monitoring of LTV, DSCR and ICR ratios across all financing structures. Automatic D-30 covenant reporting.'
    },
    { 
      icon: Settings, 
      title: language === 'fr' ? 'Risque Opérationnel' : 'Operational Risk', 
      text: language === 'fr'
        ? 'Supervision du NOI actif par actif en temps réel via intégration BMS et Yardi. Détection d\'anomalies par machine learning. Alertes de vacance locative J-90.'
        : 'Real-time asset-by-asset NOI supervision via BMS and Yardi integration. Machine learning anomaly detection. D-90 vacancy alerts.'
    },
    { 
      icon: Leaf, 
      title: language === 'fr' ? 'Risque ESG' : 'ESG Risk', 
      text: language === 'fr'
        ? 'Suivi de la progression BREEAM et LEED sur l\'ensemble du portefeuille immobilier. Conformité SFDR Article 8 documentée en continu. Reporting ESG trimestriel automatisé.'
        : 'Tracking of BREEAM and LEED progression across the real estate portfolio. Continuous SFDR Article 8 compliance documentation. Automated quarterly ESG reporting.'
    },
  ];

  return (
    <div data-testid="governance-page" className="pt-20">
      <Helmet>
        <title>Gouvernance & Risques · FINXIA Capital</title>
        <meta name="description" content="Cadre de risque institutionnel, structure SCSp et gouvernance rigoureuse. Découvrez notre approche de la gestion des risques." />
      </Helmet>

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
            {riskDimensions.map((item, index) => (
              <div 
                key={index}
                className="bg-slate-50 p-8 border-l-4 border-[#C45A3B] card-hover"
                data-testid={`risk-dimension-${index}`}
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
                    {language === 'fr' ? 'Reporting standards INREV sous 45 jours' : 'INREV reporting standards within 45 days'}
                  </span>
                </li>
              </ul>
            </div>
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
