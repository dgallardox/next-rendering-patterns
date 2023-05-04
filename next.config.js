/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [process.env.IMAGE_SOURCE],
  },
};

module.exports = nextConfig;
