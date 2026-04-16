import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  PieChart, 
  TrendingDown, 
  Calculator, 
  Activity, 
  Calendar, 
  Layers, 
  Shield,
  CheckCircle
} from 'lucide-react';

export default function RiskManagementPage() {
  const { t } = useLanguage();

  const riskItems = [
    { id: 'risk-diversification', icon: PieChart, title: t('risk.item1Title'), text: t('risk.item1Text') },
    { id: 'risk-market', icon: TrendingDown, title: t('risk.item2Title'), text: t('risk.item2Text') },
    { id: 'risk-valuation', icon: Calculator, title: t('risk.item3Title'), text: t('risk.item3Text') },
    { id: 'risk-monitoring', icon: Activity, title: t('risk.item4Title'), text: t('risk.item4Text') },
    { id: 'risk-reporting', icon: Calendar, title: t('risk.item5Title'), text: t('risk.item5Text') },
    { id: 'risk-governance', icon: Layers, title: t('risk.item6Title'), text: t('risk.item6Text') },
    { id: 'risk-compliance', icon: Shield, title: t('risk.item7Title'), text: t('risk.item7Text') },
  ];

  return (
    <div data-testid="risk-management-page" className="pt-20">
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="overline mb-4">{t('nav.riskManagement')}</p>
            <h1 className="font-serif text-4xl md:text-5xl mb-6">{t('risk.title')}</h1>
            <div className="section-divider mb-8" />
            <p className="text-slate-600 text-xl leading-relaxed">
              {t('risk.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 md:py-32 bg-white" data-testid="intro-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-slate-600 text-lg leading-relaxed">
              {t('risk.intro')}
            </p>
          </div>
        </div>
      </section>

      {/* Risk Framework Grid */}
      <section className="py-24 md:py-32 bg-slate-50" data-testid="framework-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {riskItems.map((item) => (
              <div 
                key={item.id}
                className="bg-white p-8 border-l-2 border-transparent hover:border-amber-700 transition-colors card-hover"
                data-testid={`risk-item-${item.id}`}
              >
                <item.icon className="w-10 h-10 text-slate-400 mb-6" strokeWidth={1.5} />
                <h3 className="font-serif text-xl mb-4">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-24 md:py-32 bg-slate-900 text-white" data-testid="commitment-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="overline text-amber-500 mb-4">{t('risk.commitment')}</p>
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">{t('risk.commitment')}</h2>
              <div className="section-divider mb-8" />
              <p className="text-slate-300 text-lg leading-relaxed">
                {t('risk.commitmentText')}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/5 p-6 border border-white/10">
                <CheckCircle className="w-8 h-8 text-amber-500 mb-4" />
                <p className="text-sm text-slate-300">LTV Discipline</p>
              </div>
              <div className="bg-white/5 p-6 border border-white/10">
                <CheckCircle className="w-8 h-8 text-amber-500 mb-4" />
                <p className="text-sm text-slate-300">DSCR Monitoring</p>
              </div>
              <div className="bg-white/5 p-6 border border-white/10">
                <CheckCircle className="w-8 h-8 text-amber-500 mb-4" />
                <p className="text-sm text-slate-300">Stress Testing</p>
              </div>
              <div className="bg-white/5 p-6 border border-white/10">
                <CheckCircle className="w-8 h-8 text-amber-500 mb-4" />
                <p className="text-sm text-slate-300">Ring-fencing</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
