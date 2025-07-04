/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
    images: {
            remotePatterns: [
                {
                    protocol: 'https',
                    hostname: 'media.istockphoto.com',
                },
                {
                    protocol: 'https',
                    hostname: 'kj1bcdn.b-cdn.net',
                },
            ],
        },
};



export default config;

