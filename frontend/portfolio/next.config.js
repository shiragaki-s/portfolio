/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      //小さな値にすると、ポーリングの頻度が上がるので、重くなるっぽい。
      //poll: 800,
      poll: 5000,
      aggregateTimeout: 300,
    };
    return config;
  },
};

module.exports = nextConfig;
