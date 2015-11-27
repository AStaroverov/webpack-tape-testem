var path = require('path');

module.exports = {
  entry: {
    test: [path.join(__dirname, 'webpack.test.bootstrap.js')]
  },

  output: {
    path: path.join(__dirname, './tests'),
    filename: '[name].js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },

  resolve: {
    modulesDirectories: ['src', 'node_modules']
  },

  node: {
    fs: 'empty'
  }
};
