// Excuse me, the code is a shit
import Hero from 'components/Hero';
import Logos from 'components/Logos';
import Services from 'components/Services';
import Posts from 'components/Posts';
import Projects from 'components/Projects';
import Awards from 'components/Awards';
import Stack from 'components/Stack';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import generateRSS from 'utils/rss';
import { useTranslation } from 'utils/locales';

const Index = ({ posts }) => {
  const {
    hero,
    blog,
    awards,
    logos,
    projects,
    services,
    stack
  } = useTranslation();

  return (
    <>
      <Hero locales={hero} />
      <Logos locales={logos} />
      <Services locales={services} />
      <Projects locales={projects} />
      <Posts posts={posts} locales={blog} />
      <Stack locales={stack} />
      <Awards locales={awards} />
    </>
  );
};

export const getStaticProps = async ({ locale }) => {
  const files = fs.readdirSync(path.join('content', locale));

  const posts = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(
      path.join('content', locale, filename),
      'utf-8'
    );
    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      frontMatter,
      slug: filename.split('.')[0]
    };
  });

  posts.sort((a, b) =>
    new Date(a.frontMatter.date) < new Date(b.frontMatter.date) ? 1 : -1
  );

  generateRSS(posts);

  return {
    props: {
      posts
    }
  };
};

export default Index;
