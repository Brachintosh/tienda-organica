/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true,
  images: {
    domains: ["unsplash.com/", "spoonacular.com", "/public"]
  }
}

module.exports = nextConfig
