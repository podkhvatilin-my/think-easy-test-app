import { forwardRef } from 'react'
import clsx from 'clsx'

import type { ButtonProps } from './model'

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const { children, variant = 'primary', type = 'button', ...restProps } = props

    return (
        <button
            ref={ref}
            type={type}
            {...restProps}
            className={clsx(
                'px-3 py-2 font-medium border-2 rounded-md transition-colors ease-out select-none focus:z-10 focus:outline-none focus:ring-4',
                {
                    'text-white bg-blue-500 border-blue-500 hover:bg-blue-600 hover:border-blue-600 focus:ring-blue-400':
                        variant === 'primary',
                    'text-blue-500 bg-white border-blue-500 hover:text-blue-600 hover:border-blue-600 focus:ring-blue-400':
                        variant === 'secondary',
                    'text-white bg-green-500 border-green-500 hover:bg-green-600 hover:border-green-600 focus:ring-green-400':
                        variant === 'success',
                    'text-white bg-yellow-500 border-yellow-500 hover:bg-yellow-600 hover:border-yellow-600 focus:ring-yellow-400':
                        variant === 'warning',
                    'text-white bg-red-500 border-red-500 hover:bg-red-600 hover:border-red-600 focus:ring-red-400':
                        variant === 'danger',
                }
            )}
        >
            {children}
        </button>
    )
})

Button.displayName = 'Button'
