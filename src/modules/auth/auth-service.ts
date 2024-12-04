import type { AuthData } from './model'

export class AuthService {
    static instance: AuthService

    private readonly STORAGE_AUTH_KEY: string

    constructor() {
        this.STORAGE_AUTH_KEY = 'auth_data'
        this.setAuthData = this.setAuthData.bind(this)
        this.getAuthData = this.getAuthData.bind(this)
        this.clearAuthData = this.clearAuthData.bind(this)
    }

    static getInstance() {
        if (!AuthService.instance) {
            AuthService.instance = new AuthService()
        }

        return AuthService.instance
    }

    setAuthData(authData: AuthData) {
        localStorage.setItem(this.STORAGE_AUTH_KEY, JSON.stringify(authData))
    }

    getAuthData() {
        const authData = localStorage.getItem(this.STORAGE_AUTH_KEY)

        return authData ? (JSON.parse(authData) as AuthData) : undefined
    }

    clearAuthData() {
        localStorage.removeItem(this.STORAGE_AUTH_KEY)
    }
}
