const webpack = require('webpack')
const path = require('path')

function resolve(dir) {
  return path.resolve(__dirname, '..', dir)
}

module.exports = {
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
  }
}