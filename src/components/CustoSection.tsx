const CustoSection = () => {
  const hotmartLink = "https://pay.hotmart.com/U100148053R?bid=1749669976671";

  return (
    <section className="section-dark py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
          A pergunta que você deve se fazer agora não é "quanto custa o curso"…
        </h2>
        <p className="text-xl text-center text-primary font-semibold mb-12">
          A pergunta certa é: "Quanto custa continuar sem ele?"
        </p>

        <div className="bg-card rounded-xl p-8 border border-border mb-12">
          <p className="text-muted-foreground mb-6">
            Muitos fisioterapeutas acham que investir em conhecimento é um "gasto". Mas vamos fazer uma conta rápida e incontestável sobre o custo real de continuar operando no amadorismo:
          </p>

          <ul className="space-y-6">
            <li className="flex items-start gap-3">
              <span className="text-destructive text-xl">❌</span>
              <span className="text-muted-foreground">
                <strong className="text-foreground">Quanto custa cada paciente que pergunta o preço no WhatsApp e não fecha</strong> porque você não soube usar o script certo? (Provavelmente você perde pelo menos uns R$ 1.000,00 por cada "não" que recebe).
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-destructive text-xl">❌</span>
              <span className="text-muted-foreground">
                <strong className="text-foreground">Quanto custa "pagar para trabalhar"</strong> a cada atendimento, cobrando um valor que não cobre nem o seu deslocamento ou os custos fixos do consultório? (O erro clássico que transforma sua rotina em uma corrida de ratos sem lucro real).
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-destructive text-xl">❌</span>
              <span className="text-muted-foreground">
                <strong className="text-foreground">Quanto custa a sua saúde física e mental</strong>, atendendo 12 horas por dia, carregando maca ou sem tempo para sua família? (Esse custo não tem preço).
              </span>
            </li>
          </ul>
        </div>

        <div className="text-center mb-12">
          <p className="text-xl text-foreground font-semibold mb-4">
            O FisiosPro não é um custo. É um <span className="text-primary">acelerador de lucro</span>.
          </p>
          <p className="text-muted-foreground mb-6">
            💡 Pense comigo: Se você aplicar apenas uma técnica de vendas que eu ensino e fechar apenas um plano de tratamento novo… <strong className="text-foreground">O curso já se pagou.</strong>
          </p>
          <p className="text-foreground">
            Todo o resto — a organização, a precificação correta, a fidelização, a mentoria individual — é <strong className="text-primary">LUCRO PURO</strong> no seu bolso.
          </p>
        </div>

        <div className="bg-card rounded-xl p-8 border border-border mb-8">
          <p className="text-lg text-foreground font-semibold mb-4">Você tem dois caminhos diante de você:</p>
          <ol className="space-y-4 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="text-destructive font-bold">1.</span>
              <span>Continuar tentando sozinho, "batendo cabeça", perdendo pacientes e dinheiro por tentativa e erro (o caminho mais caro, demorado e solitário).</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">2.</span>
              <span>Pegar o atalho, entrar na Turma Fundadora, ter minha mentoria pessoal e resolver esses problemas de uma vez por todas com um método validado.</span>
            </li>
          </ol>
        </div>

        <p className="text-center text-xl text-foreground font-bold mb-8">
          O risco de tentar sozinho é alto. O risco de vir comigo é <span className="text-primary">zero</span>.
        </p>

        <div className="flex justify-center">
          <a 
            href={hotmartLink}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            QUERO PARAR DE PERDER DINHEIRO
          </a>
        </div>
      </div>
    </section>
  );
};

export default CustoSection;
