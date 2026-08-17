import { Link } from 'react-router-dom';
import { Mail, MapPin, Send } from 'lucide-react';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export function Contato() {
  // LÓGICA DO FORMULÁRIO
  const form = useRef<HTMLFormElement>(null);
  const [enviando, setEnviando] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sucesso' | 'erro'>('idle');

  const enviarMensagem = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.current) return;

    setEnviando(true);
    setStatus('idle');

    emailjs.sendForm(
      'SEU_SERVICE_ID', // Substituir depois
      'SEU_TEMPLATE_ID', // Substituir depois
      form.current,
      'SUA_PUBLIC_KEY' // Substituir depois
    )
    .then(() => {
      setStatus('sucesso');
      form.current?.reset();
    })
    .catch((error) => {
      console.error('Erro ao enviar e-mail:', error);
      setStatus('erro');
    })
    .finally(() => {
      setEnviando(false);
    });
  };

  // VISUAL DA SEÇÃO
  return (
    <section id="contato" className="py-24 px-6 md:px-12 bg-adv-creme text-adv-marinho">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Coluna da Esquerda: Informações */}
        <div>
          <span className="text-sm font-bold text-adv-marrom uppercase tracking-widest">Atendimento</span>
          <h2 className="text-4xl md:text-5xl font-serif mt-4 mb-8 leading-tight">Fale com o escritório</h2>
          <p className="text-lg text-adv-cinza mb-10 leading-relaxed">
            Para agendar uma avaliação do seu caso trabalhista, de consumo ou solicitar uma proposta de adequação à LGPD para a sua empresa, entre em contato pelo e-mail ou preencha o formulário abaixo.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-adv-branco rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-gray-100">
                <Mail className="text-adv-marrom" size={24} />
              </div>
              <div>
                <h4 className="font-bold">E-mail Corporativo</h4>
                <p className="text-adv-cinza">contato@sdarrochella.com.br</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-adv-branco rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-gray-100">
                <MapPin className="text-adv-marrom" size={24} />
              </div>
              <div>
                <h4 className="font-bold">Endereço (Sede)</h4>
                <p className="text-adv-cinza">Estrada Francisco da Cruz 5428 loja 123, Shopping Barravento, Piratininga, Niterói, RJ</p>
              </div>
            </div>
          </div>
        </div>

        {/* Coluna da Direita: Formulário com cantos arredondados 3xl */}
        <div className="bg-adv-branco p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
          <form ref={form} className="space-y-6" onSubmit={enviarMensagem}>
            
            <div>
              <label htmlFor="nome" className="block text-sm font-bold text-adv-marinho mb-2">Nome Completo</label>
              <input 
                type="text" 
                id="nome" 
                name="nome" 
                required 
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-adv-marrom focus:border-transparent transition-all" 
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-adv-marinho mb-2">E-mail</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-adv-marrom focus:border-transparent transition-all" 
              />
            </div>

            <div>
              <label htmlFor="mensagem" className="block text-sm font-bold text-adv-marinho mb-2">Como podemos ajudar?</label>
              <textarea 
                id="mensagem" 
                name="mensagem" 
                rows={4} 
                required 
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-adv-marrom focus:border-transparent transition-all resize-none"
              ></textarea>
            </div>

            {/* TRAVA DE SEGURANÇA LGPD */}
            <div className="bg-adv-creme/50 p-4 rounded-xl border border-adv-marrom/20 text-xs text-adv-cinza">
              <label className="flex items-start gap-3 cursor-pointer">
                <input 
                  type="checkbox" 
                  name="consentimento_lgpd"
                  required 
                  className="mt-1 w-4 h-4 text-adv-marrom bg-white border-gray-300 rounded focus:ring-adv-marrom focus:ring-offset-1 shrink-0" 
                />
                <span className="leading-relaxed">
                  Li e estou ciente da Política de Privacidade. Os dados informados são utilizados exclusivamente para responder a este contato e avaliar a possibilidade de atendimento. <Link to="/politica-de-privacidade" className="font-bold underline hover:text-adv-marrom">Consulte a Política de Privacidade.</Link>
                </span>
              </label>
            </div>

            <button 
              type="submit" 
              disabled={enviando}
              className="w-full bg-adv-marinho text-adv-branco font-bold uppercase tracking-wider py-4 rounded-xl hover:bg-adv-marrom transition-colors flex items-center justify-center gap-2 shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {enviando ? 'Enviando Mensagem...' : 'Enviar Mensagem'}
              {!enviando && <Send size={18} />}
            </button>

            {/* Mensagens de Feedback */}
            {status === 'sucesso' && (
              <p className="text-green-700 font-medium text-center mt-4 bg-green-50 p-3 rounded-xl border border-green-200">
                Mensagem enviada com sucesso! O escritório retornará em breve.
              </p>
            )}
            {status === 'erro' && (
              <p className="text-red-700 font-medium text-center mt-4 bg-red-50 p-3 rounded-xl border border-red-200">
                Ocorreu um erro ao enviar. Por favor, tente novamente ou entre em contato pelo e-mail.
              </p>
            )}
            
          </form>
        </div>

      </div>
    </section>
  );
}