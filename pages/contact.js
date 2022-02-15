import { NextSeo } from 'next-seo';
import Form from 'components/Form';
import { useTranslation } from 'utils/locales';

const Contact = () => {
  const { contact } = useTranslation();
  return (
    <>
      <NextSeo title={`${contact.title} | Juan Almanza `} />
      <Form locales={contact} />
    </>
  );
};

export default Contact;
