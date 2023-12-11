<template>
    <main>
        <div class="wide-banner">
            <!-- Широкий баннер -->
            <div class="wide-banner-text">
                <h3 class="h3-text ">Our Project</h3>
                <p class="p-text no-vertical-margin">Home / Project</p>
            </div>
        </div>

        <section class="section w1200">

           <!-- Меню проектов -->
           <div class="projects-headers">
                <div class="project-header" v-for="tag in tagsFromStore" :key="tag.id" :class="{ 'project-header-brown': tag === selectedTag }" @click="filterProjects(tag)"><a href="#">{{ tag }}</a></div>
            </div>

            <!-- Блок с двумя колонками проектов -->
            <div class="projects-row w1200">

                <!-- Левая колонка -->
                <div class="projects-col-1">

                    <!-- Бок проекта -->
                    <div class="project-block" v-for="(project, index) in projectsFromStore1" :key="index">
                        <!-- Изображение проекта -->
                        <div class="project-img">
                            <img :src="project.img">
                            <!-- Звездочка в правом верхнем углу картинки -->
                            <img v-if="project.select === 1" :src="star" class="project-star">
                        </div>
                        <!-- Описание проекта -->
                        <div class="project-description description-wide">
                            <div class="project-text">
                                <p><b>{{ project.name }}</b></p>
                                <p>{{ project.text }}</p>
                            </div>
                            <button class="project-button">
                                <img :src="arrow">
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Правая колонка -->
                <div class="projects-col-2">

                    <!-- Бок проекта -->
                    <div class="project-block" v-for="(project, index) in projectsFromStore2" :key="index">
                        <!-- Изображение проекта -->
                        <div class="project-img">
                            <img :src="project.img">
                            <!-- Звездочка в правом верхнем углу картинки -->
                            <img v-if="project.select === 1" :src="star" class="project-star">
                        </div>
                        <!-- Описание проекта -->
                        <div class="project-description description-wide">
                            <div class="project-text">
                                <p><b>{{ project.name }}</b></p>
                                <p>{{ project.text }}</p>
                            </div>
                            <button class="project-button">
                                <img :src="arrow">
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            <!-- Кнопки перехода на другие страницы статей: 1, 2, 3 .. -->
            <PaginationButtons/>
            <FooterBlock/>

        </section>

    </main>
</template>

<script>
import PaginationButtons from '@/components/PaginationButtons.vue'
import FooterBlock from '@/blocks/FooterBlock.vue'

import arrowImage from '@/assets/arrowBlack.png'
import starImage from '@/assets/star.png'

import { mapGetters } from 'vuex'

export default {
  name: 'OurProjectsPage',
  components: {
    PaginationButtons,
    FooterBlock
  },
  data () {
    return {
      selectedTag: 'Bedroom',
      arrow: arrowImage,
      star: starImage
    }
  },
  methods: {
    filterProjects (tag) {
      this.selectedTag = tag
    }
  },
  computed: {
    ...mapGetters(['getTags']),
    tagsFromStore () {
      return this.getTags
    },
    ...mapGetters(['getProjects']),
    projectsFromStore1 () { // первые четыре элемента
      if (!this.selectedTag) { // null
        return this.getProjects // Если "All projects", выводим все
      }
      return this.getProjects.filter(project => project.tag === this.selectedTag).slice(0, 3)
    },
    projectsFromStore2 () { // вторые четыре элемента
      if (!this.selectedTag) { // null
        return this.getProjects // Если "All projects", выводим все
      }
      return this.getProjects.filter(project => project.tag === this.selectedTag).slice(4, 7)
    }
  }
}
</script>

<style lang="css" scoped>
.wide-banner {
    background-image: url('@/assets/wide-banner4.png')
}
</style>
