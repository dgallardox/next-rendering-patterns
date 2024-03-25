/** @type {import('next').NextConfig} */

const imageSource = process.env.NEXT_PUBLIC_WORDPRESS_URL 

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [process.env.imageSource],
  },
};

module.exports = nextConfig;
