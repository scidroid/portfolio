const { configureSitemap } = require("@sergeymyssak/nextjs-sitemap");
const { readdirSync } = require("fs");
const { join } = require("path");

async function fetchDynamicPaths() {
  return readdirSync(join("content"));
}

async function getDynamicPaths() {
  const paths = await fetchDynamicPaths();

  return paths.map((item) => `/${item.substring(0, item.length - 3)}`);
}

const dir_name = __dirname.substring(0, __dirname.lastIndexOf("/"));

getDynamicPaths().then((paths) => {
  const Sitemap = configureSitemap({
    domains: [{ domain: "scidroid.me", locales: ["en", "es"] }],
    include: paths,
    excludeIndex: true,
    trailingSlash: true,
    targetDirectory: dir_name + "public",
    pagesDirectory: dir_name + "pages",
  });

  Sitemap.generateSitemap();
});
