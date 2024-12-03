import { z } from 'zod'

import type { ZodType } from 'zod'
import type { SignUpFormData } from './model.ts'

export const SignUpFormSchema:  ZodType<SignUpFormData> = z.object({
	firstname: z.string().min(1, { message: 'First name must contain at least 1 characters' }),
	lastname: z.string().min(1, { message: 'Last name must contain at least 1 characters' }),
	email: z.string().email(),
	password: z.string().min(8, { message: 'Password must contain at least 8 characters' }),
	confirmPassword: z.string().min(8, { message: 'Password must contain at least 8 characters' })
}).refine((data) => data.password === data.confirmPassword, {
	message: 'Passwords do not match',
	path: ['confirmPassword'],
});