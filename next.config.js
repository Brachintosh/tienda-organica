/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true,
  images: {
    domains: ["unsplash.com/","techcrunch.com", "/public"]
  }
}

module.exports = nextConfig
