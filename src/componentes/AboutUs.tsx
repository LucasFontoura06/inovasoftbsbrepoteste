import styled from "styled-components";
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../contexts/translation';

const AboutSection = styled.section`
  padding: 20rem 2rem;
  background: rgba(15, 23, 42, 0.95);
  position: relative;
  text-align: center;
  overflow: visible;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 17rem 1rem;
  }
`;

const AboutCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 3rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: visible;
  max-width: 1000px;
  margin: 0 auto;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    margin: 0 1rem;
    width: auto;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(0, 247, 255, 0.2),
      transparent
    );
  }

  &:hover {
    transform: translateY(-5px);
    border-color: #00f7ff;
    box-shadow: 0 8px 32px rgba(0, 247, 255, 0.1);
  }

  @media (max-width: 768px) {
    &:hover {
      transform: translateY(-3px);
    }
  }
`;

const Title = styled.h2`
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 2rem;
  background: linear-gradient(90deg, #fff 0%, #00f7ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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
  color: #888;

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
