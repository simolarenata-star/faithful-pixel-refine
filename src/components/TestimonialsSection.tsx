import { Heart } from "lucide-react";

const testimonials = [
  {
    message: "Eduardo, passando para agradecer por todas as dicas, foram de extrema importância para progressão do meu crescimento, sem dúvidas são detalhes que fazem a diferença. Suas dicas e ideias fez toda diferença durante esse tempo.",
    time: "9:11 da manhã",
    hasHeart: false
  },
  {
    message: "Tudo certo, todos fecharam. Principalmente a minha última avaliação, a mãe da paciente me encheu de perguntas e eu respondi todas, ela fechou comigo na hora. Gratidão, suas dicas foram de extrema importância ❤️",
    time: "4:37 da tarde",
    hasHeart: true
  },
  {
    message: "Cara, segue a todo vapor, fiz avaliação em uma paciente pela estratégia que você me disse, agora tenho mais 2 avaliações para serem feitas semana que vem",
    time: "8:41 da manhã",
    hasHeart: false
  },
  {
    message: "Eu só estou no começo da mentoria e já mudou totalmente minha mentalidade, essa visão de novas oportunidades na fisioterapia, isso motiva, impulsiona, obrigada por já entregar tanto no primeiro contato, tanta clareza, é nítido a propriedade que vc tem de fala, isso dá uma segurança imensa... sair dessa rotina extremamente exaustiva e ver que dá pra ser tudo mais leve e mais rentável não tem preço... tenho certeza que vai ser um caminho de muitas conquistas. Que JÁ está sendo em tão pouco tempo. Ansiosa para as próximas reuniões. Só tenho a te agradecer por tanto ❤️",
    time: "8:43 da noite",
    hasHeart: true
  }
];

const TestimonialsSection = () => {
  return (
    <section className="section-dark py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
          Veja o que acontece quando você aplica o <span className="text-primary">Método FisiosPro</span>:
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className="bg-primary/20 p-2 rounded-full">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-foreground text-sm md:text-base leading-relaxed mb-3">
                    "{testimonial.message}"
                  </p>
                  <span className="text-muted-foreground text-xs">
                    {testimonial.time}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
