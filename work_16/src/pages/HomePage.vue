<template>
    <main>
        <!-- Баннер с текстом -->
        <div class="banner w1200">
            <div class="banner-text">
                <h2>Let Your Home Be Unique</h2>
                <p>
                    There are many variations of the passages of
                    lorem Ipsum fromavailable, majority.
                </p>

                <button class="banner-button">
                    Get Started
                    <img src="@/assets/arrowBrown.png" width="15px" height="13px">
                </button>
            </div>
        </div>

        <!-- Секция Follow our projects -->
        <section class="section w1200">
            <!-- Заголовок секции -->
            <div class="section-header">
                <h3 class="h3-text">Follow Our Projects</h3>
                <p class="p-text">
                    It is a long established fact that a reader will be distracted by the of readable <br>
                    content of page lookings at its layouts points.
                </p>
            </div>

            <!-- Галерея проектов -->
            <div class="projects-gallery">
                <!-- Проект 1 -->
                <div class="project round-top-right">
                    <!-- Картинка проекта -->
                    <img src="@/assets/project1.jpg">

                    <!-- Описание проекта -->
                    <div class="project-description">
                        <div class="project-text">
                            <p><b>Modern Kitchan</b></p>
                            <p>Decor / Artchitecture</p>
                        </div>

                        <button class="project-button">
                            <img src="@/assets/arrowBlack.png">
                        </button>
                    </div>
                </div>

                <!-- Проект 2 -->
                <div class="project round-top-left">
                    <img src="@/assets/project2.jpg">

                    <div class="project-description">
                        <div class="project-text">
                            <p><b>Modern Kitchan</b></p>
                            <p>Decor / Artchitecture</p>
                        </div>
                        <button class="project-button">
                            <img src="@/assets/arrowBlack.png">
                        </button>
                    </div>
                </div>

                <!-- Проект 3 -->
                <div class="project round-bottom-right">
                    <img src="@/assets/project3.jpg">

                    <div class="project-description">
                        <div class="project-text">
                            <p><b>Modern Kitchan</b></p>
                            <p>Decor / Artchitecture</p>
                        </div>
                        <button class="project-button">
                            <img src="@/assets/arrowBlack.png">
                        </button>
                    </div>
                </div>

                <!-- Проект 4 -->
                <div class="project round-bottom-left">
                    <img src="@/assets/project4.jpg">

                    <div class="project-description">
                        <div class="project-text">
                            <p><b>Modern Kitchan</b></p>
                            <p>Decor / Artchitecture</p>
                        </div>
                        <button class="project-button">
                            <img src="@/assets/arrowBlack.png">
                        </button>
                    </div>
                </div>
            </div>

        </section>

        <!-- Секция статистика -->
        <section class="section-stats">
            <!-- Внутренний блок статистики -->
            <div class="stats">
                <!-- Элемент статистики -->
                <div class="stat">
                    <span class="stat-header">12</span>  <br>
                    <span class="stat-text">Years Of Experience</span>
                </div>

                <div class="stat stat-border-left">
                    <span class="stat-header">85</span> <br>
                    <span class="stat-text">Success Project</span>
                </div>

                <div class="stat stat-border-left">
                    <span class="stat-header">15</span> <br>
                    <span class="stat-text">Active Project</span>
                </div>

                <div class="stat stat-border-left">
                    <span class="stat-header">95</span> <br>
                    <span class="stat-text">Happy Customers</span>
                </div>
            </div>
        </section>

        <!-- Секция Articles & News -->
        <section class="section w1200">
            <!-- Заголовок секции -->
            <div class="section-header">
                <h3 class="h3-text">Articles & News</h3>
                <p class="p-text">
                    It is a long established fact that a reader will be distracted by the of readable content <br>
                    of a page when lookings at its layouts the points of using.
                </p>
            </div>

            <!-- Галерея статей -->
            <div class="articles-gallery">
                <!-- Статья 1-->
                <div class="article">
                    <!-- Элемент статьи с фоновой картинкой и текстом -->
                    <div class="article-img">
                        <img class="article-img" src="@/assets/article1.jpg" alt="image 1">
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

            </div> <!--</Галерея статей>-->
        </section>
        <FooterBlock/>
    </main>
</template>

<script>

import FooterBlock from '@/blocks/FooterBlock.vue'

export default {
  name: 'HomePage',
  components: {
    FooterBlock
  }
}
</script>

<style lang="css" scoped>
.banner {
    background-image: url('@/assets/Banner.jpg')
}
</style>
