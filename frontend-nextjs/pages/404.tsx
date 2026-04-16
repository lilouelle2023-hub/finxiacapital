import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Home, ArrowRight } from 'lucide-react';

export default function Custom404() {
  const context = useLanguage();
  const language = context?.language || 'fr';

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <Head>
        <title>404 - Page Non Trouvée · FINXIA Capital</title>
        <meta name="description" content="Page non trouvée" />
      </Head>

      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <span className="text-9xl font-serif text-[#C45A3B]">404</span>
        </div>
        
        <h1 className="font-serif text-4xl md:text-5xl mb-6">
          {language === 'fr' ? 'Page Non Trouvée' : 'Page Not Found'}
        </h1>
        
        <p className="text-slate-600 text-lg mb-10 leading-relaxed">
          {language === 'fr'
            ? 'La page que vous recherchez n\'existe pas ou a été déplacée.'
            : 'The page you are looking for does not exist or has been moved.'}
        </p>

        <Link
          href="/"
          className="btn-primary inline-flex items-center gap-2"
        >
          <Home className="w-4 h-4" />
          {language === 'fr' ? 'Retour à l\'Accueil' : 'Back to Home'}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
