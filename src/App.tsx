import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./componentes/HeroSection";
import AboutUs from "./componentes/AboutUs";
import Products from "./componentes/Products";
import Footer from "./componentes/Footer";
import Navigation from "./componentes/Navigation";
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div style={{ 
          background: '#0d1117',
          margin: 0,
          padding: 0,
          minHeight: '100vh'
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
