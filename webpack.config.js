const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  output: {
    path: path.join(__dirname, '/dist'), // the bundle output path
    publicPath: '/',
    filename: 'main.js', // the name of the bundle
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html', // to import index.html file inside index.js
    }),
  ],
  devServer: {
    port: 3000, //port
    static: {
      directory: path.join(__dirname, 'build'),
    },
  },
  resolve: {
    enforceExtension: false,
    extensions: ['.ts', '.js', '.jsx', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // .js and .jsx files
        exclude: /node_modules/, // excluding the node_modules folder
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(sa|sc|c)ss$/, // styles files
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|ico)$/, // to import images and fonts
        loader: 'url-loader',
        options: { limit: false },
      },
    ],
  },
};
