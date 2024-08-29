import React from "react";
import "./ChatBox.css";

interface ChatBoxProps {
  messages: {
    id: string;
    senderId: string;
    senderName: string;
    content: string;
  }[];
}

const ChatBox: React.FC<ChatBoxProps> = ({ messages }) => {
  return (
    <div className="Container">
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
