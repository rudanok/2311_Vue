<template>
  <div id="app">
    <header-block/>
    <router-view/>
  </div>
</template>

<script>
import HeaderBlock from './blocks/HeaderBlock.vue'

export default {
  name: 'App',
  components: {
    HeaderBlock
  }
}
</script>

<style lang="css">

</style>
