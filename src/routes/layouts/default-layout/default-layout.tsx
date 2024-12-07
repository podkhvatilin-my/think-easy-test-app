import { Outlet, Link, useNavigate, useMatch } from 'react-router-dom'
import { AuthService } from '@/modules/auth'
import { Button } from '@/components/ui'

export const DefaultLayout = () => {
    const createPostRouteMatch = useMatch('/posts/create')
    const navigate = useNavigate()

    const handleLogOut = () => {
        const authService = AuthService.getInstance()

        authService.clearAuthData()
        navigate('/login')
    }

    return (
        <section className="flex flex-col items-center pt-20 pb-4 min-h-dvh bg-gray-50">
            <header className="fixed z-20 top-0 start-0 flex justify-end items-center gap-5 px-3 w-full h-16 bg-white border-b border-gray-200">
                {!createPostRouteMatch && (
                    <Link to="/posts/create" className="font-medium text-blue-500 hover:underline">
                        Add new post
                    </Link>
                )}
                <Button variant="danger" onClick={handleLogOut}>
                    Log Out
                </Button>
            </header>
            <Outlet />
        </section>
    )
}
