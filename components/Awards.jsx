const AwardCard = ({ url, name, subtitle }) => {
  return (
    <a
      className="w-5/6 flex flex-col items-center justify-center"
      href={url}
      rel="noopener noreferrer"
    >
      <h3 className="text-4xl mt-6 mb-6 font-bold text-center">{name}</h3>
      <p className="text-xl text-gray-600 text-center">{subtitle}</p>
    </a>
  );
};

const Awards = ({ locales }) => {
  return (
    <section className="m-8 flex flex-col items-center justify-center">
      <h2 className="hero-gradient-heading text-3xl font-bold m-2 text-center">
        {locales.title}
      </h2>
      <section className="flex flex-wrap items-center justify-around">
        <article className="w-4/6 md:w-2/6 flex flex-col items-center justify-start">
          <AwardCard
            url={locales.awards[0].url}
            name={locales.awards[0].name}
            subtitle={locales.awards[0].subtitle}
          />
          <AwardCard
            url={locales.awards[1].url}
            name={locales.awards[1].name}
            subtitle={locales.awards[1].subtitle}
          />
          <AwardCard
            url={locales.awards[2].url}
            name={locales.awards[2].name}
            subtitle={locales.awards[2].subtitle}
          />
        </article>
        <article className="w-4/6 md:w-2/6 flex flex-col items-center justify-start">
          <AwardCard
            url={locales.awards[3].url}
            name={locales.awards[3].name}
            subtitle={locales.awards[3].subtitle}
          />
          <AwardCard
            url={locales.awards[4].url}
            name={locales.awards[4].name}
            subtitle={locales.awards[4].subtitle}
          />
          <AwardCard
            url={locales.awards[5].url}
            name={locales.awards[5].name}
            subtitle={locales.awards[5].subtitle}
          />
        </article>
      </section>
    </section>
  );
};

export default Awards;
