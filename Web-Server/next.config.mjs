/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",

    webpack: (config) => ({
        ...config,
        watchOptions: {
            ...config.watchOptions,
            aggregateTimeout: 300,
            poll: 800,
        },
    }),
};

export default nextConfig;
