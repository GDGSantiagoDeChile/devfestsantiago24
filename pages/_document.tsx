import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const basePath = '/devfestsantiago24'; // Coloca aquí el mismo valor de `basePath` en next.config.js

  return (
    <Html lang="es">
      <Head>
        <link rel="icon" href={`${basePath}/favicon.ico`} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
