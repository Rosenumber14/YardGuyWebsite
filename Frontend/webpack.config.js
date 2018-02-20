/* eslint-disable import/unambiguous */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: './src/index.js',

  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },

  plugins: [
    HtmlWebpackPluginConfig,
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
      '__BUILD_DATE__': JSON.stringify(new Date().toLocaleString())
    })
  ],

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [path.resolve(__dirname, 'src')],
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              plugins: ['transform-object-rest-spread'],
              presets: ['es2015', 'react']
            }
          },
          { loader: 'eslint-loader' }
        ]
      },
      {
        test: /\.(css|less)$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'less-loader', options: { strictMath: true } }
        ]
      }
    ]
  }
};
