import Head from "next/head";
import Hero from "components/Hero";
import Logos from "components/Logos";
import Services from "components/Services";
import Posts from "components/Posts";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const Index = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Home | SciDroid</title>
        <meta
          name="description"
          content="Juan Almanza A.K.A SciDroid is a 14 year old fullstack web developer, competitive programmer (2nd place at Colombian Computer Olympiad) and serial hackathon winner (winner in 9 of 12 hackathons), specialized in React, Svelte, Python and javascript in general. If you need someone to develop websites and web applications do not hesitate to contact Juan and you will never regret it."
        />
        <meta property="og:title" content="Home | SciDroid" />
        <meta
          property="og:description"
          content="Juan Almanza A.K.A SciDroid is a 14 year old fullstack web developer, competitive programmer (2nd place at Colombian Computer Olympiad) and serial hackathon winner (winner in 9 of 12 hackathons), specialized in React, Svelte, Python and javascript in general. If you need someone to develop websites and web applications do not hesitate to contact Juan and you will never regret it."
        />
        <meta property="og:image" content="https://scidroid.co/avatar.png" />
        <meta property="og:url" content="https://scidroid.co" />
      </Head>
      <Hero />
      <Logos />
      <Services />
      <Posts posts={posts} />
    </>
  );
};

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("content"));

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("content", filename),
      "utf-8"
    );
    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  });

  return {
    props: {
      posts,
    },
  };
};

export default Index;
