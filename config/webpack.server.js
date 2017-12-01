const path = require('path')
const webpackMerge = require('webpack-merge')
const webpackBase = require('./webpack.base')
const webpackNodeExternals = require('webpack-node-externals')

function resolve(dir) {
  return path.resolve(__dirname, '..', dir)
}

const config = {
  target: 'node',
  entry: resolve('server/server.js'),
  output: {
    path: resolve('build'),
    filename: 'bundle.js'
  },
  externals: [webpackNodeExternals()]
}

module.exports = webpackMerge(webpackBase, config)