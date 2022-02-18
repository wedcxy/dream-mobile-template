// 动态计算屏幕分辨率对应的font-size
document.addEventListener('DOMContentLoaded', () => {
  let fontSize = window.innerWidth / 10
  fontSize = fontSize > 50 ? 50 : fontSize
  const html = document.querySelector('html')
  html.style.fontSize = fontSize + 'px'
})

console.log('%c 项目：Dream-vue-template\n%c 邮箱：3148264655@qq.com\n%c 作者：梦未央', 'color:#409EFF', '', 'color:orange;font-weight:bold;')

