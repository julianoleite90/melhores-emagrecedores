import Image from 'next/image'

export default function Methodology() {
  const criteria = [
    {
      title: 'Redução de Medidas',
      description: 'Resultados comprovados de -4 a -8cm na cintura em 30 dias, com ação em áreas problemáticas.'
    },
    {
      title: 'Controle da Fome',
      description: 'Redução da fome em até 82% e saciedade por 8 horas, eliminando a compulsão alimentar.'
    },
    {
      title: 'Resultados Duradouros',
      description: 'Produtos que garantem manutenção do peso e combatem o efeito sanfona após o uso.'
    }
  ]

  return (
    <section className="py-6 md:py-20 bg-white">
      <div className="container px-4 md:px-0">
        <div className="text-center md:max-w-[900px] mx-auto mb-6 md:mb-14">
          <h2 className="text-[28px] md:text-[32px] leading-tight font-bold text-[#333] mb-4">
            Pesquisa de Eficácia: Os 5 Remédios Para Emagrecer que Realmente Funcionam
          </h2>
          <p className="text-base md:text-lg text-[#666]">
            Após 3 anos de pesquisa científica e mais de 2.500 casos analisados, identificamos com precisão os 
            emagrecedores que realmente entregam resultados. Conheça os 3 critérios de avaliação:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 md:mb-16">
          {criteria.map((item, index) => (
            <div key={index} className="bg-[#E8F5E9] p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#333] mb-3">{item.title}</h3>
              <p className="text-[#666]">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <div className="flex flex-row items-start bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] p-4 md:p-6 max-w-[1000px] w-full">
            <div className="flex-none">
              <Image
                src="/img/medica-150.webp"
                alt="Dra. Ana Costa"
                width={80}
                height={80}
                className="rounded-full w-[80px] h-[80px] md:w-[120px] md:h-[120px] object-cover border-2 md:border-4 border-[#4CAF50]"
              />
            </div>
            <div className="flex-1 pl-4 md:pl-8">
              <p className="text-sm md:text-base italic text-[#666] mb-3 md:mb-3 leading-relaxed">
                "Após 36 meses de pesquisa, selecionei os produtos mais eficazes e seguros para redução de medidas. 
                Cada item desta lista foi rigorosamente testado."
              </p>
              <h3 className="text-lg md:text-xl font-semibold text-[#4CAF50] mb-0.5">
                Dra. Ana Costa
              </h3>
              <p className="text-sm md:text-base text-[#666]">
                Especialista em Emagrecimento
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 