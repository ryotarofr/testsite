/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["idwitrlwanewneoypjki.supabase.co"],
  },
};

module.exports = nextConfig;
