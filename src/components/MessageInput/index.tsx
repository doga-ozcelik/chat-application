import React, { useState } from "react";
import "./MessageInput.css";
import { Message } from "../../types";

interface MessageInputProps {
  onSendMessage: (message: Message) => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ onSendMessage }) => {
  const [input, setInput] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSendMessage({
        id: Math.random().toString(36).substr(2, 9),
        senderId: "user",
        senderName: "You",
        content: input,
      });
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="Input-container">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
        className="Input"
      />
      <button type="submit" className="Button">
        Send
      </button>
    </form>
  );
};

export default MessageInput;
