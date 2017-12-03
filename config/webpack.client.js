const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const webpackBase = require('./webpack.base')
const path = require('path')

const resolve = dir => path.resolve(__dirname, '..', dir)

const config = {
  entry: resolve('client/client.js'),
  output: {
    path: resolve('public'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    })
  ]
}

module.exports = webpackMerge(webpackBase, config)