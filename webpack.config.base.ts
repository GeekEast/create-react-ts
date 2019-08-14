// https://webpack.docschina.org/configuration/
// https://webpack.js.org/configuration/configuration-languages/

import { resolve, join } from 'path'
import { Configuration } from 'webpack'
import * as HTMLWebpackPlugin from 'html-webpack-plugin'
import * as MiniCssExtractPlugin from 'mini-css-extract-plugin'

const config: Configuration = {
  mode: 'production',
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              useCache: true,
              cacheDirectory: join(__dirname, './../', '.cache-loader'),
              babelOptions: {
                babelrc: false,
                plugins: ['react-hot-loader/babel']
              }
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        // loader run from bottom to top
        use: [
          MiniCssExtractPlugin.loader, // commonJS -> Native JS (same as style-loader)
          {
            loader: 'cache-loader',
            options: {
              cacheDirectory: join(__dirname, './../', '.cache-loader')
            }
          },
          'css-loader', // css -> commonJS
          'sass-loader' // sass -> css
        ],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'js/bundle.js',
    path: resolve(__dirname, 'build')
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './public/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[id].css'
    })
  ]
}

export { config }
