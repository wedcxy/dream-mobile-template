<template>
  <section class="content">
    <router-view />

    <!-- 底部导航条 -->
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/index">首页</van-tabbar-item>
      <van-tabbar-item icon="search">标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
  </section>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    }
  },
  watch: {
    // 监听路由变化，控制taber
    '$route.path': (newVal, oldVal) => {
      switch (newVal) {
        case '/index':
          this.active = 0
          break

        default:
          break
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
