import React from "react";
import "./ChatBox.css";
import { Message } from "../../types";

interface ChatBoxProps {
  messages: Message[];
}

const ChatBox: React.FC<ChatBoxProps> = ({ messages }) => {
  return (
    <div className="Chat-box-container">
      {messages.map((message, index) => (
        <div key={index} className="Message">
          <hr className="Divider" />
          <div className="Content">
            <div className="Sender">{message.senderName[0]}</div>
            <p className="Text">{message.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatBox;
