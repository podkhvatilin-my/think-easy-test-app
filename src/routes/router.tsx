import { createBrowserRouter, redirect } from 'react-router-dom'
import { AuthGuard } from '@/modules/auth'

import { LoginPage } from './pages/login-page'
import { SignupPage } from './pages/signup-page'
import { PostsPage } from './pages/posts-page'

export const router = createBrowserRouter([
    {
        path: '/',
        children: [
            { index: true, loader: () => redirect('posts') },
            {
                path: 'login',
                element: <LoginPage />,
            },
            {
                path: 'signup',
                element: <SignupPage />,
            },
            {
                path: 'posts',
                element: <AuthGuard Component={PostsPage} />,
            },
            {
                path: '*',
                loader: () => redirect('/'),
            },
        ],
    },
])
