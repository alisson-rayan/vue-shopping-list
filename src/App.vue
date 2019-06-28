<template>
  <div id="app">
    <product-list-header />
    <router-view/>
  </div>
</template>

<script>
import ProductListHeader from '@/containers/Header.vue'

export default {
  components: { ProductListHeader }
}
</script>

<style lang="scss">
#app {
  height:100vh;
  width:100vw;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
