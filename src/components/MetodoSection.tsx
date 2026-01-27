const MetodoSection = () => {
  return (
    <section className="section-darker py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-foreground mb-8">
          Você não precisa de mais um curso de técnica.
        </h2>
        
        <p className="text-xl md:text-2xl text-center text-primary font-semibold mb-8">
          Você precisa de um método para transformar todo esse conhecimento em uma carreira valorizada.
        </p>

        <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
          <p>
            A faculdade te ensinou a tratar pacientes, mas não te ensinou a atraí-los. O mercado te fez acreditar que o próximo certificado seria a virada de chave.
          </p>
          
          <p>
            A verdade é cruel: <span className="text-foreground font-semibold">ter currículo cheio não enche agenda</span>. Enquanto você acumula diplomas na parede, continua patinando na hora de precificar, vender e fidelizar. Você se tornou uma enciclopédia ambulante, mas sente que sua carreira não sai do lugar.
          </p>
          
          <p className="text-xl">
            Cursos técnicos te dão ferramentas de trabalho. O FisiosPro te dá o manual de instruções do negócio.
          </p>
          
          <p>
            Nós não vamos te ensinar uma nova manobra. Vamos te ensinar a <span className="font-semibold">construir a estrutura</span> que permite cobrar o valor justo pelo que você já faz — seja no consultório, na clínica ou no domicílio.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MetodoSection;
