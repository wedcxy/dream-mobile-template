module.exports = {
  // 配置sass公共颜色和公共函数
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "./src/styles/init";`
      }
    }
  },
  // 部署应用包时的基本 URL
  publicPath: '/checkH5'
}
