// pages/corrida-de-rua.js
import Head from "next/head";
import WelcomeMessage from "../components/WelcomeMessage";

const CorridaDeRua = () => {
  return (
    <div>
      <Head>
        <title>Corrida de Rua</title>
      </Head>
      <WelcomeMessage />
      <h2>Corrida de Rua</h2>
      {/* Adicione informações sobre corrida de rua aqui */}
    </div>
  );
};

export default CorridaDeRua;
