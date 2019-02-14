const path = require('path');
const { sync: glob } = require('glob');

const context = path.join(__dirname, 'src');
const pkg = require('./package.json');
const mode = 'development';

const entry = [
  path.join(context, `${pkg.name}.js`)
].concat(
  mode !== 'production' ? glob('**/*.html', {
    cwd: path.join(__dirname, 'test/fixtures'),
    absolute: true
  }) : []
);

module.exports = {
  context,
  mode,
  entry,
  //output,
  output: {
    filename: '[name].js',
    path: __dirname + '/dist'
  },
  module: {
    rules: [{
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }, {
      test: /\.html$/,
      use: [{
        loader: 'file-loader',
        options: {
          emitFile: true,
          name: '[name].html'
        }
      }, {
        loader: 'extract-loader'
      }, {
        loader: 'html-loader',
        options: {
          attrs: [
            'script:src'
          ]
        }
      }]
    }]
  },
  resolve: {
    alias: {
      remoteclick: path.resolve(__dirname, pkg.main)
    }
  },
  devServer: {
    index: 'index.html',
    open: true,
    //hot: true,
    inline: true,
    port: 8080,
    historyApiFallback: true,
    //contentBase: path.join(process.cwd(), 'src'),
    contentBase: './test/fixtures',
    stats: {
      colors: true
    }
  }
};
