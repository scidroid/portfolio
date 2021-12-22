import { NextSeo } from "next-seo";
import Hero from "components/Hero";
import Logos from "components/Logos";

const Index = () => {
  return (
    <>
      <NextSeo
        title="Home | SciDroid"
        description="Juan Almanza A.K.A SciDroid is a 14 year old fullstack web developer, competitive programmer (2nd place at Colombian Computer Olympiad) and serial hackathon winner (winner in 9 of 12 hackathons), specialized in React, Svelte, Python and javascript in general. If you need someone to develop websites and web applications do not hesitate to contact Juan and you will never regret it."
        canonical="https://scidroid.co"
        openGraph={{
          url: "https://scidroid.co",
          title: "Home | SciDroid",
          description:
            "Juan Almanza A.K.A SciDroid is a 14 year old fullstack web developer, competitive programmer (2nd place at Colombian Computer Olympiad) and serial hackathon winner (winner in 9 of 12 hackathons), specialized in React, Svelte, Python and javascript in general. If you need someone to develop websites and web applications do not hesitate to contact Juan and you will never regret it.",
          images: [
            {
              url: "/avatar.png",
              alt: "Juan Almanza A.K.A SciDroid",
              type: "image/png",
            },
          ],
        }}
      />
      <Hero />
      <Logos />
    </>
  );
};

export default Index;
