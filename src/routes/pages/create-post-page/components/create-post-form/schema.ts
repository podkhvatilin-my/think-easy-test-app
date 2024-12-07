import { z } from 'zod'

import type { ZodType } from 'zod'
import type { CreatePostFormData } from './model.ts'

export const CreatePostFormSchema: ZodType<CreatePostFormData> = z.object({
    title: z.string().min(1, { message: 'Title must contain at least 1 characters' }),
    content: z.string().min(1, { message: 'Content must contain at least 1 characters' }),
})
