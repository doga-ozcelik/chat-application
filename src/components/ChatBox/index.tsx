import React from "react";

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
        <div key={index}>{message.content}</div>
      ))}
    </div>
  );
};

export default ChatBox;
