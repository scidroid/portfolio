const Awards = () => {
  return (
    <section className="m-8 flex flex-col items-center justify-center">
      <h2 className="hero-gradient-heading text-3xl font-bold m-2 text-center">
        AWARDS
      </h2>
      <section className="flex flex-wrap items-center justify-around">
        <article className="w-4/6 md:w-2/6">
          <a
            className="w-4/6 pt-16 pb-16 pl-16"
            href="http://oc.uan.edu.co/olimpiada-colombiana-de-computacion"
          >
            <h3 className="text-4xl mt-6 mb-6 font-bold">Second Place</h3>
            <p className="text-xl text-gray-600">
              Colombian computing Olympiad
            </p>
          </a>
          <a
            className="w-5/6"
            href="https://devpost.com/software/medicaid-3f2er5"
          >
            <h3 className="text-4xl mt-6 mb-6 font-bold">Second place</h3>
            <p className="text-xl text-gray-600">Hack the valley</p>
          </a>
          <a className="w-5/6" href="https://devpost.com/software/collegeloans">
            <h3 className="text-4xl mt-6 mb-6 font-bold">
              Second place and best financial data hack
            </h3>
            <p className="text-xl text-gray-600">Data day grind 2.0</p>
          </a>
        </article>
        <article className="w-4/6 md:w-2/6">
          <a className="w-5/6" href="https://devpost.com/software/gastroworld">
            <h3 className="text-4xl mt-6 mb-6 font-bold">Second place</h3>
            <p className="text-xl text-gray-600">Bon Hacketit 2.0</p>
          </a>
          <a
            className="w-5/6"
            href="https://devpost.com/software/easytravel-iscyl0"
          >
            <h3 className="text-4xl mt-6 mb-6 font-bold">
              third place and sponsor prizes
            </h3>
            <p className="text-xl text-gray-600">Hack around the world</p>
          </a>
          <a className="w-5/6" href="https://devpost.com/software/awarelms">
            <h3 className="text-4xl mt-6 mb-6 font-bold">
              Best pre-universitary hack
            </h3>
            <p className="text-xl text-gray-600">Garuda Hacks v2.0</p>
          </a>
        </article>
      </section>
    </section>
  );
};

export default Awards;
