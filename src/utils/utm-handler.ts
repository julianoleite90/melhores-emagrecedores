'use client'

// Lista de parâmetros UTM que queremos capturar
const utmList = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'utm_id',
  'gclid',
  'fbclid'
]

// Função para obter todos os parâmetros UTM da URL
export function getUTMParameters(): Record<string, string> {
  if (typeof window === 'undefined') return {}

  const utmParams: Record<string, string> = {}
  const queryString = window.location.search.substring(1)
  const params = queryString.split('&')
  
  for (let i = 0; i < params.length; i++) {
    const pair = params[i].split('=')
    const paramName = decodeURIComponent(pair[0])
    
    if (utmList.includes(paramName) || paramName.startsWith('utm_')) {
      utmParams[paramName] = decodeURIComponent(pair[1] || '')
    }
  }
  
  // Salvar UTMs no localStorage para uso posterior
  if (Object.keys(utmParams).length > 0) {
    localStorage.setItem('utmParams', JSON.stringify(utmParams))
  }
  
  return utmParams
}

// Função para recuperar UTMs salvos
export function getSavedUTMs(): Record<string, string> {
  if (typeof window === 'undefined') return {}
  
  const saved = localStorage.getItem('utmParams')
  return saved ? JSON.parse(saved) : {}
}

// Função para adicionar UTMs a uma URL
export function addUTMsToUrl(url: string): string {
  const utmParams = getSavedUTMs()
  if (Object.keys(utmParams).length === 0) return url
  
  try {
    const urlObj = new URL(url)
    
    // Adicionar cada parâmetro UTM à URL
    Object.keys(utmParams).forEach(key => {
      urlObj.searchParams.set(key, utmParams[key])
    })
    
    return urlObj.toString()
  } catch (e) {
    console.error('Error adding UTMs to URL:', e)
    return url
  }
}

// Função para inicializar o handler de UTMs
export function initUTMHandler() {
  if (typeof window === 'undefined') return

  // Capturar UTMs da URL atual
  getUTMParameters()
  
  // Selecionar todos os links CTA
  const ctaLinks = document.querySelectorAll('.product-cta, .product-cta-secondary, .cta-button, .conclusion-cta')
  
  // Adicionar UTMs a cada link
  ctaLinks.forEach(link => {
    const originalUrl = link.getAttribute('href')
    if (originalUrl && originalUrl.startsWith('http')) {
      link.setAttribute('href', addUTMsToUrl(originalUrl))
    }
  })

  // Adicionar listener para o evento de redirecionamento
  document.addEventListener('redirect_initiated', function(e: CustomEvent) {
    if (e.detail && e.detail.url) {
      e.detail.url = addUTMsToUrl(e.detail.url)
    }
  })
} 