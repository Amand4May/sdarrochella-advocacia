import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react'; // 1. Adicione esta importação

export function PoliticaPrivacidade() {
  return (
    <main className="pt-32 pb-24 px-6 md:px-12 bg-adv-branco text-adv-cinza min-h-screen">
      <Helmet>
        <title>Política de Privacidade | SDA Advocacia</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="max-w-3xl mx-auto">
        
        {/* 2. Substitua o botão antigo por este novo */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-5 py-2.5 mb-10 text-xs font-bold uppercase tracking-widest text-adv-marinho border border-adv-marinho/20 rounded-full hover:bg-adv-marinho hover:text-adv-branco transition-all duration-300"
        >
          <ArrowLeft size={16} />
          Voltar para o início
        </Link>
        
        <h1 className="text-3xl md:text-4xl font-serif text-adv-marinho mb-8">Política de Privacidade</h1>
        
        <div className="space-y-6 text-base leading-relaxed text-adv-cinza/90 text-justify">
          <p>
            Eventuais dados pessoais sensíveis (art. 5º, II, da LGPD) que o titular venha a fornecer espontaneamente são tratados com fundamento no art. 11, II, “d”, da LGPD, e submetem-se ao sigilo profissional previsto nos arts. 7º, XIX, e 34, VII, da Lei nº 8.906/1994 e nos arts. 35 a 38 do Código de Ética e Disciplina da OAB. O dever de sigilo subsiste ainda que não se estabeleça relação contratual e não se extingue com o término do mandato.
          </p>
          
          <p>
            Prestadores de serviço que atuam como operadores, mediante contrato com cláusulas de proteção de dados (art. 39 da LGPD), a saber: provedor de hospedagem Hostinger, provedor de correio eletrônico Hostinger, plataforma de gestão de processos e clientes Astrea, Aurum Software.
          </p>

          <p>
            Terão acesso também, quando solicitado, autoridades judiciais, administrativas e órgãos de classe, no cumprimento de obrigação legal ou regulatória, ou para exercício regular de direitos.
          </p>

          <p>
            Nos termos do art. 18 da LGPD, o titular pode requerer confirmação da existência de tratamento, acesso, correção, anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade, portabilidade, informação sobre compartilhamentos, informação sobre a possibilidade de não consentir, revogação do consentimento e oposição a tratamento fundado em outra base legal.
          </p>

          <p>
            As solicitações devem ser dirigidas ao canal indicado no site e são respondidas nos prazos do art. 19 da LGPD. O atendimento pode ser total ou parcialmente recusado, com justificativa, quando o pedido conflitar com o sigilo profissional, com prazo legal de guarda, com o exercício regular de direitos ou com direitos de terceiros.
          </p>

          <p>
            A revogação do consentimento não afeta a licitude do tratamento realizado antes dela nem alcança dados tratados com base em outra hipótese legal. O titular pode peticionar à Autoridade Nacional de Proteção de Dados (art. 18, §1º, da LGPD).
          </p>

          <h3 className="text-xl font-bold text-adv-marinho pt-4">Armazenamento dos dados</h3>
          <p>
            São mantidos por 12 meses contados do último contato no provedor Hostinger e de serviços jurídicos Astrea. Os dados informados em formulários de contato são utilizados exclusivamente para responder ao contato e avaliar a possibilidade de atendimento, não sendo compartilhados com terceiros para fins publicitários.
          </p>

          <div className="mt-12 pt-8 border-t border-gray-200 text-sm text-adv-cinza/70">
            <p>Última atualização: {new Date().toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })}.</p>
          </div>
        </div>
      </div>
    </main>
  );
}