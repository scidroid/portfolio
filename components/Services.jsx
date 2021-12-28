import Image from "next/image";

const Services = () => {
  return (
    <section className="flex flex-col justify-center items-center m-4 md:m-12">
      <h2 className="mr-6 ml-6 mt-6 hero-gradient-heading text-2xl md:text-4xl font-bold">
        SERVICES
      </h2>
      <p className="mr-8 ml-8 text-5xl font-bold text-center">
        Products that solves problems, one app at a time
      </p>
      <section className="m-8 flex flex-wrap flex-row items-center justify-around">
        <article className="m-6 max-w-xs">
          <Image src="/s1.svg" width={70} height={70} alt="Services image" />
          <h2 className="mt-4 mb-4 font-bold text-2xl md:text-3xl">
            What I can do for you
          </h2>
          <p className="mb-4 text-lg text-gray-600 md:text-xl">
            Faster, better products that your users love. Here's all the
            services I provide:
          </p>
          <ul>
            <li className="font-bold text-lg">Front-end development</li>
            <li className="font-bold text-lg">Software consulting</li>
            <li className="font-bold text-lg">Back-end development</li>
          </ul>
        </article>
        <article className="m-6 max-w-xs">
          <Image src="/s2.svg" width={70} height={70} alt="Services image" />
          <h2 className="mt-4 mb-4 font-bold text-2xl md:text-3xl">
            languages I'm fluent in
          </h2>
          <p className="mb-4 text-lg md:text-xl text-gray-600">
            Every developer needs the right tools to do the perfect job,
            Thankfully, I'm multilingual
          </p>
          <ul>
            <li className="font-bold text-lg">React.js</li>
            <li className="font-bold text-lg">Python</li>
            <li className="font-bold text-lg">C++</li>
          </ul>
        </article>
        <article className="m-6 max-w-xs">
          <Image src="/s3.svg" width={70} height={70} alt="Services image" />
          <h2 className="mt-4 mb-4 font-bold text-2xl md:text-3xl">What you can expect</h2>
          <p className="mb-4 text-lg text-gray-600 md:text-xl">
            I make products that are more than pretty. I make it shipable and
            usable
          </p>
          <ul>
            <li className="font-bold text-lg">Clean and functional</li>
            <li className="font-bold text-lg">Device and user friendly</li>
            <li className="font-bold text-lg">Eficcient and maintanible</li>
          </ul>
        </article>
      </section>
    </section>
  );
};

export default Services;
