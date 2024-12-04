import { useState, useMemo, useCallback } from 'react'
import { usePostsControllerGetAllPosts } from '@/api/posts'
import { Button } from '@/components/ui'
import { POSTS_PAGE_CONFIG } from './config'
import { PostCard } from './components'

export const PostsPage = () => {
    const { data, isLoading } = usePostsControllerGetAllPosts()

    const [pageIdx, setPageIdx] = useState(0)
    const posts = useMemo(() => {
        if (data?.data) {
            const startIdx = pageIdx * POSTS_PAGE_CONFIG.pageSize
            const endIdx = startIdx + POSTS_PAGE_CONFIG.pageSize - 1

            return data.data.slice(startIdx, endIdx)
        }

        return []
    }, [data, pageIdx])

    const handleNextPageClick = useCallback(() => {
        setPageIdx((prevState) => prevState + 1)
    }, [])
    const handlePrevPageClick = useCallback(() => {
        setPageIdx((prevState) => (prevState !== 0 ? prevState - 1 : prevState))
    }, [])

    return (
        <section className="flex flex-col items-center py-4 min-h-dvh bg-gray-50">
            {!isLoading ? (
                <ul className="flex flex-col gap-3 w-2/3">
                    {posts.map((post) => (
                        <li key={post.id}>
                            <PostCard post={post} />
                        </li>
                    ))}
                </ul>
            ) : (
                <div>Loading...</div>
            )}
            <br />
            <footer className="flex gap-2">
                <Button onClick={handlePrevPageClick}>Prev page</Button>
                <Button onClick={handleNextPageClick}>Next page</Button>
            </footer>
        </section>
    )
}
