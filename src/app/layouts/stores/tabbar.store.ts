import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { RouteLocationNormalizedLoaded } from 'vue-router'

export interface TabItem {
  /** fullPath của route, dùng làm khóa duy nhất */
  key: string
  title: string
  affix: boolean
}

export const useTabbarStore = defineStore(
  'tabbar',
  () => {
    const tabs = ref<TabItem[]>([])
    const refreshKey = ref(0)

    const sortAffixFirst = () => {
      tabs.value = [...tabs.value.filter((t) => t.affix), ...tabs.value.filter((t) => !t.affix)]
    }

    function open(route: RouteLocationNormalizedLoaded) {
      if (route.meta.hideInTab) return
      const title = (route.meta.title as string | undefined) ?? String(route.name ?? route.path)
      const existing = tabs.value.find((t) => t.key === route.fullPath)
      if (existing) {
        existing.title = title
        return
      }
      tabs.value.push({ key: route.fullPath, title, affix: !!route.meta.affixTab })
      sortAffixFirst()
    }

    function close(key: string) {
      tabs.value = tabs.value.filter((t) => t.key !== key || t.affix)
    }
    function closeOthers(key: string) {
      tabs.value = tabs.value.filter((t) => t.key === key || t.affix)
    }
    function closeLeft(key: string) {
      const index = tabs.value.findIndex((t) => t.key === key)
      tabs.value = tabs.value.filter((t, i) => i >= index || t.affix)
    }
    function closeRight(key: string) {
      const index = tabs.value.findIndex((t) => t.key === key)
      tabs.value = tabs.value.filter((t, i) => i <= index || t.affix)
    }
    function closeAll() {
      tabs.value = tabs.value.filter((t) => t.affix)
    }
    function togglePin(key: string) {
      const tab = tabs.value.find((t) => t.key === key)
      if (!tab) return
      tab.affix = !tab.affix
      sortAffixFirst()
    }
    function move(from: number, to: number) {
      if (from === to) return
      const next = [...tabs.value]
      const [item] = next.splice(from, 1)
      if (!item) return
      next.splice(to, 0, item)
      tabs.value = next
      sortAffixFirst()
    }
    function refresh() {
      refreshKey.value++
    }

    return {
      tabs,
      refreshKey,
      open,
      close,
      closeOthers,
      closeLeft,
      closeRight,
      closeAll,
      togglePin,
      move,
      refresh,
    }
  },
  { persist: { storage: sessionStorage } },
)

