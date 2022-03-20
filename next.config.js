/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    loader: "default",
    domains: ["https://bobskitchenbackend-ojs88.ondigitalocean.app"],
  },
  nextConfig,
};
