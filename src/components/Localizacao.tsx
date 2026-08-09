export function Localizacao() {
  return (
    <section id="localizacao" className="pt-20 pb-10 px-6 md:px-12 bg-white flex flex-col items-center">
      <div className="max-w-4xl mx-auto w-full">
        
        {/* Título e Subtítulo */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-adv-marinho mb-4">
            Localização privilegiada
          </h2>
          <p className="text-adv-cinza text-base md:text-lg">
            Para o melhor atendimento de nossos clientes,<br className="hidden md:block" /> 
            realizamos atendimento na Região Oceânica em Niterói e no Centro do Rio de Janeiro.
          </p>
        </div>

        {/* Grid dos Endereços */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
          
          {/* Endereço 1: Itaipu */}
          <div className="flex flex-col text-adv-cinza text-sm md:text-base space-y-2">
            <div className="mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1c2b4a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                <path d="M9 22v-4h6v4"></path>
                <path d="M8 6h.01"></path>
                <path d="M16 6h.01"></path>
                <path d="M12 6h.01"></path>
                <path d="M12 10h.01"></path>
                <path d="M12 14h.01"></path>
                <path d="M16 10h.01"></path>
                <path d="M16 14h.01"></path>
                <path d="M8 10h.01"></path>
                <path d="M8 14h.01"></path>
              </svg>
            </div>
            <h3 className="text-xl font-serif text-adv-marinho font-bold mb-2">Itaipu (sede)</h3>
            <p>Estrada Francisco da Cruz Nunes, Piratininga, Niterói, RJ</p>
            <p>E-mail: contato@sdarrochella.com.br</p>
            <p className="font-bold text-adv-marinho pt-2">Atendimento com horário agendado</p>
            <p className="font-bold text-adv-marinho">Atendimento de 2ª a 5ª feira de 11h às 17h e 6ª de 11h às 16h</p>
          </div>

          {/* Endereço 2: Rio de Janeiro */}
          <div className="flex flex-col text-adv-cinza text-sm md:text-base space-y-2">
            <div className="mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1c2b4a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                <path d="M9 22v-4h6v4"></path>
                <path d="M8 6h.01"></path>
                <path d="M16 6h.01"></path>
                <path d="M12 6h.01"></path>
                <path d="M12 10h.01"></path>
                <path d="M12 14h.01"></path>
                <path d="M16 10h.01"></path>
                <path d="M16 14h.01"></path>
                <path d="M8 10h.01"></path>
                <path d="M8 14h.01"></path>
              </svg>
            </div>
            <h3 className="text-xl font-serif text-adv-marinho font-bold mb-2">Rio de Janeiro - Centro (filial)</h3>
            <p>Avenida Rio Branco, Centro, Rio de Janeiro, RJ</p>
            <p className="font-bold text-adv-marinho pt-6">Atendimento com horário agendado</p>
            <a href="#" className="text-yellow-600 font-bold flex items-center gap-1 hover:underline mt-2 text-sm uppercase tracking-wider">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              Get Directions
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}