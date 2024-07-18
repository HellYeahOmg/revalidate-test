/** @type {import('next').NextConfig} */
const nextConfig = {
    logging: {
        debug: true,
        fetches: {
            fullUrl: true,
        },
    }
};

export default nextConfig;
