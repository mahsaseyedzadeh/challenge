/** @type {import('next').NextConfig} */
module.exports = {
  compress: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
    config.optimization.minimize = true;
    return config
  },
  env: {
    app_url: process.env.NEXT_APP_URL,
  },
  images: {
    domains: [
      'localhost:3000',
      'localhost',

    ],
  },


};
