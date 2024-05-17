import { useEffect, useRef, useState } from "react";
import { Col, Container, Image, InputGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import ButtonComponent from "../../components/Button";
import { createMessage, getMessages } from "../../redux/actions/message";
import "./chatroom.css";

const socket = io(import.meta.env.VITE_WEBSOCKET_API);

const ChatRoom = () => {
    const dispatch = useDispatch();

    const [message, setMessage] = useState("");
    const [typing, setTyping] = useState(false);

    const messagesGlobal = useSelector((state) => state.message.messages);
    const userGlobal = useSelector((state) => state.auth.user);

    const messageTime = (date) => {
        const messageDate = new Date(date);
        return messageDate.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    const sendMessage = (message) => {
        setMessage("");
        dispatch(
            createMessage({
                sender_id: userGlobal.id,
                message_content: message,
            })
        );
    };

    useEffect(() => {
        dispatch(getMessages());
    }, [dispatch]);

    useEffect(() => {
        socket.on("connect", () => {});

        socket.on("message", () => {
            dispatch(getMessages());
        });

        socket.on("ontyping", (username) => {
            setTyping(username + " is typing...");
            setTimeout(() => {
                setTyping(false);
            }, 1000);
        });
    }, [dispatch]);

    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({
                behavior: "smooth",
            });
        }
    };

    useEffect(() => {
        dispatch(getMessages());
    }, [dispatch]);

    useEffect(() => {
        scrollToBottom(); // Scroll to bottom when messages update
    }, [messagesGlobal]);

    return (
        <Container>
            <h1 className="mt-1 h1-chatroom">Chat Room</h1>

            <Container
                style={{
                    overflowY: "auto",
                    maxHeight: "70vh",
                }}
            >
                {/* get all messages */}
                {messagesGlobal &&
                    messagesGlobal.map((message, index) => (
                        <Row
                            key={index}
                            className={`mb-3 d-flex ${
                                message.sender_id === userGlobal.id
                                    ? "flex-row-reverse"
                                    : "flex-row"
                            } align-items-start`}
                        >
                            <Col xs="auto">
                                {message.User.photo && (
                                    <Image
                                        src={message.User.photo}
                                        alt="User"
                                        roundedCircle
                                        className="user-photo"
                                    />
                                )}
                            </Col>
                            <Col xs="auto">
                                <div
                                    className={`message-content ${
                                        message.sender_id === userGlobal.id
                                            ? "align-right"
                                            : "align-left"
                                    }`}
                                >
                                    {message.User.name && (
                                        <div className="message-username">
                                            {message.User.name}
                                        </div>
                                    )}
                                    <div
                                        className={`message-bubble ${
                                            message.sender_id === userGlobal.id
                                                ? "right"
                                                : "left"
                                        }`}
                                    >
                                        <p className="message">
                                            {message.message_content}
                                        </p>
                                        <p className="message-time">
                                            {messageTime(message.createdAt)}
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    ))}
                <div ref={messagesEndRef} />
            </Container>

            <Container className="input-container">
                <Row className="input-row">
                    {typing && (
                        <p
                            className="typing-text mb-3 ms-2"
                            style={{
                                position: "relative",
                                bottom: "35%",
                                width: "100%",
                            }}
                        >
                            {typing}
                        </p>
                    )}

                    {/* send message */}
                    <Col>
                        <InputGroup>
                            <input
                                className="input-chatroom"
                                type="text"
                                value={message}
                                onChange={(e) => {
                                    setMessage(e.target.value);
                                    socket.emit("typing", userGlobal.name);
                                }}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        sendMessage(message);
                                    }
                                }}
                                placeholder="Type your message here..."
                            />
                            <ButtonComponent
                                className="button-gs"
                                text="Send"
                                onClick={() => sendMessage(message)}
                            />
                        </InputGroup>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default ChatRoom;
