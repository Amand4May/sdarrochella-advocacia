import { Briefcase, FileSignature, Scale, CheckCircle } from 'lucide-react';

export function AreasAtuacao() {
  return (
    <section id="areas-de-atuacao" className="py-20 px-6 md:px-12 bg-adv-branco">
      
      {/* Cabeçalho da Seção */}
      <div className="text-center mb-16">
        <span className="text-sm font-bold text-adv-laranja uppercase tracking-widest">
          Especialidades
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-adv-marinho mt-4 mb-4">
          Áreas de atuação
        </h2>
        <p className="text-adv-cinza text-base md:text-lg max-w-2xl mx-auto">
          Aqui você encontra todas as áreas que nosso escritório atende e as especializações que possuímos.
        </p>
      </div>

      {/* Grid de Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        
        {/* Card 1: DIREITO DO TRABALHO (Laranja) */}
        <div className="group bg-adv-creme p-8 lg:p-10 shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-adv-laranja flex flex-col h-full rounded-b-lg">
          <div className="mb-6 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-adv-laranja mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
              <Briefcase size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-serif text-adv-laranja uppercase tracking-wide group-hover:text-adv-marinho transition-colors leading-tight">
              Direito <br/> <span className="text-xl font-sans font-bold">Do Trabalho</span>
            </h3>
          </div>
          
          <ul className="space-y-4 text-adv-marinho font-medium text-sm md:text-base mt-4">
            {['Consultoria e orientações em geral', 'Acompanhamento de acordos', 'Compliance Trabalhista', 'Elaboração e análise de contratos', 'Ação Trabalhista', 'Ações Possessórias Trabalhistas'].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle size={20} className="text-adv-laranja shrink-0 mt-0.5" strokeWidth={2} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Card 2: EXTRAJUDICIAL (Azul Marinho) */}
        <div className="group bg-adv-creme p-8 lg:p-10 shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-adv-marinho flex flex-col h-full rounded-b-lg">
          <div className="mb-6 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-adv-marinho mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
              <FileSignature size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-serif text-adv-marinho uppercase tracking-wide group-hover:text-adv-laranja transition-colors leading-tight">
              Extrajudicial <br/> <span className="text-xl font-sans font-bold">Acompanhamentos</span>
            </h3>
          </div>
          
          <ul className="space-y-4 text-adv-marinho font-medium text-sm md:text-base mt-4">
            {['Notificações extrajudiciais', 'Cobrança', 'Execução de contratos', 'Acompanhamento em assinaturas', 'Diligências no INSS', 'Cálculos trabalhistas e consumidor'].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle size={20} className="text-adv-marinho shrink-0 mt-0.5" strokeWidth={2} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Card 3: DIREITO DO CONSUMIDOR (Azul Claro) */}
        <div className="group bg-adv-creme p-8 lg:p-10 shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-adv-azulClaro flex flex-col h-full rounded-b-lg">
          <div className="mb-6 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-adv-azulClaro mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
              <Scale size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-serif text-adv-azulClaro uppercase tracking-wide group-hover:text-adv-marinho transition-colors leading-tight">
              Direito <br/> <span className="text-xl font-sans font-bold">Do Consumidor</span>
            </h3>
          </div>
          
          <ul className="space-y-4 text-adv-marinho font-medium text-sm md:text-base mt-4">
            {['Consultoria e orientações em geral', 'Acompanhamento de acordos', 'Treinamento operacional', 'Elaboração e análise de contratos', 'Ação judicial em JEC', 'Ação Judicial em Vara Cível'].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                {/* Aqui está o seu azul claro nos checks também! */}
                <CheckCircle size={20} className="text-adv-azulClaro shrink-0 mt-0.5" strokeWidth={2} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}