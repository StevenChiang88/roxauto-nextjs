/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

const nextConfig = {
  reactStrictMode: true,
  i18n,
  async redirects() {
    return [
      { source: "/Brands", destination: "/brands", permanent: true },
      { source: "/Products", destination: "/products", permanent: true },
      { source: "/Contact", destination: "/contact", permanent: true },
    ];
  },
};

module.exports = nextConfig;
