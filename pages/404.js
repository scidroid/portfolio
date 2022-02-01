import Button from "components/Button";

const Page404 = () => {
  return (
    <section className="m-16 sm:m-32 flex flex-col items-center justify-center">
      <h1 className="text-center text-9xl font-bold italic">404</h1>
      <h2 className="text-center text-4xl font-bold italic">Page not found</h2>
      <p className="text-center text-gray-600 text-2xl m-2 font-bold">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Button href="/">
        <p className="font-bold">Go back to home</p>
      </Button>
    </section>
  );
};

export default Page404;
