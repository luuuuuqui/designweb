module.exports = {
  devServer: {
    allowedHosts: 'all',
    client: {
      webSocketURL: {
        protocol: 'wss',
        hostname: '0.0.0.0',
        port: 8080,
        pathname: '/ws',
      },
    },
  },
}
