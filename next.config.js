/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "/:path*",
        has: [
          {
            type: "host",
            value: "delulu.anyfikra.com",
          },
        ],
      },
      {
        source: "/:path*",
        destination: "/:path*",
        has: [
          {
            type: "host",
            value: "ducky-bank.anyfikra.com",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
