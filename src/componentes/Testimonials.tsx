import styled from "styled-components";

const TestimonialSection = styled.section`
  padding: 2rem;
  background-color: #ffffff;
  text-align: center;

  h2 {
    margin-bottom: 1.5rem;
    color: #4e73df;
  }
`;

const TestimonialCard = styled.div`
  margin: 1rem auto;
  padding: 1.5rem;
  max-width: 600px;
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  p {
    font-style: italic;
    margin-bottom: 1rem;
  }

  span {
    font-weight: bold;
    color: #4e73df;
  }
`;

export default function Testimonials() {
  return (
    <TestimonialSection id="testimonials">
      <h2>O Que Nossos Clientes Dizem</h2>
      <TestimonialCard>
        <p>
          "Com o Hora Certa, nossa equipe reduziu em 30% o tempo gasto em gestão
          de horas. A InovaSoftBSB realmente entrega inovação!"
        </p>
        <span>— Carla Santos, Gerente de RH</span>
      </TestimonialCard>
      <TestimonialCard>
        <p>
          "O SmartFinds transformou a forma como encontramos produtos. É rápido,
          prático e extremamente eficiente."
        </p>
        <span>— João Almeida, Consumidor</span>
      </TestimonialCard>
    </TestimonialSection>
  );
}
