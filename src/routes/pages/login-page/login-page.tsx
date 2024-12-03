import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthControllerLogin } from '@/api/posts'
import { AuthService } from '@/modules/auth'
import { LoginForm } from './components'

import type { LoginFormData } from './components'

export const LoginPage = () => {
    const navigate = useNavigate()
    const { mutate } = useAuthControllerLogin({
        mutation: {
            onSuccess: ({ data }) => {
                const { accessToken, refreshToken } = data
                const authService = AuthService.getInstance()

                authService.setAuthData({ accessToken, refreshToken })
                navigate('/posts')
            },
        },
    })

    const handleSubmit = useCallback<(data: LoginFormData) => void>(
        (data) => {
            mutate({ data })
        },
        [mutate]
    )

    return (
        <section className="flex flex-col items-center justify-center h-dvh bg-gray-50">
            <div className="p-6 w-full bg-white rounded-lg shadow sm:max-w-md">
                <h1 className="mb-5 text-xl text-center font-bold leading-tight tracking-tight text-gray-900">
                    Welcome back
                </h1>
                <LoginForm onSubmit={handleSubmit} />
            </div>
        </section>
    )
}
