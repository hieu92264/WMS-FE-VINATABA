<script setup lang="ts">
import { SidebarHeader } from '@/components/ui/sidebar'
</script>

<template>
  <SidebarHeader class="p-3 pb-2">
    <div class="flex h-auto items-center gap-2 rounded-2xl px-2 py-2.5">
      <div
        class="flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-card shadow-sm ring-1 ring-sidebar-border"
      >
        <div class="relative h-9 w-12 overflow-hidden" aria-hidden="true">
          <img
            class="absolute top-0 left-0 w-12 max-w-none"
            src="@/resources/images/logo-vinataba-hp.png"
            alt="Kho Vinataba Hải Phòng"
          />
        </div>
      </div>
      <div class="grid min-w-0 flex-1 text-left leading-tight">
        <span class="truncate text-base font-bold tracking-wide">WMS</span>
        <span class="truncate text-xs font-medium text-sidebar-foreground/70">
          Quản lý kho · Vinataba HP
        </span>
      </div>
    </div>
  </SidebarHeader>
</template>
