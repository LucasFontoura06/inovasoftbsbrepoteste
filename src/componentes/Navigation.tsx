import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  background: rgba(10, 10, 10, 0.95);
  backdrop-filter: blur(10px);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  z-index: 1000;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const Logo = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  background: linear-gradient(90deg, #fff, #00f7ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  
  a {
    color: #888;
    font-size: 0.9rem;
    font-weight: 500;
    
    &:hover {
      color: #00f7ff;
    }
  }
`;

const ContactButton = styled(Link)`
  background: transparent;
  border: 1px solid #00f7ff;
  color: #00f7ff;
  padding: 0.5rem 1.25rem;
  border-radius: 6px;
  font-weight: 500;
  
  &:hover {
    background: rgba(0, 247, 255, 0.1);
  }
`;

export default function Navigation() {
  return (
    <Nav>
      <Logo>InovaSoft BSB</Logo>
      <NavLinks>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <ContactButton to="/contact">Contact</ContactButton>
      </NavLinks>
    </Nav>
  );
} 