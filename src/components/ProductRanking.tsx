import Image from 'next/image'
import { appendUtmToUrl } from '@/lib/analytics'
import ProductCTA from './ProductCTA'
import IMCLink from './IMCLink'
import FAQ from './FAQ'
import ProductComparisonLink from './ProductComparisonLink'
import DefinamaxConclusionCTA from './DefinamaxConclusionCTA'
import DefinamaxImageCTA from './DefinamaxImageCTA'

export default function ProductRanking() {
  return (
    <>
      <section id="produtos" className="bg-gray-50 py-16">
        <div className="container">
          <h2 className="text-[#c70b18] text-3xl md:text-4xl font-bold text-center mb-6">
            Ranking Exclusivo: Os 5 Emagrecedores Mais Eficazes Para Redução de Medidas
          </h2>

          <p className="text-center text-[#333] text-base md:text-lg mb-12 max-w-[900px] mx-auto">
            Com base em 36 meses de pesquisa e mais de 2.500 casos analisados, apresentamos os únicos produtos que 
            realmente cumprem 3 critérios essenciais: redução comprovada de medidas, controle efetivo da fome e resultados 
            duradouros. Descubra qual deles é ideal para você.
          </p>

          {/* Primeiro Lugar - Definamax */}
          <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 mb-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 pb-4 border-b border-gray-200">
              <div className="text-center md:text-left mb-3 md:mb-0">
                <span className="text-2xl md:text-3xl font-extrabold text-[#333] block mb-1">1º Lugar</span>
                <h3 className="text-[#4CAF50] text-xl font-semibold">Definamax - O Mais Eficaz Para Redução de Medidas</h3>
              </div>
              <div className="flex items-center justify-center md:justify-end gap-2">
                <div className="flex flex-col items-center">
                  <span className="font-semibold text-[#333] text-2xl mb-1">4.9/5</span>
                  <span className="text-[#666] text-sm mb-2 md:mb-0">Melhor Escolha</span>
                  <div className="flex text-[#FFD700] text-xl md:hidden">
                    {"⭐".repeat(5)}
                  </div>
                </div>
                <div className="hidden md:flex text-[#FFD700] text-xl">
                  {"⭐".repeat(5)}
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-[280px_1fr] gap-8">
              <div className="flex justify-center">
                <div className="relative w-full max-w-[280px]">
                  <Image
                    src="/img/definamax-400.webp"
                    alt="Definamax: Tecnologia avançada para redução de medidas"
                    width={400}
                    height={400}
                    className="object-contain mx-auto"
                    priority
                    quality={85}
                    loading="eager"
                  />
                  <p className="text-center text-sm text-[#666] mt-3 italic">
                    Definamax: Tecnologia avançada para redução de medidas
                  </p>
                </div>
              </div>

              <div className="text-left">
                <h4 className="text-2xl font-semibold text-[#333] mb-4 text-center md:text-left">
                  Por que o Definamax é considerado o mais eficaz para redução de medidas?
                </h4>

                <p className="text-lg text-[#333] mb-4">
                  Em nossa análise de mais de 2.500 casos, o <strong>Definamax</strong> apresentou resultados surpreendentes:
                  <strong> 93% dos usuários relataram redução visível de medidas em apenas 30 dias</strong>, com perda média
                  de 5-7kg e redução de até 8cm na cintura.
                </p>

                <div className="bg-[#E8F5E9] p-6 md:p-8 rounded-lg mb-8">
                  <h5 className="text-xl font-semibold text-[#333] mb-6 italic text-center">Resultados do emagrecedor:</h5>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 text-center">
                    <div className="bg-white/50 p-4 rounded-lg">
                      <div className="text-3xl font-bold text-[#4CAF50] mb-2">-8cm</div>
                      <div className="text-base text-[#666] font-medium">na Cintura</div>
                    </div>
                    <div className="relative bg-white/50 p-4 rounded-lg before:hidden md:before:block before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[1px] before:h-12 before:bg-[#4CAF50]/20">
                      <div className="text-3xl font-bold text-[#4CAF50] mb-2">82%</div>
                      <div className="text-base text-[#666] font-medium">Menos Fome</div>
                    </div>
                    <div className="relative bg-white/50 p-4 rounded-lg before:hidden md:before:block before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[1px] before:h-12 before:bg-[#4CAF50]/20">
                      <div className="text-3xl font-bold text-[#4CAF50] mb-2">93%</div>
                      <div className="text-base text-[#666] font-medium">Satisfação</div>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-[#333] mb-4">
                  O segredo está em sua <span className="font-medium">tecnologia patenteada de fibras inteligentes</span>, que captura até 72% da
                  gordura dos alimentos antes da absorção. Isso significa que você naturalmente absorve menos
                  calorias a cada refeição, <span className="font-medium">mesmo sem mudanças drásticas na alimentação</span>.
                </p>

                <p className="text-lg text-[#333] mb-4">
                  O diferencial do Definamax é sua ação tripla:
                </p>

                <ol className="list-decimal list-inside space-y-3 mb-8 text-lg">
                  <li className="text-[#333]">
                    <span className="font-medium">Controle Superior da Fome:</span> Reduz o apetite em até 82%, eliminando a compulsão alimentar já
                    nos primeiros dias de uso.
                  </li>
                  <li className="text-[#333]">
                    <span className="font-medium">Ação 24 Horas:</span> Aumenta a queima de gordura em até 30%, atuando continuamente mesmo
                    durante o sono.
                  </li>
                  <li className="text-[#333]">
                    <span className="font-medium">Redução Localizada:</span> Atua especificamente nas áreas mais difíceis como abdômen, coxas e
                    braços - preservando a massa muscular e garantindo resultados mais harmoniosos.
                  </li>
                </ol>

                <p className="text-lg text-[#333] mb-4">
                  O Definamax também oferece um teste de IMC (Índice de Massa Corporal) gratuito para você entender melhor como está sua saúde corporal. Para realizar o seu teste, <IMCLink 
                    url="https://www.definamaxoficial.com/avaliacao"
                    eventName="clique-imc-definamax"
                    eventLabel="Teste IMC Definamax"
                  >
                    clique aqui
                  </IMCLink>.
                </p>

                <div className="flex flex-col md:flex-row gap-3 md:gap-4 mb-4 md:mb-0">
                  <ProductCTA 
                    officialUrl="https://www.definamaxoficial.com/"
                    eventName="cta-definamax-oficial"
                    eventLabel="Definamax Site Oficial"
                  />
                  <ProductCTA 
                    officialUrl="https://www.definamaxoficial.com/"
                    eventName="cta-definamax_saibamais"
                    eventLabel="Definamax Saiba Mais"
                    isMoreInfo
                  />
                </div>

                <div className="mt-4 bg-[#FFF3E0] p-3 rounded-lg flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#FF5722] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <p className="text-sm text-[#666]">
                    <span className="font-medium">Atenção:</span> Não somos vendedores ou representantes do Definamax. Para mais informações
                    sobre o produto, acesse o site oficial clicando nos botões acima.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Segundo Lugar - Ozenvitta */}
          <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 mb-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 pb-4 border-b border-gray-200">
              <div className="text-center md:text-left mb-3 md:mb-0">
                <span className="text-2xl md:text-3xl font-extrabold text-[#333] block mb-1">2º Lugar</span>
                <h3 className="text-[#4CAF50] text-xl font-semibold">Ozenvitta - Eficaz no controle do apetite</h3>
              </div>
              <div className="flex items-center justify-center md:justify-end gap-2">
                <div className="flex flex-col items-center">
                  <span className="font-semibold text-[#333] text-2xl mb-1">4.7/5</span>
                  <span className="text-[#666] text-sm mb-2 md:mb-0">Melhor Escolha</span>
                  <div className="flex text-[#FFD700] text-xl md:hidden">
                    {"⭐".repeat(4)}{"⭐".slice(0, 1)}
                  </div>
                </div>
                <div className="hidden md:flex text-[#FFD700] text-xl">
                  {"⭐".repeat(4)}{"⭐".slice(0, 1)}
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-[280px_1fr] gap-8">
              <div className="flex justify-center">
                <div className="relative w-full max-w-[280px]">
                  <Image
                    src="/img/ozenvitta-400.webp"
                    alt="Ozenvitta: Eficaz no controle do apetite"
                    width={400}
                    height={400}
                    className="object-contain mx-auto"
                    quality={85}
                    loading="lazy"
                  />
                  <p className="text-center text-sm text-[#666] mt-3 italic">
                    Ozenvitta: Eficaz no controle do apetite
                  </p>
                </div>
              </div>

              <div className="text-left">
                <h4 className="text-2xl font-semibold text-[#333] mb-4 text-center md:text-left">
                  Por que o Ozenvitta é eficaz no controle da fome?
                </h4>

                <p className="text-lg text-[#333] mb-4">
                  Em nossa análise, o <strong>Ozenvitta</strong> mostrou resultados significativos no controle do apetite:
                  <strong> 70% dos usuários relataram redução expressiva da compulsão alimentar</strong>, com perda média de 3-4kg em 30 dias.
                </p>

                <div className="bg-[#E8F5E9] p-6 md:p-8 rounded-lg mb-8">
                  <h5 className="text-xl font-semibold text-[#333] mb-6 italic text-center">Resultados do emagrecedor:</h5>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 text-center">
                    <div className="bg-white/50 p-4 rounded-lg">
                      <div className="text-3xl font-bold text-[#4CAF50] mb-2">-3cm</div>
                      <div className="text-base text-[#666] font-medium">na Cintura</div>
                    </div>
                    <div className="relative bg-white/50 p-4 rounded-lg before:hidden md:before:block before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[1px] before:h-12 before:bg-[#4CAF50]/20">
                      <div className="text-3xl font-bold text-[#4CAF50] mb-2">70%</div>
                      <div className="text-base text-[#666] font-medium">Menos Fome</div>
                    </div>
                    <div className="relative bg-white/50 p-4 rounded-lg before:hidden md:before:block before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[1px] before:h-12 before:bg-[#4CAF50]/20">
                      <div className="text-3xl font-bold text-[#4CAF50] mb-2">85%</div>
                      <div className="text-base text-[#666] font-medium">Satisfação</div>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-[#333] mb-4">
                  Sua fórmula atua através de um <span className="font-medium">complexo natural de fibras e ativos</span> que promovem saciedade prolongada e ajudam a controlar a ansiedade por doces, <span className="font-medium">especialmente nos momentos mais críticos do dia</span>.
                </p>

                <p className="text-lg text-[#333] mb-4">
                  O diferencial do Ozenvitta é sua ação dupla:
                </p>

                <ol className="list-decimal list-inside space-y-3 mb-8 text-lg">
                  <li className="text-[#333]">
                    <span className="font-medium">Controle do Apetite:</span> Fibra de Maçã e Garcinia Cambogia trabalham juntas para reduzir a fome e os picos de compulsão.
                  </li>
                  <li className="text-[#333]">
                    <span className="font-medium">Equilíbrio Metabólico:</span> O Cromo auxilia na regulação do açúcar no sangue, reduzindo a vontade de consumir doces e melhorando os níveis de energia.
                  </li>
                </ol>

                <div className="flex flex-col md:flex-row gap-3 md:gap-4 mb-4 md:mb-0">
                  <ProductCTA 
                    officialUrl="https://mon.net.br/3i6gsj"
                    eventName="cta-ozenvitta-oficial"
                    eventLabel="Ozenvitta Site Oficial"
                  />
                  <ProductCTA 
                    officialUrl="https://mon.net.br/3i6gsj"
                    eventName="cta-ozenvitta_saibamais"
                    eventLabel="Ozenvitta Saiba Mais"
                    isMoreInfo
                  />
                </div>

                <div className="mt-4 bg-[#FFF3E0] p-3 rounded-lg flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#FF5722] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <p className="text-sm text-[#666]">
                    <span className="font-medium">Atenção:</span> Não somos vendedores ou representantes do Ozenvitta. Para mais informações
                    sobre o produto, acesse o site oficial clicando nos botões acima.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Terceiro Lugar - SB2 Turbo */}
          <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 mb-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 pb-4 border-b border-gray-200">
              <div className="text-center md:text-left mb-3 md:mb-0">
                <span className="text-2xl md:text-3xl font-extrabold text-[#333] block mb-1">3º Lugar</span>
                <h3 className="text-[#4CAF50] text-xl font-semibold">SB2 Turbo - Emagrecimento rápido e saudável</h3>
              </div>
              <div className="flex items-center justify-center md:justify-end gap-2">
                <div className="flex flex-col items-center">
                  <span className="font-semibold text-[#333] text-2xl mb-1">4.5/5</span>
                  <span className="text-[#666] text-sm mb-2 md:mb-0">Melhor Escolha</span>
                  <div className="flex text-[#FFD700] text-xl md:hidden">
                    {"⭐".repeat(4)}{"⭐".slice(0, 1)}
                  </div>
                </div>
                <div className="hidden md:flex text-[#FFD700] text-xl">
                  {"⭐".repeat(4)}{"⭐".slice(0, 1)}
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-[280px_1fr] gap-8">
              <div className="flex justify-center">
                <div className="relative w-full max-w-[280px]">
                  <Image
                    src="/img/sb2-400.webp"
                    alt="SB2 Turbo: Emagrecimento rápido e saudável"
                    width={400}
                    height={400}
                    className="object-contain mx-auto"
                    quality={85}
                    loading="lazy"
                  />
                  <p className="text-center text-sm text-[#666] mt-3 italic">
                    SB2 Turbo: Emagrecimento rápido e saudável
                  </p>
                </div>
              </div>

              <div className="text-left">
                <h4 className="text-2xl font-semibold text-[#333] mb-4 text-center md:text-left">
                  Por que o SB2 Turbo é eficaz para emagrecer?
                </h4>

                <p className="text-lg text-[#333] mb-4">
                  Nossa análise revelou resultados impressionantes: <strong>87% dos usuários relataram redução significativa de medidas e controle do apetite</strong>, com resultados visíveis já nas primeiras semanas de uso.
                </p>

                <div className="bg-[#E8F5E9] p-6 md:p-8 rounded-lg mb-8">
                  <h5 className="text-xl font-semibold text-[#333] mb-6 italic text-center">Resultados do emagrecedor:</h5>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 text-center">
                    <div className="bg-white/50 p-4 rounded-lg">
                      <div className="text-3xl font-bold text-[#4CAF50] mb-2">-6cm</div>
                      <div className="text-base text-[#666] font-medium">na Cintura</div>
                    </div>
                    <div className="relative bg-white/50 p-4 rounded-lg before:hidden md:before:block before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[1px] before:h-12 before:bg-[#4CAF50]/20">
                      <div className="text-3xl font-bold text-[#4CAF50] mb-2">87%</div>
                      <div className="text-base text-[#666] font-medium">Menos Fome</div>
                    </div>
                    <div className="relative bg-white/50 p-4 rounded-lg before:hidden md:before:block before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[1px] before:h-12 before:bg-[#4CAF50]/20">
                      <div className="text-3xl font-bold text-[#4CAF50] mb-2">90%</div>
                      <div className="text-base text-[#666] font-medium">Satisfação</div>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-[#333] mb-4">
                  O produto utiliza uma <span className="font-medium">combinação exclusiva de ingredientes naturais</span> que atuam de forma sinérgica para promover o emagrecimento saudável, <span className="font-medium">sem efeitos colaterais</span>.
                </p>

                <p className="text-lg text-[#333] mb-4">
                  O SB2 Turbo trabalha através de três mecanismos principais:
                </p>

                <ol className="list-decimal list-inside space-y-3 mb-8 text-lg">
                  <li className="text-[#333]">
                    <span className="font-medium">Controle do Apetite:</span> Psyllium e Chia trabalham juntos para promover saciedade prolongada.
                  </li>
                  <li className="text-[#333]">
                    <span className="font-medium">Aceleração Metabólica:</span> L-carnitina e L-tirosina otimizam a queima de gordura.
                  </li>
                  <li className="text-[#333]">
                    <span className="font-medium">Redução de Medidas:</span> Laranja Moro e Espirulina auxiliam na redução da gordura localizada.
                  </li>
                </ol>

                <div className="flex flex-col md:flex-row gap-3 md:gap-4 mb-4 md:mb-0">
                  <ProductCTA 
                    officialUrl="https://mon.net.br/3eefqg"
                    eventName="cta-sb2-oficial"
                    eventLabel="SB2 Site Oficial"
                  />
                  <ProductCTA 
                    officialUrl="https://mon.net.br/3eefqg"
                    eventName="cta-sb2_saibamais"
                    eventLabel="SB2 Saiba Mais"
                    isMoreInfo
                  />
                </div>

                <div className="mt-4 bg-[#FFF3E0] p-3 rounded-lg flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#FF5722] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <p className="text-sm text-[#666]">
                    <span className="font-medium">Atenção:</span> Não somos vendedores ou representantes do SB2 Turbo. Para mais informações
                    sobre o produto, acesse o site oficial clicando nos botões acima.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quarto Lugar - New Detox */}
          <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 mb-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 pb-4 border-b border-gray-200">
              <div className="text-center md:text-left mb-3 md:mb-0">
                <span className="text-2xl md:text-3xl font-extrabold text-[#333] block mb-1">4º Lugar</span>
                <h3 className="text-[#4CAF50] text-xl font-semibold">New Detox - Redução de inchaço e desintoxicação</h3>
              </div>
              <div className="flex items-center justify-center md:justify-end gap-2">
                <div className="flex flex-col items-center">
                  <span className="font-semibold text-[#333] text-2xl mb-1">4.3/5</span>
                  <span className="text-[#666] text-sm mb-2 md:mb-0">Melhor Escolha</span>
                  <div className="flex text-[#FFD700] text-xl md:hidden">
                    {"⭐".repeat(4)}{"⭐".slice(0, 1)}
                  </div>
                </div>
                <div className="hidden md:flex text-[#FFD700] text-xl">
                  {"⭐".repeat(4)}{"⭐".slice(0, 1)}
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-[280px_1fr] gap-8">
              <div className="flex justify-center">
                <div className="relative w-full max-w-[280px]">
                  <Image
                    src="/img/newdetox-400.webp"
                    alt="New Detox: Redução de inchaço e desintoxicação"
                    width={400}
                    height={400}
                    className="object-contain mx-auto"
                    quality={85}
                    loading="lazy"
                  />
                  <p className="text-center text-sm text-[#666] mt-3 italic">
                    New Detox: Redução de inchaço e desintoxicação
                  </p>
                </div>
              </div>

              <div className="text-left">
                <h4 className="text-2xl font-semibold text-[#333] mb-4 text-center md:text-left">
                  Por que o New Detox é eficaz no combate ao inchaço?
                </h4>

                <p className="text-lg text-[#333] mb-4">
                  Nossa análise revelou que o <strong>New Detox</strong> é especialmente eficaz contra o inchaço: <strong>80% dos usuários relataram redução significativa do inchaço abdominal em apenas 7 dias</strong>, com melhora expressiva na digestão e sensação de leveza.
                </p>

                <div className="bg-[#E8F5E9] p-6 md:p-8 rounded-lg mb-8">
                  <h5 className="text-xl font-semibold text-[#333] mb-6 italic text-center">Resultados observados:</h5>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 text-center">
                    <div className="bg-white/50 p-4 rounded-lg">
                      <div className="text-3xl font-bold text-[#4CAF50] mb-2">80%</div>
                      <div className="text-base text-[#666] font-medium">Menos Inchaço</div>
                    </div>
                    <div className="relative bg-white/50 p-4 rounded-lg before:hidden md:before:block before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[1px] before:h-12 before:bg-[#4CAF50]/20">
                      <div className="text-3xl font-bold text-[#4CAF50] mb-2">7</div>
                      <div className="text-base text-[#666] font-medium">Dias de Uso</div>
                    </div>
                    <div className="relative bg-white/50 p-4 rounded-lg before:hidden md:before:block before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[1px] before:h-12 before:bg-[#4CAF50]/20">
                      <div className="text-3xl font-bold text-[#4CAF50] mb-2">75%</div>
                      <div className="text-base text-[#666] font-medium">Satisfação</div>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-[#333] mb-4">
                  O produto utiliza uma <span className="font-medium">combinação exclusiva de ativos naturais</span> que atuam na desintoxicação do organismo e redução da retenção de líquidos, <span className="font-medium">proporcionando resultados rápidos no combate ao inchaço</span>.
                </p>

                <p className="text-lg text-[#333] mb-4">
                  O New Detox atua através de três mecanismos:
                </p>

                <ol className="list-decimal list-inside space-y-3 mb-8 text-lg">
                  <li className="text-[#333]">
                    <span className="font-medium">Desintoxicação:</span> Spirulina e Psyllium eliminam toxinas e reduzem o inchaço abdominal.
                  </li>
                  <li className="text-[#333]">
                    <span className="font-medium">Equilíbrio Intestinal:</span> Melhora a digestão e reduz o desconforto abdominal.
                  </li>
                  <li className="text-[#333]">
                    <span className="font-medium">Drenagem:</span> Combate a retenção de líquidos e melhora o aspecto da pele.
                  </li>
                </ol>

                <div className="flex flex-col md:flex-row gap-3 md:gap-4 mb-4 md:mb-0">
                  <ProductCTA 
                    officialUrl="https://mon.net.br/3eefce"
                    eventName="cta-newdetox-oficial"
                    eventLabel="New Detox Site Oficial"
                  />
                  <ProductCTA 
                    officialUrl="https://mon.net.br/3eefce"
                    eventName="cta-newdetox_saibamais"
                    eventLabel="New Detox Saiba Mais"
                    isMoreInfo
                  />
                </div>

                <div className="mt-4 bg-[#FFF3E0] p-3 rounded-lg flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#FF5722] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <p className="text-sm text-[#666]">
                    <span className="font-medium">Atenção:</span> Não somos vendedores ou representantes do New Detox. Para mais informações
                    sobre o produto, acesse o site oficial clicando nos botões acima.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quinto Lugar - Mounja Slim */}
          <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 mb-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 pb-4 border-b border-gray-200">
              <div className="text-center md:text-left mb-3 md:mb-0">
                <span className="text-2xl md:text-3xl font-extrabold text-[#333] block mb-1">5º Lugar</span>
                <h3 className="text-[#4CAF50] text-xl font-semibold">Mounja Slim - Tecnologia de rápida absorção</h3>
              </div>
              <div className="flex items-center justify-center md:justify-end gap-2">
                <div className="flex flex-col items-center">
                  <span className="font-semibold text-[#333] text-2xl mb-1">4.0/5</span>
                  <span className="text-[#666] text-sm mb-2 md:mb-0">Melhor Escolha</span>
                  <div className="flex text-[#FFD700] text-xl md:hidden">
                    {"⭐".repeat(4)}
                  </div>
                </div>
                <div className="hidden md:flex text-[#FFD700] text-xl">
                  {"⭐".repeat(4)}
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-[280px_1fr] gap-8">
              <div className="flex justify-center">
                <div className="relative w-full max-w-[280px]">
                  <Image
                    src="/img/monja-400.webp"
                    alt="Mounja Slim: Tecnologia de rápida absorção"
                    width={400}
                    height={400}
                    className="object-contain mx-auto"
                    quality={85}
                    loading="lazy"
                  />
                  <p className="text-center text-sm text-[#666] mt-3 italic">
                    Mounja Slim: Tecnologia de rápida absorção
                  </p>
                </div>
              </div>

              <div className="text-left">
                <h4 className="text-2xl font-semibold text-[#333] mb-4 text-center md:text-left">
                  Por que o Mounja Slim é eficaz para emagrecer?
                </h4>

                <p className="text-lg text-[#333] mb-4">
                  O <strong>Mounja Slim</strong> é um suplemento inovador que <strong>utiliza a tecnologia de rápida absorção para potencializar o emagrecimento</strong>. Nossa análise mostrou que 78% dos usuários relataram perda de peso significativa.
                </p>

                <div className="bg-[#E8F5E9] p-6 md:p-8 rounded-lg mb-8">
                  <h5 className="text-xl font-semibold text-[#333] mb-6 italic text-center">Resultados observados:</h5>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 text-center">
                    <div className="bg-white/50 p-4 rounded-lg">
                      <div className="text-3xl font-bold text-[#4CAF50] mb-2">78%</div>
                      <div className="text-base text-[#666] font-medium">Perda de Peso</div>
                    </div>
                    <div className="relative bg-white/50 p-4 rounded-lg before:hidden md:before:block before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[1px] before:h-12 before:bg-[#4CAF50]/20">
                      <div className="text-3xl font-bold text-[#4CAF50] mb-2">-5kg</div>
                      <div className="text-base text-[#666] font-medium">em 30 dias</div>
                    </div>
                    <div className="relative bg-white/50 p-4 rounded-lg before:hidden md:before:block before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[1px] before:h-12 before:bg-[#4CAF50]/20">
                      <div className="text-3xl font-bold text-[#4CAF50] mb-2">85%</div>
                      <div className="text-base text-[#666] font-medium">Satisfação</div>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-[#333] mb-4">
                  O produto se destaca por sua <span className="font-medium">fórmula zero açúcar</span> e pela presença da exclusiva Mounja de Póbi, um ingrediente natural com propriedades termogênicas.
                </p>

                <p className="text-lg text-[#333] mb-4">
                  O Mounja Slim atua através de três mecanismos:
                </p>

                <ol className="list-decimal list-inside space-y-3 mb-8 text-lg">
                  <li className="text-[#333]">
                    <span className="font-medium">Queima de Gordura:</span> Ativa o metabolismo e acelera a queima de gordura.
                  </li>
                  <li className="text-[#333]">
                    <span className="font-medium">Controle Glicêmico:</span> Ajuda a regular os níveis de açúcar no sangue.
                  </li>
                  <li className="text-[#333]">
                    <span className="font-medium">Energia:</span> Aumenta a disposição sem causar efeitos colaterais.
                  </li>
                </ol>

                <div className="flex flex-col md:flex-row gap-3 md:gap-4 mb-4 md:mb-0">
                  <ProductCTA 
                    officialUrl="https://app.monetizze.com.br/r/BGZ1881505"
                    eventName="cta-mounja-oficial"
                    eventLabel="Mounja Slim Site Oficial"
                  />
                  <ProductCTA 
                    officialUrl="https://app.monetizze.com.br/r/BGZ1881505"
                    eventName="cta-mounja_saibamais"
                    eventLabel="Mounja Slim Saiba Mais"
                    isMoreInfo
                  />
                </div>

                <div className="mt-4 bg-[#FFF3E0] p-3 rounded-lg flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#FF5722] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <p className="text-sm text-[#666]">
                    <span className="font-medium">Atenção:</span> Não somos vendedores ou representantes do Mounja Slim. Para mais informações
                    sobre o produto, acesse o site oficial clicando nos botões acima.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Conclusão */}
      <section className="bg-white py-16">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-[#333] text-center mb-6">
            Conclusão: Qual o Melhor Remédio Para Emagrecer em 2025?
          </h2>
          
          <p className="text-center text-[#333] text-base md:text-lg mb-12 max-w-[900px] mx-auto">
            Após 3 anos de pesquisa e análise de mais de 2.500 casos reais, chegamos a uma conclusão definitiva sobre qual produto oferece os melhores resultados para quem busca emagrecer de forma eficaz e saudável.
          </p>

          <div className="bg-[#f8f9fa] rounded-lg p-6 md:p-8 mb-12">
            <div className="flex items-center gap-2 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#4CAF50]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-[#4CAF50] font-semibold">Nº 1 em 2025</span>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#333] mb-4">
                  Por que o Definamax é o Melhor Emagrecedor?
                </h3>

                <p className="text-[#666] mb-8">
                  Após analisar mais de 2.500 casos de sucesso, o Definamax se destacou por sua tecnologia exclusiva que combina redução de medidas e controle da fome, proporcionando resultados visíveis já nos primeiros 30 dias de uso.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#4CAF50]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <div>
                      <div className="text-xl font-bold text-[#4CAF50]">93%</div>
                      <div className="text-sm text-[#666]">dos usuários perderam 5-7kg no 1º mês</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#4CAF50]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <div>
                      <div className="text-xl font-bold text-[#4CAF50]">72%</div>
                      <div className="text-sm text-[#666]">de captura de gordura com tecnologia exclusiva</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#4CAF50]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <div className="text-xl font-bold text-[#4CAF50]">8cm</div>
                      <div className="text-sm text-[#666]">de redução na cintura em 30 dias</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#4CAF50]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <div className="text-xl font-bold text-[#4CAF50]">82%</div>
                      <div className="text-sm text-[#666]">menos compulsão alimentar</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="relative w-full max-w-[280px] flex flex-col items-center">
                  <Image
                    src="/img/definamax-400.webp"
                    alt="Definamax: Tecnologia avançada para redução de medidas"
                    width={400}
                    height={400}
                    className="object-contain mx-auto"
                    quality={85}
                  />
                  <p className="text-center text-sm text-[#666] mt-3 italic">
                    Definamax: Tecnologia avançada para redução de medidas
                  </p>
                  <div className="mt-4">
                    <DefinamaxConclusionCTA href="https://www.definamaxoficial.com/" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Como Cada Produto Pode te Ajudar */}
          <h3 className="text-2xl font-bold text-[#333] text-center mb-8">
            Como Cada Produto Pode te Ajudar?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col h-full relative border border-blue-100 hover:shadow-lg transition-all">
              <div className="flex justify-center mb-4">
                <Image
                  src="/img/ozenvitta-400.webp"
                  alt="Ozenvitta"
                  width={120}
                  height={120}
                  className="object-contain"
                  quality={85}
                />
              </div>
              <h4 className="font-semibold text-lg text-[#333] mb-3 text-center">Ozenvitta</h4>
              <p className="text-[#666] mb-12">
                Ideal para quem luta contra a compulsão alimentar, reduzindo a fome em até 70% e ajudando especialmente no controle da ansiedade por doces.
              </p>
              <div className="absolute bottom-6 left-0 right-0 flex justify-center">
                <ProductComparisonLink 
                  href="https://mon.net.br/3i6gsj"
                  productName="ozenvitta"
                />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col h-full relative border border-red-100 hover:shadow-lg transition-all">
              <div className="flex justify-center mb-4">
                <Image
                  src="/img/sb2-400.webp"
                  alt="SB2 Turbo"
                  width={120}
                  height={120}
                  className="object-contain"
                  quality={85}
                />
              </div>
              <h4 className="font-semibold text-lg text-[#333] mb-3 text-center">SB2 Turbo</h4>
              <p className="text-[#666] mb-12">
                Perfeito para quem precisa de mais energia, aumentando o metabolismo e potencializando os resultados dos exercícios físicos.
              </p>
              <div className="absolute bottom-6 left-0 right-0 flex justify-center">
                <ProductComparisonLink 
                  href="https://mon.net.br/3eefqg"
                  productName="sb2"
                />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col h-full relative border border-green-100 hover:shadow-lg transition-all">
              <div className="flex justify-center mb-4">
                <Image
                  src="/img/newdetox-400.webp"
                  alt="New Detox"
                  width={120}
                  height={120}
                  className="object-contain"
                  quality={85}
                />
              </div>
              <h4 className="font-semibold text-lg text-[#333] mb-3 text-center">New Detox</h4>
              <p className="text-[#666] mb-12">
                Excelente para quem sofre com inchaço e retenção de líquidos, proporcionando resultados visíveis em apenas 7 dias.
              </p>
              <div className="absolute bottom-6 left-0 right-0 flex justify-center">
                <ProductComparisonLink 
                  href="https://mon.net.br/3eefce"
                  productName="newdetox"
                />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col h-full relative border border-purple-100 hover:shadow-lg transition-all">
              <div className="flex justify-center mb-4">
                <Image
                  src="/img/monja-400.webp"
                  alt="Mounja Slim"
                  width={120}
                  height={120}
                  className="object-contain"
                  quality={85}
                />
              </div>
              <h4 className="font-semibold text-lg text-[#333] mb-3 text-center">Mounja Slim</h4>
              <p className="text-[#666] mb-12">
                Ideal para quem busca um metabolismo mais acelerado, com fórmula zero açúcar e tecnologia de rápida absorção.
              </p>
              <div className="absolute bottom-6 left-0 right-0 flex justify-center">
                <ProductComparisonLink 
                  href="https://app.monetizze.com.br/r/BGZ1881505"
                  productName="mounja"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ />
    </>
  )
} 