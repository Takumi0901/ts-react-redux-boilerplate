const tsLoader = {
  test: /\.tsx?$/,
  use: [
    {
      loader: 'awesome-typescript-loader',
      options: {
        useCache: true,
        babelrc: false,
        exclude: /node_modules/,
        plugins: ['react-hot-loader/babel']
      }
    }
  ]
}

const cssLoader = {
  test: /\.css$/,
  loaders: ['style-loader', 'css-loader?modules']
}

module.exports = {
  tsLoader,
  cssLoader
}
