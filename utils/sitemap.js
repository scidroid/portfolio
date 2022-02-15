const { configureSitemap } = require('@sergeymyssak/nextjs-sitemap');
const { readdirSync } = require('fs');
const { join } = require('path');

async function fetchDynamicPaths () {
  const paths = [
    ...readdirSync(join('content', 'en')),
    ...readdirSync(join('content', 'es'))
  ];

  return paths;
}

async function getDynamicPaths () {
  const paths = await fetchDynamicPaths();

  return paths.map(item => `/${item.substring(0, item.length - 3)}`);
}

const dirName = __dirname.substring(0, __dirname.lastIndexOf('/'));

getDynamicPaths().then(paths => {
  const Sitemap = configureSitemap({
    domains: [{ domain: 'scidroid.me', locales: ['en', 'es'] }],
    include: paths,
    excludeIndex: true,
    trailingSlash: true,
    targetDirectory: dirName + 'public',
    pagesDirectory: dirName + 'pages'
  });

  Sitemap.generateSitemap();
});
