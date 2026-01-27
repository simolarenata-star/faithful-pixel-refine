import { Check, X } from "lucide-react";

const paraQuemE = [
  "Está cansado de apenas sobreviver e quer viver bem da fisioterapia particular.",
  "Quer sair do improviso e parar de se sentir um amador na gestão da carreira.",
  "Atende bem, mas trava na hora de vender ou cobrar o valor justo.",
  "Quer lotar a agenda com previsibilidade, sem depender da sorte ou só de indicações.",
  "Já fatura, mas quer mais estratégia para crescer com leveza e organização.",
  "Sonha em ser o CEO da sua carreira, com liberdade e propósito."
];

const paraNaoE = [
  {
    titulo: "Para quem procura \"diquinhas\" de Instagram",
    descricao: "Não ensinamos dancinhas ou hacks de algoritmo. Ensinamos construção de negócio sólido."
  },
  {
    titulo: "Para quem quer fórmula mágica de dinheiro fácil",
    descricao: "O método exige aplicação. Se você procura atalhos sem trabalho, não entre."
  },
  {
    titulo: "Para quem acha que fisioterapia é caridade",
    descricao: "Se você tem medo de cobrar e não quer ver sua profissão como um negócio lucrativo, nossa mentalidade não vai bater."
  },
  {
    titulo: "Para quem busca apenas técnica clínica",
    descricao: "Aqui não ensinamos a tratar joelho ou coluna. Ensinamos a lotar a agenda de joelhos e colunas para tratar."
  }
];

const ParaQuemSection = () => {
  return (
    <section className="section-darker py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-4">
          Este treinamento não é para todo mundo.
        </h2>
        <p className="text-xl text-center text-muted-foreground mb-12">Veja se é para você.</p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Para quem É */}
          <div className="bg-card rounded-xl p-6 border border-primary/30">
            <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
              <Check className="w-6 h-6" />
              O FisiosPro é para você se:
            </h3>
            <ul className="space-y-4">
              {paraQuemE.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-primary text-lg">✅</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Para quem NÃO é */}
          <div className="bg-card rounded-xl p-6 border border-destructive/30">
            <h3 className="text-xl font-bold text-destructive mb-6 flex items-center gap-2">
              <X className="w-6 h-6" />
              PARA QUEM NÃO É O FISIOSPRO:
            </h3>
            <ul className="space-y-4">
              {paraNaoE.map((item, index) => (
                <li key={index} className="text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <span className="text-destructive text-lg">❌</span>
                    <div>
                      <strong className="text-foreground">{item.titulo}:</strong>{" "}
                      <span>{item.descricao}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParaQuemSection;
