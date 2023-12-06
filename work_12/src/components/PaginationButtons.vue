<template>
    <div>
        <!-- Кнопки перехода на другие страницы статей: 1, 2, 3 .. -->
        <div class="articles-pagination-buttons">
            <button class="article-button ">01</button>
            <button class="article-button article-button-dark border-brown">02</button>
            <button class="article-button article-button-dark border-brown">03</button>
            <button class="article-button article-button-dark border-brown"><img :src="arrow"></button>
        </div>
    </div>
</template>

<script>
import arrowImage from '@/assets/arrowBlack.png'
export default {
  name: 'PaginationButtons',
  data () {
    return {
      arrow: arrowImage
    }
  }
}
</script>

<style lang="css" scoped>

</style>
