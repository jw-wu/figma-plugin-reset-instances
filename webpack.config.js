// Additional modules installed:
// html-webpack-plugin
// inline-chunk-html-plugin
// css-loader
// style-loader


const path = require('path');
const webpack = require('webpack');

// Additional modules for packing UI.
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InlineChunkHtmlPlugin = require('inline-chunk-html-plugin');

const uiCSS = "./src/library/ui/main.css";
const custom = "./src/custom";

module.exports = (env, argv) => ({
mode: argv.mode === 'production' ? 'production' : 'development',

devtool: argv.mode === 'production' ? false : 'inline-source-map',

  entry: {
    
    // This is the entry point for our plugin code.
    'code': './src/library/figma/main.ts',

    // Add UI here.
    'ignore/custom/ui': [ `${custom}/modules/custom-ui.ts`, uiCSS ]

  },
  
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },

  resolve: {
    extensions: ['.ts', '.js'],
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },

  plugins: [

    // Add HtmlWebpackPlugin and InlineChunkHtmlPlugin for each UI.

    // https://github.com/jantimon/html-webpack-plugin
    // https://stackoverflow.com/questions/64825338/how-to-include-multiple-pages-in-webpack-output
    new HtmlWebpackPlugin({
        template: `${custom}/modules/ui-starter.html`,
        inject: 'body',
        chunks: ['ignore/custom/ui'],
        filename: 'custom-ui.html'
    }),

    // https://www.npmjs.com/package/inline-chunk-html-plugin
    // https://stackoverflow.com/questions/39555511/inline-javascript-and-css-with-webpack
    new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/ignore\/custom\/ui/])

  ]
});