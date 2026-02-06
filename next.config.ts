import type { NextConfig } from "next";
const { withContentlayer } = require('next-contentlayer2')

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {},
};

// Export the wrapped config (use a single export style)
export default withContentlayer(nextConfig)
