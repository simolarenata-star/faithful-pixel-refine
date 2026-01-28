import garantiaImage from "@/assets/garantia-30-dias.png";

const PrecoSection = () => {
  const hotmartLink = "https://pay.hotmart.com/U100148053R?bid=1749669976671";

  const itensInclusos = [
    { item: "Treinamento Completo FisiosPro (Acesso por 1 ano)", valor: "R$ 997,00" },
    { item: "Caixa de Ferramentas de Gestão (Planilhas e Contratos)", valor: "R$ 297,00" },
    { item: "Diagnóstico de Carreira Personalizado", valor: "R$ 497,00" },
    { item: "Pacote de Bônus Exclusivos (Scripts, Google, Dashboard)", valor: "R$ 1.088,00" },
    { item: "MENTORIA INDIVIDUAL DE 3 MESES (Só nessa turma)", valor: "R$ 2.997,00" }
  ];

  return (
    <section className="section-dark py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
          Vamos recapitular tudo o que você vai levar:
        </h2>

        <div className="bg-card rounded-xl p-8 border border-border mb-8">
          <ul className="space-y-4">
            {itensInclusos.map((item, index) => (
              <li key={index} className="flex justify-between items-center border-b border-border pb-3">
                <span className="flex items-center gap-2 text-foreground">
                  <span className="text-primary">✅</span>
                  {item.item}
                </span>
                <span className="text-muted-foreground text-sm">(Valor: {item.valor})</span>
              </li>
            ))}
          </ul>

          <div className="border-t border-border pt-6 mt-6">
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold text-foreground">VALOR TOTAL DE TUDO ISSO:</span>
              <span className="text-xl font-bold text-foreground">R$ 5.876,00</span>
            </div>
          </div>
        </div>

        <div className="text-center mb-8">
          <p className="text-lg text-muted-foreground mb-4">
            Mas você não vai pagar nem perto disso. Como esta é a <strong className="text-primary">Turma Fundadora</strong>, eu quero premiar quem decidir entrar agora e construir essa história comigo.
          </p>
          <p className="text-muted-foreground mb-8">
            Para garantir sua vaga na Turma Fundadora, com a Mentoria Individual inclusa:
          </p>
        </div>

        {/* Box de Preço */}
        <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 border border-primary/30 text-center mb-8">
          <p className="text-muted-foreground text-lg mb-2">POR APENAS</p>
          <p className="text-5xl md:text-6xl font-bold text-foreground mb-2">
            12x de R$ 103,11
          </p>
          <p className="text-xl text-muted-foreground mb-6">
            ou <strong className="text-foreground">R$ 997,00</strong> à vista
          </p>
          <p className="text-sm text-muted-foreground mb-6">
            Pagamento 100% seguro com acesso imediato
          </p>
          <a 
            href={hotmartLink}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button inline-block text-xl px-12"
          >
            QUERO GARANTIR MINHA VAGA E A MENTORIA
          </a>
        </div>

        {/* Garantia */}
        <div className="bg-card rounded-xl p-8 border border-border flex flex-col md:flex-row items-center gap-6">
          <img 
            src={garantiaImage} 
            alt="Garantia de 30 dias" 
            className="w-32 h-32 object-contain"
          />
          <div>
            <h3 className="text-xl font-bold text-foreground mb-3">
              🛡️ Garantia Incondicional de 30 Dias
            </h3>
            <p className="text-muted-foreground">
              O risco é todo meu. Entre, assista às aulas, use as planilhas e participe da primeira mentoria. Se você achar que não é para você, eu devolvo 100% do seu dinheiro. Sem perguntas, sem letras miúdas. Basta um e-mail.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrecoSection;
