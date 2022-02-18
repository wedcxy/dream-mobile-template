<template>
  <section class="document">
    <img src="../../assets/logo.png" alt="Logo">
    <p class="name">Dream-modile-template</p>
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
    }
</style>
