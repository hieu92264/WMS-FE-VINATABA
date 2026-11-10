import type { Component } from 'vue'

export interface SidebarItem {
  title: string
  to?: string
  icon?: Component
  /** Danh sách quyền cần có để thấy mục này. Bỏ trống = ai cũng thấy. */
  permissions?: string[]
  children?: SidebarItem[]
}

export interface SidebarGroupData {
  label: string
  items: SidebarItem[]
}

