import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export function Contato() {
  // LÓGICA DO FORMULÁRIO (Deve ficar aqui, antes do return)
  const form = useRef<HTMLFormElement>(null);
  const [enviando, setEnviando] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sucesso' | 'erro'>('idle');

  const enviarMensagem = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.current) return;

    setEnviando(true);
    setStatus('idle');

    emailjs.sendForm(
      'SEU_SERVICE_ID', // Substituiremos isso depois
      'SEU_TEMPLATE_ID', // Substituiremos isso depois
      form.current,
      'SUA_PUBLIC_KEY' // Substituiremos isso depois
    )
    .then(() => {
      setStatus('sucesso');
      form.current?.reset(); // Limpa os campos após o envio
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
    <section id="contato" className="py-20 px-6 md:px-12 bg-adv-marinho text-adv-branco">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Coluna da Esquerda: Informações */}
        <div className="space-y-8">
          <div>
            <span className="text-sm font-bold text-adv-laranja uppercase tracking-widest">
              Fale Conosco
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mt-4 mb-6 leading-tight">
              Agende sua consulta e proteja seus direitos.
            </h2>
            <p className="text-adv-creme text-base md:text-lg opacity-90 max-w-md">
              Nossa equipe está pronta para analisar o seu caso com total sigilo e dedicação. Entre em contato pelos canais abaixo ou preencha o formulário.
            </p>
          </div>

          <div className="space-y-6 mt-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                <MessageCircle className="text-adv-laranja" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg">WhatsApp</h4>
                <p className="text-adv-creme opacity-80 mt-1">(15) 99999-9999</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                <Mail className="text-adv-laranja" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg">E-mail</h4>
                <p className="text-adv-creme opacity-80 mt-1">contato@sdarrochella.com.br</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                <MapPin className="text-adv-laranja" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Endereço</h4>
                <p className="text-adv-creme opacity-80 mt-1">
                  Rua Exemplo de Endereço, 123 - Sala 45<br />
                  Sorocaba, SP - CEP 18000-000
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Coluna da Direita: Formulário */}
        <div className="bg-adv-branco text-adv-cinza p-8 md:p-10 rounded-xl shadow-2xl">
          <h3 className="text-2xl font-serif text-adv-marinho mb-6">Envie uma mensagem</h3>
          
          <form ref={form} className="space-y-5" onSubmit={enviarMensagem}>
            <div>
              <label htmlFor="nome" className="block text-sm font-medium mb-2">Nome Completo</label>
              <input 
                type="text" 
                id="nome" 
                name="nome" 
                required
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-adv-laranja transition-all"
                placeholder="Seu nome"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="telefone" className="block text-sm font-medium mb-2">Telefone / WhatsApp</label>
                <input 
                  type="tel" 
                  id="telefone" 
                  name="telefone" 
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-adv-laranja transition-all"
                  placeholder="(00) 00000-0000"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">E-mail</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-adv-laranja transition-all"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="mensagem" className="block text-sm font-medium mb-2">Como podemos ajudar?</label>
              <textarea 
                id="mensagem" 
                name="mensagem" 
                rows={4}
                required
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-adv-laranja transition-all resize-none"
                placeholder="Descreva brevemente o seu caso..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={enviando}
              className="w-full bg-adv-laranja text-adv-branco font-bold uppercase tracking-wider py-4 rounded-lg hover:bg-orange-600 transition-colors mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {enviando ? 'Enviando...' : 'Enviar Mensagem'}
            </button>

            {/* Mensagem de Sucesso ou Erro */}
            {status === 'sucesso' && (
              <p className="text-green-600 font-medium text-center mt-4">Mensagem enviada com sucesso! Entraremos em contato em breve.</p>
            )}
            {status === 'erro' && (
              <p className="text-red-600 font-medium text-center mt-4">Ocorreu um erro ao enviar. Tente novamente mais tarde.</p>
            )}
          </form>
        </div>

      </div>
    </section>
  );
}