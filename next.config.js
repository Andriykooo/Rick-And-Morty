const path = require('path')

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['rickandmortyapi.com'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}
