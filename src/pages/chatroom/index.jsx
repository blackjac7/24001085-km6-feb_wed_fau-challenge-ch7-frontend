import { useEffect, useRef, useState } from "react";
import { Container, Image, InputGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ButtonComponent from "../../components/Button";
import { createMessage, getMessages } from "../../redux/actions/message";
import "./chatroom.css";

const ChatRoom = () => {
    const [message, setMessage] = useState("");
    const dispatch = useDispatch();
    const messagesEndRef = useRef(null);

    const messagesGlobal = useSelector((state) => state.message.messages);
    const userGlobal = useSelector((state) => state.auth.user);

    const messageTime = (date) => {
        const messageDate = new Date(date);
        return messageDate.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    const scrollToBottom = () => {
        if (messagesEndRef.current) {
        messagesEndRef.current.scrollIntoView({
          behavior: "smooth",
        });
}    };

    const sendMessage = (message) => {
        if (!message.trim()) return; // Don't send empty messages
        dispatch(
            createMessage({
                sender_id: userGlobal.id,
                message_content: message,
            })
        );
        setMessage(""); // Clear the input field after sending message
        scrollToBottom();
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
              <div key={index} className="mb-3">
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
                  <p className="message">{message.message_content}</p>
                  <p className="message-time">
                    {messageTime(message.createdAt)}
                  </p>
                </div>
              </div>
            ))}
          <div ref={messagesEndRef} />
        </Container>

        <Container className="input-container">
          <Row className="input-row">
            {/* send message */}
            <InputGroup>
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
      </Container>
    );
};

export default ChatRoom;
