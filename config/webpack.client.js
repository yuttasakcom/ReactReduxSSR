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
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),
  ]
}

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin()
  )
}

module.exports = webpackMerge(webpackBase, config)