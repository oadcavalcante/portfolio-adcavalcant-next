import "../../styles/globals.css";
import Head from "next/head";
import Header from "../../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>@oadcavalcante | Dev</title>
        <link rel="icon" href="/images/avatar.png" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
