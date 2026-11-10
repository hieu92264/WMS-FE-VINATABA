<script setup lang="ts">
import ContentSection from '@/app/layouts/components/sidebar/ContentSection.vue'
import FooterSection from '@/app/layouts/components/sidebar/FooterSection.vue'
import HeaderSection from '@/app/layouts/components/sidebar/HeaderSection.vue'
import { Sidebar, SidebarRail } from '@/components/ui/sidebar'
</script>

<template>
  <Sidebar collapsible="offcanvas">
    <HeaderSection />
    <ContentSection />
    <FooterSection />
    <SidebarRail />
  </Sidebar>
</template>
