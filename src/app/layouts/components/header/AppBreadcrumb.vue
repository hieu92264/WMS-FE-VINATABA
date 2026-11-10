<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

const route = useRoute()

const crumbs = computed(() =>
  route.matched
    .filter((r) => r.meta.breadcrumb || r.meta.title)
    .map((r) => ({ title: (r.meta.breadcrumb ?? r.meta.title) as string, path: r.path })),
)
</script>

<template>
  <Breadcrumb>
    <BreadcrumbList>
      <template v-for="(crumb, index) in crumbs" :key="crumb.path">
        <BreadcrumbItem :class="index < crumbs.length - 1 ? 'hidden md:inline-flex' : ''">
          <BreadcrumbPage v-if="index === crumbs.length - 1">{{ crumb.title }}</BreadcrumbPage>
          <BreadcrumbLink v-else as-child>
            <RouterLink :to="crumb.path || '/'">{{ crumb.title }}</RouterLink>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator v-if="index < crumbs.length - 1" class="hidden md:block" />
      </template>
    </BreadcrumbList>
  </Breadcrumb>
</template>

