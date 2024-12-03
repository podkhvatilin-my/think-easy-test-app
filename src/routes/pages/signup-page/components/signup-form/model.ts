export interface SignUpFormData {
	firstname: string
	lastname: string
	email: string
	password: string
	confirmPassword: string
}

export interface SignUpFormProps {
	onSubmit: (data: SignUpFormData) => void
}