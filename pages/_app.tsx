import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
  return <>
  {/* Meta tags y título global */}
  <Head>
    <title>DevFest Santiago 2024</title>
    <meta name="description" content="Bienvenidos a DevFest Santiago 2024, el evento de tecnología más esperado." />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Head>
    {/* Global site tag - Google Tag Manager */}
    <Script id="google-analytics" strategy="afterInteractive">
      {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-NT2WMQH');
      `}
    </Script>
    <Component {...pageProps} />
  </>
}
