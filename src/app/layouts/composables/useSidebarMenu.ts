import { computed } from 'vue'
import { sidebarGroups } from '@/app/layouts/constants/sidebar-data'
import type { SidebarGroupData, SidebarItem } from '@/app/layouts/types/sidebar'

// TODO: thay bằng kiểm tra quyền thực từ auth store khi có phân quyền.
const hasPermission = (_permissions: string[]) => true

function filterItems(items: SidebarItem[]): SidebarItem[] {
  return items
    .filter((item) => !item.permissions?.length || hasPermission(item.permissions))
    .map((item) => (item.children ? { ...item, children: filterItems(item.children) } : item))
    .filter((item) => !item.children || item.children.length > 0)
}

export function useSidebarMenu() {
  const groups = computed<SidebarGroupData[]>(() =>
    sidebarGroups
      .map((group) => ({ ...group, items: filterItems(group.items) }))
      .filter((group) => group.items.length > 0),
  )
  return { groups }
}

