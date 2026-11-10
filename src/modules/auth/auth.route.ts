import LoginPage from '@/modules/auth/views/LoginPage.vue'
import type { RouteRecordRaw } from 'vue-router'

export const authRoute: RouteRecordRaw[] = [
  {
    path: 'login',
    name: 'Login',
    component: LoginPage,
    meta: {
      title: 'Trang đăng nhập',
    },
  },
]
