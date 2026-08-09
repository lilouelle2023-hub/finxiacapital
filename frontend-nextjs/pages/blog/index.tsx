import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Calendar, ArrowRight, Zap, Filter } from 'lucide-react';
import SEO from '@/components/SEO';


export default function BlogIndexPage() {
  const { language } = useLanguage();
  const [activeFilter, setActiveFilter] = React.useState('all');


  const newsItems = [
    {
      id: 27,
      topic: 'nvidia',
      topicLabel: { fr: 'NVIDIA', en: 'NVIDIA' },
      date: '2026-08-07',
      title: {
        fr: "NVIDIA commande 1,2 million de GPU Blackwell pour 2027 — la penurie de puces menace les datacenters europeens",
        en: "NVIDIA orders 1.2 million Blackwell GPUs for 2027 — chip shortage threatens European datacenters"
      },
      source: 'Reuters'
    },
    {
      id: 28,
      topic: 'dc',
      topicLabel: { fr: 'Datacenter', en: 'Datacenter' },
      date: '2026-08-06',
      title: {
        fr: "Atos et Schneider Electric lancent un datacenter modulaire green de 50 MW pour le cloud souverain francais",
        en: "Atos and Schneider Electric launch a 50 MW green modular datacenter for French sovereign cloud"
      },
      source: 'Les Echos'
    },
    {
      id: 29,
      topic: 'ia',
