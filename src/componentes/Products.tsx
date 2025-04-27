import styled, { keyframes } from "styled-components";
import { FaSearch, FaClock, FaExternalLinkAlt } from "react-icons/fa";
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../contexts/translation';
import smartFindsImg from '../assets/smartfinds_home.jpg';

const shimmer = keyframes`
  0% {
    transform: translateX(-100%) rotate(45deg);
  }
  100% {
    transform: translateX(100%) rotate(45deg);
  }
`;

const ProductSection = styled.section`
  padding: 8rem 2rem;
  position: relative;
  overflow: hidden;
  background: linear-gradient(
    rgba(0, 99, 77, 0.3),
    rgba(0, 99, 77, 0.3)
  ), url('/imagem_esme2.jpg') center/cover no-repeat;

  @media (max-width: 768px) {
    padding: 6rem 1rem;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ProductCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 2rem;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(255, 255, 255, 0.2);

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

  &:hover {
    transform: translateY(-8px);
    border-color: var(--metallic-light);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);

    &::before {
      transform: translateX(50%);
    }
  }
`;

const ProductThumbnail = styled.div<{ development?: boolean; language?: 'pt' | 'en' }>`
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 2rem;
  position: relative;
  
  ${props => props.development && `
    background: linear-gradient(135deg, var(--accent-color), var(--secondary-color));
    display: flex;
    align-items: center;
    justify-content: center;
    
    &::after {
      content: '${props.language === 'pt' ? '🚧 Em Desenvolvimento' : '🚧 Under Development'}';
      color: #FFFFFF;
      font-size: 1rem;
      font-weight: 500;
      text-align: center;
      padding: 1rem;
      background: rgba(0, 0, 0, 0.3);
      border-radius: 8px;
      backdrop-filter: blur(4px);
    }
  `}
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 5rem;
  max-width: 800px;
  margin: 0 auto 5rem;
  position: relative;
  z-index: 1;

  h2 {
    font-size: clamp(2.5rem, 5vw, 3.5rem);
    margin-bottom: 1.5rem;
    background: linear-gradient(135deg, #FFFFFF 0%, var(--metallic-light) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    letter-spacing: -0.02em;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  }

  p {
    color: var(--metallic-light);
    font-size: clamp(1.1rem, 2vw, 1.2rem);
    line-height: 1.6;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const ProductContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProductTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #FFFFFF 0%, var(--metallic-light) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  letter-spacing: -0.01em;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

const ProductDescription = styled.p`
  color: var(--metallic-light);
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  flex: 1;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ProductLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  border-radius: 12px;
  background: var(--gradient-metallic);
  color: #FFFFFF;
  text-decoration: none;
  transition: all 0.3s ease;
  font-weight: 500;
  justify-content: center;
  margin-top: auto;
  position: relative;
  overflow: hidden;

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

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);

    &::before {
      transform: translateX(50%);
    }
  }

  &.disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }
`;

const StatusBadge = styled.span<{ active?: boolean }>`
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.5rem 1.2rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  background: ${props => props.active ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 200, 0, 0.2)'};
  color: ${props => props.active ? '#FFFFFF' : '#FFD700'};
  backdrop-filter: blur(4px);
  border: 1px solid ${props => props.active ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 200, 0, 0.3)'};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export default function Products() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <ProductSection id="products">
      <SectionTitle>
        <h2>{t.products.title}</h2>
        <p>{t.products.subtitle}</p>
      </SectionTitle>
      <ProductGrid>
        <ProductCard>
          <ProductThumbnail>
            <img 
              src={smartFindsImg} 
              alt="SmartFinds Preview"
            />
          </ProductThumbnail>
          <ProductContent>
            <ProductTitle>SmartFinds</ProductTitle>
            <ProductDescription>{t.products.smartFinds.description}</ProductDescription>
            <ProductLink href="https://smartfinds.web.app/" target="_blank">
              {t.products.smartFinds.action} <FaExternalLinkAlt size={12} />
            </ProductLink>
          </ProductContent>
          <StatusBadge active>{t.products.smartFinds.status}</StatusBadge>
        </ProductCard>
        
        <ProductCard>
          <ProductThumbnail development language={language} />
          <ProductContent>
            <ProductTitle>Hora Certa</ProductTitle>
            <ProductDescription>{t.products.horaCerta.description}</ProductDescription>
            <ProductLink className="disabled">
              {t.products.horaCerta.action} <FaExternalLinkAlt size={12} />
            </ProductLink>
          </ProductContent>
          <StatusBadge>{t.products.horaCerta.status}</StatusBadge>
        </ProductCard>
      </ProductGrid>
    </ProductSection>
  );
}
