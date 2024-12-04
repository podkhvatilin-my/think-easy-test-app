import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginFormSchema } from './schema'
import { Button, Input } from '@/components/ui'

import type { LoginFormData, LoginFormProps } from './model'

export const LoginForm = (props: LoginFormProps) => {
    const { onSubmit } = props

    const { handleSubmit, control, formState } = useForm<LoginFormData>({
        resolver: zodResolver(LoginFormSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    })

    return (
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
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
            <Button type="submit">Login</Button>
        </form>
    )
}
