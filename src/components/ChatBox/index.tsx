import React, { useRef } from "react";
import "./ChatBox.css";
import { Message } from "../../types";
import useScrollToBottom from "../../hooks/useScrollToBottom";

interface ChatBoxProps {
  messages: Message[];
}

const ChatBox: React.FC<ChatBoxProps> = ({ messages }) => {
  const chatBoxRef = useRef<HTMLDivElement>(null);

  useScrollToBottom(chatBoxRef, messages);

  return (
    <div className="Chat-box-container" ref={chatBoxRef}>
      {messages.map((message, index) => (
        <div key={index} className="Message">
          <hr
            className="Divider"
            style={index === 0 ? { display: "none" } : {}}
          />
          <div className="Content">
            <div className="Sender">{message.senderName[0]}</div>
            {message.type === "text" ? (
              <p className="Text">{message.content}</p>
            ) : (
              <img src={message.content} alt="Random Img" className="Image" />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatBox;
