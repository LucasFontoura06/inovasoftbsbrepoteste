import styled from "styled-components";
import { Link } from "react-router-dom";

const Hero = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  padding: 2rem;
  background: linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%);
  position: relative;
`;

const Title = styled.h1`
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  font-weight: 700;
  background: linear-gradient(90deg, #fff 0%, #00f7ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const Description = styled.p`
  font-size: 1.2rem;
  max-width: 600px;
  margin-bottom: 2rem;
  text-align: center;
  color: #888;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Button = styled(Link)`
  padding: 1rem 2.5rem;
  border-radius: 8px;
  font-weight: 500;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  
  &.primary {
    background: #00f7ff;
    color: #000;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(0, 247, 255, 0.2);
    }
  }
  
  &.secondary {
    background: transparent;
    border: 1px solid #00f7ff;
    color: #00f7ff;
    
    &:hover {
      background: rgba(0, 247, 255, 0.1);
      transform: translateY(-2px);
    }
  }
`;

export default function HeroSection() {
  return (
    <Hero>
      <Title>Inovação Digital</Title>
      <Description>
        Transformando o futuro através de soluções tecnológicas inteligentes e inovadoras
      </Description>
      <ButtonGroup>
        <Button to="/demo" className="primary">Ver Demo</Button>
        <Button to="/contact" className="secondary">Fale Conosco</Button>
      </ButtonGroup>
    </Hero>
  );
}
