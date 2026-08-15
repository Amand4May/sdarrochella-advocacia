import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// ----------------------------------------------------------------------
// MOTOR DE INJEÇÃO DE SCRIPTS
// Aqui fica a trava de segurança. Códigos de rastreamento só entram 
// se essa função for chamada (ou seja, só após o consentimento explícito).
// ----------------------------------------------------------------------
const injectTrackingScripts = () => {
  console.log('✅ Consentimento total: Scripts de rastreamento injetados!');
  
  // Exemplo prático de como injetar o Google Analytics:
  // const script = document.createElement('script');
  // script.src = 'https://www.googletagmanager.com/gtag/js?id=G-SEU_CODIGO_AQUI';
  // script.async = true;
  // document.head.appendChild(script);
};

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verifica a preferência exata do usuário salva no navegador
    const consentMode = localStorage.getItem('lgpd-consent-mode');
    
    if (!consentMode) {
      // Se não escolheu nada ainda, mostra o banner (e nenhum script roda)
      setIsVisible(true);
    } else if (consentMode === 'all') {
      // Se o usuário já aceitou tudo em uma visita anterior, injeta os scripts no load
      injectTrackingScripts();
    }
    // Se for 'essential', o banner não aparece e o código de tracking também não roda.
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('lgpd-consent-mode', 'all');
    injectTrackingScripts(); // Libera as tags de marketing/analytics
    setIsVisible(false);
  };

  const handleAcceptEssential = () => {
    localStorage.setItem('lgpd-consent-mode', 'essential');
    console.log('🛡️ Consentimento restrito: Apenas cookies estritamente necessários.');
    // Não chama a injeção de scripts, apenas fecha o banner
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-adv-marinho text-adv-branco/90 p-6 shadow-[0_-10px_40px_rgba(0,0,0,0.3)] z-50 animate-in slide-in-from-bottom-full duration-500 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
        
        {/* Texto do Banner */}
        <div className="text-sm leading-relaxed text-center lg:text-left flex-1 lg:pr-12">
          <h4 className="text-adv-marrom font-bold uppercase tracking-widest mb-2 text-xs">
            Gestão de Privacidade e Cookies
          </h4>
          <p>
            Utilizamos cookies essenciais para o funcionamento do site e cookies de desempenho para entender como você interage com nossa página. 
            Sendo um escritório focado em adequação à LGPD, respeitamos o seu direito de escolha. 
            Para mais detalhes, acesse nossa{' '}
            <Link to="/politica-de-cookies" className="text-adv-marrom font-bold hover:underline">
              Política de Cookies
            </Link>
            {' '}e a{' '}
            <Link to="/politica-de-privacidade" className="text-adv-marrom font-bold hover:underline">
              Política de Privacidade
            </Link>.
          </p>
        </div>

        {/* Botões de Escolha Granular */}
        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
          <button 
            onClick={handleAcceptEssential}
            className="whitespace-nowrap bg-transparent border border-adv-branco/30 text-adv-branco font-bold uppercase tracking-wider px-6 py-3 rounded-lg hover:bg-white/10 transition-colors w-full sm:w-auto text-xs"
          >
            Apenas Essenciais
          </button>
          <button 
            onClick={handleAcceptAll}
            className="whitespace-nowrap bg-adv-marrom text-adv-branco font-bold uppercase tracking-wider px-6 py-3 rounded-lg hover:bg-adv-bege hover:text-adv-marinho transition-colors w-full sm:w-auto text-xs shadow-lg"
          >
            Aceitar Todos
          </button>
        </div>
        
      </div>
    </div>
  );
}