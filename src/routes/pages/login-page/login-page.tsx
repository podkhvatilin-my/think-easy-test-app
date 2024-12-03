import { useCallback } from 'react'
import { LoginForm } from './components'

import type { LoginFormData } from './components'

export function LoginPage() {
	const handleSubmit = useCallback<(data: LoginFormData) => void>((data) => {
		console.log(data)
	}, [])

	return (
		<section className="flex flex-col items-center justify-center h-dvh bg-gray-50">
			<div className="p-6 w-full bg-white rounded-lg shadow sm:max-w-md">
				<h1 className="mb-5 text-xl text-center font-bold leading-tight tracking-tight text-gray-900">
					Welcome back
				</h1>
				<LoginForm onSubmit={handleSubmit}/>
			</div>
		</section>

	)
}