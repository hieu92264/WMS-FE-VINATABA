<script setup lang="ts">
import HeaderSection from '@/app/layouts/components/sidebar/HeaderSection.vue'
import { Sidebar, SidebarProvider } from '@/components/ui/sidebar'
</script>

<template>
  <SidebarProvider>
    <Sidebar>
      <HeaderSection />
    </Sidebar>
  </SidebarProvider>
</template>

<script setup lang="ts"></script>
