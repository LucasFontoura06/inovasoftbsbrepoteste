import styled from "styled-components";
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../contexts/translation';

const AboutSection = styled.section`
  padding: 6rem 2rem;
  background: rgba(15, 23, 42, 0.95);
  position: relative;
  text-align: center;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      transparent 0%,
      rgba(0, 247, 255, 0.03) 50%,
      transparent 100%
    );
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
  overflow: hidden;
  max-width: 1000px;
  margin: 0 auto;

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
`;

const Title = styled.h2`
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 2rem;
  background: linear-gradient(90deg, #fff 0%, #00f7ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
`;

const Description = styled.p`
  font-size: 1.1rem;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.8;
  color: #888;
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
