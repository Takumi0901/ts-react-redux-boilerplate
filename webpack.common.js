const webpack = require('webpack')
const path = require('path')
const Loaders = require('./webpack/loaders')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: ['babel-polyfill', './src/index.tsx'],
  output: {
    path: path.join(__dirname, 'public/assets'),
    publicPath: '/assets',
    filename: '[name].bundle.js'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: 'vendor',
          chunks: 'initial',
          enforce: true
        }
      }
    }
  },
  module: {
    rules: [
      Loaders.tsLoader,
      Loaders.cssLoader,
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      "src": path.resolve(__dirname, './src')
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      hash: true,
      filename: path.join(__dirname, './public/index.html'),
      template: './src/index.template.ejs',
      inject: 'body'
    })
  ]
}
