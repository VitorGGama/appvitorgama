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
    const resposta = await fetch(`https://fruityvice.com/api/fruit/all`);
    const dados = await resposta.json();
    console.log(dados);

    if (!resposta.ok) {
      throw new Error(`Erro: ${resposta.status} - ${resposta.statusText}`);
    }

    return {
      props: { dados },
    };
  } catch (error) {
    console.error("Deu ruim: " + error.message);
    return { notFound: true };
  }
}

const CorridaDeRua = () => {
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
      </CorridaDeRuaContainer>
    </div>
  );
};

export default CorridaDeRua;
