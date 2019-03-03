const path = require('path');
const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'bundle.js',
    publicPath: './dist',
    path: path.join(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        include: path.join(__dirname, 'src'),
        exclude: path.resolve(__dirname, 'node_modules'),
        use: [
          { loader: 'babel-loader' },
        ]
      },
      {
        test: /\.jpg$/,
        include: path.join(__dirname, 'src'),
        exclude: path.resolve(__dirname, 'node_modules'),
        use: [
          { loader: 'file-loader',
            options: {
              name: '[path][name]-[hash:8].[ext]'
            },
         },
        ],
      },
      {
        test: /\.svg$/,
        include: path.join(__dirname, 'src'),
        exclude: path.resolve(__dirname, 'node_modules'),
        use: [
          { loader: 'raw-loader'},
        ],
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]--[hash:base64:5]',
            },
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [
                'src/styles',
              ],
            },
          },
          {
            loader: "sass-resources-loader",
            options: {
              resources: require(path.join(process.cwd(), "./src/styles/utils.js")),
            }
          }
        ],
      },
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    mainFiles: ['index', 'main'],
    modules: [
      'src',
      'node_modules',
    ],
  },

  plugins: [
    
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: './index.html'
    }),

    new webpack.ProvidePlugin({
      PropTypes: 'prop-types',
      React: 'react',
      ReactDOM: 'react-dom',
    }),

    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],

  devtool: 'eval',

  devServer: {
    historyApiFallback: true,
    hot: true,
    open: true,
    publicPath: '/',
    inline: true,
    overlay: true,
    port: 9000,
    stats: {
      modules: false,
      colors: true,
      env: false,
      publicPath: true,
      timings: true,
      version: true,
      errors: true,
    },
  },

};
