import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const countryPaths = {
  france: "M 280,280 L 310,250 L 350,260 L 380,300 L 370,350 L 330,380 L 280,370 L 260,330 Z",
  germany: "M 350,200 L 400,180 L 430,200 L 440,250 L 420,280 L 380,290 L 350,260 L 340,220 Z",
  benelux: "M 310,200 L 350,180 L 370,200 L 360,230 L 330,240 L 300,220 Z",
  spain: "M 200,350 L 280,340 L 300,380 L 290,440 L 230,460 L 180,420 L 170,370 Z",
  italy: "M 380,320 L 420,300 L 450,330 L 440,400 L 410,450 L 380,440 L 370,380 L 360,340 Z"
};

const countryNames = {
  france: { en: 'France', fr: 'France' },
  germany: { en: 'Germany', fr: 'Allemagne' },
  benelux: { en: 'Benelux', fr: 'Benelux' },
  spain: { en: 'Spain', fr: 'Espagne' },
  italy: { en: 'Italy', fr: 'Italie' }
};

export const EuropeMap = ({ onCountryHover, activeCountry }) => {
  const { language } = useLanguage();
  const [hoveredCountry, setHoveredCountry] = useState(null);

  const handleMouseEnter = (country) => {
    setHoveredCountry(country);
    if (onCountryHover) onCountryHover(country);
  };

  const handleMouseLeave = () => {
    setHoveredCountry(null);
    if (onCountryHover) onCountryHover(null);
  };

  return (
    <div className="relative" data-testid="europe-map">
      <svg
        viewBox="100 100 450 450"
        className="w-full max-w-2xl mx-auto europe-map"
        style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))' }}
      >
        {/* Background */}
        <rect x="100" y="100" width="450" height="450" fill="#F8FAFC" rx="4" />
        
        {/* Other European countries (background) */}
        <path
          d="M 200,150 L 250,130 L 300,150 L 280,180 L 230,190 Z"
          fill="#E2E8F0"
          stroke="#CBD5E1"
          strokeWidth="1"
        />
        <path
          d="M 450,250 L 500,230 L 520,280 L 490,320 L 460,300 Z"
          fill="#E2E8F0"
          stroke="#CBD5E1"
          strokeWidth="1"
        />
        <path
          d="M 420,180 L 480,160 L 510,200 L 490,230 L 440,220 Z"
          fill="#E2E8F0"
          stroke="#CBD5E1"
          strokeWidth="1"
        />
        <path
          d="M 150,280 L 180,250 L 200,280 L 190,320 L 160,310 Z"
          fill="#E2E8F0"
          stroke="#CBD5E1"
          strokeWidth="1"
        />

        {/* Interactive countries */}
        {Object.entries(countryPaths).map(([country, path]) => {
          const isActive = activeCountry === country || hoveredCountry === country;
          return (
            <g key={country}>
              <path
                d={path}
                fill={isActive ? 'rgba(161, 98, 7, 0.25)' : '#CBD5E1'}
                stroke={isActive ? '#A16207' : '#94A3B8'}
                strokeWidth={isActive ? '2' : '1'}
                className="cursor-pointer transition-all duration-300"
                onMouseEnter={() => handleMouseEnter(country)}
                onMouseLeave={handleMouseLeave}
                data-testid={`map-country-${country}`}
              />
              {isActive && (
                <text
                  x={country === 'france' ? '320' : country === 'germany' ? '390' : country === 'benelux' ? '335' : country === 'spain' ? '240' : '410'}
                  y={country === 'france' ? '320' : country === 'germany' ? '240' : country === 'benelux' ? '210' : country === 'spain' ? '400' : '380'}
                  className="fill-slate-900 text-sm font-semibold pointer-events-none"
                  textAnchor="middle"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  {countryNames[country][language]}
                </text>
              )}
            </g>
          );
        })}

        {/* Map dots for cities */}
        <circle cx="320" cy="310" r="4" fill="#0F172A" />
        <circle cx="390" cy="230" r="4" fill="#0F172A" />
        <circle cx="335" cy="210" r="4" fill="#0F172A" />
        <circle cx="245" cy="390" r="4" fill="#0F172A" />
        <circle cx="405" cy="370" r="4" fill="#0F172A" />
      </svg>
    </div>
  );
};
