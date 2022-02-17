import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 初始化css
import '@/styles/init.scss'

// 动态计算font-size
import './utlis/init.js'
// vant-ui按需导入
import './utlis/Vant/index'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
