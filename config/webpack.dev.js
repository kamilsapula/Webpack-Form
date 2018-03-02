const config = require('./webpack.config');
const webpackMerge = require('webpack-merge');
const DefinePlugin = require('webpack/lib/DefinePlugin');

module.exports = webpackMerge(config, {
  cache: true,
  devtool: '#cheap-eval-source-map',

  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /(node_modules)/
      }
    ]
  },

  plugins: [
    new DefinePlugin({
      ENV: JSON.stringify('development')
    })
  ]

});
