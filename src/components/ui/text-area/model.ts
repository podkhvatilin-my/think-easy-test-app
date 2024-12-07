import type { HTMLProps } from 'react'

export interface TextAreaProps extends HTMLProps<HTMLTextAreaElement> {
    label?: string
    errorMessage?: string
}
