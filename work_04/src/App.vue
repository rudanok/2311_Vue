<template>
  <div id="app">
    <HeaderBlock></HeaderBlock>
    <!-- <HomePage></HomePage> -->
    <BlogPage></BlogPage>
    <FooterBlock></FooterBlock>
  </div>
</template>

<script>
import HeaderBlock from './blocks/HeaderBlock.vue'
// import HomePage from './pages/HomePage.vue'
import BlogPage from './pages/BlogPage.vue'
import FooterBlock from './blocks/FooterBlock.vue'

export default {
  name: 'App',
  components: {
    HeaderBlock,
    // HomePage,
    BlogPage,
    FooterBlock
  }
}
</script>

<style lang="css">
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
