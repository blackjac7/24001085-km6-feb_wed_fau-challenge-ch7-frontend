import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import RegisterComponent from "../../components/Register";

const Register = () => {
  return (
      <Row>
        <Col md={6} className="offset-md-3">
            <RegisterComponent />
        </Col>
      </Row>
  );
};

export default Register;
