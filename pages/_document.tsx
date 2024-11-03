import { Html, Head, Main, NextScript } from 'next/document';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

export default function Document() {
  const basePath = publicRuntimeConfig.basePath || '';

  return (
    <Html lang='es'>
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
