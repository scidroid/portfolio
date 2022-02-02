import splitbee from "@splitbee/web";
import { useEffect } from "react";
import Head from "next/head";
import { NextSeo } from "next-seo";
import SEO from "seo.config";
import Kbar from "components/Kbar";
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
      </Head>
      <NextSeo config={SEO} />
      <Kbar>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Kbar>
    </>
  );
};

export default App;
