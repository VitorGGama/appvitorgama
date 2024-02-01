import styled from "styled-components";

const BemvindoContainer = styled.div`
  text-align: center;
  margin: 50px;
`;

const Bemvindo = () => {
  return (
    <BemvindoContainer>
      <h1>Bem-vindo ao meu site!</h1>
      <p>Espero que você aproveite a sua visita.</p>
    </BemvindoContainer>
  );
};

export default Bemvindo;
