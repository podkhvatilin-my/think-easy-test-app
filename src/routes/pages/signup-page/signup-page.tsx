import { useCallback } from 'react'
import { SignUpForm } from './components'

import type { SignUpFormData } from './components'

export const SignupPage = () => {
    const handleSubmit = useCallback<(data: SignUpFormData) => void>((data) => {
        console.log(data)
    }, [])

    return (
        <section className="flex flex-col items-center justify-center h-dvh bg-gray-50">
            <div className="p-6 w-full bg-white rounded-lg shadow sm:max-w-md">
                <h1 className="mb-5 text-xl text-center font-bold leading-tight tracking-tight text-gray-900">
                    Create an account
                </h1>
                <SignUpForm onSubmit={handleSubmit} />
            </div>
        </section>
    )
}
