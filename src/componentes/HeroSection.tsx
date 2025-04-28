import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../contexts/translation';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
`;

const shine = keyframes`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`;

const Hero = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  background: linear-gradient(
    rgba(0, 99, 77, 0.3),
    rgba(0, 99, 77, 0.3)
  ), url('/imagem_esme.jpg') center/cover fixed no-repeat;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.4) 100%);
    z-index: 1;
  }
`;

const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 2;
  animation: ${fadeIn} 1s ease-out;
`;

const Title = styled.h1`
  font-size: clamp(4rem, 12vw, 8rem);
  font-weight: 800;
  background: linear-gradient(
    120deg,
    #FFFFFF,
    #A0A0A0,
    #FFFFFF,
    #A0A0A0,
    #FFFFFF
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
  line-height: 1.1;
  animation: ${shine} 5s linear infinite;
  text-transform: uppercase;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
    height: 4px;
    background: linear-gradient(90deg, transparent, #FFFFFF, transparent);
    border-radius: 2px;
  }
`;

const Description = styled.p`
  font-size: clamp(1.2rem, 2.5vw, 1.8rem);
  max-width: 800px;
  margin: 2rem auto 4rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.8;
  text-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
  position: relative;
  font-weight: 300;
  letter-spacing: 0.02em;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2rem;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent);
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    line-height: 1.6;
    margin: 1.5rem auto 3rem;
    
    &::after {
      width: 60px;
      bottom: -1.5rem;
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }
`;

const Button = styled(Link)`
  padding: 1.2rem 3rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  position: relative;
  overflow: hidden;
  
  &.primary {
    background: linear-gradient(135deg, var(--metallic-light) 0%, #FFFFFF 100%);
    color: var(--primary-color);
    border: none;
    
    &:hover {
      transform: translateY(-2px) scale(1.05);
      box-shadow: 0 10px 30px rgba(255, 255, 255, 0.2);
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 200%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent 0%,
        rgba(255, 255, 255, 0.4) 50%,
        transparent 100%
      );
      transform: translateX(-100%) skewX(-15deg);
      transition: transform 0.6s ease;
    }

    &:hover::before {
      transform: translateX(50%) skewX(-15deg);
    }
  }
  
  &.secondary {
    background: transparent;
    color: var(--metallic-light);
    border: 2px solid var(--metallic-light);
    backdrop-filter: blur(5px);
    
    &:hover {
      background: rgba(255, 255, 255, 0.1);
      transform: translateY(-2px) scale(1.05);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
      border-color: #FFFFFF;
      color: #FFFFFF;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    font-size: 1rem;
    padding: 1rem 2rem;
  }
`;

export default function HeroSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <Hero>
      <Content>
        <Title>Veridian</Title>
        <Description>
          {t.hero.description}
        </Description>
        <ButtonGroup>
          <Button to="/contact" className="secondary">{t.hero.contact}</Button>
        </ButtonGroup>
      </Content>
    </Hero>
  );
}
