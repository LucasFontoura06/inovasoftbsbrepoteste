import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useLanguage } from '../contexts/LanguageContext';

const Nav = styled.nav`
  background: rgba(0, 99, 77, 0.8);
  backdrop-filter: blur(10px);
  padding: 1.2rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  z-index: 1000;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  background: linear-gradient(135deg, #FFFFFF 0%, var(--metallic-light) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  letter-spacing: -0.02em;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2.5rem;
  align-items: center;
  margin-left: auto;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileNavContainer = styled(motion.div)`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: rgba(0, 99, 77, 0.95);
  backdrop-filter: blur(10px);
  padding: 1.5rem;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
`;

const MobileNavRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  width: 100%;
`;

const MobileNavItem = styled(motion.div)`
  text-align: center;
  
  a {
    display: block;
    padding: 0.8rem;
    color: #fff;
    font-size: 0.9rem;
    white-space: nowrap;
    
    &:hover {
      color: #00f7ff;
    }
  }
`;

const MobileContactButton = styled(motion.div)`
  width: 100%;
  margin-top: 1rem;
`;

const NavItem = styled(Link)`
  color: var(--metallic-light);
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  text-decoration: none;
  position: relative;
  padding: 0.5rem 0;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--gradient-metallic);
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: #FFFFFF;
    transform: translateY(-1px);
    
    &::after {
      width: 100%;
    }
  }
`;

const ContactButton = styled(Link)`
  background: var(--gradient-metallic);
  color: #FFFFFF;
  padding: 0.8rem 1.8rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  text-decoration: none;
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
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    
    &::before {
      transform: translateX(50%);
    }
  }
  
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

const LanguageButton = styled.button`
  background: transparent;
  border: none;
  color: var(--metallic-light);
  padding: 0.8rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    color: #FFFFFF;
    transform: translateY(-1px);
  }
  
  @media (max-width: 768px) {
    width: 100%;
    text-align: left;
    padding: 0.8rem 0;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  color: var(--metallic-light);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    display: block;
  }
  
  &:hover {
    color: #FFFFFF;
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
  const { language, toggleLanguage } = useLanguage();

  const containerVariants = {
    hidden: { 
      opacity: 0,
      y: -20,
      transition: {
        staggerChildren: 0.05,
        when: "afterChildren"
      }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <Nav>
      <Logo>InovaSoft BSB</Logo>
      
      <NavLinks>
        <NavItem to="/" onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}>{language === 'pt' ? 'Início' : 'Home'}</NavItem>
        <NavItem to="/" onClick={(e) => {
          e.preventDefault();
          scrollToSection('about');
        }}>{language === 'pt' ? 'Sobre' : 'About'}</NavItem>
        <NavItem to="/" onClick={(e) => {
          e.preventDefault();
          scrollToSection('products');
        }}>{language === 'pt' ? 'Produtos' : 'Products'}</NavItem>
        <ContactButton to="/contact">
          {language === 'pt' ? 'Contato' : 'Contact'}
        </ContactButton>
        <LanguageButton onClick={toggleLanguage}>
          {language === 'pt' ? '🇺🇸 EN' : '🇧🇷 PT'}
        </LanguageButton>
      </NavLinks>

      <MenuButton onClick={() => setIsOpen(!isOpen)}>
        ☰
      </MenuButton>

      <AnimatePresence>
        {isOpen && (
          <MobileNavContainer
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={containerVariants}
          >
            <MobileNavRow>
              <MobileNavItem variants={itemVariants}>
                <NavItem to="/" onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setIsOpen(false);
                }}>{language === 'pt' ? 'Início' : 'Home'}</NavItem>
              </MobileNavItem>
              
              <MobileNavItem variants={itemVariants}>
                <NavItem to="/" onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('about');
                  setIsOpen(false);
                }}>{language === 'pt' ? 'Sobre' : 'About'}</NavItem>
              </MobileNavItem>
              
              <MobileNavItem variants={itemVariants}>
                <NavItem to="/" onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('products');
                  setIsOpen(false);
                }}>{language === 'pt' ? 'Produtos' : 'Products'}</NavItem>
              </MobileNavItem>
              
              <MobileNavItem variants={itemVariants}>
                <LanguageButton onClick={toggleLanguage}>
                  {language === 'pt' ? '🇺🇸 EN' : '🇧🇷 PT'}
                </LanguageButton>
              </MobileNavItem>
            </MobileNavRow>

            <MobileContactButton variants={itemVariants}>
              <ContactButton to="/contact">
                {language === 'pt' ? 'Contato' : 'Contact'}
              </ContactButton>
            </MobileContactButton>
          </MobileNavContainer>
        )}
      </AnimatePresence>
    </Nav>
  );
} 