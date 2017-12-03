const webpack = require('webpack')
const path = require('path')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

const resolve = dir => path.resolve(__dirname, '..', dir)
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  devtool: isProd ? false : '#cheap-module-source-map',
  resolve: {
    alias: {
      '@': resolve('client')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: [
            'react',
            'stage-2',
            'env'
          ]
        }
      }
    ]
  },
  performance: {
    maxEntrypointSize: 300000,
    hints: isProd ? 'warning' : false
  },
  plugins: isProd
  ? [
      new webpack.optimize.UglifyJsPlugin({
        compress: { warnings: false }
      }),
      new webpack.optimize.ModuleConcatenationPlugin()
    ]
  : [
      new FriendlyErrorsPlugin()
    ]
}