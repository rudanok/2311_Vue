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
                <div class="project-header" v-for="tag in tags" :key="tag.id" :class="{ 'project-header-brown': tag === selectedTag }" @click="filterProjects(tag)"><a href="#">{{ tag }}</a></div>
            </div>

            <!-- Блок с двумя колонками проектов -->
            <div class="projects-row w1200">

                <!-- Левая колонка -->
                <div class="projects-col-1">

                    <!-- Бок проекта -->
                    <div class="project-block" v-for="(project, index) in filteredProjects1" :key="index">
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
                    <div class="project-block" v-for="(project, index) in filteredProjects2" :key="index">
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

        </section>

    </main>
</template>

<script>
import PaginationButtons from '@/components/PaginationButtons.vue'
import arrowImage from '@/assets/arrowBlack.png'
import starImage from '@/assets/star.png'
import projectImage1 from '@/assets/col-1-1.jpg'
import projectImage2 from '@/assets/col-1-2.jpg'
import projectImage3 from '@/assets/col-1-3.jpg'
import projectImage4 from '@/assets/col-1-4.jpg'
import projectImage5 from '@/assets/col-2-1.jpg'
import projectImage6 from '@/assets/col-2-2.jpg'
import projectImage7 from '@/assets/col-2-3.jpg'
import projectImage8 from '@/assets/col-2-4.jpg'
export default {
  name: 'OurProjectsPage',
  components: {
    PaginationButtons
  },
  data () {
    return {
      selectedTag: 'Bedroom',
      arrow: arrowImage,
      star: starImage,
      tags: ['Bathroom', 'Bedroom', 'Kitchen', 'Living Area'],
      projects: [
        {
          name: 'Minimal Bedroom',
          tag: 'Bedroom',
          text: 'Decor / Artchitecture',
          img: projectImage1,
          select: 1
        },
        {
          name: 'Classic Bedroom',
          tag: 'Bedroom',
          text: 'Decor / Artchitecture',
          img: projectImage2,
          select: 0
        },
        {
          name: 'Bedroom Table',
          tag: 'Bedroom',
          text: 'Decor / Artchitecture',
          img: projectImage3,
          select: 0
        },
        {
          name: 'Modern Bedroom',
          tag: 'Bedroom',
          text: 'Decor / Artchitecture',
          img: projectImage4,
          select: 0
        },
        {
          name: 'Minimal Bedroom',
          tag: 'Bedroom',
          text: 'Decor / Artchitecture',
          img: projectImage5,
          select: 0
        },
        {
          name: 'Modern Bedroom',
          tag: 'Bedroom',
          text: 'Decor / Artchitecture',
          img: projectImage6,
          select: 1
        },
        {
          name: 'System Table',
          tag: 'Bedroom',
          text: 'Decor / Artchitecture',
          img: projectImage7,
          select: 0
        },
        {
          name: 'Modern Bedroom',
          tag: 'Bedroom',
          text: 'Decor / Artchitecture',
          img: projectImage8,
          select: 0
        },
        {
          name: 'Modern Kitchen',
          tag: 'Kitchen',
          text: 'Decor / Artchitecture',
          img: projectImage8,
          select: 0
        }
      ]
    }
  },
  methods: {
    filterProjects (tag) {
      this.selectedTag = tag
    }
  },
  computed: {
    filteredProjects1 () { // первые четыре элемента
      if (!this.selectedTag) { // null
        return this.projects // Если "All projects", выводим все
      }
      return this.projects.filter(project => project.tag === this.selectedTag).slice(0, 3)
    },
    filteredProjects2 () { // вторые четыре элемента
      if (!this.selectedTag) { // null
        return this.projects // Если "All projects", выводим все
      }
      return this.projects.filter(project => project.tag === this.selectedTag).slice(4, 7)
    }
  }
}
</script>

<style lang="css" scoped>
.wide-banner {
    background-image: url('@/assets/wide-banner4.png')
}
</style>
