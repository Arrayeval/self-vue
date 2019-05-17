let webpackConfig = {
  "development": require('./webpack.dev.config')
}
module.exports = env => webpackConfig[env.NODE_ENV]
