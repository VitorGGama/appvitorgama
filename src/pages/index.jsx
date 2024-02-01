// pages/index.js
import Head from "next/head";
import Bemvindo from "../components/Bemvindo";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Meu Site de Esportes</title>
        <link rel="stylesheet" href="/styles/globals.css" />
      </Head>
      <Bemvindo />
      <nav>
        <ul>
          <li>
            <Link href="/corrida-de-rua">Corrida de Rua</Link>
          </li>
          <li>
            <Link href="/jiu-jitsu-de-garagem">Jiu-Jitsu de Garagem</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
