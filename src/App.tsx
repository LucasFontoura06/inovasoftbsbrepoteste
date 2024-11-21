import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./componentes/HeroSection";
import AboutUs from "./componentes/AboutUs";
import Products from "./componentes/Products";
import Footer from "./componentes/Footer";
import Navigation from "./componentes/Navigation";
import { LanguageProvider } from './contexts/LanguageContext';
import { GlobalStyle } from './style/GlobalStyle';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <GlobalStyle />
        <div style={{ 
          background: '#0d1117',
          minHeight: '100vh',
          width: '100%',
          overflow: 'hidden',
          position: 'relative'
        }}>
          <Navigation />
          <HeroSection />
          <AboutUs />
          <Products />
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
