// webpack.common.js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [{
        loader: "style-loader"
      },{
        loader: "css-loader"
      }
    ]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template :'./src/index.html',
      filename : "index.html"
    }),
  ],
};
