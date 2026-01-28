import { Gift } from "lucide-react";

const bonus = [
  {
    numero: 1,
    titulo: "A Bíblia dos Scripts de Vendas",
    descricao: "O que falar, como cobrar e como fechar no WhatsApp e presencialmente. Copie, cole e venda.",
    valorOriginal: "R$ 197,00",
    textoGratis: "(Mas hoje sai de graça)"
  },
  {
    numero: 2,
    titulo: "Dashboard Financeiro Automatizado",
    descricao: "Pare de anotar em caderno. Tenha o controle do seu lucro e previsibilidade em uma única tela inteligente.",
    valorOriginal: "R$ 297,00",
    textoGratis: "(Mas hoje sai de graça)"
  },
  {
    numero: 3,
    titulo: "Guia \"Google Meu Negócio\" (Imã de Pacientes)",
    descricao: "O passo a passo para aparecer no topo das buscas do seu bairro sem gastar 1 real com anúncios.",
    valorOriginal: "R$ 497,00",
    textoGratis: "(Mas hoje sai de graça)"
  },
  {
    numero: 4,
    titulo: "O Checklist da Rotina Perfeita",
    descricao: "O organizador semanal para você nunca mais se sentir perdido na segunda-feira.",
    valorOriginal: "R$ 97,00",
    textoGratis: "(Mas hoje sai de graça)"
  }
];

const BonusSection = () => {
  const hotmartLink = "https://pay.hotmart.com/U100148053R?bid=1749669976671";

  return (
    <section className="section-darker py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-4">
          Bônus Exclusivos para a <span className="text-primary">Turma Fundadora</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          (Você vai levar mais de R$ 4.000,00 em ferramentas e mentoria de graça)
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {bonus.map((item, index) => (
            <div key={index} className="card-feature">
              <div className="flex items-start gap-3">
                <div className="bg-accent/20 p-2 rounded-full flex-shrink-0">
                  <Gift className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <span className="text-xs text-accent font-bold">🎁 Bônus {item.numero}</span>
                  <h3 className="font-bold text-foreground mb-2">{item.titulo}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{item.descricao}</p>
                  <p className="text-sm">
                    <span className="text-muted-foreground">{item.valorOriginal}</span>
                    <span className="text-accent font-bold ml-2">{item.textoGratis}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bônus Principal */}
        <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl p-8 border border-primary/30">
          <div className="text-center">
            <span className="text-sm text-accent font-bold">O GRANDE DIFERENCIAL (Só para esta turma)</span>
            <h3 className="text-2xl font-bold text-foreground mt-2 mb-4">
              🎁 Bônus 5: 3 Meses de Mentoria Individual com Duda Kühl
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Eu vou analisar pessoalmente o seu negócio, te dar a direção e acompanhar sua execução por 90 dias.
            </p>
            
            <div className="bg-card rounded-lg p-4 inline-block mb-6">
              <p className="text-destructive line-through text-xl">Valor Real: R$ 2.997,00</p>
              <p className="text-green-500 font-bold text-4xl">GRÁTIS</p>
              <p className="text-muted-foreground text-sm">(Apenas para os primeiros inscritos)</p>
            </div>

            <p className="text-sm text-muted-foreground mb-6 max-w-xl mx-auto">
              ⚠️ ATENÇÃO: Como minha hora técnica é alta e minha agenda é cheia, eu nunca mais vou oferecer isso de graça. Estou fazendo isso apenas para esta primeira turma, porque quero garantir que vocês sejam meus maiores cases de sucesso.
            </p>

            <a 
              href={hotmartLink}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button inline-block"
            >
              QUERO GARANTIR MINHA MENTORIA INDIVIDUAL
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
