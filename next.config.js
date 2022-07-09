const withPlugins = require("next-compose-plugins");


const localeSubpaths = {
    tr: "tr",
    en: "en",
};


const config = {
    reactStrictMode: false,
    webpack5: true,
    webpack: (config) => {
        config.resolve.fallback = { fs: false };

        return config;
    },
    devServer: {
        proxy: {
            "/api": "http://localhost:3000",
        },
    },
    eslint: {
        // Warning: Dangerously allow production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
    
    publicRuntimeConfig: {
        localeSubpaths,
    },
    images: {
        domains: [
           
            "media.discordapp.net",
            "cdn.discordapp.com",
        ],
    },

};

module.exports = withPlugins([], config);