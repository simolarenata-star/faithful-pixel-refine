const trilhaFaixas = [
  {
    faixa: "FAIXA BRANCA",
    emoji: "🥋",
    titulo: "O Desorganizado com Potencial",
    subtitulo: "(A fase de entender onde você está e para onde vai)",
    beltClass: "belt-white",
    itens: [
      "📍 Diagnóstico de Carreira: Identificação das travas que impedem seu crescimento.",
      "🎯 Definição de Metas Claras: Onde você quer chegar financeiramente e profissionalmente.",
      "🔍 Nicho Lucrativo: Como escolher ou refinar sua área de atuação para ser referência."
    ],
    evolucao: "🚀 Tem clareza absoluta do seu momento atual e um objetivo financeiro definido."
  },
  {
    faixa: "FAIXA AZUL",
    emoji: "🥋",
    titulo: "O Planejador de Crescimento",
    subtitulo: "(A fase de arrumar a casa, precificar certo e organizar a rotina)",
    beltClass: "belt-blue",
    itens: [
      "📝 Estrutura do Plano de Tratamento: Como montar propostas irrecusáveis.",
      "💰 Precificação Inteligente: A matemática exata para cobrar o valor justo e ter lucro real.",
      "💻 Posicionamento Digital Básico: Arrumando a \"vitrine\" do seu negócio."
    ],
    evolucao: "🚀 Tem seus preços ajustados, rotina organizada e sabe exatamente o que vender."
  },
  {
    faixa: "FAIXA ROXA",
    emoji: "🥋",
    titulo: "O Vendedor com Propósito",
    subtitulo: "(A fase de perder o medo de vender e garantir que o paciente fique)",
    beltClass: "belt-purple",
    itens: [
      "🗣️ Roteiros de Vendas (Scripts): O que falar no WhatsApp e pessoalmente para fechar contratos.",
      "🛡️ Quebra de Objeções: Como responder quando o paciente diz \"tá caro\" ou \"vou pensar\".",
      "📄 3 Formatos de Planos: Modelos prontos de planos de tratamento para diferentes perfis.",
      "❤️ Estratégias de Fidelização: Técnicas para renovação de planos de tratamento completo."
    ],
    evolucao: "🚀 Para de vender sessões avulsas e começa a fechar planos de tratamento completo com segurança."
  },
  {
    faixa: "FAIXA MARROM",
    emoji: "🥋",
    titulo: "O Captador Inteligente",
    subtitulo: "(A fase de acelerar a chegada de novos pacientes)",
    beltClass: "belt-brown",
    itens: [
      "📢 Tráfego Pago (Google e Meta Ads): Como fazer anúncios que trazem pacientes qualificados.",
      "🌐 Landing Page de Alta Conversão: A estrutura da página que transforma cliques em agendamentos.",
      "🎯 Segmentação de Público: Atingindo a pessoa certa, no bairro certo, com a dor certa."
    ],
    evolucao: "🚀 Tem um fluxo constante de novos interessados chegando no seu WhatsApp toda semana."
  },
  {
    faixa: "FAIXA PRETA",
    emoji: "🥋",
    titulo: "O FisioPro com Visão de Expansão",
    subtitulo: "(A fase de escalar, gerir e conquistar liberdade)",
    beltClass: "belt-black",
    itens: [
      "🏢 Visão de Negócio e Escala: Saindo do operacional exaustivo para assumir o comando estratégico da sua carreira.",
      "👥 Gestão de Pessoas e Parceiros: Como crescer sua equipe sem perder a qualidade.",
      "📊 Indicadores de CEO: Olhando para os números estratégicos e não apenas operacionais.",
      "🕊️ Liberdade de Tempo: Processos que permitem que o negócio rode com previsibilidade."
    ],
    evolucao: "🚀 Seu faturamento cresce com consistência e você tem liberdade para escolher como e quando atuar."
  }
];

const TrilhaSection = () => {
  const hotmartLink = "https://pay.hotmart.com/U100148053R?bid=1749669976671";

  return (
    <section className="section-dark py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-foreground mb-4">
          A Trilha FisiosPro: <span className="text-primary">O seu GPS de crescimento</span>
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-12">
          Não importa onde você está hoje. Nós temos o próximo passo exato para você.
        </p>

        <div className="space-y-6">
          {trilhaFaixas.map((item, index) => (
            <div 
              key={index}
              className={`bg-card rounded-xl p-6 ${item.beltClass}`}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{item.emoji}</span>
                    <h3 className="text-xl font-bold text-foreground">{item.faixa}: {item.titulo}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">{item.subtitulo}</p>
                  
                  <ul className="space-y-2 mb-4">
                    {item.itens.map((texto, i) => (
                      <li key={i} className="text-muted-foreground flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>{texto}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-primary/10 rounded-lg p-3">
                    <p className="text-sm">
                      <strong className="text-primary">Você evolui quando:</strong>{" "}
                      <span className="text-foreground">{item.evolucao}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            O segredo não é a velocidade, é a direção. Você não precisa adivinhar o próximo passo. O GPS já está pronto. Basta seguir a trilha para transformar sua rotina caótica em uma carreira <span className="font-bold text-black">sólida e lucrativa</span>.
          </p>
          <a 
            href={hotmartLink}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button inline-block"
          >
            QUERO COMEÇAR MINHA JORNADA AGORA
          </a>
        </div>
      </div>
    </section>
  );
};

export default TrilhaSection;
