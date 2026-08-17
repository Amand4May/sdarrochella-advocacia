import { useState } from 'react';

export function Equipe() {
  const [certificadoAberto, setCertificadoAberto] = useState<{ titulo: string; src: string } | null>(null);

  // Lista atualizada com os 10 certificados da imagem
  const certificados = [
    { id: 1, titulo: 'Performan-C', tipo: 'Capacitação', src: '/certificados/certificado-performan-c.jpg' },
    { id: 2, titulo: 'Expert em Execução', tipo: 'Prática Jurídica', src: '/certificados/certificado-expert-execucao.jpg' },
    { id: 3, titulo: 'Gestão de Tempo e Produtividade', tipo: 'Desenvolvimento', src: '/certificados/certificado-gestao-tempo.png' },
    { id: 4, titulo: 'Contestação e Reconvenção', tipo: 'Prática Jurídica', src: '/certificados/certificado-contestacao.jpg' },
    { id: 5, titulo: 'Direito do Consumidor (Renato Porto)', tipo: 'Especialização', src: '/certificados/certificado-consumidor-porto.jpg' },
    { id: 6, titulo: 'Custas e GRERJ ESAJ TJRJ', tipo: 'Prática Processual', src: '/certificados/certificado-custas.jpg' },
    { id: 7, titulo: 'NR-1', tipo: 'Segurança e Trabalho', src: '/certificados/certificado-nr1.jpeg' },
    { id: 8, titulo: 'Trabalho Plataformizado (TST)', tipo: 'Direito do Trabalho', src: '/certificados/certificado-tst-plataformas.jpg' },
    { id: 9, titulo: 'Dados e IA', tipo: 'Tecnologia e LGPD', src: '/certificados/certificado-dados-ia.png' },
    { id: 10, titulo: 'Validação de Certificado - AVA', tipo: 'Educação', src: '/certificados/certificado-ava.jpg' }
  ];

  return (
    <section id="equipe" className="py-24 px-6 md:px-12 bg-adv-creme/40">
      <div className="max-w-6xl mx-auto">
        
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

        <div className="bg-adv-branco rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row items-stretch border border-adv-marrom/10">
          
          <div className="md:w-2/5 w-full h-96 md:h-auto relative bg-white">
            <img 
              src="/foto-renata.jpg" 
              alt="Dra. Renata L. Sequeira d’Arrochella" 
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
          </div>

          <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
            <h3 className="text-3xl font-serif text-adv-marinho mb-2">
              Dra. Renata L. Sequeira d’Arrochella
            </h3>
            <p className="text-adv-marrom font-bold uppercase tracking-wider text-xs mb-6">
              Advogada, OAB/RJ 201.951 - Sócia-Fundadora
            </p>
            
            <div className="space-y-4 text-adv-cinza text-sm md:text-base mb-6 leading-relaxed">
              <ul className="space-y-3 mb-6 text-adv-cinza text-sm">
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

            {/* --- BLOCO DE CERTIFICADOS COM SCROLL --- */}
            <div className="mb-8">
              <h4 className="text-sm font-bold text-adv-marinho uppercase tracking-wider mb-4 border-b border-adv-marrom/10 pb-2">
                Certificações e Autoridade
              </h4>
              
              {/* O segredo está aqui: max-h-[220px] e overflow-y-auto */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-[220px] overflow-y-auto pr-2 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-adv-creme [&::-webkit-scrollbar-thumb]:bg-adv-marrom/30 [&::-webkit-scrollbar-thumb]:rounded-full">
                {certificados.map((cert) => (
                  <button 
                    key={cert.id}
                    onClick={() => setCertificadoAberto({ titulo: cert.titulo, src: cert.src })}
                    className="group text-left flex items-center gap-2 p-2 rounded-lg border border-adv-marrom/10 bg-adv-branco hover:border-adv-laranja/50 hover:bg-adv-creme transition-all duration-300 w-full"
                    title="Visualizar documento"
                  >
                    <div className="w-8 h-8 rounded-md bg-adv-marinho/5 flex items-center justify-center text-adv-marinho group-hover:text-adv-laranja transition-colors shrink-0">
                      {cert.id === 9 ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                           <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                           <polyline points="14 2 14 8 20 8"></polyline>
                           <path d="M9 15l2 2 4-4"></path>
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="8" r="6"></circle>
                          <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
                        </svg>
                      )}
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-adv-marinho leading-tight group-hover:text-adv-laranja transition-colors line-clamp-1">
                        {cert.titulo}
                      </p>
                      <p className="text-[9px] text-adv-cinza uppercase tracking-wider mt-0.5">
                        {cert.tipo}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 mt-auto pt-4 border-t border-adv-marrom/10">
              <a href="https://www.linkedin.com/in/renata-lima-sequeira-d-arrochella-1ba86813a/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-adv-creme flex items-center justify-center text-adv-marinho hover:bg-adv-marrom hover:text-white transition-colors shadow-sm" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="https://www.instagram.com/renatalsdarrochella/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-adv-creme flex items-center justify-center text-adv-marinho hover:bg-adv-marrom hover:text-white transition-colors shadow-sm" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* --- POP-UP / MODAL DO CERTIFICADO --- */}
      {certificadoAberto && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-fadeIn"
          onClick={() => setCertificadoAberto(null)}
        >
          <div 
            className="relative bg-white p-3 rounded-2xl max-w-4xl w-full shadow-2xl flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setCertificadoAberto(null)}
              className="absolute -top-12 right-0 bg-adv-laranja hover:bg-adv-laranja/80 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all"
              title="Fechar"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <img 
              src={certificadoAberto.src} 
              alt={certificadoAberto.titulo} 
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg bg-gray-100"
            />
            
            <p className="text-adv-marinho font-serif font-medium text-sm md:text-base mt-3 text-center px-4">
              {certificadoAberto.titulo}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}