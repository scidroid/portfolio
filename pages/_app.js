import { useRouter } from "next/router";
import splitbee from "@splitbee/web";
import { useEffect } from "react";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import { defaultSeo_en, defaultSeo_es } from "seo.config";
import Kbar from "components/Kbar";
import Layout from "components/Layout";
import "styles/global.css";
import "animate.css";
import "prismjs/themes/prism-tomorrow.css";

const App = ({ Component, pageProps }) => {
  const router = useRouter();

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
      {router.locale === "en" ? (
        <DefaultSeo {...defaultSeo_en} />
      ) : (
        <DefaultSeo {...defaultSeo_es} />
      )}
      <Kbar>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Kbar>
    </>
  );
};

export default App;
