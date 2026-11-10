<script setup lang="ts">
import { SidebarFooter } from '@/components/ui/sidebar'
</script>

<template>
  <!-- Chưa hiển thị nội dung; bỏ v-if khi cần dùng footer -->
  <SidebarFooter v-if="false" />
</template>
