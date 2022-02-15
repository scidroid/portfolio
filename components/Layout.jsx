import Header from 'components/Header';
import Footer from 'components/Footer';
import { useTranslation } from 'utils/locales';

const Layout = ({ children }) => {
  const { header, footer } = useTranslation();

  return (
    <>
      <Header locales={header} />
      <main>{children}</main>
      <Footer locales={footer} />
    </>
  );
};

export default Layout;
