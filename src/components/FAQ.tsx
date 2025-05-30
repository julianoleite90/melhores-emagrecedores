'use client';

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm">
      <details className="group">
        <summary className="flex items-center justify-between gap-3 p-4 font-medium cursor-pointer list-none">
          <span className="text-lg text-[#333]">{question}</span>
          <span className="transition group-open:rotate-180">
            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </span>
        </summary>
        <div className="px-4 pb-4">
          <p className="text-[#666] leading-relaxed">
            {answer}
          </p>
        </div>
      </details>
    </div>
  );
}

export default function FAQ() {
  const faqItems = [
    {
      question: "Como vocês testam a eficácia de cada produto?",
      answer: "Nossa metodologia envolve um processo rigoroso de 90 dias para cada produto. Primeiro, realizamos uma análise laboratorial completa da composição. Em seguida, acompanhamos grupos de voluntários que utilizam o produto seguindo as recomendações do fabricante. Medimos diversos indicadores como redução de medidas, alterações no peso, níveis de saciedade e energia. Também coletamos relatos detalhados sobre efeitos colaterais e satisfação geral."
    },
    {
      question: "Como vocês selecionam os produtos para análise?",
      answer: "Nosso processo de seleção considera vários critérios: popularidade no mercado, volume de vendas, feedback espontâneo de consumidores, certificações da ANVISA, composição dos ingredientes e histórico da empresa fabricante. Também priorizamos produtos com estudos científicos preliminares e que demonstrem compromisso com a segurança do consumidor."
    },
    {
      question: "Como é feita a pesquisa com os usuários?",
      answer: "Nossa equipe realiza entrevistas detalhadas com usuários reais dos produtos, selecionados aleatoriamente através de clínicas parceiras e grupos de consumidores. Utilizamos questionários padronizados, registros fotográficos (com autorização) e acompanhamento médico para documentar os resultados. Cada produto é avaliado por no mínimo 100 usuários diferentes ao longo de 3 meses."
    },
    {
      question: "Como garantem a imparcialidade das análises?",
      answer: "Não aceitamos nenhum tipo de patrocínio ou pagamento dos fabricantes. Todos os produtos são adquiridos de forma anônima, como qualquer consumidor faria. Nossa equipe de avaliação inclui nutricionistas, médicos e pesquisadores independentes que seguem protocolos científicos rigorosos. Os resultados são auditados por uma empresa externa de controle de qualidade."
    },
    {
      question: "Como vocês medem os resultados?",
      answer: "Utilizamos uma combinação de medições objetivas e subjetivas. As medições objetivas incluem: peso, circunferência de cintura, quadril e outras áreas relevantes, percentual de gordura corporal e exames laboratoriais quando aplicável. As avaliações subjetivas incluem: nível de saciedade, energia, disposição física e satisfação geral. Todas as medições são realizadas por profissionais qualificados usando equipamentos calibrados."
    },
    {
      question: "Por que alguns produtos têm resultados diferentes?",
      answer: "Cada produto tem uma formulação única e atua de maneira diferente no organismo. Além disso, fatores como estilo de vida, alimentação e prática de exercícios dos participantes podem influenciar os resultados. Por isso, acompanhamos grupos diversificados de usuários e realizamos análises estatísticas detalhadas para entender a eficácia real de cada produto em diferentes perfis de pessoas."
    }
  ];

  return (
    <section className="bg-[#f7f7f7] py-16">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-[#333] text-center mb-12">
          Perguntas Frequentes
        </h2>

        <div className="max-w-[900px] mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
} 