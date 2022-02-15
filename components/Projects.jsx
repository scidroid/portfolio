import Image from 'next/image';

const Link = ({ href, text }) => {
  return (
    <a href={href} className='text-lg font-bold flex pr-2'>
      {text}
      <Image
        src='/arrow.svg'
        loading='lazy'
        width='13'
        height='13'
        alt='arrow'
        className='padding-b'
      />
    </a>
  );
};

const Projects = ({ locales }) => {
  const Project = ({ image, title, description, tryit, info, github }) => {
    return (
      <article className='mt-2 mb-2 sm:m-6 max-w-xs'>
        <Image
          src={image}
          width='320'
          height='180'
          alt='College Loans'
          loading='lazy'
        />
        <h2 className='mt-4 mb-4 font-bold text-2xl md:text-3xl'>{title}</h2>
        <p className='mb-4 text-lg text-gray-600 md:text-xl'>{description}</p>
        <Link href={tryit} text={locales.try} />
        <Link href={info} text={locales.learn} />
        <Link href={github} text={locales.github} />
      </article>
    );
  };

  return (
    <section className='flex flex-col justify-center items-center m-4 md:m-12'>
      <h2 className='mr-6 ml-6 mt-6 hero-gradient-heading text-2xl md:text-4xl font-bold'>
        {locales.title}
      </h2>
      <p className='mr-8 ml-8 text-4xl sm:text-5xl font-bold text-center'>
        {locales.subtitle}
      </p>
      <section className='m-8 flex flex-wrap flex-row items-center justify-around'>
        {locales.projects.map((project, index) => (
          <Project
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            tryit={project.tryit}
            info={project.info}
            github={project.github}
          />
        ))}
      </section>
    </section>
  );
};

export default Projects;
