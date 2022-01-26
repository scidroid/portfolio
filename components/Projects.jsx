import Image from "next/image";

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
          <Image
            src="/collegeloans.png"
            width="320"
            height="180"
            alt="College Loans"
            loading="lazy"
          />
          <h2 className="mt-4 mb-4 font-bold text-2xl md:text-3xl">
            CollegeLoans
          </h2>
          <p className="mb-4 text-lg text-gray-600 md:text-xl">
            CollegeLoans is a platform that allows you to do college planning
            based on your SAT scores and annual income so that you can study
            without any unforeseen events. It tracks and predicts your debt
            based on your income and also recommends schools based on your SAT
            scores.
          </p>
          <a
            href="https://devpost.com/software/collegeloans/"
            className="text-lg font-bold flex pr-2"
          >
            More info
            <Image
              src="/arrow.svg"
              loading="lazy"
              width="13"
              height="13"
              alt="arrow"
              className="padding-b"
            />
          </a>
          <a
            href="https://github.com/pumasteam/collegeloans"
            className="text-lg font-bold flex pr-2"
          >
            View github
            <Image
              src="/arrow.svg"
              loading="lazy"
              width="13"
              height="13"
              alt="arrow"
              className="padding-b"
            />
          </a>
        </article>
        <article className="m-6 max-w-xs">
          <Image
            src="/mastery.png"
            width="320"
            height="180"
            alt="Mastery"
            loading="lazy"
          />
          <h2 className="mt-4 mb-4 font-bold text-2xl md:text-3xl">Mastery</h2>
          <p className="mb-4 text-lg md:text-xl text-gray-600">
            During the pandemic education had 2 problems, lack of access and low
            quality. that's why i created mastery, a platform where teachers can
            apply mastery learning in their classes. allowing students to learn
            in their own way and at their own pace, and with its whastapp module
            it allows students with low internet connection to have access to
            education
          </p>
          <a
            href="https://github.com/scidroid/mastery"
            className="text-lg font-bold flex pr-2"
          >
            View github
            <Image
              src="/arrow.svg"
              loading="lazy"
              width="13"
              height="13"
              alt="arrow"
              className="padding-b"
            />
          </a>
        </article>
        <article className="m-6 max-w-xs">
          <Image
            src="/gastroworld.png"
            width="320"
            height="180"
            alt="GastroWorld"
            loading="lazy"
          />
          <h2 className="mt-4 mb-4 font-bold text-2xl md:text-3xl">
            GastroWorld
          </h2>
          <p className="mb-4 text-lg text-gray-600 md:text-xl">
            GastroWorld lets locals share their recipes of traditional cuisine
            from their country. We use a huge, gorgeous map as the main menu to
            access all of the recipes, placing a pin in the map for the location
            of origin of the recipe. By clicking on the pin, it will take you to
            a separate section with all of the info about the recipe.
          </p>
          <a
            href="https://devpost.com/software/gastroworld"
            className="text-lg font-bold flex pr-2"
          >
            More info
            <Image
              src="/arrow.svg"
              loading="lazy"
              width="13"
              height="13"
              alt="arrow"
              className="padding-b"
            />
          </a>
          <a
            href="https://github.com/scidroid/gastroworld"
            className="text-lg font-bold flex pr-2"
          >
            View github
            <Image
              src="/arrow.svg"
              loading="lazy"
              width="13"
              height="13"
              alt="arrow"
              className="padding-b"
            />
          </a>
        </article>
      </section>
    </section>
  );
};

export default Projects;
