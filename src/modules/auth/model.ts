import type { ComponentType } from 'react'

export interface AuthData {
    accessToken?: string
    refreshToken?: string
}

export interface AuthGuardProps {
    Component: ComponentType<object>
}
