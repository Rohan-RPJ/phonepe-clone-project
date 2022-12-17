/** @type {import('next').NextConfig} */
const withPlugins = require("next-compose-plugins");

const nextConfig = {
  reactStrictMode: true,
};

const withVideos = require("next-videos");

// module.exports = withPlugins([withVideos], nextConfig);
module.exports = withVideos(nextConfig);
