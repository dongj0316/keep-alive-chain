const path = require('path')

module.exports = {
  publicPath: './',
  pages: {
    index: {
      entry: 'examples/main.js'
    }
  },
  css: {
    extract: false
  },
  productionSourceMap: false,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', path.resolve('examples'))

      config.module
      .rule('js')
      .include.add(/keep-alive-chain/).end()
      .include.add(/examples/).end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        // 修改它的选项...
        return options
      })
  }
}