const Projects = () => {
  return (
    <section className="flex flex-col justify-center items-center m-4 md:m-12">
      <h2 className="mr-6 ml-6 mt-6 hero-gradient-heading text-2xl md:text-4xl font-bold">
        PROJECTS
      </h2>
      <p className="mr-8 ml-8 text-5xl font-bold text-center">
        I develop award winning apps
      </p>
      <section className="m-8 flex flex-wrap flex-row items-center justify-around">
        <article className="m-6 max-w-xs">
          <img src="/collegeloans.png" className="w-full" alt="College Loans" />
          <h2 className="mt-4 mb-4 font-bold text-2xl md:text-3xl">
            CollegeLoans
          </h2>
          <p className="mb-4 text-lg text-gray-600 md:text-xl">
            Search your ideal college in minutes, and dicover how to pay for it.
          </p>
          <a href="https://collegeloan.us/" className="text-lg font-bold flex">
            Live demo
            <img
              src="/arrow.svg"
              loading="lazy"
              width="13"
              height="13"
              alt="arrow"
              className="ml-2"
            />
          </a>
          <a
            href="https://github.com/pumasteam/collegeloans"
            className="text-lg font-bold flex"
          >
            View github
            <img
              src="/arrow.svg"
              loading="lazy"
              width="13"
              height="13"
              alt="arrow"
              className="ml-2"
            />
          </a>
        </article>
        <article className="m-6 max-w-xs">
          <img src="/mastery.png" className="w-full" alt="Mastery" />
          <h2 className="mt-4 mb-4 font-bold text-2xl md:text-3xl">Mastery</h2>
          <p className="mb-4 text-lg md:text-xl text-gray-600">
            Mastery learning based education, in web or in your whastapp
          </p>
          <a
            href="https://github.com/scidroid/mastery"
            className="text-lg font-bold flex"
          >
            View github
            <img
              src="/arrow.svg"
              loading="lazy"
              width="13"
              height="13"
              alt="arrow"
              className="ml-2"
            />
          </a>
        </article>
        <article className="m-6 max-w-xs">
          <img src="/gastroworld.png" className="w-full" alt="GastroWorld" />
          <h2 className="mt-4 mb-4 font-bold text-2xl md:text-3xl">
            GastroWorld
          </h2>
          <p className="mb-4 text-lg text-gray-600 md:text-xl">
            Discover the best foods of the world and learn how to cook it.
          </p>
          <a
            href="https://www.youtube.com/watch?v=-Izk-sRrx30"
            className="text-lg font-bold flex"
          >
            Video demo
            <img
              src="/arrow.svg"
              loading="lazy"
              width="13"
              height="13"
              alt="arrow"
              className="ml-2"
            />
          </a>
          <a
            href="https://github.com/scidroid/gastroworld"
            className="text-lg font-bold flex"
          >
            View github
            <img
              src="/arrow.svg"
              loading="lazy"
              width="13"
              height="13"
              alt="arrow"
              className="ml-2"
            />
          </a>
        </article>
      </section>
    </section>
  );
};

export default Projects;
