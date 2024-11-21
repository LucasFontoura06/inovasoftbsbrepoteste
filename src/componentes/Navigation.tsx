import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useLanguage } from '../contexts/LanguageContext';

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

const MobileNavContainer = styled(motion.div)`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: rgba(15, 23, 42, 1.0);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 247, 255, 0.1);
  padding: 2rem;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
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
  padding: 0.8rem 1.5rem;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  text-decoration: none;
  white-space: nowrap;
  display: inline-block;
  text-align: center;
  
  @media (max-width: 768px) {
    width: 100%;
    margin: 0.5rem 0;
  }
  
  &:hover {
    background: rgba(0, 247, 255, 0.1);
    transform: translateY(-2px);
  }
`;

const LanguageButton = styled.button`
  background: transparent;
  border: none;
  color: #00f7ff;
  padding: 0.8rem 1.5rem;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    width: 100%;
    text-align: left;
    padding: 0.8rem 0;
  }
  
  &:hover {
    color: #fff;
    transform: translateY(-2px);
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: 2px solid #00f7ff;
  color: #00f7ff;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    display: block;
  }
  
  &:hover {
    background: rgba(0, 247, 255, 0.1);
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