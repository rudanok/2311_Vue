import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routers: [
    {
      path: '/',
      name: 'Home',
      component: import('@/pages/HomePage.vue')
    },
    {
      path: '/project',
      name: 'Project',
      component: import('@/pages/OurProjectPage.vue')
    },
    {
      path: '/blog',
      name: 'Blog',
      component: import('@/pages/BlogPage.vue')
    }
  ],
  mode: 'history'
})
