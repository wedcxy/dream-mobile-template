<template>
  <van-cell-group inset>
    <van-cell title="开发者" is-link icon="friends-o" @click="getDeveloper" />
    <van-cell title="文档" is-link icon="records" @click="getDocument" />
  </van-cell-group>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    getDeveloper() {
      this.$dialog.alert({
        title: '开发者信息',
        message: '开发者：梦未央\n版本号：0.5(还在努力开发！)',
        showCancelButton: true,
        confirmButtonText: '点个赞',
        cancelButtonText: '不点赞',
        confirmButtonColor: '#409EFF',
        cancelButtonColor: '#F56C6C'
      })
        .then(() => {
          this.$toast({
            message: '谢谢点赞！',
            icon: 'thumb-circle-o'
          })
        })
        .catch(() => {
          this.$toast({
            message: '哭了☹',
            icon: require('../../assets/logo.png')
          })
        })
    },
    getDocument() {
      this.$toast({
        message: '正在开发，请耐心等待',
        icon: 'logistics'
      })
    }
  }
}
</script>

