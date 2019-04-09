const HtmlWebpackPlugin = require('html-webpack-plugin');

var path = require('path');
 
module.exports = {
  entry: {
    rates_table: './src/table/js/rates.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      { test: /\.(html)$/,
        include: path.join(__dirname, 'src/table/html'),
        use: {
          loader: 'html-loader',
          options: {
            interpolate: true
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: 'Table top crypto',
      template: './src/index.html',
      filename: 'index.html'
    })
  ]
}