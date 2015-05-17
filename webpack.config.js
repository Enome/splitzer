var R = require('ramda');
var webpack = require('webpack');
var package_json = require('./package.json');
var dependencies = package_json.dependencies;

var js_exclude = R.map(function (key) {
  return new RegExp('node_modules/' + key);
})(R.keys(dependencies));

var ignore = new webpack.IgnorePlugin(/^clipboard$/);

module.exports = {

  watch: true,

  entry: './app/index.js',
  output: { filename: 'index.js' },

  module: {

    loaders: [
      { test: /\.js$/, exclude: js_exclude, loader: 'babel-loader' },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader!cssnext-loader' },
    ],

  },

  plugins: [ignore],

};
