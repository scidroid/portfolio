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

const Awards = () => {
  return (
    <section className="m-8 flex flex-col items-center justify-center">
      <h2 className="hero-gradient-heading text-3xl font-bold m-2 text-center">
        AWARDS
      </h2>
      <section className="flex flex-wrap items-center justify-around">
        <article className="w-4/6 md:w-2/6 flex flex-col items-center justify-start">
          <AwardCard
            url="http://oc.uan.edu.co/olimpiada-colombiana-de-computacion"
            name="Second Place"
            subtitle="Colombian computing Olympiad"
          />
          <AwardCard
            url="https://devpost.com/software/medicaid-3f2er5"
            name="Second place"
            subtitle="Hack the valley"
          />
          <AwardCard
            url="https://devpost.com/software/collegeloans"
            name="Second place and best financial data hack"
            subtitle="Data day grind 2.0"
          />
        </article>
        <article className="w-4/6 md:w-2/6 flex flex-col items-center justify-start">
          <AwardCard
            url="https://devpost.com/software/gastroworld"
            name="Second place"
            subtitle="Bon Hacketit 2.0"
          />
          <AwardCard
            url="https://devpost.com/software/easytravel-iscyl0"
            name="third place and sponsor prizes"
            subtitle="Hack around the world"
          />
          <AwardCard
            url="https://devpost.com/software/awarelms"
            name="Best pre-universitary hack"
            subtitle="Garuda Hacks v2.0"
          />
        </article>
      </section>
    </section>
  );
};

export default Awards;
