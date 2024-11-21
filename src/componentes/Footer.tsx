import styled from "styled-components";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

const FooterContainer = styled.footer`
  padding: 3rem 2rem;
  background: rgba(15, 23, 42, 0.95);
  color: #fff;
  text-align: center;
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

const Copyright = styled.p`
  color: #888;
  margin-bottom: 1.5rem;
  position: relative;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  position: relative;
`;

const SocialLink = styled.a`
  color: #00f7ff;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    color: #fff;
    filter: drop-shadow(0 0 8px rgba(0, 247, 255, 0.5));
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <Copyright>© 2024 InovaSoft BSB - Todos os direitos reservados.</Copyright>
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
    </FooterContainer>
  );
}
