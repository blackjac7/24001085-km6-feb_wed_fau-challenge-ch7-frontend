import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMessages, createMessage } from "../../redux/actions/message";
import { Container, InputGroup, Row, Image } from "react-bootstrap";
import ButtonComponent from "../../components/Button";
import "./chatroom.css";

const ChatRoom = () => {
    const [message, setMessage] = useState("");
    const dispatch = useDispatch();

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
        // Send the message to the server or any other destination
        // and update the messages state
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
                {/* send message */}
                <InputGroup
                    className="mb-3"
                    style={{ position: "fixed", bottom: "5%", width: "100%" }}
                >
                    <input
                        className="input-chatroom"
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
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
