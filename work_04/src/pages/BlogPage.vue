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
                <div class="article">
                    <!-- Элемент статьи с картинкой и текстом -->
                    <div class="article-img">
                        <img class="article-img" :src="articleList[0].image" alt="image 1">
                        <div class="article-img-text">
                            {{ articleList[0].imageText }}
                        </div>
                    </div>

                    <!-- Описание статьи -->
                    <div class="article-description">
                        <!-- Заголовок статьи -->
                        <p class="article-header">
                            <b>{{ articleList[0].description }}</b>
                        </p>

                        <!-- Нижняя часть статьи -->
                        <div class="article-bottom">
                            <p>{{ articleList[0].date }}</p>
                            <button class="article-button">
                                <img :src="arrowImage">
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Статья 2 -->
                <div class="article article-dark">
                    <div class="article-img">
                        <img class="article-img" src="@/assets/article2.jpg" alt="image 2">
                        <div class="article-img-text">
                            Living Design
                        </div>
                    </div>

                    <div class="article-description">
                        <p class="article-header">
                            <b>Low Cost Latest Invented <br>
                            Interior Designing <br>
                            Ideas.</b>
                        </p>

                        <div class="article-bottom">
                            <p>22 December, 2022</p>
                            <button class="article-button article-button-dark">
                                <img src="@/assets/arrowBlack.png">
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Статья 3-->
                <div class="article">
                    <div class="article-img">
                        <img class="article-img" src="@/assets/article3.jpg" alt="image 3">
                        <div class="article-img-text">
                            Interior Design
                        </div>
                    </div>

                    <div class="article-description">
                        <p class="article-header">
                            <b>Best For Any Office &<br>
                            Business Interior <br>
                            Solution</b>
                        </p>

                        <div class="article-bottom">
                            <p>25 December, 2022</p>
                            <button class="article-button">
                                <img src="@/assets/arrowBlack.png">
                            </button>
                        </div>
                    </div>
                </div>

                <!--  -->
                <!-- Вторая строка статей -->
                <!--  -->

                <!-- Статья 4-->
                <div class="article">
                    <!-- Элемент статьи с фоновой картинкой и текстом -->
                    <div class="article-img">
                        <img class="article-img" src="@/assets/article4.jpg" alt="image 4">
                        <div class="article-img-text">
                            Kitchen Design
                        </div>
                    </div>

                    <!-- Описание статьи -->
                    <div class="article-description">
                        <!-- Заголовок статьи -->
                        <p class="article-header">
                            <b>Let’s Get Solution For <br>
                            Building Construction <br>
                            Work</b>
                        </p>

                        <!-- Нижняя часть статьи -->
                        <div class="article-bottom">
                            <p>26 December, 2022</p>
                            <button class="article-button">
                                <img src="@/assets/arrowBlack.png">
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Статья 5 -->
                <div class="article">
                    <div class="article-img">
                        <img class="article-img" src="@/assets/article5.jpg" alt="image 5">
                        <div class="article-img-text">
                            Living Design
                        </div>
                    </div>

                    <div class="article-description">
                        <p class="article-header">
                            <b>Low Cost Latest Invented <br>
                            Interior Designing <br>
                            Ideas.</b>
                        </p>

                        <div class="article-bottom">
                            <p>22 December, 2022</p>
                            <button class="article-button">
                                <img src="@/assets/arrowBlack.png">
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Статья 6-->
                <div class="article">
                    <div class="article-img">
                        <img class="article-img" src="@/assets/article6.jpg" alt="image 6">
                        <div class="article-img-text">
                            Interior Design
                        </div>
                    </div>

                    <div class="article-description">
                        <p class="article-header">
                            <b>Best For Any Office &<br>
                            Business Interior <br>
                            Solution</b>
                        </p>

                        <div class="article-bottom">
                            <p>25 December, 2022</p>
                            <button class="article-button">
                                <img src="@/assets/arrowBlack.png">
                            </button>
                        </div>
                    </div>
                </div>
            </div> <!--</Галерея статей>-->

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
export default {
  name: 'BlogPage',
  data() {
    return {
        arrowImage: '@/assets/arrowBlack.png',
        articleList: [
            {
                image: '@/assets/article1.jpg',
                imageAlt: 'image 1',
                imageText: 'Kitchen Design',
                description: 'Let’s Get Solution For Building Construction Work',
                date: '26 December, 2022'
            }
        ]
    }
  }
}
</script>

<style lang="css" scoped>

</style>
