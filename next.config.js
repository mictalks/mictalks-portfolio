/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'media.graphassets.com',
      'wiztoonz.com',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'us-west-2.graphassets.com',
      },
    ],
  },
};

module.exports = nextConfig;