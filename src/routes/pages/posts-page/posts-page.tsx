import { useState, useMemo, useCallback } from 'react'

import { usePostsControllerGetAllPosts } from '@/api/posts'
import { POSTS_PAGE_CONFIG } from './config'
import { PostCard, Pagination } from './components'

export const PostsPage = () => {
    const [pageIdx, setPageIdx] = useState(0)

    const { data, isLoading } = usePostsControllerGetAllPosts()

    const posts = useMemo(() => {
        if (data?.data) {
            const startIdx = pageIdx * POSTS_PAGE_CONFIG.pageSize
            const endIdx = startIdx + POSTS_PAGE_CONFIG.pageSize - 1

            return data.data.slice(startIdx, endIdx)
        }

        return []
    }, [data, pageIdx])

    const handlePageChange = useCallback<(page: number) => void>((page) => {
        setPageIdx(page - 1)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [])

    return (
        <section className="flex flex-col items-center pt-12 pb-4 min-h-dvh bg-gray-50">
            <header className="fixed z-20 top-0 start-0 flex justify-end items-center w-full h-10 bg-white border-b border-gray-200">
                <p>Add post</p>
                <p>Log Out</p>
            </header>
            {isLoading ? (
                <ul className="flex flex-col gap-3 w-2/3 animate-pulse">
                    {[...Array.from({ length: POSTS_PAGE_CONFIG.pageSize }, (_, i) => i)].map((key) => (
                        <li key={key}>
                            <div className="h-[174px] bg-gray-200 rounded-lg w-full mb-2.5" />
                        </li>
                    ))}
                </ul>
            ) : (
                <>
                    <ul className="flex flex-col gap-3 w-2/3">
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
            )}
        </section>
    )
}
