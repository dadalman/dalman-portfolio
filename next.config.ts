import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The local exFAT volume writes macOS AppleDouble (._*) sidecar files that
  // poison Next's dev image-optimization cache (it serves the 4KB sidecar
  // instead of the real image). Skip the optimizer in dev only; production
  // (Vercel/Linux) keeps full image optimization.
  images: { unoptimized: process.env.NODE_ENV !== "production" },
};

export default nextConfig;
