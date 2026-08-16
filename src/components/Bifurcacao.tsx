import { Link } from 'react-router-dom';
import { User, Building, ArrowRight } from 'lucide-react';

export function Bifurcacao() {
  return (
    <section className="py-24 px-6 md:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-adv-marinho mb-4">
            Por onde você quer começar
          </h2>
          <div className="w-16 h-1 bg-adv-laranja mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Card 1: Para Você (Agora com mais peso visual) */}
          <div className="bg-white p-10 lg:p-14 rounded-2xl shadow-xl border-t-4 border-adv-marrom flex flex-col h-full hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-adv-laranja/40 rounded-bl-full -z-0"></div>
            
            <div className="w-20 h-20 bg-adv-marinho text-adv-branco rounded-2xl flex items-center justify-center mb-8 relative z-10 shadow-md">
              <User size={40} strokeWidth={1.5} />
            </div>
            
            <h3 className="text-3xl lg:text-4xl font-bold text-adv-marinho mb-6 relative z-10">
              Para você
            </h3>
            
            <p className="text-lg text-gray-700 font-medium leading-relaxed flex-grow mb-10 relative z-10">
              Questões trabalhistas, relações de consumo e proteção dos seus dados pessoais.
            </p>
            
            <Link 
              to="/para-voce" 
              className="inline-flex items-center gap-3 text-adv-laranja text-sm lg:text-base font-bold uppercase tracking-widest hover:text-adv-marinho transition-colors group w-fit relative z-10"
            >
              Conhecer as áreas
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          {/* Card 2: Para Empresas */}
          <div className="bg-adv-marinho text-adv-branco p-10 lg:p-14 rounded-2xl shadow-xl flex flex-col h-full hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-adv-marrom/20 rounded-bl-full -z-0"></div>
            
            <div className="w-20 h-20 bg-white/10 text-adv-branco rounded-2xl flex items-center justify-center mb-8 relative z-10">
              <Building size={40} strokeWidth={1.5} />
            </div>
            
            <h3 className="text-3xl lg:text-4xl font-bold text-adv-branco mb-6 relative z-10">
              Para empresas
            </h3>
            
            <p className="text-lg text-adv-branco/80 leading-relaxed flex-grow mb-10 relative z-10">
              Compliance trabalhista, adequação à LGPD, atuação como Encarregado de Dados e assessoria em relações de consumo.
            </p>
            
            <Link 
              to="/para-empresas" 
              className="inline-flex items-center gap-3 text-adv-laranja text-sm lg:text-base font-bold uppercase tracking-widest hover:text-white transition-colors group w-fit relative z-10"
            >
              Conhecer as soluções
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}