const merge = require('webpack-merge')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimizer: [
      new UglifyJSPlugin({
        uglifyOptions: { compress: { drop_console: true } }
      })
    ]
  },
})
