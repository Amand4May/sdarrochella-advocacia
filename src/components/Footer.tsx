import { Link } from 'react-router-dom';
import { MapPin, Mail, Shield } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-adv-marinho text-adv-branco/80 pt-16 pb-8 px-6 md:px-12 text-sm">
      
      {/* --- INÍCIO DA MARCA D'ÁGUA --- */}
      <img 
        src="/Logo_Bege_Compacta.svg" 
        alt="" 
        aria-hidden="true"
        className="absolute bottom-10 right-155 w-[450px] opacity-3 pointer-events-none select-none z-0"
      />
      {/* --- FIM DA MARCA D'ÁGUA --- */}

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">

        {/* Coluna 1: Marca e Endereço */}
        <div className="md:col-span-4 space-y-6">
          <img 
            src="/Logo_Bege_Compacta.svg" 
            alt="Logo Lima d'Arrochella Advocacia" 
            className="h-12 w-auto" 
          />
          <p className="text-adv-branco/70 leading-relaxed">
            Advocacia técnica em relações de trabalho, consumo e proteção de dados.
          </p>
          <p className="text-adv-branco/70 text-sm leading-relaxed">
            Lima d'Arrochella Sociedade Individual de Advocacia · CNPJ 69.841.543/0001-38 · OAB/RJ nº 229322026
          </p>
          <div className="space-y-4 pt-2">
            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-adv-marrom shrink-0 mt-0.5" />
              <span>Estrada Francisco da Cruz Nunes, 5428, Loja 123, Shopping Barravento, Piratininga, Niterói/RJ, CEP 24.350-310</span>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-adv-marrom shrink-0 mt-0.5" />
              <span>Rua Ator Paulo Gustavo, 251, sala 301, Icaraí, Niterói/RJ, CEP 24230-052</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-adv-marrom shrink-0" />
              <span>contato@limadarrochella.com.br</span>
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
            O tratamento de dados pessoais realizado neste site é efetuado por Lima d'Arrochella Sociedade Individual de Advocacia, inscrita no CNPJ sob o nº 69.841.543/0001-38 e registrada na OAB/RJ sob o nº 229322026, com sede na Estrada Francisco da Cruz Nunes, 5428, Loja 123, Piratininga, Niterói/RJ, na qualidade de controladora, nos termos do art. 5º, VI, da Lei nº 13.709/2018 (LGPD).
          </p>
          <p className="leading-relaxed">
            As atribuições de encarregada pelo tratamento de dados pessoais são exercidas pela titular da sociedade, Dra. Renata Lima Sequeira d'Arrochella (OAB/RJ 201.951).
          </p>
          <p className="leading-relaxed">
            Canal de comunicação para exercício de direitos e esclarecimentos sobre proteção de dados: <a href="mailto:contato@limadarrochella.com.br" className="text-adv-marrom hover:underline font-medium">contato@limadarrochella.com.br</a>.
          </p>
        </div>

      </div>

      {/* Direitos Autorais e Crédito */}
      <div className="relative z-10 max-w-7xl mx-auto pt-8 border-t border-white/10 text-center text-xs text-adv-branco/50 flex flex-col md:flex-row justify-between items-center gap-4">
        <span>&copy; {new Date().getFullYear()} Ld'A Advocacia. Todos os direitos reservados.</span>
        
        <span className="flex items-center gap-1">
          Desenvolvido por{' '}
          <a 
            href="https://amand4may.github.io/Portfolio-Amand4May/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-medium text-adv-branco/70 hover:text-adv-laranja transition-colors duration-300"
          >
            Amanda Mayumi
          </a>
        </span>
      </div>
      </footer>
  );
}