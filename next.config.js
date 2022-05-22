const withPWA = require('next-pwa')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    register: true,
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.csv$/,
      loader: 'csv-loader',
      options: {
        dynamicTyping: true,
        header: true,
        skipEmptyLines: true,
      },
    })

    return config
  },
}

module.exports = withPWA(nextConfig)
