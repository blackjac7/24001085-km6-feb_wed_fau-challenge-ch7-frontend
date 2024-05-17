import { useEffect, useState } from "react";
import { Container, Image, InputGroup, Row } from "react-bootstrap";
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

    return (
        <Container>
            <h1 className="mt-1 h1-chatroom">Chat Room</h1>

            <Container style={{ paddingBottom: "100px" }}>
                {/* get all messages */}
                {messagesGlobal &&
                    messagesGlobal.map((message, index) => (
                        <div key={index} className="mb-4">
                            <div className="message-user">
                                <Image
                                    src={message.User.photo}
                                    alt="User"
                                    roundedCircle
                                    className="user-photo"
                                />
                                {message.User.name}
                            </div>
                            <div className="message-bubble">
                                <p className="message">
                                    {message.message_content}
                                </p>
                                <p className="message-time">
                                    {messageTime(message.createdAt)}
                                </p>
                            </div>
                        </div>
                    ))}
            </Container>

            <Row>
                {typing && (
                    <p
                        className="typing-text mb-3 ms-2"
                        style={{
                            position: "fixed",
                            bottom: "12%",
                            width: "100%",
                        }}
                    >
                        {typing}
                    </p>
                )}
                {/* send message */}
                <InputGroup
                    className="mb-3"
                    style={{ position: "fixed", bottom: "5%", width: "100%" }}
                >
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
            </Row>
        </Container>
    );
};

export default ChatRoom;
