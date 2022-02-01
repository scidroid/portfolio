import Image from "next/image";

const Link = ({ href, text }) => {
  return (
    <a href={href} className="text-lg font-bold flex pr-2">
      {text}
      <Image
        src="/arrow.svg"
        loading="lazy"
        width="13"
        height="13"
        alt="arrow"
        className="padding-b"
      />
    </a>
  );
};

const Project = ({ image, title, description, tryit, info, github }) => {
  return (
    <article className="m-6 max-w-xs">
      <Image
        src={image}
        width="320"
        height="180"
        alt="College Loans"
        loading="lazy"
      />
      <h2 className="mt-4 mb-4 font-bold text-2xl md:text-3xl">{title}</h2>
      <p className="mb-4 text-lg text-gray-600 md:text-xl">{description}</p>
      <Link href={tryit} text="Try it out" />
      <Link href={info} text="Learn More" />
      <Link href={github} text="View Github" />
    </article>
  );
};

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
        <Project
          image="/collegeloans.png"
          title="CollegeLoans"
          description="CollegeLoans is a platform that allows you to do college planning
          based on your SAT scores and annual income so that you can study
          without any unforeseen events. It tracks and predicts your debt
          based on your income and also recommends schools based on your SAT
          scores."
          tryit="https://collegeloan.us/"
          info="https://devpost.com/software/collegeloans/"
          github="https://github.com/pumasteam/collegeloans"
        />
        <Project
          image="/medisearch.png"
          title="MediSearch"
          description="an AI-assisted symptom and disease checker. With our various AI
          services, we allow the user to see if they have any dangerous
          diseases, to then guide them to a specific specialist that will help
          them further with their diagnosis. This reduces the unguided medical
          consultations that are very common and helps patients get more info
          about probable diseases they might suffer."
          tryit="https://medisearch.scidroid.co/"
          info="https://devpost.com/software/medisearch/"
          github="https://github.com/scidroid/medisearch"
        />
        <Project
          image="/kindlymap.png"
          title="KindlyMap"
          description="KindlyMap is the most generous map in the world. With just one
          click, you can help the most important causes for local communities
          and charities around the world. KindlyMap is a platform that lets
          you contribute financially to different charities and communities
          located in different parts of the world."
          tryit="https://map.scidroid.co/"
          info="https://devpost.com/software/kindlymap"
          github="https://github.com/scidroid/maphacks"
        />
      </section>
    </section>
  );
};

export default Projects;
