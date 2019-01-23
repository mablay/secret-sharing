module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/secret-sharing/'
    : '/',
  pwa: {
    name: 'Secret Sharing',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    themeColor: '#202020'
  }
}
