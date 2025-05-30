import Image from 'next/image'

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col items-center">
          <div className="text-center">
            <div className="date-text text-left w-full mt-4">
              Atualizado: 15 de março de 2025
            </div>
            
            <h1 className="hero-title mt-8">
              Os 5 Melhores Remédios Para{' '}
              <span className="underline-text">
                Emagrecer
              </span>
            </h1>

            <h2 className="hero-subtitle">
              Pesquisa de Eficácia: <span className="hero-highlight">Remédios Que Combatem o Inchaço</span> e Reduzem Medidas
            </h2>

            <div className="hero-image-container mb-8 mt-[3%]">
              <Image
                src="/img/farmacia5-800.webp"
                alt="Farmacêutica analisando produtos"
                width={400}
                height={300}
                className="hero-image"
                priority
                quality={75}
                sizes="(max-width: 768px) 100vw, 800px"
                loading="eager"
              />
              <p className="text-center text-sm text-text-light mt-2">
                Imagem: Editorial
              </p>
            </div>

            <div className="text-left">
              <p className="hero-text">
                Cansada de lutar contra a balança sem resultados? A solução pode estar mais próxima do que você imagina.
              </p>

              <p className="hero-text">
                Em 15 anos de experiência, descobri que <span className="hero-highlight">93% das pessoas falham por usar a estratégia errada</span>. Não é falta de força de vontade - é método.
              </p>

              <p className="hero-text">
                Nossa análise com 2.500 casos revelou algo intrigante: <span className="hero-highlight">apenas 5 entre 27 suplementos testados apresentaram a combinação exata de ativos que realmente funciona</span>. O mais surpreendente? A eficácia está em um detalhe que a maioria das pessoas nem imagina.
              </p>
            </div>

            <a 
              href="#produtos"
              className="hero-button"
            >
              Veja os 5 Melhores Remédios Para Emagrecer
            </a>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-8 md:items-center">
          <div>
            <div className="date-text mb-8">
              Atualizado: 15 de março de 2025
            </div>
            
            <h1 className="hero-title">
              Os 5 Melhores Remédios Para{' '}
              <span className="underline-text">
                Emagrecer
              </span>
            </h1>

            <h2 className="hero-subtitle">
              Pesquisa de Eficácia: <span className="hero-highlight">Remédios Que Combatem o Inchaço</span> e Reduzem Medidas
            </h2>

            <p className="hero-text">
              Cansada de lutar contra a balança sem resultados? A solução pode estar mais próxima do que você imagina.
            </p>

            <p className="hero-text">
              Em 15 anos de experiência, descobri que <span className="hero-highlight">93% das pessoas falham por usar a estratégia errada</span>. Não é falta de força de vontade - é método.
            </p>

            <p className="hero-text">
              Nossa análise com 2.500 casos revelou algo intrigante: <span className="hero-highlight">apenas 5 entre 27 suplementos testados apresentaram a combinação exata de ativos que realmente funciona</span>. O mais surpreendente? A eficácia está em um detalhe que a maioria das pessoas nem imagina.
            </p>

            <a 
              href="#produtos"
              className="hero-button md:w-auto"
            >
              Veja os 5 Melhores Remédios Para Emagrecer
            </a>
          </div>

          <div className="hero-image-container-desktop">
            <div className="relative translate-x-[6%]">
              <Image
                src="/img/farmacia5-800.webp"
                alt="Farmacêutica analisando produtos"
                width={800}
                height={600}
                className="hero-image"
                priority
                quality={75}
                sizes="(min-width: 768px) 50vw, 100vw"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 