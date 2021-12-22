import Image from "next/image";

const Logos = () => {
  return (
    <section className="m-4">
      <h2 className="text-center text-lg text-gray-600">Trusted by</h2>
      <section className="flex flex-wrap justify-evenly items-center">
        <Image src="/mlh.svg" alt="trusted logo" width={150} height={75} />
        <Image
          src="/slingshot.png"
          alt="trusted logo"
          width={150}
          height={150}
        />
        <Image src="/htv.png" alt="trusted logo" width={150} height={150} />
        <Image src="/garuda.png" alt="trusted logo" width={150} height={150} />
      </section>
    </section>
  );
};

export default Logos;
