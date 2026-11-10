import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/app/layouts/DefaultLayout.vue'
import AuthLayout from '@/app/layouts/AuthLayout.vue'
import { authRoute } from '@/modules/auth/auth.route'
import { dashboardRoute } from '@/modules/dashboard/dashboard.route'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [...dashboardRoute],
    },
    {
      path: '/auth',
      component: AuthLayout,
      children: [...authRoute],
    },
  ],
})

export default router
