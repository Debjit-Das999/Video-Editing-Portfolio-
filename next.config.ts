import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow YouTube thumbnail images used by the lite embed facade.
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "i.ytimg.com" },
      { protocol: "https", hostname: "img.youtube.com" },
    ],
  },
};

export default nextConfig;
