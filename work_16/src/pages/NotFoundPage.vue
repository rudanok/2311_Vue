<template>
    <main>
        <!-- Широкий баннер -->
        <div class="wide-banner">
            <div class="wide-banner-text">
                <h3 class="h3-text ">{{ PageTitle }}</h3>
                <p class="p-text no-vertical-margin">Interno Site</p>
            </div>
        </div>

        <!-- Секция Latest post -->
        <section class="section w1200">
            <!-- Заголовок секции -->
            <div class="section-header">
                <h3 class="h3-text text-left">{{ PageText }}</h3>
            </div>
        </section>
        <FooterBlock/>
    </main>
</template>

<script>
import FooterBlock from '@/blocks/FooterBlock.vue'

export default {
  name: 'NotFoundPage',
  components: {
    FooterBlock
  },
  data () {
    return {
      PageTitle: "We're sorry...",
      PageText: 'This page is not found...'
    }
  }
}
</script>

<style lang="css" scoped>
    .wide-banner {
        background-image: url('@/assets/wide-banner1.jpg')
    }
</style>
