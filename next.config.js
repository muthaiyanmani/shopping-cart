/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.zylker.com',
        port: ''
      },
    ],
  },
}

module.exports = nextConfig
