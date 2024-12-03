import axios from 'axios'
import { AuthService } from '@/modules/auth'
import { authControllerRefreshToken } from '@/api/posts'

export function httpClientSetup() {
    axios.interceptors.request.use(
        (config) => {
            const authService = AuthService.getInstance()
            const authData = authService.getAuthData()

            if (authData) {
                // eslint-disable-next-line no-param-reassign
                config.headers.Authorization = `Bearer ${authData.accessToken}`
            }

            return config
        },
        (error) => Promise.reject(error)
    )

    axios.interceptors.response.use(
        (response) => {
            return response
        },
        async (error) => {
            const status = error.response ? error.response.status : null
            const originalRequest = error.config
            const authService = AuthService.getInstance()
            const authData = authService.getAuthData()

            if (status === 401 && authData?.refreshToken) {
                try {
                    const {
                        data: { access_token },
                    } = await authControllerRefreshToken({ token: authData.refreshToken })

                    authService.setAuthData({ accessToken: access_token })

                    axios.defaults.headers.common.Authorization = `Bearer ${access_token}`

                    return await axios(originalRequest)
                } catch (err) {
                    return Promise.reject(err)
                }
            }

            if (status === 403 && error.response.data) {
                return Promise.reject(error.response.data)
            }

            return Promise.reject(error)
        }
    )
}
