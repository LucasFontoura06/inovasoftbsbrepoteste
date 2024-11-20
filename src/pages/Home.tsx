import HeroSection from "../componentes/HeroSection";
import AboutUs from "../componentes/AboutUs";
import Products from "../componentes/Products";
import Testimonials from "../componentes/Testimonials";
import Footer from "../componentes/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <Products />
      <Testimonials />
      <Footer />
    </>
  );
}
