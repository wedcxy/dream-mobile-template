const name = 'Dream-mobile-template' // 网页标题
module.exports = {
  // 配置sass公共颜色和公共函数
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "./src/styles/init";`
      }
    }
  },
  devServer: {
    open: true, // 设置是否自动打开浏览器
    hotOnly: false // 是否开启热更新
  },
  configureWebpack: {
    name: name
  }
}
