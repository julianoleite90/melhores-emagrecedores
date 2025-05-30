'use client';

interface DefinamaxImageCTAProps {
  href: string;
}

export default function DefinamaxImageCTA({ href }: DefinamaxImageCTAProps) {
  const handleClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'cta-definamax-oficial-imagem', {
        'event_category': 'CTA',
        'event_label': 'Definamax Site Oficial - Imagem'
      });
    }
  };

  return (
    <div className="mt-6 text-center">
      <a 
        href={href}
        className="inline-block bg-[#4CAF50] hover:bg-[#3d9141] text-white text-lg font-medium px-8 py-4 rounded-lg transition-all"
        onClick={handleClick}
      >
        Conhecer o Site Oficial
      </a>
    </div>
  );
} 