const webpack = require('webpack');
const config = require('./webpack.config');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');

module.exports = webpackMerge(config, {
  devtool: '#source-map',

  module: {
    loaders: [
        {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader?minimize=true!sass-loader'
            }),
            exclude: /(node_modules)/
        }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),

    new DefinePlugin({
      ENV: JSON.stringify('production')
    }),

    new ExtractTextPlugin('css/[name].[chunkhash].css')
  ]
});
