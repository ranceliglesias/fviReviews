const webpack = require('webpack')

module.exports = {
  externals: {
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
  entry: [
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'react-hot!babel'
    }]
  },
  output: {
    path: './public',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './public',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
}
