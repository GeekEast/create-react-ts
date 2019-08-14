import * as merge from 'webpack-merge'
import { config } from './webpack.config.base'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

const prodConfig = merge(config, {
  mode: 'production',
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      reportFilename: 'analyse/bundle_size.html'
    })
  ]
})

export default prodConfig
