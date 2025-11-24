/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static export for current HTML
  trailingSlash: true,
  images: {
    unoptimized: true // No image optimization for static
  },
  eslint: {
    ignoreDuringBuilds: true // Skip ESLint for vanilla JS
  },
  typescript: {
    ignoreBuildErrors: true // Skip TS for static
  }
};

module.exports = nextConfig;
