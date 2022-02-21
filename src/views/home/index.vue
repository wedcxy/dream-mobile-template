<template>
  <section class="document">
    <img src="../../assets/logo.png" alt="Logo">
    <p class="name">Dream-modile-template</p>
    <p class="describe">
      基于<a href="https://cn.vuejs.org/index.html">vue.js</a>
      开发的响应式移动端模板，UI组件采用<a href="https://vant-contrib.gitee.io/vant/v2/">Vant weapp</a>
    </p>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .document{
        width: 100%;
        img{
            width: rem(130);
            height: rem(130);
            margin: rem(20) auto;
            display: block;
        }
        .name{
            font-size: rem(20);
            text-align: center;
            font-weight: bold;
            color: #303133;
        }
        .describe{
          text-align: center;
          font-size: rem(16);
          margin-top: rem(10);
          color:$color-text-secondary;
          a{
            color: #409EFF;
          }
        }
    }
</style>
