import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Sites' local worker does not provide the production image bindings.
  // The portfolio images are already web-sized, so serve them directly.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
