'use client';

interface DefinamaxConclusionCTAProps {
  href: string;
}

export default function DefinamaxConclusionCTA({ href }: DefinamaxConclusionCTAProps) {
  const handleClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'cta-definamax-oficial-conclusao', {
        'event_category': 'CTA',
        'event_label': 'Definamax Site Oficial - Conclusão'
      });
    }
  };

  return (
    <a 
      href={href}
      className="inline-block bg-[#4CAF50] hover:bg-[#3d9141] text-white hover:text-white text-lg font-medium px-8 py-4 rounded-lg transition-all"
      onClick={handleClick}
    >
      Conhecer o Site Oficial
    </a>
  );
} 