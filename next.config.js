/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  async rewrites(){
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:3000/api/:path*",
      }
    ];
  },
};
