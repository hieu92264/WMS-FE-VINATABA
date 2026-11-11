<script setup lang="ts">
import { cn } from '@/lib/utils'

const props = defineProps<{ class?: string }>()
</script>

<template>
  <div :class="cn('flex items-center gap-3', props.class)">
    <div
      class="bg-card ring-border animate-in zoom-in-50 fade-in flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-xl shadow-sm ring-1 duration-700 motion-reduce:animate-none"
    >
      <div class="relative h-9 w-12 overflow-hidden" aria-hidden="true">
        <img
          class="absolute top-0 left-0 w-12 max-w-none"
          src="@/resources/images/logo-vinataba-hp.png"
          alt="Kho Vinataba Hải Phòng"
        />
      </div>
    </div>
    <div class="grid leading-tight">
      <span class="text-lg font-bold tracking-wide">WMS</span>
      <span class="text-muted-foreground text-xs">Vinataba Hải Phòng</span>
    </div>
  </div>
</template>

