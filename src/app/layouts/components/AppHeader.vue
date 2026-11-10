<script setup lang="ts">
import AppBreadcrumb from '@/app/layouts/components/header/AppBreadcrumb.vue'
import ThemeToggle from '@/app/layouts/components/header/ThemeToggle.vue'
import UserMenu from '@/app/layouts/components/header/UserMenu.vue'
import { Separator } from '@/components/ui/separator'
import { SidebarTrigger } from '@/components/ui/sidebar'
</script>

<template>
  <header class="bg-background sticky top-0 z-20 flex h-14 shrink-0 items-center gap-2 border-b px-3">
    <SidebarTrigger />
    <Separator orientation="vertical" class="data-[orientation=vertical]:h-4" />
    <div class="min-w-0 flex-1 overflow-hidden">
      <AppBreadcrumb />
    </div>
    <ThemeToggle />
    <UserMenu />
  </header>
</template>

