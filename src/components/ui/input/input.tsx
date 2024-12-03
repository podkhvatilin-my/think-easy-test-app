import { forwardRef, useId } from 'react'
import clsx from 'clsx'

import type { InputProps } from './model'

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const { label, errorMessage, type = 'text', ...restProps } = props

    const id = useId()

    return (
        <div className="flex flex-col gap-1 mb-3">
            {label && (
                <label htmlFor={id} className={clsx('text-black')}>
                    {label}
                </label>
            )}
            <input
                ref={ref}
                type={type}
                {...restProps}
                id={id}
                className={clsx(
                    'px-3 py-2 text-black border rounded-md focus:outline-2 focus:outline-offset-2 focus:outline-blue-600',
                    {
                        'border-red-500 focus:outline-red-600': errorMessage,
                    }
                )}
            />
            {errorMessage && <span className="text-red-500 text-xs">{errorMessage}</span>}
        </div>
    )
})

Input.displayName = 'Input'
