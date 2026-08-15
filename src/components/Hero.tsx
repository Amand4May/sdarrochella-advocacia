import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-[calc(100vh-80px)] flex flex-col lg:flex-row"
    >
      
      {/* 1. Lado Esquerdo: Textos com Fundo Azul Marinho */}
      <div className="w-full lg:w-1/2 bg-adv-marinho text-adv-branco px-6 md:px-12 py-20 flex flex-col justify-center">
        <div className="max-w-xl mx-auto lg:ml-auto lg:mr-12 space-y-6">
          <span className="text-sm md:text-base font-bold text-adv-laranja uppercase tracking-widest block">
            Renata Lima Sequeira d'Arrochella Advocacia (SDA Advocacia)
          </span>
          
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-serif leading-tight">
            Advocacia técnica em relações de trabalho, consumo e proteção de dados
          </h1>
          
          <p className="text-adv-bege text-lg md:text-xl leading-relaxed">
            Atuação judicial, extrajudicial, de assessoria e consultiva para pessoas físicas e para empresas, com atuação em Niterói e no Rio de Janeiro - RJ.
          </p>
          
          <div className="pt-6">
            <Link 
              to="/contato" 
              className="inline-block bg-adv-marrom hover:bg-adv-bege hover:text-adv-marinho text-adv-branco px-8 py-4 text-sm font-bold uppercase tracking-widest transition-colors duration-300 shadow-lg"
            >
              Agendar Atendimento
            </Link>
          </div>
        </div>
      </div>

      {/* 2. Lado Direito: A Foto Vertical Intacta */}
      <div className="w-full lg:w-1/2 min-h-[50vh] lg:min-h-full relative overflow-hidden bg-adv-creme">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/escritorio.jpg')" }}
        ></div>
        {/* Leve gradiente para unir as duas partes suavemente */}
        <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-adv-marinho to-transparent opacity-50 hidden lg:block"></div>
      </div>

    </section>
  );
}