/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/home',
        statusCode: 308,
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
