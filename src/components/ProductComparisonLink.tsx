'use client';

interface ProductComparisonLinkProps {
  href: string;
  productName: string;
}

export default function ProductComparisonLink({ href, productName }: ProductComparisonLinkProps) {
  const handleClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', `cta-${productName.toLowerCase()}-oficial-comparacao`, {
        'event_category': 'CTA',
        'event_label': `${productName} Site Oficial - Comparação`
      });
    }
  };

  return (
    <a 
      href={href}
      className="text-[#4CAF50] hover:text-[#3d9141] font-medium flex items-center gap-2"
      target="_blank"
      rel="noopener"
      onClick={handleClick}
    >
      Site Oficial
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    </a>
  );
} 