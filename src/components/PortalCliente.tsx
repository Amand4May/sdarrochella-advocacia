import { Smartphone, Apple, Play } from 'lucide-react';

export function PortalCliente() {
  return (
    <section id="portal-cliente" className="py-20 px-6 md:px-12 bg-adv-marinho text-adv-branco">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        {/* Lado Esquerdo: Texto e Instruções */}
        <div className="lg:w-1/2 space-y-6">
          <div className="inline-flex items-center gap-2 bg-adv-laranja/20 text-adv-laranja px-4 py-2 rounded-full text-sm font-bold uppercase tracking-widest mb-2">
            <Smartphone size={16} />
            <span>Área do Cliente</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-serif leading-tight">
            Acompanhe seu processo na palma da mão
          </h2>
          
          <p className="text-adv-branco/80 text-lg leading-relaxed">
            Para garantir total transparência e segurança, disponibilizamos o acompanhamento processual através do aplicativo oficial <strong>Astrea - Portal do Cliente</strong>.
          </p>

          <div className="bg-white/10 p-5 rounded-2xl border border-white/20">
            <h4 className="font-bold text-adv-laranja mb-2">Como acessar?</h4>
            <p className="text-sm text-adv-branco/80 leading-relaxed">
              O acesso é exclusivo para clientes do escritório. Solicite à nossa equipe o cadastro do seu e-mail no sistema. Após a liberação, basta baixar o aplicativo pelos links oficiais abaixo e fazer o seu login.
            </p>
          </div>

          {/* Botões de Download */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            {/* Botão App Store */}
            <a 
              href="https://apps.apple.com/br/app/astrea-portal-do-cliente/id6449494863" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-white text-adv-marinho px-6 py-3 rounded-xl hover:bg-adv-creme transition-colors font-semibold"
            >
              <Apple size={24} />
              <div className="text-left flex flex-col">
                <span className="text-[10px] uppercase tracking-wider font-normal leading-none mb-1">Baixe na</span>
                <span className="text-sm leading-none">App Store</span>
              </div>
            </a>

            {/* Botão Google Play */}
            <a 
              href="https://play.google.com/store/apps/details?id=br.net.astrea.app.cliente&pcampaignid=web_share" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-transparent border-2 border-white text-white px-6 py-3 rounded-xl hover:bg-white/10 transition-colors font-semibold"
            >
              <Play size={24} />
              <div className="text-left flex flex-col">
                <span className="text-[10px] uppercase tracking-wider font-normal leading-none mb-1">Disponível no</span>
                <span className="text-sm leading-none">Google Play</span>
              </div>
            </a>
          </div>
        </div>

        {/* Lado Direito: Ilustração / Mockup com o Print Real */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative w-64 h-[550px] bg-adv-creme rounded-[2.5rem] border-[5px] border-white shadow-2xl overflow-hidden">
            <img 
              src="astreaapp.jpg" 
              alt="Print da tela do Astrea" 
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

      </div>
    </section>
  );
}