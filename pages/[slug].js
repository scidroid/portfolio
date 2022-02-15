import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Post from 'components/Post';

const Blog = props => {
  return <Post {...props} />;
};

export const getStaticPaths = async () => {
  const filesEn = fs.readdirSync(path.join('content', 'en'));
  const filesEs = fs.readdirSync(path.join('content', 'es'));

  const paths = [];

  filesEn.map(file =>
    paths.push({
      params: {
        slug: file.replace('.md', '')
      },
      locale: 'en'
    })
  );
  filesEs.map(file =>
    paths.push({
      params: {
        slug: file.replace('.md', '')
      },
      locale: 'es'
    })
  );
  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = async ({ locale, params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join('content', locale, slug + '.md'),
    'utf-8'
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontMatter,
      slug,
      content
    }
  };
};

export default Blog;
