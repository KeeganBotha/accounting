import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Your existing redirects
  async redirects() {
    return [
      {
        source: "/",
        destination: "/login",
        permanent: true,
      },
    ];
  },
  // Add this to remove the Next.js icon
  devIndicators: {
    buildActivity: false,
    buildActivityPosition: "bottom-right",
  },
};

export default nextConfig;
