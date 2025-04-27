import styled from "styled-components";
import HeroSection from "../componentes/HeroSection";
import AboutUs from "../componentes/AboutUs";
import Products from "../componentes/Products";
import Testimonials from "../componentes/Testimonials";
import Footer from "../componentes/Footer";

const HomeContainer = styled.main`
  background-color: var(--primary-color);
  color: var(--text-color);
`;

export default function Home() {
  return (
    <HomeContainer>
      <HeroSection />
      <AboutUs />
      <Products />
      <Testimonials />
      <Footer />
    </HomeContainer>
  );
}
