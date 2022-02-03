import Header from "components/Header";
import Footer from "components/Footer";
import { useRouter } from "next/router";
import { header, footer } from "locales/es";
import { header_en, footer_en } from "locales/en";

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <Header locales={router.locale === "en" ? header_en : header} />
      <main>{children}</main>
      <Footer locales={router.locale === "en" ? footer_en : footer} />
    </>
  );
};

export default Layout;
