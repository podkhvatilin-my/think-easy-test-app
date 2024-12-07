export interface CreatePostFormData {
    title: string
    content: string
}

export interface CreatePostFormProps {
    onSubmit: (data: CreatePostFormData) => void
}
