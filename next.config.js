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

module.exports = {
  rewrites,
  images: {
    domains: ["assets.website-files.com"],
  },
};
