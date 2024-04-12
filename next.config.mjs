/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.pexels.com'], 
      },
      experimental:{
        serverActions: true,
      }

};

export default nextConfig;