import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import SyntaxHighlighter from "react-syntax-highlighter";
import { useEffect, useState } from "react";
import mediumZoom from "medium-zoom";
import Head from "next/head";

const Post = ({
  frontMatter: { title, date, description, banner },
  mdxSource,
  slug,
}) => {
  const [views, setViews] = useState("Loading");
  useEffect(() => {
    mediumZoom("img");
    fetch("/api/view/" + slug)
      .then((res) => res.json())
      .then((res) => {
        setViews(res.views);
      });
  }, []);
  return (
    <>
      <Head>
        <title>{title + " | SciDroid"}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title + " | SciDroid"} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={banner} />
        <meta property="og:url" content={"https://scidroid.co/" + slug} />
      </Head>
      <div className="mt-8 xs:mt-20">
        <section className="flex flex-row flex-wrap justify-center items-center">
          <article className="flex w-5/6 sm:w-4/6 lg:w-3/6 flex-col justify-start m-4">
            <h1 className="mb-4 text-4xl sm:text-6xl font-bold">{title}</h1>
            <p className="text-gray-600 text-2xl">{`${date} - ${views} views`}</p>
            <article className="blog-container mt-12">
              <MDXRemote {...mdxSource} components={{ SyntaxHighlighter }} />
            </article>
            <script
              src="https://giscus.app/client.js"
              type="text/javascript"
              data-repo="scidroid/portfolio"
              data-repo-id="MDEwOlJlcG9zaXRvcnkzNzY3MDExNjM="
              data-category="General"
              data-category-id="DIC_kwDOFnQA684CAZ5E"
              data-mapping="pathname"
              data-reactions-enabled="1"
              data-emit-metadata="1"
              data-theme="light"
              data-lang="en"
              crossorigin="anonymous"
              async
            ></script>
          </article>
        </section>
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("content"));

  const paths = files.map((file) => ({
    params: {
      slug: file.replace(".mdx", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("content", slug + ".mdx"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  };
};

export default Post;
