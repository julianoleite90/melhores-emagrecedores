import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-white py-3 md:py-6 shadow">
      <div className="container">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="flex justify-center md:justify-start">
            <a href="#produtos" className="flex items-center">
              <Image
                src="/img/logo.webp"
                alt="Análise Melhores Emagrecedores"
                width={320}
                height={80}
                priority
                className="h-auto w-[320px] md:w-[280px]"
              />
            </a>
          </div>

          <nav className="hidden md:flex gap-10">
            <a href="#produtos" className="nav-link">Metodologia</a>
            <a href="#produtos" className="nav-link">Ranking</a>
            <a href="#produtos" className="nav-link">Conclusão</a>
          </nav>
        </div>
      </div>
    </header>
  )
}