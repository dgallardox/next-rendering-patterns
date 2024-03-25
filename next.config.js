/** @type {import('next').NextConfig} */

const removeHTTPS = (url) => url.replace(/^https:\/\//, "");
const imageSource = removeHTTPS(process.env.NEXT_PUBLIC_WORDPRESS_URL);

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [imageSource],
  },
};

module.exports = nextConfig;
