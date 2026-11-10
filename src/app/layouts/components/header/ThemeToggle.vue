<script setup lang="ts">
import { Moon, Sun } from '@lucide/vue'
import { useDark, useToggle } from '@vueuse/core'
import { Button } from '@/components/ui/button'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <Button variant="ghost" size="icon" aria-label="Đổi giao diện sáng/tối" @click="toggleDark()">
    <Sun v-if="isDark" />
    <Moon v-else />
  </Button>
</template>

