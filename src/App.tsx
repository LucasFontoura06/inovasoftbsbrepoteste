import { LanguageProvider } from './contexts/LanguageContext';
import { BrowserRouter as Router} from "react-router-dom";
import HeroSection from "./componentes/HeroSection";
import Navigation from "./componentes/Navigation";
import { GlobalStyle } from './style/GlobalStyle';
import Products from "./componentes/Products";
import AboutUs from "./componentes/AboutUs";
import Footer from "./componentes/Footer";

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
