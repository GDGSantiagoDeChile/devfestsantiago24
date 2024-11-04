/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  basePath: '/devfestsantiago24',
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  trailingSlash: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/codigo-conducta': { page: '/codigo-conducta' },
      '/voluntarios': { page: '/voluntarios' },
      '/speakers':{ page: '/speakers'},
      '/sessions':{ page: '/sessions'},
      '/location':{ page: '/location'},
      // Añade otras páginas aquí según tu estructura de rutas
    };
  },
};

module.exports = nextConfig;
