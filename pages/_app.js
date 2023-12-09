import Head from "next/head";
import { SessionProvider } from "next-auth/react";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  // return <Component {...pageProps} />;
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          type="image/x-icon"
          href="/images/profilepage/favicon.png"
        />
        <title>Know Secret</title>
      </Head>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}

export default MyApp;
