import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Building2, Users, FileText, Mail, ArrowRight } from 'lucide-react';
import SEO from '@/components/SEO';

export default function InvestorsPage() {
  const context = useLanguage();
  const language = context?.language || 'fr';

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
        "name": language === 'fr' ? "Partenaires Institutionnels" : "Institutional Partners",
        "item": language === 'fr' ? "https://finxiacapital.com/investors" : "https://finxiacapital.com/en/investors"
      }
    ]
  };

  return (
    <div data-testid="investors-page" className="pt-20">
      <SEO
        title={language === 'fr' ? "Partenaires Institutionnels — FINXIA Capital SCSp Luxembourg" : "Institutional Partners — FINXIA Capital SCSp Luxembourg"}
        description={language === 'fr'
          ? "FINXIA Capital est un véhicule propriétaire SCSp luxembourgeois. Co-investissement TITAN DC AI et financement Green Bond pour investisseurs professionnels MiFID II."
          : "FINXIA Capital is a Luxembourg SCSp proprietary vehicle. TITAN DC AI co-investment and Green Bond financing for MiFID II professional investors."}
        canonical={language === 'fr' ? "https://finxiacapital.com/investors/" : "https://finxiacapital.com/en/investors/"}
        keywords={language === 'fr' 
          ? "FINXIA Capital SCSp, véhicule propriétaire Luxembourg, co-investissement TITAN DC AI, Green Bond datacenter, investisseurs professionnels MiFID II"
          : "FINXIA Capital SCSp, Luxembourg proprietary vehicle, TITAN DC AI co-investment, datacenter Green Bond, MiFID II professional investors"}
        breadcrumbSchema={breadcrumbSchema}
        language={language}
        ogLocale={language === 'fr' ? "fr_FR" : "en_US"}
        hreflangFr="https://finxiacapital.com/investors/"
        hreflangEn="https://finxiacapital.com/en/investors/"
        hreflangDefault="https://finxiacapital.com/investors/"
      />

      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[#C45A3B] font-medium uppercase tracking-wider text-sm mb-4">
              {language === 'fr' ? 'Partenaires Institutionnels' : 'Institutional Partners'}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl mb-6">
              {language === 'fr' 
                ? 'Partenaires Institutionnels'
                : 'Institutional Partners'}
            </h1>
            <div className="w-16 h-1 bg-[#C45A3B] mb-8" />
            <p className="text-slate-600 text-xl leading-relaxed">
              {language === 'fr'
                ? "FINXIA Capital est un véhicule d'investissement propriétaire structuré en SCSp luxembourgeoise. Notre capital est déployé sur conviction, sans collecte de fonds auprès d'investisseurs tiers."
                : "FINXIA Capital is a proprietary investment vehicle structured as a Luxembourg SCSp. Capital is deployed on conviction, without third-party fund raising."}
            </p>
          </div>
        </div>
      </section>

      {/* Section 1 - Structure Propriétaire */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-[#C45A3B]/10 rounded-lg">
                <Building2 className="w-6 h-6 text-[#C45A3B]" />
              </div>
              <div className="flex-1">
                <h2 className="font-serif text-3xl md:text-4xl mb-6">
                  {language === 'fr' ? 'Structure Propriétaire' : 'Proprietary Structure'}
                </h2>
              </div>
            </div>
            
            <div className="prose prose-slate prose-lg max-w-none">
              <p className="text-slate-700 leading-relaxed mb-4">
                {language === 'fr'
                  ? "FINXIA Capital opère en tant que véhicule propriétaire — le capital déployé est le capital propre du General Partner, structuré pour maximiser l'agilité opérationnelle et l'alignement stratégique. Cette architecture élimine les conflits d'intérêts inhérents aux structures de fonds traditionnels et permet une prise de décision d'investissement indépendante des cycles de levée."
                  : "FINXIA Capital operates as a proprietary vehicle — capital deployed is the General Partner's own capital, structured to maximize operational agility and strategic alignment. This architecture eliminates the conflicts of interest inherent in traditional fund structures and enables investment decision-making independent of fundraising cycles."}
              </p>
              <p className="text-slate-700 leading-relaxed">
                {language === 'fr'
                  ? "Pour la stratégie TITAN DC AI, le financement des acquisitions et transformations de datacenters est assuré par levier dette (dette sénior, dette mezzanine) et Green Bonds — conformément au cadre SFDR Article 9 visé pour cette stratégie."
                  : "For the TITAN DC AI strategy, acquisitions and datacenter transformation financing is provided through debt leverage (senior debt, mezzanine) and Green Bonds — in line with the targeted SFDR Article 9 classification for this strategy."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Co-investissement TITAN DC AI */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-[#C45A3B]/10 rounded-lg">
                <Users className="w-6 h-6 text-[#C45A3B]" />
              </div>
              <div className="flex-1">
                <h2 className="font-serif text-3xl md:text-4xl mb-6">
                  {language === 'fr' ? 'Co-investissement TITAN DC AI' : 'TITAN DC AI Co-Investment'}
                </h2>
              </div>
            </div>
            
            <div className="prose prose-slate prose-lg max-w-none">
              <p className="text-slate-700 leading-relaxed mb-4">
                {language === 'fr'
                  ? "FINXIA Capital ouvre des opportunités de co-investissement deal-by-deal aux partenaires institutionnels qualifiés pour la stratégie TITAN DC AI (acquisition et transformation de datacenters européens legacy en plateformes haute efficacité pour charges de travail IA)."
                  : "FINXIA Capital opens deal-by-deal co-investment opportunities to qualified institutional partners for the TITAN DC AI strategy (acquisition and transformation of legacy European datacenters into high-efficiency AI infrastructure platforms)."}
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                {language === 'fr'
                  ? "Ces opportunités sont réservées aux investisseurs professionnels au sens de MiFID II. Chaque opportunité de co-investissement est présentée individuellement, sans engagement de fonds global."
                  : "These opportunities are reserved for professional investors under MiFID II. Each co-investment opportunity is presented individually, with no global fund commitment required."}
              </p>
              <p className="text-slate-700 leading-relaxed">
                {language === 'fr'
                  ? "Pour toute discussion relative à une opportunité de co-investissement : "
                  : "For co-investment inquiries: "}
                <a href="mailto:contact@finxiacapital.com" className="text-[#C45A3B] hover:underline font-medium">
                  contact@finxiacapital.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Financement TITAN DC AI */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-[#C45A3B]/10 rounded-lg">
                <FileText className="w-6 h-6 text-[#C45A3B]" />
              </div>
              <div className="flex-1">
                <h2 className="font-serif text-3xl md:text-4xl mb-6">
                  {language === 'fr' 
                    ? 'Financement TITAN DC AI — Green Bonds & Dette' 
                    : 'TITAN DC AI Financing — Green Bonds & Debt'}
                </h2>
              </div>
            </div>
            
            <div className="prose prose-slate prose-lg max-w-none">
              <p className="text-slate-700 leading-relaxed mb-6">
                {language === 'fr'
                  ? "La stratégie TITAN DC AI est structurée pour mobiliser des financements ESG à conditions préférentielles :"
                  : "The TITAN DC AI strategy is structured to mobilize ESG financing at preferential terms:"}
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="text-[#C45A3B] mt-1">•</span>
                  <span>
                    {language === 'fr'
                      ? "Green Bonds (Principes ICMA — catégorie Efficient Buildings) : financement obligataire des projets de transformation datacenter brown-to-green"
                      : "Green Bonds (ICMA Principles — Efficient Buildings category): bond financing for brown-to-green datacenter transformation projects"}
                  </span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="text-[#C45A3B] mt-1">•</span>
                  <span>
                    {language === 'fr'
                      ? "Sustainability-Linked Loans : dette conditionnée à l'atteinte de KPIs PUE certifiés IPMVP Option C"
                      : "Sustainability-Linked Loans: debt conditioned on certified IPMVP Option C PUE KPIs"}
                  </span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="text-[#C45A3B] mt-1">•</span>
                  <span>
                    {language === 'fr'
                      ? "Dette sénior et mezzanine : structuration par actif, sans recours au véhicule SCSp"
                      : "Senior and mezzanine debt: asset-by-asset structuring, without recourse to the SCSp vehicle"}
                  </span>
                </li>
              </ul>

              <p className="text-slate-700 leading-relaxed mb-4">
                {language === 'fr'
                  ? "Les actifs TITAN DC AI visent la classification SFDR Article 9 et l'alignement avec la Taxonomie Verte Européenne (Règlement 2020/852)."
                  : "TITAN DC AI assets target SFDR Article 9 classification and alignment with the EU Taxonomy (Regulation 2020/852)."}
              </p>
              
              <p className="text-slate-700 leading-relaxed">
                {language === 'fr'
                  ? "Pour les partenaires financiers (banques, fonds de dette, investisseurs obligataires) : "
                  : "For financial partners (banks, debt funds, bond investors): "}
                <a href="mailto:contact@finxiacapital.com" className="text-[#C45A3B] hover:underline font-medium">
                  contact@finxiacapital.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Contact Institutionnel */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-[#C45A3B]/10 rounded-lg">
                <Mail className="w-6 h-6 text-[#C45A3B]" />
              </div>
              <div className="flex-1">
                <h2 className="font-serif text-3xl md:text-4xl mb-6">
                  {language === 'fr' ? 'Contact Institutionnel' : 'Institutional Contact'}
                </h2>
              </div>
            </div>
            
            <p className="text-slate-700 text-lg leading-relaxed mb-8">
              {language === 'fr'
                ? "Pour toute demande institutionnelle — co-investissement, financement, partenariat stratégique — veuillez contacter l'équipe FINXIA Capital directement."
                : "For any institutional inquiry — co-investment, financing, strategic partnership — please contact the FINXIA Capital team directly."}
            </p>

            <a 
              href="mailto:contact@finxiacapital.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#C45A3B] text-white font-medium rounded hover:bg-[#A04A2F] transition-colors"
            >
              {language === 'fr' ? 'Contacter FINXIA Capital' : 'Contact FINXIA Capital'}
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-slate-600 text-sm leading-relaxed max-w-4xl">
            {language === 'fr'
              ? "FINXIA Capital SCSp, Luxembourg. Ce contenu est fourni à titre informatif uniquement. Il ne constitue pas une offre de souscription ni un conseil en investissement. FINXIA Capital est réservé aux investisseurs professionnels au sens de la Directive MiFID II (2014/65/UE). FINXIA Capital n'est pas une plateforme de trading, de forex, ni un logiciel d'investissement automatisé."
              : "FINXIA Capital SCSp, Luxembourg. This content is provided for informational purposes only. It does not constitute a subscription offer or investment advice. FINXIA Capital is reserved for professional investors within the meaning of MiFID II Directive (2014/65/EU). FINXIA Capital is not a trading platform, forex broker, or automated investment software."}
          </p>
        </div>
      </section>
    </div>
  );
}
