<script setup lang="ts">
import LoginForm from '@/modules/auth/components/LoginForm.vue'
import type { LoginForm as LoginFormValues } from '@/modules/auth/schemas/login.schema'

// TODO: gọi API đăng nhập với giá trị form nhận được
function onSubmit(values: LoginFormValues) {
  console.debug('login submit', values.identifier)
}
</script>

<template>
  <div class="grid gap-6">
    <div class="grid gap-2">
      <h1
        class="animate-in fade-in slide-in-from-bottom-4 fill-mode-both text-3xl font-bold tracking-tight delay-200 duration-700 motion-reduce:animate-none"
      >
        Chào mừng đến với Vinataba Hải Phòng
      </h1>
      <p
        class="text-muted-foreground animate-in fade-in slide-in-from-bottom-4 fill-mode-both text-sm delay-300 duration-700 motion-reduce:animate-none"
      >
        Nhập thông tin tài khoản để tiếp tục
      </p>
    </div>
    <LoginForm
      class="animate-in fade-in slide-in-from-bottom-4 fill-mode-both delay-500 duration-700 motion-reduce:animate-none"
      @submit="onSubmit"
    />
  </div>
</template>
