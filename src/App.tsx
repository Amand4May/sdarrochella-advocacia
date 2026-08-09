import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Sobre } from './components/Sobre'
import { AreasAtuacao } from './components/AreasAtuacao'
import { ComoFunciona } from './components/ComoFunciona' 
import { Equipe } from './components/Equipe'
import { Contato } from './components/Contato'
import { Localizacao } from './components/Localizacao'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-adv-branco font-sans scroll-smooth">
      <Header />
      <main>
        <Hero />
        <Sobre />
        <AreasAtuacao />
        <ComoFunciona />
        <Equipe />
        <Contato />
        <Localizacao/>
      </main>
      <Footer />
    </div>
  )
}

export default App