// corrida.jsx
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

const CorridaDeRuaContainer = styled.section`
  text-align: center;
  margin: 50px;
`;

export async function getStaticProps() {
  try {
    // const resposta = await fetch(`https://fruityvice.com/api/fruit/all`);
    const resposta = await fetch(
      `https://nba-stats-db.herokuapp.com/api/playerdata/season/2023`
    );
    const dados = await resposta.json();
    console.log(dados.results);
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

/* https://nba-stats-db.herokuapp.com/api/playerdata/season/2023/ */

const CorridaDeRua = ({ dadosAPI }) => {
  const teste = dadosAPI;
  return (
    <div>
      <Head>
        <title>Corrida de Rua - Meu Site de Esportes</title>
      </Head>

      <CorridaDeRuaContainer>
        <h2>Bem-vindo à Página de Corrida de Rua!</h2>
        <p>
          Aqui você encontrará informações fascinantes sobre corridas de rua.
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
      </CorridaDeRuaContainer>
    </div>
  );
};

export default CorridaDeRua;
