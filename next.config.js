/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // DeluluJar's legal pages now live on delulujar.com. These paths are
      // still referenced by the mobile app's paywall and by the app store
      // listings, so they have to keep resolving rather than 404.
      {
        source: "/delulu-jar/privacy",
        destination: "https://delulujar.com/privacy",
        permanent: true,
      },
      {
        source: "/delulu-jar/terms",
        destination: "https://delulujar.com/terms",
        permanent: true,
      },
    ];
  },

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
