import styled from "styled-components";
import { FaSearch, FaClock, FaInfoCircle, FaExternalLinkAlt } from "react-icons/fa";

const ProductSection = styled.section`
  padding: 6rem 2rem;
  background: rgba(15, 23, 42, 0.95);
  position: relative;
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

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProductCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 2rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

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

const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
  z-index: 1;

  h2 {
    color: #fff;
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    color: #888;
    font-size: 1.1rem;
    max-width: 600px;
    margin: 0 auto;
  }
`;

const StatusBadge = styled.span<{ active?: boolean }>`
  position: absolute;
  top: 1rem;
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
  return (
    <ProductSection id="products">
      <SectionTitle>
        <h2>Nossos Softwares</h2>
        <p>Conheça algumas das soluções inovadoras que desenvolvemos para transformar a vida das pessoas.</p>
      </SectionTitle>
      <ProductGrid>
        <ProductCard>
          <StatusBadge active>Ativo</StatusBadge>
          <FaSearch className="icon" />
          <h3>SmartFinds</h3>
          <p>Busca inteligente para suas necessidades</p>
          <ProductLink href="https://smartfinds.com.br" target="_blank">
            Acessar <FaExternalLinkAlt size={12} />
          </ProductLink>
        </ProductCard>
        
        <ProductCard>
          <StatusBadge>Em breve</StatusBadge>
          <FaClock className="icon" />
          <h3>Hora Certa</h3>
          <p>Gestão de tempo eficiente</p>
          <ProductLink className="disabled">
            Em desenvolvimento <FaExternalLinkAlt size={12} />
          </ProductLink>
        </ProductCard>
        
        {/* <ProductCard>
          <StatusBadge active>Ativo</StatusBadge>
          <FaInfoCircle className="icon" />
          <h3>About Us</h3>
          <p>Conheça nossa história</p>
          <ProductLink href="https://about.empresa.com.br" target="_blank">
            Acessar <FaExternalLinkAlt size={12} />
          </ProductLink>
        </ProductCard> */}
      </ProductGrid>
    </ProductSection>
  );
}
