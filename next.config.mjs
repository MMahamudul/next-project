// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['picsum.photos'], // allow https://picsum.photos/...
    // or use remotePatterns if you prefer
  },
}

export default nextConfig


