const path = require('path');
const helpers = require('./helpers');
const webpack = require('webpack');
const clearWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: {
      app: './src/js/app.js'
    },
  
    output: {
      filename: '[name].[chunkhash].js',
      path:  helpers.absolutePath('public/js')
    },
  
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel-loader?presets=es2015'],
                exclude: /(node_modules)/
            }
        ]
    },
  
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            inject: 'body'
        }),

        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            "Waves": "node-waves"
        }),
      
        new clearWebpackPlugin(['public/js'], {
            root: helpers.absolutePath(''),
            verbose: true
        })
    ],
  
    devServer: {
      port: 3000,
      host: 'localhost',
  
      historyApiFallback: true,
      watchOptions: {
        aggregateTimeout: 300
      },
  
      stats: 'errors-only'
    }
  
};