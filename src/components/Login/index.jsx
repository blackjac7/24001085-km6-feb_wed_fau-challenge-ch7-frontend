import React from "react";
import Form from "react-bootstrap/Form";
import ButtonComponent from "../../components/Button";
import "./login.css"; // Make sure this path is correct

function Login() {
	return (
		<div className="login-container">
			<h2 className="login-header">Login</h2>
			<Form onSubmit={""}>
				<Form.Group className="mb-3" controlId="email">
					<Form.Label>Email address *</Form.Label>
					<Form.Control
						type="email"
						placeholder="Enter your email"
						onChange={""}
						required
					/>
					<Form.Text className="text-muted form-text">
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
		</div>
	);
}

export default Login;
