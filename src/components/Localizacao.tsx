import { MapPin, Clock, Mail } from 'lucide-react';

export function Localizacao() {
  return (
    <section id="localizacao" className="py-24 px-6 md:px-12 bg-adv-branco">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Título e Subtítulo */}
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-adv-laranja uppercase tracking-widest">Onde Estamos</span>
          <h2 className="text-3xl md:text-5xl font-serif text-adv-marinho mt-4 mb-4">
            Localização privilegiada
          </h2>
          <p className="text-adv-cinza text-base md:text-lg max-w-2xl mx-auto">
            Para o melhor atendimento de nossos clientes, realizamos atendimento na Região Oceânica em Niterói e no Centro do Rio de Janeiro.
          </p>
        </div>

        {/* Grid dos Endereços em Cards Estilizados */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Endereço 1: Itaipu (Sede) */}
          <div className="bg-adv-creme/40 p-8 lg:p-10 rounded-3xl border border-adv-marrom/10 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
            <div>
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-adv-marinho mb-6 shadow-sm">
                <MapPin size={28} />
              </div>
              <h3 className="text-2xl font-serif text-adv-marinho font-bold mb-4">Itaipu <span className="text-sm font-sans font-normal text-adv-laranja uppercase tracking-wider block mt-1">(Sede)</span></h3>
              
              <p className="text-adv-cinza text-sm md:text-base mb-6 leading-relaxed">
                Estrada Francisco da Cruz Nunes, Piratininga, Niterói, RJ
              </p>

              <div className="space-y-3 text-sm text-adv-cinza pt-6 border-t border-adv-marrom/10">
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-adv-laranja shrink-0" />
                  <span>contato@sdarrochella.com.br</span>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={18} className="text-adv-laranja shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-adv-marinho">Atendimento com horário agendado</p>
                    <p className="text-xs text-adv-cinza/80 mt-0.5">2ª a 5ª feira de 11h às 17h e 6ª de 11h às 16h</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Endereço 2: Rio de Janeiro (Filial) */}
          <div className="bg-adv-creme/40 p-8 lg:p-10 rounded-3xl border border-adv-marrom/10 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
            <div>
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-adv-marinho mb-6 shadow-sm">
                <MapPin size={28} />
              </div>
              <h3 className="text-2xl font-serif text-adv-marinho font-bold mb-4">Rio de Janeiro <span className="text-sm font-sans font-normal text-adv-laranja uppercase tracking-wider block mt-1">(Centro - Filial)</span></h3>
              
              <p className="text-adv-cinza text-sm md:text-base mb-6 leading-relaxed">
                Avenida Rio Branco, Centro, Rio de Janeiro, RJ
              </p>

              <div className="space-y-3 text-sm text-adv-cinza pt-6 border-t border-adv-marrom/10">
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-adv-laranja shrink-0" />
                  <span>contato@sdarrochella.com.br</span>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={18} className="text-adv-laranja shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-adv-marinho">Atendimento com horário agendado</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-adv-marrom/10">
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-adv-laranja font-bold flex items-center gap-2 hover:underline text-xs uppercase tracking-wider"
              >
                <MapPin size={16} />
                Como Chegar
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}