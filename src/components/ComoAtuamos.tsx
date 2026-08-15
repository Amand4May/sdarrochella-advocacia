import { FileSearch, Handshake, ShieldCheck, FileText, Gavel } from 'lucide-react';

export function ComoAtuamos() {
  const atuacoes = [
    {
      icon: <FileSearch size={32} />,
      title: "Consultoria",
      desc: "Análise de situações específicas com orientação técnica sobre riscos, prazos e caminhos possíveis."
    },
    {
      icon: <Handshake size={32} />,
      title: "Assessoria",
      desc: "Acompanhamento continuado, com revisão de contratos, rotinas e atuação preventiva sobre pontos de risco."
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Compliance e Governança",
      desc: "Diagnóstico de conformidade, desenho de políticas internas, avaliação de terceiros e monitoramento de obrigações legais."
    },
    {
      icon: <FileText size={32} />,
      title: "Atuação extrajudicial",
      desc: "Negociação, notificação, acordos e resolução administrativa de pendências junto a órgãos de defesa e registros."
    },
    {
      icon: <Gavel size={32} />,
      title: "Atuação judicial",
      desc: "Condução de processos em todas as instâncias, com elaboração de cálculos de liquidação e acompanhamento da execução."
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-adv-marinho text-adv-branco">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-adv-laranja uppercase tracking-widest">Nossa Metodologia</span>
          <h2 className="text-4xl md:text-5xl font-serif mt-4 mb-4">Como atuamos</h2>
          <div className="w-16 h-1 bg-adv-laranja mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {atuacoes.map((item, index) => (
            <div 
              key={index} 
              className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-adv-laranja mb-6">{item.icon}</div>
              <h4 className="text-xl font-bold mb-4">{item.title}</h4>
              <p className="text-adv-branco/80 leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}