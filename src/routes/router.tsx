import { createBrowserRouter, redirect } from 'react-router-dom'

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
				element: <LoginPage />
			},
			{
				path: 'signup',
				element: <SignupPage />
			},
			{
				path: 'posts',
				element: <PostsPage />
			},
			{
				path: '*',
				loader: () => redirect('/'),
			},
		]
	}
])