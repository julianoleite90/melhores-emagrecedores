// Function to get UTM parameters from URL
export function getUtmParams() {
  if (typeof window === 'undefined') return {};
  
  const urlParams = new URLSearchParams(window.location.search);
  const utmParams: Record<string, string> = {};
  
  ['source', 'medium', 'campaign', 'term', 'content'].forEach(param => {
    const value = urlParams.get(`utm_${param}`);
    if (value) utmParams[`utm_${param}`] = value;
  });
  
  return utmParams;
}

// Function to append UTM parameters to URL
export function appendUtmToUrl(url: string): string {
  if (typeof window === 'undefined') return url;
  
  const utmParams = getUtmParams();
  if (Object.keys(utmParams).length === 0) return url;
  
  const urlObj = new URL(url);
  Object.entries(utmParams).forEach(([key, value]) => {
    urlObj.searchParams.append(key, value);
  });
  
  return urlObj.toString();
}

// Initialize Google Analytics
export function initGA() {
  if (typeof window === 'undefined') return;
  
  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=G-RTEPB48RDY`;
  script.async = true;
  document.head.appendChild(script);
  
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }
  gtag('js', new Date());
  gtag('config', 'G-RTEPB48RDY');
  
  // Make gtag available globally
  window.gtag = gtag;
} 