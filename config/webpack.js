require('dotenv').config({path: `${process.cwd()}/.env`});

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');
const fs = require('fs');
const { HotModuleReplacementPlugin } = require('webpack');

const env = process.env.NODE_ENV;
const dir = path.resolve(__dirname, '..');

const options = {
  mode: env,
  entry: ['@babel/polyfill', `${dir}/src/index.js`],
  output: {
    path: `${dir}/dist`,
    publicPath: '/',
    filename: 'js/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': [
              MiniCssExtractPlugin.loader,
              'css-loader',
              'sass-loader'
            ],
            'sass': [
              MiniCssExtractPlugin.loader,
              'css-loader',
              'sass-loader?indentedSyntax'
            ]
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpeg|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]',
          esModule: false
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]',
        },
      },
    ],
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false,
          },
        },
      }),
      new OptimizeCssAssetsPlugin({
        cssProcessorPluginOptions: {
          preset: ['default', {discardComments: {removeAll: true}}],
        },
      }),
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        `${dir}/dist`,
      ],
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: env === 'development' ? 'css/[name].css' : 'css/[name].[hash:8].css',
    }),
    new HtmlWebpackPlugin({
      title: process.env.VUE_APP_TITLE === '' ? 'educasia.id' : process.env.VUE_APP_TITLE,
      favicon: fs.existsSync('src/assets/favicon/favicon_client.png') === true ? 'src/assets/favicon/favicon_client.png' : 'src/assets/favicon/favicon.png',
      inject: true,
      template: `${dir}/index.html`,
      minify: {
        html5: true,
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
        minifyURLs: false,
        removeComments: true,
      },
    }),
    new LiveReloadPlugin({
      port: 0,
      appendScriptTag: env === 'development' ? true : false,
    }),
    new webpack.DefinePlugin({
      'process.env.VUE_APP_API_URL': JSON.stringify(process.env.VUE_APP_API_URL),
      'process.env.VUE_APP_IMAGE_URL': JSON.stringify(process.env.VUE_APP_IMAGE_URL),
      'process.env.VUE_APP_NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.VUE_APP_TITLE': JSON.stringify(process.env.VUE_APP_TITLE),
      'process.env.VUE_APP_LOGO_URL': JSON.stringify(process.env.VUE_APP_LOGO_URL),
      'process.env.VUE_APP_FAVICON_URL': JSON.stringify(process.env.VUE_APP_FAVICON_URL),
    }),
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, '../src')
    }
  }
};

module.exports = options;