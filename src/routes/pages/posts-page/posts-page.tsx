import { usePostsControllerGetAllPosts } from '@/api/posts'

export const PostsPage = () => {
    const { data, isLoading } = usePostsControllerGetAllPosts()

    console.log(data)

    return !isLoading ? <div>Posts Page</div> : <div>Loading...</div>
}
