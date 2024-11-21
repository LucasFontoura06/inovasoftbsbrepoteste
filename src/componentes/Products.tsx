import styled from "styled-components";
import { FaSearch, FaClock, FaExternalLinkAlt } from "react-icons/fa";
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../contexts/translation';
import smartFindsImg from '../assets/smartfinds_home.jpg';

const ProductSection = styled.section`
  padding: 6rem 2rem;
  background: rgba(15, 23, 42, 0.95);
  position: relative;
  overflow: visible;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 6rem 1rem;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0;
  }
`;

const ProductCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 2rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: visible;
  padding-top: 160px;
  width: 100%;
  margin: 0 auto;
  max-width: 400px;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 1.5rem;
    padding-top: 140px;
    margin: 0;
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

  .icon {
    font-size: 2rem;
    color: #00f7ff;
    margin-bottom: 1.5rem;
  }

  h3 {
    color: #fff;
    margin-bottom: 1rem;
    font-size: 1.25rem;
  }

  p {
    color: #888;
    font-size: 0.9rem;
  }
`;

const ProductThumbnail = styled.div<{ development?: boolean; language?: 'pt' | 'en' }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 140px;
  overflow: hidden;
  border-radius: 12px 12px 0 0;
  
  ${props => props.development && `
    background: linear-gradient(45deg, #1a1a2e, #16213e);
    display: flex;
    align-items: center;
    justify-content: center;
    
    &::after {
      content: '${props.language === 'pt' ? '🚧 Em Desenvolvimento' : '🚧 Under Development'}';
      color: #ffcc00;
      font-size: 1.1rem;
      font-weight: 500;
      text-align: center;
      padding: 1rem;
      background: rgba(0, 0, 0, 0.3);
      border-radius: 8px;
      border: 1px solid rgba(255, 204, 0, 0.3);

      @media (max-width: 768px) {
        font-size: 0.9rem;
        padding: 0.8rem;
      }
    }
  `}
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
  z-index: 1;
  padding: 0 1rem;

  h2 {
    color: #fff;
    font-size: 2.5rem;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    color: #888;
    font-size: 1.1rem;
    max-width: 600px;
    margin: 0 auto;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const StatusBadge = styled.span<{ active?: boolean }>`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
  background: ${props => props.active ? 'rgba(0, 255, 0, 0.1)' : 'rgba(255, 200, 0, 0.1)'};
  color: ${props => props.active ? '#00ff00' : '#ffcc00'};
  border: 1px solid ${props => props.active ? 'rgba(0, 255, 0, 0.2)' : 'rgba(255, 200, 0, 0.2)'};
`;

const ProductLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  background: rgba(0, 247, 255, 0.1);
  color: #00f7ff;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 247, 255, 0.2);

  &:hover {
    background: rgba(0, 247, 255, 0.2);
    transform: translateY(-2px);
  }

  &.disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }
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
          <FaSearch className="icon" />
          <h3>SmartFinds</h3>
          <p>{t.products.smartFinds.description}</p>
          <ProductLink href="https://smartfinds.web.app/" target="_blank">
            {t.products.smartFinds.action} <FaExternalLinkAlt size={12} />
          </ProductLink>
          <StatusBadge active>{t.products.smartFinds.status}</StatusBadge>
        </ProductCard>
        
        <ProductCard>
          <ProductThumbnail development language={language}>
            {/* Não precisa da tag img quando development={true} */}
          </ProductThumbnail>
          <FaClock className="icon" />
          <h3>Hora Certa</h3>
          <p>{t.products.horaCerta.description}</p>
          <ProductLink className="disabled">
            {t.products.horaCerta.action} <FaExternalLinkAlt size={12} />
          </ProductLink>
          <StatusBadge>{t.products.horaCerta.status}</StatusBadge>
        </ProductCard>
      </ProductGrid>
    </ProductSection>
  );
}
