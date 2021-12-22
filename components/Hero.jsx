import Image from "next/image";
import Link from "next/link";
import Button from "components/Button";

const Hero = () => {
  return (
    <section className="flex flex-col justify-center items-center sm:p-12 md:pl-32 md:pr-32 p-8">
      <Image
        src="/avatar.png"
        width={130}
        height={130}
        alt="avatar"
        className="rounded-full"
      />
      <h1 className="text-6xl max-w-3xl m-8 font-bold text-center">
        <span className="hero-gradient-heading">I develop products</span> that
        delight and transform comunities.
      </h1>
      <p className="text-center max-w-3xl mb-4 text-xl font-medium text-gray-600">
        Hi! I'm Juan, a 14 year old Colombian fullstack web developer and
        competitive programmer, developing award winning world class
        applications.
      </p>
      <section className="flex flex-wrap flex-row justify-between items-center">
        <Button href="/contact" TailwindStyles="mr-8">
          <p className="font-bold">Book a call</p>
        </Button>
        <Link href="/resume.pdf">
          <a className="text-lg font-bold">
            Get my CV
            <Image
              src="https://assets.website-files.com/5fef5619b640934b33c2385e/5ff019fc559a4200eda62273_Vector.svg"
              loading="lazy"
              width="24"
              height="13"
              alt="arrow"
            />
          </a>
        </Link>
      </section>
    </section>
  );
};

export default Hero;
