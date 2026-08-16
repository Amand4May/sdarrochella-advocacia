export function Sobre() {
  return (
    <section id="sobre" className="py-24 px-6 md:px-12 bg-adv-branco">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Lado Esquerdo: O Escritório */}
        <div className="lg:col-span-7 space-y-6 text-lg leading-relaxed text-adv-cinza text-justify">
          <span className="text-sm font-bold text-adv-laranja uppercase tracking-widest block">Institucional</span>
          <h2 className="text-4xl lg:text-5xl font-serif text-adv-marinho text-left mb-6">O escritório</h2>
          
          <p>
            A <span className="font-bold">SDA Advocacia</span> é um escritório dedicado às relações de trabalho, às relações de consumo e à proteção de dados pessoais, com atuação judicial, extrajudicial e consultiva.
          </p>
          
          <p>
            Fundado pela <span className="font-bold">Dra. Renata Lima Sequeira d'Arrochella</span> em <span className="font-bold">2015</span>, o escritório reúne, em uma mesma estrutura, três frentes que costumam ser tratadas de forma isolada: a defesa de direitos individuais, a assessoria preventiva a empresas e a governança de dados pessoais. Essa combinação permite enxergar o mesmo fato sob perspectivas complementares, o que se traduz em análises mais completas e em decisões mais incorpadas.
          </p>
          
          <div className="p-6 bg-adv-creme/60 border-l-4 border-adv-laranja rounded-r-2xl shadow-sm mt-8">
            <p className="font-medium text-adv-marinho text-base md:text-lg">
              O trabalho é organizado a partir de três premissas: fundamentação técnica documentada, comunicação clara sobre riscos e alternativas, e acompanhamento próximo de cada etapa do caso.
            </p>
          </div>
        </div>

        {/* Lado Direito: Nossa Estrutura */}
        <div className="lg:col-span-5 bg-adv-creme rounded-3xl border border-adv-marrom/10 shadow-xl overflow-hidden flex flex-col">
          
          <div className="w-full h-[450px] lg:h-[500px] relative overflow-hidden bg-adv-marrom/5">
             <img 
               src="/escritorio.jpg" 
               alt="Interior do escritório SDA Advocacia" 
               className="w-full h-full object-cover object-center"
             />
          </div>

          <div className="p-8 md:p-10 pt-6 relative z-10">
            <h3 className="text-2xl lg:text-3xl font-serif text-adv-marinho mb-1">
              Nossa Estrutura e Acolhimento
            </h3>
            <p className="text-adv-marrom font-bold tracking-widest uppercase text-xs mb-8">MODERNIDADE E CONFORTO</p>

            <p className="text-adv-cinza leading-relaxed pt-6 border-t border-adv-marrom/20 text-sm italic">
              Nosso escritório foi concebido para ser um local de trabalho inspirador e um ponto de acolhimento para nossos clientes. Valorizamos o conforto e a privacidade, proporcionando um ambiente propício para a discussão de assuntos delicados.
            </p>            
          </div>
        </div>

      </div>
    </section>
  );
}