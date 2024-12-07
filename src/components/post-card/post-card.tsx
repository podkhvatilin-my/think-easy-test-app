import { Link } from 'react-router-dom'
import type { FC } from 'react'
import { formatPostDate } from './functions'

import type { PostCardProps } from './model'

export const PostCard: FC<PostCardProps> = (props) => {
    const { post } = props

    return (
        <article className="block p-6 bg-white border border-gray-200 rounded-lg shadow">
            <time className="block text-sm leading-6 text-slate-500">{formatPostDate(post.createdAt)}</time>
            <Link
                to={`/posts/user/${post.authorId}`}
                className="inline-flex items-center font-medium text-blue-500 hover:text-blue-600"
            >
                Author: {post.authorId}
            </Link>
            <h5 className="mt-2 text-lg font-semibold text-slate-900">{post.title}</h5>
            <p className="line-clamp-3 mt-4 text-sm leading-6 text-slate-500">{post.content}</p>
            <Link
                to={`/posts/${post.id}`}
                className="inline-flex items-center font-medium text-blue-500 hover:text-blue-600"
            >
                Learn more
                <svg
                    className=" w-2.5 h-2.5 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 9 4-4-4-4"
                    />
                </svg>
            </Link>
        </article>
    )
}
