import { useState, useMemo, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { usePostsControllerUserPosts } from '@/api/posts'
import { USER_POSTS_PAGE_CONFIG } from './config'
import { Pagination, PostCard, PostCardSkeleton } from '@/components'

export const UserPosts = () => {
    const routeParams = useParams()

    const [pageIdx, setPageIdx] = useState(0)

    const { data, isLoading } = usePostsControllerUserPosts(routeParams.authorId as string)

    const userPosts = useMemo(() => {
        const userPostsData = [...(data?.data ?? [])].reverse()

        if (userPostsData.length) {
            const startIdx = pageIdx * USER_POSTS_PAGE_CONFIG.pageSize
            const endIdx = startIdx + USER_POSTS_PAGE_CONFIG.pageSize - 1

            return userPostsData.slice(startIdx, endIdx)
        }

        return []
    }, [data, pageIdx])

    const handlePageChange = useCallback<(page: number) => void>((page) => {
        setPageIdx(page - 1)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [])

    return isLoading ? (
        <ul className="flex flex-col gap-3 w-10/12 sm:w-2/3 animate-pulse">
            {[...Array.from({ length: USER_POSTS_PAGE_CONFIG.pageSize }, (_, i) => i)].map((key) => (
                <li key={key}>
                    <PostCardSkeleton />
                </li>
            ))}
        </ul>
    ) : (
        <>
            <ul className="flex flex-col gap-3 w-10/12 sm:w-2/3">
                {userPosts.map((post) => (
                    <li key={post.id}>
                        <PostCard post={post} />
                    </li>
                ))}
            </ul>
            <br />
            <footer className="flex gap-2">
                <Pagination
                    page={pageIdx + 1}
                    pageSize={USER_POSTS_PAGE_CONFIG.pageSize}
                    itemsSize={data?.data.length ?? 0}
                    onPageChange={handlePageChange}
                />
            </footer>
        </>
    )
}
