import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../contexts/translation';

const backgroundAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
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
  background: #0f1729;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    right: -50%;
    bottom: -50%;
    background: radial-gradient(
      circle at center,
      rgba(0, 247, 255, 0.03) 0%,
      rgba(15, 23, 41, 0) 50%
    );
    background-size: 200% 200%;
    animation: ${backgroundAnimation} 25s ease infinite;
    z-index: 0;
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      180deg,
      rgba(15, 23, 41, 0.9) 0%,
      #0f1729 100%
    );
    z-index: 0;
    pointer-events: none;
  }

  & > * {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 768px) {
    &::before {
      animation-duration: 30s;
    }
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
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto 3rem auto;
  text-align: center;
  color: #888;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    padding: 0 2rem;
  }
`;

const Button = styled(Link)`
  padding: 0.8rem 2rem;
  border-radius: 6px;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &.primary {
    background: #00f7ff;
    color: #0f172a;
    
    &:hover {
      background: #00d8e8;
      transform: translateY(-2px);
    }
  }
  
  &.secondary {
    border: 1px solid #00f7ff;
    color: #00f7ff;
    
    &:hover {
      background: rgba(0, 247, 255, 0.1);
      transform: translateY(-2px);
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

export default function HeroSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <Hero>
      <Title>InovaSoft BSB</Title>
      <Description>
        {t.hero.description}
      </Description>
      <ButtonGroup>
        <Button to="/demo" className="primary">{t.hero.demo}</Button>
        <Button to="/contact" className="secondary">{t.hero.contact}</Button>
      </ButtonGroup>
    </Hero>
  );
}
