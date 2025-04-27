import styled from "styled-components";
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../contexts/translation';
import { keyframes } from 'styled-components';

const AboutSection = styled.section`
  min-height: 100vh;
  width: 100%;
  padding: 8rem 2rem;
  margin: 0;
  position: relative;
  text-align: center;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    rgba(0, 99, 77, 0.3),
    rgba(0, 99, 77, 0.3)
  ), url('/imagem_esme3.jpg') center/cover fixed no-repeat;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 150px;
    background: linear-gradient(
      to bottom,
      rgba(0, 99, 77, 1) 0%,
      transparent 100%
    );
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 150px;
    background: linear-gradient(
      to top,
      rgba(0, 99, 77, 1) 0%,
      transparent 100%
    );
  }

  @media (max-width: 768px) {
    min-height: 100vh;
    padding: 6rem 1rem;
    margin: 0;

    &::before, &::after {
      height: 100px;
    }
  }
`;

const AboutCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
  max-width: 1000px;
  margin: 0 auto;
  z-index: 2;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
    background: rgba(255, 255, 255, 0.08);
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    margin: 0 1rem;
    width: auto;
  }
`;

const Title = styled.h2`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.95);
  font-weight: 600;
  letter-spacing: -0.02em;
  position: relative;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.8);

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
  }
`;

export default function AboutUs() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <AboutSection id="about">
      <AboutCard>
        <Title>{t.about.title}</Title>
        <Description>
          {t.about.description}
        </Description>
      </AboutCard>
    </AboutSection>
  );
}