import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Sobre } from './components/Sobre';
import { ComoAtuamos } from './components/ComoAtuamos';
import { AreasAtuacao } from './components/AreasAtuacao';
import { Equipe } from './components/Equipe';
import { Localizacao } from './components/Localizacao';
import { PortalCliente } from './components/PortalCliente';
import { Contato } from './components/Contato';
import { Footer } from './components/Footer';
import { CookieConsent } from './components/CookieConsent';
import { ParaVoce } from './components/ParaVoce';
import { ParaEmpresas } from './components/ParaEmpresas';
import { PoliticaPrivacidade } from './components/PoliticaPrivacidade';
import { PoliticaCookies } from './components/PoliticaCookies';
import { AtuacaoEmParceria } from './components/AtuacaoEmParceria';
import { Bifurcacao } from './components/Bifurcacao';

function Home() {
  const location = useLocation();

  // Efeito para rolar suavemente até a seção quando vier de outra página com #
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <main>
      <Hero />
      <Bifurcacao />
      <Sobre />
      <ComoAtuamos />
      <AreasAtuacao />
      <Equipe />
      <PortalCliente />
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