import { NextSeo } from "next-seo";
import Form from "components/Form";
import { contact_en } from "locales/en";
import { contact } from "locales/es";
import { useRouter } from "next/router";

const Contact = () => {
  const router = useRouter();

  return (
    <>
      <NextSeo
        title={`${
          router.locale == "en" ? "Contact" : "Contactame"
        } | Juan Almanza `}
      />
      <Form locales={router.locale == "en" ? contact_en : contact} />
    </>
  );
};

export default Contact;
