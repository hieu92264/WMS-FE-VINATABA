<script setup lang="ts">
import { ChevronRight } from '@lucide/vue'
import { useRoute } from 'vue-router'
import { useSidebarMenu } from '@/app/layouts/composables/useSidebarMenu'
import type { SidebarItem } from '@/app/layouts/types/sidebar'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar'

const route = useRoute()
const { groups } = useSidebarMenu()

const isActive = (to?: string) =>
  !!to && (to === '/' ? route.path === '/' : route.path.startsWith(to))
const isGroupActive = (item: SidebarItem) => !!item.children?.some((child) => isActive(child.to))
</script>

<template>
  <SidebarContent>
    <SidebarGroup v-for="group in groups" :key="group.label">
      <SidebarGroupLabel>{{ group.label }}</SidebarGroupLabel>
      <SidebarMenu>
        <template v-for="item in group.items" :key="item.title">
          <Collapsible
            v-if="item.children"
            as-child
            :default-open="isGroupActive(item)"
            class="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger as-child>
                <SidebarMenuButton :tooltip="item.title">
                  <component :is="item.icon" v-if="item.icon" />
                  <span>{{ item.title }}</span>
                  <ChevronRight
                    class="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90"
                  />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  <SidebarMenuSubItem v-for="child in item.children" :key="child.title">
                    <SidebarMenuSubButton as-child :is-active="isActive(child.to)">
                      <RouterLink :to="child.to ?? '#'">
                        <span>{{ child.title }}</span>
                      </RouterLink>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>

          <SidebarMenuItem v-else>
            <SidebarMenuButton as-child :tooltip="item.title" :is-active="isActive(item.to)">
              <RouterLink :to="item.to ?? '#'">
                <component :is="item.icon" v-if="item.icon" />
                <span>{{ item.title }}</span>
              </RouterLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </template>
      </SidebarMenu>
    </SidebarGroup>
  </SidebarContent>
</template>

