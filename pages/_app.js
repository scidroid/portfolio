import splitbee from "@splitbee/web";
import { useEffect } from "react";
import Head from "next/head";
import Layout from "components/Layout";
import "styles/global.css";
import "animate.css";

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    splitbee.init({
      apiUrl: "/sb-api",
      scriptUrl: "/sb.js",
    });
  }, []);

  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/fonts/PlusJakartaSans-Regular.woff2"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/PlusJakartaSans-Bold.woff2"
          as="font"
          crossOrigin=""
        />
        <meta property="og:site_name" content="SciDroid" />
        <meta property="og:type" content="website" key={"ogtype"} />
        <meta property="og:local" content="en_US" key={"oglocal"} />
        <meta
          property="og:base_url"
          content="https://scidroid.co"
          key={"ogbaseurl"}
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default App;
