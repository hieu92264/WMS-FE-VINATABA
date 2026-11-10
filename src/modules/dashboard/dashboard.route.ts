import DashboardPage from '@/modules/dashboard/views/DashboardPage.vue'
import type { RouteRecordRaw } from 'vue-router'

export const dashboardRoute: RouteRecordRaw[] = [
  {
    path: '',
    name: 'Dashboard',
    component: DashboardPage,
    meta: {
      title: 'Dashboard',
      affixTab: true,
    },
  },
]

