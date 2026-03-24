/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.supabase.co',
      },
    ],
  },
  // Turbopack is enabled by default in Next.js 16, but if we need custom config:
  // turbopack: { ... },
};

export default nextConfig;
