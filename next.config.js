/** @type {import('next').NextConfig} */
const webpack = require("webpack");
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizeCss: true, // enabling this will enable SSR for Tailwind
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      })
    );
    return config;
  },
  env: {
    // NEXTAUTH_URI: "mongodb://localhost:27017/Knowsecret",
    NEXTAUTH_URI: "mongodb+srv://isKaushal:sZq01mepIiEjSMHj@cluster0.s1z795a.mongodb.net/Knowsecret",
    NEXTAUTH_SECRET: "nextjsauthantication",
  },
  async rewrites() {
    return [
      {
        source: "/:handle",
        destination: "/:handle/profile/home", // The :path parameter isn't used here so will be automatically passed in the query
      },
    ];
  },
};

module.exports = nextConfig;
