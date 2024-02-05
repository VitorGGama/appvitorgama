// Jit-jitsu
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

const JiuJitsuContainer = styled.section`
  text-align: center;
  margin: 50px;
`;

export async function getStaticProps() {
  try {
    const resposta = await fetch(
      `https://nba-stats-db.herokuapp.com/api/playerdata/season/2023`
    );
    const dados = await resposta.json();

    let dadosAPI = dados.results;

    if (!resposta.ok) {
      throw new Error(`Erro: ${resposta.status} - ${resposta.statusText}`);
    }

    return {
      props: { dadosAPI },
    };
  } catch (error) {
    console.error("Deu ruim: " + error.message);
    return { notFound: true };
  }
}

const JiuJitsu = ({ dadosAPI }) => {
  const teste = dadosAPI;
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
        {teste.map((jogador) => {
          return (
            <>
              <p>{jogador.player_name}</p>
            </>
          );
        })}
      </JiuJitsuContainer>
    </div>
  );
};

export default JiuJitsu;
