import splitbee from "@splitbee/web";
import { useEffect } from "react";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import Layout from "components/Layout";
import "styles/global.css";

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
      <DefaultSeo
        openGraph={{
          type: "website",
          locale: "en_US",
          url: "https://scidroid.me",
          site_name: "SciDroid's portfolio",
        }}
        twitter={{
          handle: "@scidroid",
          site: "@scidroid",
          cardType: "summary_large_image",
        }}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default App;
