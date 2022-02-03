import Header from "components/Header";
import Footer from "components/Footer";
import { useRouter } from "next/router";
import { header, footer } from "locales/es";
import { header_en, footer_en } from "locales/en";

const Layout = ({ children }) => {
  const router = useRouter();

  const { return_locale } = router.query;

  const selectLocaleWithFallback = (en, es) => {
    if (return_locale == "en") {
      return en;
    } else if (return_locale == "es") {
      return es;
    } else {
      if (router.locale == "en") {
        return en;
      } else {
        return es;
      }
    }
  };
  
  return (
    <>
      <Header locales={selectLocaleWithFallback(header_en, header)} />
      <main>{children}</main>
      <Footer locales={selectLocaleWithFallback(footer_en, footer)} />
    </>
  );
};

export default Layout;
