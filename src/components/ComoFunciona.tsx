export function ComoFunciona() {
  // Lista com os passos para deixar o código limpo e fácil de dar manutenção
  const passos = [
    {
      id: 1,
      titulo: 'Consultoria',
      descricao: 'O objetivo é fornecer informações e diretrizes para que o cliente identifique ou resolva problemas de ordem jurídica.'
    },
    {
      id: 2,
      titulo: 'Assessoria',
      descricao: 'A assessoria jurídica trabalha para diminuir gastos, criar e monitorar a legalidade de contratos e buscar formas menos onerosas e mais eficientes para resolver conflitos.'
    },
    {
      id: 3,
      titulo: 'Estratégias',
      descricao: 'Análises de dados e onboarding para novos clientes, fornecedores, funcionários, avaliação reputacionais e conflitos de interesses trabalhistas através das ferramentas de Compliance.'
    },
    {
      id: 4,
      titulo: 'Extrajudicial',
      descricao: 'Busca pela conciliação entre as partes ou a resolução de pendências fora do judiciário. Em outras palavras, quando há um problema de registro, retificação, cadastramento ou um conflito resolvível sem a presença de um juiz, com a utilização, somente, das ações e resoluções administrativas.'
    },
    {
      id: 5,
      titulo: 'Judicial',
      descricao: 'Quando todas as opções anteriores não funcionam e o problema só pode ser solucionado através do judiciário, a fim que se tenha documento hábil e resultado útil para o cliente.'
    }
  ];

  return (
    <section id="como-funciona" className="py-20 px-6 md:px-12 bg-adv-branco">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-16 flex flex-col items-center">
          {/* Tracinho superior (simulando a linha dourada da imagem) */}
          <div className="w-12 h-1 bg-adv-laranja mb-8"></div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-adv-marinho mb-4">
            Como funciona
          </h2>
          <p className="text-adv-cinza text-base md:text-lg max-w-2xl text-center">
            Aqui você conhece os tipos e processos de atendimento do nosso escritório
          </p>
        </div>

        {/* Grid de 5 colunas */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 items-stretch">
          {passos.map((passo) => (
            <div 
              key={passo.id} 
              className="bg-gray-50/80 rounded-xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Círculo com o Número */}
              <div className="w-12 h-12 rounded-full bg-[#eed8ce] text-adv-marinho text-xl font-bold font-serif flex items-center justify-center mb-6 shadow-sm">
                {passo.id}
              </div>
              
              <h3 className="text-xl font-serif text-adv-marinho mb-4">
                {passo.titulo}
              </h3>
              
              <p className="text-adv-cinza text-sm leading-relaxed">
                {passo.descricao}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}