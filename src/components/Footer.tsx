import { Link } from 'react-router-dom';
import { MapPin, Mail, Shield } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-adv-marinho text-adv-branco/80 pt-16 pb-8 px-6 md:px-12 text-sm">
      
      {/* --- INÍCIO DA MARCA D'ÁGUA --- */}
      <img 
        src="/advocaciapreto.svg" 
        alt="" 
        aria-hidden="true"
        className="absolute bottom-10 right-155 w-[450px] opacity-3 brightness-0 invert pointer-events-none select-none z-0"
      />
      {/* --- FIM DA MARCA D'ÁGUA --- */}

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">

        {/* Coluna 1: Marca e Endereço */}
        <div className="md:col-span-4 space-y-6">
          <img 
            src="/advocaciapreto.svg" 
            alt="S. Darrochella Advocacia Logo" 
            className="h-14 w-auto brightness-0 invert" 
          />
          <p className="text-adv-branco/70 leading-relaxed">
            Advocacia técnica em relações de trabalho, consumo e proteção de dados.
          </p>
          <div className="space-y-4 pt-2">
            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-adv-marrom shrink-0 mt-0.5" />
              <span>Estrada Francisco da Cruz 5428 loja 123, Shopping Barravento, Piratininga, Niterói, RJ</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-adv-marrom shrink-0" />
              <span>contato@sdarrochella.com.br</span>
            </div>
          </div>
        </div>

        {/* Coluna 2: Navegação Rápida */}
        <div className="md:col-span-2 space-y-6">
          <h4 className="font-bold text-adv-branco uppercase tracking-wider text-xs">O Escritório</h4>
          <ul className="space-y-3 flex flex-col">
            <Link to="/" className="hover:text-adv-marrom transition-colors">Início</Link>
            <Link to="/para-voce" className="hover:text-adv-marrom transition-colors">Para Você</Link>
            <Link to="/para-empresas" className="hover:text-adv-marrom transition-colors">Para Empresas</Link>
            <Link to="/atuacao-em-parceria" className="hover:text-adv-marrom transition-colors">Atuação em Parceria</Link>
            <Link to="/#contato" className="hover:text-adv-marrom transition-colors">Contato</Link>
          </ul>
        </div>

        {/* Coluna 3: Transparência e Políticas */}
        <div className="md:col-span-2 space-y-6">
          <h4 className="font-bold text-adv-branco uppercase tracking-wider text-xs">Transparência</h4>
          <ul className="space-y-3 flex flex-col">
            <Link to="/politica-de-privacidade" className="hover:text-adv-marrom transition-colors">Política de Privacidade</Link>
            <Link to="/politica-de-cookies" className="hover:text-adv-marrom transition-colors">Política de Cookies</Link>
          </ul>
        </div>

        {/* Coluna 4: Bloco LGPD */}
        <div className="md:col-span-4 bg-white/5 p-6 rounded-xl border border-white/10 text-xs text-adv-branco/60 space-y-4">
          <div className="flex items-center gap-2 text-adv-branco mb-2">
            <Shield size={16} className="text-adv-marrom" />
            <span className="font-bold uppercase tracking-wider text-xs">Conformidade LGPD</span>
          </div>
          <p className="leading-relaxed">
            O tratamento de dados pessoais realizado neste site é efetuado por Renata Lima Sequeira D’Arrochella, advogada inscrita na OAB/RJ sob o nº 201.951, com escritório profissional em Estrada Francisco da Cruz 5428 loja 123, Shopping Barravento, Piratininga, Niterói, Rio de Janeiro, na qualidade de controladora, nos termos do art. 5º, VI, da Lei nº 13.709/2018 (LGPD).
          </p>
          <p className="leading-relaxed">
            A controladora atua como profissional liberal, sem constituição de sociedade de advogados. As atribuições de encarregada são exercidas pela própria controladora.
          </p>
          <p className="leading-relaxed">
            Canal de comunicação para exercício de direitos e esclarecimentos sobre proteção de dados: <a href="mailto:contato@sdarrochella.com.br" className="text-adv-marrom hover:underline font-medium">contato@sdarrochella.com.br</a>.
          </p>
        </div>

      </div>

      {/* Direitos Autorais e Crédito */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 text-center text-xs text-adv-branco/50 flex flex-col md:flex-row justify-between items-center gap-4">
        <span>&copy; {new Date().getFullYear()} S. Darrochella Advocacia. Todos os direitos reservados.</span>
        <span>Desenvolvido por Amanda Mayumi</span>
      </div>
    </footer>
  );
}