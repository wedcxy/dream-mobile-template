import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/taberNavigation/index'),
    children: [
      {
        path: 'person',
        meta: { title: '我的' },
        component: () => import('../views/person/index')
      },
      {
        path: 'home',
        component: () => import('../views/home/index')
      }
    ]
  }
]

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
