/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/kona_sales_app',
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
  // This is required for GitHub Pages
  assetPrefix: '/kona_sales_app/',
  trailingSlash: true,
}

module.exports = nextConfig/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ext.same-assets.com',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
