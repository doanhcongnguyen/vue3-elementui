import { createRouter, createWebHistory } from 'vue-router'
import aboutRouter from './about-router'
import homeRouter from './home-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'LoginPage',
      component: () => import('@/views/login/LoginPage.vue'),
      hidden: true
    },

    homeRouter,
    aboutRouter,

    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/NotFound.vue')
    }
  ]
})

export default router
