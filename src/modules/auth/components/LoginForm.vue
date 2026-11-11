<script setup lang="ts">
import { Eye, EyeOff, Loader2 } from '@lucide/vue'
import { useForm } from 'vee-validate'
import { ref } from 'vue'
import { toTypedSchema } from '@/lib/zod-schema'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { loginSchema, type LoginForm } from '@/modules/auth/schemas/login.schema'

const props = defineProps<{ loading?: boolean }>()
const emit = defineEmits<{ submit: [values: LoginForm] }>()

const showPassword = ref(false)

const { handleSubmit } = useForm({
  validationSchema: toTypedSchema(loginSchema),
  initialValues: { identifier: '', password: '', remember: false },
})

// TODO: gọi API đăng nhập ở nơi nhận sự kiện `submit`
const onSubmit = handleSubmit((values) => emit('submit', values))
</script>

<template>
  <form class="grid gap-5" novalidate @submit="onSubmit">
    <FormField v-slot="{ componentField }" name="identifier">
      <FormItem>
        <FormLabel>Tài khoản hoặc email</FormLabel>
        <FormControl>
          <Input
            type="text"
            autocomplete="username"
            placeholder="Nhập tài khoản hoặc email"
            v-bind="componentField"
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>

    <FormField v-slot="{ componentField }" name="password">
      <FormItem>
        <FormLabel>Mật khẩu</FormLabel>
        <FormControl>
          <div class="relative">
            <Input
              :type="showPassword ? 'text' : 'password'"
              autocomplete="current-password"
              placeholder="Nhập mật khẩu"
              class="pr-10"
              v-bind="componentField"
            />
            <button
              type="button"
              class="text-muted-foreground hover:text-foreground absolute inset-y-0 right-0 flex w-10 items-center justify-center"
              :aria-label="showPassword ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'"
              @click="showPassword = !showPassword"
            >
              <EyeOff v-if="showPassword" class="size-4" />
              <Eye v-else class="size-4" />
            </button>
          </div>
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>

    <div class="flex items-center justify-between">
      <FormField v-slot="{ value, handleChange }" name="remember">
        <FormItem class="flex items-center gap-2 space-y-0">
          <FormControl>
            <Checkbox :model-value="value" @update:model-value="handleChange" />
          </FormControl>
          <FormLabel class="cursor-pointer font-normal">Nhớ mật khẩu</FormLabel>
        </FormItem>
      </FormField>
    </div>

    <Button type="submit" class="w-full" :disabled="props.loading">
      <Loader2 v-if="props.loading" class="animate-spin" />
      Đăng nhập
    </Button>
  </form>
</template>
