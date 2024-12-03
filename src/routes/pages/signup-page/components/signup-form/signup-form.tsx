import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { SignUpFormSchema } from './schema'
import { Button, Input } from '../../../../../components/ui'

import type { SignUpFormData, SignUpFormProps } from './model'

export function SignUpForm(props: SignUpFormProps) {
	const { onSubmit } = props

	const { handleSubmit, control, formState } = useForm<SignUpFormData>({
		resolver: zodResolver(SignUpFormSchema),
		defaultValues: {
			firstname: '',
			lastname: '',
			email: '',
			password: '',
			confirmPassword: ''
		}
	});

	return (
		<form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
			<Controller
				name="firstname"
				control={control}
				render={({ field }) => (
					<Input
						label="First name"
						placeholder="First name"
						errorMessage={formState.errors.firstname?.message}
						{...field}
					/>
				)}
			/>
			<Controller
				name="lastname"
				control={control}
				render={({ field }) => (
					<Input
						label="Last name"
						placeholder="Last name"
						errorMessage={formState.errors.lastname?.message}
						{...field}
					/>
				)}
			/>
			<Controller
				name="email"
				control={control}
				render={({ field }) => (
					<Input
						label="Email"
						placeholder="Email"
						errorMessage={formState.errors.email?.message}
						{...field}
					/>
				)}
			/>
			<Controller
				name="password"
				control={control}
				render={({ field }) => (
					<Input
						label="Password"
						placeholder="Password"
						errorMessage={formState.errors.password?.message}
						{...field}
					/>
				)}
			/>
			<Controller
				name="confirmPassword"
				control={control}
				render={({ field }) => (
					<Input
						label="Confirm password"
						placeholder="Confirm password"
						errorMessage={formState.errors.confirmPassword?.message}
						{...field}
					/>
				)}
			/>
			<Button type="submit">Login</Button>
		</form>
	)
}