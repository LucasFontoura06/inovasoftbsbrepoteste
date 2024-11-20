import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./componentes/HeroSection";
import AboutUs from "./componentes/AboutUs";
import Products from "./componentes/Products";
import Footer from "./componentes/Footer";
import Navigation from "./componentes/Navigation";

function App() {
  return (
    <Router>
      <div style={{ background: '#0d1117' }}>
        <Navigation />
        <HeroSection />
        <AboutUs />
        <Products />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
