import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

const Nav = styled.nav`
  background: rgba(10, 10, 10, 0.95);
  backdrop-filter: blur(10px);
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  z-index: 1000;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const Logo = styled.div`
  font-size: 1.1rem;
  font-weight: 700;
  background: linear-gradient(90deg, #fff, #00f7ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-right: 1rem;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  margin-left: auto;
  padding-right: 0.5rem;
  
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
    background: rgba(10, 10, 10, 0.95);
    padding: 1rem;
    gap: 1rem;
    transform: ${({ isOpen }) => isOpen ? 'translateY(0)' : 'translateY(-100%)'};
    opacity: ${({ isOpen }) => isOpen ? '1' : '0'};
    transition: all 0.3s ease;
    align-items: center;
  }
`;

const NavItem = styled(Link)`
  color: #888;
  font-size: 0.85rem;
  font-weight: 500;
  padding: 0.25rem 0.5rem;
  
  &:hover {
    color: #00f7ff;
  }
`;

const ContactButton = styled(Link)`
  background: transparent;
  border: 1px solid #00f7ff;
  color: #00f7ff;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: 500;
  white-space: nowrap;
  
  &:hover {
    background: rgba(0, 247, 255, 0.1);
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <Logo>InovaSoft BSB</Logo>
      
      <NavLinks>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/about">About</NavItem>
        <NavItem to="/products">Products</NavItem>
        <ContactButton to="/contact">Contact</ContactButton>
      </NavLinks>

      <MenuButton onClick={() => setIsOpen(!isOpen)}>
        ☰
      </MenuButton>

      <MobileNavLinks isOpen={isOpen}>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/about">About</NavItem>
        <NavItem to="/products">Products</NavItem>
        <ContactButton to="/contact">Contact</ContactButton>
      </MobileNavLinks>
    </Nav>
  );
} 