export function Sobre() {
  return (
    <section id="sobre" className="bg-adv-creme py-20 px-6 md:px-12 lg:py-32 flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
      
      {/* Coluna da Esquerda: Imagem da Advogada/Escritório */}
      <div className="md:w-1/2 flex justify-center w-full">
        <div className="relative w-full max-w-md">
          {/* Elementos decorativos com as cores da paleta */}
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-adv-laranja -z-10"></div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-4 border-adv-azulClaro -z-10"></div>
          
          {/* Imagem temporária */}
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" 
            alt="Dra. Renata - SDA Advocacia" 
            className="w-full h-auto object-cover shadow-2xl relative z-0"
          />
        </div>
      </div>

      {/* Coluna da Direita: Textos */}
      <div className="md:w-1/2 space-y-6">
        <span className="text-sm font-bold text-adv-laranja uppercase tracking-widest">
          Sobre o Escritório
        </span>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-adv-marinho leading-tight">
          Defendendo seus interesses com ética e transparência.
        </h2>
        
        <div className="space-y-4 text-adv-cinza text-base md:text-lg">
          <p>
            A <strong>SDA Advocacia</strong> nasceu do sonho de uma mulher determinada a transformar sua paixão pela justiça em uma carreira voltada a ajudar pessoas a superar problemas que parecem sem solução. Fundado por <strong>Dra. Renata L. Sequeira d’Arrochella</strong>, o escritório acumula mais de 9 anos de experiência nas áreas trabalhista e de defesa do consumidor, sempre guiado por um compromisso com o melhor atendimento e a busca das soluções mais eficazes para cada cliente.
            </p>
          <p>
            Com uma equipe dedicada de assessores e colaboradores administrativos, garantimos que nossa fundadora e expert possa concentrar-se plenamente na resolução dos casos que chegam ao escritório, proporcionando tranquilidade e resultados eficientes aos nossos clientes. Sabemos o quanto um problema jurídico pode tirar o sono e o sossego, e por isso, trabalhamos com empatia e dedicação para devolver a paz que você merece.
          </p>
        </div>
      </div>

    </section>
  );
}