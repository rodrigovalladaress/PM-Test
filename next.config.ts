import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      // Only import SVGs with inline.svg as React components,
      // so SVGs without the inline extension can be imported
      // as an asset image
      // https://stackoverflow.com/questions/79153360/configure-turbopack-to-load-svgs-according-to-resource-query
      "*.inline.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
};

export default nextConfig;
