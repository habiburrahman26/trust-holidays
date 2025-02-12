/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'sharetrip.net',
            port: '',
          },
        ],
      },
};

export default nextConfig;
