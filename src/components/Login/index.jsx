import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/auth";
import Form from "react-bootstrap/Form";
import ButtonComponent from "../../components/Button";

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();

        dispatch(login(navigate, email, password));
    };

    return (
        <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email address *</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </Form.Group>

            <ButtonComponent
                text="Login"
                type="submit"
                className="button-gs btn-full-width"
            />
        </Form>
    );
}

export default Login;
