let path = require('path');

let baseConfig = {
  entry: {
    main: './build/jekyll/js/main.js',
    post: './build/jekyll/js/post.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve('./build/final/js')
  }
};

module.exports = baseConfig;
