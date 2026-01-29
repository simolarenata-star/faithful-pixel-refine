import logo from "@/assets/logo-fisiospro.png";

const HeroSection = () => {
  const hotmartLink = "https://pay.hotmart.com/U100148053R?bid=1749669976671";

  return (
    <section className="section-dark min-h-screen py-8 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Logo centralizado */}
        <div className="flex flex-col items-center mb-8">
          <img 
            src={logo} 
            alt="FisiosPro – Estratégia para Fisioterapeutas" 
            className="h-24 md:h-32 object-contain"
          />
        </div>

        {/* Headline */}
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center text-foreground leading-tight mb-6">
          Fisioterapeutas Comuns Vivem na Correria.{" "}
          <span className="text-gradient">
            Fisioterapeutas Estratégicos Constroem Carreiras Lucrativas e Organizadas
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-center text-muted-foreground max-w-4xl mx-auto mb-10">
          Conheça o <span className="text-primary font-semibold">Método FisiosPro</span>: o passo a passo completo para atrair pacientes ideais, cobrar o que você vale e ter previsibilidade financeira — seja no domicílio, consultório ou clínica.
        </p>

        {/* Vídeo YouTube */}
        <div className="max-w-3xl mx-auto mb-6">
          <p className="text-center text-foreground font-semibold mb-4 text-lg">
            Veja como o Método FisiosPro funciona na prática (sem milagres)
          </p>
          <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/Vd3LZEGLaQs"
              title="Método FisiosPro"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Texto abaixo do vídeo */}
        <p className="text-center text-muted-foreground text-lg max-w-3xl mx-auto mb-8">
          Estratégias práticas para aumentar seu lucro e organizar sua carreira (sem trabalhar o dobro).
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <a 
            href={hotmartLink}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button text-center"
          >
            Quero conhecer a Trilha FisiosPro
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
