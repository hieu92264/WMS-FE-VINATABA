import { z } from 'zod'

export const loginSchema = z.object({
  identifier: z.string().trim().min(1, 'Vui lòng nhập tài khoản hoặc email'),
  password: z.string().min(6, 'Mật khẩu tối thiểu 6 ký tự'),
  remember: z.boolean().default(false),
})

export type LoginForm = z.infer<typeof loginSchema>
