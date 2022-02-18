<template>
  <section class="content">
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="smile-o">我的</van-tabbar-item>
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
    active: function(newName) {
      switch (newName) {
        case 0:
          this.$router.push('home')
          break
        case 1:
          this.$router.push('person')
          break
      }
    }
  },
  created() {
    switch (this.$route.path) {
      case '/home':
        this.active = 0
        break
      case '/person':
        this.active = 1
        break
    }
  }
}
</script>
