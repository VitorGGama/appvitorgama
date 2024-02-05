import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="application-name" content="site de esportes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="site de esportes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#000000" />
        <link
          rel="shortcurt icon"
          href="/images/pistaCorrida.jpg"
          type="image/jpg"
          sizes="256x256"
        />
        <meta name="author" content="Vitor G. Gama" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
