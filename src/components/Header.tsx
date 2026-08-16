import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const location = useLocation();

  // Essa função garante que o menu mobile feche sozinho e a página 
  // role de volta para o topo toda vez que o usuário trocar de tela.
  useEffect(() => {
    setMenuAberto(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <header className="bg-adv-branco shadow-sm sticky top-0 z-50">
      
      {/* Barra Principal */}
      <div className="py-1 px-6 md:px-14 flex justify-between items-center">
        
        {/* 1. Logo do Escritório */}
        <div className="cursor-pointer flex items-center">
          <Link to="/">
            <img 
              src="/advocaciapreto.svg" 
              alt="Logo S. Darrochella Advocacia" 
              className="h-12 md:h-20 w-auto object-contain" 
            />
          </Link>
        </div>

        {/* 2. Menu de Navegação (Escondido no mobile, visível no desktop) */}
        <nav className="hidden md:flex gap-8 text-xs font-bold text-adv-cinza uppercase tracking-widest items-center">
          <Link to="/" className="hover:text-adv-marrom transition-colors duration-300">Início</Link>
          <Link to="/para-voce" className="hover:text-adv-marrom transition-colors duration-300">Para Você</Link>
          <Link to="/para-empresas" className="hover:text-adv-marrom transition-colors duration-300">Para Empresas</Link>
          <Link to="/atuacao-em-parceria" className="hover:text-adv-marrom transition-colors duration-300">Parcerias</Link>
        </nav>

        {/* 3. Botão Fale Conosco & Menu Mobile */}
        <div className="flex items-center gap-4">
          <Link 
            to="/#contato"  
            className="hidden md:inline-block bg-adv-marinho text-adv-branco px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-adv-cinza transition-colors duration-300"
          >
            Fale Conosco
          </Link>

          {/* Ícone de Menu Hambúrguer para Mobile */}
          <button 
            className="md:hidden text-adv-marinho hover:text-adv-marrom p-2"
            onClick={() => setMenuAberto(!menuAberto)}
          >
            {menuAberto ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* 4. Menu Mobile Dropdown */}
      {menuAberto && (
        <nav className="md:hidden bg-adv-branco border-t border-gray-100 px-6 py-4 flex flex-col gap-4 shadow-xl">
          <Link to="/" className="text-sm font-bold text-adv-cinza uppercase tracking-widest hover:text-adv-marrom py-2 border-b border-gray-50">Início</Link>
          <Link to="/para-voce" className="text-sm font-bold text-adv-cinza uppercase tracking-widest hover:text-adv-marrom py-2 border-b border-gray-50">Para Você</Link>
          <Link to="/para-empresas" className="text-sm font-bold text-adv-cinza uppercase tracking-widest hover:text-adv-marrom py-2 border-b border-gray-50">Para Empresas</Link>
          <Link to="/atuacao-em-parceria" className="text-sm font-bold text-adv-cinza uppercase tracking-widest hover:text-adv-marrom py-2 border-b border-gray-50">Parcerias</Link>
          <Link to="/contato" className="text-sm font-bold text-adv-cinza uppercase tracking-widest hover:text-adv-marrom py-2">Contato</Link>
        </nav>
      )}

    </header>
  );
}