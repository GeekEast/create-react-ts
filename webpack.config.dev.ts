import merge from 'webpack-merge'
import { config } from './webpack.config.base'

const prodConfig = merge(config, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 9000
  }
})

export default prodConfig
