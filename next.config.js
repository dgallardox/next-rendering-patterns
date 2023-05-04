/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [process.env.PUBLIC_IMAGES],
  },
};

module.exports = nextConfig;
