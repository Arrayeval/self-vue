
'use strict'
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
function resolve (dir) {
  return path.join(__dirname, './', dir)
}

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': resolve('src'),
      '~': resolve('src')
    }
  },
  context: resolve('src'),
  entry: './index.js',
  output: {
    filename: '[name].js',
    path: resolve('dist'),
    // chunkFileName: '[name].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      // minify: {
      //   // 压缩 HTML 文件
      //   removeComments: true, // 移除 HTML 中的注释
      //   collapseWhitespace: true, // 删除空白符与换行符
      //   minifyCSS: true // 压缩内联 css
      // }
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 9000,
    hot: true, // 热重载
    overlay: true, // 如果代码出错，会在浏览器页面弹出“浮动层”。类似于 vue-cli 等脚手架
  }
}