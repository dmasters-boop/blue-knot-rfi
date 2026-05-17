/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Slack CDN — team profile photos from ca.slack-edge.com
      {
        protocol: "https",
        hostname: "ca.slack-edge.com",
      },
      // Vidyard — demo video thumbnails
      {
        protocol: "https",
        hostname: "play.vidyard.com",
      },
      {
        protocol: "https",
        hostname: "*.vidyard.com",
      },
    ],
  },
};

export default nextConfig;
