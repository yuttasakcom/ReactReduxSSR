const webpack = require('webpack')
const path = require('path')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const resolve = dir => path.resolve(__dirname, '..', dir)
const isProd = process.env.NODE_ENV === 'production'
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CSSExtract = new ExtractTextPlugin('styles.css')
const CopyStatics = new CopyWebpackPlugin([
  {
    from: resolve('statics'),
    to: 'statics',
    ignore: ['.*']
  }
])

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
            'env',
            { plugins: ['transform-class-properties']}
          ]
        }
      },
      { 
        test: /\.s?css$/,
        use: CSSExtract.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        })
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
      new webpack.optimize.ModuleConcatenationPlugin(),
      CSSExtract,
      CopyStatics
    ]
  : [
      new FriendlyErrorsPlugin(),
      CSSExtract,
      CopyStatics
    ]
}