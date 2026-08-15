import { Helmet } from 'react-helmet-async';
import { Landmark, Home, Users, ShieldAlert, AlertCircle, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AtuacaoEmParceria() {
  return (
    <main className="bg-adv-branco text-adv-cinza min-h-screen">
      <Helmet>
        <title>Atuação em Parceria | SDA Advocacia</title>
        <meta name="description" content="Conheça nossos escritórios parceiros nas áreas de Direito Previdenciário, Bancário, Imobiliário e Famílias." />
      </Helmet>

      {/* 1. HERO SECTION ESCURO COM MARCA D'ÁGUA */}
      <section className="relative bg-adv-marinho text-adv-branco pt-32 pb-24 px-6 md:px-12 overflow-hidden shadow-inner">
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="text-sm font-bold text-adv-laranja uppercase tracking-widest">
            Rede de Apoio Jurídico
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-adv-branco mt-4 mb-8">
            Atuação em parceria
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-adv-branco/80 text-justify md:text-center">
            Nem toda demanda se resolve dentro de uma única área do direito. É frequente que um caso trabalhista tenha desdobramento previdenciário, que um conflito de consumo envolva contrato bancário ou aquisição de imóvel, ou que uma questão patrimonial exija análise sob a ótica do direito das famílias e das sucessões.
          </p>
        </div>
      </section>

      {/* 2. CONTEÚDO PRINCIPAL CLARO */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-lg font-medium text-adv-marinho mb-12">
            Para essas situações, o escritório mantém parcerias formais com bancas que atuam de forma dedicada nas seguintes áreas:
          </p>

          {/* Grid de Áreas de Parceria */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="bg-adv-creme/50 p-8 rounded-2xl border border-gray-100 flex items-center gap-6 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-adv-marinho text-adv-branco rounded-xl flex items-center justify-center shrink-0">
                <ShieldAlert size={28} />
              </div>
              <h3 className="text-xl font-bold text-adv-marinho">Direito Previdenciário</h3>
            </div>

            <div className="bg-adv-creme/50 p-8 rounded-2xl border border-gray-100 flex items-center gap-6 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-adv-marinho text-adv-branco rounded-xl flex items-center justify-center shrink-0">
                <Landmark size={28} />
              </div>
              <h3 className="text-xl font-bold text-adv-marinho">Direito Bancário</h3>
            </div>

            <div className="bg-adv-creme/50 p-8 rounded-2xl border border-gray-100 flex items-center gap-6 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-adv-marinho text-adv-branco rounded-xl flex items-center justify-center shrink-0">
                <Home size={28} />
              </div>
              <h3 className="text-xl font-bold text-adv-marinho">Direito Imobiliário</h3>
            </div>

            <div className="bg-adv-creme/50 p-8 rounded-2xl border border-gray-100 flex items-center gap-6 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-adv-marinho text-adv-branco rounded-xl flex items-center justify-center shrink-0">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-bold text-adv-marinho">Direito das Famílias e Sucessões</h3>
            </div>
          </div>

          {/* Blocos de Aviso (Quote e Importante) */}
          <div className="space-y-6">
            <div className="bg-adv-marrom text-adv-branco p-8 rounded-2xl shadow-lg flex flex-col md:flex-row items-center md:items-start gap-6">
              <MessageSquare size={40} className="shrink-0 opacity-80" />
              <div>
                <h4 className="font-bold text-lg mb-2">Aviso no primeiro atendimento</h4>
                <p className="leading-relaxed opacity-90 italic">
                  "Se a sua questão envolve alguma dessas áreas, informe no primeiro atendimento para que a análise já seja direcionada corretamente ao escritório parceiro."
                </p>
              </div>
            </div>

            <div className="bg-white border-l-4 border-adv-marinho p-8 rounded-r-2xl shadow-sm flex flex-col md:flex-row items-center md:items-start gap-6">
              <AlertCircle size={40} className="text-adv-marinho shrink-0" />
              <div>
                <h4 className="font-bold text-adv-marinho text-lg mb-2">Importante</h4>
                <p className="text-adv-cinza leading-relaxed">
                  Cada escritório parceiro responde tecnicamente pela sua própria atuação, com contratação e honorários próprios e independentes.
                </p>
              </div>
            </div>
          </div>

          {/* Botão de Contato */}
          <div className="mt-16 text-center">
            <Link 
              to="/contato" 
              className="inline-block bg-adv-marinho text-adv-branco font-bold uppercase tracking-wider px-8 py-4 rounded-full hover:bg-adv-marrom transition-colors shadow-md"
            >
              Agendar Atendimento
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}