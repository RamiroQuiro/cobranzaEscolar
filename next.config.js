/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains:["firebasestorage.googleapis.com","lh3.googleusercontent.com","drive.google.com"],},
 
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
