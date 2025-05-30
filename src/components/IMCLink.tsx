'use client';

interface IMCLinkProps {
  url: string;
  eventName: string;
  eventLabel: string;
  children: React.ReactNode;
}

export default function IMCLink({ url, eventName, eventLabel, children }: IMCLinkProps) {
  const trackEvent = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, {
        'event_category': 'IMC',
        'event_label': eventLabel
      });
    }
  };

  return (
    <a 
      href={url}
      className="text-[#4CAF50] hover:text-[#3d9141] underline"
      onClick={trackEvent}
    >
      {children}
    </a>
  );
} 