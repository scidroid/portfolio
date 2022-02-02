import { MDXRemote } from "next-mdx-remote";
import SyntaxHighlighter from "react-syntax-highlighter";
import { useEffect, useState } from "react";
import mediumZoom from "medium-zoom";
import { Giscus } from "@giscus/react";
import { NextSeo } from "next-seo";

const Post = ({
  frontMatter: { title, date, description, banner, tags },
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
  }, [slug]);
  return (
    <>
      <NextSeo
        config={{
          title: `${title} | Juan Almanza`,
          description: description,
          canonical: `https://scidroid.me/${slug}`,
          openGraph: {
            title: `${title} | Juan Almanza`,
            description: description,
            url: `https://scidroid.me/${slug}`,
            images: [
              {
                url: banner,
                alt: title,
              },
            ],
            type: "article",
            article: {
              publishedTime: date,
              modifiedTime: date,
              section: "Blog",
              tags: tags,
            },
          },
        }}
      />
      <div className="mt-8 xs:mt-20">
        <section className="flex flex-row flex-wrap justify-center items-center">
          <article className="flex w-5/6 sm:w-4/6 lg:w-3/6 flex-col justify-start m-4">
            <h1 className="mb-4 text-4xl sm:text-6xl font-bold">{title}</h1>
            <p className="text-gray-600 text-2xl">{`${date} - ${views} views`}</p>
            <article className="blog-container mt-12 mb-4">
              <MDXRemote {...mdxSource} components={{ SyntaxHighlighter }} />
            </article>
            <Giscus
              repo="scidroid/portfolio"
              repoId="MDEwOlJlcG9zaXRvcnkzNzY3MDExNjM="
              category="General"
              categoryId="DIC_kwDOFnQA684CAZ5E"
              mapping="pathname"
              reactionsEnabled="1"
              emitMetadata="1"
              theme="light"
            />
          </article>
        </section>
      </div>
    </>
  );
};

export default Post;
