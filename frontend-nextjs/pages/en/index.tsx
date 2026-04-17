import React, { useEffect } from 'react';
import HomePage from '../index';
import { useLanguage } from '@/context/LanguageContext';

export default function HomePageEN() {
  const { setLanguage } = useLanguage();
  
  // Force English language on mount
  useEffect(() => {
    setLanguage('en');
  }, [setLanguage]);
  
  return <HomePage />;
}
