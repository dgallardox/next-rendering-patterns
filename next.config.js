/** @type {import('next').NextConfig} */

const WORDPRESS_SITE = process.env.WORDPRESS_SITE

const nextConfig = {
  async headers() {
    return [
      {
        source: '/posts',
        headers: [
          {
            key: 'Referrer-Policy',
            value: 'no-referrer',
          }
        ],
      },
    ]
  },
  reactStrictMode: true,
  images: {
    domains: [WORDPRESS_SITE],
  },
};

module.exports = nextConfig;
