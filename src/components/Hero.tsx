export function Hero() {
  return (
    <section 
      id="home" 
      // 👇 Aqui está a mágica: removemos o py-32 e adicionamos o min-h-[calc(...)]
      className="relative text-adv-branco px-6 md:px-12 min-h-[calc(100vh-60px)] flex items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://png.pngtree.com/thumb_back/fh260/background/20230714/pngtree-d-render-of-a-lawyer-s-office-with-a-judge-s-image_3888408.jpg')" }}
    >
      
      {/* 1. Película Escura (Overlay) usando o Azul Marinho da identidade visual */}
      <div className="absolute inset-0 bg-adv-marinho/80"></div>

      {/* 2. Conteúdo (Textos e Botão) */}
      <div className="relative z-10 max-w-3xl space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif leading-tight">
          Estratégias Jurídicas para transformar o seu problema em solução.
        </h1>
        <p className="text-adv-bege text-lg md:text-xl max-w-2xl">
          Advocacia judicial e extrajudicial, para você e sua empresa, nas áreas trabalhista e consumerista.
        </p>
        <div className="pt-8">
          <a 
            href="#contato" 
            className="inline-block bg-adv-laranja hover:bg-adv-marrom text-adv-branco px-8 py-4 text-sm font-bold uppercase tracking-widest transition-colors duration-300"
          >
            Agende uma Consulta
          </a>
        </div>
      </div>

    </section>
  );
}