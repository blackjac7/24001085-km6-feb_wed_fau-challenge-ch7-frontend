import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../assets/salingchat-logo.png";
import "./navbar.css"; // Make sure this path is correct
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile, logout } from "../../redux/actions/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import ButtonComponent from "../Button";

const NavbarComponent = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user, token } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(getProfile());
    }, [dispatch, token]);

    return (
        <Navbar bg="white" expand="lg" className="navbar-bottom-shadow">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <span>
                        <img src={logo} alt="Logo" className="navbar-logo" />
                        SalingChat
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {user ? (
                        <Nav className="me-auto d-flex align-items-center justify-content-center">
                            <Nav.Link as={Link} to="/profile">
                                Profile
                            </Nav.Link>
                            <Nav.Link as={Link} to="/chatroom">
                                Chat Room
                            </Nav.Link>
                        </Nav>
                    ) : (
                        <Nav className="me-auto d-flex align-items-center justify-content-center">
                            <Nav.Link as={Link} to="/">
                                Home
                            </Nav.Link>
                            <Nav.Link as={Link} to="/about">
                                About
                            </Nav.Link>
                        </Nav>
                    )}
                    {user && (
                        <Nav className="ms-auto d-flex align-items-center justify-content-center">
                            <Nav.Link
                                className="text-danger logout-nav-button"
                                onClick={() => {
                                    dispatch(logout());
                                    navigate("/login");
                                }}
                            >
                                Logout
                            </Nav.Link>
                        </Nav>
                    )}
                    {!user && (
                        <Nav className="ms-auto d-flex align-items-center justify-content-center">
                            <Nav.Link className="me-2" as={Link} to="/login">
                                <ButtonComponent
                                    text="Login"
                                    className="login-nav-button"
                                />
                            </Nav.Link>
                            <Nav.Link as={Link} to="/register">
                                <ButtonComponent
                                    text="Register"
                                    className="register-nav-button"
                                />
                            </Nav.Link>
                        </Nav>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;
