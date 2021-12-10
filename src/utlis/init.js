// 动态计算屏幕分辨率对应的font-size
document.addEventListener('DOMContentLoaded', () => {
  let fontSize = window.innerWidth / 10
  fontSize = fontSize > 50 ? 50 : fontSize
  const html = document.querySelector('html')
  html.style.fontSize = fontSize + 'px'
})

console.log('%c ', `background:url(https://cn.vuejs.org/images/logo.svg) no-repeat; font-size:140px;line-height: 50px`)
