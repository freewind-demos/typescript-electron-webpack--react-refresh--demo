import {Configuration} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'

const rendererProcessConfig: Configuration = {
  mode: 'development',
  target: 'electron-renderer',
  entry: path.resolve(__dirname, '../src/renderer/index.tsx'),
  output: {
    path: path.resolve(__dirname, '../dist/renderer'),
    filename: 'index.bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        {loader: 'style-loader'},
        {loader: 'css-loader'},
      ],
    }, {
      test: /\.tsx?$/,
      use: [
        {
          loader: 'babel-loader', options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ],
            plugins: [
              // should comment this line, otherwise we will have error when modifying
              // TypeError
              // module.hot.invalidate is not a function
              //
              // require.resolve('react-refresh/babel')
            ]
          }
        },
        {
          loader: 'ts-loader', options: {
            transpileOnly: true
          }
        }
      ]
    }],
  },
  plugins: [
    new HtmlWebpackPlugin() as any,
    new ReactRefreshWebpackPlugin(),
  ],
};

export default rendererProcessConfig;
