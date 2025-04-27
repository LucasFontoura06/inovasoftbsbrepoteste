import styled, { keyframes } from "styled-components";
import { FaSearch, FaClock, FaExternalLinkAlt } from "react-icons/fa";
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../contexts/translation';
import smartFindsImg from '../assets/smartfinds_home.jpg';

const shimmer = keyframes`
  0% {
    transform: translateX(-100%) rotate(45deg);
  }
  50% {
    transform: translateX(100%) rotate(45deg);
  }
  50.1% {
    transform: translateX(-100%) rotate(45deg);
  }
  100% {
    transform: translateX(-100%) rotate(45deg);
  }
`;

const ProductSection = styled.section`
  min-height: 100vh;
  width: 100%;
  padding: 8rem 2rem;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    rgba(0, 99, 77, 0.3),
    rgba(0, 99, 77, 0.3)
  ), url('/imagem_esme2.jpg') center/cover fixed no-repeat;

  @media (max-width: 768px) {
    min-height: 100vh;
    padding: 6rem 1rem;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  padding: 0 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ProductCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 1.5rem;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);

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
    animation: ${shimmer} 3s infinite ease-in-out;
  }

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
    background: rgba(255, 255, 255, 0.08);
  }
`;

const ProductThumbnail = styled.div<{ development?: boolean; language?: 'pt' | 'en' }>`
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 1.5rem;
  position: relative;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  
  ${props => props.development && `
    background: linear-gradient(135deg, 
      rgba(0, 212, 160, 0.2) 0%,
      rgba(0, 166, 126, 0.2) 50%,
      rgba(0, 99, 77, 0.2) 100%
    );
    display: flex;
    align-items: center;
    justify-content: center;
    
    &::after {
      content: '${props.language === 'pt' ? '🚧 Em Desenvolvimento' : '🚧 Under Development'}';
      color: rgba(255, 255, 255, 0.9);
      font-size: 0.9rem;
      font-weight: 500;
      text-align: center;
      padding: 0.8rem 1.5rem;
      background: rgba(0, 0, 0, 0.4);
      border-radius: 10px;
      backdrop-filter: blur(4px);
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
  `}
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
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
  font-size: 1.5rem;
  margin-bottom: 0.8rem;
  color: rgba(255, 255, 255, 0.95);
  font-weight: 600;
  letter-spacing: -0.02em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const ProductDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  flex: 1;
`;

const ProductLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.8rem 1.5rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
  color: #FFFFFF;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  font-weight: 500;
  font-size: 0.95rem;
  justify-content: center;
  margin-top: auto;
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-2px);
    border-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }

  &.disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }
`;

const StatusBadge = styled.span<{ active?: boolean }>`
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
  font-size: 0.75rem;
  font-weight: 500;
  background: ${props => props.active ? 
    'rgba(0, 212, 160, 0.1)' : 
    'rgba(255, 200, 0, 0.1)'};
  color: ${props => props.active ? 
    'rgba(0, 212, 160, 0.9)' : 
    'rgba(255, 200, 0, 0.9)'};
  backdrop-filter: blur(4px);
  border: 1px solid ${props => props.active ? 
    'rgba(0, 212, 160, 0.2)' : 
    'rgba(255, 200, 0, 0.2)'};
  letter-spacing: 0.02em;
  white-space: nowrap;
  margin-left: auto;
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
            <ProductTitle>
              Balancium
              <StatusBadge active>{t.products.balancium.status}</StatusBadge>
            </ProductTitle>
            <ProductDescription>{t.products.balancium.description}</ProductDescription>
            <ProductLink href="https://balanciumapp.web.app/" target="_blank">
              {t.products.balancium.action} <FaExternalLinkAlt size={12} />
            </ProductLink>
          </ProductContent>
        </ProductCard>
        
        <ProductCard>
          <ProductThumbnail development language={language} />
          <ProductContent>
            <ProductTitle>
              Hora Certa
              <StatusBadge>{t.products.horaCerta.status}</StatusBadge>
            </ProductTitle>
            <ProductDescription>{t.products.horaCerta.description}</ProductDescription>
            <ProductLink className="disabled">
              {t.products.horaCerta.action} <FaExternalLinkAlt size={12} />
            </ProductLink>
          </ProductContent>
        </ProductCard>
      </ProductGrid>
    </ProductSection>
  );
}
