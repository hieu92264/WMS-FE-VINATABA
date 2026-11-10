import { LayoutDashboard, Building2 } from '@lucide/vue'
import type { SidebarGroupData } from '@/app/layouts/types/sidebar'

export const sidebarGroups: SidebarGroupData[] = [
  {
    label: 'Tổng quan',
    items: [{ title: 'Dashboard', to: '/', icon: LayoutDashboard }],
  },
  {
    label: 'Quản trị',
    items: [
      {
        title: 'Quản lý tổ chức',
        icon: Building2,
        // permissions: ['organization:view'], // bật khi có phân quyền
        children: [
          { title: 'Tài khoản', to: '/organization/accounts' },
          { title: 'Vai trò', to: '/organization/roles' },
          { title: 'Quyền', to: '/organization/permissions' },
          { title: 'Phân quyền', to: '/organization/assignments' },
        ],
      },
    ],
  },
]
