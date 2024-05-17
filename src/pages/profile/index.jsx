import { Col, Container, Form, Image, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import bird from "../../assets/brand-logo-4.png";
import personal from "../../assets/undraw_icons_wdp4.svg";
import photoDefault from "../../assets/undraw_pic_profile_re_7g2h.svg";
import ButtonComponent from "../../components/Button";
import "./profile.css";

const Profile = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const getProfile = async (token) => {
        setLoading(true);

        let config = {
            method: "get",
            maxBodyLength: Infinity,
            url: `${import.meta.env.VITE_BACKEND_API}/api/auth/profile`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        try {
            const response = await axios.request(config);
            const { data } = response.data;

            if (data.photo === null) {
                data.photo = photoDefault;
            }

            setUser(data);
        } catch (error) {
            setUser(null);
            localStorage.removeItem("token");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            getProfile(token);
        }
    }, []);

    if (loading) {
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "50vh",
                }}
            >
                <h1>Loading...</h1>
                <Spinner animation="border" />
            </div>
        );
    }

    return (
        <Container>
            <Row className="justify-content-center mt-5">
                <Col md="6" className="text-center">
                    <Form>
                        <Row>
                            <Col>
                                <Image
                                    rounded
                                    className="img-fluid mb-3 photo-profile-page"
                                    src={user?.photo}
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
                                value={user?.name}
                                disabled
                            />
                        </Form.Group>
                        <br />
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                value={user?.email}
                                disabled
                            />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            <div className="d-flex justify-content-center mt-3">
                <Link to="/edit-profile">
                    <ButtonComponent
                        text="Edit Profile"
                        className="button-gs"
                    />
                </Link>
            </div>
            <Row className="justify-content-center mt-5">
                <Image style={{ maxWidth: "500px" }} src={personal} fluid />
            </Row>
        </Container>
    );
};

export default Profile;
