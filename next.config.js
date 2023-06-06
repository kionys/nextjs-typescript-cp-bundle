/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  swcMinify: false, // it should be false by default
  pageExtensions: ["page.tsx", "page.ts"],
  compiler: {
    emotion: true,
  },

  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://localhost:3000/api/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
