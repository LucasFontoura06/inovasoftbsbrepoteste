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

const pulseAnimation = keyframes`
  0% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.4;
    transform: scale(1.05);
  }
  100% {
    opacity: 0.3;
    transform: scale(1);
  }
`;

const floatingBubbles = keyframes`
  0% {
    transform: translateY(100vh) translateX(-20%);
    opacity: 0;
  }
  50% {
    opacity: 0.35;
  }
  100% {
    transform: translateY(-100vh) translateX(20%);
    opacity: 0;
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
      rgba(15, 23, 41, 0) 70%
    );
    animation: ${pulseAnimation} 8s ease-in-out infinite;
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
    background: radial-gradient(
      circle at center,
      transparent 0%,
      #0f1729 70%
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
      animation-duration: 10s;
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

const Bubble = styled.div`
  position: absolute;
  background: rgba(0, 247, 255, 0.25);
  border-radius: 50%;
  filter: blur(6px);
  pointer-events: none;
  
  &:nth-child(1) { left: 5%; width: 45px; height: 45px; animation: ${floatingBubbles} 20s linear infinite; animation-delay: -15s; }
  &:nth-child(2) { left: 15%; width: 35px; height: 35px; animation: ${floatingBubbles} 23s linear infinite; animation-delay: -8s; }
  &:nth-child(3) { left: 25%; width: 50px; height: 50px; animation: ${floatingBubbles} 18s linear infinite; animation-delay: -12s; }
  &:nth-child(4) { left: 35%; width: 30px; height: 30px; animation: ${floatingBubbles} 25s linear infinite; animation-delay: -5s; }
  &:nth-child(5) { left: 45%; width: 40px; height: 40px; animation: ${floatingBubbles} 22s linear infinite; animation-delay: -18s; }
  &:nth-child(6) { left: 55%; width: 48px; height: 48px; animation: ${floatingBubbles} 21s linear infinite; animation-delay: -10s; }
  &:nth-child(7) { left: 65%; width: 32px; height: 32px; animation: ${floatingBubbles} 24s linear infinite; animation-delay: -7s; }
  &:nth-child(8) { left: 75%; width: 38px; height: 38px; animation: ${floatingBubbles} 19s linear infinite; animation-delay: -16s; }
  &:nth-child(9) { left: 85%; width: 42px; height: 42px; animation: ${floatingBubbles} 26s linear infinite; animation-delay: -13s; }
  &:nth-child(10) { left: 95%; width: 36px; height: 36px; animation: ${floatingBubbles} 23s linear infinite; animation-delay: -9s; }
  &:nth-child(11) { left: 10%; width: 44px; height: 44px; animation: ${floatingBubbles} 22s linear infinite; animation-delay: -14s; }
  &:nth-child(12) { left: 20%; width: 34px; height: 34px; animation: ${floatingBubbles} 25s linear infinite; animation-delay: -11s; }
`;

export default function HeroSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <Hero>
      <Bubble />
      <Bubble />
      <Bubble />
      <Bubble />
      <Bubble />
      <Bubble />
      <Bubble />
      <Bubble />
      <Bubble />
      <Bubble />
      <Bubble />
      <Bubble />
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
