import styled from "styled-components";
import { FaSearch, FaClock, FaInfoCircle } from "react-icons/fa";

const ProductSection = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(
    135deg,
    rgba(15, 23, 42, 0.95) 0%,
    rgba(30, 41, 59, 0.95) 100%
  );
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      linear-gradient(
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


export default function Products() {
  return (
    <ProductSection id="products">
      <ProductGrid>
        <ProductCard>
          <FaSearch className="icon" />
          <h3>SmartFinds</h3>
          <p>Busca inteligente para suas necessidades</p>
        </ProductCard>
        <ProductCard>
          <FaClock className="icon" />
          <h3>Hora Certa</h3>
          <p>Gestão de tempo eficiente</p>
        </ProductCard>
        <ProductCard>
          <FaInfoCircle className="icon" />
          <h3>About Us</h3>
          <p>Conheça nossa história</p>
        </ProductCard>
      </ProductGrid>
    </ProductSection>
  );
}
