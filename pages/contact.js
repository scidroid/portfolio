import { NextSeo } from "next-seo";
import Form from "components/Form";

const Contact = () => {
  return (
    <>
      <NextSeo
        config={{
          title: "Contact | Juan Almanza",
          openGraph: {
            title: "Contact | Juan Almanza",
          },
        }}
      />
      <Form />
    </>
  );
};

export default Contact;
