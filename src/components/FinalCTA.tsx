'use client';

export default function FinalCTA() {
  const handleClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'cta-definamax-oficial-final', {
        'event_category': 'CTA',
        'event_label': 'Definamax Site Oficial - Final'
      });
    }
  };

  return (
    <div className="mt-8 text-center">
      <a 
        href="https://www.definamaxoficial.com/"
        className="inline-block bg-[#4CAF50] hover:bg-[#3d9141] text-white text-lg font-medium px-8 py-4 rounded-lg transition-all"
        onClick={handleClick}
      >
        Conhecer o Site Oficial
      </a>
    </div>
  );
} 