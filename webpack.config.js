const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');



// define paths
const nodeModulesPath = path.resolve(__dirname, './node_modules');
const distPath = path.resolve(__dirname, './dist');
const mainAppPath = path.resolve(__dirname, 'src', 'index');
const componentsPath = path.resolve(__dirname, 'src', 'components');

/**
 * webpack configuration
 */
module.exports = {
  // webpack-dev-server configuration
  devServer: {

  },

  // targeting for only web, no nodejs environment
  //target  : 'web',

  // using inline-source-map for having useful outputs in browser console
  devtool: 'inline-source-map',

  // entry for application
  entry: {

    // using the name 'bundle.js'
    'bundle': [

      // babel polyfill
      'babel-polyfill',

      // entry point for the app
      mainAppPath,
    ],
  },

  // output file
  output: {
    // will output 'bundle.js' as we used 'bundle' for entry
    filename: '[name].js',

    // distribution path is not related to source path of index.html
    // this path will produce the webpack output if we run the build command
    path: distPath,
  },

  // module loaders
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: nodeModulesPath,
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?modules&localIdentName=[name]__[hash:base64:5]'
        ],
      },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },
      { test: /\.svg$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml' },
    ],
  },

  // used webpack plugins
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Weather Channel',
      inject: false,
      template: require('html-webpack-template'),
      appMountId: 'root',
      links: [
        'https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css'
      ]
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],

  // resolving paths and extensions
  resolve : {
    extensions: ['.js', '.css'],
    alias: {
      Components: componentsPath,
    },
  },
};
