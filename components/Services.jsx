import Image from "next/image";

const Services = ({ locales }) => {
  return (
    <section className="flex flex-col justify-center items-center m-4 md:m-12">
      <h2 className="mr-6 ml-6 mt-6 hero-gradient-heading text-2xl md:text-4xl font-bold">
        {locales.title}
      </h2>
      <p className="mr-8 ml-8 text-5xl font-bold text-center">
        {locales.subtitle}
      </p>
      <section className="m-8 flex flex-wrap flex-row items-center justify-around">
        {locales.services.map((service, index) => (
          <article key={index} className="m-6 max-w-xs">
            <Image
              src={service.image}
              width={70}
              height={70}
              alt="Aptitudes image"
              loading="lazy"
            />
            <h2 className="mt-4 mb-4 font-bold text-2xl md:text-3xl">
              {service.title}
            </h2>
            <p className="mb-4 text-lg text-gray-600 md:text-xl">
              {service.subtitle}
            </p>
            <ul>
              {service.list.map((item, index) => (
                <li key={index} className="font-bold text-lg">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </section>
  );
};

export default Services;
