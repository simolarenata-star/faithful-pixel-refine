import { TrendingDown, TrendingUp } from "lucide-react";

const ProblemaSection = () => {
  return (
    <section className="section-darker py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-4">
          Não é falta de talento. <span className="text-primary">É falta de Método.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Cenário Comum */}
          <div className="bg-card rounded-xl p-6 border border-destructive/30">
            <div className="flex items-center gap-3 mb-6">
              <TrendingDown className="w-8 h-8 text-destructive" />
              <h3 className="text-xl font-bold text-foreground">📉 O CENÁRIO COMUM:</h3>
            </div>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-destructive font-bold">•</span>
                <span><strong className="text-foreground">60% dos fisioterapeutas</strong> lutam para atrair pacientes (Fonte: CREFITO, 2022)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive font-bold">•</span>
                <span>A maioria <strong className="text-foreground">não tem plano de carreira</strong> (Fonte: Sebrae, 2023)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive font-bold">•</span>
                <span>Resultado: <strong className="text-destructive">Estagnação e Burnout</strong></span>
              </li>
            </ul>
          </div>

          {/* Cenário Estratégico */}
          <div className="bg-card rounded-xl p-6 border border-primary/30">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-bold text-foreground">📈 O CENÁRIO ESTRATÉGICO:</h3>
            </div>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Organização digital aumenta a <strong className="text-foreground">produtividade em 2x</strong> (Fonte: McKinsey, 2021)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Rotina de execução <strong className="text-foreground">triplica a atração de pacientes</strong> (Fonte: Hubspot Health Report, 2023)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Resultado: <strong className="text-primary">Crescimento consistente</strong></span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground mb-6">
            E é exatamente isso que o <strong className="text-primary">FisiosPro</strong> entrega: clareza, direção e crescimento real para fisioterapeutas.
          </p>
          <p className="text-muted-foreground mb-4">
            Você não precisa mais tentar adivinhar o que fazer, nem buscar soluções soltas em vídeos e postagens aleatórias.
          </p>
          <p className="text-foreground font-semibold text-lg">
            O FisiosPro é um método prático e direto, que te mostra passo a passo como sair do improviso e construir uma carreira organizada, valorizada e lucrativa — com o que você já tem hoje.
          </p>
        </div>

        <div className="mt-8 text-center space-y-2 text-muted-foreground">
          <p>✅ Não importa se você atende em domicílio, em consultório ou está começando agora.</p>
          <p>✅ Não importa se você acha que não leva jeito para marketing ou vendas.</p>
          <p>✅ Não importa se você tem pouco tempo.</p>
        </div>

        <p className="text-center text-foreground font-semibold text-xl mt-8">
          O que você precisa é de um plano simples, que funcione na sua rotina — e é exatamente isso que o FisiosPro te entrega.
        </p>
      </div>
    </section>
  );
};

export default ProblemaSection;
