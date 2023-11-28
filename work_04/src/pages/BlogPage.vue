<template>
    <main>
        <!-- Широкий баннер -->
        <div class="wide-banner" id="wide-banner-bg1">
            <div class="wide-banner-text">
                <h3 class="h3-text ">Articles & News</h3>
                <p class="p-text no-vertical-margin">Home / Blog</p>
            </div>
        </div>

        <!-- Секция Latest post -->
        <section class="section w1200">
            <!-- Заголовок секции -->
            <div class="section-header">
                <h3 class="h3-text text-left">Latest Post</h3>
            </div>

            <!-- Картинка и текст на одной строке -->
            <div class="img-and-text w1200">
                <!-- Картинка поста -->
                <div class="post-image">
                    <img src="@/assets/latest-post-1.jpg">
                </div>

                <!-- Текст поста -->
                <div class="post-text text-left">
                    <p class="h4-text">
                        Low Cost Latest Invented Interior Designing Ideas
                    </p>
                    <p class="p-text">
                        Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.
                        <br><br>
                        Lorem Ipsum is not simply random text. It has roots in a piece of classica.
                    </p>

                    <!-- Часть с датой и кнопкой -->
                    <div class="article-bottom">
                        <p>25 December, 2022</p>
                        <button class="article-button">
                            <img src="@/assets/arrowBlack.png">
                        </button>
                    </div>
                </div>

            </div>
        </section>

        <!-- Секция Articles & News -->
        <section class="section w1200">
            <!-- Заголовок секции -->
            <div class="section-header">
                <h3 class="h3-text text-left">Articles & News</h3>
            </div>

            <!-- Галерея статей -->

            <div class="articles-gallery">
                <!-- Статья 1-->
                <!-- Для выделенной статьи в div ниже добавляется класс "article-dark" (через пробел после "article") -->
                <div class="article" v-for="article in articleList" :key="article.id">
                    <!-- Элемент статьи с картинкой и текстом -->
                    <div class="article-img">
                        <img class="article-img" :src="article.image" :alt="article.imageAlt">
                        <div class="article-img-text">
                            {{ article.imageText }}
                        </div>
                    </div>

                    <!-- Описание статьи -->
                    <div class="article-description">
                        <!-- Заголовок статьи -->
                        <p class="article-header">
                            <b>{{ article.description }}</b>
                        </p>

                        <!-- Нижняя часть статьи -->
                        <div class="article-bottom">
                            <p>{{ article.date }}</p>
                            <button class="article-button">
                                <img :src="arrow">
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Кнопки перехода на другие страницы статей: 1, 2, 3 .. -->
            <div class="articles-pagination-buttons">
                <button class="article-button ">
                    01
                </button>
                <button class="article-button article-button-dark border-brown">
                    02
                </button>
                <button class="article-button article-button-dark border-brown">
                    03
                </button>
                <button class="article-button article-button-dark border-brown">
                    <img src="@/assets/arrowBlack.png">
                </button>
            </div>

        </section>
    </main>
</template>

<script>
import arrowImage from '@/assets/arrowBlack.png';
import articleImage1 from '@/assets/article1.jpg';
import articleImage2 from '@/assets/article2.jpg';
import articleImage3 from '@/assets/article3.jpg';
import articleImage4 from '@/assets/article4.jpg';
import articleImage5 from '@/assets/article5.jpg';
import articleImage6 from '@/assets/article6.jpg';
export default {
  name: 'BlogPage',
  data() {
    return {
        arrow: arrowImage,
        articleList: [
            {
                image: articleImage1,
                imageAlt: 'image 1',
                imageText: 'Kitchen Design',
                description: 'Let’s Get Solution For Building Construction Work',
                date: '26 December, 2022'
            },
            {
                image: articleImage2,
                imageAlt: 'image 2',
                imageText: 'Living Design',
                description: 'Low Cost Latest Invented Interior Designing Ideas.',
                date: '22 December, 2022'
            },
            {
                image: articleImage3,
                imageAlt: 'image 3',
                imageText: 'Interior Design',
                description: 'Best For Any Office & Business Interior Solution',
                date: '25 December, 2022'
            },
            {
                image: articleImage4,
                imageAlt: 'image 4',
                imageText: 'Kitchen Design',
                description: 'Let’s Get Solution For Building Construction Work',
                date: '26 December, 2022'
            },
            {
                image: articleImage5,
                imageAlt: 'image 5',
                imageText: 'Living Design',
                description: 'Low Cost Latest Invented Interior Designing Ideas.',
                date: '22 December, 2022'
            },
            {
                image: articleImage6,
                imageAlt: 'image 6',
                imageText: 'Interior Design',
                description: 'Best For Any Office & Business Interior Solution',
                date: '25 December, 2022'
            }
        ]
    }
  }
}
</script>

<style lang="css" scoped>

</style>
