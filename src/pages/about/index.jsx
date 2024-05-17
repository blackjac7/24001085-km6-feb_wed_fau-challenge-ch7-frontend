import { Col, Container, Image, Row } from "react-bootstrap";
import bubbleHi from "../../assets/bubble-hi.png";
import loveEmote from "../../assets/image-5.png";
import teamSpirit from "../../assets/undraw_team_spirit_re_yl1v.svg";
import "./about.css";

const About = () => {
    return (
        <Container>
            <Row className="justify-content-center mt-5">
                <Col md="2">
                    <Image
                        className="emote"
                        src={bubbleHi}
                        alt="Group Chat"
                        fluid
                    />
                </Col>
                <Col md="8" className="text-center">
                    <h1 className="text-center">
                        Get to <span className="first-text">Know</span> Us
                        Better!
                    </h1>
                    <p>
                        <span className="first-text">Helloo!!</span> Thank you
                        for choosing{" "}
                        <span className="about-logo-text">SalingChat</span> as
                        your chatting platform.
                    </p>
                    <p>
                        Here at{" "}
                        <span className="about-logo-text">SalingChat</span>, we
                        ( Febriansyah, Muhammad Fauzan Ramdhani, and Wedens Elma
                        Malau ) are a team of developers who are dedicated to
                        crafting a platform that allows you to chat with other
                        users in real-time. Your support means the world to us,
                        and we&apos;d be thrilled if you spread the word to your
                        friends.
                    </p>
                    <p>
                        If you encounter any pesky bugs while using{" "}
                        <span className="about-logo-text">SalingChat</span>,
                        don&apos;t hesitate to reach out to us. You can contact
                        us on our GitHub profiles:
                    </p>
                    <ul>
                        <li>
                            <a
                                href="https://github.com/blackjac7"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Febriansyah
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/FauzanR06"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Muhammad Fauzan Ramdhani
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/wedens-elma"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Wedens Elma Malau
                            </a>
                        </li>
                    </ul>
                    <p>
                        Thank you for joining us on this journey. Let&apos;s
                        chat away with{" "}
                        <span className="about-logo-text">SalingChat!</span>
                    </p>
                </Col>
                <Col
                    md="2"
                    className="justify-content-md-center d-flex align-items-center"
                >
                    <Image
                        className="emote"
                        src={loveEmote}
                        alt="Love Emote"
                        fluid
                    />
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Image
                    style={{ maxWidth: "500px" }}
                    src={teamSpirit}
                    alt="team spirit"
                    fluid
                />
            </Row>
        </Container>
    );
};

export default About;
