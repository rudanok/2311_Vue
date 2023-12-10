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

                    <!-- Колонка проектов -->
                    <div class="w800">

                        <div v-for="project in filteredProjects" :key="project.id">
                            <h4 class="h4-text text-left">
                                {{ project.name }}
                            </h4>
                            <p class="p-text text-left">
                                <b>{{ project.tag }}</b>
                            </p>
                            <p class="p-text text-left">
                                {{ project.text }}
                            </p>
                        </div>

                    </div>

                </div>

                <!-- Блок тегов -->
                <div class="news-tags">
                    <div class="tag-header">
                        <h1>Tags</h1>
                    </div>
                    <div class="tags">
                        <!-- Список тегов -->
                        <span class="tag" v-for="tag in tags" :key="tag.id" :class="{ 'tag-active': tag === selectedTag }" @click="filterProjects(tag)">{{ tag }}</span>
                        <!-- Дополнительный тег «All projects» -->
                        <span class="tag" :class="{ 'tag-active': selectedTag === null }" @click="filterProjects(null)">All projects</span>
                    </div>

                </div>

            </div>

        </section>

    </main>
</template>

<script>
export default {
  name: 'ProjectsListPage',
  data () {
    return {
      selectedTag: null,
      tags: ['Kitchen', 'Bedroom', 'Building', 'Architecture', 'Kitchen Planning'],
      projects: [
        {
          name: 'Project 1',
          tag: 'Kitchen',
          text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available.'
        },
        {
          name: 'Project 2',
          tag: 'Bedroom',
          text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available.'
        },
        {
          name: 'Project 3',
          tag: 'Building',
          text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available.'
        },
        {
          name: 'Project 4',
          tag: 'Architecture',
          text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available.'
        },
        {
          name: 'Project 5',
          tag: 'Kitchen Planning',
          text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available.'
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
    filteredProjects () {
      if (!this.selectedTag) { // null
        return this.projects // Если "All projects", выводим все
      }
      return this.projects.filter(project => project.tag === this.selectedTag)
    }
  }
}
</script>

<style lang="css" scoped>
.wide-banner {
    background-image: url('@/assets/wide-banner2.jpg')
}
</style>
