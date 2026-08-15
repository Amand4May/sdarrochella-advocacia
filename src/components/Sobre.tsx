export function Sobre() {
  return (
    <section id="sobre" className="py-24 px-6 md:px-12 bg-adv-branco">
      {/* items-center garante que o texto e o card se alinhem verticalmente */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Lado Esquerdo: O Escritório (Alinhado verticalmente com o centro do card) */}
        <div className="lg:col-span-7 space-y-6 text-lg leading-relaxed text-adv-cinza text-justify">
          <span className="text-sm font-bold text-adv-laranja uppercase tracking-widest block">Institucional</span>
          <h2 className="text-4xl lg:text-5xl font-serif text-adv-marinho text-left mb-6">O escritório</h2>
          
          <p>
            A SDA Advocacia é um escritório dedicado às relações de trabalho, às relações de consumo e à proteção de dados pessoais, com atuação judicial, extrajudicial e consultiva.
          </p>
          
          <p>
            Fundado pela Dra. Renata Lima Sequeira d'Arrochella em 2015, o escritório reúne, em uma mesma estrutura, três frentes que costumam ser tratadas de forma isolada: a defesa de direitos individuais, a assessoria preventiva a empresas e a governança de dados pessoais. Essa combinação permite enxergar o mesmo fato sob perspectivas complementares, o que se traduz em análises mais completas e em decisões mais incorpadas.
          </p>
          
          <div className="p-6 bg-adv-creme/60 border-l-4 border-adv-laranja rounded-r-2xl shadow-sm mt-8">
            <p className="font-medium text-adv-marinho text-base md:text-lg">
              O trabalho é organizado a partir de três premissas: fundamentação técnica documentada, comunicação clara sobre riscos e alternativas, e acompanhamento próximo de cada etapa do caso.
            </p>
          </div>
        </div>

        {/* Lado Direito: A Sócia (Centralizado ao lado do texto) */}
        <div className="lg:col-span-5 bg-adv-creme rounded-3xl border border-adv-marrom/10 shadow-xl overflow-hidden flex flex-col">
          
          {/* Foto com corte controlado */}
          <div className="w-full h-[400px] relative overflow-hidden bg-white">
             <img 
               src="/foto-renata.jpg" 
               alt="Dra. Renata Lima Sequeira d'Arrochella" 
               className="w-full h-full object-cover object-top"
             />
          </div>

          <div className="p-8 md:p-10 pt-4 relative z-10">
            <h3 className="text-2xl lg:text-3xl font-serif text-adv-marinho mb-1">
              Renata Lima <span className="block">Sequeira d'Arrochella</span>
            </h3>
            <p className="text-adv-marrom font-bold tracking-widest uppercase text-xs mb-8">Advogada, OAB/RJ 201.951</p>
            
            <ul className="space-y-3 mb-8 text-adv-cinza text-sm">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-adv-marinho rounded-full mt-1.5 shrink-0"></div>
                <span>Pós-graduada em direito e processo do trabalho.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-adv-marinho rounded-full mt-1.5 shrink-0"></div>
                <span>Pós-graduada em direito do consumidor.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-adv-marinho rounded-full mt-1.5 shrink-0"></div>
                <span>Pós graduada em Lei Geral de Proteção de Dados (LGPD) e DPO (Data Protection Officer).</span>
              </li>
            </ul>

            <p className="text-adv-cinza leading-relaxed pt-4 border-t border-adv-marrom/20 text-sm">
              Atuação em Direito do Trabalho, Direito do Consumidor, Proteção de Dados Pessoais e Compliance Trabalhista. Exerce a função de Encarregada pelo Tratamento de Dados Pessoais (DPO) para organizações clientes.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}