import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';

const translations = {
  en: {
    // Navigation
    nav: {
      about: 'About',
      strategies: 'Strategies',
      governance: 'Governance & Risks',
      europeanApproach: 'European Approach',
      investors: 'Investors',
      contact: 'Contact',
    },
    // European Approach
    europe: {
      title: 'European Approach',
      subtitle: 'Focused Investment in Key Southern European Markets',
      intro: 'FINXIA CAPITAL focuses on three strategic European markets where we combine deep local expertise with institutional discipline to create lasting value.',
      france: 'France',
      franceText: 'Our core market with strong positions in AI datacenter infrastructure, premium hospitality, and urban residential. Deep network and proven track record across major French metropolitan areas.',
      spain: 'Spain',
      spainText: 'Dynamic market with attractive risk-adjusted opportunities in datacenter and hospitality sectors. Focus on prime locations in major cities and tourist destinations.',
      italy: 'Italy',
      italyText: 'Selective investments in AI datacenters, premium urban hospitality, and residential assets. Targeting Milan, Rome, and Florence with disciplined value-add approach.',
      diversificationTitle: 'Diversification Strategy',
      diversificationText: 'Our focused European approach provides natural diversification while maintaining concentration on markets where we have competitive advantages, local expertise, and established partnerships.',
      marketsLabel: 'Our Markets',
      marketsTitle: 'Investment Zones',
      keyCities: 'Key Cities',
      strategyFocus: 'Strategies',
      statCountries: 'Target Countries',
      statCities: 'European Metropolises',
      statStrategies: 'Real Estate Strategies',
      criteriaLabel: 'Selection Criteria',
      criteriaTitle: 'Our Market Selection Approach',
      criteriaText: 'We select our markets based on strict criteria of liquidity, market depth, and value creation potential.',
      criteria1: 'Liquid markets with institutional depth',
      criteria2: 'Positive demographic and economic dynamics',
      criteria3: 'Stable and transparent regulatory framework',
      criteria4: 'Access to quality local partners',
    },
    // Contact
    contact: {
      title: 'Contact',
      subtitle: 'We Welcome Your Inquiries',
      formTitle: 'Get in Touch',
      nameLabel: 'Full Name',
      namePlaceholder: 'Your name',
      emailLabel: 'Email Address',
      emailPlaceholder: 'your@email.com',
      companyLabel: 'Company / Institution',
      companyPlaceholder: 'Your company (optional)',
      investorTypeLabel: 'Investor Type',
      investorTypePlaceholder: 'Select investor type',
      messageLabel: 'Message',
      messagePlaceholder: 'How can we assist you?',
      submitButton: 'Send Message',
      submitting: 'Sending...',
      successTitle: 'Message Sent',
      successText: 'Thank you for your inquiry. We will respond within 48 hours.',
      errorText: 'An error occurred. Please try again or email us directly.',
      institutionalInvestor: 'Institutional Investor',
      familyOffice: 'Family Office',
      privateInvestor: 'Professional Private Investor',
      advisor: 'Financial Advisor',
      other: 'Other',
      addressTitle: 'Office',
      addressLine1: 'Luxembourg',
      addressLine2: 'Grand Duchy of Luxembourg',
      emailTitle: 'Email',
      email: 'contact@finxiacapital.com',
    },
  },
  fr: {
    // Navigation
    nav: {
      about: 'À Propos',
      strategies: 'Stratégies',
      governance: 'Gouvernance & Risques',
      europeanApproach: 'Approche Européenne',
      investors: 'Investisseurs',
      contact: 'Contact',
    },
    // European Approach
    europe: {
      title: 'Approche Européenne',
      subtitle: 'Investissement Ciblé sur les Marchés Clés d\'Europe du Sud',
      intro: 'FINXIA CAPITAL se concentre sur trois marchés européens stratégiques où nous combinons une expertise locale approfondie avec une discipline institutionnelle pour créer une valeur durable.',
      france: 'France',
      franceText: 'Notre marché cœur avec des positions fortes en datacenters IA, hôtellerie premium et résidentiel urbain. Réseau étendu et track record éprouvé sur les grandes métropoles françaises.',
      spain: 'Espagne',
      spainText: 'Marché dynamique avec des opportunités attractives ajustées au risque dans les secteurs datacenter et hôtelier. Focus sur les emplacements prime des grandes villes et destinations touristiques.',
      italy: 'Italie',
      italyText: 'Investissements sélectifs dans les datacenters IA, l\'hôtellerie urbaine premium et le résidentiel. Ciblage de Milan, Rome et Florence avec une approche value-add disciplinée.',
      diversificationTitle: 'Stratégie de Diversification',
      diversificationText: 'Notre approche européenne focalisée offre une diversification naturelle tout en maintenant la concentration sur les marchés où nous avons des avantages compétitifs, une expertise locale et des partenariats établis.',
      marketsLabel: 'Nos Marchés',
      marketsTitle: 'Zones d\'Investissement',
      keyCities: 'Villes Clés',
      strategyFocus: 'Stratégies',
      statCountries: 'Pays Cibles',
      statCities: 'Métropoles Européennes',
      statStrategies: 'Stratégies Immobilières',
      criteriaLabel: 'Critères de Sélection',
      criteriaTitle: 'Notre Approche de Sélection',
      criteriaText: 'Nous sélectionnons nos marchés selon des critères stricts de liquidité, de profondeur de marché et de potentiel de création de valeur.',
      criteria1: 'Marchés liquides avec profondeur institutionnelle',
      criteria2: 'Dynamique démographique et économique positive',
      criteria3: 'Cadre réglementaire stable et transparent',
      criteria4: 'Accès à des partenaires locaux de qualité',
    },
    // Contact
    contact: {
      title: 'Contact',
      subtitle: 'Nous Accueillons Vos Demandes',
      formTitle: 'Nous Contacter',
      nameLabel: 'Nom Complet',
      namePlaceholder: 'Votre nom',
      emailLabel: 'Adresse Email',
      emailPlaceholder: 'votre@email.com',
      companyLabel: 'Société / Institution',
      companyPlaceholder: 'Votre société (optionnel)',
      investorTypeLabel: 'Type d\'Investisseur',
      investorTypePlaceholder: 'Sélectionner le type',
      messageLabel: 'Message',
      messagePlaceholder: 'Comment pouvons-nous vous aider ?',
      submitButton: 'Envoyer le Message',
      submitting: 'Envoi en cours...',
      successTitle: 'Message Envoyé',
      successText: 'Merci pour votre demande. Nous vous répondrons sous 48 heures.',
      errorText: 'Une erreur s\'est produite. Veuillez réessayer ou nous contacter directement par email.',
      institutionalInvestor: 'Investisseur Institutionnel',
      familyOffice: 'Family Office',
      privateInvestor: 'Investisseur Privé Professionnel',
      advisor: 'Conseiller Financier',
      other: 'Autre',
      addressTitle: 'Bureau',
      addressLine1: 'Luxembourg',
      addressLine2: 'Grand-Duché de Luxembourg',
      emailTitle: 'Email',
      email: 'contact@finxiacapital.com',
    },
  },
};

