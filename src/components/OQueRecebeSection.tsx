import { Check } from "lucide-react";

const OQueRecebeSection = () => {
  const itens = [
    {
      titulo: "Trilha Completa de Aulas (Do Zero à Escala)",
      descricao: <>Acesso por <strong>1 ano (12 meses)</strong> ao acervo estratégico com o passo a passo prático de vendas, posicionamento, fidelização e gestão. Sem teoria chata, direto ao ponto.</>
    },
    {
      titulo: "Caixa de Ferramentas de Gestão (Editáveis)",
      descricao: "Você vai baixar e usar as mesmas ferramentas que eu uso nas minhas clínicas: planilhas de precificação, modelos de contrato e controle de pacientes."
    },
    {
      titulo: "Diagnóstico Personalizado de Carreira",
      descricao: "Um raio-x completo para identificar exatamente onde você está travado e qual o próximo passo ideal para o seu momento."
    },
    {
      titulo: "Comunidade FisiosPro",
      descricao: "Acesso ao nosso grupo exclusivo para networking, troca de experiências e suporte com profissionais que jogam o mesmo jogo que você."
    }
  ];

  return (
    <section className="section-dark py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-4">
          O que você recebe ao entrar no <span className="text-primary">FisiosPro</span>:
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          (Tudo o que você precisa para sair do operacional e virar um estrategista)
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {itens.map((item, index) => (
            <div key={index} className="card-feature">
              <div className="flex items-start gap-3">
                <div className="bg-primary/20 p-2 rounded-full flex-shrink-0">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">{item.titulo}</h3>
                  <p className="text-muted-foreground text-sm">{item.descricao}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OQueRecebeSection;
