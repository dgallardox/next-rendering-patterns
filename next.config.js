/** @type {import('next').NextConfig} */

const IMAGE_SOURCE = process.env.IMAGE_SOURCE || null

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [process.env.IMAGE_SOURCE],
  },
};

module.exports = nextConfig;
