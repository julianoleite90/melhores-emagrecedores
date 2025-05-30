import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-8 pb-4">
      {/* Link para voltar ao topo - Visível apenas em mobile */}
      <div className="container mb-8 md:hidden">
        <a 
          href="#" 
          className="text-[#4CAF50] hover:text-[#3d9141] text-center block"
        >
          Voltar para o ranking dos melhores emagrecedores
        </a>
      </div>

      <div className="container">
        {/* Grid que se torna coluna única no mobile */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 mb-8">
          {/* Logo e Descrição - Ocupa toda largura no mobile */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <Image
                src="/img/logo.webp"
                alt="Análise Melhores Emagrecedores"
                width={320}
                height={80}
                priority
                className="h-auto w-[280px] md:w-[220px]"
              />
            </div>
            <p className="text-sm text-[#666] hidden md:block">
              Análises independentes e informações confiáveis sobre os melhores produtos para emagrecimento saudável.
            </p>
          </div>

          {/* Navegação - Escondido no mobile */}
          <div className="hidden md:block">
            <h3 className="font-medium text-[#333] mb-4">Navegação</h3>
            <ul className="space-y-2 text-sm text-[#666]">
              <li><a href="#" className="hover:text-[#4CAF50]">Sobre</a></li>
              <li><a href="#" className="hover:text-[#4CAF50]">Metodologia</a></li>
              <li><a href="#" className="hover:text-[#4CAF50]">Produtos</a></li>
              <li><a href="#" className="hover:text-[#4CAF50]">Conclusão</a></li>
            </ul>
          </div>

          {/* Contato - Simplificado no mobile */}
          <div>
            <h3 className="font-medium text-[#333] mb-4">Contato</h3>
            <p className="text-sm text-[#666] mb-2">contato@emagrecedores.com</p>
            <p className="text-sm text-[#666]">Seg-Sex: 9h às 18h</p>
          </div>

          {/* Newsletter - Escondido no mobile */}
          <div className="hidden md:block">
            <h3 className="font-medium text-[#333] mb-4">Newsletter</h3>
            <p className="text-sm text-[#666] mb-4">
              Receba nossas análises e novidades:
            </p>
          </div>
        </div>

        {/* Divisor */}
        <div className="border-t border-gray-200 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[#666] text-center md:text-left">
              © 2025 Melhores Emagrecedores - Todos os direitos reservados
            </p>
            <div className="flex gap-4 text-sm text-[#666]">
              <a href="#" className="hover:text-[#4CAF50]">Política de Privacidade</a>
              <a href="#" className="hover:text-[#4CAF50]">Termos de Uso</a>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-[#666] text-center mt-4">
          Este site tem caráter informativo e não substitui orientações médicas. Consulte sempre um profissional de saúde antes de iniciar qualquer tratamento.
        </p>
      </div>
    </footer>
  )
} 