import Form from "react-bootstrap/Form";
import ButtonComponent from "../../components/Button";

function Login() {
	return (
		<Form onSubmit={""}>
			<Form.Group className="mb-3" controlId="email">
				<Form.Label>Email address *</Form.Label>
				<Form.Control
					type="email"
					placeholder="Enter your email"
					onChange={""}
					required
				/>
				<Form.Text className="text-muted">
					We will never share your email with anyone else.
				</Form.Text>
			</Form.Group>

			<Form.Group className="mb-3" controlId="password">
				<Form.Label>Password *</Form.Label>
				<Form.Control
					type="password"
					placeholder="Enter your password"
					onChange={""}
					required
				/>
			</Form.Group>

			<ButtonComponent
				text="Login"
				type="button-gs"
				className="btn-full-width"
			/>
		</Form>
	);
}

export default Login;
