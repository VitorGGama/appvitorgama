//index.jsx
import Head from "next/head";
import Bemvindo from "../components/Bemvindo";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Meu Site de Esportes</title>
      </Head>
      <Bemvindo />
    </div>
  );
};

export default Home;
