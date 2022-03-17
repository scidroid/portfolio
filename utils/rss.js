import { Feed } from 'feed';
import { writeFileSync } from 'fs';

const generateRSS = articles => {
  const baseURL = 'https://scidroid.co';
  const author = {
    name: 'Juan Almanza',
    email: 'scidroid@scidroid.co',
    link: 'https://twitter.com/scidroid'
  };

  const feed = new Feed({
    title: 'Articles by Juan Almanza',
    description: "Cool things I've learned about programming",
    id: baseURL,
    link: baseURL,
    language: 'en',
    feedLinks: {
      rss2: `${baseURL}/feed.rss`
    },
    author
  });

  articles.forEach(article => {
    const {
      mdxSource,
      frontMatter: { title, date, description, tags },
      slug
    } = article;
    const url = `${baseURL}/${slug}`;
    feed.addItem({
      title,
      tags,
      id: url,
      link: url,
      description,
      author: [author],
      date: new Date(date),
      content: mdxSource
    });
  });

  writeFileSync('public/rss.xml', feed.rss2());
};

export default generateRSS;
