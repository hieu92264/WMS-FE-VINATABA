import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    title?: string
    /** Ghim tab cố định, không đóng được */
    affixTab?: boolean
    /** Không hiển thị trong tabsbar */
    hideInTab?: boolean
    /** Tên hiển thị trên breadcrumb (mặc định dùng title) */
    breadcrumb?: string
  }
}

