import AppLayout from '@/views/layout/AppLayout.vue'

const router = {
  path: '/about',
  component: AppLayout,
  children: [
    {
      path: '',
      name: 'AboutPage',
      component: () => import('@/views/about/AboutPage.vue')
    }
  ]
}

export default router
