<script setup lang="ts">
import AuthBrand from '@/app/layouts/components/auth/AuthBrand.vue'
import wmsLogo from '@/resources/images/WmsLogo.png'
import { cn } from '@/lib/utils'

const props = defineProps<{ class?: string }>()
</script>

<template>
  <div :class="cn('bg-sidebar relative flex-col justify-between border-r p-8', props.class)">
    <AuthBrand />
    <div class="flex flex-col items-center gap-8 text-center">
      <img
        :src="wmsLogo"
        alt="Kho thuốc lá Vinataba Hải Phòng"
        class="animate-in fade-in zoom-in-95 h-auto w-full max-w-lg duration-700 motion-reduce:animate-none"
      />
      <div
        class="animate-in fade-in slide-in-from-bottom-4 fill-mode-both grid gap-2 delay-500 duration-700 motion-reduce:animate-none"
      >
        <h2 class="text-2xl font-semibold">Quản lý kho thuốc lá Vinataba Hải Phòng</h2>
        <p class="text-muted-foreground text-sm">
          Theo dõi nhập – xuất – tồn theo thời gian thực
        </p>
      </div>
    </div>
    <div />
  </div>
</template>
