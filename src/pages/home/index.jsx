import { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import logo from "../../assets/salingchat-logo.png";
import hero from "../../assets/undraw_group_chat_re_frmo.svg";
import bird from "../../assets/undraw_quick_chat_re_bit5.svg";
import ButtonComponent from "../../components/Button";
import "./home.css";

export const HomePage = () => {
	const fullText = "SalingChat";
	const [text, setText] = useState("");
	const [index, setIndex] = useState(0);

	useEffect(() => {
		if (index < fullText.length) {
			setTimeout(() => {
				setText(text + fullText[index]);
				setIndex(index + 1);
			}, 100);
		}
	}, [text, index]);

	return (
		<Container>
			<Row className="justify-content-center mt-5">
				<Col sm="4" md="4">
					<Image id="logo" src={logo} alt="SalingChat" fluid />
				</Col>
				<Col sm="8" md="8" className="pt-3">
					<h1 style={{ color: "#4A4A4A", fontWeight: 600 }}>
						Welcome to <span className="text-logo ps-2">{text}</span>
					</h1>
					<p className="limited-width">
						SalingChat is a simple chat application that allows you to chat with
						other users.
					</p>
				</Col>
			</Row>
			<hr />
			<Row className="justify-content-center mt-5">
				<Col md="6" className="mt-4">
					<Image src={hero} alt="Group Chat" fluid />
				</Col>
				<Col md="6" className="mt-4">
					<h2 id="heading-2-home">
						Chat with Other People Around the{" "}
						<span className="text-highlight">World</span>
					</h2>
					<p>
						SalingChat allows you to chat with other people in{" "}
						<span style={{ fontWeight: "bold" }}>real-time.</span> Find meaning
						in every message.{" "}
						<span style={{ fontWeight: "bold" }}>Distance</span> isn&apos;t a
						barrier, SalingChat will{" "}
						<span style={{ fontWeight: "bold" }}>connect</span> you!!
					</p>
					<ButtonComponent text="Get Started" type="button-gs" />

					<p>
						Already have an account?{" "}
						<a href="#" className="text-highlight-link">
							Login
						</a>
					</p>
					<Image className="mt-3 ps-5" src={bird} alt="Quick Chat" fluid />
				</Col>
			</Row>
		</Container>
	);
};

export default HomePage;
