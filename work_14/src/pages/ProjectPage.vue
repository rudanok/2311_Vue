<template>
    <main>
        <div class="wide-banner">
            <!-- Широкий баннер -->
        </div>

        <!-- Секция Let's get solution -->
        <section class="section w1200">
            <!-- Заголовок секции -->
            <div class="section-header news-row">
                <div>
                    <h3 class="h3-text text-left">
                        Let’s Get Solution for Building <br>
                        Construction Work
                    </h3>

                    <!-- Колонка новости и блок тэгов на одной строке -->
                    <div class="w800">
                        <!-- Картинка Новости -->
                        <div class="news-image-big">
                            <img src="@/assets/img1.png" width="799">
                        </div>

                        <!-- Часть с датой и кнопкой -->
                        <div class="article-bottom">
                            <p>25 December, 2022</p>
                            <p>Decor / Artchitecture</p>
                        </div>
                    </div>
                </div>

                <!-- Блок тэгов -->
                <div class="news-tags">
                    <div class="tag-header">
                        <h1>Tags</h1>
                    </div>

                    <div class="tags">
                        <div class="tag tag-active">Kitchen</div>
                        <div class="tag">Bedroom</div>
                        <div class="tag">Building</div>
                        <div class="tag">Architecture</div>
                        <div class="tag">Kitchen Planning</div>
                        <div class="tag">Bedroom</div>
                    </div>

                </div>

            </div>

            <!-- Продолжение статьи -->
            <div class="w800">
                <!-- Картинка Новости -->
                <p class="p-text">
                    Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.
                </p>

                <p class="p-text">
                    Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.
                </p>

                <!-- Блок цитаты -->
                <div class="news-citation">
                    <img src="@/assets/quotes.png">
                    <p>
                        The details are not the details. <br>
                        They make the design.
                    </p>
                </div>

                <h3 class="h3-text text-left">
                    Design sprints are great
                </h3>

                <p class="p-text">
                    Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
                </p>

                <!-- Список -->
                <ol>
                    <li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li>
                    <li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li>
                    <li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li>
                </ol>

                <!-- Картинка Новости 2 -->
                <div class="news-image-small">
                    <img src="@/assets/img2.png">
                </div>

                <p class="p-text">
                    Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
                </p>

            </div>

        </section>

    </main>
</template>

<script>
export default {
  name: 'ProjectPage'
}
</script>

<style lang="css" scoped>
.wide-banner {
    background-image: url('@/assets/wide-banner2.jpg')
}
</style>
