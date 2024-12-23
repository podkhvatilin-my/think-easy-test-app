import { useState, useMemo, useCallback } from 'react'
import { usePostsControllerGetAllPosts } from '@/api/posts'
import { PostCard, PostCardSkeleton, Pagination } from '@/components'
import { POSTS_PAGE_CONFIG } from './config'

export const PostsPage = () => {
    const [pageIdx, setPageIdx] = useState(0)

    const { data, isLoading } = usePostsControllerGetAllPosts()

    const posts = useMemo(() => {
        const postsData = [...(data?.data ?? [])].reverse()

        if (postsData.length) {
            const startIdx = pageIdx * POSTS_PAGE_CONFIG.pageSize
            const endIdx = startIdx + POSTS_PAGE_CONFIG.pageSize - 1

            return postsData.slice(startIdx, endIdx)
        }

        return []
    }, [data, pageIdx])

    const handlePageChange = useCallback<(page: number) => void>((page) => {
        setPageIdx(page - 1)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [])

    return isLoading ? (
        <ul className="flex flex-col gap-3 w-10/12 sm:w-2/3 animate-pulse">
            {[...Array.from({ length: POSTS_PAGE_CONFIG.pageSize }, (_, i) => i)].map((key) => (
                <li key={key}>
                    <PostCardSkeleton />
                </li>
            ))}
        </ul>
    ) : (
        <>
            <ul className="flex flex-col gap-3 w-10/12 sm:w-2/3">
                {posts.map((post) => (
                    <li key={post.id}>
                        <PostCard post={post} />
                    </li>
                ))}
            </ul>
            <br />
            <footer className="flex gap-2">
                <Pagination
                    page={pageIdx + 1}
                    pageSize={POSTS_PAGE_CONFIG.pageSize}
                    itemsSize={data?.data.length ?? 0}
                    onPageChange={handlePageChange}
                />
            </footer>
        </>
    )
}
