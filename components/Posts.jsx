import Link from "next/link";
import Image from "next/image";

const Posts = ({ posts }) => {
  return (
    <section className="p-6 bg-black flex flex-row flex-wrap justify-around">
      <div className="flex flex-col">
        <p className="mt-8 mb-8 hero-gradient-heading text-3xl font-bold">
          BLOG
        </p>
        <h2 className="text-white font-bold text-5xl text-center w-2/5 min-w-max">
          Lastest posts
        </h2>
      </div>
      <section>
        {posts.map((post, index) => (
          <article key={index} className="mt-12 mb-12">
            <span className="text-gray-400 md:text-lg">{post.frontMatter.date}</span>
            <h3 className="mt-2 mb-2 text-2xl md:text-3xl font-bold text-white">
              {post.frontMatter.title}
            </h3>
            <Link href={`/${post.slug}`}>
              <a
                onClick={() => splitbee.track("blog post visited")}
                className="mt-4 mb-4 text-lg md:text-xl font-bold text-white"
              >
                Read this article
                <Image
                  src="/arrow-w.svg"
                  loading="lazy"
                  width="24"
                  height="13"
                />
              </a>
            </Link>
          </article>
        ))}
      </section>
    </section>
  );
};

export default Posts;