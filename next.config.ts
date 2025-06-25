import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com",
      "res.cloudinary.com",
    ],
  },
  // Add webpack configuration to handle Leaflet properly
  webpack: (config) => {
    return config;
  },
};

export default nextConfig;
