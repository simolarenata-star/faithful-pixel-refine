import dudaImage from "@/assets/duda-kuhl.jpg";

const MentorSection = () => {
  return (
    <section className="section-darker py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
          Conheça <span className="text-primary">Duda Kühl</span>, seu Mentor nessa jornada
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <img 
              src={dudaImage} 
              alt="Duda Kühl" 
              className="rounded-xl shadow-2xl max-w-[280px] w-full"
            />
          </div>

          <div className="space-y-4">
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl">✅</span>
                <span><strong className="text-foreground">Fisioterapeuta com mais de 15 anos</strong> de experiência prática.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl">✅</span>
                <span><strong className="text-foreground">Fundador da clínica Fisios do Bem</strong> com duas unidades e mais de R$ 1 milhão faturados em 2024 e em 2025.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl">✅</span>
                <span><strong className="text-foreground">Criador do Método FisiosPro</strong>, a trilha estratégica para fisioterapeutas.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl">✅</span>
                <span><strong className="text-foreground">Conhece a realidade do atendimento domiciliar</strong> e o peso de empreender no cenário mais difícil: abriu sua clínica duas semanas antes do lockdown da pandemia e transformou o caos na sua maior virada de chave.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl">✅</span>
                <span><strong className="text-foreground">Hoje vive da fisioterapia com clareza, propósito e crescimento real</strong> — e ensina exatamente esse caminho para outros profissionais.</span>
              </li>
            </ul>

            <blockquote className="border-l-4 border-primary pl-4 italic text-foreground mt-6">
              "Não existe momento perfeito para crescer. Existe método para fazer o crescimento acontecer, independente do cenário lá fora."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorSection;
