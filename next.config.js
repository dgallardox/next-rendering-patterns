/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [NEXT_PUBLIC_WORDPRESS_SITE],
  },
};

module.exports = nextConfig;
