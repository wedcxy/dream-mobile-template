<template>
  <section class="content">
    <navBar />
    <router-view />
    <taber />
  </section>
</template>

<script>
import navBar from '@/views/taberNavigation/components/navBar'
import taber from '@/views/taberNavigation/components/taber'
export default {
  components: {
    navBar,
    taber
  }
}
</script>

