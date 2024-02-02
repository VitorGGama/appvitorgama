//jiu-jitsu.jsx
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

const JiuJitsuContainer = styled.section`
  text-align: center;
  margin: 50px;
`;

const JiuJitsu = () => {
  return (
    <div>
      <Head>
        <title>Jiu-Jitsu de Garagem - Meu Site de Esportes</title>
      </Head>
      <JiuJitsuContainer>
        <h2>Bem-vindo à Página de Jiu-Jitsu de Garagem!</h2>
        <p>
          Descubra o fascinante mundo do Jiu-Jitsu de Garagem e aprimore suas
          habilidades. Aqui você encontrará informações emocionantes e recursos
          úteis.
        </p>

        <Link href="/">
          <p>Página inicial</p>
        </Link>
      </JiuJitsuContainer>
    </div>
  );
};

export default JiuJitsu;
