import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { usePostsControllerCreate } from '@/api/posts'
import { CreatePostForm } from './components'

import type { CreatePostFormData } from './components'

export const CreatePostPage = () => {
    const navigate = useNavigate()

    const { mutate } = usePostsControllerCreate({
        mutation: {
            onSuccess: () => {
                navigate('/posts')
            },
        },
    })

    const handleSubmit = useCallback<(data: CreatePostFormData) => void>(
        (data) => {
            mutate({ data })
        },
        [mutate]
    )

    return (
        <section className="w-10/12">
            <CreatePostForm onSubmit={handleSubmit} />
        </section>
    )
}
