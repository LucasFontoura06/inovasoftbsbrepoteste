import styled from "styled-components";

const FooterContainer = styled.footer`
  padding: 2rem;
  background: #333;
  color: #fff;
  text-align: center;

  a {
    color: #f8c145;
    margin: 0 0.5rem;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <p>© 2024 InovaSoftBSB - Todos os direitos reservados.</p>
      <a href="https://facebook.com">Facebook</a>
      <a href="https://linkedin.com">LinkedIn</a>
    </FooterContainer>
  );
}
