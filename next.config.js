/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [WORDPRESS_SITE],
  },
};

module.exports = nextConfig;
