<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { Pin, X } from '@lucide/vue'
import { useRoute, useRouter } from 'vue-router'
import { useTabbarStore, type TabItem } from '@/app/layouts/stores/tabbar.store'
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from '@/components/ui/context-menu'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'

const route = useRoute()
const router = useRouter()
const store = useTabbarStore()

watch(
  () => route.fullPath,
  () => store.open(route),
  { immediate: true },
)

const activeKey = computed(() => route.fullPath)

/** Sau khi đóng tab đang active, chuyển sang tab lân cận hoặc trang chủ */
async function afterClose(prevTabs: TabItem[], closedActive: boolean) {
  if (!closedActive || store.tabs.some((t) => t.key === activeKey.value)) return
  const index = prevTabs.findIndex((t) => t.key === activeKey.value)
  const target = store.tabs[Math.min(index, store.tabs.length - 1)] ?? store.tabs.at(-1)
  await router.push(target?.key ?? '/')
}

async function run(action: () => void) {
  const prev = [...store.tabs]
  action()
  await afterClose(prev, true)
}

const closeTab = (tab: TabItem) => run(() => store.close(tab.key))
const closeOthers = async (tab: TabItem) => {
  await router.push(tab.key)
  store.closeOthers(tab.key)
}
const closeLeft = (tab: TabItem) => run(() => store.closeLeft(tab.key))
const closeRight = (tab: TabItem) => run(() => store.closeRight(tab.key))
const closeAll = () => run(() => store.closeAll())

const hasLeft = (index: number) => store.tabs.slice(0, index).some((t) => !t.affix)
const hasRight = (index: number) => store.tabs.slice(index + 1).some((t) => !t.affix)

// Kéo-thả sắp xếp tab (HTML5 drag & drop, không cần thư viện)
const dragIndex = ref<number | null>(null)
function onDrop(to: number) {
  if (dragIndex.value !== null) store.move(dragIndex.value, to)
  dragIndex.value = null
}
</script>

<template>
  <div class="bg-background border-b">
    <ScrollArea class="w-full">
      <div class="flex h-9 items-end gap-1 px-2 pt-1" role="tablist">
        <ContextMenu v-for="(tab, index) in store.tabs" :key="tab.key">
          <ContextMenuTrigger as-child>
            <div
              role="tab"
              :aria-selected="tab.key === activeKey"
              :draggable="!tab.affix"
              :class="
                cn(
                  'group flex h-8 shrink-0 cursor-pointer items-center gap-1.5 rounded-t-md border border-b-0 px-3 text-sm select-none',
                  tab.key === activeKey
                    ? 'bg-card text-primary border-border font-medium'
                    : 'text-muted-foreground hover:bg-muted border-transparent',
                )
              "
              @click="router.push(tab.key)"
              @auxclick.middle.prevent="!tab.affix && closeTab(tab)"
              @dragstart="dragIndex = index"
              @dragover.prevent
              @drop.prevent="onDrop(index)"
            >
              <Pin v-if="tab.affix" class="size-3" />
              <span class="max-w-40 truncate">{{ tab.title }}</span>
              <button
                v-if="!tab.affix"
                type="button"
                class="hover:bg-accent hover:text-accent-foreground rounded-sm p-0.5 opacity-60 group-hover:opacity-100"
                aria-label="Đóng tab"
                @click.stop="closeTab(tab)"
              >
                <X class="size-3" />
              </button>
            </div>
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem @select="router.push(tab.key).then(store.refresh)">
              Tải lại
            </ContextMenuItem>
            <ContextMenuItem @select="store.togglePin(tab.key)">
              {{ tab.affix ? 'Bỏ ghim tab' : 'Ghim tab' }}
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem :disabled="tab.affix" @select="closeTab(tab)">Đóng tab</ContextMenuItem>
            <ContextMenuItem :disabled="!hasLeft(index)" @select="closeLeft(tab)">
              Đóng các tab bên trái
            </ContextMenuItem>
            <ContextMenuItem :disabled="!hasRight(index)" @select="closeRight(tab)">
              Đóng các tab bên phải
            </ContextMenuItem>
            <ContextMenuItem @select="closeOthers(tab)">Đóng các tab khác</ContextMenuItem>
            <ContextMenuItem @select="closeAll">Đóng tất cả</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </div>
      <ScrollBar orientation="horizontal" class="h-1.5" />
    </ScrollArea>
  </div>
</template>

