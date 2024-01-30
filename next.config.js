/** @type {import('next').NextConfig} */

const WORDPRESS_SITE = process.env.WORDPRESS_SITE

const nextConfig = {
  async redirects() {
    return [
      {
        source: '/posts',
        destination: '/posts/test',
        permanent: true,
      },
    ]
  },
  images: {
    domains: [WORDPRESS_SITE],
  },
};

module.exports = nextConfig;
