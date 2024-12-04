import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { SignUpFormSchema } from './schema'
import { Button, Input } from '@/components/ui'

import type { SignUpFormData, SignUpFormProps } from './model'

export const SignUpForm = (props: SignUpFormProps) => {
    const { onSubmit } = props

    const { handleSubmit, control, formState } = useForm<SignUpFormData>({
        resolver: zodResolver(SignUpFormSchema),
        defaultValues: {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
    })

    return (
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="firstname"
                control={control}
                render={({ field }) => (
                    <Input
                        label="First name"
                        placeholder="Bonnie"
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
                        placeholder="Green"
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
                        type="email"
                        label="Your email"
                        placeholder="name@company.com"
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
                        type="password"
                        label="Password"
                        placeholder="••••••••"
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
                        type="password"
                        label="Confirm password"
                        placeholder="••••••••"
                        errorMessage={formState.errors.confirmPassword?.message}
                        {...field}
                    />
                )}
            />
            <Button type="submit">Create an account</Button>
        </form>
    )
}
