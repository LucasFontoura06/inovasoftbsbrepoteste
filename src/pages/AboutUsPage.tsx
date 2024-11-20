import styled from "styled-components";

const AboutSection = styled.section`
  padding: 2rem;
  background-color: #fff;
  text-align: center;
`;

export default function AboutUs() {
  return (
    <AboutSection id="about">
      <h2>Quem Somos</h2>
      <p>
        Somos uma startup de tecnologia sediada em Brasília, apaixonada por
        criar ferramentas que fazem a diferença. Acreditamos que a inovação é a
        chave para transformar a gestão empresarial e simplificar a vida das
        pessoas.
      </p>
    </AboutSection>
  );
}
