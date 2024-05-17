import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import LoginComponent from "../../components/Login";

const Login = () => {
    return (
        <Container>
            <Row>
                <Col md={6} className="offset-md-3">
                    <LoginComponent />
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
