const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')
const webpack = require('webpack')

module.exports = webpackMerge(baseConfig, {
  devServer: {
    contentBase: "./dist",
    hot: true,
    inline: true,
    open: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})