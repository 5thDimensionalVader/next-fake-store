/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["via.placeholder.com", "fakestoreapi.com"],
  }
}

module.exports = nextConfig
