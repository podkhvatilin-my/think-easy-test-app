import { redirect } from 'react-router-dom'
import { AuthService } from '@/modules/auth'

export const guestGuardLoader = () => {
    const authService = AuthService.getInstance()
    const authData = authService.getAuthData()

    return authData ? redirect('/posts') : null
}
