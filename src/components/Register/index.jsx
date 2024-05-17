import Form from "react-bootstrap/Form";
import ButtonComponent from "../../components/Button";
import { Link } from "react-router-dom";

function Register() {
    return (
        <Form onSubmit={""}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name *</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter name"
                    value={"name"}
                    onChange={""}
                    required
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email address *</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={"email"}
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
                    placeholder="Password"
                    value={"password"}
                    onChange={""}
                    required
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="confirmPassword">
                <Form.Label>Confirm Password *</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                    value={"confirmPassword"}
                    onChange={""}
                    required
                />
            </Form.Group>

            <Form.Group controlId="photo" className="mb-3">
                <Form.Label>Photo</Form.Label>
                <Form.Control type="file" onChange={""} />
            </Form.Group>

            <Link to="/reigster" className="text-center">
                <ButtonComponent text="Register" className="button-gs" />
            </Link>
        </Form>
    );
}

export default Register;
