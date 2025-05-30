// Módulo de otimização de imagens
export function setupImageOptimization() {
  // Função para criar placeholder otimizado
  function createPlaceholder(img) {
    const placeholder = document.createElement('div');
    placeholder.className = 'img-placeholder';
    
    // Definir aspect ratio correto
    const width = img.getAttribute('width');
    const height = img.getAttribute('height');
    if (width && height) {
      const ratio = (height / width) * 100;
      placeholder.style.setProperty('--aspect-ratio', `${ratio}%`);
    }
    
    return placeholder;
  }

  // Otimizar carregamento de imagens críticas
  const criticalImages = document.querySelectorAll('img[fetchpriority="high"]');
  criticalImages.forEach(img => {
    if (!img.complete) {
      img.style.visibility = 'visible';
      img.setAttribute('loading', 'eager');
    }
  });

  // Lazy loading para imagens não críticas
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  if ('loading' in HTMLImageElement.prototype) {
    lazyImages.forEach(img => {
      const placeholder = createPlaceholder(img);
      img.parentNode.insertBefore(placeholder, img);
      
      img.onload = () => {
        img.classList.add('loaded');
        placeholder.remove();
      };
    });
  } else {
    // Fallback para navegadores que não suportam lazy loading
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.add('loaded');
          imageObserver.unobserve(img);
        }
      });
    });

    lazyImages.forEach(img => {
      imageObserver.observe(img);
    });
  }

  // Otimização de tamanhos responsivos com ResizeObserver
  if ('ResizeObserver' in window) {
    const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach(entry => {
        const img = entry.target.querySelector('img[sizes]');
        if (img) {
          img.sizes = `${entry.contentRect.width}px`;
        }
      });
    });

    document.querySelectorAll('[data-image-container]').forEach(container => {
      resizeObserver.observe(container);
    });
  }
}

// Inicializar otimizações quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', setupImageOptimization); 