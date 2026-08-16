import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react'; 

export function PoliticaCookies() {
  return (
    <main className="pt-32 pb-24 px-6 md:px-12 bg-adv-branco text-adv-cinza min-h-screen">
      <Helmet>
        <title>Política de Cookies | SDA Advocacia</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="max-w-3xl mx-auto">
        

        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-5 py-2.5 mb-10 text-xs font-bold uppercase tracking-widest text-adv-marinho border border-adv-marinho/20 rounded-full hover:bg-adv-marinho hover:text-adv-branco transition-all duration-300"
        >
          <ArrowLeft size={16} />
          Voltar para o início
        </Link>
        
        <h1 className="text-3xl md:text-4xl font-serif text-adv-marinho mb-8">Política de Cookies</h1>
        <div className="space-y-6 text-base leading-relaxed text-adv-cinza/90 text-justify">
          <p>
            Os cookies utilizados, finalidade e duração. Cookies são arquivos gravados no dispositivo do usuário durante a navegação. 
          </p>

          <p>
            Este site utiliza cookies próprios e de terceiros, classificados em necessários, de preferências e analíticos. Cookies necessários são instalados independentemente de consentimento, por indispensáveis ao funcionamento do site. 
          </p>

          <p>
            Os demais somente são instalados após manifestação livre e específica do usuário no banner de consentimento, que permite aceitar, recusar e configurar por categoria, sem opções pré-marcadas. 
          </p>

          <p>
            Esta política pode ser alterada a qualquer tempo, com indicação da data da última atualização. Alterações substanciais são informadas no próprio site.
          </p>

          <div className="mt-12 pt-8 border-t border-gray-200 text-sm text-adv-cinza/70">
            <p>Última atualização: {new Date().toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })}.</p>
          </div>
        </div>
      </div>
    </main>
  );
}