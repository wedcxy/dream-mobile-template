// 按需导入vant组件

import Vue from 'vue'
import {
  Dialog,
  Cell,
  CellGroup,
  Tabbar,
  TabbarItem,
  NavBar,
  Toast
} from 'vant'

Vue.use(Cell)
  .use(CellGroup)
  .use(Tabbar)
  .use(TabbarItem)
  .use(NavBar)
  .use(Dialog)
  .use(Toast)

