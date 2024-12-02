import { useId } from 'react'
import clsx from "clsx";

import type { InputProps } from './model'

export function Input(props: InputProps) {
	const {
		label,
		type = 'text',
		...restProps
	} = props

	const id = useId()

	return (
		<div className="flex flex-col gap-1">
			{label && (
				<label htmlFor={id} className={clsx('text-black')}>
					{label}
				</label>
			)}
			<input
				type={type}
				{...restProps}
				id={id}
				className={clsx('px-3 py-2 text-black border rounded-md focus:outline-2 focus:outline-offset-2 focus:outline-blue-600')}
			/>
		</div>
	)
}