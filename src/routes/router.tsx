import { createBrowserRouter, redirect } from 'react-router-dom'
import { guestGuardLoader, authGuardLoader } from './guards'
import { DefaultLayout } from './layouts'
import { LoginPage } from './pages/login-page'
import { SignupPage } from './pages/signup-page'
import { PostsPage } from './pages/posts-page'
import { CreatePostPage } from './pages/create-post-page'
import { UserPosts } from './pages/user-posts'
import { PostPage } from './pages/post-page'

export const router = createBrowserRouter([
    {
        path: '/',
        children: [
            { index: true, loader: () => redirect('posts') },
            {
                path: 'login',
                element: <LoginPage />,
                loader: guestGuardLoader,
            },
            {
                path: 'signup',
                element: <SignupPage />,
                loader: guestGuardLoader,
            },
            {
                path: 'posts',
                loader: authGuardLoader,
                element: <DefaultLayout />,
                children: [
                    { index: true, element: <PostsPage /> },
                    { path: 'create', element: <CreatePostPage /> },
                    { path: 'user/:authorId', element: <UserPosts /> },
                    { path: ':postId', element: <PostPage /> },
                ],
            },
            {
                path: '*',
                loader: () => redirect('/'),
            },
        ],
    },
])
