const webpackMerge = require('webpack-merge')
const webpackBase = require('./webpack.base')
const path = require('path')

function resolve(dir) {
  return path.resolve(__dirname, '..', dir)
}

const config = {
  entry: resolve('client/client.js'),
  output: {
    path: resolve('public'),
    filename: 'bundle.js'
  },
  devtool: 'cheap-module-eval-source-map'
}

module.exports = webpackMerge(webpackBase, config)