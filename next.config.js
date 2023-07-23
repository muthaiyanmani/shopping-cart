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
      {
        protocol: 'https',
        hostname: 'tailwindui.com',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'www.zohoapis.com',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'pickbazarlaravel.s3.ap-southeast-1.amazonaws.com',
        port: ''
      }
    ],
  },
}

module.exports = nextConfig
