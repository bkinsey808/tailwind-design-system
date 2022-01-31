/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  presets: ["next/babel"],
  plugins: [["@babel/plugin-proposal-nullish-coalescing-operator"]],
};

module.exports = nextConfig;
