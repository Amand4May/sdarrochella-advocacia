import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Building2, Shield, UserCheck, Gavel, Store, ArrowRight, ArrowLeft } from 'lucide-react';

export function ParaEmpresas() {
  return (
    <main className="pb-24 bg-adv-branco text-adv-cinza">
      <Helmet>
        <title>Para Empresas | S. Darrochella Advocacia</title>
        <meta name="description" content="Assessoria jurídica para empresas: Compliance, LGPD, DPO e Relações de Consumo." />
      </Helmet>

      {/* Introdução com Fundo Marinho e Botão de Voltar */}
      <section className="bg-adv-marinho pt-12 pb-24 px-6 md:px-12 mb-16 relative">
        <div className="max-w-5xl mx-auto">
          
          {/* Botão de Voltar */}
          <div className="mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-adv-branco/70 hover:text-adv-laranja transition-colors text-sm font-bold uppercase tracking-wider"
            >
              <ArrowLeft size={18} />
              Voltar para o início
            </Link>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <span className="text-sm font-bold text-adv-laranja uppercase tracking-widest">
              Assessoria Corporativa
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-adv-branco mt-4 mb-8">
              Para empresas
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-adv-branco/80">
              Passivo trabalhista e passivo de proteção de dados têm a mesma origem: rotinas internas que se consolidam sem revisão jurídica e só são questionadas quando já produziram efeito. A atuação do escritório junto a organizações é orientada à identificação antecipada desses pontos, ao desenho de controles proporcionais ao porte e à atividade da empresa, e à defesa técnica quando o conflito já está instaurado.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto space-y-16 px-6 md:px-12 lg:px-0">
        
        {/* 1. Compliance Trabalhista */}
        <div className="bg-adv-creme p-8 md:p-12 rounded-2xl border border-gray-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-adv-marrom text-adv-branco rounded-lg flex items-center justify-center shrink-0">
              <Building2 size={28} />
            </div>
            <h2 className="text-2xl md:text-3xl font-serif text-adv-marinho">Compliance Trabalhista</h2>
          </div>
          <p className="mb-6 text-lg">Estruturação e revisão das rotinas de gestão de pessoas sob a perspectiva de risco jurídico, com foco na redução de contingência e na padronização de procedimentos.</p>
          
          <ul className="columns-1 md:columns-2 gap-x-12 mb-8 list-disc list-outside ml-5 text-adv-cinza marker:text-adv-marrom [&>li]:mb-4 [&>li]:break-inside-avoid">
            <li>Diagnóstico de conformidade trabalhista, com mapeamento de riscos</li>
            <li>Revisão de contratos de trabalho e instrumentos de terceirização</li>
            <li>Análise de enquadramento sindical, convenções e acordos coletivos</li>
            <li>Revisão de controle de jornada, banco de horas e sobreaviso</li>
            <li>Política de home office e trabalho híbrido</li>
            <li>Estruturação de canal de denúncias e apuração interna</li>
            <li>Política de prevenção e enfrentamento ao assédio (Lei 14.457/2022 e CIPA)</li>
            <li>Programa de integridade aplicado a terceiros e fornecedores</li>
            <li>Due diligence trabalhista em operações societárias</li>
            <li>Avaliação de risco de reconhecimento de vínculo</li>
            <li>Treinamento de lideranças e do setor de recursos humanos</li>
            <li>Elaboração de relatório de contingência e provisionamento</li>
          </ul>
        </div>

        {/* 2. LGPD e Proteção de Dados */}
        <div className="bg-white p-8 md:p-12 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-adv-marrom text-adv-branco rounded-lg flex items-center justify-center shrink-0">
              <Shield size={28} />
            </div>
            <h2 className="text-2xl md:text-3xl font-serif text-adv-marinho">LGPD e Proteção de Dados</h2>
          </div>
          <p className="mb-6 text-lg">Adequação à Lei Geral de Proteção de Dados conduzida a partir da realidade operacional da organização, com entregas documentadas e sustentáveis ao longo do tempo.</p>
          
          <ul className="columns-1 md:columns-2 gap-x-12 mb-8 list-disc list-outside ml-5 text-adv-cinza marker:text-adv-marrom [&>li]:mb-4 [&>li]:break-inside-avoid">
            <li>Diagnóstico de maturidade e análise de lacunas</li>
            <li>Mapeamento de dados e registro das operações de tratamento</li>
            <li>Definição de bases legais por atividade de tratamento</li>
            <li>Elaboração de política de privacidade, aviso de cookies e políticas internas</li>
            <li>Revisão de contratos com operadores e cláusulas de proteção de dados</li>
            <li>Relatório de Impacto à Proteção de Dados Pessoais (RIPD)</li>
            <li>Plano de resposta a incidentes e comunicação a titulares e à ANPD</li>
            <li>Estruturação do canal de atendimento ao titular</li>
            <li>Política de retenção e descarte</li>
            <li>Treinamento de equipes</li>
            <li>Adequação de tratamento de dados de empregados e de candidatos</li>
          </ul>
        </div>

        {/* 3. DPO / Encarregado de Dados */}
        <div className="bg-adv-creme p-8 md:p-12 rounded-2xl border border-gray-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-adv-marrom text-adv-branco rounded-lg flex items-center justify-center shrink-0">
              <UserCheck size={28} />
            </div>
            <h2 className="text-2xl md:text-3xl font-serif text-adv-marinho">Encarregado pelo Tratamento de Dados Pessoais (DPO)</h2>
          </div>
          <p className="mb-6 text-lg">A indicação de Encarregado é exigência do artigo 41 da LGPD. A função pode ser exercida por profissional externo, o que assegura independência técnica e evita o conflito de interesses típico da acumulação com cargos de gestão interna.</p>
          
          <ul className="columns-1 md:columns-2 gap-x-12 mb-8 list-disc list-outside ml-5 text-adv-cinza marker:text-adv-marrom [&>li]:mb-4 [&>li]:break-inside-avoid">
            <li>Atuação como canal de comunicação entre a organização, os titulares e a ANPD</li>
            <li>Recebimento, análise e resposta às requisições de titulares nos prazos legais</li>
            <li>Orientação a colaboradores e a fornecedores sobre práticas de tratamento</li>
            <li>Acompanhamento de incidentes de segurança e condução de providências</li>
            <li>Relatórios periódicos à alta administração sobre estado de conformidade</li>
            <li>Manutenção e atualização da documentação de governança</li>
            <li>Interlocução técnica com as áreas de tecnologia, RH e jurídico</li>
          </ul>

          <div className="bg-adv-branco p-6 rounded-lg border-l-4 border-adv-marrom shadow-sm">
            <h4 className="font-bold text-adv-marinho mb-2">Por que um Encarregado externo?</h4>
            <p className="text-sm leading-relaxed">A LGPD exige que o Encarregado tenha condições de atuar com independência. Quando a função é acumulada por quem também responde pelas decisões de tratamento, essa independência fica comprometida. A contratação externa resolve o ponto e distribui o custo da função ao longo do ano.</p>
          </div>
        </div>

        {/* 4. Consultivo e contencioso trabalhista */}
        <div className="bg-white p-8 md:p-12 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-adv-marrom text-adv-branco rounded-lg flex items-center justify-center shrink-0">
              <Gavel size={28} />
            </div>
            <h2 className="text-2xl md:text-3xl font-serif text-adv-marinho">Consultivo e contencioso trabalhista</h2>
          </div>
          <p className="mb-6 text-lg">Assessoria permanente às decisões de gestão de pessoas e condução de processos judiciais em que a empresa figura como reclamada.</p>
          
          <ul className="columns-1 md:columns-2 gap-x-12 mb-8 list-disc list-outside ml-5 text-adv-cinza marker:text-adv-marrom [&>li]:mb-4 [&>li]:break-inside-avoid">
            <li>Orientação preventiva em admissões, desligamentos e alterações contratuais</li>
            <li>Condução de negociações coletivas e de tratativas sindicais</li>
            <li>Defesa em reclamações trabalhistas, contestações e cálculos de contraposição</li>
            <li>Conferência técnica de cálculos de liquidação e impugnação a laudos periciais</li>
            <li>Atuação em execuções e incidentes de desconsideração da personalidade jurídica</li>
            <li>Acompanhamento de fiscalizações junto ao MTE e MPT</li>
            <li>Elaboração de acordos e de instrumentos de quitação</li>
          </ul>
        </div>

        {/* 5. Relações de consumo para fornecedores */}
        <div className="bg-adv-creme p-8 md:p-12 rounded-2xl border border-gray-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-adv-marrom text-adv-branco rounded-lg flex items-center justify-center shrink-0">
              <Store size={28} />
            </div>
            <h2 className="text-2xl md:text-3xl font-serif text-adv-marinho">Relações de consumo para fornecedores</h2>
          </div>
          <p className="mb-6 text-lg">Adequação das práticas comerciais ao Código de Defesa do Consumidor e redução do volume de reclamações e de demandas judiciais repetitivas.</p>
          
          <ul className="columns-1 md:columns-2 gap-x-12 mb-8 list-disc list-outside ml-5 text-adv-cinza marker:text-adv-marrom [&>li]:mb-4 [&>li]:break-inside-avoid">
            <li>Revisão de contratos de adesão, termos de uso e políticas de troca e devolução</li>
            <li>Análise de práticas comerciais, publicidade e ofertas</li>
            <li>Estruturação do atendimento ao consumidor e tratamento de reclamações</li>
            <li>Atuação em procedimentos administrativos perante órgãos de defesa do consumidor</li>
            <li>Defesa em demandas individuais e acompanhamento de demandas repetitivas</li>
            <li>Análise de risco em lançamento de produtos e serviços</li>
            <li>Interseção entre atendimento ao consumidor e tratamento de dados pessoais</li>
          </ul>
        </div>

        {/* CTA final */}
        <div className="max-w-5xl mx-auto mt-20 text-center bg-adv-marinho rounded-2xl px-8 py-14 shadow-lg">
          <h3 className="font-serif text-2xl md:text-3xl text-adv-branco mb-3">
            Precisa de segurança jurídica para a sua empresa?
          </h3>
          <p className="text-adv-branco/80 max-w-xl mx-auto mb-8">
            Agende uma avaliação com o escritório para diagnosticarmos os pontos de risco do seu negócio e definirmos as melhores estratégias.
          </p>
          <Link 
            to="/#contato" 
            className="inline-flex items-center gap-2 bg-adv-marrom text-adv-branco font-medium rounded-full px-8 py-3 transition-transform hover:-translate-y-0.5 hover:shadow-lg"
          >
            <ArrowRight size={18} />
            Agendar atendimento
          </Link>
        </div>
      </div>
    </main>
  );
}