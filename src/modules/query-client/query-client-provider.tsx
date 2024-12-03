import { QueryClientProvider as Provider } from '@tanstack/react-query'
import type { FC, PropsWithChildren } from 'react'
import { getQueryClient } from './query-client'

const queryClient = getQueryClient()

export const QueryClientProvider: FC<PropsWithChildren> = (props) => {
    const { children } = props

    return <Provider client={queryClient}>{children}</Provider>
}
