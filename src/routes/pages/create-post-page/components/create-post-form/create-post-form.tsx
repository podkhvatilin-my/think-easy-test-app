import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import type { FC } from 'react'
import { CreatePostFormSchema } from './schema'
import { Button, Input, TextArea } from '@/components/ui'

import type { CreatePostFormData, CreatePostFormProps } from './model'

export const CreatePostForm: FC<CreatePostFormProps> = (props) => {
    const { onSubmit } = props

    const { handleSubmit, control, formState } = useForm<CreatePostFormData>({
        resolver: zodResolver(CreatePostFormSchema),
        defaultValues: {
            title: '',
            content: '',
        },
    })

    return (
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="title"
                control={control}
                render={({ field }) => (
                    <Input
                        label="Title"
                        placeholder="Title"
                        errorMessage={formState.errors.title?.message}
                        {...field}
                    />
                )}
            />
            <Controller
                name="content"
                control={control}
                render={({ field }) => (
                    <TextArea
                        label="Content"
                        placeholder="Content"
                        errorMessage={formState.errors.content?.message}
                        {...field}
                    />
                )}
            />
            <div className="flex justify-end gap-3 mt-3">
                <Button type="button" variant="secondary">
                    Cancel
                </Button>
                <Button type="submit">Create post</Button>
            </div>
        </form>
    )
}