// TypeScript type for the context
type LanguageContextType = {
  language: 'en' | 'fr';
  setLanguage: (lang: 'en' | 'fr') => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children, initialLanguage }: { children: React.ReactNode; initialLanguage?: 'en' | 'fr' }) => {
  // Detect language from URL pathname or use initialLanguage prop
  const [language, setLanguage] = useState<'en' | 'fr'>(() => {
    if (initialLanguage) {
      return initialLanguage;
    }
    if (typeof window !== 'undefined') {
      const pathname = window.location.pathname;
      return pathname.startsWith('/en') || pathname.startsWith('/en/') ? 'en' : 'fr';
    }
    return 'fr'; // Default to French on server-side
  });

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => {
      const newLang = prev === 'fr' ? 'en' : 'fr';
      
      // Update URL when toggling language
      if (typeof window !== 'undefined') {
        const currentPath = window.location.pathname;
        let newPath: string;
        
        if (newLang === 'en') {
          // Switch to English: add /en/ prefix
          newPath = currentPath.startsWith('/en') ? currentPath : `/en${currentPath}`;
        } else {
          // Switch to French: remove /en/ prefix
          newPath = currentPath.replace(/^\/en/, '') || '/';
        }
        
        window.history.pushState({}, '', newPath);
      }
      
      return newLang;
    });
  }, []);

  const t = useCallback(
    (key: string) => {
      const keys = key.split('.');
      let value: any = translations[language];
      for (const k of keys) {
        value = value?.[k];
      }
      return value || key;
    },
    [language]
  );

  const contextValue = useMemo(
    () => ({ language, setLanguage, toggleLanguage, t }),
    [language, toggleLanguage, t]
  );

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
