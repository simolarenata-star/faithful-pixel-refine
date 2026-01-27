import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    pergunta: "\"Sou recém-formado ou ainda estou na faculdade. O FisiosPro é para mim?\"",
    resposta: "Com certeza. Na verdade, você está no melhor momento possível. A maioria dos fisioterapeutas perde anos (e muito dinheiro) tentando descobrir sozinhos como cobrar e se posicionar. Entrando agora, você já começa sua carreira com a mentalidade e as ferramentas certas, pulando a fase do \"amadorismo\" e acelerando seus resultados em anos."
  },
  {
    pergunta: "\"Eu atendo em domicílio. O método funciona no meu caso?\"",
    resposta: "Sim! A lógica de vendas, precificação e fidelização é a mesma, seja no consultório ou na casa do paciente. Inclusive, o Duda (seu mentor) tem vasta experiência em atendimento domiciliar e vai te ensinar a cobrar o valor justo pelo seu deslocamento e transformar o atendimento domiciliar em um negócio lucrativo, não em um \"bico\"."
  },
  {
    pergunta: "\"Já tenho consultório e agenda cheia, mas sinto que trabalho muito e ganho pouco. O curso ajuda?\"",
    resposta: "Com certeza. Agenda lotada nem sempre é sinônimo de dinheiro no bolso. Se você trabalha sem parar e não vê o lucro sobrar, o problema provavelmente está na sua precificação ou na gestão dos custos. O FisiosPro vai te ensinar a ajustar seu modelo de negócio para aumentar sua margem de lucro, permitindo que você ganhe mais atendendo a mesma quantidade de pacientes — ou até trabalhando menos, com mais qualidade de vida."
  },
  {
    pergunta: "\"Não tenho tempo para assistir aulas longas. Como funciona?\"",
    resposta: "O método foi desenhado para quem tem rotina corrida. As aulas são diretas ao ponto, sem enrolação teórica. Além disso, você recebe ferramentas prontas (scripts, planilhas, checklists) para aplicar imediatamente. O objetivo do curso é fazer você ganhar tempo organizando sua rotina, e não perder tempo estudando teorias que não funcionam."
  },
  {
    pergunta: "\"Como vai funcionar a Mentoria Individual de bônus?\"",
    resposta: "Ao garantir sua vaga nesta turma, você terá direito a um acompanhamento exclusivo de 3 meses. Você terá acesso direto ao Duda para tirar dúvidas específicas do seu negócio, validar suas estratégias e receber direcionamento personalizado. É como ter um sócio experiente te guiando por 90 dias."
  },
  {
    pergunta: "\"Por quanto tempo terei acesso ao curso?\"",
    resposta: "Você terá acesso completo a todas as aulas, ferramentas e atualizações por 1 ano (12 meses). Você pode assistir no seu ritmo, quantas vezes quiser dentro desse período. É tempo mais do que suficiente para aplicar o método, rever os conteúdos e transformar sua carreira."
  },
  {
    pergunta: "\"E se eu entrar e achar que não é para mim?\"",
    resposta: "Você tem Risco Zero. Eu confio tanto no meu Método que ofereço uma garantia incondicional de 30 dias. Você pode entrar, assistir às aulas, baixar as ferramentas e, se por qualquer motivo achar que não valeu a pena, basta enviar um e-mail e devolvemos 100% do seu investimento. Sem perguntas e sem letras miúdas."
  }
];

const FaqSection = () => {
  const hotmartLink = "https://pay.hotmart.com/U100148053R?bid=1749669976671";

  return (
    <section className="section-darker py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-4">
          Ainda com dúvida?
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Veja as respostas para as perguntas mais comuns:
        </p>

        <Accordion type="single" collapsible className="space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card rounded-xl border border-border px-6"
            >
              <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline">
                {item.pergunta}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.resposta}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <a 
            href={hotmartLink}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button inline-block"
          >
            SIM, QUERO ENTRAR COM RISCO ZERO
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
