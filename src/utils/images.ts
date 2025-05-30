'use client'

// Função para criar placeholder otimizado
function createPlaceholder(img: HTMLImageElement): HTMLDivElement {
  const placeholder = document.createElement('div')
  placeholder.className = 'img-placeholder'
  
  // Definir aspect ratio correto
  const width = img.getAttribute('width')
  const height = img.getAttribute('height')
  if (width && height) {
    const ratio = (Number(height) / Number(width)) * 100
    placeholder.style.setProperty('--aspect-ratio', `${ratio}%`)
  }
  
  return placeholder
}

// Otimizar carregamento de imagens críticas
function setupCriticalImages() {
  const criticalImages = document.querySelectorAll<HTMLImageElement>('img[fetchpriority="high"]')
  criticalImages.forEach(img => {
    if (!img.complete) {
      img.style.visibility = 'visible'
      img.setAttribute('loading', 'eager')
    }
  })
}

// Lazy loading para imagens não críticas
function setupLazyImages() {
  const lazyImages = document.querySelectorAll<HTMLImageElement>('img[loading="lazy"]')
  if ('loading' in HTMLImageElement.prototype) {
    lazyImages.forEach(img => {
      const placeholder = createPlaceholder(img)
      img.parentNode?.insertBefore(placeholder, img)
      
      img.onload = () => {
        img.classList.add('loaded')
        placeholder.remove()
      }
    })
  } else {
    // Fallback para navegadores que não suportam lazy loading
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement
          const src = img.dataset.src
          if (src) {
            img.src = src
            img.classList.add('loaded')
            imageObserver.unobserve(img)
          }
        }
      })
    })

    lazyImages.forEach(img => {
      imageObserver.observe(img)
    })
  }
}

// Otimização de tamanhos responsivos com ResizeObserver
function setupResponsiveImages() {
  if ('ResizeObserver' in window) {
    const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach(entry => {
        const img = entry.target.querySelector<HTMLImageElement>('img[sizes]')
        if (img) {
          img.sizes = `${entry.contentRect.width}px`
        }
      })
    })

    document.querySelectorAll('[data-image-container]').forEach(container => {
      resizeObserver.observe(container)
    })
  }
}

// Inicializar otimizações de imagem
export function setupImageOptimization() {
  if (typeof window === 'undefined') return

  setupCriticalImages()
  setupLazyImages()
  setupResponsiveImages()
} 