import { QueryClient, VueQueryPlugin } from '@tanstack/vue-query'
import type { App } from 'vue'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // sau 60 giây, dữ liệu sẽ được coi là cũ và sẽ được làm mới
      // khi truy vấn tiếp theo được thự hiện
      staleTime: 60 * 1000,
      // sau 5 phút, dữ liệu sẽ bị xóa khỏi bộ nhớ cache nếu không có truy vấn nào sử dụng nó
      gcTime: 5 * 60 * 1000,
      retry: 1, // số lần thử lại khi truy vấn thất bại
      refetchOnWindowFocus: false, // không tự động làm mới khi cửa sổ trình duyệt được focus
    },
    mutations: {
      retry: 0,
    },
  },
})

export function setupTanstackQueryConfig(app: App): void {
  app.use(VueQueryPlugin, { queryClient })
}
