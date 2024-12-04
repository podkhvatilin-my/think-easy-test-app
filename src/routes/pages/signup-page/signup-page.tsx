import { useCallback } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuthControllerSignup } from '@/api/posts'
import { AuthService } from '@/modules/auth'
import { SignUpForm } from './components'

import type { SignUpFormData } from './components'

export const SignupPage = () => {
    const navigate = useNavigate()
    const { mutate } = useAuthControllerSignup({
        mutation: {
            onSuccess: ({ data }) => {
                const { accessToken, refreshToken } = data
                const authService = AuthService.getInstance()

                authService.setAuthData({ accessToken, refreshToken })
                navigate('/posts')
            },
        },
    })

    const handleSubmit = useCallback<(data: SignUpFormData) => void>(
        (data) => {
            const { firstname, lastname, email, password } = data

            mutate({
                data: {
                    firstname,
                    lastname,
                    email,
                    password,
                },
            })
        },
        [mutate]
    )

    return (
        <section className="flex flex-col items-center justify-center h-dvh bg-gray-50">
            <div className="p-6 w-full bg-white rounded-lg shadow sm:max-w-md">
                <h1 className="mb-5 text-xl text-center font-bold leading-tight tracking-tight text-gray-900">
                    Create an account
                </h1>
                <SignUpForm onSubmit={handleSubmit} />
                <p className="mt-3 text-sm font-light text-gray-500">
                    Already have an account?{' '}
                    <Link to="/login" className="font-medium text-blue-600 hover:underline">
                        Login here
                    </Link>
                </p>
            </div>
        </section>
    )
}
