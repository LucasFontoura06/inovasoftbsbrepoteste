import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

const Nav = styled.nav`
  background: rgba(15, 23, 42, 0.95);
  backdrop-filter: blur(10px);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 97%;
  z-index: 1000;
  border-bottom: 1px solid rgba(0, 247, 255, 0.1);
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(90deg, #fff 0%, #00f7ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-right: 1rem;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  margin-left: auto;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileNavLinks = styled.div<{ isOpen: boolean }>`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(15, 23, 42, 0.98);
    padding: 1.5rem;
    gap: 1.5rem;
    transform: ${({ isOpen }) => isOpen ? 'translateY(0)' : 'translateY(-100%)'};
    opacity: ${({ isOpen }) => isOpen ? '1' : '0'};
    transition: all 0.3s ease;
    align-items: center;
  }
`;

const NavItem = styled(Link)`
  color: #f5f5f5;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  text-decoration: none;
  
  &:hover {
    color: #00f7ff;
    transform: translateY(-2px);
  }
`;

const ContactButton = styled(Link)`
  background: transparent;
  border: 1px solid #00f7ff;
  color: #00f7ff;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  text-decoration: none;
  white-space: nowrap;
  
  @media (max-width: 768px) {
    width: auto;
    padding: 0.5rem 0.75rem;
    font-size: 0.85rem;
  }
  
  &:hover {
    background: rgba(0, 247, 255, 0.1);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 247, 255, 0.2);
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #00f7ff;
  font-size: 1.8rem;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0.5rem;
  
  &:hover {
    transform: scale(1.1);
  }
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const scrollToSection = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <Logo>InovaSoft BSB</Logo>
      
      <NavLinks>
        <NavItem to="/" onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}>Home</NavItem>
        <NavItem to="/" onClick={(e) => {
          e.preventDefault();
          scrollToSection('about');
        }}>About</NavItem>
        <NavItem to="/" onClick={(e) => {
          e.preventDefault();
          scrollToSection('products');
        }}>Products</NavItem>
        <ContactButton to="/contact">Contact</ContactButton>
      </NavLinks>

      <MenuButton onClick={() => setIsOpen(!isOpen)}>
        ☰
      </MenuButton>

      <MobileNavLinks isOpen={isOpen}>
        <NavItem to="/" onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
          setIsOpen(false);
        }}>Home</NavItem>
        <NavItem to="/" onClick={(e) => {
          e.preventDefault();
          scrollToSection('about');
          setIsOpen(false);
        }}>About</NavItem>
        <NavItem to="/" onClick={(e) => {
          e.preventDefault();
          scrollToSection('products');
          setIsOpen(false);
        }}>Products</NavItem>
        <ContactButton to="/contact">Contact</ContactButton>
      </MobileNavLinks>
    </Nav>
  );
} 