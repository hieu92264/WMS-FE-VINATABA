<script setup lang="ts">
import AuthBrand from '@/app/layouts/components/auth/AuthBrand.vue'
import AuthHero from '@/app/layouts/components/auth/AuthHero.vue'
import ThemeToggle from '@/app/layouts/components/header/ThemeToggle.vue'
</script>

<template>
  <div class="bg-background grid min-h-svh lg:grid-cols-2">
    <AuthHero
      class="animate-in fade-in slide-in-from-left-8 hidden duration-700 motion-reduce:animate-none lg:flex"
    />
    <div class="relative flex flex-col items-center justify-center p-6">
      <ThemeToggle class="absolute top-4 right-4" />
      <div
        class="animate-in fade-in slide-in-from-right-8 w-full max-w-sm duration-700 motion-reduce:animate-none"
      >
        <AuthBrand class="mb-8 lg:hidden" />
        <RouterView />
      </div>
    </div>
  </div>
</template>
