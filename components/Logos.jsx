import Image from "next/image";

const Logos = () => {
  return (
    <section className="m-4 animate__animated animate__backInUp">
      <h2 className="m-2 text-center text-lg text-gray-600">Trusted by</h2>
      <section className="flex flex-wrap justify-evenly items-center">
        <Image
          src="/mlh.png"
          alt="trusted logo"
          width={150}
          height={75}
          loading="lazy"
        />
        <Image
          src="/slingshot.png"
          alt="trusted logo"
          width={150}
          height={160}
          loading="lazy"
        />
        <Image
          src="/htv.png"
          alt="trusted logo"
          width={120}
          height={120}
          loading="lazy"
        />
        <Image
          src="/garuda.png"
          alt="trusted logo"
          width={90}
          height={80}
          loading="lazy"
        />
      </section>
    </section>
  );
};

export default Logos;
