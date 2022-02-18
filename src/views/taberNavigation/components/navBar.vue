<template>
  <van-nav-bar
    v-if="this.$route.path != '/home'"
    :title="this.$route.meta.title"
    left-arrow
    @click-left="onClickLeft"
  />
</template>

<script>
export default {
  data() {
    return {
      active: 0
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    }
  }
}
</script>

<style>

</style>
