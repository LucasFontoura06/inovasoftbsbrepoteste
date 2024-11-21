import styled from "styled-components";
import { Link } from "react-router-dom";

const Hero = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 0 2rem;
  text-align: center;
  width: 100%;
  background: linear-gradient(
    135deg,
    rgba(15, 23, 42, 0.9) 0%,
    rgba(30, 41, 59, 0.9) 100%
  );
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -25%;
    left: -25%;
    right: -25%;
    bottom: -25%;
    background: 
      radial-gradient(
        circle at 50% 50%,
        rgba(0, 247, 255, 0.1) 0%,
        transparent 35%
      );
    z-index: 0;
    animation: pulse 8s ease-in-out infinite;
  }

  @keyframes pulse {
    0% {
      transform: translate(0, 0) scale(1);
    }
    25% {
      transform: translate(5%, 5%) scale(1.05);
    }
    50% {
      transform: translate(-3%, 3%) scale(0.95);
    }
    75% {
      transform: translate(-5%, -5%) scale(1.05);
    }
    100% {
      transform: translate(0, 0) scale(1);
    }
  }

  & > * {
    position: relative;
    z-index: 1;
  }
`;

const Title = styled.h1`
  font-size: clamp(3rem, 10vw, 5rem);
  font-weight: 700;
  background: linear-gradient(90deg, #fff 0%, #00f7ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const Description = styled.p`
  font-size: 1.4rem;
  max-width: 800px;
  margin: 0 auto 3rem auto;
  text-align: center;
  color: #888;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  width: 100%;
  max-width: 500px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Button = styled(Link)`
  text-decoration: none;
  padding: 1rem 2rem;
  border-radius: 6px;
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.3s ease;
  display: inline-block;
  min-width: 160px;
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 247, 255, 0.2);
  }
  
  &:active {
    transform: translateY(-1px);
  }
  
  &:first-child {
    background: #00f7ff;
    color: #0f172a;
    
    &:hover {
      background: #00e1e9;
    }
  }
  
  &:last-child {
    border: 1px solid #00f7ff;
    color: #00f7ff;
    
    &:hover {
      background: rgba(0, 247, 255, 0.1);
    }
  }
`;

export default function HeroSection() {
  return (
    <Hero>
      <Title>InovaSoft BSB</Title>
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
