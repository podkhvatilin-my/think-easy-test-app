import { createBrowserRouter, redirect } from 'react-router-dom'
import { guestGuardLoader, authGuardLoader } from './guards'
import { LoginPage } from './pages/login-page'
import { SignupPage } from './pages/signup-page'
import { PostsPage } from './pages/posts-page'
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
                element: <PostsPage />,
                loader: authGuardLoader,
            },
            {
                path: 'posts/:postId',
                element: <PostPage />,
                loader: authGuardLoader,
            },
            {
                path: '*',
                loader: () => redirect('/'),
            },
        ],
    },
])
