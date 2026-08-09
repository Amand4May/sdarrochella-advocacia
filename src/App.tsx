import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Sobre } from "./components/Sobre";

function App() {
  return (
    <div className="bg-adv-branco min-h-screen font-sans text-adv-cinza scroll-smooth selection:bg-adv-laranja selection:text-adv-branco">
      <Header />
      
      <main>
        <Hero />
        <Sobre />
      </main>
    </div>
  );
}

export default App;