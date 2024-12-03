import type { HTMLProps, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger'

export interface ButtonProps extends HTMLProps<HTMLButtonElement> {
    children?: ReactNode
    variant?: ButtonVariant
    type?: 'button' | 'submit' | 'reset' | undefined
}
