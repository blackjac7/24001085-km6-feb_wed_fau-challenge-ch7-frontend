import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ButtonComponent from "../../components/Button";
import { register } from "../../redux/actions/auth";
import "./register.css";

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [photo, setPhoto] = useState();

  const onSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Password and confirm password must be same!");
      return;
    }

    dispatch(register(navigate, name, email, password, gender, photo));
  };

  return (
    <Form onSubmit={onSubmit} className="register-form">
      <h2 className="register-header">Register</h2>
      <Row>
        <Col md="6">
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name *</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-0" controlId="email">
            <Form.Label>Email address *</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Form.Text className="text-muted small">
              We will never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="gender">
            <Form.Label>Gender *</Form.Label>
            <Form.Select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value="" hidden>
                Select Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md="6">
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

          <Form.Group className="mb-0" controlId="confirmPassword">
            <Form.Label>Confirm Password *</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <Form.Text className="text-muted small">
              Please enter the same password as the one above.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="photo" className="mb-3">
            <Form.Label>Photo</Form.Label>
            <Form.Control
              type="file"
              onChange={(e) => setPhoto(e.target.files[0])}
            />
          </Form.Group>
        </Col>
      </Row>
      <ButtonComponent
        text="Register"
        type="submit"
        className="button-gs btn-full-width"
      />

      <div className="text-center mt-3">
        <span>Already have an account? </span>
        <Link to="/login" className="register-link">
          Login
        </Link>
      </div>
    </Form>
  );
}

export default Register;
