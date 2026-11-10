<script setup lang="ts">
import { KeyRound, LogOut, User } from '@lucide/vue'
import { useRouter } from 'vue-router'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const router = useRouter()

// TODO: lấy thông tin người dùng từ auth store khi có
const user = { name: 'Người dùng', email: 'user@vinataba.vn' }

function changePassword() {
  // TODO: mở dialog đổi mật khẩu
}

function logout() {
  // TODO: xóa phiên đăng nhập trong auth store
  router.push('/auth/login')
}
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="ghost" size="icon" class="rounded-full" aria-label="Menu người dùng">
        <Avatar class="size-8">
          <AvatarFallback><User class="size-4" /></AvatarFallback>
        </Avatar>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" class="w-56">
      <DropdownMenuLabel class="grid font-normal">
        <span class="truncate text-sm font-medium">{{ user.name }}</span>
        <span class="text-muted-foreground truncate text-xs">{{ user.email }}</span>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem @select="changePassword"><KeyRound />Đổi mật khẩu</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem variant="destructive" @select="logout"><LogOut />Đăng xuất</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>

