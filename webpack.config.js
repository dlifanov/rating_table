var path = require('path');
 
module.exports = {
  entry: './rates.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
