import { useState } from 'react';

export function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="bg-adv-branco shadow-sm sticky top-0 z-50">
      
      {/* Barra Principal */}
      <div className="py-1 px-6 md:px-14 flex justify-between items-center">
        
        {/* 1. Logo do Escritório */}
        <div className="cursor-pointer flex items-center">
          <a href="#home"><img 
            src="/advocaciapreto.svg" 
            alt="Logo S. Darrochella Advocacia" 
            className="h-12 md:h-20 w-auto object-contain" 
          /></a>
        </div>

        {/* 2. Menu de Navegação (Escondido no mobile, visível no desktop) */}
        <nav className="hidden md:flex gap-8 text-xs font-bold text-adv-cinza uppercase tracking-widest">
          <a href="#home" className="hover:text-adv-laranja transition-colors duration-300">Home</a>
          <a href="#sobre" className="hover:text-adv-laranja transition-colors duration-300">Sobre</a>
          <a href="#areas-de-atuacao" className="hover:text-adv-laranja transition-colors duration-300">Áreas de Atuação</a>
          <a href="#como-funciona" className="hover:text-adv-laranja transition-colors duration-300">Como Funciona</a>
          <a href="#equipe" className="hover:text-adv-laranja transition-colors duration-300">Equipe</a>
          <a href="#contato" className="hover:text-adv-laranja transition-colors duration-300">Contato</a>
                    <a href="#localizacao" className="hover:text-adv-laranja transition-colors duration-300">Localização</a>
        </nav>

        {/* 3. Botão Fale Conosco & Menu Mobile */}
        <div className="flex items-center gap-4">
          <a 
            href="#contato" 
            className="hidden md:inline-block bg-adv-marinho text-adv-branco px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-adv-cinza transition-colors duration-300"
          >
            Fale Conosco
          </a>

          {/* Ícone de Menu Hambúrguer para Mobile */}
          <button 
            className="md:hidden text-adv-marinho hover:text-adv-laranja p-2"
            onClick={() => setMenuAberto(!menuAberto)}
          >
            {/* Se o menu estiver aberto, mostra um 'X', se não, mostra os 3 tracinhos */}
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

      {/* 4. Menu Mobile Dropdown (Aparece quando clica no hambúrguer) */}
      {menuAberto && (
        <nav className="md:hidden bg-adv-branco border-t border-gray-100 px-6 py-4 flex flex-col gap-4 shadow-xl">
          {/* O setMenuAberto(false) garante que o menu feche sozinho quando a pessoa clicar no link */}
          <a href="#home" onClick={() => setMenuAberto(false)} className="text-sm font-bold text-adv-cinza uppercase tracking-widest hover:text-adv-laranja py-2 border-b border-gray-50">Home</a>
          <a href="#sobre" onClick={() => setMenuAberto(false)} className="text-sm font-bold text-adv-cinza uppercase tracking-widest hover:text-adv-laranja py-2 border-b border-gray-50">Sobre</a>
          <a href="#areas-de-atuacao" onClick={() => setMenuAberto(false)} className="text-sm font-bold text-adv-cinza uppercase tracking-widest hover:text-adv-laranja py-2 border-b border-gray-50">Áreas de Atuação</a>
          <a href="#como-funciona" onClick={() => setMenuAberto(false)} className="text-sm font-bold text-adv-cinza uppercase tracking-widest hover:text-adv-laranja py-2 border-b border-gray-50">Como Funciona</a>
          <a href="#equipe" onClick={() => setMenuAberto(false)} className="text-sm font-bold text-adv-cinza uppercase tracking-widest hover:text-adv-laranja py-2 border-b border-gray-50">Equipe</a>
          <a href="#contato" onClick={() => setMenuAberto(false)} className="text-sm font-bold text-adv-cinza uppercase tracking-widest hover:text-adv-laranja py-2">Contato</a>
          <a href="#localizacao" onClick={() => setMenuAberto(false)} className="text-sm font-bold text-adv-cinza uppercase tracking-widest hover:text-adv-laranja py-2 border-b border-gray-50">Localização</a>
        </nav>
      )}

    </header>
  );
}