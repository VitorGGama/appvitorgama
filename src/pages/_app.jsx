// pages/_app.js (ou _app.jsx)
import "../styles/globals.css"; // Importe os estilos globais aqui, se necessário.

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
