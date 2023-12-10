import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tags: ['Bathroom', 'Bedroom', 'Kitchen', 'Living Area'],
    projects: [
      {
        name: 'Minimal Bedroom',
        tag: 'Bedroom',
        text: 'Decor / Artchitecture',
        img: require('@/assets/col-1-1.jpg'),
        select: 1
      },
      {
        name: 'Classic Bedroom',
        tag: 'Bedroom',
        text: 'Decor / Artchitecture',
        img: require('@/assets/col-1-2.jpg'),
        select: 0
      },
      {
        name: 'Bedroom Table',
        tag: 'Bedroom',
        text: 'Decor / Artchitecture',
        img: require('@/assets/col-1-3.jpg'),
        select: 0
      },
      {
        name: 'Modern Bedroom',
        tag: 'Bedroom',
        text: 'Decor / Artchitecture',
        img: require('@/assets/col-1-4.jpg'),
        select: 0
      },
      {
        name: 'Minimal Bedroom',
        tag: 'Bedroom',
        text: 'Decor / Artchitecture',
        img: require('@/assets/col-2-1.jpg'),
        select: 0
      },
      {
        name: 'Modern Bedroom',
        tag: 'Bedroom',
        text: 'Decor / Artchitecture',
        img: require('@/assets/col-2-2.jpg'),
        select: 1
      },
      {
        name: 'System Table',
        tag: 'Bedroom',
        text: 'Decor / Artchitecture',
        img: require('@/assets/col-2-3.jpg'),
        select: 0
      },
      {
        name: 'Modern Bedroom',
        tag: 'Bedroom',
        text: 'Decor / Artchitecture',
        img: require('@/assets/col-2-4.jpg'),
        select: 0
      },
      {
        name: 'Modern Kitchen',
        tag: 'Kitchen',
        text: 'Decor / Artchitecture',
        img: require('@/assets/col-1-1.jpg'),
        select: 0
      }
    ]
  },
  mutations: {
    // ...
  },
  actions: {
    // ...
  },
  getters: {
    getTags: (state) => state.tags, // Геттер для получения массива тегов
    getProjects: (state) => state.projects // Геттер для получения массива проектов
  }
})
