import styled from "styled-components";
import { Link } from "react-router-dom";
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../contexts/translation';

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
  ), url('/imagem_esme.jpg') center/cover no-repeat;
`;

const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const Title = styled.h1`
  font-size: clamp(3.5rem, 10vw, 6rem);
  font-weight: 700;
  background: linear-gradient(135deg, #FFFFFF 0%, var(--metallic-light) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
  line-height: 1.1;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

const Description = styled.p`
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  max-width: 800px;
  margin: 0 auto 4rem;
  color: var(--metallic-light);
  line-height: 1.6;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
  transition: all 0.3s ease;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  
  &.primary {
    background: var(--metallic-light);
    color: var(--primary-color);
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
      background: #FFFFFF;
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
        rgba(255, 255, 255, 0.2) 50%,
        transparent 100%
      );
      transform: translateX(-100%);
      transition: transform 0.6s ease;
    }

    &:hover::before {
      transform: translateX(50%);
    }
  }
  
  &.secondary {
    background: transparent;
    color: var(--metallic-light);
    border: 2px solid var(--metallic-light);
    
    &:hover {
      background: rgba(255, 255, 255, 0.1);
      transform: translateY(-2px);
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
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
      <Content>
        <Title>Veridian</Title>
        <Description>
          {t.hero.description}
        </Description>
        <ButtonGroup>
          <Button to="/demo" className="primary">{t.hero.demo}</Button>
          <Button to="/contact" className="secondary">{t.hero.contact}</Button>
        </ButtonGroup>
      </Content>
    </Hero>
  );
}
