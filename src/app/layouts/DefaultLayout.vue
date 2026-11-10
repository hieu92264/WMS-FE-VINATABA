<script setup lang="ts">
import AppHeader from '@/app/layouts/components/AppHeader.vue'
import AppSidebar from '@/app/layouts/components/AppSidebar.vue'
import AppTabBar from '@/app/layouts/components/AppTabBar.vue'
import { useTabbarStore } from '@/app/layouts/stores/tabbar.store'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'

const tabbar = useTabbarStore()
</script>

<template>
  <SidebarProvider>
    <AppSidebar />
    <SidebarInset class="min-w-0">
      <AppHeader />
      <AppTabBar />
      <div class="flex-1 overflow-auto p-4 md:p-6">
        <RouterView v-slot="{ Component, route }">
          <component :is="Component" :key="`${route.fullPath}-${tabbar.refreshKey}`" />
        </RouterView>
      </div>
    </SidebarInset>
  </SidebarProvider>
</template>
