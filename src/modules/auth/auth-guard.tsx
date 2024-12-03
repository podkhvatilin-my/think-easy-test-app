import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import type { FC } from 'react'
import { AuthService } from '@/modules/auth'

import type { AuthGuardProps } from './model'

export const AuthGuard: FC<AuthGuardProps> = (props) => {
    const { Component } = props

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const authService = AuthService.getInstance()
        const authData = authService.getAuthData()

        if (!authData) {
            navigate('/login')

            return
        }

        setIsLoading(false)
    }, [navigate])

    return !isLoading ? <Component /> : <div>Loading...</div>
}
