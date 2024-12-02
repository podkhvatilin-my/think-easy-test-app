import { Button, Input } from '../../../components/ui'

export function LoginPage() {
	return (
		<>
			<div className="flex gap-1 p-2">
				<h2 className="mr-5">Buttons</h2>
				<Button>
					Primary
				</Button>
				<Button variant="secondary">
					Secondary
				</Button>
				<Button variant="success">
					Success
				</Button>
				<Button variant="warning">
					Warning
				</Button>
				<Button variant="danger">
					Danger
				</Button>
			</div>

			<div className="flex flex-col gap-1 p-2">
				<h2 className="mr-5">Inputs</h2>
				<Input placeholder="Name"/>
				<Input label="Name" placeholder="Name"/>
			</div>
		</>
	)
}