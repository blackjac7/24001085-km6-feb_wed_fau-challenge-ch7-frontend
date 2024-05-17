import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../assets/salingchat-logo.png";
import "./navbar.css"; // Make sure this path is correct

const NavbarComponent = () => {
	return (
		<Navbar bg="white" expand="lg" className="navbar-bottom-shadow">
			<Container>
				<Navbar.Brand href="/">
					<span>
						<img src={logo} alt="Logo" className="navbar-logo" />
						SalingChat
					</span>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="/about">About</Nav.Link>
						<Nav.Link href="/chat-rooms">Chat Rooms</Nav.Link>
						<Nav.Link
							onClick={() => {
								dispatch(logout());
								navigate("/login");
							}}
						>
							Logout
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavbarComponent;
