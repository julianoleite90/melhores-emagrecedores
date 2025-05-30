'use client';

import { appendUtmToUrl } from '@/lib/analytics';

interface ProductCTAProps {
  officialUrl: string;
  eventName: string;
  eventLabel: string;
  isMoreInfo?: boolean;
}

export default function ProductCTA({ officialUrl, eventName, eventLabel, isMoreInfo = false }: ProductCTAProps) {
  const handleClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, {
        'event_category': 'CTA',
        'event_label': eventLabel
      });
    }
  };

  return (
    <a 
      href={officialUrl}
      className={`w-full md:w-auto md:flex-1 text-center py-3 md:py-4 px-6 rounded-lg font-medium transition-all flex items-center justify-center gap-2 text-lg ${
        isMoreInfo 
          ? 'bg-[#F15A24] text-white hover:text-white hover:bg-[#d94d1a]' 
          : 'bg-[#4CAF50] text-white hover:text-white hover:bg-[#3d9141]'
      }`}
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
    >
      {isMoreInfo ? (
        <>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Obter mais informações
        </>
      ) : (
        <>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
          Acessar Site Oficial
        </>
      )}
    </a>
  );
} 