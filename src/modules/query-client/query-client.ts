import { QueryClient } from '@tanstack/react-query'
import { httpClientSetup } from './http-client-setup'

export function getQueryClient() {
    httpClientSetup()

    return new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
            },
        },
    })
}
