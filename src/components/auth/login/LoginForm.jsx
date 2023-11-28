import ServerWarning from "../../shared/ServerWarning";
import ValidationMessage from "../../shared/ValidationMessage";

function LoginForm() {
	return (
		<div className="flex mt-4 justify-center">
			<form className="bg-gray-800 p-8 w-full ">
				<ServerWarning>Login error message here</ServerWarning>
				<div className="form-control w-full max-w-md mx-auto">
					<label className="label">
						<span className="label-text">Email</span>
					</label>
					<input className="p-3" />
					<ValidationMessage>Error goes here</ValidationMessage>
				</div>
				<div className="form-control w-full max-w-md mx-auto">
					<label className="label">
						<span className="label-text">Password</span>
					</label>
					<input className="p-3" />
					<ValidationMessage>Error goes here</ValidationMessage>
				</div>
				<div className="form-control w-full max-w-md mx-auto">
					<button class="bg-secondary hover:bg-primary mt-2 text-white font-bold py-4 px-4 rounded">Button</button>
				</div>
			</form>
		</div>
	);
}

export default LoginForm;
