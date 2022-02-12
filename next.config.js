const withPWA = require("next-pwa");

const rewrites = async () => [
  {
    destination: "https://cdn.splitbee.io/sb.js",
    source: "/sb.js",
  },
  {
    destination: "https://hive.splitbee.io/:slug",
    source: "/sb-api/:slug",
  },
];

const redirects = async () => {
  return [
    {
      source: "/resume",
      destination: "/resume.pdf",
      permanent: true,
    },
    {
      source: "/python",
      destination: "/learning-to-code-in-python",
      permanent: true,
    },
    {
      source: "/git",
      destination: "/introduction-to-git",
      permanent: true,
    },
    {
      source: "/deta",
      destination: "/crud-with-deta",
      permanent: true,
    },
    {
      source: "/silicon",
      destination: "/our-computers-runs-on-sand",
      permanent: true,
    },
    {
      source: "/analytics",
      destination: "/privacy-for-web-developers",
      permanent: true,
    },
  ];
};

module.exports = withPWA({
  rewrites,
  redirects,
  images: {
    domains: ["s2.loli.net"],
  },
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
  },
  pwa: {
    dest: "public",
  },
});
