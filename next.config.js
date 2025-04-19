/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/kona_sales_app' : '',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ext.same-assets.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/kona_sales_app/' : '',
  trailingSlash: true,
}

module.exports = nextConfig
