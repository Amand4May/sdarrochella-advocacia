export function Equipe() {
  return (
    <section id="equipe" className="py-20 px-6 md:px-12 bg-adv-creme">
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

        {/* Card Principal da Dra. Renata */}
        <div className="bg-adv-branco rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row items-stretch border-b-4 border-adv-laranja">
          
          {/* Foto (Usando uma imagem temporária do Unsplash) */}
          <div className="md:w-2/5 w-full h-96 md:h-auto relative">
            <img 
              src="/RenataDarrochella.png" 
              alt="Dra. Renata L. Sequeira d’Arrochella" 
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
          </div>

          {/* Informações e Biografia */}
          <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
            <h3 className="text-3xl font-serif text-adv-marinho mb-2">
              Dra. Renata L. Sequeira d’Arrochella
            </h3>
            <p className="text-adv-laranja font-bold uppercase tracking-wider text-sm mb-6">
              Sócia-Fundadora
            </p>
            
            <div className="space-y-4 text-adv-cinza mb-8">
              <p>
                Com mais de 9 anos de atuação sólida nas áreas Trabalhista e de Defesa do Consumidor, a Dra. Renata construiu sua carreira com base na ética, transparência e na busca incansável pela justiça.
              </p>
              <p>
                Sua abordagem é focada no atendimento humanizado, entendendo que por trás de cada processo existe uma pessoa em busca de paz e resolução. Especialista em estratégias complexas, lidera o escritório garantindo que cada cliente receba a máxima atenção e eficiência.
              </p>
            </div>

            {/* Redes Sociais / Contato Direto com SVG puro */}
            <div className="flex items-center gap-4 mt-auto">
              
              {/* Ícone LinkedIn */}
              <a href="https://www.linkedin.com/in/renata-lima-sequeira-d-arrochella-1ba86813a/" target="_blank" className="w-10 h-10 rounded-full bg-adv-creme flex items-center justify-center text-adv-marinho hover:bg-adv-laranja hover:text-white transition-colors" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              
              {/* Ícone Instagram */}
              <a href="https://www.instagram.com/renatalsdarrochella/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-adv-creme flex items-center justify-center text-adv-marinho hover:bg-adv-laranja hover:text-white transition-colors" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              
              {/* Ícone E-mail */}
              <a href="mailto:contato@sdarrochella.com.br" className="w-10 h-10 rounded-full bg-adv-creme flex items-center justify-center text-adv-marinho hover:bg-adv-laranja hover:text-white transition-colors" aria-label="E-mail">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}