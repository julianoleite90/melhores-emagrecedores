// Função para obter todos os parâmetros UTM da URL
function getUTMParameters() {
  const utmParams = {};
  const queryString = window.location.search.substring(1);
  const params = queryString.split('&');
  
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
  ];
  
  for (let i = 0; i < params.length; i++) {
    const pair = params[i].split('=');
    const paramName = decodeURIComponent(pair[0]);
    
    if (utmList.includes(paramName) || paramName.startsWith('utm_')) {
      utmParams[paramName] = decodeURIComponent(pair[1] || '');
    }
  }
  
  // Salvar UTMs no localStorage para uso posterior
  if (Object.keys(utmParams).length > 0) {
    localStorage.setItem('utmParams', JSON.stringify(utmParams));
  }
  
  return utmParams;
}

// Função para recuperar UTMs salvos
function getSavedUTMs() {
  const saved = localStorage.getItem('utmParams');
  return saved ? JSON.parse(saved) : {};
}

// Função para adicionar UTMs a uma URL
function addUTMsToUrl(url) {
  const utmParams = getSavedUTMs();
  if (Object.keys(utmParams).length === 0) return url;
  
  try {
    const urlObj = new URL(url);
    
    // Adicionar cada parâmetro UTM à URL
    Object.keys(utmParams).forEach(key => {
      urlObj.searchParams.set(key, utmParams[key]);
    });
    
    return urlObj.toString();
  } catch (e) {
    console.error('Error adding UTMs to URL:', e);
    return url;
  }
}

// Aplicar UTMs a todos os links quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
  // Capturar UTMs da URL atual
  getUTMParameters();
  
  // Selecionar todos os links CTA
  const ctaLinks = document.querySelectorAll('.product-cta, .product-cta-secondary, .cta-button, .conclusion-cta');
  
  // Adicionar UTMs a cada link
  ctaLinks.forEach(link => {
    const originalUrl = link.getAttribute('href');
    if (originalUrl && originalUrl.startsWith('http')) {
      link.setAttribute('href', addUTMsToUrl(originalUrl));
    }
  });

  // Adicionar listener para o evento de redirecionamento
  document.addEventListener('redirect_initiated', function(e) {
    if (e.detail && e.detail.url) {
      e.detail.url = addUTMsToUrl(e.detail.url);
    }
  });
});

// Expor funções necessárias globalmente
window.addUTMsToUrl = addUTMsToUrl; 