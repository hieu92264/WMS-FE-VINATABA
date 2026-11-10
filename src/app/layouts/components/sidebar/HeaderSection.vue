<script setup lang="ts">
import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
</script>

<template>
  <SidebarHeader class="p-3 pb-2">
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          size="lg"
          class="h-auto min-h-20 rounded-2xl px-3 py-2.5 hover:bg-sidebar-accent/70"
        >
          <div
            class="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-[#193b34] shadow-sm ring-1 ring-white/10"
          >
            <div class="relative h-11 w-16 overflow-hidden" aria-hidden="true">
              <img
                class="absolute top-0 left-0 w-16 max-w-none"
                src="@/resources/images/logo-vinataba-hp.png"
                alt="Kho Vinataba Hải Phòng"
              />
            </div>
          </div>
          <div class="grid min-w-0 flex-1 text-left leading-tight">
            <span class="truncate text-[15px] font-bold tracking-[0.01em]">WMS - Kho</span>
            <span class="mt-1 truncate text-xs font-medium text-sidebar-foreground/70">
              Vinataba Hải Phòng
            </span>
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  </SidebarHeader>
</template>
