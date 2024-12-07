import { useMemo } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { usePostsControllerPost } from '@/api/posts'
import { Button } from '@/components'

export const PostPage = () => {
    const routeParams = useParams()
    const navigate = useNavigate()

    const { data, isLoading } = usePostsControllerPost(routeParams.postId as string)

    const post = useMemo(() => {
        let result

        if (data?.data) {
            result = data.data
        }

        return result
    }, [data])

    return !isLoading ? (
        <article className="p-5">
            {post && (
                <>
                    <h5 className="mt-2 text-xl font-semibold text-slate-900">{post.title}</h5>
                    <p className="mt-4 text-sm leading-6 text-slate-500">{post.content}</p>
                </>
            )}
            <footer className="mt-5">
                <Button variant="secondary" onClick={() => navigate(-1)}>
                    Back
                </Button>
            </footer>
        </article>
    ) : (
        <div>Loading...</div>
    )
}
