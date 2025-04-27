import styled from "styled-components";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

const FooterContainer = styled.footer`
  padding: 4rem 2rem;
  background: var(--primary-color);
  color: var(--text-color);
  text-align: center;
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
      var(--secondary-color),
      transparent
    );
    opacity: 0.1;
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const Copyright = styled.p`
  color: var(--text-color);
  opacity: 0.8;
  font-size: 0.9rem;
  letter-spacing: 0.02em;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

const SocialLink = styled.a`
  color: var(--text-color);
  font-size: 1.25rem;
  transition: all 0.3s ease;
  opacity: 0.8;
  
  &:hover {
    transform: translateY(-2px);
    opacity: 1;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <SocialLinks>
          <SocialLink href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </SocialLink>
          <SocialLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </SocialLink>
          <SocialLink href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </SocialLink>
        </SocialLinks>
        <Copyright>© 2024 Veridian - Todos os direitos reservados.</Copyright>
      </FooterContent>
    </FooterContainer>
  );
}
