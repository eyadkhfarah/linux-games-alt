import type { NextConfig } from "next";
const { withContentlayer } = require('next-contentlayer2')

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {},

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "shared.akamai.steamstatic.com" },
      { protocol: "https", hostname: "images.contentstack.io" },
      { protocol: "https", hostname: "cdn2.unrealengine.com" },
      { protocol: "https", hostname: "gaming-cdn.com" },
      { protocol: "https", hostname: "wiki.leagueoflegends.com" },
    ]
  }
};

// Export the wrapped config (use a single export style)
export default withContentlayer(nextConfig)
