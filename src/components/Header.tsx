export function Header() {
  return (
    <header className="bg-adv-branco py-1 px-6 md:px-14 flex justify-between items-center shadow-sm sticky top-0 z-50">
      
      {/* 1. Logo do Escritório */}
      <div className="cursor-pointer flex items-center">
        <img 
          src="/advocaciapreto.svg" 
          alt="Logo S. Darrochella Advocacia" 
          className="h-12 md:h-20 w-auto object-contain" 
        />
      </div>

      {/* 2. Menu de Navegação (Escondido no mobile, visível no desktop) */}
      <nav className="hidden md:flex gap-8 text-xs font-bold text-adv-cinza uppercase tracking-widest">
        <a href="#home" className="hover:text-adv-laranja transition-colors duration-300">Home</a>
        <a href="#sobre" className="hover:text-adv-laranja transition-colors duration-300">Sobre</a>
        <a href="#areas-de-atuacao" className="hover:text-adv-laranja transition-colors duration-300">Áreas de Atuação</a>
        <a href="#equipe" className="hover:text-adv-laranja transition-colors duration-300">Equipe</a>
        <a href="#contato" className="hover:text-adv-laranja transition-colors duration-300">Contato</a>
      </nav>

      {/* 3. Botão Fale Conosco & Menu Mobile */}
      <div className="flex items-center gap-4">
        <a 
          href="#contato" 
          className="hidden md:inline-block bg-adv-marinho text-adv-branco px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-adv-cinza transition-colors duration-300"
        >
          Fale Conosco
        </a>

        {/* Ícone de Menu Hambúrguer para Mobile (Aparece apenas em telas pequenas) */}
        <button className="md:hidden text-adv-marinho hover:text-adv-laranja p-2">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

    </header>
  );
}