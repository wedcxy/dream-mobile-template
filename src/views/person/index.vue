<template>
  <section>
    <section class="header">
      <div class="header_left header_item">
        <span class="name">梦未央</span>
      </div>
      <div class="header_right header_item">
        <img src="../../assets/header.jpg" alt="头像">
      </div>
    </section>
    <section class="body">
      <list />
    </section>
  </section>
</template>

<script>
import list from '@/views/person/list'
export default {
  components: {
    list
  }
}
</script>

<style lang="scss" scoped>
.header{
  width: 92%;
  height: rem(130);
  display: flex;
  flex-direction: row;
  margin: rem(15) auto;
  border-radius: rem(20);
  background: -webkit-linear-gradient(to right, #36d1dc, #5b86e5);
  background: linear-gradient(to right, #36d1dc, #5b86e5);
  .header_item{
    width: 50%;
    height: 100%;
  }
  .header_left{
    text-align: center;
    line-height: rem(130);
    color: #fff;
    .name{
      font-size: rem(25);
    }
  }
  .header_right{
    display: flex;
    align-items: center;
    justify-content: center;
    img{
      width: rem(65);
      height: rem(65);
      border-radius: 50%;
      border: rem(4) solid #fff;
    }
  }
}
</style>
