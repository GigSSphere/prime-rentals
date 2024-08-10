/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ["vaave.s3.amazonaws.com"],
    remotePatterns: [{ protocol: "https", hostname: "w.wallhaven.cc" }],
  },
};

export default nextConfig;
