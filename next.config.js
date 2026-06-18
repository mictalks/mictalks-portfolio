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
  },
}

module.exports = nextConfig