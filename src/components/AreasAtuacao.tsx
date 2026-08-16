import { Briefcase, ShoppingBag, ShieldCheck, Check } from 'lucide-react';

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
          Aqui você encontra todas as relações que o nosso escritório atende e as especializações que possuímos.
        </p>
      </div>

      {/* Grid de Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        
        {/* Card 1: DIREITO DO TRABALHO */}
        <div className="group bg-adv-creme p-8 lg:p-10 shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-adv-marrom flex flex-col h-full rounded-3xl">
          <div className="mb-6 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-adv-marrom mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
              <Briefcase size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-serif text-adv-marrom uppercase tracking-wide group-hover:text-adv-marinho transition-colors leading-tight">
              Direito <br/> <span className="text-xl font-sans font-bold">do Trabalho</span>
            </h3>
          </div>
          
          <ul className="space-y-4 text-adv-marinho font-medium text-sm md:text-base mt-4">
            {[
              'Atuação preventiva e consultiva',
              'Contencioso em todas as instâncias',
              'Compliance Trabalhista e Auditoria',
              'Elaboração e análise de contratos',
              'Negociações coletivas e mediações',
              'Acompanhamento em fiscalizações e MPT'
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-adv-marrom/20 flex items-center justify-center shrink-0">
                  <Check size={12} className="text-adv-marrom" strokeWidth={3} />
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Card 2: DIREITO DO CONSUMIDOR (Updated styling and text) */}
        <div className="group bg-adv-creme p-8 lg:p-10 shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-adv-azulClaro flex flex-col h-full rounded-3xl">
          <div className="mb-6 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-adv-azulClaro mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
              <ShoppingBag size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-serif text-adv-azulClaro uppercase tracking-wide group-hover:text-adv-marinho transition-colors leading-tight">
              Direito <br/> <span className="text-xl font-sans font-bold">Do Consumidor</span>
            </h3>
          </div>
          
          <ul className="space-y-4 text-adv-marinho font-medium text-sm md:text-base mt-4">
            {[
              'Ações judiciais e indenizatórias',
              'Reclamações administrativas (Procon, Consumidor.gov)',
              'Consultoria preventiva para fornecedores',
              'Elaboração de contratos de consumo',
              'Práticas abusivas e publicidade enganosa',
              'Defesa de superendividamento'
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-adv-azulClaro/20 flex items-center justify-center shrink-0">
                  <Check size={12} className="text-adv-azulClaro" strokeWidth={3} />
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Card 3: PROTEÇÃO DE DADOS E LGPD (Updated styling and text) */}
        <div className="group bg-adv-creme p-8 lg:p-10 shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-adv-marinho flex flex-col h-full rounded-3xl">
          <div className="mb-6 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-adv-marinho mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
              <ShieldCheck size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-serif text-adv-marinho uppercase tracking-wide group-hover:text-adv-marrom transition-colors leading-tight">
              Proteção de Dados <br/> <span className="text-xl font-sans font-bold">e LGPD</span>
            </h3>
          </div>
          
          <ul className="space-y-4 text-adv-marinho font-medium text-sm md:text-base mt-4">
            {[
              'Adequação e implementação à LGPD',
              'Auditorias e Relatórios de Impacto (RIPD)',
              'Treinamento e conscientização de equipes',
              'Gestão de Direitos dos Titulares',
              'Governança de Dados e Políticas Internas',
              'Resposta a incidentes e vazamentos'
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-adv-marinho/20 flex items-center justify-center shrink-0">
                  <Check size={12} className="text-adv-marinho" strokeWidth={3} />
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}