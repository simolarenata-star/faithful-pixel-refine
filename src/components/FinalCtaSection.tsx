import logo from "@/assets/logo-fisiospro.png";

const FinalCtaSection = () => {
  const hotmartLink = "https://pay.hotmart.com/U100148053R?bid=1749669976671";

  return (
    <section className="section-dark py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
          Essa é a sua hora
        </h2>
        
        <p className="text-lg text-muted-foreground mb-8">
          Se você está cansado de trabalhar sem direção, sem reconhecimento e sem ver progresso real na sua carreira, o <strong className="text-primary">FisiosPro</strong> foi feito pra você.
        </p>

        <p className="text-xl text-foreground font-semibold mb-8">
          É hora de parar de improvisar e começar a planejar de verdade.
        </p>

        <div className="space-y-2 text-lg text-foreground mb-8">
          <p><strong>Um método validado.</strong></p>
          <p><strong>Um plano claro.</strong></p>
          <p><strong>Um acompanhamento direto.</strong></p>
        </div>

        <p className="text-muted-foreground mb-8">
          Tudo que você precisa pra sair da estagnação e finalmente construir uma carreira sólida, com estrutura, liberdade e valorização.
        </p>

        <h3 className="text-2xl font-bold text-primary mb-8">
          A decisão é sua. Mas a oportunidade é agora.
        </h3>

        <a 
          href={hotmartLink}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button inline-block text-xl px-12 py-5 mb-12"
        >
          Clique aqui e garanta sua vaga no FisiosPro
        </a>

        {/* Footer */}
        <div className="border-t border-border pt-12">
          <img 
            src={logo} 
            alt="FisiosPro" 
            className="h-12 mx-auto mb-6"
          />
          <div className="flex justify-center gap-4 mb-4">
            <a 
              href="https://www.instagram.com/fisios_pro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              Instagram
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            Contato: <a href="mailto:dudafisiospro@gmail.com" className="text-primary hover:underline">dudafisiospro@gmail.com</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
