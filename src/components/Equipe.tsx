export function Equipe() {
  return (
    <section id="equipe" className="py-24 px-6 md:px-12 bg-adv-creme/40">
      <div className="max-w-6xl mx-auto">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-adv-laranja uppercase tracking-widest">
            Quem Somos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-adv-marinho mt-4 mb-4">
            Nossa Equipe
          </h2>
          <p className="text-adv-cinza text-base md:text-lg max-w-2xl mx-auto">
            Profissionais altamente capacitados e dedicados a oferecer a melhor estratégia jurídica para o seu caso.
          </p>
        </div>

        {/* Card Principal da Dra. Renata com cantos arredondados 3xl */}
        <div className="bg-adv-branco rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row items-stretch border border-adv-marrom/10">
          
          {/* Foto da Dra. Renata */}
          <div className="md:w-2/5 w-full h-96 md:h-auto relative bg-white">
            <img 
              src="/foto-renata.jpg" 
              alt="Dra. Renata L. Sequeira d’Arrochella" 
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
          </div>

          {/* Informações e Biografia */}
          <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
            <h3 className="text-3xl font-serif text-adv-marinho mb-2">
              Dra. Renata L. Sequeira d’Arrochella
            </h3>
            <p className="text-adv-marrom font-bold uppercase tracking-wider text-xs mb-6">
              Advogada, OAB/RJ 201.951 - Sócia-Fundadora
            </p>
            
            <div className="space-y-4 text-adv-cinza text-sm md:text-base mb-8 leading-relaxed">
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

            {/* Redes Sociais / Contato Direto */}
            <div className="flex items-center gap-4 mt-auto pt-6 border-t border-adv-marrom/10">
              
              {/* Ícone LinkedIn */}
              <a href="https://www.linkedin.com/in/renata-lima-sequeira-d-arrochella-1ba86813a/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-adv-creme flex items-center justify-center text-adv-marinho hover:bg-adv-marrom hover:text-white transition-colors shadow-sm" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              
              {/* Ícone Instagram */}
              <a href="https://www.instagram.com/renatalsdarrochella/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-adv-creme flex items-center justify-center text-adv-marinho hover:bg-adv-marrom hover:text-white transition-colors shadow-sm" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}