import AppLayout from '@/views/layout/AppLayout.vue'

const router = {
  path: '/',
  component: AppLayout,
  children: [
    {
      path: '',
      name: 'HomePage',
      component: () => import('@/views/home/HomePage.vue')
    }
  ]
}

export default router
