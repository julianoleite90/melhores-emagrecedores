// Módulo de tracking
export function setupEventTracking() {
  // Track scroll depth
  let maxScroll = 0;
  window.addEventListener('scroll', () => {
    const scrollPercent = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight * 100;
    if (scrollPercent > maxScroll) {
      maxScroll = scrollPercent;
      if (maxScroll >= 25 && maxScroll < 50) {
        gtag('event', 'scroll_depth', { 'depth': '25%' });
      } else if (maxScroll >= 50 && maxScroll < 75) {
        gtag('event', 'scroll_depth', { 'depth': '50%' });
      } else if (maxScroll >= 75 && maxScroll < 90) {
        gtag('event', 'scroll_depth', { 'depth': '75%' });
      } else if (maxScroll >= 90) {
        gtag('event', 'scroll_depth', { 'depth': '90%' });
      }
    }
  });

  // Track time on page
  let timeOnPage = 0;
  const timeInterval = setInterval(() => {
    timeOnPage += 30;
    if (timeOnPage === 30) {
      gtag('event', 'time_on_page', { 'duration': '30s' });
    } else if (timeOnPage === 60) {
      gtag('event', 'time_on_page', { 'duration': '1min' });
    } else if (timeOnPage === 180) {
      gtag('event', 'time_on_page', { 'duration': '3min' });
    } else if (timeOnPage === 300) {
      gtag('event', 'time_on_page', { 'duration': '5min' });
      clearInterval(timeInterval);
    }
  }, 30000);

  // Track clicks on CTAs
  document.querySelectorAll('.product-cta, .product-cta-secondary, .cta-button, .conclusion-cta').forEach(button => {
    button.addEventListener('click', (e) => {
      // Previne que o evento seja disparado múltiplas vezes
      e.stopPropagation();
      
      // Usa currentTarget ao invés de target para garantir que pegamos o elemento correto
      const element = e.currentTarget;
      
      // Obtém os dados do elemento
      const productName = element.dataset.product || '';
      const action = element.dataset.action || '';
      const buttonType = element.classList.contains('product-cta') ? 'main' : 'secondary';
      
      // Envia o evento para o GA
      gtag('event', `clique_cta_${productName.toLowerCase()}_${action}`, {
        'event_category': 'CTA',
        'event_label': `${productName} - ${action}`,
        'product_name': productName,
        'button_type': buttonType
      });
    });
  });

  // Tracking de visualização de seções
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        gtag('event', 'view_section', {
          'event_category': 'Content',
          'event_label': entry.target.id
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('section[id]').forEach(section => observer.observe(section));
}

// Performance tracking
export function trackPerformance() {
  if ('performance' in window) {
    window.addEventListener('load', () => {
      const timing = performance.getEntriesByType('navigation')[0];
      gtag('event', 'performance', {
        'event_category': 'Performance',
        'event_label': 'Page Load',
        'value': Math.round(timing.loadEventEnd - timing.navigationStart)
      });
    });
  }
} 