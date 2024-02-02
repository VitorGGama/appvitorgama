// components/Bemvindo.jsx
import Link from "next/link";
import styled from "styled-components";

const BemvindoContainer = styled.header`
  text-align: center;
  margin: 50px;
`;

const Bemvindo = () => {
  return (
    <>
      <BemvindoContainer>
        <h1>
          Explore meu site dedicado à paixão por Corridas de rua e Jiu-Jitsu!
        </h1>
        <p>
          Estou animado para compartilhar informações empolgantes sobre esses
          dois fascinantes universos. Aproveite a sua visita!
        </p>
      </BemvindoContainer>
      <nav>
        <ul>
          <li>
            <Link href="/corrida">Corrida de Rua</Link>
          </li>
          <li>
            <Link href="/jiujitsu">Jiu-Jitsu de Garagem</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Bemvindo;
