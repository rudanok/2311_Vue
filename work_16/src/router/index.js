import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from '@/pages/HomePage.vue'
import BlogPage from '@/pages/BlogPage.vue'
import OurProjectPage from '@/pages/OurProjectPage.vue'
import NotFoundPage from '@/pages/NotFoundPage.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes:
  [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/project',
      name: 'Project',
      component: OurProjectPage
    },
    {
      path: '/blog',
      name: 'Blog',
      component: BlogPage
    },
    {
      path: '*',
      name: '404',
      component: NotFoundPage
    }
  ]
})

export default router
