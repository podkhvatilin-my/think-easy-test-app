import { z } from 'zod'

import type { ZodType } from 'zod'
import type { LoginFormData } from './model.ts'

export const LoginFormSchema:  ZodType<LoginFormData> = z.object({
	email: z.string().email(),
	password: z.string().min(8, { message: 'Password must contain at least 8 characters' }),
})