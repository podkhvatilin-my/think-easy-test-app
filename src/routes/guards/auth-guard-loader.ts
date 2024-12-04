import { redirect } from 'react-router-dom'
import { AuthService } from '@/modules/auth'

export const authGuardLoader = () => {
    const authService = AuthService.getInstance()
    const authData = authService.getAuthData()

    return !authData ? redirect('/login') : null
}
