import { Helmet } from 'react-helmet-async';
import { Briefcase, ShoppingBag, ShieldCheck, ArrowRight } from 'lucide-react';

export function ParaVoce() {
  return (
    <main className="pt-20 pb-24 px-6 md:px-12 bg-adv-branco text-adv-cinza">
      <Helmet>
        <title>Para Você | S. Darrochella Advocacia</title>
        <meta name="description" content="Atendimento pessoa física: Direito do Trabalho, Consumidor e Proteção de Dados." />
      </Helmet>

      {/* Introdução */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <span className="text-sm font-bold text-adv-marrom uppercase tracking-widest">
          Atendimento Pessoa Física
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-adv-marinho mt-4 mb-8">
          Para você
        </h1>
        <p className="text-lg md:text-xl leading-relaxed text-adv-cinza">
          Situações que envolvem trabalho, consumo e uso dos seus dados pessoais costumam chegar acompanhadas de insegurança sobre o que é possível fazer e em quanto tempo. O primeiro passo do escritório é sempre o mesmo: entender os fatos, verificar o que está efetivamente documentado e apresentar, de forma clara, os caminhos disponíveis e seus respectivos riscos.
        </p>
      </div>

      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* 1. Direito do Trabalho */}
        <div className="bg-adv-creme p-8 md:p-12 rounded-2xl border border-gray-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-adv-marrom text-adv-branco rounded-lg flex items-center justify-center shrink-0">
              <Briefcase size={28} />
            </div>
            <h2 className="text-2xl md:text-3xl font-serif text-adv-marinho">Direito do Trabalho</h2>
          </div>
          <p className="mb-6 text-lg">Atuação na defesa de direitos decorrentes da relação de emprego e de outras formas de prestação de serviços, na fase de conhecimento, na liquidação e na execução.</p>
          
          {/* LISTA ATUALIZADA: Usando columns em vez de grid */}
          <ul className="columns-1 md:columns-2 gap-x-12 mb-8 list-disc list-outside ml-5 text-adv-cinza marker:text-adv-marrom [&>li]:mb-4 [&>li]:break-inside-avoid">
            <li>Verbas rescisórias e irregularidades na rescisão contratual</li>
            <li>Reconhecimento de vínculo empregatício, inclusive informais e doméstico</li>
            <li>Jornada de trabalho, horas extras, sobreaviso, intervalos e adicional noturno</li>
            <li>Diferenças salariais, piso da categoria e convenções coletivas</li>
            <li>Equiparação salarial e desvio de função</li>
            <li>Adicionais de insalubridade e periculosidade</li>
            <li>Assédio moral, assédio sexual e danos extrapatrimoniais</li>
            <li>Acidente de trabalho e doença ocupacional</li>
            <li>Estabilidades provisórias e rescisão indireta</li>
            <li>FGTS, depósitos, multa e liberação</li>
            <li>Execução de créditos trabalhistas, sócios e patrimônio ocultado</li>
          </ul>

          <div className="bg-adv-branco p-6 rounded-lg border-l-4 border-adv-marrom shadow-sm">
            <h4 className="font-bold text-adv-marinho mb-2">Diferencial: Cálculos elaborados por contabilidade parceira</h4>
            <p className="text-sm leading-relaxed">O escritório participa do desenvolvimento das planilhas de liquidação do próprio caso, com memória de cálculo detalhada por verba, correção monetária e juros. Isso permite acompanhar, com precisão, quanto está efetivamente sendo discutido e conferir os valores apresentados pela parte contrária ou pelo perito.</p>
          </div>
        </div>

        {/* 2. Direito do Consumidor */}
        <div className="bg-white p-8 md:p-12 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-adv-marrom text-adv-branco rounded-lg flex items-center justify-center shrink-0">
              <ShoppingBag size={28} />
            </div>
            <h2 className="text-2xl md:text-3xl font-serif text-adv-marinho">Direito do Consumidor</h2>
          </div>
          <p className="mb-6 text-lg">Atuação em conflitos decorrentes de relações de consumo, na via administrativa e na via judicial, com foco na reconstrução documental dos fatos e na quantificação correta do prejuízo.</p>
          
          {/* LISTA ATUALIZADA: Usando columns em vez de grid */}
          <ul className="columns-1 md:columns-2 gap-x-12 mb-8 list-disc list-outside ml-5 text-adv-cinza marker:text-adv-marrom [&>li]:mb-4 [&>li]:break-inside-avoid">
            <li>Vício e defeito de produto e de serviço</li>
            <li>Cobrança indevida, cobrança abusiva e repetição de indébito</li>
            <li>Inscrição indevida em cadastros de inadimplentes</li>
            <li>Contratos bancários, financiamentos, empréstimos consignados</li>
            <li>Fraudes bancárias e transações não reconhecidas</li>
            <li>Planos de saúde, negativas de cobertura e reajustes</li>
            <li>Transporte aéreo, cancelamentos, atrasos e extravio de bagagem</li>
            <li>Pacotes de viagem e serviços de turismo</li>
            <li>Telefonia, internet e serviços de assinatura</li>
            <li>Compras em comércio eletrônico e descumprimento de oferta</li>
            <li>Empreendimentos imobiliários e atraso na entrega</li>
            <li>Publicidade enganosa e prática abusiva</li>
          </ul>

          <div className="bg-adv-creme p-6 rounded-lg border-l-4 border-adv-marrom shadow-sm">
            <h4 className="font-bold text-adv-marinho mb-2">Antes do processo, a via administrativa</h4>
            <p className="text-sm leading-relaxed">Em parte relevante dos casos de consumo, a solução pode vir da notificação, da reclamação junto aos órgãos de defesa do consumidor ou da negociação direta, com resultado mais rápido e menos oneroso. Quando essa via não é suficiente, o caminho judicial é iniciado com a documentação já organizada.</p>
          </div>
        </div>

        {/* 3. Seus dados pessoais */}
        <div className="bg-adv-creme p-8 md:p-12 rounded-2xl border border-gray-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-adv-marrom text-adv-branco rounded-lg flex items-center justify-center shrink-0">
              <ShieldCheck size={28} />
            </div>
            <h2 className="text-2xl md:text-3xl font-serif text-adv-marinho">Seus dados pessoais</h2>
          </div>
          <p className="mb-6 text-lg">A Lei Geral de Proteção de Dados assegura a você, titular, um conjunto de direitos sobre as informações que empresas e órgãos públicos mantêm a seu respeito. Esses direitos podem ser exercidos diretamente perante a organização e, se necessário, perante a Autoridade Nacional de Proteção de Dados e o Poder Judiciário.</p>
          
          {/* LISTA ATUALIZADA: Usando columns em vez de grid */}
          <ul className="columns-1 md:columns-2 gap-x-12 mb-8 list-disc list-outside ml-5 text-adv-cinza marker:text-adv-marrom [&>li]:mb-4 [&>li]:break-inside-avoid">
            <li>Exercício de direitos: confirmação, acesso, correção, anonimização, portabilidade e eliminação</li>
            <li>Revogação de consentimento e oposição ao tratamento</li>
            <li>Vazamento de dados e incidentes de segurança</li>
            <li>Uso indevido para cobrança, marketing ou concessão de crédito</li>
            <li>Compartilhamento não autorizado com terceiros</li>
            <li>Tratamento indevido de dados sensíveis</li>
            <li>Uso de imagem e de dados biométricos</li>
            <li>Danos decorrentes de tratamento irregular</li>
            <li>Monitoramento e uso de dados de candidatos e empregados</li>
          </ul>

          <div className="bg-adv-branco p-6 rounded-lg border-l-4 border-adv-marrom shadow-sm">
            <h4 className="font-bold text-adv-marinho mb-2">Proteção de dados e relação de trabalho</h4>
            <p className="text-sm leading-relaxed">O tratamento de dados de trabalhadores é um dos pontos de maior atrito prático da LGPD, e envolve monitoramento de comunicações, exames admissionais, controle de jornada por biometria e verificação de antecedentes. A atuação conjunta nas duas áreas permite tratar esses casos sem fragmentação.</p>
          </div>
        </div>
        
        {/* CTA final */}
      <div className="max-w-5xl mx-auto mt-20 text-center bg-adv-marinho rounded-2xl px-8 py-14">
        <h3 className="font-serif text-2xl md:text-3xl text-adv-branco mb-3">
          Ainda com dúvidas sobre o seu caso?
        </h3>
        <p className="text-adv-branco/80 max-w-xl mx-auto mb-8">
          Descreva a sua situação e o escritório retorna com os próximos passos e uma avaliação
          inicial.
        </p>
        <a
          href="/contato"
          className="inline-flex items-center gap-2 bg-adv-marrom text-adv-branco font-medium rounded-full px-8 py-3 transition-transform hover:-translate-y-0.5 hover:shadow-lg"
        >
          Falar com o escritório
          <ArrowRight size={18} />
        </a>
      </div>
      </div>
    </main>
  );
}