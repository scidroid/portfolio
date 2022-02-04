// Excuse me, the code is a shit
import Hero from "components/Hero";
import Logos from "components/Logos";
import Services from "components/Services";
import Posts from "components/Posts";
import Projects from "components/Projects";
import Awards from "components/Awards";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import generateRSS from "utils/rss";
import { useRouter } from "next/router";
import {
  hero_en,
  blog_en,
  awards_en,
  logos_en,
  projects_en,
  services_en,
  stack_en,
} from "locales/en";
import {
  hero,
  blog,
  awards,
  logos,
  projects,
  services,
  stack,
} from "locales/es";
import Stack from "components/Stack";

const Index = ({ posts }) => {
  const router = useRouter();
  const selectLocale = (en, es) => {
    return router.locale == "en" ? en : es;
  };

  return (
    <>
      <Hero locales={selectLocale(hero_en, hero)} />
      <Logos locales={selectLocale(logos_en, logos)} />
      <Services locales={selectLocale(services_en, services)} />
      <Projects locales={selectLocale(projects_en, projects)} />
      <Posts posts={posts} locales={selectLocale(blog_en, blog)} />
      <Stack locales={selectLocale(stack_en, stack)} />
      <Awards locales={selectLocale(awards_en, awards)} />
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

  posts.sort((a, b) =>
    new Date(a.frontMatter.date) < new Date(b.frontMatter.date) ? 1 : -1
  );

  generateRSS(posts);

  return {
    props: {
      posts,
    },
  };
};

export default Index;
