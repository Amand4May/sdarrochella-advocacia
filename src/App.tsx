import { Bifurcacao } from './components/Bifurcacao';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Sobre } from './components/Sobre';
import { ComoAtuamos } from './components/ComoAtuamos';
import { AreasAtuacao } from './components/AreasAtuacao';
import { Equipe } from './components/Equipe';
import { Localizacao } from './components/Localizacao';
import { Contato } from './components/Contato';
import { Footer } from './components/Footer';
import { CookieConsent } from './components/CookieConsent';
import { ParaVoce } from './components/ParaVoce';
import { ParaEmpresas } from './components/ParaEmpresas';
import { PoliticaPrivacidade } from './components/PoliticaPrivacidade';
import { PoliticaCookies } from './components/PoliticaCookies';
import { AtuacaoEmParceria } from './components/AtuacaoEmParceria';

function Home() {
  return (
    <main>
      <Hero />
      <Bifurcacao />
      <Sobre />
      <ComoAtuamos />
      <AreasAtuacao />
      <Equipe />
      <Localizacao />
      <Contato />
    </main>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-adv-branco font-sans">
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/para-voce" element={<ParaVoce />} />
        <Route path="/para-empresas" element={<ParaEmpresas />} />
        <Route path="/politica-de-privacidade" element={<PoliticaPrivacidade />} />
        <Route path="/politica-de-cookies" element={<PoliticaCookies />} />
        <Route path="/atuacao-em-parceria" element={<AtuacaoEmParceria />} />
      </Routes>

      <CookieConsent /> 
      <Footer />
    </div>
  );
}