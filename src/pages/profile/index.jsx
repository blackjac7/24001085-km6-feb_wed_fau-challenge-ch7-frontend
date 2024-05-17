import { Col, Container, Form, Image, Row } from "react-bootstrap";
import bird from "../../assets/brand-logo-4.png";
import personal from "../../assets/undraw_icons_wdp4.svg";
import photo from "../../assets/undraw_pic_profile_re_7g2h.svg";
import NavbarComponent from "../../components/Navbar";
import "./profile.css";

const Profile = () => {
    return (
        <Container>
            <NavbarComponent />
            <Row className="justify-content-center mt-5">
                <Col md="6" className="text-center">
                    <Form>
                        <Row>
                            <Col>
                                <Image
                                    rounded
                                    className="img-fluid mb-3 photo-profile-page"
                                    src={photo}
                                />
                            </Col>
                            <Col>
                                <Image
                                    rounded
                                    className="img-fluid mb-3 photo-profile-page"
                                    src={bird}
                                />
                            </Col>
                        </Row>

                        <Form.Group controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                value="John Doe"
                                disabled
                            />
                        </Form.Group>
                        <br />
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                value="johdoe@mail.com"
                                disabled
                            />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            <Row className="justify-content-center mt-5">
                <Image style={{ maxWidth: "500px" }} src={personal} fluid />
            </Row>
        </Container>
    );
};

export default Profile;
