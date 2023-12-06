<template>
    <main>
        <div class="wide-banner">
            <!-- Широкий баннер -->
        </div>

        <section class="section w1200">

            <h3 class="h3-text">
                {{ product.name }}
            </h3>

            <div class="w800">
                <p class="p-text text-left">{{ formattedPrice }}</p>
                <p class="p-text text-left">{{ availabilityStatus }}</p>
                <p class="p-text text-left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.
                </p>
                <p class="p-text text-left">
                    In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.
                </p>
            </div>

        </section>

    </main>
</template>

<script>
export default {
  name: 'ProductDetailsPage',
  data () {
    return {
      product: {
        name: 'Minimal Look Bedrooms',
        price: 99.99,
        available: true // Изменить на false для проверки статуса "Out of stock"
      }
    }
  },
  computed: {
    formattedPrice () {
      return `$${this.product.price.toFixed(2)}` // Форматирование цены с знаком валюты
    },
    availabilityStatus () {
      return this.product.available ? 'Available' : 'Out of stock' // Проверка статуса доступности
    }
  }
}
</script>

<style lang="css" scoped>
.wide-banner {
    background-image: url('@/assets/wide-banner3.jpg')
}
</style>
